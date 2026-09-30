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
    updated:'2026-09-25', count:3, populated:true, status:'Current',
    blurb:'The global professional standards for the practice of internal auditing, restructured in 2024 into five domains and fifteen principles.' },

  { id:'coso',   abbr:'COSO',   name:'Internal Control — Integrated Framework', body:'Committee of Sponsoring Organizations',
    cert:'', colour:'#2E7350', tier:'ref',  url:'https://www.coso.org', version:'2013', effective:'2013-05-15',
    updated:'2026-09-12', count:2, populated:true, status:'Current',
    blurb:'Five components and seventeen principles defining effective internal control over operations, reporting and compliance.' },

  { id:'fatf',   abbr:'FATF',   name:'FATF 40 Recommendations', body:'Financial Action Task Force',
    cert:'', colour:'#A8761C', tier:'open', url:'https://www.fatf-gafi.org', version:'2025', effective:'2025-02-01',
    updated:'2026-09-18', count:2, populated:true, status:'Current',
    blurb:'The international standard for combating money laundering, terrorist financing and proliferation financing.' },

  { id:'isaca',  abbr:'ISACA',  name:'IS Audit and Assurance Standards', body:'ISACA',
    cert:'CISA', colour:'#1B5E8C', tier:'ref',  url:'https://www.isaca.org', version:'2023', effective:'2023-01-01',
    updated:'2026-08-30', count:2, populated:true, status:'Current',
    blurb:'Mandatory standards and guidelines for information systems audit and assurance engagements.' },

  { id:'acfe',   abbr:'ACFE',   name:'Fraud Examiners Manual & Fraud Tree', body:'Association of Certified Fraud Examiners',
    cert:'CFE', colour:'#9A3B2E', tier:'ref',  url:'https://www.acfe.com', version:'2024', effective:'2024-01-01',
    updated:'2026-09-05', count:2, populated:true, status:'Current',
    blurb:'Occupational fraud classification, detection methods and investigation procedures.' },

  { id:'acams',  abbr:'ACAMS',  name:'AML / Financial Crime Standards', body:'ACAMS',
    cert:'CAMS', colour:'#B08D1E', tier:'ref',  url:'https://www.acams.org', version:'2024', effective:'2024-06-01',
    updated:'2026-09-14', count:2, populated:true, status:'Current',
    blurb:'Anti-money-laundering programme design, customer due diligence and sanctions compliance.' },

  { id:'ifrs',   abbr:'IFRS',   name:'IFRS Accounting Standards', body:'IFRS Foundation / IASB',
    cert:'', colour:'#6B3F94', tier:'ref',  url:'https://www.ifrs.org', version:'2026', effective:'2026-01-01',
    updated:'2026-08-28', count:2, populated:true, status:'Current',
    blurb:'International financial reporting standards governing recognition, measurement, presentation and disclosure.' },

  { id:'pmi',    abbr:'PMI',    name:'PMBOK Guide & Project Standards', body:'Project Management Institute',
    cert:'PMP', colour:'#0E6E8C', tier:'ref',  url:'https://www.pmi.org', version:'7th Ed', effective:'2021-08-01',
    updated:'2026-07-19', count:2, populated:true, status:'Current',
    blurb:'Project management principles, performance domains and delivery practices relevant to project assurance.' },

  { id:'iso',    abbr:'ISO',    name:'ISO Management System Standards', body:'International Organization for Standardization',
    cert:'', colour:'#0E8C7A', tier:'ref',  url:'https://www.iso.org', version:'various', effective:'2018-02-01',
    updated:'2026-09-01', count:2, populated:true, status:'Current',
    blurb:'ISO 31000 risk management, ISO 27001 information security and related management system standards.' },

  { id:'intosai',abbr:'INTOSAI',name:'ISSAI — Public Sector Auditing', body:'INTOSAI',
    cert:'', colour:'#8C5A1B', tier:'open', url:'https://www.issai.org', version:'2019', effective:'2019-01-01',
    updated:'2026-09-02', count:2, populated:true, status:'Current',
    blurb:'International standards for supreme audit institutions covering financial, compliance and performance auditing.' },

  { id:'basel',  abbr:'BIS',    name:'Basel Committee Standards', body:'Bank for International Settlements',
    cert:'', colour:'#4A5A8C', tier:'open', url:'https://www.bis.org', version:'2021', effective:'2021-03-31',
    updated:'2026-09-11', count:2, populated:true, status:'Current',
    blurb:'Banking supervision principles including operational resilience, risk data aggregation and internal audit expectations.' },

  { id:'erm',    abbr:'ERM',    name:'Enterprise Risk Management', body:'COSO ERM / ISO 31000',
    cert:'', colour:'#7A3E8C', tier:'ref',  url:'https://www.coso.org', version:'2017', effective:'2017-09-06',
    updated:'2026-09-20', count:2, populated:true, status:'Current',
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

,
/* ========== ISACA ========== */
{
  id:'isaca-1201', fw:'isaca', ref:'Standard 1201', title:'Engagement Planning',
  domain:'Performance Standards', tier:'ref',
  version:'2023', effective:'2023-01-01', updated:'2026-08-30',
  source:'ISACA', url:'https://www.isaca.org/resources/standards-and-guidelines',
  summary:'IS audit and assurance professionals must plan each engagement to address objectives, scope, timeline and deliverables, in compliance with applicable laws and professional standards.',
  requirement:'The engagement is planned so that objectives, scope, timeline and deliverables are documented and agreed; the plan reflects a risk assessment of the technology environment and complies with applicable laws, regulations and professional auditing standards.',
  focus:[
    'Whether the plan reflects a documented assessment of technology risk rather than a repeat of the prior year',
    'Coverage of the full technology estate including cloud services and third-party hosted systems',
    'Whether data reliability was considered before analytics were relied upon',
    'Agreement of scope and deliverables with the auditee before fieldwork begins'
  ],
  risks:[
    { r:'Scope omits cloud or third-party hosted systems', i:'High', d:'Material parts of the technology estate receive no assurance while the report implies full coverage.' },
    { r:'Plan copied forward from the prior year', i:'Medium', d:'New systems, migrations and architecture changes since the last audit are never examined.' },
    { r:'Analytics performed on data of unverified completeness', i:'High', d:'Conclusions rest on an extract that may omit transactions, producing false assurance.' }
  ],
  controls:[
    { c:'Documented IS risk assessment approved before the engagement programme is finalised', t:'Preventive' },
    { c:'Technology asset inventory reconciled to the audit universe annually', t:'Detective' },
    { c:'Data completeness and integrity validation performed before analytics are relied upon', t:'Preventive' },
    { c:'Scope and deliverables formally agreed with the auditee and retained in the file', t:'Preventive' }
  ],
  procedures:[
    'Obtain the engagement plan and the supporting IS risk assessment.',
    'Compare the audit universe against the technology asset inventory and identify systems excluded from scope.',
    'For each excluded system, obtain and evaluate the documented rationale.',
    'Confirm cloud and third-party hosted services were considered, including the division of control responsibility.',
    'Where data analytics were used, verify that record counts and control totals were reconciled to the source system.',
    'Confirm scope agreement with the auditee is evidenced and dated before fieldwork commenced.'
  ],
  testing:'Reconcile the audit universe to an independently obtained asset inventory — the configuration management database or the cloud provider console — rather than to the list supplied by IT. Systems present in the independent source but absent from the audit universe indicate a scoping gap that the engagement plan itself would not reveal.',
  evidence:[
    'Engagement plan with approval and date',
    'IS risk assessment supporting the plan',
    'Technology asset inventory or configuration management extract',
    'Scope agreement correspondence with the auditee',
    'Data reconciliation working papers for any analytics performed'
  ],
  redFlags:[
    'Audit universe unchanged despite a major system implementation in the period',
    'Cloud services absent from the asset inventory entirely',
    'Analytics working papers with no record count reconciliation',
    'Scope agreement dated after fieldwork began'
  ],
  findings:[
    'The audit universe omitted cloud-hosted applications introduced during the period',
    'Engagement planning did not evidence a current technology risk assessment',
    'Data used for analytics was not reconciled to the source system before reliance'
  ],
  causes:[
    'Asset inventory maintained by IT operations with no reconciliation to the audit universe',
    'Planning template treats risk assessment as a carried-forward document',
    'No defined data validation step in the analytics methodology'
  ],
  impacts:'Assurance reported to the Audit Committee covers less of the technology estate than the report implies. Where analytics rest on incomplete data, conclusions about control operation may be wrong in a direction that understates exposure.',
  recommendations:[
    'Reconcile the audit universe to an independently sourced asset inventory at least annually, with exclusions documented and approved.',
    'Require the engagement plan to reference a risk assessment dated within the current planning cycle.',
    'Add a mandatory data validation step — record counts and control totals reconciled to source — before any analytic result is relied upon.'
  ],
  references:[
    { t:'ISACA IS Audit and Assurance Standards — Standard 1201', u:'https://www.isaca.org/resources/standards-and-guidelines' },
    { t:'ISACA IT Audit Framework (ITAF)', u:'https://www.isaca.org/resources/itaf' }
  ],
  tags:['engagement planning','is audit','scope','cloud','audit universe','data analytics','itaf','cisa']
},
{
  id:'isaca-1207', fw:'isaca', ref:'Standard 1207', title:'Irregularity and Illegal Acts',
  domain:'Performance Standards', tier:'ref',
  version:'2023', effective:'2023-01-01', updated:'2026-08-30',
  source:'ISACA', url:'https://www.isaca.org/resources/standards-and-guidelines',
  summary:'IS audit professionals must consider the risk of irregularities and illegal acts during the engagement and communicate identified matters to appropriate parties on a timely basis.',
  requirement:'The professional maintains professional scepticism, assesses the risk that irregularities or illegal acts could occur in the area under review, designs procedures responsive to that risk, and communicates suspected matters promptly to management or those charged with governance as appropriate.',
  focus:[
    'Whether irregularity risk was assessed specifically rather than assumed absent',
    'Privileged access and its potential to conceal unauthorised activity',
    'Adequacy and integrity of system logging over sensitive functions',
    'Whether the communication route bypasses any individual who may be implicated'
  ],
  risks:[
    { r:'Privileged users can alter or delete logs of their own activity', i:'High', d:'Unauthorised changes leave no reliable trace and cannot be investigated after the fact.' },
    { r:'Suspected irregularity reported to a manager within the affected area', i:'High', d:'Investigation may be suppressed or evidence lost before an independent party is informed.' },
    { r:'Logging disabled or not retained for sensitive transactions', i:'High', d:'No basis exists to establish who performed an action or when.' }
  ],
  controls:[
    { c:'Privileged access logged to a separate system that privileged users cannot modify', t:'Preventive' },
    { c:'Log retention policy aligned to investigation and regulatory requirements', t:'Preventive' },
    { c:'Independent periodic review of privileged activity by a party outside IT', t:'Detective' },
    { c:'Escalation protocol routing suspected irregularity away from the affected area', t:'Corrective' },
    { c:'Segregation between those who administer systems and those who review logs', t:'Preventive' }
  ],
  procedures:[
    'Obtain the listing of accounts holding privileged or administrative access.',
    'Confirm whether privileged activity is written to a log store outside the administrators\' control.',
    'Attempt, with authorisation, to modify or delete a log entry using a privileged account and confirm the attempt is prevented and itself logged.',
    'Verify log retention against policy and against the period required for investigation.',
    'Review evidence of independent privileged activity review, including exceptions raised and their resolution.',
    'Confirm the irregularity escalation protocol exists and identifies a route independent of line management.'
  ],
  testing:'Perform a controlled negative test: using an authorised privileged account, attempt to clear or alter the audit log and confirm the action is blocked and separately recorded. A logging arrangement that cannot survive this test provides no evidential value in an investigation, regardless of how comprehensive the log content appears.',
  evidence:[
    'Privileged account listing with business justification',
    'Log architecture documentation showing separation of the log store',
    'Results of the controlled log modification attempt',
    'Log retention policy and configuration evidence',
    'Independent privileged activity review records',
    'Irregularity escalation protocol'
  ],
  redFlags:[
    'Administrators able to clear audit logs',
    'Log retention shorter than the regulatory investigation window',
    'Privileged accounts shared between individuals',
    'Privileged activity review performed by the administrators themselves',
    'Gaps in log sequence with no explanation'
  ],
  findings:[
    'System administrators had the ability to modify audit logs recording their own activity',
    'Log retention was configured below the period required for regulatory investigation',
    'Review of privileged activity was performed within the IT function rather than independently'
  ],
  causes:[
    'Logging configured at implementation for troubleshooting rather than for evidential integrity',
    'Retention set by storage cost rather than by investigation or regulatory requirement',
    'No party outside IT holds the skills or mandate to review privileged activity'
  ],
  impacts:'Where privileged users can alter their own audit trail, the organisation cannot establish what occurred during a suspected irregularity. This undermines any subsequent investigation, disciplinary action or regulatory response, and may itself constitute a control failure reportable to the regulator.',
  recommendations:[
    'Forward privileged activity logs to a separate store that administrators cannot modify, and alert on any attempted modification.',
    'Reset log retention to the longest of the regulatory, legal and investigation requirements rather than to available storage.',
    'Assign independent review of privileged activity to a function outside IT, with exceptions reported to the Audit Committee.'
  ],
  references:[
    { t:'ISACA IS Audit and Assurance Standards — Standard 1207', u:'https://www.isaca.org/resources/standards-and-guidelines' },
    { t:'ISACA IT Audit Framework (ITAF)', u:'https://www.isaca.org/resources/itaf' }
  ],
  tags:['irregularity','illegal acts','privileged access','logging','audit trail','escalation','forensics','cisa']
},

/* ========== ACFE ========== */
{
  id:'acfe-billing', fw:'acfe', ref:'Fraud Tree — Billing Schemes', title:'Billing Schemes and Fictitious Vendors',
  domain:'Asset Misappropriation — Fraudulent Disbursements', tier:'ref',
  version:'2024', effective:'2024-01-01', updated:'2026-09-05',
  source:'Association of Certified Fraud Examiners', url:'https://www.acfe.com/fraud-resources',
  summary:'Billing schemes cause an organisation to issue payment by submitting invoices for goods or services that are fictitious, inflated, or personal in nature.',
  requirement:'Controls over the vendor master file, purchase approval and payment authorisation should prevent a single individual from creating a payee and causing payment to be made to it, and should detect invoices lacking a genuine underlying transaction.',
  focus:[
    'Ability of one individual to both create a vendor and approve payment to it',
    'Verification applied to bank detail changes on existing vendors',
    'Vendors whose details correspond to employee records',
    'Invoices just below an approval threshold',
    'Vendors receiving payment with no purchase order or receipt of goods'
  ],
  risks:[
    { r:'Fictitious vendor created and paid by the same individual', i:'High', d:'Funds leave the organisation with no underlying goods or services received.' },
    { r:'Bank details of a genuine vendor changed to a fraudulent account', i:'High', d:'Legitimate invoices are paid to a criminal, often undetected until the real vendor chases payment.' },
    { r:'Invoices split to stay below approval thresholds', i:'Medium', d:'Expenditure avoids the scrutiny the delegation of authority was designed to apply.' },
    { r:'Personal purchases submitted as business expenditure', i:'Medium', d:'Recurring low-value loss that rarely triggers exception reporting.' }
  ],
  controls:[
    { c:'Segregation of duties between vendor master maintenance and payment approval', t:'Preventive' },
    { c:'Independent call-back verification of bank detail changes using previously held contact details', t:'Preventive' },
    { c:'Three-way match of purchase order, goods receipt and invoice before payment', t:'Preventive' },
    { c:'Periodic vendor-to-payroll matching on bank account, address and tax identifier', t:'Detective' },
    { c:'Duplicate and near-duplicate invoice detection', t:'Detective' },
    { c:'Review of expenditure clustered immediately below approval thresholds', t:'Detective' },
    { c:'Dormant vendor deactivation after a defined period of inactivity', t:'Preventive' }
  ],
  procedures:[
    'Extract the vendor master file and match bank account numbers against the payroll file.',
    'Identify vendors sharing an address, bank account or tax identifier with an employee.',
    'Identify vendors created and paid within a short interval, and vendors created outside business hours.',
    'Analyse invoice values for clustering immediately below each approval threshold.',
    'Select payments made without a purchase order and obtain supporting evidence of receipt.',
    'For a sample of bank detail changes, confirm independent call-back verification was performed and documented.',
    'Confirm vendors dormant beyond the policy period were deactivated.'
  ],
  testing:'The vendor-to-payroll bank account match is the single highest-yield test in a payments audit and should be run over the full population rather than a sample. Follow it with a Benford analysis of invoice first digits and a threshold-proximity analysis: a genuine expenditure profile does not cluster tightly beneath approval limits, so clustering identifies where to examine documentation.',
  evidence:[
    'Vendor master file extract with creation dates and creating user',
    'Payroll file extract for matching',
    'Bank detail change log with verification evidence',
    'Purchase orders, goods receipts and invoices for sampled payments',
    'Approval delegation policy with current thresholds',
    'Dormant vendor report and deactivation evidence'
  ],
  redFlags:[
    'Vendor bank details matching an employee bank account',
    'Vendor address matching an employee address or a PO box only',
    'Vendor created and paid on the same day',
    'Sequential invoice numbers from a single supplier, suggesting you are its only customer',
    'Invoices consistently just below an approval threshold',
    'Vendor with no purchase orders but regular payments',
    'Photocopied or altered invoices',
    'Vendor contact details matching an employee telephone number'
  ],
  findings:[
    'Vendor creation and payment approval were not segregated in the ERP',
    'Bank detail changes were processed on emailed instruction without independent verification',
    'Vendors sharing bank account details with employees were present in the master file'
  ],
  causes:[
    'Role design at ERP implementation granted combined vendor maintenance and payment authority to the finance team',
    'No defined procedure for verifying bank detail changes; practice relied on the requester appearing legitimate',
    'No periodic matching of vendor data against payroll'
  ],
  impacts:'Direct and often unrecovered financial loss. ACFE research consistently finds billing schemes among the most common and most costly occupational fraud categories, with long median duration before detection because each individual payment appears routine.',
  recommendations:[
    'Reconfigure ERP roles so no user can both maintain the vendor master and approve payment.',
    'Require documented call-back verification to a previously held telephone number for every bank detail change, with the verification retained.',
    'Implement quarterly automated vendor-to-payroll matching on bank account, address and tax identifier, with all matches investigated.',
    'Introduce threshold-proximity reporting to identify and review expenditure clustered below approval limits.'
  ],
  references:[
    { t:'ACFE Occupational Fraud Classification (Fraud Tree)', u:'https://www.acfe.com/fraud-resources/fraud-101-what-is-fraud' },
    { t:'ACFE Report to the Nations', u:'https://www.acfe.com/report-to-the-nations' }
  ],
  tags:['billing schemes','fictitious vendor','fraud tree','vendor master','bank detail change','duplicate payment','split transaction','procurement fraud','cfe']
},
{
  id:'acfe-payroll', fw:'acfe', ref:'Fraud Tree — Payroll Schemes', title:'Payroll Schemes and Ghost Employees',
  domain:'Asset Misappropriation — Fraudulent Disbursements', tier:'ref',
  version:'2024', effective:'2024-01-01', updated:'2026-09-05',
  source:'Association of Certified Fraud Examiners', url:'https://www.acfe.com/fraud-resources',
  summary:'Payroll schemes cause an organisation to issue payment on the basis of false claims for compensation, including ghost employees, overstated hours, and unauthorised allowances.',
  requirement:'Controls over starters, leavers, payroll changes and time recording should ensure payment is made only to genuine employees, for hours actually worked, at authorised rates, with independent verification between the human resources record and the payroll master.',
  focus:[
    'Reconciliation between the HR employee record and the payroll master file',
    'Timeliness of leaver removal from payroll',
    'Approval and independent review of overtime and allowance claims',
    'Employees sharing a bank account',
    'Payroll changes made by individuals who also process payment'
  ],
  risks:[
    { r:'Ghost employee maintained on payroll after a leaver is not removed', i:'High', d:'Salary continues to be paid, often to an account controlled by the person who failed to process the termination.' },
    { r:'Overtime claimed but not worked', i:'Medium', d:'Recurring inflation of payroll cost that appears within normal variance.' },
    { r:'Payroll master changed without independent approval', i:'High', d:'Rates, bank details or allowances altered without any second person examining the change.' },
    { r:'Multiple employees paid to one bank account', i:'High', d:'Strong indicator of a ghost employee or diverted salary.' }
  ],
  controls:[
    { c:'Automated reconciliation between the HR system and the payroll master each cycle', t:'Detective' },
    { c:'Leaver notification workflow triggering payroll removal within a defined period', t:'Preventive' },
    { c:'Segregation between payroll master maintenance and payment processing', t:'Preventive' },
    { c:'Independent approval of overtime against authorised rosters or system access logs', t:'Preventive' },
    { c:'Duplicate bank account detection across the employee population', t:'Detective' },
    { c:'Periodic management confirmation of staff in each cost centre', t:'Detective' }
  ],
  procedures:[
    'Reconcile the payroll master to the HR employee record and investigate every difference in both directions.',
    'Identify employees on payroll with a termination date recorded in HR.',
    'Identify bank accounts receiving payment for more than one employee.',
    'Identify employees with no tax identifier, no leave taken, or no system login activity in the period.',
    'Analyse overtime by individual and by department, and test high claimants against building access or system logs.',
    'Review payroll master changes and confirm each carries independent approval.',
    'Obtain management confirmation of employee listings by cost centre and follow up unconfirmed names.'
  ],
  testing:'Run the full payroll population rather than a sample for the structural tests: duplicate bank accounts, employees absent from HR, and terminated employees still paid. For overtime, corroborate a sample of claims against an independent record of presence — building access, VPN or system authentication logs — rather than against the supervisor approval, since the supervisor may be the approver of a false claim.',
  evidence:[
    'Payroll master file and HR employee record for the same date',
    'Leaver notifications with dates and payroll removal evidence',
    'Overtime claims with approval and supporting rosters',
    'Building access or system authentication logs for corroboration',
    'Payroll change log with approver identity',
    'Management confirmations of cost centre headcount'
  ],
  redFlags:[
    'Employee on payroll with no corresponding HR record',
    'Two or more employees paid into the same bank account',
    'Employee who has never taken leave',
    'Employee with no system login or building access activity',
    'Overtime concentrated in one individual or approved by a single supervisor',
    'Terminated employee still receiving payment',
    'Payroll changes made outside business hours',
    'Employee address matching that of a payroll administrator'
  ],
  findings:[
    'Terminated employees remained on the payroll master beyond the policy removal period',
    'Multiple employees were paid into a single bank account with no documented explanation',
    'Overtime was approved without reference to any independent record of attendance'
  ],
  causes:[
    'Leaver process depends on manual notification from line managers with no reconciliation to catch omissions',
    'Payroll system permits duplicate bank details with no warning or exception report',
    'Overtime approval delegated to supervisors with no independent corroboration step'
  ],
  impacts:'Continuing payments to ghost employees represent direct loss which typically persists for long periods because payroll totals remain within expected variance. Where the same individual controls both the termination process and the payroll master, the scheme can continue indefinitely without a reconciliation control.',
  recommendations:[
    'Implement automated HR-to-payroll reconciliation each pay cycle with mandatory investigation of all differences.',
    'Configure the payroll system to flag and block duplicate bank account details pending documented approval.',
    'Require overtime above a defined threshold to be corroborated against building access or system authentication records before payment.',
    'Introduce annual management confirmation of employees by cost centre, with unconfirmed names suspended pending verification.'
  ],
  references:[
    { t:'ACFE Occupational Fraud Classification (Fraud Tree)', u:'https://www.acfe.com/fraud-resources/fraud-101-what-is-fraud' },
    { t:'ACFE Report to the Nations', u:'https://www.acfe.com/report-to-the-nations' }
  ],
  tags:['payroll fraud','ghost employee','overtime','leaver','duplicate bank account','allowance abuse','fraud tree','cfe']
},

/* ========== ACAMS / AML ========== */
{
  id:'acams-edd', fw:'acams', ref:'AML Programme — Enhanced Due Diligence', title:'Enhanced Due Diligence for High-Risk Relationships',
  domain:'Customer Due Diligence', tier:'ref',
  version:'2024', effective:'2024-06-01', updated:'2026-09-14',
  source:'ACAMS', url:'https://www.acams.org',
  summary:'Relationships assessed as higher risk require enhanced due diligence measures beyond standard customer due diligence, applied before the relationship is established and refreshed more frequently thereafter.',
  requirement:'Where a customer, product, channel or jurisdiction presents higher money laundering or terrorist financing risk, the institution applies additional measures: establishing source of wealth and source of funds, obtaining senior management approval, and conducting enhanced ongoing monitoring.',
  focus:[
    'Whether the risk rating methodology produces ratings that are actually acted upon',
    'Source of wealth evidenced rather than merely stated by the customer',
    'Senior management approval obtained before the relationship becomes active',
    'Enhanced monitoring applied in practice, not just recorded as a requirement',
    'Treatment of politically exposed persons and their close associates'
  ],
  risks:[
    { r:'High-risk relationship activated without enhanced due diligence', i:'High', d:'Regulatory breach; the institution holds a relationship it has not adequately understood.' },
    { r:'Source of wealth recorded from customer statement without corroboration', i:'High', d:'The control provides no assurance; illicit wealth passes documented review.' },
    { r:'PEP status not identified at onboarding', i:'High', d:'Relationship proceeds without the approval and monitoring the risk requires.' },
    { r:'Enhanced monitoring designated but not configured in the monitoring system', i:'Medium', d:'The file records a control that does not operate.' }
  ],
  controls:[
    { c:'System block preventing activation of a high-risk relationship without EDD sign-off', t:'Preventive' },
    { c:'Source of wealth corroboration against independent documentary evidence', t:'Preventive' },
    { c:'Senior management approval recorded before activation', t:'Preventive' },
    { c:'PEP screening at onboarding and on an ongoing basis, including close associates', t:'Detective' },
    { c:'Enhanced monitoring rules applied automatically on assignment of a high risk rating', t:'Preventive' },
    { c:'Independent quality assurance over completed EDD files', t:'Detective' }
  ],
  procedures:[
    'Extract the customer population with risk ratings and identify all relationships rated high.',
    'For a sample, confirm EDD was completed and dated before the relationship became active.',
    'Assess whether source of wealth is supported by independent evidence or only by customer assertion.',
    'Confirm senior management approval exists, is dated before activation, and is from an individual with appropriate authority.',
    'Confirm PEP screening was performed and that any match was escalated and resolved.',
    'Verify in the monitoring system that enhanced rules are actually applied to the sampled high-risk customers.',
    'Recalculate a sample of risk ratings from the underlying factors and compare to the assigned rating.'
  ],
  testing:'Recalculate risk ratings independently from the methodology inputs rather than accepting the system-assigned rating, since a misconfigured rating engine produces consistent but wrong ratings across the whole population. Separately, confirm enhanced monitoring by inspecting the monitoring system configuration for sampled customers — a file that states enhanced monitoring applies proves nothing about whether the rule is switched on.',
  evidence:[
    'Customer risk rating with underlying factor inputs',
    'Source of wealth documentation and corroborating evidence',
    'Senior management approval record with date and approver',
    'PEP and sanctions screening logs with match disposition',
    'Monitoring system configuration for the sampled customers',
    'EDD quality assurance results'
  ],
  redFlags:[
    'Source of wealth described only as "business income" with no supporting documentation',
    'Risk rating reduced shortly before a refresh or approval requirement',
    'Senior management approval dated after the first transaction',
    'PEP match closed with no documented rationale',
    'High-risk customers with standard monitoring rules applied',
    'Complex ownership structures with no explanation of commercial purpose',
    'Customer reluctant to provide source of wealth evidence'
  ],
  findings:[
    'Enhanced due diligence was not evidenced for a proportion of relationships rated high risk',
    'Source of wealth was recorded from customer statement without independent corroboration',
    'Enhanced monitoring rules were not applied in the monitoring system despite the file indicating otherwise'
  ],
  causes:[
    'No system control preventing activation without EDD sign-off; the requirement relies on analyst discipline',
    'EDD procedure requires source of wealth to be recorded but does not require it to be evidenced',
    'Risk rating and monitoring configuration are maintained in separate systems with no automated linkage'
  ],
  impacts:'Failure to apply enhanced due diligence to higher-risk relationships is among the most frequently cited findings in AML enforcement action, attracting financial penalty and, in serious cases, restriction of business activity. Where monitoring is not configured as documented, the institution is also unable to rely on its detective controls.',
  recommendations:[
    'Configure the onboarding system to prevent activation of a high-risk relationship until EDD is signed off by the financial crime function.',
    'Amend the EDD procedure to require documentary corroboration of source of wealth, with the evidence retained in the file.',
    'Link risk rating assignment to automatic application of enhanced monitoring rules, removing the manual configuration step.',
    'Establish independent quality assurance over completed EDD files with results reported to the financial crime committee.'
  ],
  references:[
    { t:'FATF Recommendation 10 — Customer Due Diligence', u:'https://www.fatf-gafi.org/recommendations' },
    { t:'FATF Recommendation 12 — Politically Exposed Persons', u:'https://www.fatf-gafi.org/recommendations' }
  ],
  tags:['edd','enhanced due diligence','source of wealth','pep','aml','risk rating','onboarding','monitoring','cams']
},
{
  id:'acams-sanctions', fw:'acams', ref:'AML Programme — Sanctions Screening', title:'Sanctions Screening and List Management',
  domain:'Sanctions Compliance', tier:'ref',
  version:'2024', effective:'2024-06-01', updated:'2026-09-14',
  source:'ACAMS', url:'https://www.acams.org',
  summary:'Institutions must screen customers and transactions against applicable sanctions lists, maintain current list data, and resolve potential matches before proceeding.',
  requirement:'Screening is applied to customers at onboarding and on an ongoing basis, and to transactions before execution, against all sanctions lists applicable to the institution. List updates are applied promptly, matching parameters are calibrated and tested, and potential matches are resolved by trained staff with the rationale documented.',
  focus:[
    'Currency of sanctions list data and the interval between publication and application',
    'Completeness of lists screened against, relative to the jurisdictions the institution operates in',
    'Calibration of fuzzy matching — whether thresholds are set to avoid alerts rather than to catch matches',
    'Screening of all relevant fields, not only customer name',
    'Quality of alert disposition and evidence supporting dismissal'
  ],
  risks:[
    { r:'Sanctions list update not applied promptly', i:'High', d:'Transactions with a newly designated party proceed during the gap, constituting a breach.' },
    { r:'Matching threshold set too loosely to generate alerts', i:'High', d:'True matches pass undetected while the system reports a low alert rate that appears efficient.' },
    { r:'Screening applied to name only, omitting address, date of birth or vessel identifiers', i:'Medium', d:'Designated parties using name variants are missed.' },
    { r:'Alerts dismissed without documented rationale', i:'High', d:'No basis exists to demonstrate the dismissal was correct if later challenged.' }
  ],
  controls:[
    { c:'Automated daily ingestion of sanctions list updates with failure alerting', t:'Preventive' },
    { c:'Documented list coverage assessment against operating jurisdictions', t:'Preventive' },
    { c:'Periodic calibration testing of matching parameters using known-match test data', t:'Detective' },
    { c:'Real-time transaction screening blocking execution pending resolution', t:'Preventive' },
    { c:'Four-eyes review of alert dismissals above a defined risk level', t:'Detective' },
    { c:'Independent assurance testing of screening effectiveness', t:'Detective' }
  ],
  procedures:[
    'Confirm which sanctions lists are screened and compare against the jurisdictions in which the institution operates.',
    'Compare the list version in the screening system against the current published version and calculate the lag.',
    'Review the update log for failed ingestions and confirm each was detected and remediated.',
    'Inject known test entries matching designated parties and confirm the system generates alerts.',
    'Test name variants — transliteration, reordering, partial names — against the calibrated threshold.',
    'Sample dismissed alerts and assess whether the documented rationale supports the conclusion.',
    'Confirm transaction screening blocks execution rather than alerting after the fact.'
  ],
  testing:'Calibration testing is the decisive procedure and must use injected test data rather than reviewing historic alert statistics. Submit records that are known near-matches to designated parties — transliterated spellings, reversed name order, a single character difference — and confirm each generates an alert. A system that fails this test is not screening effectively regardless of how many alerts it produces in normal operation.',
  evidence:[
    'List coverage assessment against operating jurisdictions',
    'Screening system list version and publication dates',
    'Update ingestion log including failures',
    'Calibration test data, results and threshold settings',
    'Sampled alerts with disposition and rationale',
    'Evidence that transaction screening blocks rather than merely alerts'
  ],
  redFlags:[
    'Screening list version older than the current published version by more than the policy interval',
    'Alert volume falling sharply after a threshold change with no corresponding business change',
    'Alerts dismissed in bulk or within seconds of generation',
    'Dismissal rationale consisting of a standard phrase repeated across unrelated alerts',
    'Lists for a jurisdiction of operation absent from the screening configuration',
    'No calibration testing performed since implementation'
  ],
  findings:[
    'Sanctions list updates were applied on a weekly cycle, creating a gap against same-day designations',
    'Matching thresholds had been loosened without documented analysis of the effect on detection',
    'Alert dismissal rationale was insufficient to support the conclusion in a material proportion of the sample'
  ],
  causes:[
    'List ingestion scheduled weekly at implementation for system performance reasons and never revisited',
    'Threshold changes handled as system tuning rather than as a change affecting regulatory control',
    'Analyst performance measured on alerts cleared rather than on quality of disposition'
  ],
  impacts:'Sanctions breaches carry strict liability in most jurisdictions — intent is not required. Penalties are substantial and enforcement is public, creating regulatory and reputational consequence disproportionate to the number of transactions involved.',
  recommendations:[
    'Move list ingestion to automated daily updates with alerting on ingestion failure, and measure lag against publication.',
    'Bring matching threshold changes under formal change control requiring documented calibration analysis and financial crime approval.',
    'Introduce periodic calibration testing using injected known-match data, with results reported to the financial crime committee.',
    'Replace volume-based analyst measures with quality-weighted assessment through independent alert re-review.'
  ],
  references:[
    { t:'FATF Recommendation 6 — Targeted Financial Sanctions', u:'https://www.fatf-gafi.org/recommendations' },
    { t:'FATF Recommendation 7 — Proliferation Financing', u:'https://www.fatf-gafi.org/recommendations' }
  ],
  tags:['sanctions','screening','list management','calibration','fuzzy matching','alerts','aml','cams']
},

/* ========== IFRS ========== */
{
  id:'ifrs-15', fw:'ifrs', ref:'IFRS 15', title:'Revenue from Contracts with Customers',
  domain:'Revenue Recognition', tier:'ref',
  version:'2026', effective:'2018-01-01', updated:'2026-08-28',
  source:'IFRS Foundation / IASB', url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/',
  summary:'Revenue is recognised to depict the transfer of promised goods or services to customers in an amount reflecting the consideration to which the entity expects to be entitled, applying a five-step model.',
  requirement:'The entity identifies the contract, identifies performance obligations, determines the transaction price, allocates that price to the performance obligations, and recognises revenue when or as each obligation is satisfied. Judgements applied at each step are disclosed.',
  focus:[
    'Identification of distinct performance obligations, particularly in bundled arrangements',
    'Treatment of variable consideration and the constraint on recognising it',
    'Whether revenue is recognised over time or at a point in time, and the basis for that conclusion',
    'Principal versus agent determination and its effect on gross or net presentation',
    'Contract modifications and whether they are treated as separate contracts'
  ],
  risks:[
    { r:'Performance obligations not separately identified in bundled arrangements', i:'High', d:'Revenue recognised earlier than the transfer of control, overstating the current period.' },
    { r:'Variable consideration recognised without applying the constraint', i:'High', d:'Revenue recognised that is subsequently reversed, indicating the constraint was not properly applied.' },
    { r:'Incorrect principal versus agent conclusion', i:'High', d:'Revenue presented gross when net is appropriate, materially overstating reported revenue.' },
    { r:'Cut-off manipulated around period end', i:'High', d:'Revenue recognised in the wrong period, a common mechanism in financial statement fraud.' }
  ],
  controls:[
    { c:'Contract review process identifying performance obligations before revenue is recorded', t:'Preventive' },
    { c:'Documented five-step analysis retained for non-standard contracts', t:'Preventive' },
    { c:'Independent review of variable consideration estimates and the constraint applied', t:'Detective' },
    { c:'Systematic cut-off procedures at period end tied to evidence of transfer of control', t:'Preventive' },
    { c:'Periodic review of credit notes and revenue reversals for pattern', t:'Detective' }
  ],
  procedures:[
    'Select a sample of contracts, weighted towards non-standard and high-value arrangements.',
    'For each, perform the five-step analysis independently and compare to the entity\'s conclusion.',
    'Assess whether promised goods or services are distinct, and challenge bundling that accelerates recognition.',
    'Evaluate variable consideration estimates and whether the constraint was applied to limit recognition.',
    'Test transactions either side of period end against evidence of transfer of control — delivery, acceptance, or usage records.',
    'Analyse post-period credit notes and reversals against original recognition dates.',
    'Assess principal versus agent conclusions against the control indicators in the standard.'
  ],
  testing:'Cut-off testing carries the highest yield and should extend meaningfully either side of period end rather than a few days. Trace each sampled transaction to independent evidence of control transfer — a signed delivery note, customer acceptance, or system usage log — rather than to the invoice date, which the entity controls. Analyse credit notes issued after period end against their original recognition date; a concentration reversing pre-year-end revenue is a strong indicator of cut-off manipulation.',
  evidence:[
    'Customer contracts including amendments and side letters',
    'Documented five-step analysis for sampled contracts',
    'Delivery notes, acceptance certificates or usage records',
    'Variable consideration estimates with supporting calculations',
    'Post-period credit note listing with original invoice dates',
    'Revenue recognition accounting policy and disclosures'
  ],
  redFlags:[
    'Revenue concentrated in the final days of the reporting period',
    'Credit notes issued shortly after period end reversing pre-period revenue',
    'Side letters or verbal arrangements altering contract terms',
    'Bundled arrangements with no documented allocation of transaction price',
    'Variable consideration recognised in full with no constraint analysis',
    'Unusual or extended payment terms granted near period end',
    'Significant change in the principal versus agent conclusion without a change in the arrangement'
  ],
  findings:[
    'Performance obligations in bundled arrangements were not separately identified and allocated',
    'Variable consideration was recognised without documented application of the constraint',
    'Cut-off testing identified revenue recognised before evidence of transfer of control'
  ],
  causes:[
    'Contract review performed by the commercial team without accounting involvement for non-standard terms',
    'Revenue recognition policy describes the five-step model but provides no operational guidance for applying the constraint',
    'Period-end incentives align sales compensation with recognition date rather than with delivery'
  ],
  impacts:'Revenue is the financial statement line most frequently misstated, whether through error or manipulation. Misapplication of IFRS 15 affects reported performance directly and, where identified after publication, may require restatement with consequent regulatory and market impact.',
  recommendations:[
    'Require accounting review of all non-standard contracts before revenue is recorded, with the five-step analysis documented and retained.',
    'Provide operational guidance for applying the variable consideration constraint, including worked examples for common arrangements.',
    'Extend cut-off procedures to trace recognition to independent evidence of control transfer rather than to invoice date.',
    'Introduce periodic analysis of post-period credit notes against original recognition dates, reported to the audit committee.'
  ],
  references:[
    { t:'IFRS 15 Revenue from Contracts with Customers', u:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/' }
  ],
  tags:['ifrs 15','revenue recognition','performance obligation','variable consideration','cut-off','principal agent','five-step model']
},
{
  id:'ifrs-9-ecl', fw:'ifrs', ref:'IFRS 9', title:'Expected Credit Losses',
  domain:'Financial Instruments — Impairment', tier:'ref',
  version:'2026', effective:'2018-01-01', updated:'2026-08-28',
  source:'IFRS Foundation / IASB', url:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/',
  summary:'Impairment of financial assets is measured using an expected credit loss model, recognising losses before a credit event occurs, based on forward-looking information.',
  requirement:'The entity measures loss allowances at an amount equal to twelve-month expected credit losses, or lifetime expected credit losses where credit risk has increased significantly since initial recognition. Measurement reflects an unbiased probability-weighted amount, the time value of money, and reasonable and supportable forward-looking information.',
  focus:[
    'Definition and consistent application of significant increase in credit risk',
    'Reasonableness of forward-looking economic scenarios and their weightings',
    'Governance over post-model adjustments and management overlays',
    'Data quality feeding the model, particularly historic default data',
    'Staging transfers and whether they occur on a timely basis'
  ],
  risks:[
    { r:'Significant increase in credit risk defined so that transfers occur late', i:'High', d:'Lifetime losses recognised later than required, understating the allowance.' },
    { r:'Management overlay applied without governance or documented basis', i:'High', d:'The allowance becomes a management judgement rather than a model output, creating earnings management opportunity.' },
    { r:'Economic scenarios not updated for current conditions', i:'Medium', d:'Forward-looking information is stale and the allowance does not reflect current expectations.' },
    { r:'Historic default data incomplete or misaligned with current portfolio', i:'High', d:'Probability of default parameters are unreliable and the model output cannot be depended upon.' }
  ],
  controls:[
    { c:'Documented SICR definition approved by the risk committee and applied consistently', t:'Preventive' },
    { c:'Model validation performed independently of model development', t:'Detective' },
    { c:'Governance framework for post-model adjustments requiring documented rationale and approval', t:'Preventive' },
    { c:'Periodic review and approval of economic scenarios and weightings', t:'Preventive' },
    { c:'Data quality controls over model inputs with reconciliation to source systems', t:'Detective' },
    { c:'Back-testing of model output against actual losses', t:'Detective' }
  ],
  procedures:[
    'Obtain the SICR definition and assess whether the criteria would identify deterioration on a timely basis.',
    'Recalculate staging for a sample of exposures and compare to the allocation applied.',
    'Reconcile model input data to source systems and assess completeness of historic default data.',
    'Evaluate economic scenarios against externally published forecasts and assess the reasonableness of weightings.',
    'Quantify management overlays as a proportion of total allowance and review the documented basis for each.',
    'Review independent model validation reports and confirm findings were remediated.',
    'Perform back-testing of prior period model output against actual losses realised.'
  ],
  testing:'Independently recalculate the expected credit loss for a sample of exposures using the documented methodology and compare to the recorded allowance, rather than re-performing the entity\'s calculation using its own model. Separately, quantify management overlays as a percentage of total allowance and track the trend — a rising overlay proportion indicates either declining model reliability or increasing use of judgement, and both warrant explanation.',
  evidence:[
    'SICR definition with approval evidence',
    'Model methodology documentation and independent validation reports',
    'Model input data with reconciliation to source systems',
    'Economic scenarios, weightings and approval records',
    'Post-model adjustment register with rationale and approval',
    'Back-testing results comparing modelled to actual losses',
    'Staging analysis by portfolio and period'
  ],
  redFlags:[
    'Management overlay representing a large or growing proportion of the total allowance',
    'SICR criteria based solely on arrears status, ignoring forward-looking indicators',
    'Economic scenarios unchanged through a material change in conditions',
    'Model validation findings outstanding across multiple periods',
    'Staging transfers concentrated at period end',
    'Back-testing consistently showing model output diverging from actual losses in one direction'
  ],
  findings:[
    'The SICR definition relied predominantly on arrears status, delaying transfer to lifetime expected losses',
    'Management overlays were applied without documented rationale or committee approval',
    'Independent model validation findings from the prior period remained unremediated'
  ],
  causes:[
    'SICR criteria set at implementation using available data rather than the most predictive indicators',
    'Overlay governance framework drafted but not operationalised, leaving overlays to finance judgement',
    'Model validation resourced as a periodic exercise with no tracking of finding remediation'
  ],
  impacts:'The expected credit loss allowance is typically among the most material estimates in a financial institution\'s accounts and among the most judgemental. Weak governance over overlays creates a direct earnings management risk, and is an area of sustained regulatory and audit committee focus.',
  recommendations:[
    'Broaden the SICR definition to incorporate forward-looking indicators alongside arrears status, with the change validated against historic outcomes.',
    'Operationalise the overlay governance framework: every post-model adjustment documented, quantified, justified and approved by the risk committee.',
    'Establish tracking of model validation findings with defined remediation deadlines reported to the audit committee.'
  ],
  references:[
    { t:'IFRS 9 Financial Instruments', u:'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/' }
  ],
  tags:['ifrs 9','expected credit loss','ecl','impairment','sicr','staging','model validation','overlay','provisioning']
},

/* ========== PMI ========== */
{
  id:'pmi-risk', fw:'pmi', ref:'PMBOK 7 — Uncertainty', title:'Project Risk and Uncertainty Management',
  domain:'Performance Domain — Uncertainty', tier:'ref',
  version:'7th Ed', effective:'2021-08-01', updated:'2026-07-19',
  source:'Project Management Institute', url:'https://www.pmi.org/standards',
  summary:'Project delivery addresses uncertainty, ambiguity, complexity and volatility through systematic identification, assessment and response to threats and opportunities.',
  requirement:'Risks are identified throughout the project lifecycle, assessed for probability and impact, assigned owners, and addressed through documented responses. Reserves are established commensurate with assessed exposure and governed through defined authority.',
  focus:[
    'Whether the risk register is maintained actively or completed once at initiation',
    'Ownership of risks by named individuals with authority to act',
    'Basis and governance of contingency reserve',
    'Whether issues that materialise were previously identified as risks',
    'Escalation of risks exceeding the project manager\'s tolerance'
  ],
  risks:[
    { r:'Risk register not updated after initiation', i:'High', d:'Emerging risks are unmanaged and the register provides false assurance to the steering committee.' },
    { r:'Contingency reserve set without reference to assessed exposure', i:'Medium', d:'Reserve is either inadequate for realistic outcomes or conceals budget padding.' },
    { r:'Risks recorded without a named owner', i:'Medium', d:'No individual is accountable for the response, so responses are not executed.' },
    { r:'Issues materialising that were never identified as risks', i:'High', d:'Indicates the identification process is not functioning, whatever the register contains.' }
  ],
  controls:[
    { c:'Risk register reviewed and updated at each defined project checkpoint', t:'Detective' },
    { c:'Named risk owner assigned with documented response and target date', t:'Preventive' },
    { c:'Contingency reserve calculated from quantified risk exposure and approved by the sponsor', t:'Preventive' },
    { c:'Escalation threshold defined above which risks pass to the steering committee', t:'Corrective' },
    { c:'Post-issue analysis determining whether the issue had been identified as a risk', t:'Detective' }
  ],
  procedures:[
    'Obtain the risk register and examine the update history for evidence of active maintenance.',
    'Confirm each open risk carries a named owner, a documented response and a target date.',
    'Reconcile the contingency reserve to the quantified exposure and obtain the approval record.',
    'Select issues that materialised during the project and determine whether each appeared in the register beforehand.',
    'Confirm risks exceeding the escalation threshold were reported to the steering committee and trace to the minutes.',
    'Compare the risk profile against similar completed projects for omitted categories.'
  ],
  testing:'The highest-value test is retrospective: take the issues that actually materialised and test whether each was previously identified as a risk. A register full of entries that never materialised, alongside issues that were never foreseen, demonstrates that the identification process is not working — a conclusion no amount of review of the register itself would reveal.',
  evidence:[
    'Risk register with version and update history',
    'Risk response plans with owner and target date',
    'Contingency reserve calculation and sponsor approval',
    'Issue log with dates of materialisation',
    'Steering committee minutes evidencing escalation',
    'Project checkpoint review records'
  ],
  redFlags:[
    'Risk register with no updates since project initiation',
    'All risks rated medium, indicating assessment without discrimination',
    'Risks owned by the project manager alone rather than by those able to act',
    'Contingency reserve as a round percentage of budget with no underlying calculation',
    'Issues escalated to the steering committee that never appeared in the register',
    'Risks closed without evidence the response was executed'
  ],
  findings:[
    'The risk register was not updated following initiation despite significant scope change',
    'Contingency reserve was set at a fixed percentage of budget without reference to assessed exposure',
    'A majority of issues that materialised had not been previously identified as risks'
  ],
  causes:[
    'Risk management treated as an initiation deliverable rather than a continuing discipline',
    'No requirement to reconcile reserve to quantified exposure at approval',
    'Risk identification workshops involve the project team only, excluding operational stakeholders who see different exposures'
  ],
  impacts:'Projects with dormant risk registers experience issues as surprises, consuming contingency without the steering committee having been given opportunity to act earlier. Where reserves are not grounded in assessed exposure, the organisation cannot distinguish genuine contingency from budget padding across its portfolio.',
  recommendations:[
    'Require risk register review as a mandatory gate at each project checkpoint, with the steering committee unable to approve progression without it.',
    'Calculate contingency reserve from quantified risk exposure, with the calculation approved by the sponsor and revisited at each stage gate.',
    'Extend risk identification workshops to include operational and support stakeholders outside the core project team.'
  ],
  references:[
    { t:'PMBOK Guide Seventh Edition — Uncertainty Performance Domain', u:'https://www.pmi.org/standards/pmbok' },
    { t:'PMI Standard for Risk Management in Portfolios, Programs and Projects', u:'https://www.pmi.org/standards' }
  ],
  tags:['project risk','risk register','contingency reserve','pmbok','uncertainty','escalation','project assurance','pmp']
},
{
  id:'pmi-benefits', fw:'pmi', ref:'PMBOK 7 — Measurement', title:'Benefits Realisation and Performance Measurement',
  domain:'Performance Domain — Measurement', tier:'ref',
  version:'7th Ed', effective:'2021-08-01', updated:'2026-07-19',
  source:'Project Management Institute', url:'https://www.pmi.org/standards',
  summary:'Project performance is assessed against the outcomes and benefits the project was authorised to deliver, not solely against schedule and budget.',
  requirement:'Benefits are defined and quantified in the business case, baselined before delivery, measured after implementation, and reported to the sponsor and governance body. Measures are meaningful, verifiable and attributable to the project.',
  focus:[
    'Whether business case benefits are quantified and measurable',
    'Existence of a pre-implementation baseline against which benefits can be assessed',
    'Whether post-implementation review occurs and who receives it',
    'Attribution — whether claimed benefits are distinguishable from other changes',
    'Consequences where benefits are not realised'
  ],
  risks:[
    { r:'Benefits stated qualitatively and therefore unmeasurable', i:'High', d:'The investment cannot be evaluated; approval rests on assertion rather than analysis.' },
    { r:'No baseline captured before implementation', i:'High', d:'Improvement cannot be demonstrated even where it occurred.' },
    { r:'Post-implementation review not performed', i:'Medium', d:'The organisation never learns whether its investments deliver, and repeats the same estimation errors.' },
    { r:'Benefits claimed without attribution analysis', i:'Medium', d:'Improvement from unrelated causes is credited to the project, inflating apparent success.' }
  ],
  controls:[
    { c:'Business case approval requires quantified, measurable benefit statements', t:'Preventive' },
    { c:'Baseline measurement captured and signed off before implementation begins', t:'Preventive' },
    { c:'Mandatory post-implementation review at a defined interval after go-live', t:'Detective' },
    { c:'Benefit owner assigned outside the project team, accountable after closure', t:'Preventive' },
    { c:'Portfolio-level reporting of benefits realised against benefits promised', t:'Detective' }
  ],
  procedures:[
    'Obtain approved business cases for a sample of completed projects.',
    'Assess whether stated benefits are quantified and expressed in measurable terms.',
    'Confirm a pre-implementation baseline was captured and retained.',
    'Determine whether post-implementation review was performed within the required interval.',
    'Compare benefits realised against benefits promised and quantify the variance.',
    'Assess whether attribution analysis distinguishes project effect from other concurrent changes.',
    'Confirm a benefit owner was assigned and remains accountable after project closure.'
  ],
  testing:'Independently obtain the operational metric the benefit claims to improve — from the source system rather than the project report — for periods before and after implementation. Compare against the claimed realisation. Where the metric was also affected by other changes in the period, assess whether the project report acknowledges this or attributes the full movement to the project.',
  evidence:[
    'Approved business cases with quantified benefit statements',
    'Pre-implementation baseline measurements with sign-off',
    'Post-implementation review reports',
    'Source system data for the relevant operational metrics',
    'Benefit owner assignment records',
    'Portfolio benefits realisation reporting'
  ],
  redFlags:[
    'Benefits expressed as "improved efficiency" with no quantification',
    'No baseline measurement in the project file',
    'Post-implementation reviews consistently not performed',
    'Benefits realised reported as exactly equal to benefits promised',
    'Benefit ownership ending at project closure',
    'Full movement in a metric attributed to the project despite other concurrent changes'
  ],
  findings:[
    'Business case benefits were expressed qualitatively and could not be measured after implementation',
    'Pre-implementation baselines were not captured, preventing assessment of realisation',
    'Post-implementation reviews were not performed for a majority of completed projects'
  ],
  causes:[
    'Business case template requests benefit description but does not require quantification or a measurement method',
    'Project closure process completes at handover with no residual accountability for benefits',
    'No portfolio function holds the mandate to require post-implementation review'
  ],
  impacts:'Without benefits measurement the organisation cannot distinguish investments that deliver from those that do not, and continues to approve on the basis of estimates it has never tested. Over a portfolio this compounds: systematic optimism in business cases goes uncorrected because outcomes are never examined.',
  recommendations:[
    'Amend the business case template so approval cannot proceed without quantified benefits, a stated measurement method and a named benefit owner.',
    'Require baseline capture and sign-off as a condition of implementation approval.',
    'Make post-implementation review mandatory at a defined interval, with results reported to the investment committee and fed back into business case estimation.'
  ],
  references:[
    { t:'PMBOK Guide Seventh Edition — Measurement Performance Domain', u:'https://www.pmi.org/standards/pmbok' },
    { t:'PMI Standard for Benefits Realization Management', u:'https://www.pmi.org/standards' }
  ],
  tags:['benefits realisation','business case','post-implementation review','baseline','measurement','attribution','portfolio','pmp']
},

/* ========== ISO ========== */
{
  id:'iso-31000', fw:'iso', ref:'ISO 31000:2018', title:'Risk Management — Principles and Framework',
  domain:'Risk Management', tier:'ref',
  version:'2018', effective:'2018-02-01', updated:'2026-09-01',
  source:'International Organization for Standardization', url:'https://www.iso.org/standard/65694.html',
  summary:'Risk management is integrated into governance, structured and comprehensive, customised to context, inclusive of stakeholders, dynamic, and based on the best available information.',
  requirement:'The organisation establishes a risk management framework with leadership commitment, defined roles and accountabilities, allocated resources, and integration into decision-making. The process comprises scope and context setting, risk assessment, risk treatment, monitoring, and recording and reporting.',
  focus:[
    'Whether risk management is integrated into decision-making or operates as a parallel exercise',
    'Clarity of roles and accountabilities across the three lines',
    'Whether the framework is customised to the organisation or adopted generically',
    'Quality of information supporting risk assessment, including its limitations',
    'Evidence that monitoring leads to framework improvement'
  ],
  risks:[
    { r:'Risk management operates separately from decision-making', i:'High', d:'Risk information is produced but does not influence the decisions it was intended to inform.' },
    { r:'Roles and accountabilities undefined across the three lines', i:'Medium', d:'Risks fall between functions; assurance is duplicated in some areas and absent in others.' },
    { r:'Framework adopted generically without customisation', i:'Medium', d:'Risk categories and criteria do not reflect the organisation\'s actual exposures.' },
    { r:'Assessment based on information whose limitations are not acknowledged', i:'Medium', d:'Confidence in the assessment exceeds what the underlying data supports.' }
  ],
  controls:[
    { c:'Risk assessment required as a documented input to defined decision types', t:'Preventive' },
    { c:'Roles and accountabilities documented across the three lines and communicated', t:'Preventive' },
    { c:'Risk criteria customised to the organisation and approved by the board', t:'Preventive' },
    { c:'Periodic framework review assessing effectiveness rather than presence', t:'Detective' },
    { c:'Documentation of information sources and limitations in risk assessments', t:'Preventive' }
  ],
  procedures:[
    'Obtain the risk management framework and assess whether it is customised or generic.',
    'Identify significant decisions taken in the period and determine whether a documented risk assessment informed each.',
    'Review role definitions across the three lines and test understanding with a sample of role holders.',
    'Assess whether risk criteria reflect the organisation\'s context, scale and exposures.',
    'Review risk assessments for acknowledgement of information limitations and assumptions.',
    'Examine framework review records and confirm identified improvements were implemented.'
  ],
  testing:'Work backwards from decisions rather than forwards from the framework. Select significant decisions taken during the period — an acquisition, a major contract, a system implementation — and test whether a risk assessment existed, predated the decision, and is referenced in the decision record. A framework that is fully documented but absent from actual decisions fails the integration principle regardless of its quality on paper.',
  evidence:[
    'Risk management framework and policy',
    'Board or committee approval of risk criteria',
    'Decision records for significant decisions in the period',
    'Risk assessments supporting those decisions, with dates',
    'Three lines role definitions and communication evidence',
    'Framework review records and improvement tracking'
  ],
  redFlags:[
    'Risk framework identical to a published template with no organisational tailoring',
    'Significant decisions with no documented risk assessment',
    'Risk assessments dated after the decision they purport to inform',
    'Role holders unable to describe their risk responsibilities',
    'Framework review concluding no improvements required across successive periods',
    'Risk criteria expressed in terms not meaningful for the organisation\'s scale'
  ],
  findings:[
    'Risk assessments were not consistently performed before significant decisions',
    'Roles and accountabilities across the three lines were documented but not understood by role holders',
    'Risk criteria had not been customised to the organisation\'s scale and context'
  ],
  causes:[
    'Risk function positioned as a reporting function rather than as an input to decision governance',
    'Role definitions published but never accompanied by communication or training',
    'Framework adopted from a template at implementation with customisation deferred and never completed'
  ],
  impacts:'Where risk management is not integrated into decision-making, the organisation incurs the cost of the framework without the benefit. Decisions continue to be taken on the same basis as before, while the existence of the framework creates an impression of control the practice does not support.',
  recommendations:[
    'Define decision types requiring a documented risk assessment as a condition of approval, and enforce through the governance process.',
    'Communicate three lines role definitions through targeted briefing, and test understanding periodically rather than assuming publication is sufficient.',
    'Customise risk criteria to the organisation\'s scale, context and exposures, with board approval and periodic revalidation.'
  ],
  references:[
    { t:'ISO 31000:2018 Risk Management — Guidelines', u:'https://www.iso.org/standard/65694.html' },
    { t:'ISO 31010 Risk Assessment Techniques', u:'https://www.iso.org/standard/72140.html' }
  ],
  tags:['iso 31000','risk management','framework','three lines','risk criteria','integration','governance']
},
{
  id:'iso-27001-a9', fw:'iso', ref:'ISO/IEC 27001 — Access Control', title:'Access Control and Identity Management',
  domain:'Information Security Controls', tier:'ref',
  version:'2022', effective:'2022-10-25', updated:'2026-09-01',
  source:'International Organization for Standardization', url:'https://www.iso.org/standard/27001',
  summary:'Access to information and information processing facilities is limited to authorised users, based on business requirement, with rights provisioned, reviewed and removed through a controlled process.',
  requirement:'Access rights are granted on the basis of documented business need and least privilege, approved by an appropriate authority, reviewed periodically by system owners, and removed promptly on termination or role change. Privileged access is subject to additional restriction and monitoring.',
  focus:[
    'Timeliness of access removal on termination',
    'Whether periodic access reviews are performed by those able to judge appropriateness',
    'Application of least privilege, particularly after role changes',
    'Control and monitoring of privileged accounts',
    'Management of shared, service and generic accounts'
  ],
  risks:[
    { r:'Access not removed promptly on termination', i:'High', d:'Former employees retain the ability to access systems and data after leaving.' },
    { r:'Access accumulates across role changes', i:'High', d:'Long-serving staff hold combined rights that breach segregation of duties.' },
    { r:'Access reviews performed by IT rather than by system owners', i:'Medium', d:'Reviewers cannot judge business appropriateness and approve by default.' },
    { r:'Shared accounts used for privileged activity', i:'High', d:'Actions cannot be attributed to an individual, defeating accountability.' }
  ],
  controls:[
    { c:'Automated de-provisioning triggered by the HR termination record', t:'Preventive' },
    { c:'Role-based access with defined role profiles and documented approval for exceptions', t:'Preventive' },
    { c:'Periodic access review performed and certified by system owners', t:'Detective' },
    { c:'Privileged access issued time-bound and subject to additional approval', t:'Preventive' },
    { c:'Elimination of shared accounts, or individual attribution where unavoidable', t:'Preventive' },
    { c:'Reconciliation of access changes to approved requests', t:'Detective' }
  ],
  procedures:[
    'Obtain the leaver listing from HR and the active account listing from each in-scope system.',
    'Identify accounts active for individuals with a termination date and calculate the elapsed period.',
    'Sample users who changed role and assess whether prior access was removed.',
    'Review access review records and confirm the reviewer was the system owner rather than IT.',
    'Identify shared, generic and service accounts and assess the control over their use.',
    'For privileged accounts, confirm time-bound issuance and additional approval.',
    'Reconcile a sample of access changes to an approved request.'
  ],
  testing:'Match the HR leaver file against active accounts across all in-scope systems as a full population test rather than a sample, since a single retained account is the finding. For role change, select users with a role change date in the period and compare current entitlements against both the old and new role profiles — entitlements matching neither profile indicate accumulation that periodic review has failed to detect.',
  evidence:[
    'HR leaver listing with termination dates',
    'Active account listings from each in-scope system',
    'Access review records with reviewer identity and certification',
    'Role profile definitions',
    'Access change requests with approval',
    'Privileged account register with issuance and expiry'
  ],
  redFlags:[
    'Accounts active for terminated employees',
    'Users holding entitlements matching neither their current nor prior role',
    'Access reviews certified without any access being revoked',
    'Shared administrator accounts in use',
    'Privileged access granted permanently rather than time-bound',
    'Access changes with no corresponding approved request',
    'Service accounts with interactive login capability'
  ],
  findings:[
    'Accounts remained active for terminated employees beyond the policy removal period',
    'Access accumulated across role changes, creating segregation of duties conflicts',
    'Periodic access reviews were certified by IT rather than by system owners'
  ],
  causes:[
    'De-provisioning depends on manual notification rather than on the HR termination record',
    'Role change process grants new access without triggering removal of prior entitlements',
    'Access review tooling routes certification to the technical administrator rather than to the business owner'
  ],
  impacts:'Retained access for leavers is among the most frequently identified information security findings and a common vector in data loss incidents. Accumulated access breaches segregation of duties in ways that transaction-level controls assume cannot occur, undermining reliance placed on those controls elsewhere.',
  recommendations:[
    'Trigger automated de-provisioning directly from the HR termination record rather than from manual notification.',
    'Amend the role change process so granting new access automatically initiates removal of prior entitlements, with exceptions requiring documented approval.',
    'Route access review certification to system owners with the business context to judge appropriateness, and monitor review outcomes for reviews that revoke nothing.'
  ],
  references:[
    { t:'ISO/IEC 27001:2022 Information Security Management', u:'https://www.iso.org/standard/27001' },
    { t:'ISO/IEC 27002:2022 Information Security Controls', u:'https://www.iso.org/standard/75652.html' }
  ],
  tags:['iso 27001','access control','least privilege','de-provisioning','access review','privileged access','segregation of duties','identity management']
},

/* ========== INTOSAI ========== */
{
  id:'intosai-3000', fw:'intosai', ref:'ISSAI 3000', title:'Performance Audit Standard',
  domain:'Performance Auditing', tier:'open',
  version:'2019', effective:'2019-01-01', updated:'2026-09-02',
  source:'INTOSAI', url:'https://www.issai.org/pronouncements/issai-3000-performance-audit-standard/',
  summary:'Performance audit examines whether undertakings, systems, operations, programmes, activities or organisations are operating in accordance with the principles of economy, efficiency and effectiveness.',
  requirement:'The auditor selects topics through a strategic process considering materiality and risk, establishes clear audit objectives and criteria, obtains sufficient appropriate evidence, and reports findings with conclusions and recommendations addressed to the responsible body.',
  focus:[
    'Whether audit criteria are established and agreed before fieldwork',
    'Suitability of criteria — relevant, understandable, complete, objective',
    'Sufficiency and appropriateness of evidence supporting each conclusion',
    'Distinction between economy, efficiency and effectiveness in the objectives',
    'Whether recommendations are actionable by the body to which they are addressed'
  ],
  risks:[
    { r:'Criteria not established before fieldwork', i:'High', d:'Findings become auditor opinion; the auditee disputes the basis and the report loses authority.' },
    { r:'Evidence insufficient to support the conclusion reached', i:'High', d:'Conclusions cannot withstand challenge, damaging the credibility of the audit institution.' },
    { r:'Objectives conflate economy, efficiency and effectiveness', i:'Medium', d:'The audit reaches unclear conclusions because it was never clear what question was being answered.' },
    { r:'Recommendations addressed to a body unable to implement them', i:'Medium', d:'Recommendations remain open indefinitely because the recipient lacks the authority to act.' }
  ],
  controls:[
    { c:'Criteria documented and, where practicable, agreed with the auditee before fieldwork', t:'Preventive' },
    { c:'Audit design matrix linking objectives, criteria, evidence required and analysis method', t:'Preventive' },
    { c:'Supervisory review confirming evidence supports each finding before reporting', t:'Detective' },
    { c:'Quality control review by a party not involved in the engagement', t:'Detective' },
    { c:'Recommendation addressed to the body with authority to implement', t:'Preventive' }
  ],
  procedures:[
    'Obtain the audit plan and confirm criteria were documented before fieldwork commenced.',
    'Assess the suitability of criteria against relevance, understandability, completeness and objectivity.',
    'Review the audit design matrix for linkage from objective through criteria to evidence and method.',
    'For each finding, trace the supporting evidence and assess its sufficiency and appropriateness.',
    'Confirm supervisory and quality control review occurred and that review points were cleared.',
    'Assess whether each recommendation is within the authority of the body to which it is addressed.'
  ],
  testing:'Test the criteria first, before examining findings. Criteria that are vague, or that were established after evidence was gathered, undermine every conclusion that rests on them regardless of the quality of the underlying fieldwork. Where criteria were agreed with the auditee, confirm the agreement predates fieldwork rather than having been obtained during the clearance process.',
  evidence:[
    'Audit plan with documented criteria and approval date',
    'Evidence of criteria agreement with the auditee, where obtained',
    'Audit design matrix',
    'Working papers supporting each finding',
    'Supervisory and quality control review records',
    'Issued report with management responses'
  ],
  redFlags:[
    'Criteria first documented in the draft report rather than in the plan',
    'Findings supported by a single source of evidence',
    'Audit objectives phrased so broadly that any conclusion could follow',
    'Recommendations addressed to bodies outside the auditee\'s control',
    'Quality control review performed by the engagement supervisor',
    'Management responses disputing criteria rather than facts'
  ],
  findings:[
    'Audit criteria were not documented before fieldwork commenced',
    'Certain findings rested on a single evidence source without corroboration',
    'Recommendations were addressed to bodies lacking authority to implement them'
  ],
  causes:[
    'Audit methodology treats criteria development as part of reporting rather than planning',
    'Resource pressure leads to evidence gathering being concluded once a finding appears supported',
    'Recommendations drafted without confirming where implementation authority sits'
  ],
  impacts:'Performance audit reports carry weight because of their methodological rigour. Where criteria are established retrospectively or evidence is thin, the auditee can dispute the report on procedural grounds without addressing its substance, and the audit institution\'s standing is diminished.',
  recommendations:[
    'Require criteria to be documented and approved as part of the audit plan, before fieldwork authorisation.',
    'Introduce an evidence sufficiency assessment at supervisory review, with findings resting on a single source explicitly identified.',
    'Confirm implementation authority before finalising each recommendation, redirecting where necessary.'
  ],
  references:[
    { t:'ISSAI 3000 Performance Audit Standard', u:'https://www.issai.org/pronouncements/issai-3000-performance-audit-standard/' },
    { t:'ISSAI 100 Fundamental Principles of Public-Sector Auditing', u:'https://www.issai.org/pronouncements/issai-100-fundamental-principles-of-public-sector-auditing/' }
  ],
  tags:['issai 3000','performance audit','criteria','economy efficiency effectiveness','public sector','evidence','intosai']
},
{
  id:'intosai-4000', fw:'intosai', ref:'ISSAI 4000', title:'Compliance Audit Standard',
  domain:'Compliance Auditing', tier:'open',
  version:'2019', effective:'2019-01-01', updated:'2026-09-02',
  source:'INTOSAI', url:'https://www.issai.org/pronouncements/issai-4000-compliance-audit-standard/',
  summary:'Compliance audit assesses whether activities, financial transactions and information comply in all material respects with the authorities governing the audited entity.',
  requirement:'The auditor identifies the applicable authorities, determines materiality for compliance purposes, obtains sufficient appropriate evidence of compliance or non-compliance, and reports in a form appropriate to the engagement — attestation or direct reporting.',
  focus:[
    'Completeness of the identified authorities governing the entity',
    'How materiality is determined for compliance matters, including by nature rather than amount',
    'Whether non-compliance identified is reported irrespective of amount where it concerns legality',
    'Consideration of the risk of non-compliance due to fraud',
    'Appropriateness of the reporting form for the engagement'
  ],
  risks:[
    { r:'Applicable authorities incompletely identified', i:'High', d:'Compliance is assessed against an incomplete framework; breaches of unidentified requirements are not detected.' },
    { r:'Materiality applied by amount alone', i:'High', d:'Breaches of legality that are small in value but significant in nature go unreported.' },
    { r:'Non-compliance identified but not reported', i:'High', d:'The audit fails its primary purpose and the auditor\'s own conduct comes into question.' },
    { r:'Fraud risk not considered in the compliance context', i:'Medium', d:'Deliberate circumvention is treated as error, and the appropriate response is not triggered.' }
  ],
  controls:[
    { c:'Authorities register maintained and validated with legal advisers', t:'Preventive' },
    { c:'Materiality framework addressing nature and context as well as amount', t:'Preventive' },
    { c:'Defined escalation for suspected intentional non-compliance', t:'Corrective' },
    { c:'Supervisory review confirming all identified non-compliance is reported', t:'Detective' },
    { c:'Quality control review by a party independent of the engagement', t:'Detective' }
  ],
  procedures:[
    'Obtain the register of authorities and assess completeness against the entity\'s mandate and operations.',
    'Confirm the register was validated with legal advisers and is current.',
    'Review the materiality framework for treatment of matters material by nature rather than amount.',
    'For identified non-compliance, confirm each instance is recorded and reported regardless of value.',
    'Assess whether fraud risk in the compliance context was considered and documented.',
    'Confirm the reporting form — attestation or direct reporting — matches the engagement terms.'
  ],
  testing:'Build the authorities register independently from the entity\'s own list — using the founding legislation, appropriation instruments and regulatory correspondence — and compare. Authorities present in the independent compilation but absent from the entity\'s register indicate a compliance framework gap that testing against the entity\'s own list would never reveal.',
  evidence:[
    'Register of applicable authorities with validation evidence',
    'Founding legislation and appropriation instruments',
    'Materiality framework and its application',
    'Working papers recording compliance testing and exceptions',
    'Escalation records for suspected intentional non-compliance',
    'Issued report and management responses'
  ],
  redFlags:[
    'Authorities register unchanged despite legislative amendment in the period',
    'Non-compliance identified in working papers but absent from the report',
    'Materiality expressed purely as a monetary threshold',
    'Repeated non-compliance of the same nature across periods with no escalation',
    'Management response acknowledging breach without committing to remediation',
    'Compliance testing concentrated on financial transactions only'
  ],
  findings:[
    'The register of applicable authorities was incomplete and had not been validated with legal advisers',
    'Materiality was applied by monetary amount alone, excluding matters material by nature',
    'Instances of non-compliance recorded in working papers were not carried into the report'
  ],
  causes:[
    'Authorities register compiled at first engagement and carried forward without revalidation',
    'Materiality framework adapted from financial audit without adjustment for the compliance context',
    'Reporting threshold applied uniformly, screening out low-value breaches of legality'
  ],
  impacts:'Compliance audit exists to establish whether public funds were used as the legislature authorised. Where authorities are incompletely identified or breaches of legality are screened out by monetary materiality, the audit provides assurance narrower than its readers will reasonably infer.',
  recommendations:[
    'Revalidate the authorities register with legal advisers at each engagement and on any legislative change.',
    'Revise the materiality framework to address matters material by nature and context, with explicit treatment of legality breaches.',
    'Require supervisory confirmation that every instance of identified non-compliance has been evaluated for reporting, with exclusions documented and justified.'
  ],
  references:[
    { t:'ISSAI 4000 Compliance Audit Standard', u:'https://www.issai.org/pronouncements/issai-4000-compliance-audit-standard/' },
    { t:'ISSAI 100 Fundamental Principles of Public-Sector Auditing', u:'https://www.issai.org/pronouncements/issai-100-fundamental-principles-of-public-sector-auditing/' }
  ],
  tags:['issai 4000','compliance audit','authorities','materiality by nature','legality','public sector','intosai']
},

/* ========== BASEL / BIS ========== */
{
  id:'basel-opres', fw:'basel', ref:'BCBS — Operational Resilience', title:'Principles for Operational Resilience',
  domain:'Operational Resilience', tier:'open',
  version:'2021', effective:'2021-03-31', updated:'2026-09-11',
  source:'Basel Committee on Banking Supervision', url:'https://www.bis.org/bcbs/publ/d516.htm',
  summary:'Banks should be able to deliver critical operations through disruption, identifying and mapping the people, processes, technology and third parties on which those operations depend.',
  requirement:'The bank identifies its critical operations, sets impact tolerances for disruption, maps the resources supporting each critical operation, tests its ability to remain within tolerance under severe but plausible scenarios, and remediates vulnerabilities identified.',
  focus:[
    'Whether critical operations are identified from a customer and market impact perspective',
    'Whether impact tolerances are specific and measurable rather than aspirational',
    'Completeness of mapping, particularly to fourth parties',
    'Severity and plausibility of scenarios tested',
    'Whether testing failures lead to remediation or to tolerance revision'
  ],
  risks:[
    { r:'Critical operations identified from an internal rather than customer perspective', i:'High', d:'Operations critical to customers are omitted while internally visible processes are over-represented.' },
    { r:'Impact tolerances set to what is currently achievable', i:'High', d:'The tolerance describes present capability rather than the point beyond which harm occurs, so testing can never fail.' },
    { r:'Mapping stops at the direct third party', i:'High', d:'Concentration in a shared fourth-party provider is invisible until it fails.' },
    { r:'Scenarios calibrated to be survivable', i:'Medium', d:'Testing confirms resilience that has not genuinely been challenged.' }
  ],
  controls:[
    { c:'Critical operations identified using customer and market impact criteria, board approved', t:'Preventive' },
    { c:'Impact tolerances expressed as measurable limits — time, volume, number of customers', t:'Preventive' },
    { c:'End-to-end resource mapping extending to fourth-party dependencies', t:'Detective' },
    { c:'Severe but plausible scenario testing on a defined cycle', t:'Detective' },
    { c:'Remediation tracking for vulnerabilities identified through testing', t:'Corrective' },
    { c:'Board reporting of resilience position and testing outcomes', t:'Detective' }
  ],
  procedures:[
    'Obtain the critical operations list and assess whether identification criteria reflect customer and market impact.',
    'Review impact tolerances for specificity and assess whether each represents a genuine harm threshold.',
    'Examine resource mapping for each critical operation, including third and fourth-party dependencies.',
    'Identify concentration where multiple critical operations depend on a single provider.',
    'Review scenario testing for severity and plausibility, and examine whether any test resulted in failure.',
    'Trace vulnerabilities identified through testing to remediation records and confirm closure.',
    'Confirm resilience reporting reached the board with sufficient detail to support challenge.'
  ],
  testing:'Examine testing outcomes for the absence of failure. A resilience testing programme in which no scenario has ever resulted in breach of tolerance indicates scenarios calibrated to be survivable rather than severe. Separately, trace at least one critical operation end to end through its mapping and independently verify the fourth-party dependencies — mapping that stops at the contracted third party will not reveal that several critical operations rest on the same underlying provider.',
  evidence:[
    'Critical operations list with identification criteria and board approval',
    'Impact tolerance statements with the basis for each',
    'Resource mapping documentation including third and fourth parties',
    'Scenario test plans, execution records and outcomes',
    'Vulnerability remediation tracking',
    'Board and risk committee papers on operational resilience'
  ],
  redFlags:[
    'Critical operations list dominated by internally visible processes',
    'Impact tolerances expressed qualitatively or matching current performance exactly',
    'Mapping ending at the contracted third party',
    'No scenario test having resulted in a tolerance breach',
    'Tolerances revised upward following a failed test rather than the vulnerability being remediated',
    'Multiple critical operations dependent on a single provider with no documented concentration assessment'
  ],
  findings:[
    'Critical operations were identified from an internal operational perspective rather than by customer impact',
    'Resource mapping did not extend to fourth-party dependencies, concealing provider concentration',
    'Impact tolerances were revised following failed testing rather than vulnerabilities being remediated'
  ],
  causes:[
    'Identification exercise led by operations functions without customer or market input',
    'Mapping scope defined by contractual relationship rather than by dependency',
    'Testing governance permits tolerance revision without risk committee challenge'
  ],
  impacts:'Operational resilience is assessed by supervisors on the basis of demonstrated capability rather than documented intent. Where tolerances are set to current capability and revised when tested, the bank cannot demonstrate it has understood the point at which disruption causes harm — which is the central requirement of the principles.',
  recommendations:[
    'Re-perform critical operations identification using customer and market impact criteria, with the revised list approved by the board.',
    'Extend resource mapping to fourth-party dependencies and perform a concentration assessment across critical operations.',
    'Require risk committee approval for any impact tolerance revision, with revision following a failed test explicitly justified against remediation alternatives.'
  ],
  references:[
    { t:'BCBS Principles for Operational Resilience (2021)', u:'https://www.bis.org/bcbs/publ/d516.htm' },
    { t:'BCBS Revisions to Principles for the Sound Management of Operational Risk', u:'https://www.bis.org/bcbs/publ/d515.htm' }
  ],
  tags:['operational resilience','basel','bcbs','impact tolerance','critical operations','third party','fourth party','concentration risk','scenario testing']
},
{
  id:'basel-239', fw:'basel', ref:'BCBS 239', title:'Risk Data Aggregation and Reporting',
  domain:'Risk Data', tier:'open',
  version:'2013', effective:'2016-01-01', updated:'2026-09-11',
  source:'Basel Committee on Banking Supervision', url:'https://www.bis.org/publ/bcbs239.htm',
  summary:'Banks should have strong risk data aggregation capabilities and internal risk reporting practices, enabling accurate, complete and timely risk information to support decision-making.',
  requirement:'Risk data aggregation is governed, accurate, complete, timely and adaptable. Risk reports are accurate, comprehensive, clear, useful, produced at appropriate frequency, and distributed to the relevant parties while preserving confidentiality.',
  focus:[
    'Data lineage from source system to risk report',
    'Extent of manual intervention in the aggregation process',
    'Ability to produce risk information on demand during stress',
    'Reconciliation between risk and finance data',
    'Whether reports enable challenge rather than merely present numbers'
  ],
  risks:[
    { r:'Aggregation dependent on manual spreadsheet intervention', i:'High', d:'Error risk is high, lineage is untraceable, and the process cannot be executed quickly under stress.' },
    { r:'Risk and finance data not reconciled', i:'High', d:'The board receives two different views of exposure with no explanation of the difference.' },
    { r:'Data lineage undocumented', i:'Medium', d:'Errors cannot be traced to source and the accuracy of reported figures cannot be substantiated.' },
    { r:'Reports cannot be produced on demand during stress', i:'High', d:'The capability fails precisely when decision-making most depends on it.' }
  ],
  controls:[
    { c:'Documented data lineage from source system to each risk report line', t:'Preventive' },
    { c:'Automated aggregation with manual intervention logged and justified', t:'Preventive' },
    { c:'Periodic reconciliation between risk and finance data with differences explained', t:'Detective' },
    { c:'Data quality metrics monitored and reported to the risk committee', t:'Detective' },
    { c:'On-demand production capability tested under simulated stress conditions', t:'Detective' },
    { c:'Ownership assigned for each critical risk data element', t:'Preventive' }
  ],
  procedures:[
    'Select a material risk report and trace each significant line back through aggregation to source systems.',
    'Identify every manual intervention in the process and assess its control and justification.',
    'Obtain risk-to-finance reconciliations and evaluate the size and explanation of differences.',
    'Review data quality metrics and assess whether thresholds trigger action.',
    'Test on-demand production by requesting a risk report outside the normal cycle and measuring elapsed time.',
    'Confirm ownership is assigned for critical data elements and that owners understand the role.'
  ],
  testing:'Request a material risk report outside the normal reporting cycle and measure how long production takes and how much manual work it requires. A capability that meets its deadlines on the monthly cycle but requires several days and extensive spreadsheet work when requested ad hoc does not satisfy the timeliness principle, since stress conditions are precisely when off-cycle information is needed.',
  evidence:[
    'Data lineage documentation for sampled report lines',
    'Aggregation process documentation with manual intervention points',
    'Risk-to-finance reconciliations with difference explanations',
    'Data quality metrics and risk committee reporting',
    'Evidence of on-demand production testing and elapsed times',
    'Critical data element ownership register'
  ],
  redFlags:[
    'Material report lines produced through spreadsheets outside controlled systems',
    'Risk and finance exposure figures differing with no documented reconciliation',
    'Data lineage documented only to the data warehouse rather than to source',
    'Data quality metrics reported but never breaching threshold',
    'Ad hoc risk report requests taking substantially longer than cycle reporting',
    'Critical data elements with no assigned owner'
  ],
  findings:[
    'Material risk report lines were produced through manual spreadsheet processes outside controlled systems',
    'Risk and finance exposure data were not reconciled, producing differing views of the same exposure',
    'On-demand production of risk reports took materially longer than cycle production'
  ],
  causes:[
    'Aggregation architecture built incrementally, with spreadsheets bridging gaps between systems',
    'Risk and finance operate separate data models with no reconciliation requirement',
    'Reporting capability optimised for the monthly cycle rather than for on-demand production'
  ],
  impacts:'BCBS 239 compliance remains an area of sustained supervisory focus, with many institutions assessed as materially non-compliant more than a decade after issue. Where aggregation depends on manual intervention, the board receives information whose accuracy cannot be substantiated, and the capability degrades precisely under the stress conditions it exists to serve.',
  recommendations:[
    'Document end-to-end data lineage for material risk report lines and eliminate manual intervention where lineage cannot be traced.',
    'Establish periodic risk-to-finance reconciliation with differences explained and reported to the risk committee.',
    'Test on-demand production under simulated stress at least annually, measuring elapsed time against the timeliness expectation.'
  ],
  references:[
    { t:'BCBS 239 Principles for Effective Risk Data Aggregation and Risk Reporting', u:'https://www.bis.org/publ/bcbs239.htm' }
  ],
  tags:['bcbs 239','risk data aggregation','data lineage','risk reporting','data quality','reconciliation','timeliness','basel']
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
