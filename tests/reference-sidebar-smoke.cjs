/* Run separately with Chrome --remote-debugging-port=9339.
   Set REF_SIDEBAR_BASE to the published site root to verify the live page. */
const assert=require('node:assert/strict');
const http=require('node:http');
const path=require('node:path');
const {pathToFileURL}=require('node:url');

(async()=>{
  const pages=await new Promise((resolve,reject)=>http.get('http://127.0.0.1:9339/json/list',res=>{
    let body='';res.on('data',part=>body+=part);res.on('end',()=>resolve(JSON.parse(body)));
  }).on('error',reject));
  const page=pages.find(x=>x.type==='page');
  assert(page,'Chrome must have an open page');
  const socket=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  const pending=new Map();let seq=0;
  socket.onmessage=({data})=>{
    const message=JSON.parse(data);
    if(!pending.has(message.id))return;
    const [resolve,reject]=pending.get(message.id);pending.delete(message.id);
    message.error?reject(Error(message.error.message)):resolve(message.result);
  };
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const id=++seq;pending.set(id,[resolve,reject]);socket.send(JSON.stringify({id,method,params}));
  });
  const evaluate=async expression=>{
    const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(response.exceptionDetails)throw Error(response.exceptionDetails.text);
    return response.result.value;
  };
  const base=process.env.REF_SIDEBAR_BASE
    ? new URL('references.html',process.env.REF_SIDEBAR_BASE).href
    : pathToFileURL(path.resolve(__dirname,'..','references.html')).href;
  async function visit(suffix,ready){
    const url=new URL(base+suffix);
    if(process.env.REF_SIDEBAR_BASE)url.searchParams.set('release','fad5a3b');
    await send('Page.navigate',{url:url.href});
    for(let i=0;i<100;i++){
      if(await evaluate(ready))return;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    throw Error('Reference page did not load: '+url.href+'; state '+JSON.stringify(await evaluate(
      `({url:location.href,categories:document.querySelectorAll('.ref-category').length,title:document.title})`)));
  }
  async function checkCardActions(columns){
    const rows=await evaluate(`document.fonts.ready.then(()=>{
      const cards=[...document.querySelectorAll('.ref-grid .ref-card')];
      return cards.map(card=>{
        const button=card.querySelector('.go').getBoundingClientRect();
        const box=card.getBoundingClientRect();
        return {title:card.querySelector('h3').textContent,top:button.top,bottom:button.bottom,
          height:button.height,cardTop:box.top,cardBottom:box.bottom,link:card.getAttribute('href')};
      });
    })`);
    assert.equal(rows.length,6,'All six reference cards must render');
    for(let i=0;i<rows.length;i++){
      const row=rows[i];
      assert(row.height>=40 && Math.abs(row.height-rows[0].height)<1,JSON.stringify(rows));
      assert(Math.abs(row.cardBottom-row.bottom-(rows[0].cardBottom-rows[0].bottom))<1,JSON.stringify(rows));
      assert(row.link.startsWith('references.html?ref='),row.link);
      if(i%columns)assert(Math.abs(row.top-rows[i-1].top)<1,JSON.stringify(rows));
    }
  }
  try{
    await send('Emulation.setDeviceMetricsOverride',{width:1366,height:900,deviceScaleFactor:1,mobile:false});
    await visit('','document.querySelectorAll(".ref-category").length === 5');
    await checkCardActions(3);
    assert.equal(await evaluate('document.querySelectorAll(".ref-submenu:not([hidden])").length'),0);
    assert.equal(await evaluate('document.querySelector(".ref-all").classList.contains("on")'),true);
    const categories=[['coso','coso','17'],['ippf','ippf','9'],['ethics','ethics','4'],
      ['glossaries','glossary','32'],['historical','2017','12']];
    for(const [category,pageId,count] of categories){
      const state=await evaluate(`(()=>{document.querySelector('[data-category="${category}"] .ref-category').click();
        const block=document.querySelector('[data-category="${category}"]');return {
          open:block.querySelector('button').getAttribute('aria-expanded'),
          visible:!block.querySelector('.ref-submenu').hidden,
          count:block.querySelectorAll('.ref-item').length,
          others:[...document.querySelectorAll('.ref-category-block')].filter(x=>x!==block&&!x.querySelector('.ref-submenu').hidden).length,
          first:block.querySelector('.ref-item').getAttribute('href')};})()`);
      assert.equal(state.open,'true',category);
      assert(state.visible && state.count>=Number(count) && state.others===0,JSON.stringify(state));
      assert(state.first.includes('ref='+pageId+'&item='),state.first);
    }
    assert.equal(await evaluate(`(()=>{const b=document.querySelector('[data-category="historical"] .ref-category');
      b.click();return b.getAttribute('aria-expanded')==='false'&&b.nextElementSibling.hidden})()`),true);
    const searched=await evaluate(`(()=>{const input=document.querySelector('#sideFind');input.value='Communicates Deficiencies';
      input.dispatchEvent(new Event('input',{bubbles:true}));const block=document.querySelector('[data-category="coso"]');
      return {open:block.querySelector('button').getAttribute('aria-expanded'),
        link:block.querySelector('a[href="references.html?ref=coso&item=17"]'),
        others:[...document.querySelectorAll('.ref-category-block:not([hidden])')].length};})()`);
    assert.equal(searched.open,'true');
    assert(searched.link && searched.others===1,'Search should reveal the matching category and item');
    const glossarySearch=await evaluate(`(()=>{const input=document.querySelector('#sideFind');input.value='Risk Management Glossary';
      input.dispatchEvent(new Event('input',{bubbles:true}));const block=document.querySelector('[data-category="glossaries"]');
      return {expanded:block.querySelector('.ref-category').getAttribute('aria-expanded'),
        links:[...block.querySelectorAll('.ref-item:not([hidden])')].map(a=>a.dataset.page),
        groups:[...block.querySelectorAll('.ref-subgroup-title:not([hidden])')].map(x=>x.dataset.page)};})()`);
    assert.equal(glossarySearch.expanded,'true');
    assert(glossarySearch.links.length===11 && glossarySearch.links.every(id=>id==='risk-glossary'),JSON.stringify(glossarySearch));
    assert.deepEqual(glossarySearch.groups,['risk-glossary']);
    const termSearch=await evaluate(`(()=>{const input=document.querySelector('#sideFind');input.value='Risk Appetite';
      input.dispatchEvent(new Event('input',{bubbles:true}));const block=document.querySelector('[data-category="glossaries"]');
      return {links:[...block.querySelectorAll('.ref-item:not([hidden])')].map(a=>a.dataset.page),
        groups:[...block.querySelectorAll('.ref-subgroup-title:not([hidden])')].map(x=>x.dataset.page)};})()`);
    assert(termSearch.links.includes('risk-glossary') && termSearch.groups.includes('risk-glossary'),JSON.stringify(termSearch));
    await visit('', 'document.querySelectorAll(".ref-category").length === 5');
    await evaluate(`document.querySelector('[data-category="coso"] .ref-category').click()`);
    await evaluate(`document.querySelector('a[href="references.html?ref=coso&item=17"]').click()`);
    for(let i=0;i<100;i++){
      if(await evaluate('new URLSearchParams(location.search).get("ref")==="coso" && new URLSearchParams(location.search).get("item")==="17" && document.querySelector(".ref-item.on")?.getAttribute("href")==="references.html?ref=coso&item=17"'))break;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert.equal(await evaluate('new URLSearchParams(location.search).get("item")'),'17');
    assert.equal(await evaluate('document.querySelector("[data-category=coso] .ref-category").getAttribute("aria-expanded")'),'true');
    assert.equal(await evaluate('document.querySelector(".ref-h").textContent'),'Evaluates and Communicates Deficiencies');
    await visit('?ref=risk-glossary&item='+encodeURIComponent('appetite'),
      'document.querySelector("[data-category=glossaries] .ref-category") !== null');
    assert.equal(await evaluate('document.querySelector("[data-category=glossaries] .ref-category").getAttribute("aria-expanded")'),'true');
    await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
    await visit('', 'document.querySelectorAll(".ref-category").length === 5');
    await checkCardActions(1);
    assert.equal(await evaluate(`(()=>{document.querySelector('[data-category="coso"] .ref-category').click();
      return document.querySelector('[data-category="coso"] .ref-category').getAttribute('aria-expanded')})()`),'true');
    assert.equal(await evaluate(`(()=>{document.querySelector('#navToggle').click();
      return document.querySelector('.nav').classList.contains('open')})()`),true);
    console.log('PASS: reference card actions aligned at desktop/mobile widths, category dropdowns, subitem links, active item, sidebar search and mobile toggle');
  }finally{
    await send('Emulation.clearDeviceMetricsOverride');
    socket.close();
  }
})().catch(error=>{console.error(error);process.exitCode=1;});