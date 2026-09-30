/* ============================================================
   AUDIT INTELLIGENCE PLATFORM — SHARED APPLICATION SCRIPT
   ------------------------------------------------------------
   Renders shared chrome (icon sprite, sidebar, header, footer)
   and provides the global search engine used by every page.

   Week 2: search moves server-side; chrome becomes server
   templates or components. Markup contract stays the same.
   ============================================================ */

/* ---------- icon sprite ---------- */
const ICONS = {
  'i-home'  :'<path d="M3 9.5L10 3l7 6.5"/><path d="M5 8.5V16h10V8.5"/>',
  'i-book'  :'<path d="M3 4h5a2 2 0 012 2v10a2 2 0 00-2-2H3z"/><path d="M17 4h-5a2 2 0 00-2 2v10a2 2 0 012-2h5z"/>',
  'i-shield':'<path d="M10 2.5l6 2.5v5c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8V5z"/><path d="M7.5 10l1.8 1.8 3.4-3.6"/>',
  'i-search':'<circle cx="9" cy="9" r="6"/><path d="M17 17l-4-4"/>',
  'i-alert' :'<path d="M10 2.5l7.5 13h-15z"/><path d="M10 8v3.5M10 13.5v.01"/>',
  'i-chart' :'<path d="M3 16V9M8 16V4M13 16v-5M18 16v-9"/>',
  'i-doc'   :'<path d="M5 2.5h6l4 4V17a.5.5 0 01-.5.5h-9A.5.5 0 015 17z"/><path d="M11 2.5v4h4"/>',
  'i-check' :'<path d="M4 10.5l4 4 8-9"/>',
  'i-grid'  :'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/>',
  'i-flag'  :'<path d="M5 17V3.5h9l-2 3 2 3H5"/>',
  'i-bank'  :'<path d="M3 8l7-4.5L17 8"/><path d="M5 8v7M9 8v7M11 8v7M15 8v7"/><path d="M3 17h14"/>',
  'i-layer' :'<path d="M10 3l7 3.5-7 3.5-7-3.5z"/><path d="M3 11l7 3.5 7-3.5"/>',
  'i-globe' :'<circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3a12 12 0 010 14A12 12 0 0110 3"/>',
  'i-star'  :'<path d="M10 3l2.2 4.5 5 .7-3.6 3.5.85 4.9L10 14.3 5.55 16.6l.85-4.9L2.8 8.2l5-.7z"/>',
  'i-clock' :'<circle cx="10" cy="10" r="7"/><path d="M10 6v4.2l2.8 1.6"/>',
  'i-gear'  :'<circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4M15.3 15.3l-1.4-1.4M6.1 6.1L4.7 4.7"/>',
  'i-bell'  :'<path d="M6 8a4 4 0 118 0c0 4 1.5 5 1.5 5h-11S6 12 6 8"/><path d="M8.5 16a1.7 1.7 0 003 0"/>',
  'i-spark' :'<path d="M10 2.5l1.7 4.3 4.3 1.7-4.3 1.7L10 14.5 8.3 10.2 4 8.5l4.3-1.7z"/>',
  'i-arrow' :'<path d="M4 10h11M11 6l4 4-4 4"/>',
  'i-back'  :'<path d="M16 10H5M9 6l-4 4 4 4"/>',
  'i-users' :'<circle cx="7.5" cy="7" r="2.8"/><path d="M2.5 16c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5"/><path d="M14 11.8c2 .5 3.5 2 3.5 4.2"/><circle cx="14" cy="7.5" r="2.3"/>',
  'i-scale' :'<path d="M10 3v14M5 17h10"/><path d="M10 6L4 8.5M10 6l6 2.5"/><path d="M2 11.5a2.5 2.5 0 004 0zM14 11.5a2.5 2.5 0 004 0z"/>',
  'i-plus'  :'<path d="M10 4v12M4 10h12"/>',
  'i-edit'  :'<path d="M13.5 3.5l3 3L7 16H4v-3z"/>',
  'i-trash' :'<path d="M4 5.5h12M8 5.5V3.5h4v2M6 5.5V16a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V5.5"/>',
  'i-filter':'<path d="M3 4.5h14l-5.5 6.5V16l-3-1.5v-4z"/>',
  'i-link'  :'<path d="M8.5 11.5a3 3 0 004.2 0l2.5-2.5a3 3 0 00-4.2-4.2l-.9.9"/><path d="M11.5 8.5a3 3 0 00-4.2 0L4.8 11a3 3 0 004.2 4.2l.9-.9"/>',
  'i-target':'<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3.5"/><circle cx="10" cy="10" r=".8" fill="currentColor" stroke="none"/>'
};

