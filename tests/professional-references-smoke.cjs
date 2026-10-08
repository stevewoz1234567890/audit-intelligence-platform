/* Run alone against Chrome CDP port 9339. Set PROFESSIONAL_REFS_BASE for the live site. */
const assert=require('node:assert/strict');
const http=require('node:http');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const base=process.env.PROFESSIONAL_REFS_BASE ||
  pathToFileURL(path.resolve(__dirname,'../standard.html')).href;
function get(url){
  return new Promise((resolve,reject)=>http.get(url,res=>{
    let body='';res.on('data',chunk=>body+=chunk);
    res.on('end',()=>resolve(JSON.parse(body)));
  }).on('error',reject));
}
(async()=>{
  const tab=(await get('http://127.0.0.1:9339/json/list')).find(x=>x.type==='page');
  assert(tab,'No Chrome tab found');
  const ws=new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  let id=0;const pending=new Map();
  ws.onmessage=({data})=>{
    const message=JSON.parse(data);
    if(!pending.has(message.id))return;
    const [resolve,reject]=pending.get(message.id);pending.delete(message.id);
    message.error?reject(Error(message.error.message)):resolve(message.result);
  };
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const next=++id;pending.set(next,[resolve,reject]);
    ws.send(JSON.stringify({id:next,method,params}));
  });
  async function evaluate(expression){
    const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(result.exceptionDetails)throw Error(result.exceptionDetails.text);
    return result.result.value;
  }
  async function visit(ref){
    const url=new URL('standard.html?ref='+encodeURIComponent(ref),base).href;
    await send('Page.navigate',{url});
    for(let i=0;i<150;i++){
      if(await evaluate(`location.href===${JSON.stringify(url)} && !!document.querySelector('#source .srcbox') && typeof allStandards==='function'`))return;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    throw Error('Standard did not load: '+url);
  }
  try{
    await visit('7.1');
    const standards=await evaluate('allStandards().map(({ref,title})=>({ref,title}))');
    assert.equal(standards.length,52);
    const titles=new Map(standards.map(s=>[s.ref,s.title]));
    const seen=new Set();let count=0;
    for(const standard of standards){
      await visit(standard.ref);
      const state=await evaluate(`(()=>{
        const source=document.querySelector('#source');
        const items=[...source.querySelectorAll('.source-content p, .source-content li > span, .card > ul.rq > li > span')];
        const links=[...source.querySelectorAll('.professional-standard-link')];
        return {title:document.title,items:items.map(item=>({text:item.textContent,
          refs:[...item.textContent.matchAll(/\\bStandard\\s+(\\d+\\.\\d+)\\b|^\\s*(?:Related standards:\\s*)?(\\d+\\.\\d+)\\s*[—–:-]/gi)]
            .map(match=>match[1]||match[2])})),
          links:links.map(a=>({href:a.getAttribute('href'),text:a.textContent,
            cursor:getComputedStyle(a).cursor,decoration:getComputedStyle(a).textDecorationLine,
            visible:a.getBoundingClientRect().width>0})),
          unresolved:!!source.querySelector('.empty')};})()`);
      assert(state.title.startsWith(`Standard ${standard.ref} — ${standard.title} —`),standard.ref);
      assert(!state.unresolved,`${standard.ref} did not render`);
      const expected=state.items.flatMap(item=>item.refs);
      assert(expected.length,`${standard.ref} has no numbered professional references`);
      assert.equal(state.links.length,expected.length,`${standard.ref} missing reference links`);
      for(let i=0;i<expected.length;i++){
        const link=state.links[i],ref=expected[i];
        assert(titles.has(ref),`${standard.ref} references missing destination ${ref}`);
        assert.equal(link.href,`standard.html?ref=${ref}`,`${standard.ref} points to wrong destination`);
        assert(new RegExp(`\\b${ref.replace('.','\\.')}\\b`).test(link.text),
          `${standard.ref} number not clickable`);
        if(state.items.some(item=>item.text.includes(link.text+' — ') ||
          item.text.includes(link.text+': ')) && !link.text.includes(' — ') && !link.text.includes(': '))
          assert.fail(`${standard.ref} supplied title is outside the reference link`);
        if(link.text.includes(' — ') || link.text.includes(': '))
          assert(link.text.length>`Standard ${ref}`.length,`${standard.ref} title not clickable`);
        assert(link.visible && link.cursor==='pointer' && link.decoration.includes('underline'),
          `${standard.ref} link is not visually identifiable`);
        seen.add(ref);count++;
      }
    }
    // Every linked destination is loaded and verified, not just inspected as an href.
    for(const ref of seen){
      await visit(ref);
      assert.equal(await evaluate('document.querySelector(".std-h h1").textContent'),titles.get(ref),ref);
    }
    await visit('6.3');
    assert.equal(await evaluate(`(()=>{
      const links=['6.1','6.2'].map(ref=>document.querySelector('#source a[href="standard.html?ref='+ref+'"]'));
      return links.every(a=>a && a.closest('li')) &&
        links[0].closest('li')!==links[1].closest('li') &&
        links[1].closest('li').getBoundingClientRect().top>links[0].closest('li').getBoundingClientRect().top &&
        links[0].textContent==='Standard 6.1 — Internal Audit Mandate' &&
        links[1].textContent==='Standard 6.2 — Internal Audit Charter' &&
        [...document.querySelectorAll('#source .source-content li')].slice(0,4)
          .every(li=>li.textContent.startsWith('Standard ') &&
            li.querySelector('a.professional-standard-link')?.textContent.includes(' — ') &&
            li.textContent.endsWith('.') && !li.textContent.includes('Related standards:'));
    })()`),true,'6.3 must display four consistently formatted standard links on separate lines');
    await evaluate(`document.querySelector('#source a[href="standard.html?ref=6.1"]').click()`);
    for(let i=0;i<150;i++){
      if(await evaluate(`location.search==='?ref=6.1' && document.querySelector('.std-h h1')?.textContent===${JSON.stringify(titles.get('6.1'))}`))break;
      if(i===149)throw Error('Clicking 6.3 related 6.1 did not open 6.1');
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    await visit('6.3');
    await evaluate(`document.querySelector('#source a[href="standard.html?ref=6.2"]').click()`);
    for(let i=0;i<150;i++){
      if(await evaluate(`location.search==='?ref=6.2' && document.querySelector('.std-h h1')?.textContent===${JSON.stringify(titles.get('6.2'))}`))break;
      if(i===149)throw Error('Clicking 6.3 related 6.2 did not open 6.2');
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    await visit('7.1');
    assert.deepEqual((await evaluate(`[...document.querySelectorAll('#source .professional-standard-link')]
      .map(a=>new URL(a.href).searchParams.get('ref'))`)),['7.1','6.2','2.3','11.3','11.4']);
    await send('Emulation.setDeviceMetricsOverride',{
      width:390,height:844,deviceScaleFactor:1,mobile:true});
    assert.equal(await evaluate(`(()=>{
      const links=[...document.querySelectorAll('#source .professional-standard-link')];
      return links.length===5 && links.every(a=>a.getBoundingClientRect().width>0 &&
        getComputedStyle(a).cursor==='pointer' && getComputedStyle(a).textDecorationLine.includes('underline')) &&
        document.documentElement.scrollWidth<=document.documentElement.clientWidth;
    })()`),true,'7.1 links must remain visible, styled and not overflow on mobile');
    await send('Emulation.clearDeviceMetricsOverride');
    // Exercise a real click, including the supplied title, rather than only checking hrefs.
    await evaluate(`document.querySelector('#source a[href="standard.html?ref=11.4"]').click()`);
    for(let i=0;i<150;i++){
      if(await evaluate(`location.search==='?ref=11.4' && document.querySelector('.std-h h1')?.textContent===${JSON.stringify(titles.get('11.4'))}`))break;
      if(i===149)throw Error('Clicking 7.1 reference did not open 11.4');
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    console.log(`PASS: ${count} Professional References links across 52 pages; ${seen.size} destinations loaded and verified; 7.1 click works`);
  }finally{ws.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});