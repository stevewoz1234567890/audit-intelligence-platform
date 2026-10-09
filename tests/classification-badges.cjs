/* Regression coverage for classification badges in every populated standard. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = vm.createContext({});
for (const file of ['data/library.js', 'data/supplied-standards.js',
  'data/supplied-tables.js', 'data/iia.js', 'assets/source-format.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, {filename:file});
}
const data = vm.runInContext('({RECORDS, SUPPLIED_RECORDS, SUPPLIED_TABLES, DOMAINS, sourceFormat, classificationBadges})', context);
const {RECORDS, SUPPLIED_RECORDS, SUPPLIED_TABLES, DOMAINS, sourceFormat, classificationBadges} = data;
const standardPage = fs.readFileSync(path.join(root, 'standard.html'), 'utf8');
const stylesheet = fs.readFileSync(path.join(root, 'assets/iia.css'), 'utf8');
assert(standardPage.includes("classificationBadges(x.i, 'risk')"), 'Earlier-standard risks must use the shared renderer');
assert(standardPage.includes("classificationBadges(x.t, 'control')"), 'Earlier-standard controls must use the shared renderer');
assert(stylesheet.includes('.row > .classification-badges{'), 'Row badges must align with earlier standards');
for (const name of ['High','Medium','Low','Preventive','Detective','Corrective']) {
  assert(stylesheet.includes(`.bdg.${name}{`), `Missing ${name} badge colour rule`);
}
const refs = DOMAINS.flatMap(d => d.principles.flatMap(p => p.standards.map(s => s.ref)));
const originalTables = JSON.stringify(SUPPLIED_TABLES);
const expected = {
  High:'High', Medium:'Medium', Low:'Low', Preventive:'Preventive',
  Detective:'Detective', Defective:'Detective', Corrective:'Corrective'
};
let checked = 0;

function check(value, html, type, ref) {
  const range = type === 'risk' && /[–—-]/.test(value);
  const labels = Array.from(value.split(range ? /\s*[–—-]\s*/ : /\s*\/\s*/), label =>
    Object.entries(expected).find(([name]) => name.toLowerCase() === label.trim().toLowerCase())?.[1]);
  assert(labels.every(Boolean), `Unrecognised ${type} classification in ${ref}: ${value}`);
  assert.deepEqual([...html.matchAll(/<span class="bdg ([^"]+)">([^<]+)<\/span>/g)]
    .map(match => [match[1], match[2]]), labels.map(label => [label,label]),
    `Incorrect ${type} badges for ${ref}: ${value}`);
  assert(!html.includes('Defective'), `Misspelt classification in ${ref}`);
  if (range) assert(html.includes(`class="classification-separator">${value.match(/[–—-]/)[0]}</span>`),
    `Missing rating range separator in ${ref}`);
  checked++;
}

for (const ref of refs) {
  const supplied = SUPPLIED_RECORDS.find(record => record.ref === 'Standard ' + ref);
  const record = supplied || RECORDS.find(record => record.ref === 'Standard ' + ref);
  if (!record) continue;
  if (supplied) {
    for (const [section, type] of [['3','risk'], ['4','control']]) {
      const table = SUPPLIED_TABLES[ref]?.[section];
      if (!table) continue;
      const title = supplied.sourceSections.find(item => item.number === Number(section)).title;
      const html = sourceFormat('', title, 'table', table);
      const rendered = [...html.matchAll(/<td class="ev"[^>]*>(.*?)<\/td>/g)].map(match => match[1]);
      assert.equal(rendered.length, table.rows.length, `${ref}: ${title} row count changed`);
      const isRating = type !== 'risk' || table.headers.some(header => /rating|indicative/i.test(header));
      table.rows.forEach((row, i) => {
        if (isRating) check(row.right, rendered[i], type, ref);
        else {
          assert.equal(rendered[i], row.right, `${ref}: consequence text was changed`);
          assert(!rendered[i].includes('class="bdg'), `${ref}: consequence is not a rating`);
        }
      });
    }
  } else {
    for (const risk of record.risks || []) check(risk.i,
      classificationBadges(risk.i, 'risk'), 'risk', ref);
    for (const control of record.controls || [])
      check(control.t, classificationBadges(control.t, 'control'), 'control', ref);
  }
}
assert.equal(JSON.stringify(SUPPLIED_TABLES), originalTables, 'Supplied classifications were modified');
const sample = {headers:['Suggested control','Control type'],rows:[
  {left:'Example',right:'Preventive / Detective / Corrective'}]};
check(sample.rows[0].right, sourceFormat('', 'Controls', 'table', sample), 'control', 'combined sample');
const typo = {headers:['Suggested control','Control type'],rows:[
  {left:'Example',right:'Preventive / Defective'}]};
check(typo.rows[0].right, sourceFormat('', 'Controls', 'table', typo), 'control', 'typo sample');
check('Medium–High', classificationBadges('Medium–High', 'risk'), 'risk', 'rating range');
check('preventive / detective', classificationBadges('preventive / detective', 'control'),
  'control', 'case-insensitive classification');
assert.equal(classificationBadges('<unknown>', 'control'), '&lt;unknown&gt;',
  'Unknown classifications must not be misrepresented or injected as HTML');
const procedure = sourceFormat('', 'Audit Procedures', 'table', {
  headers:['Procedure','Evidence'],rows:[{left:'Example',right:'Preventive'}]});
assert(!procedure.includes('class="bdg'), 'Procedure evidence must remain plain text');
assert(checked > 0, 'No classification data was checked');
console.log(`PASS: ${checked} risk and control classifications across ${refs.length} standards`);