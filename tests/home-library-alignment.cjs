/* Check library-card dividers and calls to action at desktop and mobile widths.
   Requires Chrome --remote-debugging-port=9339. */
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
  let id=0;
  const pending=new Map();
  socket.onmessage=({data})=>{
    const msg=JSON.parse(data);
    if(!pending.has(msg.id))return;
    const [resolve,reject]=pending.get(msg.id);pending.delete(msg.id);
    msg.error?reject(Error(msg.error.message)):resolve(msg.result);
  };
  const send=(method,params={})=>new Promise((resolve,reject)=>{
    const key=++id;pending.set(key,[resolve,reject]);socket.send(JSON.stringify({id:key,method,params}));
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(result.exceptionDetails)throw Error(result.exceptionDetails.text);
    return result.result.value;
  };
  try{
    const base=process.env.HOME_LIBRARY_BASE
      ? new URL('index.html',process.env.HOME_LIBRARY_BASE).href
      : pathToFileURL(path.join(root,'index.html')).href;
    const url=new URL(base);
    url.searchParams.set('layout-test',String(Date.now()));
    await send('Page.navigate',{url:url.href});
    for(let attempt=0;attempt<100;attempt++){
      if(await evaluate(`location.href === ${JSON.stringify(url.href)} && document.readyState === 'complete' && document.querySelectorAll('.lib-card').length === 3`))break;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert.equal(await evaluate('document.querySelectorAll(".lib-card").length'),3);
    const standardsAction=await evaluate(`(()=>{
      const card=document.querySelector('.lib-card[href="standards.html"]');
      const action=card.querySelector('.go');
      const book=action.querySelector('svg');
      return {text:action.textContent.trim(),href:card.getAttribute('href'),
        paths:book?.querySelectorAll('path').length,
        stroke:book && getComputedStyle(book).stroke,
        fill:book && getComputedStyle(book).fill,
        alignment:getComputedStyle(action).alignItems};
    })()`);
    assert.deepEqual(standardsAction,{text:'Explore the Standards →',href:'standards.html',
      paths:2,stroke:'rgb(201, 168, 74)',fill:'none',alignment:'center'});
    for(const width of [1280,1024,901,390]){
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
      await evaluate('document.fonts.ready');
      const layout=await evaluate(`(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,
        cards:[...document.querySelectorAll('.lib-card')].map(card=>({
          cardTop:card.getBoundingClientRect().top,
          divider:card.querySelector('.row').getBoundingClientRect().bottom,
          button:card.querySelector('.go').getBoundingClientRect().top,
          visible:card.querySelector('.go').getBoundingClientRect().width>0
        }))}))()`);
      assert(!layout.overflow,`homepage overflows at ${width}px`);
      assert(layout.cards.every(card=>card.visible),`missing button at ${width}px`);
      if(width>900){
        const aligned=(key)=>Math.max(...layout.cards.map(card=>card[key]))-
          Math.min(...layout.cards.map(card=>card[key]))<1;
        assert(aligned('divider'),`dividers are misaligned at ${width}px: ${JSON.stringify(layout.cards)}`);
        assert(aligned('button'),`buttons are misaligned at ${width}px: ${JSON.stringify(layout.cards)}`);
      }
      console.log(`PASS: homepage library card layout at ${width}px`);
    }
  }finally{
    await send('Emulation.clearDeviceMetricsOverride');socket.close();
  }
})().catch(error=>{console.error(error);process.exitCode=1;});