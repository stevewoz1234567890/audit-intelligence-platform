/* Reconstruct the three tabular sections of each supplied PDF from Xpdf's
   table-aware extraction. Run: node tools/build-supplied-tables.cjs
   Set PDFTOTEXT to override the executable. Throws rather than publishing
   sections that cannot be identified or lose words during parsing. */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'data/supplied-standards.js'),'utf8')+'\nthis.records=SUPPLIED_RECORDS',context);
const exe=process.env.PDFTOTEXT || 'C:/Program Files/Git/mingw64/bin/pdftotext.exe';
const cache=new Map();
function linesFor(n){
  if (!cache.has(n)){
    const dest=path.join(os.tmpdir(),`audit-table-${process.pid}-${n}.txt`);
    try {
      execFileSync(exe,['-table','-enc','UTF-8',path.join(root,`assets/standards/standard-${n}.pdf`),dest]);
      cache.set(n,fs.readFileSync(dest,'utf8').replace(/\r/g,'').replace(/\f/g,'\n').split('\n'));
    } finally { if(fs.existsSync(dest)) fs.unlinkSync(dest); }
  }
  return cache.get(n);
}
const heading=(s)=> /^\s*(?:Standard\s+)?(\d+\.\d+)\s*[—–-]/i.exec(s)?.[1];
function sourceBlock(ref){
  const lines=linesFor(+ref.split('.')[0]);
  const starts=lines.flatMap((s,i)=>heading(s)===ref && lines.slice(i+1,i+9).some(x=>/^\s*(?:1\.\s+)?Standards\s*&\s*Guidance\s*$/i.test(x)) ? [i] : []);
  if(!starts.length) throw Error(`${ref}: cannot find source heading`);
  const start=starts.at(-1);
  const end=lines.findIndex((s,i)=>i>start && heading(s) && lines.slice(i+1,i+9).some(x=>/^\s*(?:1\.\s+)?Standards\s*&\s*Guidance\s*$/i.test(x)));
  return lines.slice(start,end<0?lines.length:end);
}
const names={3:'Risks',4:'Controls',5:'Audit Procedures'};
function section(lines,n,ref){
  const re=new RegExp('^\\s*'+n+'\\.\\s+'+names[n]+'\\b','i');
  let at=lines.findIndex(s=>re.test(s));
  if(at<0) at=lines.findIndex(s=>new RegExp('^\\s*'+names[n]+'(?:\\s*[—–-].*)?\\s*$','i').test(s));
  if(at<0) throw Error(`${ref}: no section ${n}`);
  const next=lines.findIndex((s,i)=>i>at && (new RegExp('^\\s*'+(n+1)+'\\.\\s+','i').test(s) ||
    new RegExp('^\\s*'+(n===3?'Controls':n===4?'Audit Procedures':'Red Flags')+'(?:\\s*[—–-].*)?\\s*$','i').test(s)));
  if(next<0) throw Error(`${ref}: cannot find end of section ${n}`);
  return lines.slice(at+1,next).filter(s=>s.trim());
}
function parse(lines,n,ref){
  const headerPattern=n===3?/^\s*(?:Risk|Issue|Scenario|Exposure)\b.*\b(?:Potential consequence|Indicative|Rating|Impact|Likelihood)\b/i:
    n===4?/^\s*(?:Suggested control|Control)\b.*\b(?:Control Type|Type)\b/i:
    /^\s*(?:Audit procedure|Procedure)\b.*\b(?:Required evidence|Evidence to Examine|Evidence)\b/i;
  const headerAt=lines.findIndex(s=>headerPattern.test(s));
  if(headerAt<0) throw Error(`${ref} section ${n}: no column header`);
  let headers=[],rows=[];
  const rightColumn = line => {
    const m=line.match(/^(\s*)(.*?)(\s{2,})(\S.*)$/);
    return m && m[2].trim() ? m[1].length+m[2].length+m[3].length : 0;
  };
  const rightStart=Math.max(30,Math.min(62,rightColumn(lines[headerAt]) || 45));
  for(const line of lines.slice(headerAt)){
    if(headerPattern.test(line) && /\s{2,}/.test(line)){
      headers.push(line.trim());
      continue;
    }
    const trimmed=line.trim();
    if(!trimmed) continue;
    // A long run of whitespace is a column break; indentation alone is not.
    const parts=line.match(/^(\s*)(.*?)(\s{2,})(\S.*)$/);
    if(parts && parts[2].trim()){
      let left=parts[2].trim(),right=parts[4].trim();
      const boundary=parts[1].length+parts[2].length+parts[3].length;
      if(boundary<rightStart-14){
        const tail=right.match(/^(.+?)\s{2,}(\S.*)$/);
        if(tail){left+=' '+tail[1].trim();right=tail[2].trim();}
      }
      if(n===4 && !/^(?:(?:Preventive|Detective|Corrective)(?:\s*\/\s*(?:Preventive|Detective|Corrective))*)$/i.test(right)){
        const type=right.match(/^(.*?)(\s{2,})(Preventive|Detective|Corrective)(?:\s*\/\s*(Preventive|Detective|Corrective))?$/i);
        if(type){left+=' '+type[1].trim();right=type[3]+(type[4]?' / '+type[4]:'');}
      }
      const last=rows.at(-1);
      if(last && !/[.!?;:]$/.test(last.left) &&
         (/^[a-z]/.test(left) || /\b(?:the|a|an|and|or|to|of|for|with|from|on|in|by|without|that|whether|and\/or|\/)$/i.test(last.left))){
        last.left+=' '+left;
        last.right+=' '+right;
      } else rows.push({left,right});
    } else if(parts && !parts[2].trim()){
      if(!rows.length){
        if(n===3 && /^(?:Rating|Likelihood|Impact)$/i.test(parts[4].trim())) {headers.push(parts[4].trim());continue;}
        throw Error(`${ref} section ${n}: orphan right-column continuation`);
      }
      rows[rows.length-1].right += ' '+parts[4].trim();
    } else if(rows.length){
      const indent=line.length-line.trimStart().length;
      // Right-hand wrapped text is indented to a column; left-hand wrapped
      // text begins near the left edge. Use the shortest header's right edge
      // or a conservative 32-character boundary for PDF layout variants.
      const key=indent>=rightStart?'right':'left';
      rows[rows.length-1][key]+=' '+trimmed;
    } else if(!headerPattern.test(line)) throw Error(`${ref} section ${n}: orphan data ${trimmed}`);
  }
  if(!rows.length || rows.some(row=>!row.left||!row.right)) throw Error(`${ref} section ${n}: incomplete table`);
  // These PDF lines straddle the inferred column boundary. The pairings
  // below were checked against the corresponding column-aligned PDFs.
  const boundaryCorrections={
    '4.3:5':[['Assess practical training in questioning information avoiding bias.','and  Training materials, attendance records, coaching notes',
      'Assess practical training in questioning information and avoiding bias.','Training materials, attendance records, coaching notes']],
    '9.5:5':[['Examine whether coordination affects the nature, scope, timing of planned work.','or   Meeting records, revised plans, shared schedules',
      'Examine whether coordination affects the nature, scope, or timing of planned work.','Meeting records, revised plans, shared schedules']],
    '13.3:4':[['Map each objective to risks and planned coverage','Preventive           / Detective',
      'Map each objective to risks and planned coverage','Preventive / Detective']],
    '14.6:3':[['Missing analytical details Another competent reviewer cannot repeat','the work.',
      'Missing analytical details','Another competent reviewer cannot repeat the work.']]
  };
  for(const [beforeLeft,beforeRight,afterLeft,afterRight] of boundaryCorrections[`${ref}:${n}`]||[]){
    const row=rows.find(item=>item.left===beforeLeft && item.right===beforeRight);
    if(!row) throw Error(`${ref} section ${n}: checked PDF correction no longer matches extraction`);
    row.left=afterLeft;row.right=afterRight;
  }
  for(const row of rows){
    row.left=row.left.replace(/\s+/g,' ').trim();
    row.right=row.right.replace(/\s+/g,' ').trim();
  }
  return {headers,rows};
}
const result={};
for(const record of context.records){
  const ref=record.ref.replace(/^Standard /,'');
  const block=sourceBlock(ref);
  result[ref]={};
  for(const n of [3,4,5]) result[ref][n]=parse(section(block,n,ref),n,ref);
}
const dest=path.join(root,'data/supplied-tables.js');
fs.writeFileSync(dest,'/* Tables extracted from the supplied PDFs using pdftotext -table. */\nconst SUPPLIED_TABLES = '+JSON.stringify(result,null,2)+';\n');
console.log(`Wrote ${Object.keys(result).length} standards and ${Object.values(result).reduce((sum,r)=>sum+[3,4,5].reduce((n,k)=>n+r[k].rows.length,0),0)} rows to ${dest}`);