/* Run with Chrome --remote-debugging-port=9339.
   Set STANDARDS_SIDEBAR_BASE to the published site root to verify the live pages. */
const assert = require('node:assert/strict');
const http = require('node:http');
const path = require('node:path');
const {pathToFileURL} = require('node:url');

(async () => {
  const pages = await new Promise((resolve, reject) => http.get('http://127.0.0.1:9339/json/list', res => {
    let body = '';
    res.on('data', part => body += part);
    res.on('end', () => resolve(JSON.parse(body)));
  }).on('error', reject));
  const page = pages.find(entry => entry.type === 'page');
  assert(page, 'Chrome must have an open page');
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let seq = 0;
  const pending = new Map();
  socket.onmessage = ({data}) => {
    const message = JSON.parse(data);
    if (!pending.has(message.id)) return;
    const [resolve, reject] = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(Error(message.error.message)) : resolve(message.result);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, [resolve, reject]);
    socket.send(JSON.stringify({id, method, params}));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', {expression, returnByValue:true, awaitPromise:true});
    if (result.exceptionDetails) throw Error(result.exceptionDetails.text);
    return result.result.value;
  };
  let visitCount = 0;
  async function visit(name, suffix = ''){
    const base = process.env.STANDARDS_SIDEBAR_BASE
      ? new URL(name, process.env.STANDARDS_SIDEBAR_BASE).href
      : pathToFileURL(path.resolve(__dirname, '..', name)).href;
    const url = new URL(base + suffix);
    url.searchParams.set('sidebar-test', `${Date.now()}-${++visitCount}`);
    await send('Page.navigate', {url:url.href});
    for (let i = 0; i < 100; i++) {
      if (await evaluate(`location.href === ${JSON.stringify(url.href)} &&
        document.querySelectorAll('.dom-btn').length === 5`)) return;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw Error('Standards sidebar did not load: ' + url.href);
  }
  const state = () => evaluate(`Array.from(document.querySelectorAll('.dom')).map(dom => ({
    id:dom.dataset.dom, open:dom.classList.contains('open'),
    expanded:dom.querySelector('.dom-btn').getAttribute('aria-expanded')
  }))`);
  const expectOpen = async id => {
    const domains = await state();
    assert.equal(domains.length, 5);
    assert.deepEqual(domains.filter(dom => dom.open).map(dom => dom.id), id ? [id] : []);
    assert(domains.every(dom => dom.expanded === (dom.open ? 'true' : 'false')));
  };
  try {
    await visit('assistant.html');
    await expectOpen(null);
    await evaluate(`document.querySelector('[data-dom="II"] .dom-btn').click()`);
    await expectOpen('II');
    await visit('assistant.html'); // Reload: manual expansion must not become the default.
    await expectOpen(null);
    await visit('standards.html');
    await expectOpen(null);
    await visit('standards.html', '?domain=II');
    await expectOpen('II');
    await visit('standard.html', '?ref=1.1');
    await expectOpen('II');
    console.log('PASS: standards domains start collapsed, toggle on click, reset on refresh, and open for selected content');
  } finally {
    socket.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });