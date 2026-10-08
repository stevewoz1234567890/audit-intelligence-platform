/* Verify formatting never silently drops or rewrites supplied PDF wording. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/supplied-standards.js'),'utf8') +
  '\nthis.records=SUPPLIED_RECORDS',context);
vm.runInContext(fs.readFileSync(path.join(root,'assets/source-format.js'),'utf8') +
  '\nthis.render=sourceFormat',context);

function words(text){
  return (text.match(/[\p{L}\p{N}]+/gu) || []).map(w => w.toLowerCase());
}
function renderedText(html){
  return html.replace(/<span class="source-table-note">[^<]*<\/span>/g,'')
    .replace(/<[^>]*>/g,' ').replace(/&#39;/g,"'").replace(/&quot;/g,'"')
    .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}
let count=0;
function verify(ref,text,title,kind){
  if (!text) return;
  const rendered=context.render(text,title,kind);
  const lines=text.trim().split(/\r?\n/);
  const first=lines[0].trim();
  if (first.toLowerCase() === title.toLowerCase()) lines.shift();
  else if (first.toLowerCase().startsWith(title.toLowerCase()+' — '))
    lines[0]=first.slice(title.length+3);
  const expected=words(lines.map(line => line.replace(/^\s*\d+[.)]\s+/,'')).join(' '));
  const actual=words(renderedText(rendered));
  const at=expected.findIndex((w,i) => actual[i] !== w);
  assert.equal(at,-1,`${ref} ${title}: wording differs at token ${at}: ${expected.slice(Math.max(0,at-3),at+8).join(' ')} vs ${actual.slice(Math.max(0,at-3),at+8).join(' ')}`);
  assert.equal(actual.length,expected.length,`${ref} ${title}: dropped or added text`);
  count++;
}
for (const r of context.records){
  verify(r.ref,r.requirement,'Requirements');
  verify(r.ref,r.implementation[0],'Considerations for Implementation');
  verify(r.ref,r.conformance[0],'Examples of Evidence of Conformance');
  for (const s of r.sourceSections.filter(x => x.number >= 2))
    verify(r.ref,s.text,s.title,[3,4,5].includes(s.number) ? 'table' : 'list');
  if (r.practicalApplication) verify(r.ref,r.practicalApplication,'Practical Application','practical');
}
assert.equal(context.records.length,46);
const recommendations=context.records.find(r => r.ref === 'Standard 14.4');
const requirements=context.render(recommendations.requirement,'Requirements');
assert(requirements.includes('<ul class="rq dot">'));
assert(context.render(' Evidence A\n Evidence B','Examples of Evidence of Conformance')
  .includes('<ul class="rq tick"><li><span>Evidence A</span></li><li><span>Evidence B</span></li></ul>'));
assert(context.render(' Flag A\n Flag B','Red Flags')
  .includes('<ul class="rq flag"><li><span>Flag A</span></li><li><span>Flag B</span></li></ul>'));
assert(context.render(' Other item','Audit Focus Areas').includes('<ul class="rq dot">'));
assert(requirements.includes('<p>When auditors and management disagree'));
assert(!requirements.includes('<p>Requirements</p>'));
const development=context.records.find(r => r.ref === 'Standard 10.2');
assert(context.render(development.implementation[0],'Considerations for Implementation')
  .includes('Considerations for Implementation — Recruitment'));
const risks=context.render(recommendations.sourceSections[2].text,'Risks','table');
assert(risks.includes('class="source-table"') && risks.includes('tabindex="0"'));
console.log(`PASS: ${count} PDF sections retain their wording after formatting`);