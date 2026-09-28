/* ============================================================
   AUDIT INTELLIGENCE PLATFORM — KNOWLEDGE LIBRARY
   ------------------------------------------------------------
   Single source of truth for the demo. Every page reads from
   this file: framework sections, global search, AI Assistant
   retrieval, and the admin CMS listing.

   In Week 2 this is replaced by API calls to the database;
   the record shape below IS the database schema.

   CONTENT TIERS
     "open" — openly licensed (FATF, INTOSAI, BIS, regulators).
              Full text may be held.
     "ref"  — copyrighted (IIA, COSO, ISACA, ACFE, IFRS, PMI,
              ISO). Structured reference + ORIGINAL guidance
              written for this platform. No verbatim reproduction.
   ============================================================ */

const FRAMEWORKS = [
  { id:'iia',    abbr:'IIA',    name:'Global Internal Audit Standards', body:'The Institute of Internal Auditors',
    cert:'CIA', colour:'#1A5442', tier:'ref',  url:'https://www.theiia.org', version:'2024', effective:'2025-01-09',
    updated:'2026-09-25', count:58, populated:true,
    blurb:'The global professional standards for the practice of internal auditing, restructured in 2024 into five domains and fifteen principles.' },

  { id:'coso',   abbr:'COSO',   name:'Internal Control — Integrated Framework', body:'Committee of Sponsoring Organizations',
    cert:'', colour:'#2E7350', tier:'ref',  url:'https://www.coso.org', version:'2013', effective:'2013-05-15',
    updated:'2026-09-12', count:22, populated:true,
    blurb:'Five components and seventeen principles defining effective internal control over operations, reporting and compliance.' },

  { id:'fatf',   abbr:'FATF',   name:'FATF 40 Recommendations', body:'Financial Action Task Force',
    cert:'', colour:'#A8761C', tier:'open', url:'https://www.fatf-gafi.org', version:'2025', effective:'2025-02-01',
    updated:'2026-09-18', count:40, populated:true,
    blurb:'The international standard for combating money laundering, terrorist financing and proliferation financing.' },

  { id:'isaca',  abbr:'ISACA',  name:'IS Audit and Assurance Standards', body:'ISACA',
    cert:'CISA', colour:'#1B5E8C', tier:'ref',  url:'https://www.isaca.org', version:'2023', effective:'2023-01-01',
    updated:'2026-08-30', count:41, populated:false,
    blurb:'Mandatory standards and guidelines for information systems audit and assurance engagements.' },

  { id:'acfe',   abbr:'ACFE',   name:'Fraud Examiners Manual & Fraud Tree', body:'Association of Certified Fraud Examiners',
    cert:'CFE', colour:'#9A3B2E', tier:'ref',  url:'https://www.acfe.com', version:'2024', effective:'2024-01-01',
    updated:'2026-09-05', count:34, populated:false,
    blurb:'Occupational fraud classification, detection methods and investigation procedures.' },

  { id:'acams',  abbr:'ACAMS',  name:'AML / Financial Crime Standards', body:'ACAMS',
    cert:'CAMS', colour:'#B08D1E', tier:'ref',  url:'https://www.acams.org', version:'2024', effective:'2024-06-01',
    updated:'2026-09-14', count:39, populated:false,
    blurb:'Anti-money-laundering programme design, customer due diligence and sanctions compliance.' },

  { id:'ifrs',   abbr:'IFRS',   name:'IFRS Accounting Standards', body:'IFRS Foundation / IASB',
    cert:'', colour:'#6B3F94', tier:'ref',  url:'https://www.ifrs.org', version:'2026', effective:'2026-01-01',
    updated:'2026-08-28', count:46, populated:false,
    blurb:'International financial reporting standards governing recognition, measurement, presentation and disclosure.' },

  { id:'pmi',    abbr:'PMI',    name:'PMBOK Guide & Project Standards', body:'Project Management Institute',
    cert:'PMP', colour:'#0E6E8C', tier:'ref',  url:'https://www.pmi.org', version:'7th Ed', effective:'2021-08-01',
    updated:'2026-07-19', count:27, populated:false,
    blurb:'Project management principles, performance domains and delivery practices relevant to project assurance.' },

  { id:'iso',    abbr:'ISO',    name:'ISO Management System Standards', body:'International Organization for Standardization',
    cert:'', colour:'#0E8C7A', tier:'ref',  url:'https://www.iso.org', version:'various', effective:'2018-02-01',
    updated:'2026-09-01', count:31, populated:false,
    blurb:'ISO 31000 risk management, ISO 27001 information security and related management system standards.' },

  { id:'intosai',abbr:'INTOSAI',name:'ISSAI — Public Sector Auditing', body:'INTOSAI',
    cert:'', colour:'#8C5A1B', tier:'open', url:'https://www.issai.org', version:'2019', effective:'2019-01-01',
    updated:'2026-09-02', count:18, populated:false,
    blurb:'International standards for supreme audit institutions covering financial, compliance and performance auditing.' },

  { id:'basel',  abbr:'BIS',    name:'Basel Committee Standards', body:'Bank for International Settlements',
    cert:'', colour:'#4A5A8C', tier:'open', url:'https://www.bis.org', version:'2021', effective:'2021-03-31',
    updated:'2026-09-11', count:15, populated:false,
    blurb:'Banking supervision principles including operational resilience, risk data aggregation and internal audit expectations.' },

  { id:'erm',    abbr:'ERM',    name:'Enterprise Risk Management', body:'COSO ERM / ISO 31000',
    cert:'', colour:'#7A3E8C', tier:'ref',  url:'https://www.coso.org', version:'2017', effective:'2017-09-06',
    updated:'2026-09-20', count:29, populated:true,
    blurb:'Integrating risk with strategy and performance — governance, risk appetite, portfolio view and risk response.' }
];

/* ------------------------------------------------------------
   STANDARD RECORDS
   Field structure = the agreed audit content model:
   requirement · focus · risks · controls · procedures · testing
   · evidence · redFlags · findings · causes · impacts
   · recommendations · references
   ------------------------------------------------------------ */

