const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const c=vm.createContext({});
vm.runInContext(fs.readFileSync('data/supplied-tables.js','utf8')+'\nthis.tables=SUPPLIED_TABLES',c);
vm.runInContext(fs.readFileSync('data/supplied-standards.js','utf8')+'\nthis.records=SUPPLIED_RECORDS',c);
vm.runInContext(fs.readFileSync('assets/source-format.js','utf8')+'\nthis.format=sourceFormat',c);
function tokens(s){return (s.toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]).sort();}
const sections={3:'Risks',4:'Controls',5:'Audit Procedures'};
let failures=[];
for(const r of c.records){
  const ref=r.ref.replace('Standard ','');
  for(const [n,name] of Object.entries(sections)){
    const source=r.sourceSections.find(x=>x.number===+n).text;
    const {headers,rows}=c.tables[ref][n];
    const sourceLines=source.split('\n').filter(x=>x.trim());
    const rendered=tokens(headers.join(' ')+' '+rows.map(row=>row.left+' '+row.right).join(' '));
    const original=tokens(sourceLines.join(' '));
    const enough=rows.length>=2 && rows.every(row=>row.left&&row.right);
    if(!enough) failures.push(`${ref} ${name}: incomplete rows`);
    for(const [index,row] of rows.entries()){
      if(/\s{2,}/.test(row.left+' '+row.right))
        failures.push(`${ref} ${name} row ${index+1}: repeated cell whitespace`);
      if(n==='4' && !/^(?:Preventive|Detective|Corrective)(?:\s*\/\s*(?:Preventive|Detective|Corrective))*$/i.test(row.right))
        failures.push(`${ref} ${name} row ${index+1}: invalid control type ${row.right}`);
      if(n==='5' && /^(?:and|or)\s{2,}/i.test(row.right))
        failures.push(`${ref} ${name} row ${index+1}: suspected misplaced procedure conjunction`);
    }
    const a=new Map(),b=new Map();
    for(const t of original)a.set(t,(a.get(t)||0)+1);
    for(const t of rendered)b.set(t,(b.get(t)||0)+1);
    const missing=[...a].filter(([t,count])=>count>(b.get(t)||0)).map(([t,count])=>`${t}:${count-(b.get(t)||0)}`);
    const extra=[...b].filter(([t,count])=>count>(a.get(t)||0)).map(([t,count])=>`${t}:${count-(a.get(t)||0)}`);
    if(missing.length||extra.length) failures.push(`${ref} ${name}: missing ${missing.join(',')} extra ${extra.join(',')}`);
    const html=c.format(source,name,'table',c.tables[ref][n]);
    if(!html.includes('<table>') || (html.match(/<tr>/g)||[]).length!==rows.length+1)
      failures.push(`${ref} ${name}: HTML table has missing rows`);
  }
}
console.log(`${Object.keys(c.tables).length} standards, ${Object.values(c.tables).reduce((a,v)=>a+[3,4,5].reduce((b,n)=>b+v[n].rows.length,0),0)} table rows; ${failures.length} token differences`);
if(failures.length)console.log(failures.slice(0,85).join('\n'));
assert.equal(failures.length,0,'Reconstructed tables must account for all text from source sections');
// Pairings that initially looked ambiguous in the text extractor were checked
// against the column-aligned source PDF. A token multiset alone cannot catch
// a swapped right-hand cell, so pin the reviewed pairs explicitly.
const reviewed=[
  ['9.4',3,'High-risk areas are excluded without explanation','The board may assume assurance coverage exists when it does not.'],
  ['10.2',3,'High turnover is not addressed','Institutional knowledge, continuity, and productivity may decline.'],
  ['10.2',5,'Recalculate available capacity using realistic productive hours.','Staffing schedules, leave plans, training commitments, capacity model'],
  ['12.2',5,'Recalculate selected reported measures','Source data, calculation rules, published results'],
  ['13.2',5,'Reassess selected risk ratings and prioritization decisions','Rating methodology, rationale, supporting evidence'],
  ['14.3',5,'Recalculate quantified impacts and inspect estimation assumptions.','Calculations, source records, estimation methods.'],
  ['4.3',5,'Assess practical training in questioning information and avoiding bias.','Training materials, attendance records, coaching notes'],
  ['9.5',5,'Examine whether coordination affects the nature, scope, or timing of planned work.','Meeting records, revised plans, shared schedules'],
  ['13.3',4,'Map each objective to risks and planned coverage','Preventive / Detective'],
  ['14.6',3,'Missing analytical details','Another competent reviewer cannot repeat the work.']
];
for(const [ref,section,left,right] of reviewed){
  const row=c.tables[ref][section].rows.find(r=>r.left===left);
  assert(row,`${ref} section ${section}: reviewed left cell missing`);
  assert.equal(row.right,right,`${ref} section ${section}: reviewed pairing changed`);
}
assert.equal(c.tables['14.4'][3].rows[0].left,'Generic recommendations');
assert.equal(c.tables['14.4'][3].rows[0].right,'Actions do not address the identified weakness.');
console.log(`PASS: ${reviewed.length} manually reviewed ambiguous pairings`);