function icon(name, cls){
  return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 20 20" aria-hidden="true">' +
         (ICONS[name] || '') + '</svg>';
}

/* ---------- navigation model ---------- */
const NAV = [
  { group:'Platform', items:[
    { id:'home',      label:'Home',               icon:'i-home',   href:'index.html' },
    { id:'assistant', label:'AI Audit Assistant', icon:'i-spark',  href:'assistant.html' },
    { id:'searchp',   label:'Global Search',      icon:'i-search', href:'search.html' }
  ]},
  { group:'Standards & Frameworks', items:[
    { id:'all',     label:'All Standards',    icon:'i-globe',  href:'frameworks.html' },
    { id:'iia',     label:'CIA — IIA',        icon:'i-shield', href:'framework.html?fw=iia' },
    { id:'acfe',    label:'CFE — ACFE',       icon:'i-flag',   href:'framework.html?fw=acfe' },
    { id:'isaca',   label:'CISA — ISACA',     icon:'i-layer',  href:'framework.html?fw=isaca' },
    { id:'pmi',     label:'PMP — PMI',        icon:'i-chart',  href:'framework.html?fw=pmi' },
    { id:'ifrs',    label:'IFRS',             icon:'i-bank',   href:'framework.html?fw=ifrs' },
    { id:'coso',    label:'COSO',             icon:'i-grid',   href:'framework.html?fw=coso' },
    { id:'acams',   label:'CAMS — AML',       icon:'i-scale',  href:'framework.html?fw=acams' },
    { id:'iso',     label:'ISO',              icon:'i-check',  href:'framework.html?fw=iso' },
    { id:'erm',     label:'ERM / Risk',       icon:'i-alert',  href:'framework.html?fw=erm' }
  ]},
  { group:'Practical Tools', items:[
    { id:'templates', label:'Templates',        icon:'i-doc',    href:'tools.html#templates' },
    { id:'programs',  label:'Audit Programs',   icon:'i-grid',   href:'tools.html#programs' },
    { id:'checklists',label:'Checklists',       icon:'i-check',  href:'tools.html#checklists' },
    { id:'controls',  label:'Control Library',  icon:'i-layer',  href:'tools.html#controls' },
    { id:'rcm',       label:'Risk & Controls',  icon:'i-shield', href:'tools.html#rcm' },
    { id:'redflags',  label:'Fraud Red Flags',  icon:'i-flag',   href:'tools.html#redflags' },
    { id:'industry',  label:'Industry Guidance',icon:'i-bank',   href:'tools.html#industry' },
    { id:'workpapers',label:'Working Papers',   icon:'i-doc',    href:'tools.html#workpapers' },
    { id:'cases',     label:'Case Studies',     icon:'i-users',  href:'tools.html#cases' }
  ]},
  { group:'Learning & Resources', items:[
    { id:'cpe',      label:'Training & CPE',     icon:'i-star',  href:'resources.html#cpe' },
    { id:'articles', label:'Articles & Updates', icon:'i-book',  href:'resources.html#articles' },
    { id:'news',     label:'News & Alerts',      icon:'i-alert', href:'resources.html#news' }
  ]},
  { group:'My Space', items:[
    { id:'bookmarks',label:'Bookmarks',      icon:'i-star',  href:'myspace.html#bookmarks' },
    { id:'recent',   label:'Recent Activity',icon:'i-clock', href:'myspace.html#recent' },
    { id:'settings', label:'Settings',       icon:'i-gear',  href:'myspace.html#settings' }
  ]}
];