const RECORDS = [

/* ========== IIA ========== */
{
  id:'iia-13-3', fw:'iia', ref:'Standard 13.3', title:'Risk Assessment in Engagement Planning',
  domain:'Domain V — Performing Internal Audit Services', tier:'ref',
  version:'2024', effective:'2025-01-09', updated:'2026-09-25',
  source:'The Institute of Internal Auditors', url:'https://www.theiia.org/standards',
  summary:'Internal auditors must assess the risks relevant to the activity under review and use that assessment to shape engagement objectives and scope.',
  requirement:'The internal auditor evaluates the risks relevant to the area under review, considers the likelihood and impact of those risks, and documents how the assessment informed engagement objectives, scope and the testing approach.',
  focus:[
    'Whether the engagement risk assessment is documented and traceable to the scope actually performed',
    'Alignment between the engagement risk assessment and the organisation\'s enterprise risk register',
    'Consideration of fraud risk as a distinct category, not folded into general operational risk',
    'Evidence that management\'s own risk assessment was challenged rather than accepted at face value'
  ],
  risks:[
    { r:'Engagement scope omits a material risk area', i:'High', d:'Audit provides false assurance over a process that was never examined.' },
    { r:'Risk assessment performed as a formality after scope was already fixed', i:'Medium', d:'Documentation exists but did not influence the work, undermining the standard\'s intent.' },
    { r:'Fraud risk not separately considered', i:'High', d:'Schemes involving management override go undetected.' }
  ],
  controls:[
    { c:'Documented engagement risk assessment approved by the engagement supervisor before fieldwork begins', t:'Preventive' },
    { c:'Standard risk assessment template linking each identified risk to a planned procedure', t:'Preventive' },
    { c:'Supervisory review confirming scope coverage against the assessment', t:'Detective' },
    { c:'Periodic quality assurance review sampling completed engagements for assessment adequacy', t:'Detective' }
  ],
  procedures:[
    'Obtain the engagement planning file and locate the documented risk assessment.',
    'Confirm the assessment predates the approved engagement programme by reference to dates and version history.',
    'Trace each risk rated high or medium to a specific planned procedure in the audit programme.',
    'Identify any high-rated risk with no corresponding procedure and obtain the rationale.',
    'Compare the engagement risk assessment against the current enterprise risk register for omissions.',
    'Confirm fraud risk was considered separately and documented.'
  ],
  testing:'Select a sample of engagements completed in the period. For each, verify the risk assessment exists, is dated before the programme approval, and that every high-rated risk maps to at least one procedure. Recalculate coverage as procedures-mapped ÷ high-risks-identified; investigate any engagement below full coverage.',
  evidence:[
    'Engagement planning memorandum with version history',
    'Documented risk assessment with supervisor sign-off and date',
    'Approved audit programme showing risk-to-procedure mapping',
    'Enterprise risk register extract for the period',
    'Supervisory review notes and clearance'
  ],
  redFlags:[
    'Risk assessment and audit programme carry the same creation date',
    'Identical risk assessments across engagements in unrelated business areas',
    'High-rated risks with no corresponding fieldwork procedure',
    'Assessment signed off after fieldwork completion'
  ],
  findings:[
    'Engagement risk assessments were prepared but not demonstrably used to determine scope',
    'Fraud risk was not separately assessed in a majority of engagements sampled',
    'Risk assessments were not updated when scope changed during fieldwork'
  ],
  causes:[
    'Planning template treats the risk assessment as a compliance artefact rather than a scoping tool',
    'Time pressure at planning stage; assessment completed retrospectively to close the file',
    'Engagement supervisors not trained on the 2024 Standards restructure'
  ],
  impacts:'Assurance provided to the Board may not address the risks that actually matter to the organisation. In a quality assessment against the Standards, this represents a conformance gap in Domain V.',
  recommendations:[
    'Amend the planning template so the audit programme cannot be approved until each high-rated risk is mapped to a procedure.',
    'Require the engagement supervisor to evidence challenge of management\'s risk assessment in the planning memorandum.',
    'Introduce a fraud risk section as a mandatory, separately signed-off element of engagement planning.',
    'Include risk-assessment adequacy as a standing item in the internal quality assurance programme.'
  ],
  references:[
    { t:'IIA Global Internal Audit Standards (2024) — Domain V', u:'https://www.theiia.org/standards' },
    { t:'IIA Implementation Guidance — Engagement Planning', u:'https://www.theiia.org' }
  ],
  tags:['risk assessment','planning','scope','fraud risk','engagement','domain v']
},
{
  id:'iia-9-4', fw:'iia', ref:'Standard 9.4', title:'Internal Audit Resources',
  domain:'Domain IV — Managing the Internal Audit Function', tier:'ref',
  version:'2024', effective:'2025-01-09', updated:'2026-09-25',
  source:'The Institute of Internal Auditors', url:'https://www.theiia.org/standards',
  summary:'The chief audit executive must manage resources so the internal audit plan can be delivered, and must escalate where resources are insufficient.',
  requirement:'The chief audit executive determines the resources — headcount, skills, technology and budget — required to deliver the approved internal audit plan, and communicates the impact of any shortfall to the Board.',
  focus:[
    'Whether a documented resource assessment supports the approved plan',
    'Skills coverage for specialist areas: IT, data analytics, fraud, treasury',
    'Whether resource constraints were escalated to the Board in writing',
    'Use of co-source or guest auditor arrangements to close capability gaps'
  ],
  risks:[
    { r:'Audit plan approved without resources to deliver it', i:'High', d:'Coverage gaps emerge late in the year; assurance the Board expected is never provided.' },
    { r:'Specialist skills absent for technical audit areas', i:'High', d:'IT and data-heavy areas receive superficial coverage.' },
    { r:'Resource shortfall known but not escalated', i:'Medium', d:'Board unaware that approved coverage will not be achieved.' }
  ],
  controls:[
    { c:'Annual resource assessment documented alongside the audit plan', t:'Preventive' },
    { c:'Skills matrix maintained and compared against planned engagement types', t:'Detective' },
    { c:'Quarterly plan-completion reporting to the Audit Committee with variance explanation', t:'Detective' },
    { c:'Formal escalation protocol where plan delivery falls below an agreed threshold', t:'Corrective' }
  ],
  procedures:[
    'Obtain the approved audit plan and the supporting resource assessment.',
    'Recalculate planned auditor-days against available capacity net of leave, training and administration.',
    'Compare the skills matrix against the specialist requirements of planned engagements.',
    'Review Audit Committee minutes for evidence of resource discussion and escalation.',
    'Track plan completion at year end and analyse the reasons for any engagements deferred or dropped.'
  ],
  testing:'Recompute available capacity independently: headcount × working days − leave − training − administrative time. Compare to planned engagement days. Where planned exceeds available, confirm the gap was reported to the Board and trace to the minutes.',
  evidence:[
    'Approved internal audit plan and resource assessment',
    'Skills matrix and training records',
    'Audit Committee papers and minutes',
    'Timesheet or capacity data for the period',
    'Year-end plan completion analysis'
  ],
  redFlags:[
    'Plan approved with no supporting resource calculation',
    'Year-on-year plan completion consistently below 80% with no escalation',
    'Specialist engagements repeatedly deferred to the following year',
    'Heavy reliance on overtime to deliver the plan'
  ],
  findings:[
    'The internal audit plan was approved without a documented resource assessment',
    'Specialist IT audit capability was insufficient for the planned coverage',
    'Plan completion of 68% was not formally escalated to the Audit Committee'
  ],
  causes:[
    'Resource planning treated as a budgeting exercise separate from audit planning',
    'Recruitment freeze not reflected in the plan submitted for approval',
    'No defined threshold triggering escalation'
  ],
  impacts:'The Board receives less assurance than it believes it has approved. Repeated under-delivery erodes the credibility of the function and may constitute non-conformance with Domain IV.',
  recommendations:[
    'Require the audit plan submission to include a resource assessment reconciling planned days to available capacity.',
    'Define a plan-completion threshold below which formal Board escalation is mandatory.',
    'Maintain a skills matrix reviewed annually against the forward plan, with co-source arrangements for identified gaps.'
  ],
  references:[
    { t:'IIA Global Internal Audit Standards (2024) — Domain IV', u:'https://www.theiia.org/standards' }
  ],
  tags:['resources','capacity','audit plan','skills','cae','domain iv','board reporting']
},
{
  id:'iia-11-2', fw:'iia', ref:'Standard 11.2', title:'Effective Communication',
  domain:'Domain IV — Managing the Internal Audit Function', tier:'ref',
  version:'2024', effective:'2025-01-09', updated:'2026-09-25',
  source:'The Institute of Internal Auditors', url:'https://www.theiia.org/standards',
  summary:'Internal audit communications must be accurate, objective, clear, concise, constructive, complete and timely.',
  requirement:'Engagement communications convey results in a manner that is accurate and objective, sufficiently clear and concise to be understood, constructive in tone, complete in covering the matters required, and delivered in time to enable action.',
  focus:[
    'Whether findings state condition, criteria, cause, effect and recommendation distinctly',
    'Elapsed time between fieldwork completion and report issue',
    'Whether management responses include owner and target date',
    'Balance and tone — recognition of effective controls alongside deficiencies'
  ],
  risks:[
    { r:'Reports issued too late for management to act', i:'Medium', d:'Findings overtaken by events; remediation delayed.' },
    { r:'Findings lack a stated criterion', i:'High', d:'Observation reads as auditor opinion; management disputes the basis.' },
    { r:'Root cause not distinguished from condition', i:'High', d:'Remediation addresses the symptom, and the issue recurs.' }
  ],
  controls:[
    { c:'Standard finding template enforcing the five elements', t:'Preventive' },
    { c:'Reporting service-level standard with elapsed-days monitoring', t:'Detective' },
    { c:'Supervisory review of draft reports before issue', t:'Preventive' },
    { c:'Management response required before final issue, with owner and date', t:'Preventive' }
  ],
  procedures:[
    'Select a sample of reports issued in the period.',
    'For each finding, confirm the criterion is stated and cites a specific policy, standard or regulation.',
    'Assess whether cause is distinct from condition, not a restatement of it.',
    'Calculate elapsed days from fieldwork close to report issue and compare to the service standard.',
    'Confirm every recommendation carries a named owner and a target date.'
  ],
  testing:'For the sampled reports, score each finding against the five elements. Compute the proportion of findings that are complete. Independently recalculate elapsed reporting days from the fieldwork close date recorded in the working papers, rather than relying on the reported figure.',
  evidence:[
    'Issued engagement reports',
    'Working papers showing fieldwork completion dates',
    'Reporting service-level standard',
    'Supervisory review evidence on drafts',
    'Management response records'
  ],
  redFlags:[
    'Cause stated as "control not operating" — a restatement of condition',
    'Findings with no criterion reference',
    'Elapsed reporting time exceeding the standard on most engagements',
    'Recommendations with no named owner'
  ],
  findings:[
    'Root cause analysis was insufficient; cause frequently restated the condition',
    'Average elapsed time from fieldwork close to report issue was 47 days against a 20-day standard',
    'A minority of findings cited a specific criterion'
  ],
  causes:[
    'Finding template does not enforce separation of condition and cause',
    'Report drafting competes with the next engagement; no protected time allocated',
    'Reviewers focus on factual accuracy rather than finding structure'
  ],
  impacts:'Findings that do not identify true root cause produce remediation that fails, and the same issue reappears in later audits. Late reporting reduces the value of the work to management and the Board.',
  recommendations:[
    'Revise the finding template to require cause to be evidenced separately, with reviewer sign-off that cause is not a restatement of condition.',
    'Introduce a reporting service-level standard with monthly monitoring of elapsed days.',
    'Provide root cause analysis training, using the five-whys technique on real engagement findings.'
  ],
  references:[
    { t:'IIA Global Internal Audit Standards (2024) — Standard 11.2', u:'https://www.theiia.org/standards' }
  ],
  tags:['reporting','communication','findings','root cause','timeliness','domain iv']
},

/* ========== COSO ========== */
{
  id:'coso-p10', fw:'coso', ref:'Principle 10', title:'Selects and Develops Control Activities',
  domain:'Control Activities', tier:'ref',
  version:'2013', effective:'2013-05-15', updated:'2026-09-12',
  source:'Committee of Sponsoring Organizations of the Treadway Commission', url:'https://www.coso.org',
  summary:'The organisation selects and develops control activities that contribute to the mitigation of risks to acceptable levels.',
  requirement:'Control activities are selected and developed in response to identified risks, considering entity-specific factors, relevant business processes, a mix of control types, and appropriate segregation of duties.',
  focus:[
    'Whether each significant risk has at least one mapped control activity',
    'The mix of preventive and detective controls — not detective alone',
    'Segregation of duties across initiation, authorisation, recording and custody',
    'Whether controls are applied at the right level: transaction, process or entity'
  ],
  risks:[
    { r:'Risks identified but no control activity mapped', i:'High', d:'Risk accepted by default rather than by decision.' },
    { r:'Over-reliance on detective controls', i:'Medium', d:'Errors and fraud are found after loss has occurred rather than prevented.' },
    { r:'Segregation of duties not enforced in the system', i:'High', d:'One individual can initiate and approve the same transaction.' },
    { r:'Controls designed but not operating', i:'High', d:'Design assessment gives assurance the operating reality does not support.' }
  ],
  controls:[
    { c:'Risk and control matrix maintained, mapping each risk to specific controls', t:'Preventive' },
    { c:'System-enforced segregation of duties with conflict rules configured', t:'Preventive' },
    { c:'Periodic access review confirming SoD conflicts are absent or mitigated', t:'Detective' },
    { c:'Annual control self-assessment with independent validation', t:'Detective' },
    { c:'Change control over configuration of automated controls', t:'Preventive' }
  ],
  procedures:[
    'Obtain the risk and control matrix for the process under review.',
    'Confirm each risk rated significant has at least one mapped control.',
    'Classify mapped controls as preventive or detective and assess the balance.',
    'Extract the system SoD conflict report and review exceptions and their mitigations.',
    'For a sample of controls, test operating effectiveness, not design alone.',
    'Confirm that automated control configuration is subject to change control.'
  ],
  testing:'Select a sample of transactions across the period. For each, verify the preventive control operated at the time of processing — approval present, within authority limit, recorded by someone other than the approver. For automated controls, attempt a negative test: submit a transaction that should be rejected and confirm the system blocks it.',
  evidence:[
    'Risk and control matrix',
    'System configuration showing authority limits and SoD rules',
    'Access listing with role definitions',
    'SoD conflict report and documented mitigations',
    'Sampled transactions with approval evidence',
    'Change tickets for control configuration changes'
  ],
  redFlags:[
    'Risk and control matrix not updated after a process or system change',
    'Significant risks mapped only to detective controls',
    'SoD conflicts accepted with mitigation described as "management review"',
    'Authority limits in the system not matching the approved delegation policy',
    'Control owners unaware they own the control'
  ],
  findings:[
    'Significant risks in the payments process had no mapped preventive control',
    'Segregation of duties conflicts existed in the ERP with no documented mitigation',
    'System authority limits did not agree to the approved delegation of authority'
  ],
  causes:[
    'Risk and control matrix maintained by a central team without process owner input',
    'SoD ruleset configured at implementation and never revisited after role changes',
    'Delegation of authority updated in policy but not reflected in system configuration'
  ],
  impacts:'Unmitigated risk in a financially significant process. Where SoD conflicts exist without mitigation, a single individual can initiate and approve payments, creating direct fraud exposure.',
  recommendations:[
    'Require process owners to review and attest to the risk and control matrix annually.',
    'Reconfigure the ERP SoD ruleset and remediate conflicts; where conflicts must remain, document a specific compensating control with a named reviewer.',
    'Implement an automated reconciliation between the approved delegation of authority and system authority limits, run quarterly.'
  ],
  references:[
    { t:'COSO Internal Control — Integrated Framework (2013)', u:'https://www.coso.org/guidance-on-ic' }
  ],
  tags:['control activities','segregation of duties','sod','preventive','detective','rcm','authority limits']
},
{
  id:'coso-p8', fw:'coso', ref:'Principle 8', title:'Assesses Fraud Risk',
  domain:'Risk Assessment', tier:'ref',
  version:'2013', effective:'2013-05-15', updated:'2026-09-12',
  source:'Committee of Sponsoring Organizations of the Treadway Commission', url:'https://www.coso.org',
  summary:'The organisation considers the potential for fraud in assessing risks to the achievement of objectives.',
  requirement:'Fraud risk assessment considers fraudulent reporting, safeguarding of assets, corruption, management override of controls, and the incentives, pressures, opportunities and rationalisations that give rise to fraud.',
  focus:[
    'Whether a fraud risk assessment exists as a distinct exercise',
    'Coverage of management override — the risk most often omitted',
    'Whether the assessment considers incentive, opportunity and rationalisation together',
    'Linkage from identified fraud risks to specific anti-fraud controls'
  ],
  risks:[
    { r:'Management override of controls not assessed', i:'High', d:'The most common route to material fraud is unexamined.' },
    { r:'Fraud risk assessment merged into general risk assessment', i:'Medium', d:'Fraud-specific schemes and indicators are not systematically considered.' },
    { r:'Assessment not refreshed after significant business change', i:'Medium', d:'New fraud exposure from acquisitions or new payment channels is missed.' }
  ],
  controls:[
    { c:'Annual fraud risk assessment covering each major scheme type', t:'Preventive' },
    { c:'Anti-fraud control mapping linking each identified scheme to a control', t:'Preventive' },
    { c:'Journal entry testing focused on management override indicators', t:'Detective' },
    { c:'Confidential whistleblowing channel with independent triage', t:'Detective' },
    { c:'Mandatory leave and job rotation in high-risk roles', t:'Preventive' }
  ],
  procedures:[
    'Obtain the fraud risk assessment and confirm it is a distinct, documented exercise.',
    'Confirm coverage of fraudulent reporting, asset misappropriation, corruption and management override.',
    'For each identified scheme, trace to the anti-fraud control relied upon.',
    'Review whistleblowing reports for the period and confirm each was triaged and concluded.',
    'Test journal entries for override indicators: entries posted by senior finance staff, round-sum amounts, entries at period end, entries reversed shortly after posting.'
  ],
  testing:'Extract the full journal population for the period. Apply override filters: entries posted outside business hours, posted by users with approval authority, round-sum values above a threshold, and entries posted and reversed within five days. Investigate the resulting exceptions individually with supporting documentation.',
  evidence:[
    'Fraud risk assessment with preparer and approver',
    'Anti-fraud control mapping',
    'Whistleblowing log with triage and outcome',
    'Full journal entry extract for the period',
    'Mandatory leave compliance records'
  ],
  redFlags:[
    'Fraud risk assessment identical year on year despite business change',
    'Management override listed as a risk with "tone at the top" as the only control',
    'Whistleblowing reports closed with no documented investigation',
    'Senior finance staff posting journals directly to the general ledger',
    'Mandatory leave waived for individuals in high-risk roles'
  ],
  findings:[
    'The fraud risk assessment did not address management override of controls',
    'Whistleblowing reports were triaged by the line manager of the subject in two instances',
    'Mandatory leave was waived for the treasury manager in three consecutive years'
  ],
  causes:[
    'Fraud risk assessment delegated to the finance team, which is itself within the override risk population',
    'Whistleblowing procedure does not define escalation where the subject is the recipient\'s manager',
    'Mandatory leave policy permits waiver on operational grounds with no compensating control'
  ],
  impacts:'Management override is the mechanism in a large proportion of material frauds. Where it is unassessed and the whistleblowing channel is compromised by conflicted triage, the organisation lacks both preventive and detective coverage over its highest fraud exposure.',
  recommendations:[
    'Expand the fraud risk assessment to address management override explicitly, with the assessment owned outside the finance function.',
    'Amend the whistleblowing procedure to route reports away from any recipient in the subject\'s reporting line, with Audit Committee oversight of triage.',
    'Remove the operational waiver from the mandatory leave policy, or require a documented compensating control approved by the Audit Committee where waiver is unavoidable.'
  ],
  references:[
    { t:'COSO Internal Control — Integrated Framework (2013), Principle 8', u:'https://www.coso.org/guidance-on-ic' },
    { t:'COSO / ACFE Fraud Risk Management Guide (2023)', u:'https://www.coso.org' }
  ],
  tags:['fraud risk','management override','journal entries','whistleblowing','corruption','mandatory leave']
},

/* ========== FATF ========== */
{
  id:'fatf-r10', fw:'fatf', ref:'Recommendation 10', title:'Customer Due Diligence',
  domain:'Preventive Measures', tier:'open',
  version:'2025', effective:'2025-02-01', updated:'2026-09-18',
  source:'Financial Action Task Force', url:'https://www.fatf-gafi.org/recommendations',
  summary:'Financial institutions must identify and verify customer identity, identify beneficial owners, understand the purpose of the relationship, and conduct ongoing due diligence.',
  requirement:'Institutions are required to undertake customer due diligence when establishing business relations, carrying out occasional transactions above the applicable threshold, where money laundering or terrorist financing is suspected, or where doubt exists about previously obtained identification data. Anonymous accounts are prohibited.',
  focus:[
    'Identification and verification using reliable, independent source documents',
    'Beneficial ownership identification to the 25% threshold or lower where risk warrants',
    'Risk-based application — enhanced due diligence for higher-risk relationships',
    'Ongoing monitoring, with periodic refresh driven by risk rating',
    'Timing: verification before or during establishment of the relationship'
  ],
  risks:[
    { r:'Beneficial ownership not identified through layered structures', i:'High', d:'The true controller of the account is unknown; sanctions and PEP screening is ineffective.' },
    { r:'CDD refresh overdue on high-risk relationships', i:'High', d:'Customer risk profile is stale; changes in activity go unassessed.' },
    { r:'Verification documents accepted without independent corroboration', i:'Medium', d:'Forged or altered documents enter the customer file undetected.' },
    { r:'Enhanced due diligence not applied where risk rating requires it', i:'High', d:'Higher-risk customers receive standard treatment, contrary to the risk-based approach.' }
  ],
  controls:[
    { c:'System-enforced CDD completion before account activation', t:'Preventive' },
    { c:'Automated beneficial ownership capture with ownership percentage validation', t:'Preventive' },
    { c:'Risk-rating engine driving refresh frequency and EDD requirement', t:'Preventive' },
    { c:'Periodic CDD refresh monitoring with overdue exception reporting', t:'Detective' },
    { c:'Independent quality assurance sampling of completed CDD files', t:'Detective' },
    { c:'Sanctions and PEP screening at onboarding and on an ongoing basis', t:'Detective' }
  ],
  procedures:[
    'Select a risk-stratified sample of customer files across risk ratings.',
    'For each, confirm identity verification used reliable independent source documents.',
    'Trace beneficial ownership through the corporate structure to natural persons.',
    'Confirm the assigned risk rating agrees to the rating methodology inputs.',
    'Where the rating is high, confirm enhanced due diligence measures were applied and documented.',
    'Recalculate the CDD refresh due date from the rating and compare to the actual refresh date.',
    'Confirm sanctions and PEP screening occurred at onboarding and at the required ongoing frequency.'
  ],
  testing:'Extract the full customer population with risk ratings and last-refresh dates. Recompute refresh due dates independently from the methodology rather than relying on the system-calculated field, and quantify overdue cases by risk band. For the beneficial ownership test, select customers with corporate structures of three or more layers and trace ownership to natural persons using the source documents in the file.',
  evidence:[
    'Customer identification and verification documents',
    'Beneficial ownership declarations and corporate structure charts',
    'Risk rating calculation with input factors',
    'Enhanced due diligence documentation for high-risk relationships',
    'Sanctions and PEP screening logs with match disposition',
    'CDD refresh schedule and completion records'
  ],
  redFlags:[
    'Beneficial ownership recorded as the corporate shareholder rather than a natural person',
    'Ownership percentages summing to less than 100% with no explanation',
    'Customer risk rating downgraded shortly before a refresh became due',
    'Verification documents all issued by the same non-standard source',
    'High-risk customers with no enhanced due diligence on file',
    'Screening matches dismissed with no documented rationale',
    'Reluctance to provide ownership information or unusual delay in producing documents'
  ],
  findings:[
    'Beneficial ownership was not traced to natural persons in a significant proportion of corporate relationships sampled',
    'CDD refresh was overdue on high-risk relationships, in some cases by more than twelve months',
    'Enhanced due diligence was not evidenced for customers rated high risk'
  ],
  causes:[
    'Onboarding system accepts a corporate entity in the beneficial owner field without validation to a natural person',
    'Refresh scheduling driven by a static calendar rather than the customer risk rating',
    'No system control preventing activation of a high-risk relationship without EDD sign-off'
  ],
  impacts:'Failure to identify beneficial owners renders sanctions and PEP screening ineffective, since screening is performed against the wrong party. Overdue refresh on high-risk relationships is a direct regulatory breach commonly cited in enforcement action, with exposure to financial penalty and business restriction.',
  recommendations:[
    'Configure the onboarding system to reject beneficial owner entries that are not natural persons, and to validate that recorded ownership reconciles to 100%.',
    'Replace calendar-based refresh scheduling with risk-driven scheduling derived from the customer risk rating, with automated overdue escalation.',
    'Introduce a system control preventing activation of high-risk relationships until enhanced due diligence is signed off by the financial crime team.',
    'Establish independent quality assurance over completed CDD files with results reported to the financial crime committee.'
  ],
  references:[
    { t:'FATF Recommendation 10 — Customer Due Diligence', u:'https://www.fatf-gafi.org/recommendations' },
    { t:'FATF Guidance on Beneficial Ownership (Recommendation 24)', u:'https://www.fatf-gafi.org' }
  ],
  tags:['cdd','kyc','beneficial ownership','edd','aml','sanctions','pep','onboarding','risk rating']
},
{
  id:'fatf-r20', fw:'fatf', ref:'Recommendation 20', title:'Reporting of Suspicious Transactions',
  domain:'Reporting of Suspicious Transactions', tier:'open',
  version:'2025', effective:'2025-02-01', updated:'2026-09-18',
  source:'Financial Action Task Force', url:'https://www.fatf-gafi.org/recommendations',
  summary:'Where an institution suspects that funds are the proceeds of crime or related to terrorist financing, it must report promptly to the financial intelligence unit.',
  requirement:'Suspicion, or reasonable grounds to suspect, triggers a mandatory report to the national financial intelligence unit. The obligation applies regardless of transaction amount and includes attempted transactions.',
  focus:[
    'Timeliness between alert generation, internal escalation and external report',
    'Whether attempted transactions are reported, not only completed ones',
    'Quality of the suspicion narrative supporting the report',
    'Confidentiality — that the customer is not tipped off',
    'Whether closed alerts show evidence of genuine assessment'
  ],
  risks:[
    { r:'Suspicious activity identified but not reported', i:'High', d:'Direct regulatory breach with potential criminal liability for the institution and individuals.' },
    { r:'Reporting delayed beyond the statutory period', i:'High', d:'Funds dissipate before authorities can act; breach of the promptness requirement.' },
    { r:'Alert backlog causing untriaged activity', i:'High', d:'Suspicion is never formed because the alert is never reviewed.' },
    { r:'Tipping off through customer contact during investigation', i:'High', d:'Criminal offence in most jurisdictions; prejudices investigation.' }
  ],
  controls:[
    { c:'Automated transaction monitoring generating alerts against typologies', t:'Detective' },
    { c:'Defined internal escalation path with service-level timeframes', t:'Preventive' },
    { c:'MLRO review and decision documented for every escalated alert', t:'Detective' },
    { c:'Alert ageing report reviewed by the financial crime committee', t:'Detective' },
    { c:'Tipping-off training and system restriction on customer-facing notes', t:'Preventive' },
    { c:'Quality assurance over closed alerts to confirm assessment adequacy', t:'Detective' }
  ],
  procedures:[
    'Obtain the full alert population for the period with generation, escalation and decision dates.',
    'Compute elapsed days at each stage and compare against internal service standards and the statutory deadline.',
    'Select a sample of alerts closed without report and assess whether the rationale supports the conclusion.',
    'Select a sample of submitted reports and assess the quality of the suspicion narrative.',
    'Confirm attempted and declined transactions are within the monitoring population.',
    'Review the alert ageing report and confirm backlog escalation occurred where thresholds were breached.'
  ],
  testing:'Recalculate elapsed days independently from the raw alert data rather than relying on system dashboards, which may exclude reopened alerts. Stratify by alert typology to identify whether particular scenarios are systematically closed without report. For closed alerts, apply a blind re-review: assess a sample against the typology without reference to the original analyst conclusion, then compare outcomes.',
  evidence:[
    'Alert population extract with full date history',
    'MLRO decision records and rationale',
    'Submitted suspicious transaction reports with acknowledgements',
    'Internal escalation procedure with service standards',
    'Alert ageing reports and committee minutes',
    'Training records for tipping-off awareness'
  ],
  redFlags:[
    'Large proportion of alerts closed by a single analyst within minutes of assignment',
    'Closure rationale consisting of a single line or a standard phrase',
    'Alerts reopened and reclosed shortly before a reporting deadline',
    'Declined and attempted transactions absent from the monitoring population',
    'Customer notes referencing the investigation in a customer-visible field',
    'Alert backlog growing month on month with no escalation'
  ],
  findings:[
    'Elapsed time from alert generation to report submission exceeded the statutory period in a number of cases',
    'Attempted transactions declined at onboarding were not within the transaction monitoring population',
    'Alert closure rationale was insufficient to support the conclusion reached in a material proportion of the sample'
  ],
  causes:[
    'Alert volumes exceed analyst capacity; productivity measured on alerts closed rather than assessment quality',
    'Monitoring system configured on posted transactions only, excluding declines',
    'No quality assurance over closed alerts, so closure quality is unmeasured'
  ],
  impacts:'Failure to report promptly is among the most frequently penalised AML breaches. Excluding attempted transactions removes a category of activity that is often the strongest indicator of criminal intent, since the attempt itself signals the customer\'s purpose.',
  recommendations:[
    'Reconfigure transaction monitoring to include attempted and declined transactions within the alert population.',
    'Replace volume-based analyst performance measures with quality-weighted measures assessed through independent alert re-review.',
    'Implement quality assurance over a monthly sample of closed alerts, reporting results to the financial crime committee.',
    'Introduce automated escalation where any alert approaches the internal service threshold, with MLRO visibility of the ageing profile.'
  ],
  references:[
    { t:'FATF Recommendation 20 — Reporting of Suspicious Transactions', u:'https://www.fatf-gafi.org/recommendations' },
    { t:'FATF Guidance — Private Sector Information Sharing', u:'https://www.fatf-gafi.org' }
  ],
  tags:['str','sar','suspicious activity','mlro','transaction monitoring','tipping off','reporting','aml']
},

/* ========== ERM ========== */
{
  id:'erm-appetite', fw:'erm', ref:'ERM Principle 7', title:'Defines Risk Appetite',
  domain:'Strategy and Objective-Setting', tier:'ref',
  version:'2017', effective:'2017-09-06', updated:'2026-09-20',
  source:'COSO Enterprise Risk Management — Integrating with Strategy and Performance', url:'https://www.coso.org',
  summary:'The organisation defines risk appetite in the context of creating, preserving and realising value.',
  requirement:'Risk appetite is articulated in a form that can be applied in decision-making, communicated through the organisation, and monitored against actual risk-taking, with defined tolerances at the operating level.',
  focus:[
    'Whether appetite is expressed in measurable terms rather than narrative alone',
    'Cascade from board-level appetite to operational tolerances and limits',
    'Whether breaches are detected, escalated and resolved',
    'Linkage between appetite and the strategic objectives it supports',
    'Review frequency and trigger events for reassessment'
  ],
  risks:[
    { r:'Risk appetite stated only in qualitative terms', i:'High', d:'Cannot be monitored; provides no constraint on actual risk-taking.' },
    { r:'Appetite not cascaded to operational limits', i:'High', d:'Board-level statement has no effect on day-to-day decisions.' },
    { r:'Breaches identified but not escalated', i:'Medium', d:'Governance is nominal; the Board believes it is operating within appetite when it is not.' },
    { r:'Appetite unchanged through significant strategic change', i:'Medium', d:'Risk-taking capacity misaligned with the new strategy.' }
  ],
  controls:[
    { c:'Board-approved risk appetite statement with quantitative metrics per risk category', t:'Preventive' },
    { c:'Cascade to operating-level tolerances and system-enforced limits', t:'Preventive' },
    { c:'Monthly monitoring against appetite metrics with variance reporting', t:'Detective' },
    { c:'Defined breach escalation protocol with Board notification thresholds', t:'Corrective' },
    { c:'Annual appetite review with mandatory reassessment on strategic change', t:'Preventive' }
  ],
  procedures:[
    'Obtain the Board-approved risk appetite statement.',
    'Assess whether each risk category carries a measurable metric and threshold.',
    'Trace a sample of categories from board appetite through to operational limits and system configuration.',
    'Obtain appetite monitoring reports for the period and identify breaches.',
    'For each breach, trace escalation to the recorded governance forum and confirm resolution.',
    'Confirm the appetite statement was reviewed following any significant strategic change in the period.'
  ],
  testing:'Independently recalculate actual risk exposure against the stated appetite metric using source data rather than the monitoring report, for a sample of categories. Where the recalculated position differs from the reported position, investigate the basis of the difference. Confirm that system-enforced limits match the approved tolerances by direct inspection of the configuration.',
  evidence:[
    'Board-approved risk appetite statement with approval date',
    'Operational tolerance documentation and limit configuration',
    'Monthly appetite monitoring reports',
    'Breach log with escalation and resolution records',
    'Board and Risk Committee minutes',
    'Evidence of appetite review following strategic change'
  ],
  redFlags:[
    'Appetite expressed entirely as narrative with no measurable threshold',
    'Operational limits more permissive than the board-level appetite',
    'Zero breaches reported over an extended period in a volatile risk category',
    'Breaches resolved by revising the appetite rather than reducing exposure',
    'Appetite statement unchanged for several years through material strategic change'
  ],
  findings:[
    'Risk appetite was expressed qualitatively for several risk categories, preventing meaningful monitoring',
    'Operational limits in two business units exceeded the board-approved appetite',
    'Appetite breaches were recorded but not escalated to the Risk Committee'
  ],
  causes:[
    'Appetite statement developed as a governance document without input from those setting operational limits',
    'No reconciliation control between board appetite and system-configured limits',
    'Escalation protocol defines thresholds but assigns no owner for triggering escalation'
  ],
  impacts:'Where operational limits exceed board appetite, the organisation is taking risk the Board has not authorised. Unescalated breaches mean the Board\'s view of the risk position is inaccurate, undermining the basis on which strategic decisions are taken.',
  recommendations:[
    'Express appetite for every risk category in measurable terms with a defined threshold and tolerance range.',
    'Implement a reconciliation control confirming operational limits remain within board appetite, performed on each limit change and reviewed quarterly.',
    'Assign explicit ownership for breach escalation, with automated notification to the Risk Committee secretary on threshold breach.'
  ],
  references:[
    { t:'COSO ERM — Integrating with Strategy and Performance (2017)', u:'https://www.coso.org/guidance-erm' },
    { t:'ISO 31000:2018 Risk Management — Guidelines', u:'https://www.iso.org/standard/65694.html' }
  ],
  tags:['risk appetite','tolerance','erm','limits','governance','escalation','coso erm','iso 31000']
},
{
  id:'erm-portfolio', fw:'erm', ref:'ERM Principle 15', title:'Assesses Substantial Change',
  domain:'Review and Revision', tier:'ref',
  version:'2017', effective:'2017-09-06', updated:'2026-09-20',
  source:'COSO Enterprise Risk Management — Integrating with Strategy and Performance', url:'https://www.coso.org',
  summary:'The organisation identifies and assesses changes that may substantially affect strategy and business objectives.',
  requirement:'Changes in the internal and external environment that could substantially affect the risk profile are identified, assessed for their effect on strategy and objectives, and reflected in the risk portfolio view presented to the Board.',
  focus:[
    'Whether a defined trigger process exists for reassessment',
    'Coverage of both internal change (acquisition, system, restructure) and external change (regulatory, market, geopolitical)',
    'Speed of reassessment following a triggering event',
    'Whether the portfolio view aggregates risk rather than listing risks in isolation'
  ],
  risks:[
    { r:'Substantial change occurs without risk reassessment', i:'High', d:'Risk profile presented to the Board is out of date at the point of decision.' },
    { r:'Portfolio view presented as a risk list without aggregation', i:'Medium', d:'Correlated risks that would breach appetite in combination appear acceptable individually.' },
    { r:'Emerging risks identified but not integrated into the portfolio', i:'Medium', d:'Known future exposure is excluded from the risk position.' }
  ],
  controls:[
    { c:'Defined change triggers requiring risk reassessment within a set period', t:'Preventive' },
    { c:'Risk assessment as a mandatory gate in acquisition and major change approval', t:'Preventive' },
    { c:'Portfolio view aggregating risk across categories with correlation considered', t:'Detective' },
    { c:'Horizon scanning process feeding emerging risks into the portfolio', t:'Detective' },
    { c:'Quarterly Board reporting of portfolio movement with explanation of change', t:'Detective' }
  ],
  procedures:[
    'Identify significant internal and external changes during the period from Board minutes and announcements.',
    'For each, confirm a risk reassessment was performed and determine the elapsed time from the event.',
    'Obtain the risk portfolio view and assess whether it aggregates or merely lists.',
    'Confirm correlated risks are identified and their combined effect assessed against appetite.',
    'Review the emerging risk process and trace a sample of identified emerging risks into the portfolio.'
  ],
  testing:'Independently compile a list of substantial changes in the period from external sources — regulatory announcements, market events, company announcements — and compare against the changes the risk function actually assessed. Gaps in that comparison indicate weakness in the trigger process rather than in the assessment itself.',
  evidence:[
    'Change trigger procedure',
    'Risk reassessments performed in the period with dates',
    'Acquisition and major change approval papers showing the risk gate',
    'Risk portfolio view as presented to the Board',
    'Horizon scanning outputs and emerging risk register',
    'Board and Risk Committee minutes'
  ],
  redFlags:[
    'Major acquisition completed with no corresponding risk reassessment',
    'Portfolio view identical quarter on quarter despite material business change',
    'Emerging risk register maintained separately and never integrated',
    'Risk reassessment dated after the decision it was intended to inform',
    'Correlation between risks never discussed in committee minutes'
  ],
  findings:[
    'Substantial changes occurred without triggering risk reassessment within the defined period',
    'The risk portfolio view listed risks individually without assessing aggregate exposure against appetite',
    'Emerging risks were maintained in a separate register and not reflected in the portfolio view'
  ],
  causes:[
    'Change trigger procedure relies on self-notification by business units with no independent detection',
    'Portfolio reporting template designed as a register extract rather than an aggregation',
    'Emerging risk process owned by a different team with no defined handover into the main portfolio'
  ],
  impacts:'The Board takes strategic decisions on a risk picture that does not reflect current exposure. Where risks are correlated — for example concentration across a single counterparty, region and product — individual assessment within appetite can conceal aggregate exposure well beyond it.',
  recommendations:[
    'Supplement self-notification with independent detection of change triggers, drawing on Board minutes, regulatory feeds and market announcements.',
    'Redesign the portfolio view to present aggregate exposure by category against appetite, with explicit treatment of correlation.',
    'Integrate the emerging risk register into the portfolio view with a defined promotion process and criteria.'
  ],
  references:[
    { t:'COSO ERM — Integrating with Strategy and Performance (2017)', u:'https://www.coso.org/guidance-erm' }
  ],
  tags:['emerging risk','portfolio view','change','aggregation','correlation','horizon scanning','erm']
}

];

