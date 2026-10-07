/* Verify the published GitHub Pages release in a Chrome tab on CDP port 9339.
   Run this separately from all other browser smoke tests. */
const assert=require('node:assert/strict');
const http=require('node:http');
const base='https://stevewoz1234567890.github.io/audit-intelligence-platform/';
http.get('http://127.0.0.1:9339/json/list',res=>{
  let body='';res.on('data',part=>body+=part);res.on('end',()=>{(async()=>{
    const page=JSON.parse(body).find(x=>x.type==='page');
    assert(page,'Chrome tab not found');
    const ws=new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((done,fail)=>{ws.onopen=done;ws.onerror=fail;});
    let id=0;const pending=new Map();
    ws.onmessage=({data})=>{const msg=JSON.parse(data);if(!pending.has(msg.id))return;
      const [done,fail]=pending.get(msg.id);pending.delete(msg.id);
      msg.error?fail(Error(msg.error.message)):done(msg.result);};
    const send=(method,params={})=>new Promise((done,fail)=>{
      const next=++id;pending.set(next,[done,fail]);ws.send(JSON.stringify({id:next,method,params}));});
    const evalJS=async expression=>{
      const response=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
      if(response.exceptionDetails)throw Error(response.exceptionDetails.text);
      return response.result.value;
    };
    async function visit(url,ready){
      await send('Page.navigate',{url:base+url});
      for(let n=0;n<120;n++){
        if(await evalJS(ready))return;
        await new Promise(done=>setTimeout(done,100));
      }
      throw Error('Live page not ready: '+url);
    }
    try{
      await send('Emulation.setDeviceMetricsOverride',{
        width:390,height:844,deviceScaleFactor:1,mobile:true});
      await visit('standard.html?ref=14.4&release=688e2bd',
        `document.querySelector('#risks .source-data-table tbody tr') !== null`);
      const table=await evalJS(`(()=>({rows:document.querySelectorAll('#risks .source-data-table tbody tr').length,
        left:document.querySelector('#risks tbody tr td:first-child')?.textContent.trim(),
        right:document.querySelector('#risks tbody tr td:last-child')?.textContent.trim(),
        mobile:getComputedStyle(document.querySelector('#risks tbody tr')).display,
        hasFormatter:typeof sourceFormat==='function'}))()`);
      assert(table.rows>=4 && table.left==='Generic recommendations' &&
        table.right==='Actions do not address the identified weakness.' &&
        table.mobile==='block' && table.hasFormatter,JSON.stringify(table));
      await visit('assistant.html?q=What%20risks%20relate%20to%20Standard%2014.6%3F',
        `document.querySelector('.msg.a .mb')?.textContent.includes('Missing analytical details')`);
      assert(await evalJS(`!!document.querySelector('.msg.a .mb a[href="standard.html?ref=14.6#risks"]')`));
      await visit('references.html?ref=coso&item=17',
        `document.querySelector('.ref-h')?.textContent.includes('Evaluates and Communicates Deficiencies')`);
      const assets=await evalJS(`Promise.all(['data/supplied-tables.js','data/supplied-appendix-tables.js',
        'assets/source-format.js','assets/standards/standard-1.pdf',
        'assets/standards/standard-2.pdf','assets/standards/public-sector.pdf']
        .map(async path=>({path,status:(await fetch(path,{cache:'no-store'})).status})))`);
      assert(assets.every(x=>x.status===200),JSON.stringify(assets));
      console.log('PASS: published mobile table, imported assistant answer, COSO item, and six new release assets');
    }finally{await send('Emulation.clearDeviceMetricsOverride');ws.close();}
  })().catch(error=>{console.error(error);process.exitCode=1;});});
}).on('error',error=>{console.error(error);process.exitCode=1;});