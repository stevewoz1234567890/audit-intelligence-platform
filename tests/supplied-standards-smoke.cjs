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
    for (let attempt=0; attempt<200; attempt++){
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
  await navigate(url+'?ref=1.1',`location.search === '?ref=1.1' && !!document.querySelector('#requirements .card')`);
  const baseline=await evaluate(`(()=>{const head=getComputedStyle(document.querySelector('.sect-h h2'));const card=getComputedStyle(document.querySelector('#requirements .card'));return {headingFont:head.fontFamily,headingSize:head.fontSize,headingColor:head.color,cardBackground:card.backgroundColor,cardRadius:card.borderRadius,cardPadding:card.padding}})()`);
  const listStyle=async () => evaluate(`(()=>{
    const sections=['conformance','evidence','redflags'];
    return sections.map(id=>{
      const section=document.getElementById(id);
      if(!section)return null;
      const items=[...section.querySelectorAll('.card > ul.rq > li, .source-content > ul.rq > li')];
      const card=items[0]?.closest('.card');
      const marker=items[0] && getComputedStyle(items[0],'::before');
      const item=items[0] && getComputedStyle(items[0]);
      return {id,count:items.length,classes:[...new Set(items.map(x=>x.parentElement.className))],
        lines:items.every((x,i)=>x.getBoundingClientRect().height>0 &&
          (!i || x.getBoundingClientRect().top>=items[i-1].getBoundingClientRect().bottom)),
        marker:marker && {content:marker.content,width:marker.width,height:marker.height,
          background:marker.backgroundColor,color:marker.color},
        font:item?.fontFamily,fontSize:item?.fontSize,lineHeight:item?.lineHeight,
        gap:item?.gap,listGap:items[0] && getComputedStyle(items[0].parentElement).gap,
        padding:card && getComputedStyle(card).padding};
    }).filter(Boolean);
  })()`);
  await navigate(url+'?ref=2.3',`location.search === '?ref=2.3' && !!document.querySelector('#redflags li')`);
  const referenceLists=await listStyle();
  const referenceById=Object.fromEntries(referenceLists.map(x=>[x.id,x]));
  for (const section of referenceLists){
    assert(section.count>0,`Standard 2.3 ${section.id} is missing items`);
    assert.deepEqual(section.classes,[`rq ${section.id==='redflags'?'flag':'tick'}`]);
    assert.equal(section.marker.content,section.id==='redflags'?'"!"':'"✓"');
    assert.equal(section.marker.width,'23px');
    assert.equal(section.marker.height,'23px');
    assert.equal(section.marker.background,section.id==='redflags'?'rgb(250, 234, 231)':'rgb(230, 244, 236)');
  }
  for (const ref of refs){
    await navigate(url+'?ref='+ref,`location.search === '?ref=${ref}' && document.title.includes('Standard ${ref} —') && document.querySelector('#source') !== null && document.querySelector('#requirements .card') !== null`);
    const state=await evaluate(`(()=>{const head=getComputedStyle(document.querySelector('.sect-h h2'));const card=getComputedStyle(document.querySelector('#requirements .card'));return {title:document.title,sections:[...document.querySelectorAll('.body .sect')].map(x=>x.id),pdf:document.querySelector('#source a[href$=".pdf"]')?.getAttribute('href'),requirement:document.querySelector('#requirements .source-content, #requirements .card')?.textContent,fullRequirement:document.querySelector('#requirements')?.textContent,hasError:!!document.querySelector('#requirements .empty'),tabTargets:[...document.querySelectorAll('.std-h .tab')].every(x=>document.getElementById(x.dataset.go)),formatted:[...document.querySelectorAll('.source-content')].length,tables:[...document.querySelectorAll('.source-data-table')].length,tableRows:[...document.querySelectorAll('.source-data-table tbody tr')].length,rawBullets:[...document.querySelectorAll('.source-content p')].some(p=>/[•]/.test(p.textContent)),repeatedHeading:document.querySelector('#implementation .source-content')?.textContent.trim().startsWith('Considerations for Implementation'),bullets:[...document.querySelectorAll('.source-content .rq li')].length,sourceNotes:[...document.querySelectorAll('.source-table-note')].length,summary:document.querySelector('.std-h .lede')?.textContent.trim(),style:{headingFont:head.fontFamily,headingSize:head.fontSize,headingColor:head.color,cardBackground:card.backgroundColor,cardRadius:card.borderRadius,cardPadding:card.padding}}})()`);
    assert(state.title.includes(`Standard ${ref}`),ref);
    assert(!state.hasError,ref);
    assert(state.requirement.length>40,ref);
    assert(state.fullRequirement.length>100,`${ref} requirements were truncated`);
    assert(state.tabTargets,`broken tab ${ref}`);
    assert.deepEqual(state.style,baseline,`${ref} differs from earlier standard's headings and card styling`);
    for (const section of await listStyle()){
      assert(section.count>0,`${ref} ${section.id} has no separate list items`);
      assert.deepEqual(section.classes,[`rq ${section.id==='redflags'?'flag':'tick'}`],`${ref} ${section.id} has incorrect bullets`);
      assert(section.lines,`${ref} ${section.id} items have no layout`);
      for (const key of ['marker','font','fontSize','lineHeight','gap','listGap','padding'])
        assert.deepEqual(section[key],referenceById[section.id][key],`${ref} ${section.id} ${key} differs from Standard 2.3`);
    }
    if (+ref.split('.')[0]>=3){
      assert(state.formatted>=6,`${ref} has unformatted PDF sections`);
      const embedded = {'10.2':1,'12.2':1,'13.4':1,'14.1':1,'14.3':1,'14.6':1,'15.2':2};
      assert.equal(state.tables,3+(embedded[ref]||0),`${ref} has missing or extra structured tables`);
      assert(state.tableRows>5,`${ref} missing structured table rows`);
      assert(state.sourceNotes<=2,`${ref} unexpected unstructured tables`);
      assert(state.bullets>0,`${ref} contains no formatted source bullets`);
      assert(!state.rawBullets,`${ref} has PDF bullet glyphs in paragraphs`);
      assert(!/^[•●▪◦]/.test(state.summary),`${ref} summary starts with a PDF bullet glyph`);
      assert(!state.repeatedHeading,`${ref} repeats its section heading`);
      assert.equal(state.pdf,`assets/standards/standard-${ref.split('.')[0]}.pdf`,ref);
      for (const key of ['requirements','implementation','conformance','focus','risks','controls','procedures','redflags','findings','source'])
        assert(state.sections.includes(key),`${ref} missing ${key}`);
      if (ref==='15.2') assert(state.sections.includes('practical'));
    }
  }
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await navigate(url+'?ref=2.3',`location.search === '?ref=2.3' && !!document.querySelector('#redflags li')`);
  const mobileReference=Object.fromEntries((await listStyle()).map(x=>[x.id,x]));
  for (const ref of refs){
    await navigate(url+'?ref='+ref,`location.search === '?ref=${ref}' && !!document.querySelector('#source .srcbox')`);
    const layout=await evaluate(`(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,tables:[...document.querySelectorAll('.source-table')].every(e=>e.scrollWidth>=e.clientWidth&&getComputedStyle(e).overflowX==='auto'),stacked:[...document.querySelectorAll('.source-data-table')].every(e=>e.querySelectorAll('tbody tr').length>0 && getComputedStyle(e.querySelector('tbody tr')).display==='block' && getComputedStyle(e.querySelector('tbody td')).display==='block'),font:getComputedStyle(document.querySelector('.sect-h h2')).fontFamily,headings:[...document.querySelectorAll('.sect-h h2')].map(x=>x.textContent)}))()`);
    assert(!layout.overflow,`${ref} overflows the mobile viewport`);
    for (const section of await listStyle()){
      assert(section.count>0 && section.lines,`${ref} ${section.id} items missing on mobile`);
      assert.deepEqual(section.classes,[`rq ${section.id==='redflags'?'flag':'tick'}`],`${ref} ${section.id} mobile bullets`);
      for (const key of ['marker','font','fontSize','lineHeight','gap','listGap','padding'])
        assert.deepEqual(section[key],mobileReference[section.id][key],`${ref} ${section.id} mobile ${key} differs from Standard 2.3`);
    }
    assert(layout.tables,`${ref} source tables are not scrollable`);
    if (+ref.split('.')[0]>=3) assert(layout.stacked,`${ref} data tables are not readable as mobile rows`);
    assert(layout.font.includes('Playfair')||layout.font.includes('Georgia'),`${ref} heading font differs`);
  }
  await send('Emulation.clearDeviceMetricsOverride');
  await navigate(pathToFileURL(path.join(root,'standards.html')).href+'?domain=II',
    '!!document.querySelector(".catalog .tcard .kicker") && typeof cleanSummary === "function"');
  assert.equal(await evaluate(`(()=>{const cards=[...document.querySelectorAll('.catalog .tcard')]
    .filter(card => card.querySelector('.kicker')?.textContent.trim()==='Standard 3.1');
    return cards.length===1 && cards.every(card => !/^[•●▪◦]/.test(card.querySelector('p')?.textContent.trim()))})()`),true,
    'standard list summaries must not display PDF bullet glyphs');
  socket.close();
  console.log('PASS: banner, 52 standards, 13 PDFs, evidence/flag icons and mobile layout');
})().catch(e=>{console.error(e);process.exitCode=1;});