/* ------------------------------------------------------------
   PRACTICAL TOOLS
   ------------------------------------------------------------ */
const TOOLS = [
  { id:'programs',  name:'Audit Programs',     icon:'i-grid',   count:86,
    desc:'Ready-to-adapt engagement programmes organised by process, cycle and framework.',
    items:['Procure to Pay','Order to Cash','Payroll','Treasury and Cash Management','IT General Controls','Third-Party Risk','Revenue Recognition','Fixed Assets'] },
  { id:'rcm',       name:'Risk & Control Matrices', icon:'i-shield', count:1240,
    desc:'Risk statements mapped to controls, assertions, test steps and evidence requirements.',
    items:['Financial Reporting','Operational','Compliance','IT and Cyber','Fraud','Third Party','Strategic'] },
  { id:'redflags',  name:'Fraud Red Flags',    icon:'i-flag',   count:210,
    desc:'Indicators organised by scheme type, following the ACFE occupational fraud classification.',
    items:['Billing Schemes','Payroll Schemes','Expense Reimbursement','Cheque Tampering','Skimming','Cash Larceny','Corruption','Financial Statement Fraud'] },
  { id:'workpapers',name:'Working Papers',     icon:'i-doc',    count:64,
    desc:'Templates covering planning, fieldwork, evidence documentation and reporting.',
    items:['Planning Memorandum','Engagement Risk Assessment','Process Narrative','Walkthrough Template','Sample Selection','Finding Sheet','Management Response Log'] },
  { id:'checklists',name:'Checklists',         icon:'i-check',  count:73,
    desc:'Compliance and review checklists aligned to specific standards and frameworks.',
    items:['IIA Standards Conformance','COSO Component Assessment','AML Programme Review','ISO 27001 Annex A','SOX 404 Readiness'] },
  { id:'controls',  name:'Control Library',    icon:'i-layer',  count:420,
    desc:'Catalogued controls with type, frequency, owner and testing guidance.',
    items:['Preventive','Detective','Corrective','Automated','Manual','Entity Level','Transaction Level'] },
  { id:'industry',  name:'Industry Guidance',  icon:'i-bank',   count:48,
    desc:'Sector-specific audit considerations and regulatory expectations.',
    items:['Banking','Insurance','Public Sector','Healthcare','Energy','Telecommunications','Retail'] },
  { id:'cases',     name:'Case Studies',       icon:'i-users',  count:36,
    desc:'Anonymised audit scenarios with findings, root causes and outcomes.',
    items:['Procurement Fraud','Revenue Manipulation','Sanctions Breach','Cyber Incident','Third-Party Failure'] },
  { id:'templates', name:'Templates',          icon:'i-doc',    count:64,
    desc:'Report, memorandum and communication templates for the engagement lifecycle.',
    items:['Engagement Report','Audit Committee Paper','Management Letter','Follow-Up Report','Annual Audit Plan'] }
];

/* ------------------------------------------------------------
   LATEST UPDATES
   ------------------------------------------------------------ */
const UPDATES = [
  { d:'25', m:'Sep', t:'IIA Global Internal Audit Standards — implementation guidance released', s:'IIA · Effective 09 Jan 2025', sev:'n', fw:'iia' },
  { d:'18', m:'Sep', t:'FATF updates high-risk jurisdictions statement', s:'FATF · Open licence', sev:'a', fw:'fatf' },
  { d:'11', m:'Sep', t:'Basel Committee consults on operational resilience', s:'BIS · Consultation', sev:'r', fw:'basel' },
  { d:'02', m:'Sep', t:'INTOSAI ISSAI 3000 performance audit guidance refreshed', s:'INTOSAI · Open licence', sev:'r', fw:'intosai' },
  { d:'28', m:'Aug', t:'IFRS 18 presentation and disclosure — transition notes added', s:'IFRS Foundation · Eff. 01 Jan 2027', sev:'n', fw:'ifrs' },
  { d:'20', m:'Aug', t:'COSO ERM risk appetite guidance — worked examples added', s:'COSO · Reference', sev:'n', fw:'erm' }
];

/* ------------------------------------------------------------
   AI ASSISTANT — canned retrievals for the demo.
   Week 2: replaced by vector retrieval over RECORDS.
   Each answer cites record ids that genuinely exist above.
   ------------------------------------------------------------ */
const AI_CANNED = [
  { q:['vendor','master','fraud','supplier','payment'],
    a:[['Key controls.','Segregation of duties between vendor creation and payment approval; independent verification of bank-detail changes through call-back to a previously recorded number; periodic duplicate and dormant-vendor reporting; and mandatory documented approval for every master-file amendment.'],
       ['Red flags to test for.','Vendor bank details matching employee records, PO-box-only addresses, vendors created and paid within the same day, and sequential invoice numbering from a single supplier.'],
       ['Suggested testing.','Extract the vendor master and match bank details against the payroll file. Investigate every match individually — this test frequently produces the single strongest fraud indicator in a payments audit.']],
    cites:['coso-p10','coso-p8'] },

  { q:['beneficial','ownership','cdd','kyc','customer due diligence','onboarding'],
    a:[['Requirement.','Customer due diligence requires identification and verification of the customer, identification of beneficial owners to the applicable threshold, understanding the purpose of the relationship, and ongoing monitoring proportionate to risk.'],
       ['Where audits commonly find failure.','Beneficial ownership recorded as a corporate shareholder rather than traced to a natural person; refresh scheduling driven by calendar rather than risk rating; and enhanced due diligence not evidenced for customers rated high risk.'],
       ['Suggested testing.','Select customers with corporate structures of three or more layers and trace ownership to natural persons from the source documents. Recompute refresh due dates independently from the methodology rather than relying on the system field.']],
    cites:['fatf-r10'] },

  { q:['management override','override','journal','fraud risk assessment'],
    a:[['Why it matters.','Management override is the mechanism in a large proportion of material frauds, and is the fraud risk most often omitted from the assessment — because the assessment is frequently prepared by the function within the override risk population.'],
       ['Controls to look for.','A fraud risk assessment owned outside finance that addresses override explicitly; journal entry testing targeted at override indicators; a whistleblowing channel with triage independent of the subject\'s reporting line; and mandatory leave in high-risk roles.'],
       ['Suggested testing.','Extract the full journal population and filter for entries posted outside business hours, posted by users holding approval authority, round-sum values above a threshold, and entries posted then reversed within five days.']],
    cites:['coso-p8','iia-13-3'] },

  { q:['risk appetite','appetite','tolerance','limits'],
    a:[['Requirement.','Risk appetite must be expressed so that it can actually be applied in decision-making — measurable metrics per risk category, cascaded to operational tolerances, and monitored against actual exposure.'],
       ['Common weaknesses.','Appetite stated only in narrative terms; operational limits more permissive than board-level appetite; and breaches recorded but never escalated — so the Board believes it is operating within appetite when it is not.'],
       ['Suggested testing.','Recalculate actual exposure from source data rather than the monitoring report, and inspect system limit configuration directly to confirm it matches approved tolerances.']],
    cites:['erm-appetite','erm-portfolio'] },

  { q:['suspicious','str','sar','transaction monitoring','mlro','alert'],
    a:[['Requirement.','Suspicion, or reasonable grounds to suspect, triggers a mandatory report to the financial intelligence unit — regardless of amount, and including attempted transactions.'],
       ['Where audits commonly find failure.','Attempted and declined transactions excluded from the monitoring population; alert closure rationale insufficient to support the conclusion; and analyst performance measured on alerts closed rather than assessment quality.'],
       ['Suggested testing.','Recalculate elapsed days from raw alert data rather than dashboards, which may exclude reopened alerts. Apply a blind re-review to a sample of closed alerts and compare outcomes against the original analyst conclusion.']],
    cites:['fatf-r20'] },

  { q:['root cause','finding','observation','report','condition','criteria'],
    a:[['The five elements.','A complete finding states criteria (what should be), condition (what is), cause (why), effect (the impact), and recommendation (what to do). Cause must be distinct from condition — "the control did not operate" restates the condition rather than explaining it.'],
       ['Common weakness.','Root cause analysis that stops at the symptom produces remediation that fails, and the same issue reappears in the following audit.'],
       ['Suggested approach.','Apply five-whys to the condition until the answer names a process, system or accountability defect that can actually be changed. Require the reviewer to confirm the cause is not a restatement before the finding is issued.']],
    cites:['iia-11-2'] },

  { q:['segregation','sod','duties','conflict','access'],
    a:[['Requirement.','Control activities include segregation of duties across initiation, authorisation, recording and custody, so that no individual controls a transaction end to end.'],
       ['Where audits commonly find failure.','SoD rulesets configured at system implementation and never revisited through subsequent role changes; conflicts accepted with "management review" described as the mitigation without evidence it operates; and system authority limits that no longer agree to the approved delegation of authority.'],
       ['Suggested testing.','Extract the SoD conflict report and review each exception and its mitigation. Perform a negative test on automated controls: submit a transaction that should be rejected and confirm the system blocks it.']],
    cites:['coso-p10'] }
];