/* counts shown in the sidebar, sourced from the framework list */
function navCount(id){
  const f = (typeof FRAMEWORKS !== 'undefined') && FRAMEWORKS.find(x => x.id === id);
  if (f) return f.count;
  const t = (typeof TOOLS !== 'undefined') && TOOLS.find(x => x.id === id);
  if (t) return t.count >= 1000 ? (t.count/1000).toFixed(1) + 'k' : t.count;
  if (id === 'all' && typeof FRAMEWORKS !== 'undefined')
    return FRAMEWORKS.reduce((n,f) => n + f.count, 0);
  return '';
}

/* ---------- chrome ---------- */
function renderSidebar(active){
  let h = '<div class="sb-brand"><div class="mark">A</div>' +
          '<div class="bt"><b>Audit Intelligence</b><span>Platform</span></div></div>';
  NAV.forEach(g => {
    h += '<div class="sb-group"><p>' + g.group + '</p><nav class="nav">';
    g.items.forEach(it => {
      const on = it.id === active ? ' class="on"' : '';
      const c  = navCount(it.id);
      h += '<a href="' + it.href + '"' + on + '>' + icon(it.icon) + it.label +
           (c ? '<i class="ct">' + c + '</i>' : '') + '</a>';
    });
    h += '</nav></div>';
  });
  h += '<div class="sb-foot"><b>Knowledge<br>Builds Trust</b><span>Better Audits</span></div>';
  return h;
}

function renderHeader(q){
  return '<div class="hdr-in">' +
    '<form class="search" role="search" action="search.html" method="get">' +
      icon('i-search','si') +
      '<input type="search" name="q" value="' + (q ? esc(q) : '') + '" ' +
      'placeholder="Search standards, frameworks, risks, controls, procedures, templates…" ' +
      'aria-label="Global search">' +
      '<button class="go" type="submit">Search</button>' +
    '</form>' +
    '<div class="hdr-r">' +
      '<a class="ibtn" href="resources.html#news" aria-label="News and alerts">' +
        icon('i-bell') + '<span class="dot"></span></a>' +
      '<a class="ibtn" href="myspace.html#bookmarks" aria-label="Bookmarks">' + icon('i-star') + '</a>' +
      '<a class="ibtn" href="admin.html" aria-label="Admin panel">' + icon('i-gear') + '</a>' +
      '<div class="who"><div class="av">NA</div>' +
        '<div class="wt"><b>Dr. Noora AlZaraa</b><span>Administrator</span></div></div>' +
    '</div></div>';
}

function renderFooter(){
  return '<div class="ft-in">' +
    '<div class="fl"><b>Audit Intelligence Platform</b>' +
      '<span>Standards · Risk · Compliance · Governance</span></div>' +
    '<div class="dev"><span>Developed by</span><b>Dr. Noora AlZaraa</b></div></div>';
}

/* Build the page shell. Every page calls this once. */
function mount(opts){
  opts = opts || {};
  const sb = document.querySelector('.sb');
  const hd = document.querySelector('.hdr');
  const ft = document.querySelector('footer');
  if (sb) sb.innerHTML = renderSidebar(opts.active);
  if (hd) hd.innerHTML = renderHeader(opts.q);
  if (ft) ft.innerHTML = renderFooter();
}

