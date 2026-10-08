/* Presentation only: retain the supplied wording while restoring readable structure. */
function classificationBadges(value, type){
  const escape = text => String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const names = type === 'risk' ? ['High','Medium','Low'] :
    type === 'control' ? ['Preventive','Detective','Corrective'] : [];
  const range = type === 'risk' && /[–—-]/.test(value);
  const parts = String(value || '').split(range ? /\s*[–—-]\s*/ : /\s*\/\s*/).map(part => part.trim());
  if (!parts.length || parts.some(part => !names.some(name => name.toLowerCase() === part.toLowerCase()) &&
    !(type === 'control' && /^defective$/i.test(part)))) return escape(value);
  return '<span class="classification-badges">' + parts.map(part => {
    const name = /^defective$/i.test(part) ? 'Detective' : names.find(n => n.toLowerCase() === part.toLowerCase());
    return '<span class="bdg ' + name + '">' + name + '</span>';
  }).join(range ? '<span class="classification-separator">' +
    escape(String(value).match(/[–—-]/)[0]) + '</span>' : '') + '</span>';
}
/* Link only numbered standards that exist in the platform; retain the supplied wording. */
function professionalReferenceLinks(text, standards){
  const escape = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const available = new Set(standards.map(s => s.ref));
  const pattern = /\bStandard\s+(\d+\.\d+)(?:\s*[—–:-]\s*([^.!?]+))?/gi;
  let html='', last=0;
  for (const match of String(text).matchAll(pattern)){
    html += escape(text.slice(last,match.index));
    const label=match[0].replace(/\s+$/,'');
    if (available.has(match[1]))
      html += '<a class="professional-standard-link" href="standard.html?ref=' +
        encodeURIComponent(match[1]) + '">' + escape(label) + '</a>';
    else html += escape(label);
    last=match.index+match[0].length;
    html += escape(match[0].slice(label.length));
  }
  return html + escape(text.slice(last));
}
function sourceFormat(text, sectionTitle, kind, structured, appendix){
  const escape = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const lines = String(text || '').replace(/\r/g,'').split('\n');
  const isBullet = line => /^\s*[•●▪◦]\s*/.test(line);
  const isNumber = line => /^\s*\d+[.)]\s+/.test(line);
  const headingPrefix = new RegExp('^' + sectionTitle.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '(?:\\s*[—–-]\\s*(.+))?$', 'i');
  while (lines.length && !lines[0].trim()) lines.shift();
  const first = lines[0] && lines[0].trim().match(headingPrefix);
  if (first){ lines.shift(); if (first[1]) lines.unshift(first[1]); }
  const renderRows = (labels,rows,main) => '<div class="tbl-wrap source-data-table' +
    (main ? ' source-main-table' : '') + '"><table><thead><tr><th scope="col">' +
    labels.map(escape).join('</th><th scope="col">') + '</th></tr></thead><tbody>' +
    rows.map(row=>'<tr><td><b>'+escape(row[0])+'</b></td><td class="ev" data-label="'+escape(labels[1])+'">'+
      (main && sectionTitle === 'Risks' && labels[1] === 'Indicative rating' ? classificationBadges(row[1], 'risk') :
        main && /^(?:Suggested )?Controls$/.test(sectionTitle) ? classificationBadges(row[1], 'control') : escape(row[1])) +
      '</td></tr>').join('')+'</tbody></table></div>';
  if (kind === 'table'){
    if (structured && structured.rows && structured.rows.length){
      const headers={Risks:['Risk',structured.headers.some(x=>/rating|indicative/i.test(x)) ? 'Indicative rating' : 'Potential consequence'],
        Controls:['Suggested control','Control type'],
        'Suggested Controls':['Suggested control','Control type'],
        'Audit Procedures':['Suggested audit procedure','Evidence to examine'],
        'Suggested Audit Procedures':['Suggested audit procedure','Evidence to examine']};
      const labels=headers[sectionTitle] || ['Description','Details'];
      return renderRows(labels,structured.rows.map(row=>[row.left,row.right]),true);
    }
    // Fallback for the unverified, embedded appendix tables only.
    return '<div class="source-table" role="region" tabindex="0" aria-label="' +
      escape(sectionTitle) + ' extracted from supplied PDF; verify column relationships in the PDF"><span class="source-table-note">' +
      'Extracted table text · scroll horizontally; verify row and column relationships in the linked PDF</span><pre>' +
      escape(lines.join('\n').trim()) + '</pre></div>';
  }
  if (kind === 'practical'){
    const field = lines.findIndex(line => /^\s*Field\s{2,}Purpose\s*$/i.test(line));
    const statusHeading=lines.findIndex(line=>line.trim()==='Suggested Status Labels');
    if (field >= 0 && statusHeading>field && appendix && appendix.Field && appendix.Status){
      const statusTable=lines.findIndex((line,i)=>i>statusHeading && /^\s*Status\s{2,}Meaning\s*$/i.test(line));
      const last=lines.findIndex((line,i)=>i>statusTable && /^Overdue should be a separate indicator\b/.test(line));
      if(statusTable>=0 && last>=0) return sourceFormat(lines.slice(0,field).join('\n'),sectionTitle) +
        renderRows(appendix.Field.columns,appendix.Field.rows) +
        '<div class="card source-content"><h3 class="source-subhead">Suggested Status Labels</h3><p>'+escape(lines.slice(statusHeading+1,statusTable).join(' ').trim())+'</p></div>' +
        renderRows(appendix.Status.columns,appendix.Status.rows) +
        sourceFormat(lines.slice(last).join('\n'),sectionTitle);
    }
    if (field >= 0){
      const intro = lines.slice(0,field).join('\n');
      return sourceFormat(intro,sectionTitle) +
        '<div class="source-table" role="region" tabindex="0" aria-label="Practical application fields extracted from supplied PDF; verify column relationships in the PDF"><span class="source-table-note">' +
        'Extracted table text · scroll horizontally; verify row and column relationships in the linked PDF</span><pre>' +
        escape(lines.slice(field).join('\n').trim()) + '</pre></div>';
    }
  }
  if (kind !== 'table'){
    // These headers occur inside prose sections. Keep the extracted rows together;
    // PDF text does not reliably identify which adjacent cells belong together.
    const tableAt = lines.findIndex(line => /^(?:\s*Resource characteristic\s{2,}Meaning|\s*Category\s{2,}Possible measure|\s*Source\s{2,}Examples|\s*Characteristic\s{2,}Meaning|\s*Element\s{2,}Description|\s*Workpaper\s{2,}Purpose)\s*$/i.test(line));
    if (tableAt >= 0){
      const ends = [
        /^The CAE must communicate\b/i,
        /^Management action completion is not solely\b/i,
        /^Auditors should consider risk tolerance\b/i,
        /^Internal auditors must:\s*$/i,
        /^Basic Workpaper Format\s*$/i
      ];
      const tableEnd = lines.findIndex((line,i) => i > tableAt && ends.some(re => re.test(line.trim())));
      const end = tableEnd < 0 ? lines.length : tableEnd;
      const key=/^\s*Resource characteristic/i.test(lines[tableAt])?'Resource characteristic':
        /^\s*Category/i.test(lines[tableAt])?'Category':
        /^\s*Source/i.test(lines[tableAt])?'Source':
        /^\s*Characteristic/i.test(lines[tableAt])?'Characteristic':
        /^\s*Element/i.test(lines[tableAt])?'Element':'Workpaper';
      return (tableAt ? sourceFormat(lines.slice(0,tableAt).join('\n'),sectionTitle,null,null,appendix) : '') +
        (appendix && appendix[key] ? renderRows(appendix[key].columns,appendix[key].rows) :
          sourceFormat(lines.slice(tableAt,end).join('\n'),'Source table','table')) +
        (end < lines.length ? sourceFormat(lines.slice(end).join('\n'),sectionTitle,null,null,appendix) : '');
    }
  }
  let html='', paragraph='', list='', items=[];
  const implementation = sectionTitle === 'Considerations for Implementation';
  const referenceText = value => sectionTitle === 'Professional References' && typeof allStandards === 'function' ?
    professionalReferenceLinks(value,allStandards()) : escape(value);
  const flushList = () => {
    if (items.length){
      const bulletStyle = sectionTitle === 'Red Flags' ? 'flag' :
        /^(?:Required Evidence|Examples of Evidence of Conformance)$/.test(sectionTitle) ? 'tick' : 'dot';
      html += '<' + list + ' class="rq ' + (list === 'ul' ? bulletStyle : '') + '">' +
        items.map(item => '<li><span>' + referenceText(item) + '</span></li>').join('') +
        '</' + list + '>';
      items=[];
    }
  };
  const flushParagraph = () => {
    if (!paragraph) return;
    if (implementation && !/:$/.test(paragraph)){
      if (list !== 'ul'){ flushList(); list='ul'; }
      items.push(paragraph);
    } else {
      flushList();
      html += '<p>' + referenceText(paragraph) + '</p>';
    }
    paragraph='';
  };
  function heading(line, index){
    const next = lines.slice(index + 1).find(x => x.trim());
    if (!next || /[.:;!?]$/.test(line) || line.length > 85) return false;
    const words = line.split(/\s+/);
    return words.length <= 9 && words.filter(w => /^[A-Z]/.test(w)).length >= Math.ceil(words.length * .6) &&
      !/^(?:Standard|Domain|Principle)\s+\d/.test(line) && !/\s{2,}/.test(line) &&
      !(line === 'Competencies' || line === 'Professional');
  }
  lines.forEach((raw,index) => {
    let line=raw.trim();
    if (!line){ flushParagraph(); flushList(); return; }
    if (isBullet(raw) || isNumber(raw)){
      flushParagraph();
      const type=isBullet(raw) ? 'ul' : 'ol';
      if (list !== type) { flushList(); list=type; }
      items.push(line.replace(isBullet(raw) ? /^[•●▪◦]\s*/ : /^\d+[.)]\s+/,'').trim());
    } else if (items.length && (/^\s/.test(raw) || !/[.!?]$/.test(items[items.length - 1])) &&
      !heading(line,index)){
      // Indented PDF line wrapping belongs to the preceding list item.
      items[items.length - 1] += ' ' + line;
    } else if (heading(line,index)){
      flushParagraph();
      flushList();
      html += '<h3 class="source-subhead">' + escape(line) + '</h3>';
    } else {
      if (!implementation) flushList();
      if (paragraph && (/[.!?;:]$/.test(paragraph) || /^\s*$/.test(lines[index - 1] || '')))
        flushParagraph();
      paragraph += (paragraph ? ' ' : '') + line;
    }
  });
  flushParagraph(); flushList();
  return '<div class="card source-content">' + html + '</div>';
}