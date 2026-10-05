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
  'export' :'<path d="M10 3v9M6.5 8.5L10 12l3.5-3.5"/><path d="M4 14v2.5h12V14"/>',
  'list'   :'<path d="M8 4.5h9M8 10h9M8 15.5h6"/><path d="M3.2 4.6l1.1 1.1 2-2M3.2 10.1l1.1 1.1 2-2M3.2 15.6l1.1 1.1 2-2"/>',
  'doccheck':'<path d="M5 2.5h6l4 4V17a.5.5 0 01-.5.5h-9A.5.5 0 015 17z"/><path d="M11 2.5v4h4"/><path d="M7.4 12.4l1.5 1.5 3.2-3.4"/>',
  'circlecheck':'<circle cx="10" cy="10" r="6.5"/><path d="M6.6 10.2l2.1 2.1 4.5-4.8"/>',
  'hierarchy':'<path d="M7.2 2.4h5.6v3.2H7.2zM10 5.6v1.6M3.2 7.2h13.6M3.2 7.2v1.8M10 7.2v1.8M16.8 7.2v1.8"/><path d="M1.4 9h3.8v3.2H1.4zM8.1 9h3.8v3.2H8.1zM14.8 9h3.8v3.2h-3.8z"/>',
  'tools'  :'<path d="M13.8 3.2a2.1 2.1 0 01-2.2 3.1L6.4 11.5 4.6 15.2l3.2-1.4 5.2-5.2a2.1 2.1 0 013-2.2L13.6 8"/><path d="M6.2 3.4L3.4 6.2l1.5 1.5 2.8-2.8zM4.2 16.2l5.2-5.2"/>'
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

function validatePlatformData(){
  const issues = [];
  try {
    if (typeof DOMAINS === 'undefined' || !Array.isArray(DOMAINS) || !DOMAINS.length)
      issues.push('DOMAINS is missing or empty.');
    if (typeof DOMAIN_I === 'undefined' || !DOMAIN_I || !DOMAIN_I.title)
      issues.push('DOMAIN_I is missing required content.');
    if (typeof RECORDS === 'undefined' || !Array.isArray(RECORDS))
      issues.push('RECORDS is missing or invalid.');

    const standardRefs = new Set();
    if (typeof allStandards === 'function'){
      allStandards().forEach(s => {
        if (!s.ref || standardRefs.has(s.ref)) issues.push('Duplicate or missing standard ref in DOMAINS: ' + (s.ref || '(blank)'));
        standardRefs.add(s.ref);
      });
    }

    if (Array.isArray(RECORDS)){
      const recordRefs = new Set();
      RECORDS.forEach(r => {
        if (!r || r.fw !== 'iia') return;
        if (!r.ref) issues.push('IIA record missing ref.');
        if (recordRefs.has(r.ref)) issues.push('Duplicate IIA record ref: ' + r.ref);
        recordRefs.add(r.ref);
        if (!r.title) issues.push('IIA record missing title for ' + r.ref);
        if (!r.summary) issues.push('IIA record missing summary for ' + r.ref);
      });
      standardRefs.forEach(ref => {
        const full = 'Standard ' + ref;
        if (!RECORDS.some(r => r && r.fw === 'iia' && r.ref === full)){
          /* intentionally informational because partial population is allowed */
        }
      });
    }
  } catch (e){
    issues.push('Validation failed: ' + e.message);
  }
  if (issues.length) console.warn('[Audit Intelligence validation]', issues);
  else console.info('[Audit Intelligence validation] OK');
  return issues;
}

