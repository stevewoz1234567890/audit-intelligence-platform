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

const DOMAIN_I = {
  title:'Purpose of Internal Auditing',
  summary:'Understand why internal auditing exists, the value it provides, and what enables it to be effective.',
  headline:'Create, protect and sustain value.',
  intro:'The purpose of this domain is to help internal auditors, the board, management, and other stakeholders understand and communicate the contribution of internal auditing.',
  classification:'The purpose statement, what internal auditing enhances, and the conditions for effectiveness follow Domain I of the Global Internal Audit Standards. Practical questions, illustrations, and the payroll example show how to apply that purpose.',
  statement:'Internal auditing strengthens the organization’s ability to create, protect, and sustain value by providing the board and management with independent, risk-based, and objective assurance, advice, insight, and foresight.',
  purposeDetail:'Its contribution extends beyond identifying weaknesses. Internal auditing helps the organization understand its risks, evaluate the effectiveness of its processes, make informed decisions, and identify opportunities for improvement.',
  sections:[
    { id:'domain-i-purpose', label:'Purpose & Value' },
    { id:'domain-i-value', label:'Forms of Contribution' },
    { id:'domain-i-enhances', label:'What Auditing Enhances' },
    { id:'domain-i-conditions', label:'Conditions for Effectiveness' },
    { id:'domain-i-practical', label:'Practical Application' },
    { id:'domain-i-related', label:'Related Principles' }
  ],
  valueContributions:[
    { title:'Create value', text:'Identify opportunities to improve processes and support the achievement of organizational objectives.' },
    { title:'Protect value', text:'Evaluate how effectively governance, risk management, and controls address threats to the organization.' },
    { title:'Sustain value', text:'Support improvements that strengthen performance, resilience, and the organization’s ability to achieve its objectives over time.' }
  ],
  practicalIllustration:'When reviewing a procurement process, internal auditing may identify opportunities to improve purchasing efficiency, assess controls intended to prevent unauthorized transactions, and recommend improvements that support reliable operations over time. This illustrates how an engagement can contribute to creating, protecting, and sustaining value.',
  howValueProvides:[
    { icon:'shield', title:'Assurance', short:'Independent assessments, risks and controls', text:'An objective assessment that helps stakeholders understand whether governance, risk management, and controls are effective.', application:'Assess whether payment approvals and supporting documentation operate as intended.' },
    { icon:'users', title:'Advice', short:'Helping management address responsibilities', text:'Guidance that helps management consider improvements while management retains responsibility for decisions and implementation.', application:'Advise on control considerations when redesigning a procurement process.' },
    { icon:'spark', title:'Insight', short:'Understanding patterns, causes and implications', text:'An understanding of patterns, underlying causes, and relationships that may not be apparent from individual issues.', application:'Identify a common access-management weakness behind recurring exceptions across several departments.' },
    { icon:'clock', title:'Foresight', short:'Anticipating emerging risks and future implications', text:'A forward-looking perspective on emerging risks and their potential implications.', application:'Highlight control considerations associated with a planned system migration before implementation.' }
  ],
  characteristics:[
    { title:'Independent', text:'The internal audit function is positioned to perform its responsibilities without inappropriate interference.' },
    { title:'Risk-based', text:'Internal audit attention is informed by risks that could affect organizational objectives.' },
    { title:'Objective', text:'Assessments and conclusions are based on balanced professional judgment and evidence.' }
  ],
  enhances:[
    { icon:'target', title:'Organizational objectives', text:'Successful achievement of the organization’s objectives.', application:'Assess whether project governance supports delivery against approved objectives, budgets, and timelines.' },
    { icon:'shield', title:'Governance, risk management and controls', text:'Governance, risk management, and control processes.', application:'Evaluate whether significant risks have clear owners, appropriate responses, and monitoring arrangements.' },
    { icon:'scale', title:'Decision-making and oversight', text:'Decision-making and oversight.', application:'Provide the board with observations on whether reporting on a strategic initiative is complete, reliable, and timely.' },
    { icon:'star', title:'Reputation and stakeholder confidence', text:'Reputation and credibility with its stakeholders.', application:'Report whether delegated approval authorities are operating in line with policy and oversight expectations.' },
    { icon:'users', title:'Ability to serve the public interest', text:'Ability to serve the public interest.', application:'Perform the work in conformance with the Standards, which are set in the public interest.' }
  ],
  conditions:[
    { icon:'users', title:'Competent professionals', text:'It is performed by competent professionals in conformance with the Global Internal Audit Standards, which are set in the public interest.', indicators:'Relevant knowledge and skills, professional development, appropriate methodologies, engagement supervision, and quality assessments.' },
    { icon:'scale', title:'Independence and objectivity', text:'Internal auditors are committed to making objective assessments.', indicators:'Disclosure of conflicts, safeguards for objectivity, and evidence-supported conclusions.' },
    { icon:'hierarchy', title:'Appropriate positioning', text:'The internal audit function is independently positioned with direct accountability to the board.', indicators:'Clear reporting arrangements, direct board access, and opportunities to raise concerns about restrictions or interference.' },
    { icon:'shield', title:'Independent assurance', text:'The board and management receive independent, risk-based, and objective assurance.', indicators:'Engagements are scoped to risk, and conclusions are supported by evidence rather than directed by management.' },
    { icon:'check', title:'Freedom from undue influence', text:'Internal auditors are free from undue influence and committed to making objective assessments.', indicators:'Escalation of inappropriate pressure, and safeguards when independence or objectivity could be affected.' }
  ],
  conditionsNote:'Detailed obligations for these conditions are addressed in the related principles and standards.',
  practicalQuestions:[
    { question:'Which organizational objectives does this engagement support?', application:'Explain the connection between the activity under review and the organization’s intended outcomes.' },
    { question:'Which risks could affect those objectives?', application:'Direct attention to matters that could materially affect performance or outcomes.' },
    { question:'What assurance or advice will the engagement provide?', application:'Establish a clear contribution that is consistent with the engagement’s objectives and scope.' },
    { question:'What evidence supports the assessment?', application:'Base findings and conclusions on appropriate information and analysis.' },
    { question:'What broader insight can be drawn from the results?', application:'Consider recurring issues, shared causes, or implications across activities.' },
    { question:'Are there emerging risks that stakeholders should understand?', application:'Consider relevant future changes and potential implications.' },
    { question:'Could independence or objectivity be affected?', application:'Identify and address relevant restrictions, conflicts, or inappropriate influence.' },
    { question:'How will the results support decisions or oversight?', application:'Communicate the significance of the work in a form stakeholders can use.' }
  ],
  payrollExample:{
    intro:'An internal audit engagement may assess whether payroll payments are accurate, authorized, and supported by reliable employee records.',
    contributions:[
      'Assurance: Assess whether key payroll controls operate effectively.',
      'Advice: Suggest improvements to the process for updating employee payment details.',
      'Insight: Identify whether recurring payroll exceptions arise from a common weakness in HR and finance coordination.',
      'Foresight: Highlight risks associated with an upcoming payroll-system implementation.'
    ],
    note:'Management remains responsible for operating payroll, making decisions, and implementing agreed actions.'
  },
  relatedTopics:[
    { topic:'Integrity and objective professional judgment', principles:[1, 2] },
    { topic:'Competence and professional care', principles:[3, 4] },
    { topic:'Board authorization, independence, and oversight', principles:[6, 7, 8] },
    { topic:'Planning work around organizational objectives and risks', principles:[9, 13] },
    { topic:'Communication and quality', principles:[11, 12] },
    { topic:'Evidence-based engagement work', principles:[14] },
    { topic:'Communicating results and monitoring action plans', principles:[15] }
  ],
  related:[
    'Domain II — Ethics and Professionalism',
    'Domain III — Governing the Internal Audit Function',
    'Domain IV — Managing the Internal Audit Function',
    'Domain V — Performing Internal Audit Services'
  ],
  official:'https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/'
};

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
