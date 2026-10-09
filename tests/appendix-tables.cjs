/* Check the manually paired appendix cells against the text extracted from the PDFs. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const c = vm.createContext({});
for (const [file,key,variable] of [
  ['data/supplied-standards.js','records','SUPPLIED_RECORDS'],
  ['data/supplied-appendix-tables.js','appendices','SUPPLIED_APPENDIX_TABLES'],
  ['assets/source-format.js','format','sourceFormat']
]) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8')+`\nthis.${key}=${variable}`,c);
const tokens = text => (String(text).toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]);
function check(ref,text,part,table){
  const header = table.columns.join(' ');
  const values = table.rows.map(row => row.join(' ')).join(' ');
  const expected = tokens(header+' '+values);
  const actual = tokens(part);
  const counts = xs => xs.reduce((m,x) => m.set(x,(m.get(x)||0)+1),new Map());
  const left=counts(expected),right=counts(actual);
  const missing=[...right].filter(([w,n])=>n>(left.get(w)||0)).map(([w,n])=>`${w}:${n-(left.get(w)||0)}`);
  const extra=[...left].filter(([w,n])=>n>(right.get(w)||0)).map(([w,n])=>`${w}:${n-(right.get(w)||0)}`);
  // Repeated PDF page-break headers may appear in the extracted source.
  const repeated=ref==='14.1'?['characteristic:1','meaning:1']:[];
  assert.deepEqual({missing,extra},{missing:repeated,extra:[]},`${ref}: ${header} does not preserve extracted words`);
  assert.equal(table.rows.every(row=>row.length===2&&row.every(Boolean)),true,ref);
  return c.format(text,'Considerations for Implementation',null,null,c.appendices[ref]);
}
// Table boundaries match the headings and the following prose in the source summaries.
const specs=[
  ['10.2','requirement','Resource characteristic',/Resource characteristic\s+Meaning([\s\S]*?)The CAE must communicate/i],
  ['12.2','implementation','Category',/Category\s+Possible measure([\s\S]*?)Management action completion is not solely/i],
  ['13.4','implementation','Source',/Source\s+Examples([\s\S]*?)Auditors should consider risk tolerance/i],
  ['14.1','requirement','Characteristic',/Characteristic\s+Meaning([\s\S]*?)Internal auditors must:/i],
  ['14.3','implementation','Element',/Element\s+Description([\s\S]*)/i],
  ['14.6','implementation','Workpaper',/Workpaper\s+Purpose([\s\S]*?)Basic Workpaper Format/i]
];
for(const [ref,field,name,re] of specs){
  const rec=c.records.find(r=>r.ref==='Standard '+ref);
  const text=field==='implementation'?rec.implementation[0]:rec.requirement;
  const match=text.match(re);
  assert(match,`${ref} embedded table absent`);
  const html=check(ref,text,name+' '+c.appendices[ref][name].columns[1]+' '+match[1],c.appendices[ref][name]);
  assert(html.includes('source-data-table'),ref);
}
const rec=c.records.find(r=>r.ref==='Standard 15.2');
const appendix=rec.practicalApplication;
const fields=appendix.match(/Field\s+Purpose([\s\S]*?)Suggested Status Labels/);
const statuses=appendix.match(/Status\s+Meaning([\s\S]*?)Overdue should be a separate indicator/);
assert(fields&&statuses);
for (const [name,match] of [['Field',fields],['Status',statuses]]){
  const table=c.appendices['15.2'][name];
  const original=tokens((name+' '+table.columns[1]+' '+match[1])
    .replace(/^\s*Status\s+Meaning\s*$/gmi,''));
  const reconstructed=tokens(table.columns.join(' ')+' '+table.rows.map(row=>row.join(' ')).join(' '));
  const counts=xs=>xs.reduce((m,x)=>m.set(x,(m.get(x)||0)+1),new Map());
  const a=counts(original),b=counts(reconstructed);
  const missing=[...a].filter(([word,count])=>count!==(b.get(word)||0));
  assert.deepEqual(missing,[],`15.2 ${name}: missing or extra extracted words`);
}
const html=c.format(appendix,'Practical Application','practical',null,c.appendices['15.2']);
assert.equal((html.match(/class="tbl-wrap source-data-table"/g)||[]).length,2);
console.log('PASS: 8 embedded PDF tables render as verified two-column tables');