/* ---------- top bar ---------- */
function renderTop(active){
  const link = (id, href, label) =>
    '<a href="' + href + '"' + (active===id?' class="on"':'') + '>' + label + '</a>';
  return '<button class="nav-toggle" id="navToggle" aria-label="Open menu">' +
      icon('menu') + '</button>' +
    '<a class="brand" href="index.html">' +
      '<div class="bm">A</div>' +
      '<div><b>Audit Intelligence</b>' +
      '<span>IIA Reference Platform</span></div>' +
    '</a>' +
    '<nav class="topnav">' +
      link('home','index.html','Home') +
      link('library','standards.html','IIA Standards') +
      link('references','references.html','Reference Library') +
      link('tools','tools.html','Audit Tools') +
      '<a class="cta" href="assistant.html">' + icon('spark') + 'AI Assistant</a>' +
    '</nav>';
}

function renderFooter(){
  return '<span class="dev">Developed by Noora AlZaraa</span>';
}

/* ---------- standards navigator ---------- */
function renderNav(currentRef){
  const domainQ = qs('domain');
  let h = '<div class="nav-h">' +
    '<div class="t">IIA Standards</div>' +
    '<label class="nav-find">' + icon('search') +
      '<input type="search" id="navFind" placeholder="Find a Standard" ' +
      'aria-label="Filter standards">' +
    '</label></div><div class="nav-body" id="navBody">' +
    '<a class="nav-all' + (!currentRef && !domainQ ? ' on' : '') + '" href="standards.html">All Standards</a>';

  DOMAINS.forEach(d => {
    const contains = d.principles.some(p => p.standards.some(s => s.ref === currentRef));
    const open = currentRef ? contains : (domainQ ? d.id === domainQ : d.id === 'II');
    const here = d.id === 'I' && !currentRef && domainQ === 'I';
    h += '<div class="dom' + (open ? ' open' : '') + (here ? ' here' : '') + '" data-dom="' + esc(d.id) + '">';
    h += '<button class="dom-btn" type="button" aria-expanded="' + (open ? 'true' : 'false') + '"><span><span class="dn">Domain ' +
      esc(d.num) + '</span><span class="dx">' + esc(d.name) + '</span></span>' + icon('chev','ch') + '</button>' +
      '<div class="dom-body">';
    if (!d.principles.length){
      (DOMAIN_I.sections || []).forEach(sec => {
        h += '<a class="nav-sec" href="standards.html?domain=I#' + sec.id + '">' + esc(sec.label) + '</a>';
      });
    }
    d.principles.forEach(p => {
      const pOpen = p.standards.some(s => s.ref === currentRef);
      h += '<div class="pr' + (pOpen ? ' open' : '') + '" data-pr="' + p.num + '">' +
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
            '<span class="st">' + esc(s.title) + '</span></a>';
        });
        h += '</div>';
      }
      h += '</div>';
    });
    h += '</div></div>';
  });
  return h + '</div>';
}

function renderSide(opts){
  let h = '<div class="nav-h"><div class="t">' + esc(opts.title) + '</div>' +
    '<label class="nav-find">' + icon('search') +
      '<input type="search" id="sideFind" placeholder="' + esc(opts.placeholder) + '" ' +
      'aria-label="' + esc(opts.placeholder) + '">' +
    '</label></div><div class="nav-body" id="sideBody">';
  opts.items.forEach(it => {
    h += '<a class="side-link' + (it.on ? ' on' : '') + '" href="' + it.href +
      '" data-label="' + esc(it.label) + '">' +
      (it.icon ? icon(it.icon) : '') + esc(it.label) + '</a>';
  });
  h += '</div>';
  if (opts.note) h += '<div class="nav-note">' + esc(opts.note) + '</div>';
  return h;
}

