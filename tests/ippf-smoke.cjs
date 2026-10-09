/* Check all ten IPPF topics locally or with IPPF_BASE set to the published root.
   Run alone in Chrome with remote debugging on port 9339. */
const assert=require('node:assert/strict');
const http=require('node:http');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const base=process.env.IPPF_BASE || pathToFileURL(path.resolve(__dirname,'../references.html')).href;
const get=url=>new Promise((resolve,reject)=>http.get(url,res=>{
  let body='';res.on('data',part=>body+=part);res.on('end',()=>resolve(JSON.parse(body)));
}).on('error',reject));
(async()=>{
  const tab=(await get('http://127.0.0.1:9339/json/list')).find(x=>x.type==='page');
  assert(tab,'Chrome page not found');
  const ws=new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  let id=0;const pending=new Map();
  ws.onmessage=({data})=>{
    const msg=JSON.parse(data);if(!pending.has(msg.id))return;
    const [resolve,reject]=pending.get(msg.id);pending.delete(msg.id);
    msg.error?reject(Error(msg.error.message)):resolve(msg.result);
  };
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const n=++id;pending.set(n,[resolve,reject]);ws.send(JSON.stringify({id:n,method,params}));
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(result.exceptionDetails)throw Error(result.exceptionDetails.text);
    return result.result.value;
  };
  await send('Network.enable');
  await send('Network.setCacheDisabled',{cacheDisabled:true});
  async function visit(suffix,ready){
    const url=new URL('references.html'+suffix,base).href;
    await send('Page.navigate',{url});
    for(let n=0;n<120;n++){
      if(await evaluate(`location.href===${JSON.stringify(url)} && (${ready})`))return;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    throw Error('IPPF page not ready: '+url);
  }
  try{
    await send('Emulation.setDeviceMetricsOverride',{width:1366,height:900,deviceScaleFactor:1,mobile:false});
    await visit('?ref=ippf','document.querySelectorAll("[data-category=ippf] .ref-item").length===10');
    const data=await evaluate(`REF_PAGES.find(page=>page.id==='ippf').groups.flatMap(g=>g.items)
      .map(item=>({id:item.id,num:item.num,title:item.title,sidebarTitle:item.sidebarTitle,summary:item.summary,
        overview:item.overview,challenge:item.challenge,guidance:item.guidance,
        level:item.challengeLevel,refs:[...new Set(item.standards.match(/\\d+\\.\\d+/g))]}))`);
    assert.equal(data.length,10);
    assert.deepEqual(data.map(x=>x.id),['mandate','board','quality','grc','strategy','methods',
      'plan','performance','supervision','communication']);
    for(const [index,item] of data.entries()){
      await visit('?ref=ippf&item='+item.id,
        `document.querySelector('.ippf-detail h2')?.textContent===${JSON.stringify(item.num+'. '+item.title)}`);
      const state=await evaluate(`(()=>({
        sideTitle:document.querySelector('.nav-h .t')?.textContent,
        search:document.querySelector('#sideFind')?.placeholder,
        categories:document.querySelectorAll('.ref-category').length,
        expanded:document.querySelector('[data-category=ippf] .ref-category')?.getAttribute('aria-expanded'),
        otherOpen:[...document.querySelectorAll('.ref-category-block:not([data-category=ippf]) .ref-submenu')].some(menu=>!menu.hidden),
        group:document.querySelector('[data-category=ippf] .side-group')?.textContent,
        nums:[...document.querySelectorAll('[data-category=ippf] .ref-num')].map(el=>el.textContent),
        active:document.querySelector('[data-category=ippf] .ref-item.on')?.getAttribute('href'),
        notice:!!document.querySelector('.nav-note'),
        subtitle:document.querySelector('#lede')?.textContent,
        badge:document.querySelector('.ippf-badge')?.textContent.trim(),
        features:[...document.querySelectorAll('.ippf-feature h3')].map(x=>x.textContent),
        featureIcons:[...document.querySelectorAll('.ippf-feature > .ic')].length,
        level:document.querySelector('.ippf-challenge')?.textContent.trim()||null,
        links:[...document.querySelectorAll('.ippf-standard')].map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')})),
        card:!!document.querySelector('.ippf-content .ref-tabs'),
        panels:[...document.querySelectorAll('.ippf-content .ref-panel')].map(p=>p.textContent.trim()),
        guidance:[...document.querySelectorAll('.ippf-guidance li span')].map(x=>x.textContent),
        checks:document.querySelectorAll('.ippf-guidance li .ic').length,
        note:document.querySelector('.ippf-content .ref-note')?.textContent.trim(),
        ask:document.querySelector('#pageAsk b')?.textContent,
        askBody:document.querySelector('#pageAsk span')?.textContent,
        askLink:document.querySelector('#pageAsk a')?.getAttribute('href'),
        previous:document.querySelector('.ref-pager a:not(.nx)')?.getAttribute('href')||null,
        next:document.querySelector('.ref-pager a.nx')?.getAttribute('href')||null,
        overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth
      }))()`);
      assert.equal(state.sideTitle,'Reference Library');
      assert.equal(state.search,'Find a Reference');
      assert.equal(state.categories,5);
      assert.equal(state.expanded,'true');
      assert.equal(state.otherOpen,false);
      assert.equal(state.group,'Mandate & Foundations');
      assert.deepEqual(state.nums,Array.from({length:10},(_,n)=>String(n+1)));
      assert.equal(state.active,'references.html?ref=ippf&item='+item.id);
      assert(state.notice);
      assert.equal(state.subtitle,'Guidance for Small Internal Audit Functions');
      assert.equal(state.badge,'Supporting reference');
      assert.deepEqual(state.features,['Resource Constraints','Organisational Independence']);
      assert.equal(state.featureIcons,2);
      assert.equal(state.level,item.level?'Challenge Level: '+item.level:null);
      assert.deepEqual(state.links,item.refs.map(ref=>({text:'Standard '+ref,
        href:'standard.html?ref='+ref})));
      assert(state.card && state.panels[0].includes(item.summary) && state.panels[0].includes(item.overview));
      assert(state.panels[1].includes(item.challenge));
      assert.deepEqual(state.guidance,item.guidance);
      assert.equal(state.checks,item.guidance.length);
      assert(state.note.includes('not a reprint of IIA mandatory guidance'));
      assert.equal(state.ask,'Ask about this guidance');
      assert(state.askBody.includes('plain-language explanation'));
      assert(state.askLink.startsWith('assistant.html?q='));
      assert.equal(state.previous,index?'references.html?ref=ippf&item='+data[index-1].id:null);
      assert.equal(state.next,index<9?'references.html?ref=ippf&item='+data[index+1].id:null);
      assert(!state.overflow,item.id+' desktop overflow');
      for(let t=0;t<3;t++){
        const opened=await evaluate(`(()=>{document.querySelector('#ippf-tab-${t}').click();
          return {selected:document.querySelector('#ippf-tab-${t}').getAttribute('aria-selected'),
            panel:document.querySelector('.ippf-content .ref-panel:not([hidden])')?.id,
            visible:document.querySelectorAll('.ippf-content .ref-panel:not([hidden])').length,
            underline:getComputedStyle(document.querySelector('#ippf-tab-${t}')).borderBottomColor}})()`);
        assert.equal(opened.selected,'true');
        assert.equal(opened.panel,'ippf-panel-'+t);
        assert.equal(opened.visible,1);
        assert.notEqual(opened.underline,'rgba(0, 0, 0, 0)');
      }
      for(const ref of item.refs){
        await evaluate(`document.querySelector('.ippf-standard[href="standard.html?ref=${ref}"]').click()`);
        for(let n=0;n<120;n++){
          if(await evaluate(`location.search==='?ref=${ref}' && !!document.querySelector('.std-h h1')`))break;
          if(n===119)throw Error('Clicking IPPF Standard '+ref+' did not load');
          await new Promise(resolve=>setTimeout(resolve,100));
        }
        await visit('?ref=ippf&item='+item.id,
          `document.querySelector('.ippf-detail h2')?.textContent===${JSON.stringify(item.num+'. '+item.title)}`);
      }
      if(index===0){
        const filtered=await evaluate(`(()=>{let input=document.querySelector('#sideFind');
          input.value='Performance';input.dispatchEvent(new Event('input',{bubbles:true}));
          return [...document.querySelectorAll('[data-category=ippf] .ref-item:not([hidden])')].map(x=>x.textContent.trim())})()`);
        assert.equal(filtered.length,1);assert(filtered[0].includes('Performance Measurement'));
        const searchState=await evaluate(`(()=>({categories:[...document.querySelectorAll('.ref-category-block:not([hidden])')].map(x=>x.dataset.category),
          open:document.querySelector('[data-category=ippf] .ref-category').getAttribute('aria-expanded')}))()`);
        assert.deepEqual(searchState,{categories:['ippf'],open:'true'});
      }
    }
    const refs=[...new Set(data.flatMap(item=>item.refs))];
    for(const ref of refs){
      const url=new URL('standard.html?ref='+ref,base).href;
      await send('Page.navigate',{url});
      for(let n=0;n<120;n++){
        if(await evaluate(`location.href===${JSON.stringify(url)} && document.querySelector('.std-h h1')?.textContent`))break;
        if(n===119)throw Error('Standard link failed: '+ref);
        await new Promise(resolve=>setTimeout(resolve,100));
      }
    }
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
    for(const item of data){
      await visit('?ref=ippf&item='+item.id,
        `!!document.querySelector('.ippf-detail') && document.querySelector('.ref-h')?.textContent===${JSON.stringify(item.num+'. '+item.title)}`);
      assert.equal(await evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth'),true,item.id+' mobile overflow');
      assert.equal(await evaluate(`document.querySelector('[data-category=ippf] .ref-item.on')?.getAttribute('href')`),
        'references.html?ref=ippf&item='+item.id);
    }
    console.log(`PASS: 10 IPPF topics, 30 tabs, ${refs.length} standard destinations, search, pager, desktop and mobile`);
  }finally{await send('Emulation.clearDeviceMetricsOverride');ws.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});