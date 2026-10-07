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
    if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
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
        document.readyState === 'complete' &&
        document.querySelectorAll('.dom-btn').length === 5 &&
        !!Array.from(document.styleSheets).find(sheet => sheet.href && sheet.href.includes('assets/iia.css'))`)) return;
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
    for (const viewport of [{width:1366,height:900,mobile:false}, {width:390,height:844,mobile:true}]) {
      await send('Emulation.setDeviceMetricsOverride', {
        ...viewport, deviceScaleFactor:1
      });
      await visit('standard.html', '?ref=15.2');
      const layout = await evaluate(`(() => {
        const domain = document.querySelector('[data-dom="III"] .dom-btn');
        const principle = document.querySelector('[data-dom="V"] [data-pr="15"] .pr-h');
        const standard = document.querySelector('[data-dom="V"] a[data-ref="15.2"]');
        function wrappedWords(selector) {
          const el = document.querySelector(selector);
          const text = el.firstChild;
          const words = Array.from(text.textContent.matchAll(/[^ ]+/g), match => {
            const range = document.createRange();
            range.setStart(text, match.index);
            range.setEnd(text, match.index + match[0].length);
            const rect = range.getBoundingClientRect();
            return {left:rect.left, top:rect.top};
          });
          const nextLine = words.find(word => word.top > words[0].top + 2);
          return {wraps:!!nextLine, aligned:!!nextLine && Math.abs(nextLine.left - words[0].left) < 1};
        }
        const domainArrow = domain.querySelector('.ch').getBoundingClientRect();
        const principleArrow = principle.querySelector('.ch').getBoundingClientRect();
        const domainArrows = Array.from(document.querySelectorAll('.dom-btn .ch'), arrow => arrow.getBoundingClientRect().right);
        const domainButtons = Array.from(document.querySelectorAll('.dom-btn'), button => {
          const style = getComputedStyle(button);
          return [style.paddingTop, style.paddingBottom, style.paddingLeft, style.paddingRight];
        });
        const principleButtons = Array.from(document.querySelectorAll('.pr-h'), button => {
          const style = getComputedStyle(button);
          return [style.paddingTop, style.paddingBottom, style.paddingRight];
        });
        const standardTitle = standard.querySelector('.st').getBoundingClientRect();
        const standardNumber = standard.querySelector('.sr').getBoundingClientRect();
        return {
          domain:wrappedWords('[data-dom="III"] .dx'),
          principle:wrappedWords('[data-dom="V"] [data-pr="15"] .tx'),
          standard:wrappedWords('[data-dom="V"] a[data-ref="15.2"] .st'),
          numberBeforeTitle:standardNumber.right < standardTitle.left,
          arrowsAligned:Math.abs(domainArrow.right - principleArrow.right) < 1,
          allDomainArrowsAligned:domainArrows.every(right => Math.abs(right - domainArrow.right) < 1),
          domainButtons, principleButtons,
          padding: [domain, principle, standard].map(el => getComputedStyle(el).paddingRight),
          overflow:document.querySelector('.nav-body').scrollWidth > document.querySelector('.nav-body').clientWidth
        };
      })()`);
      for (const kind of ['domain', 'principle', 'standard']) {
        assert(layout[kind].wraps && layout[kind].aligned, `${kind} title alignment at ${viewport.width}px: ${JSON.stringify(layout)}`);
      }
      assert(layout.numberBeforeTitle && layout.arrowsAligned && layout.allDomainArrowsAligned && !layout.overflow, JSON.stringify(layout));
      assert.deepEqual(layout.padding, ['16px','16px','16px']);
      assert(layout.domainButtons.every(padding => padding.join(',') === '10px,10px,16px,16px'), JSON.stringify(layout));
      assert(layout.principleButtons.every(padding => padding.join(',') === '10px,10px,16px'), JSON.stringify(layout));
    }
    console.log('PASS: standards domain state, wrapped title alignment, consistent sidebar padding and arrows at desktop/mobile widths');
  } finally {
    await send('Emulation.clearDeviceMetricsOverride');
    socket.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });