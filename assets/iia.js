/* ============================================================
   AUDIT INTELLIGENCE — SHARED APPLICATION SCRIPT
   Standards navigator, platform search, shared chrome.

   Search covers platform content only. There is no network
   call anywhere in this file.
   ============================================================ */

/* ---------- icons ---------- */
const ICONS = {
  'search' :'<circle cx="9" cy="9" r="6"/><path d="M17 17l-4-4"/>',
  'book'   :'<path d="M3 4h5a2 2 0 012 2v10a2 2 0 00-2-2H3z"/><path d="M17 4h-5a2 2 0 00-2 2v10a2 2 0 012-2h5z"/>',
  'doc'    :'<path d="M5 2.5h6l4 4V17a.5.5 0 01-.5.5h-9A.5.5 0 015 17z"/><path d="M11 2.5v4h4"/>',
  'target' :'<circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="3.5"/>',
  'alert'  :'<path d="M10 2.5l7.5 13h-15z"/><path d="M10 8v3.5M10 13.5v.01"/>',
  'shield' :'<path d="M10 2.5l6 2.5v5c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8V5z"/><path d="M7.5 10l1.8 1.8 3.4-3.6"/>',
  'check'  :'<path d="M4 10.5l4 4 8-9"/>',
  'flag'   :'<path d="M5 17V3.5h9l-2 3 2 3H5"/>',
  'grid'   :'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/>',
  'link'   :'<path d="M8.5 11.5a3 3 0 004.2 0l2.5-2.5a3 3 0 00-4.2-4.2l-.9.9"/><path d="M11.5 8.5a3 3 0 00-4.2 0L4.8 11a3 3 0 004.2 4.2l.9-.9"/>',
  'spark'  :'<path d="M10 2.5l1.7 4.3 4.3 1.7-4.3 1.7L10 14.5 8.3 10.2 4 8.5l4.3-1.7z"/>',
  'chev'   :'<path d="M7.5 4l5 6-5 6"/>',
  'arrow'  :'<path d="M4 10h11M11 6l4 4-4 4"/>',
  'back'   :'<path d="M16 10H5M9 6l-4 4 4 4"/>',
  'layer'  :'<path d="M10 3l7 3.5-7 3.5-7-3.5z"/><path d="M3 11l7 3.5 7-3.5"/>',
  'scale'  :'<path d="M10 3v14M5 17h10"/><path d="M10 6L4 8.5M10 6l6 2.5"/>',
  'menu'   :'<path d="M3 6h14M3 10h14M3 14h14"/>',
  'star'   :'<path d="M10 3l2.2 4.5 5 .7-3.6 3.5.85 4.9L10 14.3 5.55 16.6l.85-4.9L2.8 8.2l5-.7z"/>',
  'users'  :'<circle cx="7.5" cy="7" r="2.8"/><path d="M2.5 16c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5"/>',
  'clock'  :'<circle cx="10" cy="10" r="7"/><path d="M10 6v4.2l2.8 1.6"/>',
  'export' :'<path d="M10 3v9M6.5 8.5L10 12l3.5-3.5"/><path d="M4 14v2.5h12V14"/>'
};
function icon(n, cls){
  return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 20 20" aria-hidden="true">' +
    (ICONS[n] || '') + '</svg>';
}

/* ---------- helpers ---------- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function qs(name){ return new URLSearchParams(location.search).get(name) || ''; }
function fmtDate(iso){
  if (!iso) return '—';
  const [y,m,d] = iso.split('-');
  const M = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return d + ' ' + M[+m - 1] + ' ' + y;
}

/* ---------- top bar ---------- */
function renderTop(active){
  return '<button class="nav-toggle" id="navToggle" aria-label="Toggle standards navigator">' +
      icon('menu') + '</button>' +
    '<a class="brand" href="index.html">' +
      '<div class="bm">A</div>' +
      '<div><b>AUDIT INTELLIGENCE</b>' +
      '<span>Global Internal Audit Standards</span></div>' +
    '</a>' +
    '<div class="sub">IIA · 5 Domains · 15 Principles</div>' +
    '<nav class="topnav">' +
      '<a href="index.html"' + (active==='home'?' class="on"':'') + '>Home</a>' +
      '<a href="standards.html"' + (active==='library'?' class="on"':'') + '>Standards Library</a>' +
      '<a class="cta" href="assistant.html">' + icon('spark') + 'AI Assistant</a>' +
    '</nav>';
}