/* wire accordion + navigator filter */
function wireNav(){
  const body = document.getElementById('navBody');
  if (!body) return;

  body.addEventListener('click', e => {
    const dom = e.target.closest('.dom-btn');
    if (dom){
      e.preventDefault();
      const box = dom.closest('.dom');
      const willOpen = !box.classList.contains('open');
      box.classList.toggle('open', willOpen);
      dom.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      return;
    }
    const head = e.target.closest('.pr-h');
    if (!head) return;
    head.closest('.pr').classList.toggle('open');
  });

  const find = document.getElementById('navFind');
  if (find){
    find.addEventListener('input', () => {
      const q = find.value.trim().toLowerCase();
      body.querySelectorAll('.dom').forEach(dom => {
        let shown = 0;
        dom.querySelectorAll('.pr').forEach(pr => {
          let n = 0;
          pr.querySelectorAll('.pr-body a').forEach(a => {
            const hit = !q ||
              a.dataset.ref.toLowerCase().includes(q) ||
              a.dataset.title.toLowerCase().includes(q);
            a.style.display = hit ? '' : 'none';
            if (hit) n++;
          });
          const titleHit = !q || pr.querySelector('.tx').textContent.toLowerCase().includes(q);
          const visible = !q || n || titleHit;
          pr.style.display = visible ? '' : 'none';
          if (q && n) pr.classList.add('open');
          if (visible) shown++;
        });
        const domHit = !q || dom.querySelector('.dx').textContent.toLowerCase().includes(q);
        dom.querySelectorAll('.nav-sec').forEach(a => {
          const hit = !q || a.textContent.toLowerCase().includes(q);
          a.style.display = hit || domHit ? '' : 'none';
          if (hit) shown++;
        });
        dom.style.display = (!q || shown || domHit) ? '' : 'none';
        if (q && (shown || domHit)) dom.classList.add('open');
      });
    });
  }

  const tog = document.getElementById('navToggle');
  if (tog) tog.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('open');
  });
}