/* ---------- helpers ---------- */
function esc(s){
  return String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function qs(name){
  return new URLSearchParams(location.search).get(name) || '';
}
function fw(id){
  return (typeof FRAMEWORKS !== 'undefined') ? FRAMEWORKS.find(f => f.id === id) : null;
}
function rec(id){
  return (typeof RECORDS !== 'undefined') ? RECORDS.find(r => r.id === id) : null;
}
function fmtDate(iso){
  if (!iso) return '—';
  const [y,m,d] = iso.split('-');
  const M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d + ' ' + M[+m - 1] + ' ' + y;
}
function tierPip(tier){
  return tier === 'open'
    ? '<span class="pip g">Open — full text</span>'
    : '<span class="pip w">Reference + original guidance</span>';
}

/* ============================================================
   GLOBAL SEARCH
   Weighted field matching across every record, framework and
   tool. Week 2: replaced by a server-side index; the result
   shape returned here is the contract the UI depends on.
   ============================================================ */

const WEIGHTS = {
  title:12, ref:11, tags:8, summary:6, requirement:4, focus:4,
  risks:3, controls:3, procedures:3, redFlags:3, findings:3,
  recommendations:2, testing:2, evidence:2, causes:2, domain:2
};

function flatten(v){
  if (!v) return '';
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map(x =>
    typeof x === 'string' ? x : Object.values(x).join(' ')).join(' ');
  return String(v);
}

function search(query, opts){
  opts = opts || {};
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const out = [];

  (typeof RECORDS !== 'undefined' ? RECORDS : []).forEach(r => {
    if (opts.fw && r.fw !== opts.fw) return;
    let score = 0;
    const hits = [];

    Object.keys(WEIGHTS).forEach(field => {
      const text = flatten(r[field]).toLowerCase();
      if (!text) return;
      terms.forEach(t => {
        if (text.includes(t)){
          // whole-word matches score higher than substring matches
          const whole = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b').test(text);
          score += WEIGHTS[field] * (whole ? 1 : 0.45);
          if (hits.indexOf(field) < 0) hits.push(field);
        }
      });
    });

    // every term must appear somewhere, else it is not a match
    const all = terms.every(t =>
      Object.keys(WEIGHTS).some(f => flatten(r[f]).toLowerCase().includes(t)));
    if (score > 0 && all) out.push({ type:'record', r, score, hits });
  });

  // frameworks match on name / abbreviation / body
  (typeof FRAMEWORKS !== 'undefined' ? FRAMEWORKS : []).forEach(f => {
    if (opts.fw) return;
    const text = (f.abbr + ' ' + f.name + ' ' + f.body + ' ' + f.cert + ' ' + f.blurb).toLowerCase();
    if (terms.every(t => text.includes(t)))
      out.push({ type:'framework', f, score:9, hits:['framework'] });
  });

  // tools match on name / description / items
  (typeof TOOLS !== 'undefined' ? TOOLS : []).forEach(t => {
    if (opts.fw) return;
    const text = (t.name + ' ' + t.desc + ' ' + t.items.join(' ')).toLowerCase();
    if (terms.every(x => text.includes(x)))
      out.push({ type:'tool', t, score:7, hits:['tool'] });
  });

  return out.sort((a,b) => b.score - a.score);
}

/* Wrap matched terms for display.
   Escape first, then wrap in a single pass over the escaped string,
   so inserted markup is never itself escaped or re-matched. */
function highlight(text, query){
  const safe = esc(text);
  if (!query) return safe;
  const terms = query.trim().split(/\s+/).filter(Boolean)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a,b) => b.length - a.length);
  if (!terms.length) return safe;
  const re = new RegExp("(" + terms.join("|") + ")", "gi");
  return safe.replace(re, m => '<span class="hl">' + m + '</span>');
}

/* pull a readable snippet around the first match */
function snippet(r, query, max){
  max = max || 190;
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const pool = [r.summary, r.requirement, flatten(r.focus), flatten(r.redFlags), flatten(r.findings)];
  for (const text of pool){
    if (!text) continue;
    const low = text.toLowerCase();
    const at = terms.map(t => low.indexOf(t)).filter(i => i >= 0).sort((a,b)=>a-b)[0];
    if (at >= 0){
      let s = Math.max(0, at - 60);
      let cut = text.slice(s, s + max);
      if (s > 0) cut = '…' + cut.replace(/^\S*\s/,'');
      if (s + max < text.length) cut = cut.replace(/\s\S*$/,'') + '…';
      return cut;
    }
  }
  return (r.summary || '').slice(0, max);
}

/* ---------- AI assistant retrieval (demo) ---------- */
function assistantAnswer(query){
  const q = query.toLowerCase();
  let best = null, bestScore = 0;
  (typeof AI_CANNED !== 'undefined' ? AI_CANNED : []).forEach(entry => {
    const n = entry.q.filter(k => q.includes(k)).length;
    if (n > bestScore){ bestScore = n; best = entry; }
  });
  if (best) return best;

  // fall back to live search over the library
  const hits = search(query).filter(h => h.type === 'record').slice(0,3);
  if (!hits.length) return null;
  return {
    a: [['From your library.',
         'The library holds ' + hits.length + ' record' + (hits.length>1?'s':'') +
         ' relevant to this question. The most relevant is ' +
         hits[0].r.ref + ' — ' + hits[0].r.title + '. ' + hits[0].r.summary]],
    cites: hits.map(h => h.r.id)
  };
}