function renderFooter(){
  return '<span>IIA Global Internal Audit Standards · Reference platform</span>' +
    '<div class="dev"><span>Developed by</span>Noora AlZaraa</div>';
}

/* ---------- standards navigator ---------- */
function renderNav(currentRef){
  let h = '<div class="nav-h">' +
    '<div class="t">Standards Navigator</div>' +
    '<label class="nav-find">' + icon('search') +
      '<input type="search" id="navFind" placeholder="Find a standard…" ' +
      'aria-label="Filter standards">' +
    '</label></div><div class="nav-body" id="navBody">';

  DOMAINS.forEach(d => {
    const hasAny = d.principles.some(p => p.standards.length);
    if (!hasAny && !d.principles.length) return;
    h += '<div class="dom-h">Domain ' + esc(d.num) + ' · ' + esc(d.name) + '</div>';
    d.principles.forEach(p => {
      const open = p.standards.some(s => s.ref === currentRef);
      h += '<div class="pr' + (open ? ' open' : '') + '" data-pr="' + p.num + '">' +
        '<button class="pr-h" type="button">' +
          '<span class="n">' + p.num + '</span>' +
          '<span class="tx">' + esc(p.title) + '</span>' +
          (p.standards.length ? icon('chev','ch') : '') +
        '</button>';
      if (p.standards.length){
        h += '<div class="pr-body">';
        p.standards.forEach(s => {
          const has = !!standardRecord(s.ref);
          h += '<a href="standard.html?ref=' + encodeURIComponent(s.ref) + '"' +
            ' class="' + (s.ref === currentRef ? 'on' : '') + (has ? '' : ' empty') + '"' +
            ' data-ref="' + esc(s.ref) + '" data-title="' + esc(s.title) + '">' +
            '<span class="sr">' + esc(s.ref) + '</span>' +
            '<span>' + esc(s.title) + '</span></a>';
        });
        h += '</div>';
      }
      h += '</div>';
    });
  });
  return h + '</div>';
}

/* wire accordion + navigator filter */
function wireNav(){
  const body = document.getElementById('navBody');
  if (!body) return;

  body.addEventListener('click', e => {
    const head = e.target.closest('.pr-h');
    if (!head) return;
    head.closest('.pr').classList.toggle('open');
  });

  const find = document.getElementById('navFind');
  if (find){
    find.addEventListener('input', () => {
      const q = find.value.trim().toLowerCase();
      body.querySelectorAll('.pr').forEach(pr => {
        let shown = 0;
        pr.querySelectorAll('.pr-body a').forEach(a => {
          const hit = !q ||
            a.dataset.ref.toLowerCase().includes(q) ||
            a.dataset.title.toLowerCase().includes(q);
          a.style.display = hit ? '' : 'none';
          if (hit) shown++;
        });
        const titleHit = !q ||
          pr.querySelector('.tx').textContent.toLowerCase().includes(q);
        pr.style.display = (shown || titleHit) ? '' : 'none';
        if (q && shown) pr.classList.add('open');
      });
      body.querySelectorAll('.dom-h').forEach(dh => {
        let n = 0, el = dh.nextElementSibling;
        while (el && el.classList.contains('pr')){
          if (el.style.display !== 'none') n++;
          el = el.nextElementSibling;
        }
        dh.style.display = n ? '' : 'none';
      });
    });
  }

  const tog = document.getElementById('navToggle');
  if (tog) tog.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('open');
  });
}

/* ---------- mount shared chrome ---------- */
function mount(opts){
  opts = opts || {};
  const top = document.querySelector('.top');
  const nav = document.querySelector('.nav');
  const ft  = document.querySelector('footer');
  if (top) top.innerHTML = renderTop(opts.active);
  if (nav) nav.innerHTML = renderNav(opts.ref);
  if (ft)  ft.innerHTML  = renderFooter();
  wireNav();
  const on = document.querySelector('.pr-body a.on');
  if (on) on.scrollIntoView({ block:'center' });
}

/* ============================================================
   PLATFORM SEARCH
   Searches the standards held in this platform. Matches on
   standard number, title, and every content field, and reports
   which section each hit came from so the result can link
   straight to it.
   ============================================================ */

const SECTIONS = [
  { key:'requirement',     label:'Requirements',        anchor:'requirements', w:9 },
  { key:'implementation',  label:'Implementation',      anchor:'implementation', w:5 },
  { key:'conformance',     label:'Conformance Evidence',anchor:'conformance', w:5 },
  { key:'focus',           label:'Audit Focus Areas',   anchor:'focus', w:7 },
  { key:'risks',           label:'Risks',               anchor:'risks', w:7 },
  { key:'controls',        label:'Controls',            anchor:'controls', w:7 },
  { key:'procedureTable',  label:'Audit Procedures',    anchor:'procedures', w:7 },
  { key:'procedures',      label:'Audit Procedures',    anchor:'procedures', w:7 },
  { key:'testing',         label:'Testing Approach',    anchor:'procedures', w:5 },
  { key:'evidence',        label:'Required Evidence',   anchor:'evidence', w:6 },
  { key:'redFlags',        label:'Red Flags',           anchor:'redflags', w:7 },
  { key:'findings',        label:'Common Findings',     anchor:'findings', w:6 },
  { key:'causes',          label:'Root Causes',         anchor:'findings', w:4 },
  { key:'impacts',         label:'Risk and Impact',     anchor:'findings', w:4 },
  { key:'recommendations', label:'Recommendations',     anchor:'recommendations', w:5 },
  { key:'biasTable',       label:'Examples of Bias',    anchor:'requirements', w:4 },
  { key:'assignmentTable', label:'Engagement Assignments', anchor:'requirements', w:4 },
  { key:'references',      label:'Professional References', anchor:'source', w:3 }
];

function flat(v){
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map(flat).join(' · ');
  if (typeof v === 'object') return Object.values(v).map(flat).join(' ');
  return String(v);
}

/* Search every standard in the platform. Returns ranked hits,
   each naming the sections that matched. */
/* Words carrying no retrieval signal. Dropped from the query so a
   natural question behaves like the keywords inside it. */
const STOP = new Set(['the','a','an','is','are','was','were','be','of','for','to',
  'in','on','at','by','and','or','not','what','which','who','whom','that','this',
  'these','those','how','why','when','where','do','does','did','can','could',
  'should','would','will','shall','may','might','must','i','you','we','it','its',
  'about','with','from','into','my','me','our','us','if','then','than','as','but',
  'require','requires','required','mean','means','tell','show','give','need']);

