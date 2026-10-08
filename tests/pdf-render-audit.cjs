/* Compare every imported section with the HTML actually generated for the page.
   Multiset comparison catches missing/extra words even when PDF cell order is scrambled.
   This does not prove column relationships: those require separate PDF row review. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({});
for(const [file,name,variable] of [
  ['data/supplied-standards.js','records','SUPPLIED_RECORDS'],
  ['data/supplied-tables.js','tables','SUPPLIED_TABLES'],
  ['data/supplied-appendix-tables.js','appendices','SUPPLIED_APPENDIX_TABLES'],
  ['assets/source-format.js','render','sourceFormat']
]) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8')+`\nthis.${name}=${variable}`,context);
const tokens=text=>(String(text).toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]);
const decode=html=>html.replace(/<span class="source-table-note">[^<]*<\/span>/g,'')
  .replace(/<[^>]*>/g,' ').replace(/&#39;/g,"'").replace(/&quot;/g,'"')
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function counts(words){const out=new Map();for(const word of words)out.set(word,(out.get(word)||0)+1);return out;}
const exceptions=[];
function check(ref,label,source,html){
  const expected=counts(tokens(source)),actual=counts(tokens(decode(html)));
  const missing=[...expected].flatMap(([word,n])=>n>(actual.get(word)||0)?[word+':'+(n-(actual.get(word)||0))]:[]);
  const extra=[...actual].flatMap(([word,n])=>n>(expected.get(word)||0)?[word+':'+(n-(expected.get(word)||0))]:[]);
  if(missing.length||extra.length)exceptions.push({ref,label,missing,extra});
}
let count=0;
for(const rec of context.records){
  const ref=rec.ref.slice(9),appendix=context.appendices[ref];
  for(const [source,title,kind,structured] of [
    [rec.requirement,'Requirements',null,null],
    [rec.implementation[0],'Considerations for Implementation',null,null],
    [rec.conformance[0],'Examples of Evidence of Conformance',null,null],
    ...rec.sourceSections.slice(1).map(section=>[section.text,section.title,
      [3,4,5].includes(section.number)?'table':'list',context.tables[ref][section.number]]),
    ...(rec.practicalApplication?[[rec.practicalApplication,'Practical Application','practical',null]]:[])
  ]){
    if(!source)continue;
    const lines=source.replace(/\r/g,'').trim().split('\n');
    const first=lines[0].trim(),prefix=title.toLowerCase();
    if(first.toLowerCase()===prefix)lines.shift();
    else if(first.toLowerCase().startsWith(prefix+' — '))lines[0]=first.slice(title.length+3);
    // Numbered list markers and repeated page-break table headers are layout,
    // not wording. They are handled separately in the table audit.
    const expected=lines.join('\n').replace(/^\s*\d+[.)]\s+/gm,'');
    let html=context.render(source,title,kind,structured,appendix);
    if(kind==='table' && structured){
      // The site deliberately uses consistent headings for otherwise varied
      // PDF labels. Compare cells to the source independently of those labels.
      html=html.replace(/<thead>[\s\S]*?<\/thead>/,
        '<thead>'+structured.headers.join(' ')+'</thead>');
    }
    // These PDF page breaks repeat a column header; the rendered table uses
    // one semantic <thead> instead of reproducing the duplicate as content.
    const sourceWithoutRepeatedHeader=ref==='14.1' && title==='Requirements'
      ? expected.replace(/\n\s*Characteristic\s+Meaning\s*\n(?=\s*Reliable\b)/,'\n')
      : ref==='15.2' && title==='Practical Application'
        ? expected.replace(/\n\s*Status\s+Meaning\s*\n(?=Alternative Action Under Review)/,'\n')
        : expected;
    // Only Standard 6.3 combines two references in one PDF bullet. Its display
    // normalizes the labels to "Standard N.N — title" like the other bullets;
    // the stored PDF extraction remains untouched.
    const displayWording=ref==='6.3' && title==='Professional References'
      ? sourceWithoutRepeatedHeader.replace(
          'Related standards: 6.1 — Internal Audit Mandate; 6.2 — Internal Audit Charter.',
          'Standard 6.1 — Internal Audit Mandate. Standard 6.2 — Internal Audit Charter.')
      : sourceWithoutRepeatedHeader;
    check(ref,title,displayWording,html);
    count++;
  }
}
console.log(`Audited ${count} rendered PDF-backed fields; ${exceptions.length} differ`);
for(const e of exceptions.slice(0,35))console.log(e.ref,e.label,'missing',e.missing.join(','),'extra',e.extra.join(','));
assert.equal(exceptions.length,0,'Rendered page must retain all PDF-backed words');