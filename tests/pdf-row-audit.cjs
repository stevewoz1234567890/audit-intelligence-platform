/* Independent row-anchor check against each PDF's table-aware extraction.
   Text coverage cannot detect swapped cells, so require each row's leading
   left/right words to occur on the same PDF line. Ambiguities are reported,
   not silently interpreted as valid pairings. */
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const c=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/supplied-tables.js'),'utf8')+'\nthis.tables=SUPPLIED_TABLES',c);
const exe=process.env.PDFTOTEXT||'C:/Program Files/Git/mingw64/bin/pdftotext.exe';
const tokens=s=>(s.toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]);
const pdfs=new Map();
function pdf(n){
  if(!pdfs.has(n)){
    const output=path.join(os.tmpdir(),`audit-pair-${process.pid}-${n}.txt`);
    try{
      execFileSync(exe,['-table','-enc','UTF-8',path.join(root,`assets/standards/standard-${n}.pdf`),output]);
      pdfs.set(n,fs.readFileSync(output,'utf8').replace(/\r/g,'').replace(/\f/g,'\n').split('\n'));
    }finally{if(fs.existsSync(output))fs.unlinkSync(output);}
  }
  return pdfs.get(n);
}
const names={3:'Risks',4:'Controls',5:'Audit Procedures'};
const exceptions=[];
let checked=0;
for(const [ref,sections] of Object.entries(c.tables)){
  const lines=pdf(+ref.split('.')[0]);
  const begins=lines.flatMap((line,i)=>new RegExp('^\\s*(?:Standard\\s+)?'+ref.replace('.','\\.')+'\\s*[—–-]','i').test(line) &&
    lines.slice(i+1,i+9).some(s=>/^\s*(?:1\.\s+)?Standards\s*&\s*Guidance\s*$/i.test(s))?[i]:[]);
  if(!begins.length)throw Error(`No PDF heading for ${ref}`);
  const begin=begins.at(-1);
  const end=lines.findIndex((line,i)=>i>begin && /^\s*(?:Standard\s+)?\d+\.\d+\s*[—–-]/i.test(line) &&
    lines.slice(i+1,i+9).some(s=>/^\s*(?:1\.\s+)?Standards\s*&\s*Guidance\s*$/i.test(s)));
  const block=lines.slice(begin,end<0?lines.length:end);
  for(const [number,table] of Object.entries(sections)){
    const n=+number;
    const from=block.findIndex(line=>new RegExp('^\\s*(?:'+n+'\\.\\s+)?'+names[n]+'\\b','i').test(line));
    const next=n===3?'Controls':n===4?'Audit Procedures':'Red Flags';
    const to=block.findIndex((line,i)=>i>from && new RegExp('^\\s*(?:'+(n+1)+'\\.\\s*)?'+next.replace(' ','\\s+')+'\\b','i').test(line));
    if(from<0||to<0)throw Error(`${ref} ${n}: section bounds missing (from ${from}, next ${next})`);
    const segment=block.slice(from,to).map((line,i)=>({i,line,words:tokens(line)}));
    let previous=-1;
    const anchors=[];
    for(const [index,row] of table.rows.entries()){
      checked++;
      const left=tokens(row.left).slice(0,Math.min(3,tokens(row.left).length)).join(' ');
      const right=tokens(row.right).slice(0,n===4?1:Math.min(2,tokens(row.right).length)).join(' ');
      // Inline cells may contain run-on text at the inferred boundary. Check
      // the line itself, not a reconstructed record or the old -layout import.
      const candidates=segment.filter(x=>x.i>previous && x.words.join(' ').includes(left) && x.words.join(' ').includes(right));
      if(candidates.length!==1){exceptions.push(`${ref} ${n} row ${index+1}: ${candidates.length} PDF anchors for ${JSON.stringify(row)}`);continue;}
      previous=candidates[0].i;
      anchors.push(previous);
    }
    if(anchors.length!==table.rows.length)continue;
    // Anchor matching alone can miss a continuation attached to the wrong
    // row. Compare ALL words between adjacent anchored rows, independently
    // of the layout-imported records used by the renderer.
    for(const [index,row] of table.rows.entries()){
      const until=anchors[index+1]??segment.length;
      const source=segment.slice(anchors[index],until).map(x=>x.line)
        .filter(line=>!/^\s*(?:Risk|Suggested Control|Control|Audit procedure|Procedure)\s{2,}(?:Potential consequence|Indicative|Type|Control Type|Required evidence|Evidence to [Ee]xamine|Evidence)\s*$/i.test(line))
        .join(' ');
      const actual=tokens(source),expected=tokens(row.left+' '+row.right);
      const tally=words=>words.reduce((m,w)=>(m.set(w,(m.get(w)||0)+1),m),new Map());
      const a=tally(actual),b=tally(expected);
      const missing=[...b].filter(([w,n])=>n>(a.get(w)||0)).map(([w,n])=>`${w}:${n-(a.get(w)||0)}`);
      const extra=[...a].filter(([w,n])=>n>(b.get(w)||0)).map(([w,n])=>`${w}:${n-(b.get(w)||0)}`);
      if(missing.length||extra.length)exceptions.push(`${ref} ${n} row ${index+1}: row text missing ${missing.join(',')} extra ${extra.join(',')}`);
    }
  }
}
console.log(`Checked ${checked} row pairings against PDF line anchors; ${exceptions.length} require inspection`);
for(const e of exceptions)console.log(e);
if(exceptions.length)process.exitCode=1;