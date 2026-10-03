/* ============================================================
   IIA GLOBAL INTERNAL AUDIT STANDARDS — PLATFORM STRUCTURE
   ------------------------------------------------------------
   Five domains, fifteen principles, and the standards beneath
   each principle. This is the navigation backbone: the sidebar
   renders from DOMAINS, and each standard's content comes from
   RECORDS in library.js, matched on `ref`.

   Standards without content yet are listed and navigable, and
   show as awaiting content rather than being hidden.
   ============================================================ */

const DOMAINS = [
  {
    id:'I', num:'I', name:'Purpose of Internal Auditing',
    blurb:'The purpose of internal auditing, and the value it provides to the organisation.',
    principles:[]
  },
  {
    id:'II', num:'II', name:'Ethics and Professionalism',
    blurb:'The ethical and professional behaviour expected of internal auditors.',
    principles:[
      { num:1, title:'Demonstrate Integrity', standards:[
        { ref:'1.1', title:'Honesty and Professional Courage' },
        { ref:'1.2', title:'Organization’s Ethical Expectations' },
        { ref:'1.3', title:'Legal and Ethical Behavior' }
      ]},
      { num:2, title:'Maintain Objectivity', standards:[
        { ref:'2.1', title:'Individual Objectivity' },
        { ref:'2.2', title:'Safeguarding Objectivity' },
        { ref:'2.3', title:'Disclosing Impairments to Objectivity' }
      ]},
      { num:3, title:'Demonstrate Competency', standards:[
        { ref:'3.1', title:'Competency' },
        { ref:'3.2', title:'Continuing Professional Development' }
      ]},
      { num:4, title:'Exercise Due Professional Care', standards:[
        { ref:'4.1', title:'Conformance with the Global Internal Audit Standards' },
        { ref:'4.2', title:'Due Professional Care' },
        { ref:'4.3', title:'Professional Skepticism' }
      ]},
      { num:5, title:'Maintain Confidentiality', standards:[
        { ref:'5.1', title:'Use of Information' },
        { ref:'5.2', title:'Protection of Information' }
      ]}
    ]
  },
  {
    id:'III', num:'III', name:'Governing the Internal Audit Function',
    blurb:'The board’s role in establishing, supporting and overseeing internal audit.',
    principles:[
      { num:6, title:'Authorized by the Board', standards:[
        { ref:'6.1', title:'Internal Audit Mandate' },
        { ref:'6.2', title:'Internal Audit Charter' },
        { ref:'6.3', title:'Board and Senior Management Support' }
      ]},
      { num:7, title:'Positioned Independently', standards:[
        { ref:'7.1', title:'Organizational Independence' },
        { ref:'7.2', title:'Chief Audit Executive Qualifications' }
      ]},
      { num:8, title:'Overseen by the Board', standards:[
        { ref:'8.1', title:'Board Interaction' },
        { ref:'8.2', title:'Resources' },
        { ref:'8.3', title:'Quality' },
        { ref:'8.4', title:'External Quality Assessment' }
      ]}
    ]
  },
  {
    id:'IV', num:'IV', name:'Managing the Internal Audit Function',
    blurb:'How the chief audit executive plans, resources and manages the function.',
    principles:[
      { num:9, title:'Plan Strategically', standards:[
        { ref:'9.1', title:'Understanding Governance, Risk Management, and Control Processes' },
        { ref:'9.2', title:'Internal Audit Strategy' },
        { ref:'9.3', title:'Methodologies' },
        { ref:'9.4', title:'Internal Audit Plan' },
        { ref:'9.5', title:'Coordination and Reliance' }
      ]},
      { num:10, title:'Manage Resources', standards:[
        { ref:'10.1', title:'Financial Resource Management' },
        { ref:'10.2', title:'Human Resources Management' },
        { ref:'10.3', title:'Technological Resources' }
      ]},
      { num:11, title:'Communicate Effectively', standards:[
        { ref:'11.1', title:'Building Relationships and Communicating with Stakeholders' },
        { ref:'11.2', title:'Effective Communication' },
        { ref:'11.3', title:'Communicating Results' },
        { ref:'11.4', title:'Errors and Omissions' },
        { ref:'11.5', title:'Communicating the Acceptance of Risks' }
      ]},
      { num:12, title:'Enhance Quality', standards:[
        { ref:'12.1', title:'Internal Quality Assessment' },
        { ref:'12.2', title:'Performance Measurement' },
        { ref:'12.3', title:'Oversee and Improve Engagement Performance' }
      ]}
    ]
  },
  {
    id:'V', num:'V', name:'Performing Internal Audit Services',
    blurb:'Planning, performing and communicating individual engagements.',
    principles:[
      { num:13, title:'Plan Engagements Effectively', standards:[
        { ref:'13.1', title:'Engagement Communication' },
        { ref:'13.2', title:'Engagement Risk Assessment' },
        { ref:'13.3', title:'Engagement Objectives and Scope' },
        { ref:'13.4', title:'Evaluation Criteria' },
        { ref:'13.5', title:'Engagement Resources' },
        { ref:'13.6', title:'Work Program' }
      ]},
      { num:14, title:'Conduct Engagement Work', standards:[
        { ref:'14.1', title:'Gathering Information for Analyses and Evaluation' },
        { ref:'14.2', title:'Analyses and Potential Engagement Findings' },
        { ref:'14.3', title:'Evaluation of Findings' },
        { ref:'14.4', title:'Recommendations and Action Plans' },
        { ref:'14.5', title:'Engagement Conclusions' },
        { ref:'14.6', title:'Engagement Documentation' }
      ]},
      { num:15, title:'Communicate Engagement Results and Monitor Action Plans', standards:[
        { ref:'15.1', title:'Final Engagement Communication' },
        { ref:'15.2', title:'Confirming the Implementation of Recommendations or Action Plans' }
      ]}
    ]
  }
];

/* ---- derived helpers ---- */

/* every standard, flattened, carrying its domain and principle */
function allStandards(){
  const out = [];
  DOMAINS.forEach(d => d.principles.forEach(p => p.standards.forEach(s => {
    out.push({
      ref: s.ref, title: s.title,
      domainId: d.id, domainName: d.name,
      principleNum: p.num, principleTitle: p.title
    });
  })));
  return out;
}

/* the record holding this standard's content, if it exists yet */
function standardRecord(ref){
  if (typeof RECORDS === 'undefined') return null;
  return RECORDS.find(r => r.fw === 'iia' && r.ref === 'Standard ' + ref) || null;
}

function principleOf(num){
  for (const d of DOMAINS){
    const p = d.principles.find(x => x.num === num);
    if (p) return { domain:d, principle:p };
  }
  return null;
}

/* counts used in the interface — always derived, never hard-coded */
function contentStats(){
  const all = allStandards();
  const withContent = all.filter(s => standardRecord(s.ref));
  return {
    domains: DOMAINS.length,
    principles: DOMAINS.reduce((n,d) => n + d.principles.length, 0),
    standards: all.length,
    populated: withContent.length
  };
}
