/* Capture local comparison screenshots with Chrome --remote-debugging-port=9339.
   Writes to the OS temp directory, not the published site. */
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const http=require('node:http');
const {pathToFileURL}=require('node:url');
const root=path.resolve(__dirname,'..');
http.get('http://127.0.0.1:9339/json/list',res=>{
  let body='';res.on('data',part=>body+=part);res.on('end',async()=>{
    const page=JSON.parse(body).find(x=>x.type==='page');
    if(!page)throw Error('No Chrome page available');
    const socket=new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((done,fail)=>{socket.onopen=done;socket.onerror=fail;});
    let seq=0;const pending=new Map();
    socket.onmessage=({data})=>{const result=JSON.parse(data);if(!pending.has(result.id))return;
      const [done,fail]=pending.get(result.id);pending.delete(result.id);
      result.error?fail(Error(result.error.message)):done(result.result);};
    const send=(method,params={})=>new Promise((done,fail)=>{
      const id=++seq;pending.set(id,[done,fail]);socket.send(JSON.stringify({id,method,params}));});
    const refs=process.argv.slice(2).filter(x=>/^\d+\.\d+$/.test(x));
    for(const viewport of [{name:'mobile',width:390,height:844,mobile:true},
      {name:'desktop',width:1366,height:900,mobile:false}]){
    for(const ref of refs.length?refs:['1.1','3.1','10.2','12.2','14.4','14.6','15.2']){
      await send('Emulation.setDeviceMetricsOverride',{
        width:viewport.width,height:viewport.height,deviceScaleFactor:1,mobile:viewport.mobile});
      await send('Page.navigate',{url:pathToFileURL(path.join(root,'standard.html')).href+'?ref='+ref});
      let ready=false;
      for(let attempt=0;attempt<100;attempt++){
        const r=await send('Runtime.evaluate',{expression:`location.search === '?ref=${ref}' && !!document.querySelector('#requirements .card')`,returnByValue:true});
        if(r.result.value){ready=true;break;}
        await new Promise(done=>setTimeout(done,100));
      }
      if(!ready)throw Error('Page not ready: '+ref);
      await send('Runtime.evaluate',{expression:'document.fonts.ready',awaitPromise:true});
      for(const [name,selector] of [['requirements','#requirements'],['risks','#risks'],
        ...(ref==='15.2'?[['practical','#practical']]:[]),['source','#source']]){
        const r=await send('Runtime.evaluate',{expression:`(()=>{const el=document.querySelector('${selector}');if(!el)return false;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-95,behavior:'instant'});return true})()`,returnByValue:true});
        if(!r.result.value)continue;
        await new Promise(done=>setTimeout(done,250));
        const capture=await send('Page.captureScreenshot',{format:'png',fromSurface:true});
        const dest=path.join(os.tmpdir(),`audit-review-${viewport.name}-${ref}-${name}.png`);
        fs.writeFileSync(dest,Buffer.from(capture.data,'base64'));
        console.log(dest);
      }
    }
    }
    await send('Emulation.clearDeviceMetricsOverride');socket.close();
  });
}).on('error',e=>{console.error(e);process.exitCode=1;});