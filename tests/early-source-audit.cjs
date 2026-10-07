/* Compare Standards 1 and 2 records to the extracted supplied PDFs.
   Usage: node tests/early-source-audit.cjs <directory with Standard 1.txt and Standard 2.txt>
   Reports potential differences for editorial review; never rewrites records. */
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const dir=process.argv[2];
assert(dir,'Pass the directory containing UTF-8 pdftotext -layout extractions.');
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/library.js'),'utf8')+'\nthis.records=RECORDS',context);
const words=s=>(String(s||'').toLowerCase().match(/[\p{L}\p{N}]+/gu)||[]);
for(const major of [1,2]){
  const source=fs.readFileSync(path.join(dir,`Standard ${major}.txt`),'utf8').replace(/\f/g,'\n');
  const records=context.records.filter(r=>r.ref.startsWith(`Standard ${major}.`));
  assert.equal(records.length,3,`Expected three records for Principle ${major}`);
  for(const rec of records){
    const ref=rec.ref.slice(9);
    const next=`${major}.${+ref.split('.')[1]+1}`;
    const start=new RegExp(`^\\s*${ref.replace('.','\\.')}\\s*[—–-]`,'m').exec(source);
    assert(start,`No PDF heading for ${ref}`);
    const tail=source.slice(start.index);
    const following=new RegExp(`^\\s*${next.replace('.','\\.')}\\s*[—–-]`,'m').exec(tail);
    const block=following?tail.slice(0,following.index):tail;
    const fields=[['requirement',rec.requirement],['implementation',(rec.implementation||[]).join(' ')],
      ['conformance',(rec.conformance||[]).join(' ')],['risks',(rec.risks||[]).map(x=>x.r+' '+(x.d||'')).join(' ')],
      ['controls',(rec.controls||[]).map(x=>x.c).join(' ')],
      ['procedures',(rec.procedureTable||rec.procedures||[]).map(x=>typeof x==='string'?x:x.p+' '+x.e).join(' ')]];
    const sectionNames=['Requirements','Considerations for Implementation','Examples of Evidence of Conformance',
      'Audit Focus Areas','Risks','Controls','Audit Procedures','Red Flags','Common Findings'];
    for(let i=0;i<fields.length;i++){
      const [name,value]=fields[i];
      const heading=sectionNames[i<3?i:i+1];
      const at=new RegExp(`^\\s*${heading}\\s*$`,'mi').exec(block);
      assert(at,`Missing PDF ${ref} ${heading}`);
      const body=block.slice(at.index+at[0].length);
      const end=sectionNames.slice(i<3?i+1:i+2).map(h=>new RegExp(`^\\s*${h}\\s*$`,'mi').exec(body)?.index)
        .filter(n=>n!==undefined).sort((a,b)=>a-b)[0];
      const part=body.slice(0,end===undefined?body.length:end);
      const sourceTerms=new Set(words(part));
      const tokens=words(value).filter(w=>w.length>4);
      const missing=[...new Set(tokens.filter(w=>!sourceTerms.has(w)))];
      console.log(`${ref} ${name}: ${tokens.length} record terms, ${missing.length} absent from PDF section${missing.length?': '+missing.slice(0,14).join(', '):''}`);
    }
  }
}