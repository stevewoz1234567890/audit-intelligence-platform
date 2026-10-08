/* Verify formatting never silently drops or rewrites supplied PDF wording. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/supplied-standards.js'),'utf8') +
  '\nthis.records=SUPPLIED_RECORDS',context);
vm.runInContext(fs.readFileSync(path.join(root,'data/iia.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(path.join(root,'assets/source-format.js'),'utf8') +
  '\nthis.render=sourceFormat;this.referenceLinks=professionalReferenceLinks',context);
vm.runInContext(fs.readFileSync(path.join(root,'assets/iia.js'),'utf8') +
  '\nthis.clean=cleanSummary',context);

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
const bullet=/[•●▪◦]/u;
for (const rec of context.records){
  const cleaned=context.clean(rec.summary);
  assert(!bullet.test(cleaned),`${rec.ref} summary contains a PDF bullet`);
  assert.deepEqual(words(cleaned),words(rec.summary),`${rec.ref} summary wording changed`);
  assert(context.render(rec.implementation[0],'Considerations for Implementation').includes('<ul class="rq dot">'),
    `${rec.ref} implementation considerations need gold-dot list items`);
}
const boardSupport=context.records.find(r=>r.ref==='Standard 6.3');
const boardImplementation=context.render(boardSupport.implementation[0],'Considerations for Implementation');
assert.equal((boardImplementation.match(/<li>/g)||[]).length,8,
  'Standard 6.3 must have one bullet per distinct consideration');
assert(!boardImplementation.includes('<p>The supplied guidance recommends'),
  'Standard 6.3 considerations must not remain separate paragraphs');
assert(boardImplementation.includes('management at least annually; quarterly private sessions'),
  'Wrapped PDF lines must stay with the same consideration');
assert.equal(renderedText(boardImplementation).replace(/\s+/g,' ').trim(),
  boardSupport.implementation[0].replace(/^Considerations for Implementation\s*/, '').replace(/\s+/g,' ').trim(),
  'Standard 6.3 must preserve the complete text and punctuation');
const mixedImplementation=context.render('Considerations for Implementation\nBefore starting:\n     Review the plan.\n     Inform the board.\nNext, confirm delivery.','Considerations for Implementation');
assert(mixedImplementation.includes('<p>Before starting:</p><ul class="rq dot">'));
assert(mixedImplementation.includes('<li><span>Next, confirm delivery.</span></li>'));
const useOfInformation=context.records.find(r=>r.ref==='Standard 5.1');
assert(context.clean(useOfInformation.summary).includes(
  'using information. Information must not be used for personal gain.'));
assert.equal(context.clean(' One.  Two.'),'One. Two.');
assert.equal(context.clean('  Plain prose with a ✓ check.  '),'Plain prose with a ✓ check.');
assert(requirements.includes('<p>When auditors and management disagree'));
assert(!requirements.includes('<p>Requirements</p>'));
const development=context.records.find(r => r.ref === 'Standard 10.2');
assert(context.render(development.implementation[0],'Considerations for Implementation')
  .includes('Considerations for Implementation — Recruitment'));
const risks=context.render(recommendations.sourceSections[2].text,'Risks','table');
assert(risks.includes('class="source-table"') && risks.includes('tabindex="0"'));
const standards=vm.runInContext('allStandards()',context);
assert.equal(standards.length,52);
let linked=0;
for (const rec of context.records){
  const text=rec.sourceSections.find(s=>s.number===8).text;
  const html=context.render(text,'Professional References');
  const refs=[...text.matchAll(/\bStandard\s+(\d+\.\d+)\b|\b(?<=[;:]\s)(\d+\.\d+)\s*[—–:-]/gi)]
    .map(m=>m[1]||m[2]);
  const hrefs=[...html.matchAll(/class="professional-standard-link" href="standard\.html\?ref=(\d+\.\d+)"/g)].map(m=>m[1]);
  assert.deepEqual(hrefs,refs,`${rec.ref}: every numbered reference must link to its own standard`);
  assert.deepEqual(words(renderedText(html)),words(text.replace(/^\s*[•●▪◦]\s*/gm,'')),
    `${rec.ref}: links must preserve Professional References wording`);
  linked+=hrefs.length;
}
assert.deepEqual([...context.render(context.records.find(r=>r.ref==='Standard 7.1')
  .sourceSections.find(s=>s.number===8).text,'Professional References')
  .matchAll(/class="professional-standard-link" href="standard\.html\?ref=(\d+\.\d+)"/g)].map(m=>m[1]),
  ['7.1','6.2','2.3','11.3','11.4']);
const boardReferences=context.render(boardSupport.sourceSections.find(s=>s.number===8).text,'Professional References');
assert(boardReferences.includes('<li><span>Related standards: <a class="professional-standard-link" href="standard.html?ref=6.1">6.1 — Internal Audit Mandate</a>;</span></li><li><span><a class="professional-standard-link" href="standard.html?ref=6.2">6.2 — Internal Audit Charter</a>.</span></li>'),
  '6.3 related standards must be individually linked on separate lines without changing punctuation');
assert.equal(context.referenceLinks('6.1 — Internal Audit Mandate; 6.2 — Internal Audit Charter.',standards,true),
  '<a class="professional-standard-link" href="standard.html?ref=6.1">6.1 — Internal Audit Mandate</a>; <a class="professional-standard-link" href="standard.html?ref=6.2">6.2 — Internal Audit Charter</a>.');
assert.equal(context.referenceLinks('Standard 7.1 — Organizational Independence.',standards),
  '<a class="professional-standard-link" href="standard.html?ref=7.1">Standard 7.1 — Organizational Independence</a>.');
assert.equal(context.referenceLinks('Standard 99.9 — Unknown & <unsafe>',standards),
  'Standard 99.9 — Unknown &amp; &lt;unsafe&gt;');
assert(linked>150,`Expected broad Professional References coverage; found ${linked}`);
console.log(`PASS: ${count} PDF sections retain their wording after formatting`);
console.log(`PASS: ${linked} numbered references across 46 PDF-backed standards link to their exact pages`);