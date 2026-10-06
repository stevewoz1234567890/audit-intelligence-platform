/* Browser smoke test. Requires headless Chrome running with --remote-debugging-port=9339. */
const assert = require('node:assert/strict');
const http = require('node:http');
const {pathToFileURL} = require('node:url');
const path = require('node:path');

function get(path){
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9339' + path, res => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve(JSON.parse(body)));
    }).on('error', reject);
  });
}

(async () => {
  const pages = await get('/json/list');
  const page = pages.find(x => x.type === 'page');
  assert(page, 'Chrome must have an open page');
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let seq = 0;
  const pending = new Map();
  socket.onmessage = ({data}) => {
    const msg = JSON.parse(data);
    if (pending.has(msg.id)) {
      const [resolve, reject] = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(Error(msg.error.message)); else resolve(msg.result);
    }
  };
  function send(method, params = {}){
    return new Promise((resolve, reject) => {
      const id = ++seq;
      pending.set(id, [resolve, reject]);
      socket.send(JSON.stringify({id, method, params}));
    });
  }
  async function evalJS(expression){
    const r = await send('Runtime.evaluate', {expression, returnByValue:true, awaitPromise:true});
    if (r.exceptionDetails) throw Error(r.exceptionDetails.text);
    return r.result.value;
  }
  const url = pathToFileURL(path.resolve(__dirname, '..', 'standards.html')).href + '?domain=public-sector';
  await send('Page.navigate', {url});
  for (let i = 0; i < 40; i++) {
    if (await evalJS('!!document.querySelector(".public-sector [role=tab]")')) break;
    await new Promise(r => setTimeout(r, 100));
  }
  assert.equal(await evalJS('document.querySelectorAll(".public-sector [role=tab]").length'), 5);
  assert.equal(await evalJS('document.querySelectorAll(".public-sector [role=tabpanel]:not([hidden])").length'), 1);
  assert.equal(await evalJS('document.querySelector(".public-sector [role=tabpanel]:not([hidden])").id'), 'ps-overview');
  assert.equal(await evalJS('document.querySelectorAll(".ps-cards .ps-card").length'), 3);
  assert.equal(await evalJS('document.body.classList.contains("public-sector-page")'), true);
  assert.equal(await evalJS('document.querySelector(".ps-page-note").textContent === PUBLIC_SECTOR.classification'), true);
  assert.equal(await evalJS('Array.from(document.querySelectorAll(".ps-cards .ps-card")).every(card => card.querySelector(":scope > .ic") && card.querySelector(".ps-card-content .ps-explore"))'), true);
  assert.equal(await evalJS('getComputedStyle(document.querySelector("#tab-ps-overview")).borderRadius'), '20px');
  assert.equal(await evalJS('document.querySelectorAll(".nav-guidance .public-app").length'), 1);
  assert.equal(await evalJS('document.querySelector(".nav-guidance a:last-child").getAttribute("href")'), 'standards.html');
  assert.equal(await evalJS('document.querySelectorAll(".pr-body a[data-ref]").length'), 52);
  assert.equal(await evalJS('document.querySelector("#pageAsk a").getAttribute("href")'), 'assistant.html');
  const sections = ['ps-laws','ps-governance','ps-funding','ps-references','ps-overview'];
  for (const id of sections) {
    const state = await evalJS(`(() => { const before = scrollY; document.querySelector('#tab-${id}').click(); return {id:document.querySelector('.public-sector [role=tabpanel]:not([hidden])').id,count:document.querySelectorAll('.public-sector [role=tabpanel]:not([hidden])').length,selected:document.querySelector('#tab-${id}').getAttribute('aria-selected'),before,after:scrollY}; })()`);
    assert.equal(state.id, id);
    assert.equal(state.count, 1);
    assert.equal(state.selected, 'true');
    assert.equal(state.before, state.after, 'switching tabs must not scroll');
  }
  for (const id of sections.slice(0,3)) {
    assert.equal(await evalJS(`(() => { document.querySelector('.ps-explore[data-ps-tab=${id}]').click(); return document.querySelector('.public-sector [role=tabpanel]:not([hidden])').id })()`), id);
  }
  await evalJS('document.querySelector("#tab-ps-references").click()');
  assert.equal(await evalJS('document.querySelectorAll(".ps-table tbody tr").length'), 19);
  assert.equal(await evalJS('Array.from(document.querySelectorAll(".ps-table tbody a")).every(a => a.getAttribute("href").startsWith("standard.html?ref="))'), true);
  assert.equal(await evalJS('Array.from(document.querySelectorAll(".ps-table tbody tr")).every(row => row.children.length === 3 && Array.from(row.children).every(cell => cell.textContent.trim()))'), true);
  await send('Emulation.setDeviceMetricsOverride', {width:390,height:844,deviceScaleFactor:1,mobile:true});
  await evalJS('document.querySelector("#tab-ps-overview").click()');
  assert.equal(await evalJS('document.documentElement.scrollWidth <= innerWidth'), true, 'mobile page must not overflow horizontally');
  await send('Emulation.clearDeviceMetricsOverride');
  console.log('PASS: five tabs, card buttons, 19 references, sidebar, assistant link and scroll stability');
  socket.close();
})().catch(err => { console.error(err); process.exitCode = 1; });