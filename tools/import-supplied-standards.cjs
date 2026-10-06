/* Rebuild the local PDF excerpts. Requires pdftotext (Poppler/Xpdf).
   Usage: node tools/import-supplied-standards.cjs <directory containing Standard 3.pdf ... Standard 15.pdf>
   The source PDFs are supplied summaries, not verbatim IIA publications. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const os = require('node:os');

const root = path.resolve(__dirname, '..');
const source = process.argv[2];
if (!source) throw Error('Provide the absolute directory containing the supplied PDFs.');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'data/iia.js'), 'utf8') + '\nthis.standards = allStandards()', context);
const standards = context.standards;
const pdfText = process.env.PDFTOTEXT || 'pdftotext';

function linesFor(number){
  const name = number === 14 ? 'Standared 14.pdf' : `Standard ${number}.pdf`;
  const pdf = path.join(source, name);
  if (!fs.existsSync(pdf)) throw Error(`Missing ${pdf}`);
  const temp = path.join(os.tmpdir(), `audit-import-${process.pid}-${number}.txt`);
  let text;
  try {
    // On Windows stdout from some pdftotext builds is not UTF-8 even with
    // -enc UTF-8. Writing a file preserves the requested encoding.
    execFileSync(pdfText, ['-layout', '-enc', 'UTF-8', pdf, temp]);
    text = fs.readFileSync(temp, 'utf8');
  } finally { if (fs.existsSync(temp)) fs.unlinkSync(temp); }
  return text.replace(/\f/g, '\n').split(/\r?\n/);
}

function tidy(s){
  return s.replace(/\s+$/gm, '').replace(/^\s*$/gm, '').trim();
}
function sectionTitle(line){
  const m = line.trim().match(/^(?:([1-8])\.\s+)?(Standards\s*&\s*Guidance|Audit Focus Areas|Risks|Controls|Audit Procedures|Red Flags|Common Findings|Professional References)(?:\s*[—–-].*)?\s*$/i);
  if (!m) return null;
  const key = m[2].replace(/\s+/g,' ').toLowerCase();
  const number = m[1] ? +m[1] : ({'standards & guidance':1,'audit focus areas':2,'risks':3,'controls':4,'audit procedures':5,'red flags':6,'common findings':7,'professional references':8})[key];
  return {number, title:m[2]};
}
function guidanceParts(body){
  // Preserve the text verbatim, including qualifiers and subheadings. These
  // boundaries are for search and navigation only; nothing is paraphrased.
  const lines = body.split('\n');
  const buckets = {requirement:[], implementation:[], conformance:[]};
  let part = 'requirement';
  for (const line of lines){
    if (/^Considerations for Implementation(?:\s*[—–-].*)?\s*$/i.test(line.trim())) part = 'implementation';
    else if (/^Examples of Evidence of Conformance\s*$/i.test(line.trim())) part = 'conformance';
    buckets[part].push(line);
  }
  return Object.fromEntries(Object.entries(buckets).map(([k,v]) => [k,tidy(v.join('\n'))]));
}

const records = [];
for (let number=3; number<=15; number++){
  const lines = linesFor(number);
  const refs = standards.filter(s => +s.ref.split('.')[0] === number);
  const positions = refs.map(s => {
    const re = new RegExp(`^(?:Standard\\s+)?${s.ref.replace('.', '\\.')}\\s*[—–-]`, 'i');
    const candidates = lines.flatMap((line, i) => re.test(line.trim()) ? [i] : []);
    const matched = candidates.map(i => ({i, distance:lines.slice(i+1,i+8).findIndex(l =>
      /^\s*(?:1\.\s+)?Standards\s*&\s*Guidance\s*$/i.test(l))})).filter(x => x.distance >= 0);
    matched.sort((a,b) => a.distance - b.distance || b.i - a.i);
    const position = matched[0]?.i ?? -1;
    if (position < 0) throw Error(`No verified heading for ${s.ref} in PDF ${number} (candidates ${candidates.join(',')})`);
    return position;
  });
  if (new Set(positions).size !== positions.length || positions.some((p,i) => i && p <= positions[i-1]))
    throw Error(`Overlapping/out-of-order standards in PDF ${number}`);
  refs.forEach((s, i) => {
    const block = lines.slice(positions[i],positions[i+1] ?? lines.length);
    const sections = [];
    for (let n=0; n<block.length; n++){
      const head = sectionTitle(block[n]) ||
        (/^\s*5\.\s+Audit Procedures\b/i.test(block[n]) ? {number:5,title:'Audit Procedures'} : null);
      if (!head) continue;
      const end = block.findIndex((line,j) => j > n && (sectionTitle(line) || /^\s*5\.\s+Audit Procedures\b/i.test(line)));
      const next = end < 0 ? block.length : end;
      sections.push({number:head.number, title:head.title, text:tidy(block.slice(n+1,next).join('\n'))});
      n = next - 1;
    }
    if (!sections.length || sections[0].number !== 1 || !sections[0].text)
      throw Error(`No Standards & Guidance found for ${s.ref}`);
    // Standard 15.2 has a separate "Practical Application" appendix after
    // references. Keep it separate so it is not mislabelled as a citation.
    let practicalApplication = '';
    const references = sections.find(x => x.number === 8);
    if (references && references.text.includes('\nPractical Application\n')){
      const at = references.text.indexOf('\nPractical Application\n');
      practicalApplication = references.text.slice(at + 1);
      references.text = references.text.slice(0,at);
    }
    const guidance = guidanceParts(sections[0].text);
    const rec = {
      id:`iia-${s.ref.replace('.','-')}`, fw:'iia', ref:`Standard ${s.ref}`, title:s.title,
      domain:`Domain ${s.domainId} — ${s.domainName}`, tier:'ref', version:'2024',
      source:`Client-supplied Standard ${number} PDF (summary and suggested applications)`,
      sourcePdf:`assets/standards/standard-${number}.pdf`,
      summary: guidance.requirement.replace(/^Requirements(?:\s*[—–-][^\n]*)?\s*/i,'')
        .replace(/\s+/g,' ').match(/^.{0,220}(?:\.|:|;)(?=\s|$)/)?.[0] ||
        guidance.requirement.replace(/\s+/g,' ').slice(0,220).replace(/\s+\S*$/,'') + '…',
      requirement: guidance.requirement,
      implementation:guidance.implementation ? [guidance.implementation] : [],
      conformance:guidance.conformance ? [guidance.conformance] : [],
      sourceSections:sections,
      ...(practicalApplication ? {practicalApplication} : {})
    };
    records.push(rec);
  });
}
if (records.length !== standards.filter(s => +s.ref.split('.')[0] >= 3).length)
  throw Error(`Only generated ${records.length} of the expected standard records.`);
const output = path.join(root, 'data/supplied-standards.js');
fs.writeFileSync(output, '/* Extracted from the supplied PDFs; retain qualifiers and layout of the source.\n' +
  '   Do not mistake the suggested applications for IIA requirements. */\n' +
  'const SUPPLIED_RECORDS = ' + JSON.stringify(records,null,2) + ';\n');
console.log(`Wrote ${records.length} PDF-backed records to ${output}`);