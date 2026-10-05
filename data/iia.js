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
  headline:'Create, Protect and Sustain Value.',
  intro:'The purpose of this domain is to help internal auditors, the board, management, and other stakeholders understand and communicate the contribution of internal auditing.',
  classification:'The purpose statement, what internal auditing enhances, and the conditions for effectiveness follow Domain I of the Global Internal Audit Standards. Practical questions, illustrations, and the payroll example show how to apply that purpose.',
  statement:'Internal auditing strengthens the organization’s ability to create, protect, and sustain value by providing the board and management with independent, risk-based, and objective assurance, advice, insight, and foresight.',
  purposeDetail:'Its contribution extends beyond identifying weaknesses. Internal auditing helps the organization understand its risks, evaluate the effectiveness of its processes, make informed decisions, and identify opportunities for improvement.',
  sections:[
    { id:'domain-i-intro', label:'Purpose Introduction' },
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

const PUBLIC_SECTOR = {
  id:'public-sector',
  title:'Applying the Global Internal Audit Standards in the Public Sector',
  summary:'Understand how legal, governance, and funding arrangements affect application of the Standards.',
  classification:'The application considerations below are paraphrased from the supplied pages. Suggested controls, audit procedures, evidence, red flags, and illustrative findings are practical application content. They do not create additional IIA requirements or replace applicable legislation.',
  sections:[
    { id:'ps-overview', label:'Overview' },
    { id:'ps-laws', label:'Laws & Regulations' },
    { id:'ps-governance', label:'Governance & Structure' },
    { id:'ps-funding', label:'Funding' },
    { id:'ps-references', label:'Professional References' }
  ],
  overview:{
    intro:'The Global Internal Audit Standards apply to internal audit functions in both the public and private sectors. Public sector internal auditors, however, may operate within different legal, political, governance, organizational, and funding arrangements.',
    detail:'These arrangements can affect how particular requirements are applied, including the internal audit mandate, reporting relationships, oversight responsibilities, access to resources, and communication of results. Public sector terminology may also differ. Responsibilities assigned to the “board” or “senior management” must be understood in the context of the organization’s actual governance structure and legal authority.',
    note:'External quality assessments should therefore be performed by assessors who understand public sector activities and governance arrangements.',
    priorities:[
      'Compliance with laws and regulations.',
      'Economy, efficiency, and effectiveness of government processes and programs.',
      'Safeguarding public resources.',
      'Appropriate and equitable use of resources in delivering public services.',
      'Alignment of organizational performance with strategic objectives.'
    ],
    applicationAreas:[
      { title:'Laws and Regulations', text:'Understand how legislation shapes the mandate and affects conformance.' },
      { title:'Governance and Organizational Structure', text:'Identify the bodies responsible for oversight and safeguard independence.' },
      { title:'Funding', text:'Manage resources within the applicable budget and spending arrangements.' }
    ]
  },
  laws:{
    text:[
      'The chief audit executive must understand the laws and regulations affecting the internal audit function’s ability to conform fully with the Standards.',
      'The internal audit charter or other documentation may explain how the function complies with legal requirements while addressing the intent of the Standards.',
      'Where conformance is not possible, the chief audit executive must document the reason, make appropriate disclosures, and continue to conform with all other requirements of the Standards.',
      'A legal constraint affecting one requirement does not remove the obligation to meet other requirements.'
    ],
    subtopics:[
      { title:'Mandate and Charter Established by Legislation', text:'Laws or regulations may establish the internal audit mandate and charter. In these circumstances, the chief audit executive may lack authority to amend them. A focused, documented review may nevertheless help confirm that the approach to legal and regulatory compliance remains accurately defined.' },
      { title:'Public Disclosure and Information Protection', text:'Public disclosure requirements may determine which documents must be released and which must remain protected. Internal audit methodologies should address these requirements, including the treatment of audit reports, supporting information, and confidential records.' },
      { title:'Private Discussions and Public Meetings', text:'Legislation may restrict private discussions between the chief audit executive and the board. It may also require internal audit results to be presented at public meetings. Communication methodologies should reflect these arrangements and provide an appropriate process for handling sensitive information.' },
      { title:'External Assurance and Supreme Audit Institutions', text:'An external assurance provider may be established by law. In some jurisdictions, a supreme audit institution may have authority that affects internal audit planning, coordination, or joint work. Internal audit should understand the respective mandates and any legally established obligations.' },
      { title:'Public and Stakeholder Input', text:'Public sector stakeholders may include elected officials, appointed officials, and users of public services. Where appropriate, public input may inform audit planning and engagement risk assessments and should be evaluated alongside other risk information.' }
    ],
    focus:[
      'Completeness of the legal and regulatory requirements assessment.',
      'Alignment of the mandate and charter with established authority.',
      'Identification and disclosure of constraints affecting conformance.',
      'Rules governing publication and protection of information.',
      'Communication arrangements for public and private meetings.',
      'Coordination with legally mandated assurance providers.',
      'Consideration of relevant public-service concerns in planning.'
    ],
    risks:[
      { title:'Legal responsibilities are misunderstood', text:'Internal audit acts outside its authority or fails to perform mandated work.' },
      { title:'Constraints on conformance are not documented', text:'Oversight bodies receive an incomplete picture of compliance.' },
      { title:'Disclosure requirements are applied incorrectly', text:'Information is improperly withheld or protected information is released.' },
      { title:'Responsibilities overlap without clear coordination', text:'Audit work is duplicated or important areas remain uncovered.' },
      { title:'Relevant public concerns are overlooked', text:'Planning may miss significant service-delivery risks.' }
    ],
    controls:[
      'Register of legal requirements affecting the internal audit function.',
      'Mapping of legal obligations to the mandate, charter, and methodology.',
      'Documented assessment of constraints affecting conformance.',
      'Information classification and disclosure-review process.',
      'Coordination arrangements reflecting each assurance provider’s authority.',
      'Structured evaluation of relevant public feedback during planning.'
    ],
    procedures:[
      'Identify the legal provisions governing internal audit authority and responsibilities.',
      'Compare the mandate and methodology with identified obligations.',
      'Examine situations where conformance is considered impossible.',
      'Review selected decisions to disclose or withhold audit information.',
      'Assess coordination with external assurance providers.',
      'Review how relevant public concerns inform audit planning.'
    ],
    redFlags:[
      '“The law does not allow it” is stated without identifying the relevant provision.',
      'A constraint affecting one requirement is used to justify broader nonconformance.',
      'Audit reports are published without a disclosure review.',
      'Required disclosures are withheld without a documented basis.',
      'Internal and external audit responsibilities are unclear.',
      'Repeated service complaints are excluded from risk assessment without evaluation.'
    ],
    findings:[
      'The methodology did not reflect applicable disclosure obligations.',
      'Constraints affecting conformance were not documented or appropriately disclosed.',
      'The charter did not accurately describe the legally established mandate.',
      'Coordination responsibilities with an external assurance provider were undefined.',
      'Relevant stakeholder information was not evaluated during audit planning.'
    ]
  },
  governance:{
    text:[
      'Public sector organizations may have several layers of governance within and outside the organization. These arrangements can affect the chief audit executive’s reporting relationships, oversight, appointment, remuneration, and access to funding.',
      'The responsibilities described in the Standards should be mapped to the bodies or individuals with the corresponding legal authority.'
    ],
    subtopics:[
      { title:'Role of the Board', text:'A public sector board may primarily set policy and may lack authority to appoint, remove, or determine the remuneration of the chief audit executive. In such circumstances, the board should still provide input to management on performance evaluation and appointment or removal decisions.' },
      { title:'Meaning of Senior Management', text:'The term “senior management” may have a different meaning in a particular organization. Where it refers to management of the activity being audited, safeguards to independence must address the risk of interference with internal audit work.' },
      { title:'Directions from Elected Officials', text:'The chief audit executive should avoid taking direction from elected officials without first consulting the board and senior management responsible for overseeing internal audit, unless those officials have direct oversight responsibilities.' }
    ],
    arrangements:[
      { title:'Internal audit reports directly to a legislative body', text:'That body may perform the board’s oversight role.' },
      { title:'Internal audit reports to the head of the organization', text:'Reporting authority and independence safeguards need to be understood.' },
      { title:'Internal audit operates within a component of a larger organization', text:'Several governing bodies or reporting levels may be involved.' },
      { title:'The chief audit executive is elected by voters', text:'Oversight and accountability arrangements may differ significantly.' },
      { title:'Internal audit reports to a manager within a department', text:'The position may create independence concerns requiring assessment and safeguards.' }
    ],
    focus:[
      'Identification of the appropriate oversight body.',
      'Clarity of functional and administrative reporting relationships.',
      'Authority over the chief audit executive’s appointment and evaluation.',
      'Independence from the activities under review.',
      'Handling of directions from elected or appointed officials.',
      'Oversight in organizations with multiple governance levels.',
      'Effectiveness of independence safeguards.'
    ],
    risks:[
      { title:'Oversight responsibilities are unclear', text:'Important decisions lack ownership or approval.' },
      { title:'Management of an audited activity controls internal audit work', text:'Scope, findings, or communications may be influenced.' },
      { title:'Conflicting directions come from several bodies', text:'Priorities become inconsistent and accountability weakens.' },
      { title:'Board input into chief audit executive decisions is absent', text:'Oversight of leadership and performance is weakened.' },
      { title:'Safeguards exist only on paper', text:'Interference may continue without effective challenge.' }
    ],
    controls:[
      'Governance responsibility matrix reflecting actual authority.',
      'Clearly documented reporting relationships.',
      'Process for identifying, assessing, and communicating independence concerns.',
      'Consultation process for directions received outside established oversight channels.',
      'Independent audit committee oversight, where appropriate.',
      'Documented board input into relevant chief audit executive decisions.',
      'Periodic evaluation of whether safeguards operate effectively.'
    ],
    procedures:[
      'Map oversight responsibilities to the relevant governing bodies.',
      'Compare actual reporting practices with documented arrangements.',
      'Assess whether management can improperly restrict scope, access, or reporting.',
      'Review how directions from elected officials are handled.',
      'Examine board participation in chief audit executive performance and personnel decisions.',
      'Evaluate the operation of independence safeguards.'
    ],
    redFlags:[
      'The manager responsible for the activity reviewed can suppress findings.',
      'Audit scope changes follow an undocumented external instruction.',
      'Several bodies each assume another body provides oversight.',
      'Reporting lines differ between the charter and actual practice.',
      'The chief audit executive’s performance is assessed solely by the management being audited.',
      'An audit committee exists but receives little information about restrictions or interference.'
    ],
    findings:[
      'Responsibilities across multiple oversight bodies were not clearly allocated.',
      'Internal audit reporting arrangements created an unmanaged independence concern.',
      'Directions from officials were accepted without establishing their authority or consulting the appropriate oversight bodies.',
      'Board input into chief audit executive performance evaluation was not obtained.',
      'Independence safeguards were documented but not operating effectively.'
    ]
  },
  funding:{
    text:[
      'Public sector funding arrangements vary. The board or senior management may not have authority to approve or change the internal audit budget.',
      'Some functions submit independent budget requests to a board or legislative body. Others receive an allocation within a wider organizational budget, potentially approved by an external authority.',
      'The chief audit executive may advocate to the board for the resources needed to perform the function’s responsibilities.'
    ],
    subtopics:[
      { title:'Human Resource Constraints', text:'Position classifications and employment arrangements may establish remuneration ranges and restrict the chief audit executive’s or board’s authority over pay. The chief audit executive should collaborate with human resources to address staffing needs within these arrangements.' },
      { title:'Technology Constraints', text:'Internal audit may be limited to software approved for the organization. The function should engage the board in supporting its technology needs and use available software as efficiently as possible while maintaining conformance with the Standards.' },
      { title:'External Quality Assessment Funding', text:'Where funding limits access to external quality assessment resources, participation in peer programs may be an option. Any such arrangement still needs to satisfy the applicable qualification and independence requirements.' },
      { title:'Reporting to Funding Authorities', text:'An external funding or oversight authority may require final engagement communications. Distribution arrangements should account for these obligations and the applicable information-protection requirements.' }
    ],
    focus:[
      'Authority for budget approval and allocation.',
      'Sufficiency of resources relative to the mandate and audit plan.',
      'Communication of resource needs and limitations.',
      'Management of the approved budget.',
      'Staffing constraints and coordination with human resources.',
      'Technology needs and approved alternatives.',
      'Resources for external quality assessment.',
      'Reporting obligations to funding authorities.'
    ],
    risks:[
      { title:'Funding does not support planned coverage', text:'Significant areas may remain unaudited.' },
      { title:'Resource limitations are not communicated', text:'Oversight bodies underestimate their effect on delivery.' },
      { title:'Staffing arrangements do not support required capabilities', text:'Skills gaps affect audit quality.' },
      { title:'Technology restrictions are not addressed', text:'Testing coverage and efficiency are reduced.' },
      { title:'External assessment planning ignores funding needs', text:'Assessment arrangements may be delayed or unsuitable.' },
      { title:'Funding-related reporting obligations are unclear', text:'Required recipients do not receive appropriate communications.' }
    ],
    controls:[
      'Resource plan linking the mandate and audit plan to staffing, funding, and technology needs.',
      'Documented communication of resource limitations and their effects.',
      'Budget monitoring against approved allocations.',
      'Joint planning with human resources for required capabilities.',
      'Technology needs assessment and review of approved options.',
      'Advance resource planning for external quality assessment.',
      'Distribution matrix identifying funding-authority reporting obligations.'
    ],
    procedures:[
      'Identify who approves, allocates, and controls the internal audit budget.',
      'Compare planned work with available resources.',
      'Review how funding limitations and their effects were communicated.',
      'Assess budget monitoring and responses to significant variances.',
      'Examine collaboration with human resources on staffing constraints.',
      'Review technology needs and the suitability of approved tools.',
      'Assess external quality assessment resource planning and any proposed peer arrangements.',
      'Verify reporting obligations to external funding authorities.'
    ],
    redFlags:[
      'Audit coverage is reduced without explaining the resource-related effect.',
      'Budget requests are based only on prior-year spending.',
      'Vacancies persist without evaluating the impact on skills and delivery.',
      'Technology requests lack a connection to audit needs.',
      'Unapproved software is used to bypass organizational restrictions.',
      'A low-cost peer assessment is selected without examining independence.',
      'Required communications to a funding authority are omitted.'
    ],
    findings:[
      'Resource allocations were not evaluated against the approved audit plan.',
      'The consequences of funding shortages were not communicated to the appropriate oversight body.',
      'Staffing constraints were not addressed through coordination with human resources.',
      'Technology limitations affected testing without a documented response.',
      'External quality assessment planning did not address the necessary funding or assessor suitability.',
      'Reporting arrangements did not reflect an external funding authority’s established requirements.'
    ]
  },
  references:[
    { ref:'4.1', title:'Conformance with the Global Internal Audit Standards', connection:'Handling constraints affecting conformance.' },
    { ref:'5.1', title:'Use of Information', connection:'Appropriate use of information.' },
    { ref:'5.2', title:'Protection of Information', connection:'Disclosure and information protection.' },
    { ref:'6.1', title:'Internal Audit Mandate', connection:'Legally established authority and responsibilities.' },
    { ref:'6.2', title:'Internal Audit Charter', connection:'Documentation of mandate and governance arrangements.' },
    { ref:'6.3', title:'Board and Senior Management Support', connection:'Oversight, support, and access.' },
    { ref:'7.1', title:'Organizational Independence', connection:'Reporting relationships and safeguards.' },
    { ref:'8.1', title:'Board Interaction', connection:'Communication with the relevant oversight body.' },
    { ref:'8.2', title:'Resources', connection:'Sufficiency of resources.' },
    { ref:'8.4', title:'External Quality Assessment', connection:'Assessor competence and assessment arrangements.' },
    { ref:'9.4', title:'Internal Audit Plan', connection:'Planning informed by relevant risks and stakeholder input.' },
    { ref:'9.5', title:'Coordination and Reliance', connection:'Relationships with other assurance providers.' },
    { ref:'10.1', title:'Financial Resource Management', connection:'Budget planning and management.' },
    { ref:'10.2', title:'Human Resources Management', connection:'Staffing and capability constraints.' },
    { ref:'10.3', title:'Technological Resources', connection:'Technology needs and limitations.' },
    { ref:'11.1', title:'Building Relationships and Communicating with Stakeholders', connection:'Relationships with public sector stakeholders.' },
    { ref:'11.2', title:'Effective Communication', connection:'Quality of communications.' },
    { ref:'13.2', title:'Engagement Risk Assessment', connection:'Consideration of relevant public-service risks.' },
    { ref:'15.1', title:'Final Engagement Communication', connection:'Reporting and appropriate distribution.' }
  ]
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
