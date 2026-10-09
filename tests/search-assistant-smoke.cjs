/* Browser regression for content search, precise links and assistant answers.
   Run with Chrome --remote-debugging-port=9339; do not run alongside other CDP tests. */
const assert=require('node:assert/strict');
const http=require('node:http');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
const pages=()=>new Promise((resolve,reject)=>http.get('http://127.0.0.1:9339/json/list',res=>{
  let body='';res.on('data',part=>body+=part);res.on('end',()=>resolve(JSON.parse(body)));
}).on('error',reject));
(async()=>{
  const page=(await pages()).find(x=>x.type==='page');
  assert(page,'No Chrome page available');
  const socket=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  let id=0;const pending=new Map();
  socket.onmessage=({data})=>{const m=JSON.parse(data);if(!pending.has(m.id))return;
    const [resolve,reject]=pending.get(m.id);pending.delete(m.id);
    m.error?reject(Error(m.error.message)):resolve(m.result);};
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const key=++id;pending.set(key,[resolve,reject]);socket.send(JSON.stringify({id:key,method,params}));});
  const evaluate=async expression=>{
    const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(r.exceptionDetails)throw Error(r.exceptionDetails.text);
    return r.result.value;
  };
  async function go(file,ready){
    const at=file.search(/[?#]/);
    const name=at<0?file:file.slice(0,at),suffix=at<0?'':file.slice(at);
    await send('Page.navigate',{url:pathToFileURL(path.join(root,name)).href+suffix});
    for(let i=0;i<100;i++){
      if(await evaluate(ready))return;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    throw Error('Page did not load: '+file+'; state '+JSON.stringify(await evaluate(`({href:location.href,loaded:!!document.querySelector('#risks'),highlighted:document.querySelectorAll('.search-target').length,error:document.body.textContent.slice(0,130)})`)));
  }
  try{
    await go('index.html','typeof searchPlatform === "function" && typeof searchReferences === "function"');
    const search=await evaluate(`(()=>({number:searchPlatform('14.6')[0]?.hits[0]?.anchor,
      risk:searchPlatform('Another competent reviewer cannot repeat the work.')[0],
      ref:searchReferences('COSO Principle 17')[0]?.item.id,
      unsupported:searchPlatform('capital of France').length}))()`);
    assert.equal(search.number,'requirements');
    assert.equal(search.risk.s.ref,'14.6');
    assert.equal(search.risk.hits[0].anchor,'risks');
    assert(search.risk.hits[0].match.toLowerCase().includes('another competent reviewer'));
    assert.equal(search.ref,'17');
    assert.equal(search.unsupported,0);
    assert.equal(await evaluate(`searchPlatform('red flags')[0]?.hits[0]?.anchor`),'redflags');
    const domainHit=await evaluate(`searchDomainI('Create, Protect and Sustain Value')[0]?.hits[0]?.anchor`);
    assert(['domain-i-purpose','domain-i-practical'].includes(domainHit),domainHit);
    await go('standards.html?domain=I#'+domainHit,
      `document.getElementById(${JSON.stringify(domainHit)})?.textContent.includes('Create, Protect and Sustain Value')`);
    await go('index.html','typeof searchPlatform === "function" && typeof searchReferences === "function"');
    const publicHit=await evaluate(`searchPublicSector('public sector funding')[0]?.anchor`);
    assert.equal(publicHit,'ps-funding');
    await go('standards.html?q=public%20sector%20funding',
      `!!document.querySelector('a.hit[href="standards.html?domain=public-sector#ps-funding"]')`);
    await go('index.html','typeof searchPlatform === "function" && typeof searchReferences === "function"');
    const coverage=await evaluate(`(()=>({
      standards:allStandards().map(s=>({ref:s.ref,hit:searchPlatform(s.ref)[0]?.s.ref,record:!!standardRecord(s.ref)})),
      references:REF_PAGES.map(page=>({id:page.id,first:refItems(page)[0]?.item.id,
        searchable:!!searchReferences(page.title+' '+refItems(page)[0]?.item.title).find(x=>x.page.id===page.id)})),
      tools:TOOLS.map(tool=>({id:tool.id,hit:matchCatalog(TOOLS,tool.title)[0]?.id,
        field:matchCatalog(TOOLS,tool.fields[0].label).some(x=>x.id===tool.id)}))
    }))()`);
    assert(coverage.standards.every(x=>x.ref===x.hit && x.record),JSON.stringify(coverage.standards.filter(x=>x.ref!==x.hit||!x.record)));
    assert(coverage.references.every(x=>x.first && x.searchable),JSON.stringify(coverage.references));
    assert(coverage.tools.every(x=>x.hit===x.id && x.field),JSON.stringify(coverage.tools));
    const link=await evaluate(`(()=>{const q=document.querySelector('#q');q.value='Another competent reviewer cannot repeat the work.';
      q.form.requestSubmit();return [...document.querySelectorAll('#hits a.hit')].find(a=>a.getAttribute('href')?.includes('ref=14.6'))?.getAttribute('href')})()`);
    assert(link?.includes('ref=14.6') && link.includes('#risks') && link.includes('match='),link);
    await go('standard.html?ref=14.6&match='+encodeURIComponent(search.risk.hits[0].match)+'#risks',
      'document.querySelector("#risks .search-target") !== null');
    assert.equal(await evaluate('document.querySelector("#risks .search-target").textContent.includes("Another competent reviewer")'),true);
    const oldHit=await evaluate(`searchPlatform('Confidentiality and objectivity declarations')[0]?.hits[0]`);
    assert.equal(oldHit.anchor,'controls');
    await go('standard.html?ref=1.3&match='+encodeURIComponent(oldHit.match)+'#controls',
      `document.querySelector('#controls .row.search-target')?.textContent.includes('Confidentiality')`);
    for(const major of [1,2]){
      await go(`standard.html?ref=${major}.1`, `!!document.querySelector('#provenance a[href="assets/standards/standard-${major}.pdf"]')`);
    }
    await go('standards.html?domain=public-sector',
      `!!document.querySelector('a[href="assets/standards/public-sector.pdf"]')`);
    await go('references.html?ref=coso&item=17','document.querySelector(".ref-h")?.textContent.includes("Evaluates and Communicates Deficiencies")');
    await go('references.html','!!document.querySelector(".ref-grid")');
    const refLink=await evaluate(`(()=>{const q=document.querySelector('#q');q.value='evaluates and communicates deficiencies';
      q.form.requestSubmit();return document.querySelector('.results a.hit')?.getAttribute('href')})()`);
    assert(refLink?.includes('ref=coso&item=17'),refLink);
    await go('assistant.html','!!document.querySelector(".msg.a .mb")');
    async function ask(q){
      const before=await evaluate('document.querySelectorAll(".msg.a .mb").length');
      await evaluate(`(()=>{document.querySelector('#q').value=${JSON.stringify(q)};document.querySelector('#ask').click()})()`);
      for(let i=0;i<70;i++){
        const state=await evaluate(`(()=>{const x=[...document.querySelectorAll('.msg.a .mb')][${before}];return x?{
          text:x.textContent,links:[...x.querySelectorAll('a')].map(a=>a.getAttribute('href'))}:null})()`);
        if(state)return state;
        await new Promise(resolve=>setTimeout(resolve,50));
      }
      throw Error('No answer: '+q);
    }
    const risk=await ask('What risks relate to Standard 14.6?');
    assert(risk.text.includes('Missing analytical details') && risk.links.some(x=>x.includes('14.6#risks')),JSON.stringify(risk));
    const mixed=await ask('What does Standard 14.6 require for insight?');
    assert(mixed.links.some(x=>x.includes('ref=14.6#requirements')) &&
      !mixed.links.some(x=>x.includes('domain=I')),JSON.stringify(mixed));
    const useOfInformation=await ask('What does Standard 5.1 require?');
    assert(useOfInformation.text.includes('using information. Information must not be used for personal gain.'),
      'Standard 5.1 assistant summary should separate sentences with a normal space');
    assert(!/[•●▪◦\uFFFD\uFFFC]/.test(useOfInformation.text),
      'Assistant requirements must not show raw PDF or broken glyphs');
    const procedures=await ask('Which audit procedures and evidence relate to Standard 14.6?');
    assert(procedures.text.includes('evidence') && procedures.links.some(x=>x.includes('14.6#procedures')),JSON.stringify(procedures));
    const checklist=await ask('Create an audit checklist based on Standard 9.4.');
    assert(checklist.text.includes('Practical suggestion') && checklist.links.some(x=>x.includes('9.4#procedures')),JSON.stringify(checklist));
    const coso=await ask('What does COSO Principle 17 mean?');
    assert(coso.text.includes('Evaluates and Communicates Deficiencies') && coso.links.some(x=>x.includes('ref=coso&item=17')),JSON.stringify(coso));
    const scope=await ask('What is the capital of France?');
    assert(scope.text.includes('Nothing in this platform covers that closely enough.'));
    const publicAnswer=await ask('What about public sector funding?');
    assert(publicAnswer.links.some(x=>x.includes('domain=public-sector#ps-funding')));
    for(const {ref} of coverage.standards){
      const requirements=await ask('What does Standard '+ref+' require?');
      assert(requirements.links.some(x=>x.includes('ref='+ref+'#requirements')),
        `${ref} missing requirements citation`);
      assert(!requirements.text.includes('Not enough content in this platform.'),
        `${ref} incorrectly reports missing requirements`);
      const implementation=await ask('How can I implement Standard '+ref+'?');
      assert(implementation.links.some(x=>x.includes('ref='+ref+'#implementation')),
        `${ref} missing implementation citation`);
      const conformance=await ask('What evidence demonstrates conformance with Standard '+ref+'?');
      assert(conformance.links.some(x=>x.includes('ref='+ref+'#conformance')),
        `${ref} missing conformance citation`);
      if(+ref.split('.')[0]>=3){
        const risks=await ask('What risks relate to Standard '+ref+'?');
        assert(risks.links.some(x=>x.includes('ref='+ref+'#risks')) &&
          !risks.text.includes('Not enough content in this platform.'),`${ref} missing PDF risks`);
        const steps=await ask('Which audit procedures and evidence relate to Standard '+ref+'?');
        assert(steps.links.some(x=>x.includes('ref='+ref+'#procedures')) &&
          !steps.text.includes('Not enough content in this platform.'),`${ref} missing PDF procedure/evidence pairs`);
        const controls=await ask('What controls relate to Standard '+ref+'?');
        assert(controls.links.some(x=>x.includes('ref='+ref+'#controls')) &&
          !controls.text.includes('Not enough content in this platform.'),`${ref} missing PDF controls`);
        const flags=await ask('What red flags relate to Standard '+ref+'?');
        assert(flags.links.some(x=>x.includes('ref='+ref+'#redflags')) &&
          !flags.text.includes('Not enough content in this platform.'),`${ref} missing PDF red flags`);
      }
    }
    for(const {id} of coverage.references){
      const item=await evaluate(`(()=>{const p=REF_PAGES.find(x=>x.id===${JSON.stringify(id)});
        const entry=refItems(p)[0].item;return {title:p.title,item:entry.title,num:entry.num||'',id:entry.id}})()`);
      const prompt='Tell me about '+item.item+' in '+item.title+(item.num?' Principle '+item.num:'');
      const response=await ask(prompt);
      assert(response.links.some(link=>link.includes('ref='+encodeURIComponent(id)+'&item='+encodeURIComponent(item.id))),
        `${id} ${JSON.stringify({item,prompt})} missing item citation: ${JSON.stringify(response.links)}`);
      await go('references.html?ref='+encodeURIComponent(id)+'&item='+encodeURIComponent(item.id),
        `document.querySelector('.ref-h')?.textContent.includes(${JSON.stringify(item.item)})`);
      await go('assistant.html','!!document.querySelector(".msg.a .mb")');
    }
    for(const {id} of coverage.tools){
      const title=await evaluate(`TOOLS.find(t=>t.id===${JSON.stringify(id)}).title`);
      const response=await ask('How do I use the '+title+'?');
      assert(response.links.some(link=>link.includes('tools.html?tool='+id)),`${id} missing tool citation`);
      await go('tools.html?tool='+encodeURIComponent(id),
        `document.querySelector('#sheet') && document.querySelector('#title')?.textContent===${JSON.stringify(title)}`);
      assert(await evaluate(`document.querySelectorAll('#sheet [data-k]').length>0`),id+' worksheet missing fields');
      await go('assistant.html','!!document.querySelector(".msg.a .mb")');
    }
    console.log('PASS: 52 standards, 46 imported audit sections, six reference details and worksheets, precise links and unsupported fallback');
  }finally{socket.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});