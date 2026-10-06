/* Browser smoke test. Requires headless Chrome --remote-debugging-port=9339. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {pathToFileURL} = require('node:url');

const root = path.resolve(__dirname,'..');
function get(url){
  return new Promise((resolve,reject) => http.get(url,res => {
    let text=''; res.on('data',x => text+=x);
    res.on('end',() => resolve(JSON.parse(text)));
  }).on('error',reject));
}
(async () => {
  const pages = await get('http://127.0.0.1:9339/json/list');
  const page = pages.find(x => x.type === 'page');
  assert(page,'No Chrome page found');
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject) => {socket.onopen=resolve; socket.onerror=reject;});
  let id=0;
  const pending=new Map();
  socket.onmessage=({data}) => {
    const msg=JSON.parse(data);
    if (!pending.has(msg.id)) return;
    const [resolve,reject]=pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(Error(msg.error.message)); else resolve(msg.result);
  };
  function send(method,params={}){
    return new Promise((resolve,reject) => {
      const key=++id; pending.set(key,[resolve,reject]);
      socket.send(JSON.stringify({id:key,method,params}));
    });
  }
  async function evaluate(expression){
    const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if (result.exceptionDetails) throw Error(result.exceptionDetails.text);
    return result.result.value;
  }
  async function navigate(url,ready){
    await send('Page.navigate',{url});
    for (let attempt=0; attempt<60; attempt++){
      if (await evaluate(ready)) return;
      await new Promise(r=>setTimeout(r,100));
    }
    throw Error('Page did not become ready: '+url);
  }
  const home = pathToFileURL(path.join(root,'index.html')).href;
  await navigate(home,'!!document.querySelector(".hero-photo") && typeof contentStats === "function"');
  const image=await evaluate(`(async()=>{const i=document.querySelector('.hero-photo');await i.decode();return {src:i.getAttribute('src'),w:i.naturalWidth,h:i.naturalHeight,stats:contentStats(),unpopulated:allStandards().filter(s=>!standardRecord(s.ref)).map(s=>s.ref),issues:validatePlatformData()}})()`);
  assert.equal(image.src,'assets/audit-background-2172x724.png');
  assert.deepEqual([image.w,image.h],[2172,724]);
  assert.equal(image.stats.populated,52);
  assert.deepEqual(image.unpopulated,[]);
  assert.deepEqual(image.issues,[]);
  for (let n=3;n<=15;n++) assert(fs.existsSync(path.join(root,`assets/standards/standard-${n}.pdf`)));

  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
  const mobile = await evaluate(`(()=>({viewport:document.documentElement.clientWidth,imageWidth:document.querySelector('.hero-photo').getBoundingClientRect().width,overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,outliers:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+2).slice(0,10).map(e=>e.tagName+'.'+e.className)}))()`);
  assert.equal(mobile.imageWidth,mobile.viewport,`banner should fill the mobile viewport: ${JSON.stringify(mobile)}`);
  assert(!mobile.overflow,`home page should not overflow horizontally on mobile: ${JSON.stringify(mobile)}`);
  await send('Emulation.clearDeviceMetricsOverride');

  const url=pathToFileURL(path.join(root,'standard.html')).href;
  const refs=await evaluate('allStandards().map(s=>s.ref)');
  assert.equal(refs.length,52);
  for (const ref of refs){
    await navigate(url+'?ref='+ref,`location.search === '?ref=${ref}' && document.title.includes('Standard ${ref} —') && document.querySelector('#source') !== null`);
    const state=await evaluate(`(()=>({title:document.title,sections:[...document.querySelectorAll('.body .sect')].map(x=>x.id),pdf:document.querySelector('#source a[href$=".pdf"]')?.getAttribute('href'),requirement:document.querySelector('#requirements .card p')?.textContent,hasError:!!document.querySelector('#requirements .empty'),tabTargets:[...document.querySelectorAll('.std-h .tab')].every(x=>document.getElementById(x.dataset.go))}))()`);
    assert(state.title.includes(`Standard ${ref}`),ref);
    assert(!state.hasError,ref);
    assert(state.requirement.length>100,ref);
    assert(state.tabTargets,`broken tab ${ref}`);
    if (+ref.split('.')[0]>=3){
      assert.equal(state.pdf,`assets/standards/standard-${ref.split('.')[0]}.pdf`,ref);
      for (const key of ['requirements','implementation','conformance','focus','risks','controls','procedures','redflags','findings','source'])
        assert(state.sections.includes(key),`${ref} missing ${key}`);
      if (ref==='15.2') assert(state.sections.includes('practical'));
    }
  }
  socket.close();
  console.log('PASS: original banner, 52 populated standards, 13 linked PDFs, section navigation');
})().catch(e=>{console.error(e);process.exitCode=1;});