function searchPlatform(query){
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const raw = q.split(/\s+/)
    .map(t => t.replace(/[?!,;:()"'’]/g,'').replace(/\.$/,''))
    .filter(Boolean);
  /* keep content words; if the query is only stopwords, fall back to raw */
  const terms = raw.filter(t => !STOP.has(t) && t.length > 1);
  if (!terms.length) return [];
  const out = [];

  allStandards().forEach(s => {
    const rec = standardRecord(s.ref);
    let score = 0;
    const hits = [];

    /* standard number — exact and prefix matches rank highest */
    const refLow = s.ref.toLowerCase();
    terms.forEach(t => {
      if (refLow === t) score += 60;
      else if (refLow.startsWith(t)) score += 34;
      else if (refLow.includes(t)) score += 16;
    });

    /* title */
    const titleLow = s.title.toLowerCase();
    terms.forEach(t => {
      if (titleLow.includes(t))
        score += new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).test(titleLow) ? 22 : 11;
    });
    /* principle name */
    const pLow = s.principleTitle.toLowerCase();
    terms.forEach(t => { if (pLow.includes(t)) score += 6; });

    if (rec){
      SECTIONS.forEach(sec => {
        const text = flat(rec[sec.key]).toLowerCase();
        if (!text) return;
        let secScore = 0, snippetSrc = null;
        terms.forEach(t => {
          if (text.includes(t)){
            const whole = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b').test(text);
            secScore += sec.w * (whole ? 1 : 0.45);
            if (!snippetSrc) snippetSrc = flat(rec[sec.key]);
          }
        });
        if (secScore > 0){
          score += secScore;
          if (!hits.some(h => h.anchor === sec.anchor))
            hits.push({ label:sec.label, anchor:sec.anchor, text:snippetSrc });
        }
      });
      const sum = (rec.summary || '').toLowerCase();
      terms.forEach(t => { if (sum.includes(t)) score += 8; });
    }

    /* Decide whether this is a genuine match.

       Two problems to avoid. Requiring every term makes natural
       questions fail, because words like "require" are not in the
       text. Accepting a simple majority lets an unrelated question
       through whenever one of its words happens to appear somewhere —
       "what is the capital of france" matched on "capital" alone.

       So: match on whole words rather than substrings, and require
       either a strong signal (the standard number, or a word in the
       title) or at least two distinct content words. */
    /* Section labels are searchable too, so "red flags" finds the
       standards that have a red flags section. */
    const labels = rec ? SECTIONS.filter(x => flat(rec[x.key]))
      .map(x => x.label).join(' ') : '';
    const haystack = (s.ref + ' ' + s.title + ' ' + s.principleTitle + ' ' +
      s.domainName + ' ' + labels + ' ' +
      (rec ? SECTIONS.map(x => flat(rec[x.key])).join(' ') +
      ' ' + (rec.summary||'') + ' ' + flat(rec.tags) : '')).toLowerCase();

    const word = (t, hay) => new RegExp('(^|[^a-z0-9])' +
      t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '([^a-z0-9]|$)').test(hay);

    const matched  = terms.filter(t => word(t, haystack));
    const refHit   = terms.some(t => s.ref.toLowerCase() === t);
    const titleHit = terms.some(t => word(t, s.title.toLowerCase()));

    const enough = refHit || titleHit ||
      (terms.length === 1 ? matched.length === 1 : matched.length >= 2);

    if (score > 0 && enough) out.push({ s, rec, score, hits });
  });

  return out.sort((a,b) => b.score - a.score);
}

/* wrap matches for display; escape first so markup is never re-matched */
function highlight(text, query){
  const safe = esc(text);
  if (!query) return safe;
  const terms = query.trim().split(/\s+/).filter(Boolean)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))
    .sort((a,b) => b.length - a.length);
  if (!terms.length) return safe;
  return safe.replace(new RegExp('(' + terms.join('|') + ')','gi'),
    m => '<mark>' + m + '</mark>');
}

/* readable preview centred on the first match */
function preview(text, query, max){
  max = max || 180;
  if (!text) return '';
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const low = text.toLowerCase();
  const at = terms.map(t => low.indexOf(t)).filter(i => i >= 0).sort((a,b)=>a-b)[0];
  if (at == null || at < 0) return text.slice(0, max) + (text.length > max ? '…' : '');
  let start = Math.max(0, at - 70);
  let cut = text.slice(start, start + max);
  if (start > 0) cut = '…' + cut.replace(/^\S*\s/,'');
  if (start + max < text.length) cut = cut.replace(/\s\S*$/,'') + '…';
  return cut;
}