function wireSide(){
  const find = document.getElementById('sideFind');
  const body = document.getElementById('sideBody');
  if (find && body){
    find.addEventListener('input', () => {
      const q = find.value.trim().toLowerCase();
      body.querySelectorAll('.side-link').forEach(a => {
        a.style.display = !q || a.dataset.label.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
  const tog = document.getElementById('navToggle');
  if (tog) tog.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('open');
  });
}

/* ---------- mount shared chrome ---------- */
function mount(opts){
  opts = opts || {};
  const top = document.querySelector('.top');
  const nav = document.querySelector('.nav');
  const ft  = document.querySelector('footer');
  if (!window.__aiValidated){
    window.__aiValidated = true;
    validatePlatformData();
  }
  if (top) top.innerHTML = renderTop(opts.active);
  if (nav) nav.innerHTML = opts.side || renderNav(opts.ref);
  if (ft)  ft.innerHTML  = renderFooter();
  if (opts.side) wireSide();
  else wireNav();
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
  { key:'implementation',  label:'Considerations for Implementation', anchor:'implementation', w:5 },
  { key:'conformance',     label:'Examples of Evidence of Conformance', anchor:'conformance', w:5 },
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

function searchDomainI(query){
  if (typeof DOMAIN_I === 'undefined') return [];
  const q = String(query || '').trim().toLowerCase();
  if (!q) return [];
  const raw = q.split(/\s+/)
    .map(t => t.replace(/[?!,;:()"'’]/g,'').replace(/\.$/,''))
    .filter(Boolean);
  const terms = raw.filter(t => !STOP.has(t) && t.length > 1);
  if (!terms.length) return [];

  const sections = [
    { label:'Purpose of Internal Auditing', anchor:'domain-i-purpose', text:[DOMAIN_I.title, DOMAIN_I.headline, DOMAIN_I.summary, DOMAIN_I.intro, DOMAIN_I.classification, DOMAIN_I.statement, DOMAIN_I.purposeDetail, flat(DOMAIN_I.valueContributions), DOMAIN_I.practicalIllustration, flat(DOMAIN_I.characteristics)].join(' '), w:10 },
    { label:'Forms of Contribution', anchor:'domain-i-value', text:['Forms of contribution', 'How internal auditing provides value', flat(DOMAIN_I.howValueProvides)].join(' '), w:8 },
    { label:'What Internal Auditing Enhances', anchor:'domain-i-enhances', text:flat(DOMAIN_I.enhances), w:7 },
    { label:'Conditions for Effectiveness', anchor:'domain-i-conditions', text:flat(DOMAIN_I.conditions), w:7 },
    { label:'Practical Application', anchor:'domain-i-practical', text:[flat(DOMAIN_I.practicalQuestions), DOMAIN_I.payrollExample.intro, flat(DOMAIN_I.payrollExample.contributions), DOMAIN_I.payrollExample.note].join(' '), w:6 },
    { label:'Related Principles', anchor:'domain-i-related', text:[flat(DOMAIN_I.relatedTopics), flat(DOMAIN_I.related)].join(' '), w:4 }
  ];

  let score = 0;
  const hits = [];
  sections.forEach(sec => {
    const text = String(sec.text || '').toLowerCase();
    let secScore = 0;
    terms.forEach(t => {
      if (text.includes(t)) secScore += sec.w;
    });
    if (secScore > 0){
      score += secScore;
      hits.push({ label:sec.label, anchor:sec.anchor, text:sec.text });
    }
  });

  const hay = sections.map(s => s.text).join(' ').toLowerCase();
  const matched = terms.filter(t => hay.includes(t));
  const enough = terms.some(t => ['domain','purpose','internal','auditing','value','assurance','advice','insight','foresight'].includes(t)) ||
    (terms.length === 1 ? matched.length === 1 : matched.length >= 2);
  if (!score || !enough) return [];
  return [{
    kind:'domain',
    id:'I',
    title:DOMAIN_I.title,
    summary:DOMAIN_I.summary,
    score:score + (q.includes('domain i') ? 25 : 0),
    hits:hits
  }];
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

/* Supporting references and audit tools. Notes here are written for this
   platform. They identify the official source; they do not reproduce it. */
const REFS = [
  {
    id:'coso', group:'Internal control', chip:'all',
    title:"COSO's 17 Principles",
    blurb:'Supporting principles and control guidance.',
    keywords:'coso internal control principles control environment',
    status:'Current',
    official:'https://www.coso.org/', officialLabel:'coso.org',
    lead:'The COSO Internal Control — Integrated Framework organises internal control into five components. The seventeen principles sit under those components. This page maps the components for auditors using the IIA standards. The principle text itself stays with COSO.',
    sections:[
      { h:'Control environment', p:'The tone, structure and accountability that make the other components possible. When you test Domain II standards on integrity and objectivity, look here for how the organisation sets expectations.' },
      { h:'Risk assessment', p:'How the organisation specifies objectives, identifies change and considers fraud. Pairs with engagement risk assessment in Domain V.' },
      { h:'Control activities', p:'The policies and procedures, including technology controls, that respond to assessed risk.' },
      { h:'Information and communication', p:'The quality of information used to run control, and how it is shared inside and outside the organisation.' },
      { h:'Monitoring', p:'Ongoing and separate evaluations, and the path by which deficiencies reach people who can act.' }
    ]
  },
  {
    id:'ippf', group:'Professional framework', chip:'all',
    title:'IPPF Reference Material',
    blurb:'Understand the framework and its supporting references.',
    keywords:'ippf international professional practices framework guidance',
    status:'Current',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org/standards',
    lead:'The International Professional Practices Framework is the IIA’s body of professional guidance. The Global Internal Audit Standards (2024) are the mandatory core. This library’s Domains, Principles and Standards are that core, organised for daily use.',
    sections:[
      { h:'Where to read it here', p:'Open IIA Standards and move Domain, then Principle, then Standard. Records that have been loaded show requirements, implementation considerations, conformance evidence, risks, controls, procedures and references.' },
      { h:'What this page does not do', p:'It does not reprint IIA mandatory guidance. Each populated standard links to the official source.' }
    ]
  },
  {
    id:'ethics', group:'Professional framework', chip:'ethics',
    title:'Code of Ethics',
    blurb:'Foundational ethical guidance for internal auditors.',
    keywords:'ethics integrity objectivity confidentiality competency code',
    status:'Updated',
    official:'https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/',
    officialLabel:'Global Internal Audit Standards',
    lead:'The standalone IIA Code of Ethics was incorporated into Domain II of the 2024 Global Internal Audit Standards. For current work, use Principles 1 to 5 in this library. Treat older Code of Ethics booklets as historical.',
    sections:[
      { h:'Integrity', p:'Standards 1.1, 1.2 and 1.3 — honesty and professional courage, the organisation’s ethical expectations, and legal and ethical behaviour.' },
      { h:'Objectivity', p:'Standards 2.1, 2.2 and 2.3 — individual objectivity, safeguarding it, and disclosing impairments.' },
      { h:'Competency, due care, confidentiality', p:'Principles 3, 4 and 5. Their detailed records are added as the source material is supplied.' }
    ]
  },
  {
    id:'glossary', group:'Terminology', chip:'glossaries',
    title:'Internal Audit Glossary',
    blurb:'Find definitions of key internal audit terms.',
    keywords:'glossary assurance engagement finding criteria condition cause',
    status:'Current',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org',
    lead:'Working definitions used on this platform, written so search and the assistant share one vocabulary. They are not the IIA glossary.',
    sections:[
      { h:'Assurance', p:'An objective examination of evidence for the purpose of providing an independent assessment to the board and management.' },
      { h:'Criteria', p:'The standard, policy or expectation against which a condition is compared.' },
      { h:'Condition', p:'What the audit found, stated factually.' },
      { h:'Cause', p:'Why the condition differs from the criteria.' },
      { h:'Effect', p:'The risk or consequence of the difference, including financial impact where it can be measured.' },
      { h:'Engagement', p:'A specific audit, review or advisory assignment with its own objectives and scope.' }
    ]
  },
  {
    id:'risk-glossary', group:'Terminology', chip:'glossaries',
    title:'Risk Management Glossary',
    blurb:'Find definitions of key risk management terms.',
    keywords:'inherent residual control effectiveness risk owner kri',
    status:'Current',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org',
    lead:'Working definitions for risk language used beside the standards. They are platform definitions, not a reproduction of COSO ERM or ISO 31000.',
    sections:[
      { h:'Inherent risk', p:'The level of risk before considering controls that address it.' },
      { h:'Residual risk', p:'The level of risk that remains after those controls operate.' },
      { h:'Control', p:'An action that modifies risk. On this platform, controls are typed Preventive, Detective or Corrective.' },
      { h:'Red flag', p:'An indicator that warrants further examination. It does not, by itself, establish fraud or misconduct.' }
    ]
  },
  {
    id:'2017', group:'Historical', chip:'historical',
    title:'2017 IIA Standards',
    blurb:'Historical standards for reference.',
    keywords:'2017 ippf 1000 1100 1200 1300 2000 2100 2200 2300 2400 2500 2600 attribute performance',
    status:'Superseded',
    badge:'Historical',
    official:'https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/',
    officialLabel:'2024 Global Internal Audit Standards',
    lead:'The 2017 International Standards for the Professional Practice of Internal Auditing were superseded by the Global Internal Audit Standards, effective 9 January 2025. Use them only to read older working papers. Do not cite them as the current requirements.',
    sections:[
      { h:'Attribute series', p:'1000 Purpose, Authority, and Responsibility. 1100 Independence and Objectivity. 1200 Proficiency and Due Professional Care. 1300 Quality Assurance and Improvement Program.' },
      { h:'Performance series', p:'2000 Managing the Internal Audit Activity. 2100 Nature of Work. 2200 Engagement Planning. 2300 Performing the Engagement. 2400 Communicating Results. 2500 Monitoring Progress. 2600 Communicating the Acceptance of Risks.' },
      { h:'Current equivalent', p:'The same professional ground is now covered by Domains I to V and Principles 1 to 15 in this library.' }
    ]
  }
];

const TOOLS = [
  {
    id:'engagement', phase:'Planning', icon:'doc',
    title:'Engagement Planning',
    blurb:'Define objectives, scope and key audit activities.',
    keywords:'planning objective scope engagement',
    query:'engagement planning scope',
    fields:[
      { k:'name', label:'Engagement name' },
      { k:'objective', label:'Objective', area:true, hint:'What the engagement will conclude on.' },
      { k:'scope', label:'Scope', area:true, hint:'What is included, and what is explicitly out of scope.' },
      { k:'activities', label:'Key audit activities', area:true }
    ]
  },
  {
    id:'matrix', phase:'Planning', icon:'hierarchy',
    title:'Risk & Control Matrix',
    blurb:'Map risks, controls and planned audit tests.',
    keywords:'risk control matrix test',
    query:'risk control',
    fields:[
      { k:'risk', label:'Risk', area:true },
      { k:'control', label:'Expected control', area:true },
      { k:'test', label:'Planned test', area:true },
      { k:'evidence', label:'Evidence the test will produce', area:true }
    ]
  },
  {
    id:'program', phase:'Fieldwork', icon:'list',
    title:'Audit Program',
    blurb:'Organise procedures, testing steps and evidence.',
    keywords:'audit program procedure testing fieldwork',
    query:'audit procedure testing',
    fields:[
      { k:'procedure', label:'Procedure', area:true },
      { k:'sample', label:'Sample or population' },
      { k:'steps', label:'Testing steps', area:true },
      { k:'evidence', label:'Evidence to retain', area:true }
    ]
  },
  {
    id:'evidence', phase:'Fieldwork', icon:'doccheck',
    title:'Evidence Checklist',
    blurb:'Track required documents and supporting evidence.',
    keywords:'evidence document checklist',
    query:'required evidence',
    fields:[
      { k:'item', label:'Evidence item' },
      { k:'source', label:'Who will provide it' },
      { k:'status', label:'Status', options:['Not requested','Requested','Received','Sufficient','Exception'] },
      { k:'note', label:'Note', area:true }
    ]
  },
  {
    id:'finding', phase:'Reporting', icon:'doc',
    title:'Finding Builder',
    blurb:'Structure criteria, condition, cause, impact and recommendations.',
    keywords:'finding observation criteria condition cause impact recommendation',
    query:'findings recommendations',
    fields:[
      { k:'title', label:'Finding title' },
      { k:'criteria', label:'Criteria', area:true, hint:'The standard, policy or expectation.' },
      { k:'condition', label:'Condition', area:true, hint:'What was found.' },
      { k:'cause', label:'Cause', area:true },
      { k:'effect', label:'Risk and impact', area:true },
      { k:'recommendation', label:'Recommendation', area:true }
    ]
  },
  {
    id:'followup', phase:'Follow-up', icon:'circlecheck',
    title:'Action Follow-up',
    blurb:'Monitor agreed actions and completion evidence.',
    keywords:'follow up action recommendation closure overdue',
    query:'recommendations follow',
    fields:[
      { k:'action', label:'Agreed action', area:true },
      { k:'owner', label:'Responsible person' },
      { k:'due', label:'Target date' },
      { k:'status', label:'Status', options:['Open','In progress','Implemented','Overdue','Closed'] },
      { k:'proof', label:'Implementation evidence', area:true }
    ]
  }
];

function catalogHay(item){
  return [item.title, item.blurb, item.phase, item.group, item.keywords, item.lead]
    .filter(Boolean).join(' ').toLowerCase();
}
function matchCatalog(list, q){
  const terms = String(q||'').trim().toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (!terms.length) return list.slice();
  return list.filter(item => {
    const hay = catalogHay(item);
    return terms.filter(t => hay.includes(t)).length >= Math.min(2, terms.length) ||
      terms.some(t => item.title.toLowerCase().includes(t));
  });
}
