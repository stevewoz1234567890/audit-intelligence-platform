/* Supporting References. Platform explanations of the frameworks the
   client designed into this library. Official principle and standard
   text stays with the publisher. */
const REF_PAGES = [
  {
    id:'coso', icon:'shield', action:'Explore Principles',
    group:'Internal Control', chip:'frameworks',
    title:"COSO's 17 Principles",
    blurb:'Supporting principles and control guidance.',
    keywords:'coso internal control principles control environment risk assessment',
    status:'Current', eyebrow:'COSO · Internal Control Framework',
    lede:'Explore the five components of internal control.',
    badge:'',
    official:'https://www.coso.org/', officialLabel:'coso.org',
    note:'These notes explain how an internal auditor uses the five components. The principle text itself is published by COSO.',
    groups:[
      { title:'Control Environment', items:[
        { id:'1', num:'1', title:'Demonstrates Commitment to Integrity and Ethical Values',
          summary:'The organisation sets expectations for integrity and ethical behaviour, and people can see that those expectations apply in practice.',
          focus:[
            { t:'Sets the Tone at the Top', d:'Board and management demonstrate ethical behaviour.' },
            { t:'Establishes Standards of Conduct', d:'The organisation sets clear expectations for integrity and ethics.' },
            { t:'Evaluates Adherence', d:'It assesses conformance with ethical standards.' },
            { t:'Addresses Deviations', d:'Deviations from expected conduct are identified and corrected.' }
          ],
          evidence:'Codes of conduct, ethics training, records of how breaches were handled, and board discussion of conduct.',
          risks:'A weak tone lets other controls fail. Look for unchallenged exceptions and inconsistent discipline.',
          procedures:'Read the code of conduct, compare it with how recent breaches were treated, and ask whether leaders follow the same rules.',
          flags:'Repeated exceptions for senior people, or a code that staff cannot describe.' },
        { id:'2', num:'2', title:'Exercises Oversight Responsibility',
          summary:'The board oversees internal control, including how management designs and runs it.',
          focus:[
            { t:'Defines oversight', d:'The board knows which control matters it will supervise.' },
            { t:'Applies expertise', d:'Members have, or can obtain, the knowledge the oversight requires.' },
            { t:'Challenges management', d:'Oversight includes questions, not only receipt of reports.' }
          ],
          evidence:'Board charters, minutes, and the information pack the board actually receives.',
          risks:'A passive board receives assurance it has not tested.',
          procedures:'Read recent minutes for challenge, and compare the pack with the risks the board says it oversees.',
          flags:'Control papers that are noted without discussion.' },
        { id:'3', num:'3', title:'Establishes Structure, Authority, and Responsibility',
          summary:'Roles, reporting lines, and authority are clear enough that people know what they are accountable for.',
          focus:[
            { t:'Assigns responsibility', d:'Control responsibilities sit with named roles.' },
            { t:'Limits authority', d:'Delegation has boundaries and approval rules.' },
            { t:'Keeps lines clear', d:'Reporting lines support, rather than bypass, those responsibilities.' }
          ],
          evidence:'Organisation charts, delegations of authority, and role descriptions.',
          risks:'Unclear authority produces gaps and duplicated work.',
          procedures:'Trace one significant decision from initiation to approval and see whether the delegation matches what happened.',
          flags:'Approvals outside the delegated limits, or roles that nobody can describe.' },
        { id:'4', num:'4', title:'Demonstrates Commitment to Competence',
          summary:'People in control roles have the skills the work requires, and the organisation develops those skills.',
          focus:[
            { t:'Defines competence', d:'Roles state the knowledge and skills required.' },
            { t:'Recruits and develops', d:'Hiring and training follow those requirements.' },
            { t:'Addresses gaps', d:'Shortfalls are identified and responded to.' }
          ],
          evidence:'Role profiles, training records, and succession or backup arrangements.',
          risks:'Control activities fail when the people running them lack the skill.',
          procedures:'Compare the skills required for a key control role with the training and experience of the people in it.',
          flags:'Critical controls held by untrained or constantly rotating staff.' },
        { id:'5', num:'5', title:'Enforces Accountability',
          summary:'People are held to their control responsibilities, including through incentives and consequences.',
          focus:[
            { t:'Sets expectations', d:'Accountability for control is explicit.' },
            { t:'Aligns incentives', d:'Rewards do not undermine the control objectives.' },
            { t:'Applies consequences', d:'Performance against control responsibilities has consequences.' }
          ],
          evidence:'Performance objectives, incentive rules, and records of action taken when responsibilities were missed.',
          risks:'Incentives that reward results without regard to control.',
          procedures:'Read how control duties appear in objectives, and how a recent control failure was treated.',
          flags:'Targets that can be met only by bypassing a control.' }
      ]},
      { title:'Risk Assessment', items:[
        { id:'6', num:'6', title:'Specifies Suitable Objectives',
          summary:'Objectives are clear enough that risks to achieving them can be identified.',
          focus:[
            { t:'States objectives', d:'Operations, reporting, and compliance objectives are specific.' },
            { t:'Fits the organisation', d:'Objectives reflect how the organisation actually works.' },
            { t:'Supports risk assessment', d:'Objectives are precise enough to identify what could go wrong.' }
          ],
          evidence:'Strategy papers, reporting objectives, and compliance obligations linked to named owners.',
          risks:'Vague objectives make later risk assessment decorative.',
          procedures:'Take one objective and test whether a risk owner can say what failure would look like.',
          flags:'Objectives that cannot be observed or measured in any practical way.' },
        { id:'7', num:'7', title:'Identifies and Analyzes Risk',
          summary:'The organisation identifies risks to its objectives and considers how significant they are.',
          focus:[
            { t:'Identifies risk', d:'Risks are linked to objectives, not listed in the abstract.' },
            { t:'Analyzes significance', d:'Likelihood and impact are considered.' },
            { t:'Considers response', d:'Management decides how each significant risk will be treated.' }
          ],
          evidence:'Risk registers, assessments, and the link from a risk to an objective.',
          risks:'Registers that are not used in decisions.',
          procedures:'Select a stated objective and see whether the register contains the risks that could stop it.',
          flags:'A register that has not changed despite an obvious change in the business.' },
        { id:'8', num:'8', title:'Assesses Fraud Risk',
          summary:'Fraud risk is considered separately, including incentives, opportunity, and how the organisation would respond.',
          focus:[
            { t:'Considers incentives', d:'Pressure and opportunity for fraud are discussed.' },
            { t:'Covers relevant types', d:'Fraudulent reporting, asset misuse, and corruption are in view where they apply.' },
            { t:'Plans a response', d:'Controls respond to the fraud risks identified.' }
          ],
          evidence:'Fraud risk assessments and the controls mapped to them.',
          risks:'Fraud treated as a generic item rather than a set of scenarios.',
          procedures:'Read the fraud assessment and test whether a plausible scenario in that activity is covered.',
          flags:'No fraud assessment, or one that never mentions the activity under review.' },
        { id:'9', num:'9', title:'Identifies and Analyzes Significant Change',
          summary:'Change that could affect the system of internal control is identified and assessed.',
          focus:[
            { t:'Watches the environment', d:'External and internal change is considered.' },
            { t:'Assesses the effect', d:'The impact on objectives and controls is analyzed.' },
            { t:'Updates control', d:'Controls change when the risk changes.' }
          ],
          evidence:'Change papers, project risk assessments, and updates to the risk register.',
          risks:'Controls designed for the old process left in place after a system or structure change.',
          procedures:'Pick a recent significant change and see whether controls and the risk register were updated.',
          flags:'A major system go-live with no control reassessment.' }
      ]},
      { title:'Control Activities', items:[
        { id:'10', num:'10', title:'Selects and Develops Control Activities',
          summary:'Control activities are chosen to respond to the risks that matter.',
          focus:[
            { t:'Responds to risk', d:'Each significant risk has a control response.' },
            { t:'Mixes types', d:'Preventive and detective activities are used where each fits.' },
            { t:'Considers the business', d:'Controls are practical for the process they sit in.' }
          ],
          evidence:'Control descriptions linked to risks, and evidence that the activity operates.',
          risks:'Controls that do not address the stated risk.',
          procedures:'Map one high-rated risk to the control that is supposed to respond, then test that control.',
          flags:'A risk with no control, or a control that cannot affect the risk.' },
        { id:'11', num:'11', title:'Selects and Develops General Controls over Technology',
          summary:'Technology general controls support the control activities that depend on systems.',
          focus:[
            { t:'Controls access', d:'Access is limited to people who need it.' },
            { t:'Manages change', d:'System changes are authorised and tested.' },
            { t:'Keeps operations reliable', d:'Processing and backups support dependable information.' }
          ],
          evidence:'Access reviews, change records, and backup or incident logs.',
          risks:'Business controls that assume a system is reliable when general controls are weak.',
          procedures:'Test access to a key system and a recent change to that system.',
          flags:'Shared accounts, or changes moved to production without approval.' },
        { id:'12', num:'12', title:'Deploys through Policies and Procedures',
          summary:'Policies and procedures put the control activities into day-to-day work.',
          focus:[
            { t:'Documents expectations', d:'Policies say what must happen.' },
            { t:'Puts them into practice', d:'Procedures show how the work is done.' },
            { t:'Reviews them', d:'Policies are updated when the process changes.' }
          ],
          evidence:'Policies, procedures, and evidence that staff use the current version.',
          risks:'A policy that describes a process the team no longer follows.',
          procedures:'Walk through a transaction and compare each step with the written procedure.',
          flags:'Staff using informal workarounds that contradict the policy.' }
      ]},
      { title:'Information & Communication', items:[
        { id:'13', num:'13', title:'Uses Relevant Information',
          summary:'The information used to run control is relevant and reliable enough for the decision it supports.',
          focus:[
            { t:'Identifies needs', d:'People know what information the control requires.' },
            { t:'Obtains quality information', d:'Sources and processing support that need.' },
            { t:'Keeps it usable', d:'Information is available when the control runs.' }
          ],
          evidence:'Report definitions, reconciliations, and source-to-report checks.',
          risks:'Decisions taken on information that is late, incomplete, or unreconciled.',
          procedures:'Trace one figure used in a control from the report back to the source.',
          flags:'Management reports that cannot be tied to underlying records.' },
        { id:'14', num:'14', title:'Communicates Internally',
          summary:'Internal communication gives people the control information their responsibilities require.',
          focus:[
            { t:'Reaches the right people', d:'Control messages go to the roles that must act.' },
            { t:'Is clear', d:'People can tell what they are expected to do.' },
            { t:'Allows escalation', d:'There is a path to raise control concerns.' }
          ],
          evidence:'Reporting lines, escalation procedures, and examples of concerns that were raised.',
          risks:'Control failures that stay with the person who cannot fix them.',
          procedures:'Ask how a staff member would raise a control concern, and test a recent example.',
          flags:'No used channel for raising concerns.' },
        { id:'15', num:'15', title:'Communicates Externally',
          summary:'Relevant control information is communicated to external parties, and inbound information is received.',
          focus:[
            { t:'Communicates outward', d:'External parties receive what they need.' },
            { t:'Receives inward', d:'The organisation takes in relevant external information.' },
            { t:'Protects the exchange', d:'Communication is appropriate to the relationship.' }
          ],
          evidence:'External reporting, regulator correspondence, and customer or supplier communications that affect control.',
          risks:'Obligations to inform an external party that are missed.',
          procedures:'Identify one external reporting duty and test whether it was met.',
          flags:'Known obligations with no owner and no evidence of reporting.' }
      ]},
      { title:'Monitoring Activities', items:[
        { id:'16', num:'16', title:'Conducts Ongoing and Separate Evaluations',
          summary:'The organisation checks whether internal control is present and functioning, both in the daily work and through separate reviews.',
          focus:[
            { t:'Monitors in the flow of work', d:'Ongoing checks sit inside the process.' },
            { t:'Uses separate evaluations', d:'Periodic reviews look at the system of control.' },
            { t:'Uses what is learned', d:'Results change the understanding of control.' }
          ],
          evidence:'Monitoring procedures, review reports, and evidence that findings were considered.',
          risks:'Control failures that continue because nobody looks.',
          procedures:'Identify the ongoing check for a key control and a separate evaluation of that area.',
          flags:'Monitoring described in policy and absent from the records.' },
        { id:'17', num:'17', title:'Evaluates and Communicates Deficiencies',
          summary:'Control deficiencies are evaluated and communicated to the people who can act, including senior management and the board when the matter is serious.',
          focus:[
            { t:'Evaluates deficiencies', d:'The organisation judges seriousness.' },
            { t:'Communicates them', d:'The right people are told.' },
            { t:'Tracks correction', d:'Corrective action is followed.' }
          ],
          evidence:'Deficiency logs, reports to management and the board, and closure evidence.',
          risks:'Serious deficiencies that stop at middle management.',
          procedures:'Take a known deficiency and follow who was told and what changed.',
          flags:'Repeat findings with no change in who is informed.' }
      ]}
    ]
  },
  {
    id:'ippf', icon:'book', action:'Open Reference',
    group:'Professional Framework', chip:'frameworks',
    title:'IPPF Reference Material',
    blurb:'Understand the framework and its supporting references.',
    keywords:'ippf mandate charter board quality strategy plan performance measurement supervision',
    status:'Current', eyebrow:'Practical Implementation Guidance',
    lede:'Guidance for Small Internal Audit Functions',
    badge:'',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org/standards',
    note:'These are platform notes for using the standards. They are not a reprint of IIA mandatory guidance.',
    groups:[
      { title:'Mandate & Foundations', items:[
        { id:'mandate', num:'1', title:'Internal Audit Mandate & Charter', sidebarTitle:'Mandate & Charter', challengeLevel:'Low',
          summary:'A written charter sets out internal audit’s purpose, authority, scope, and reporting lines.',
          challenge:'Low capacity, or a charter that was approved once and never revisited.',
          overview:'The charter is the board’s statement of what internal audit is authorised to do. It should be specific enough that management and the board can see the scope and the right of access.',
          guidance:[
            'Keep the charter current and have it approved by the board.',
            'State the right of access to records, people, and systems.',
            'Define clear escalation routes for disagreements and risk concerns.'
          ],
          standards:'Standards 6.1 and 6.2' },
        { id:'board', num:'2', title:'Board Interaction',
          summary:'The chief audit executive has a direct line to the board for the mandate, the plan, and significant concerns.',
          challenge:'Board time that is too short for anything except a status note.',
          overview:'Interaction is useful when the board can question the plan, resources, and restrictions, and when internal audit can raise concerns without going through the managers being reviewed.',
          guidance:[
            'Schedule private access, not only attendance at a management meeting.',
            'Report restrictions on scope as their own item.',
            'Ask the board to approve the plan and material changes to it.'
          ],
          standards:'Standards 6.3 and 8.1' },
        { id:'quality', num:'3', title:'Quality Assurance',
          summary:'The function assesses the quality of its work and reports the result.',
          challenge:'A quality program that exists only as a policy.',
          overview:'Quality covers ongoing supervision, periodic internal assessment, and an external assessment at the required interval. Results are communicated to the board.',
          guidance:[
            'Supervise engagements before the report is issued.',
            'Record internal assessments and the actions taken.',
            'Plan the external assessment early enough to meet the cycle.'
          ],
          standards:'Standards 8.3 and 12.1' }
      ]},
      { title:'Planning the Work', items:[
        { id:'grc', num:'4', title:'Governance, Risk & Control',
          summary:'The plan is built on an understanding of how the organisation is governed, how it manages risk, and how control operates.',
          challenge:'A plan copied forward from last year.',
          overview:'Understanding governance, risk, and control is what makes the plan risk-based rather than a rotation of familiar topics.',
          guidance:[
            'Refresh the understanding when strategy, structure, or systems change.',
            'Use the same risk language as management where it is reliable.',
            'Document why each planned engagement is on the plan.'
          ],
          standards:'Standard 9.1' },
        { id:'strategy', num:'5', title:'Internal Audit Strategy',
          summary:'The function has a strategy for how it will serve the organisation, not only a list of engagements.',
          challenge:'No statement of how the function will develop its coverage or capability.',
          overview:'Strategy connects the mandate to the way the function will work over more than one planning cycle.',
          guidance:[
            'State the coverage priorities and the capability required.',
            'Align the strategy with the board’s expectations of the function.',
            'Review it when the organisation’s strategy changes.'
          ],
          standards:'Standard 9.2' },
        { id:'methods', num:'6', title:'Methodologies & Templates',
          summary:'Methodologies tell the team how engagements are planned, performed, documented, and reviewed.',
          challenge:'Templates that staff bypass because they do not fit the work.',
          overview:'A methodology is useful when it is actually used and when it still matches the standards.',
          guidance:[
            'Keep one current methodology rather than a folder of old forms.',
            'Show how requirements, evidence, and review are recorded.',
            'Update templates when the standards or the function’s approach change.'
          ],
          standards:'Standard 9.3' },
        { id:'plan', num:'7', title:'Risk-Based Audit Plan',
          summary:'The plan sets out the engagements for the period and why they were selected.',
          challenge:'A plan that cannot be delivered with the resources approved.',
          overview:'The board should be able to see the coverage, the exclusions, and the resource assumption.',
          guidance:[
            'Link each engagement to a risk or objective.',
            'Show what was considered and not included.',
            'Report changes to the plan rather than absorbing them silently.'
          ],
          standards:'Standard 9.4' }
      ]},
      { title:'Performing the Work', items:[
        { id:'performance', num:'8', title:'Performance Measurement',
          summary:'The function measures progress toward its objectives and uses the results to improve.',
          challenge:'Measures may focus only on completed engagements rather than the function’s objectives, quality, and stakeholder expectations.',
          overview:'Performance objectives should reflect the Standards, charter, and strategy, with input from the board and senior management.',
          guidance:[
            'Set measures and targets linked to the function’s objectives.',
            'Balance coverage, quality, stakeholder feedback, capability, and delivery measures.',
            'Check reported measures for accuracy and track improvement actions.'
          ],
          standards:'Standard 12.2' },
        { id:'supervision', num:'9', title:'Engagement Supervision',
          summary:'Engagements are supervised so that the work supports the conclusion.',
          challenge:'Review that happens after the report has already been issued.',
          overview:'Supervision covers planning, fieldwork, and the conclusion, with evidence of the review.',
          guidance:[
            'Review the objectives and program before testing starts.',
            'Review evidence before findings are final.',
            'Record the review, including points raised and how they were resolved.'
          ],
          standards:'Standard 12.3' },
        { id:'communication', num:'10', title:'Scope & Final Communication',
          summary:'The final communication says what was done, what was found, and what conclusion the work supports.',
          challenge:'Reports that describe activity without a conclusion.',
          overview:'Scope, criteria, findings, and the conclusion should be consistent with each other.',
          guidance:[
            'State the objectives and scope in the communication.',
            'Separate fact, criteria, cause, and effect.',
            'Make the distribution appropriate to the audience, including the board where the matter requires it.'
          ],
          standards:'Standards 15.1 and 11.3' }
      ]}
    ]
  },
  {
    id:'ethics', icon:'scale', action:'View Reference',
    group:'Professional Framework', chip:'ethics',
    title:'Code of Ethics',
    blurb:'Foundational ethical guidance for internal auditors.',
    keywords:'ethics integrity objectivity confidentiality competency code of ethics',
    status:'Historical', eyebrow:'Professional Ethics',
    lede:'Ethical principles and rules of conduct for internal auditors.',
    badge:'Legacy Reference',
    official:'https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/',
    officialLabel:'Global Internal Audit Standards',
    note:'Historical reference. For current guidance, use Domain II — Ethics and Professionalism.',
    link:'standards.html?domain=II', linkLabel:'View Domain II',
    groups:[
      { title:'Ethical Principles', items:[
        { id:'integrity', num:'1', title:'Integrity',
          summary:'Integrity is the foundation of reliance on the auditor’s judgement.',
          rules:[
            { n:'1.1', t:'Do the work honestly, carefully, and responsibly.' },
            { n:'1.2', t:'Follow the law and make the disclosures that the law and the profession require.' },
            { n:'1.3', t:'Do not knowingly take part in activity that is illegal or that discredits the profession or the organisation.' },
            { n:'1.4', t:'Respect and support the legitimate and ethical objectives of the organisation.' }
          ],
          now:'Principles 1 and the standards under it, including 1.1, 1.2, and 1.3.' },
        { id:'objectivity', num:'2', title:'Objectivity',
          summary:'Objectivity is an impartial assessment, without the auditor subordinating judgement to others.',
          rules:[
            { n:'2.1', t:'Do not take part in activity or a relationship that impairs an unbiased assessment.' },
            { n:'2.2', t:'Do not accept anything that may impair, or appear to impair, professional judgement.' },
            { n:'2.3', t:'Disclose material facts that, if omitted, could distort the report.' }
          ],
          now:'Principle 2 and Standards 2.1, 2.2, and 2.3.' },
        { id:'confidentiality', num:'3', title:'Confidentiality',
          summary:'Information acquired in the work is not used for personal benefit or disclosed without proper authority.',
          rules:[
            { n:'3.1', t:'Be prudent in the use and protection of information acquired in the course of the work.' },
            { n:'3.2', t:'Do not use information for personal gain or in a way that is contrary to the law or to the legitimate objectives of the organisation.' }
          ],
          now:'Principle 5 and Standards 5.1 and 5.2.' },
        { id:'competency', num:'4', title:'Competency',
          summary:'Internal auditors apply the knowledge, skills, and experience needed for the services they perform.',
          rules:[
            { n:'4.1', t:'Engage only in services for which they have the necessary knowledge, skills, and experience.' },
            { n:'4.2', t:'Perform services in accordance with the standards.' },
            { n:'4.3', t:'Continually improve proficiency and the effectiveness and quality of their services.' }
          ],
          now:'Principles 3 and 4, including Standards 3.1, 3.2, 4.1, 4.2, and 4.3.' }
      ]}
    ]
  },
  {
    id:'glossary', icon:'book', action:'View Glossary',
    group:'Terminology', chip:'glossaries',
    title:'Internal Audit Glossary',
    blurb:'Find definitions of key internal audit terms.',
    keywords:'glossary advisory assurance board charter engagement finding criteria condition cause effect',
    status:'Current', eyebrow:'Terminology & Definitions',
    lede:'Explore the terminology used throughout the Global Internal Audit Standards.',
    badge:'',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org',
    note:'Platform definitions, written so this library uses one vocabulary. They are not the IIA glossary. For the official definition, consult the Standards.',
    groups:[
      { title:'Browse Terms', items:[
        { id:'activity', title:'Activity under Review', letter:'A',
          definition:'The process, area, or topic that an engagement is examining.',
          examples:['Payroll for a specified period.','A system implementation before go-live.'],
          related:['engagement','scope'] },
        { id:'advisory', title:'Advisory Services', letter:'A',
          definition:'Services that support stakeholders without providing assurance or assuming management responsibilities. Their nature and scope are agreed with the relevant stakeholders.',
          examples:['Facilitation of a risk workshop.','Advice on a control design before a process goes live.'],
          distinction:{ left:'Assurance', leftText:'An objective assessment that increases confidence.', right:'Advisory Services', rightText:'Advice within an agreed scope, without assuming management responsibilities.' },
          related:['assurance','independence'] },
        { id:'assurance', title:'Assurance Services', letter:'A',
          definition:'An objective assessment of evidence so that the board and management can rely on a conclusion about the subject of the engagement.',
          examples:['An opinion on whether a control operated as designed.','A conclusion on whether a risk is being managed within the stated appetite.'],
          related:['advisory','evidence','finding'] },
        { id:'board', title:'Board', letter:'B',
          definition:'The governing body accountable for oversight. In this library the term includes a committee of that body when the committee holds the relevant oversight role.',
          examples:['A board audit committee that approves the internal audit charter.'],
          related:['charter','independence'] },
        { id:'cause', title:'Cause', letter:'C',
          definition:'Why the condition differs from the criteria.',
          examples:['The procedure was not updated after the system changed.'],
          related:['condition','criteria','effect','finding'] },
        { id:'charter', title:'Charter', letter:'C',
          definition:'The board-approved statement of internal audit’s purpose, authority, and responsibility.',
          examples:['A charter that sets access rights and reporting lines.'],
          related:['board','mandate'] },
        { id:'competency', title:'Competency', letter:'C',
          definition:'The knowledge, skills, and experience required to perform the responsibilities assigned.',
          examples:['An engagement team that includes a person who understands the system being reviewed.'],
          related:['engagement'] },
        { id:'compliance', title:'Compliance', letter:'C',
          definition:'Acting in accordance with laws, regulations, contracts, and the organisation’s own policies.',
          examples:['Testing whether payments follow the delegation policy.'],
          related:['criteria'] },
        { id:'condition', title:'Condition', letter:'C',
          definition:'What the engagement found, stated as fact.',
          examples:['Three of twenty-five sampled payments had no approval on the invoice.'],
          related:['criteria','cause','effect','finding'] },
        { id:'conflict', title:'Conflict of Interest', letter:'C',
          definition:'A situation in which an interest could impair, or appear to impair, the auditor’s objectivity.',
          examples:['Reviewing a process the auditor helped design in a recent role.'],
          related:['objectivity','independence'] },
        { id:'control', title:'Control', letter:'C',
          definition:'An action that modifies risk. On this platform, controls are described as preventive, detective, or corrective.',
          examples:['A system block on a payment above the delegated limit.'],
          related:['risk'] },
        { id:'criteria', title:'Criteria', letter:'C',
          definition:'The standard, policy, or expectation against which a condition is compared.',
          examples:['The requirement in the delegation policy for a second approval above a stated amount.'],
          related:['condition','finding'] },
        { id:'effect', title:'Effect', letter:'E',
          definition:'The risk or consequence of the difference between condition and criteria.',
          examples:['Unauthorised payments could be made and not detected by the current review.'],
          related:['cause','condition','finding'] },
        { id:'engagement', title:'Engagement', letter:'E',
          definition:'A specific internal audit assignment with its own objectives, scope, and conclusion.',
          examples:['A review of procurement for the current financial year.'],
          related:['activity','scope','work-program'] },
        { id:'evidence', title:'Evidence', letter:'E',
          definition:'Information that is sufficient, reliable, relevant, and useful for the conclusion the engagement reaches.',
          examples:['A sample of approved invoices tied to the system record.'],
          related:['assurance','finding'] },
        { id:'finding', title:'Finding', letter:'F',
          definition:'A conclusion, drawn from criteria, condition, cause, and effect, that the engagement communicates.',
          examples:['Approvals above the limit were not obtained, because the workflow no longer enforces the rule.'],
          related:['criteria','condition','cause','effect'] },
        { id:'independence', title:'Independence', letter:'I',
          definition:'Freedom from conditions that threaten the ability of internal audit to carry out its responsibilities in an unbiased manner. It is a feature of the function’s position, not only of one person’s state of mind.',
          examples:['A reporting line to the board that does not pass through the manager of the activity under review.'],
          related:['objectivity','board'] },
        { id:'mandate', title:'Mandate', letter:'M',
          definition:'The authority the board gives internal audit, including the scope of services and the right of access.',
          examples:['Authority to review any activity relevant to the approved plan.'],
          related:['charter','board'] },
        { id:'objectivity', title:'Objectivity', letter:'O',
          definition:'An unbiased mental attitude that allows internal auditors to perform engagements in such a way that they believe in their work product and no quality compromises are made.',
          examples:['Disclosing a prior role in the process and arranging for another auditor to perform the assessment.'],
          related:['independence','conflict'] },
        { id:'scope', title:'Scope', letter:'S',
          definition:'What the engagement includes, and what is explicitly outside it.',
          examples:['Payments for one legal entity, excluding payroll.'],
          related:['engagement','activity'] },
        { id:'work-program', title:'Work Program', letter:'W',
          definition:'The set of procedures that will be performed to achieve the engagement objectives.',
          examples:['A program that lists the sample, the test, and the evidence to retain.'],
          related:['engagement','evidence'] }
      ]}
    ]
  },
  {
    id:'risk-glossary', icon:'alert', action:'Explore Glossary',
    group:'Terminology', chip:'glossaries',
    title:'Risk Management Glossary',
    blurb:'Find definitions of key risk management terms.',
    keywords:'risk appetite residual inherent control likelihood impact owner kri',
    status:'Current', eyebrow:'Terminology & Definitions',
    lede:'Explore risk, governance and control terminology.',
    badge:'',
    official:'https://www.theiia.org/en/standards/', officialLabel:'theiia.org',
    note:'Platform definitions for risk language used beside the standards. They are not a reproduction of COSO ERM or ISO 31000.',
    groups:[
      { title:'Browse Terms', items:[
        { id:'acceptable', title:'Acceptable Risk', letter:'A',
          definition:'The level of residual risk the organisation is willing to bear in pursuit of its objectives.',
          source:'Platform note. Compare with the organisation’s own risk appetite statement.',
          related:['appetite','residual'] },
        { id:'appetite', title:'Risk Appetite', letter:'R',
          definition:'The amount and type of risk an organisation is prepared to pursue or retain.',
          examples:['A stated limit on credit exposure that management is authorised to accept.'],
          related:['acceptable','tolerance'] },
        { id:'control-risk', title:'Control', letter:'C',
          definition:'An action that modifies risk. It may prevent the event, detect it, or correct its effect.',
          examples:['A reconciliation that detects an unmatched payment.'],
          related:['inherent','residual'] },
        { id:'impact', title:'Impact', letter:'I',
          definition:'The consequence if a risk event occurs, described in terms that fit the objective at risk.',
          examples:['A financial loss, a reporting error, or a regulatory breach.'],
          related:['likelihood','inherent'] },
        { id:'inherent', title:'Inherent Risk', letter:'I',
          definition:'The level of risk before considering controls that address it.',
          examples:['The risk of duplicate payment before the matching control is taken into account.'],
          related:['residual','control-risk'] },
        { id:'kri', title:'Key Risk Indicator', letter:'K',
          definition:'A measure that signals a change in the level of a risk, early enough to act.',
          examples:['The percentage of payments processed outside the standard workflow.'],
          related:['residual','appetite'] },
        { id:'likelihood', title:'Likelihood', letter:'L',
          definition:'The chance that a risk event will occur within the period being considered.',
          examples:['An assessed chance that a key supplier will fail during the contract term.'],
          related:['impact','inherent'] },
        { id:'owner', title:'Risk Owner', letter:'R',
          definition:'The person accountable for managing a risk, including the response and the monitoring.',
          examples:['The process owner named against a risk in the register.'],
          related:['response','residual'] },
        { id:'residual', title:'Residual Risk', letter:'R',
          definition:'The level of risk that remains after controls have been taken into account.',
          examples:['The risk of duplicate payment that remains after the matching control operates.'],
          related:['inherent','acceptable','control-risk'] },
        { id:'response', title:'Risk Response', letter:'R',
          definition:'The choice to avoid, accept, reduce, or share a risk.',
          examples:['Adding a control, buying insurance, or stopping an activity.'],
          related:['owner','residual'] },
        { id:'tolerance', title:'Risk Tolerance', letter:'R',
          definition:'The boundaries of acceptable variation in performance related to achieving an objective.',
          examples:['A permitted error rate below which no further action is required.'],
          related:['appetite','acceptable'] }
      ]}
    ]
  },
  {
    id:'2017', icon:'book', action:'Open Book',
    group:'Historical', chip:'historical',
    title:'2017 IIA Standards',
    blurb:'Historical standards for reference.',
    keywords:'2017 standards 1000 1100 1200 1300 2000 2100 2200 attribute performance historical',
    status:'Superseded', eyebrow:'Historical Reference',
    lede:'International Standards for the Professional Practice of Internal Auditing.',
    badge:'Historical',
    official:'https://www.theiia.org/en/standards/2024-standards/global-internal-audit-standards/',
    officialLabel:'2024 Global Internal Audit Standards',
    note:'Historical reference. The 2017 standards were superseded by the Global Internal Audit Standards. Use them only to read older working papers. Do not cite them as the current requirements.',
    link:'standards.html', linkLabel:'View Current Standards',
    groups:[
      { title:'Attribute Standards · 1000–1322', items:[
        { id:'1000', num:'1000', title:'Purpose, Authority, and Responsibility',
          summary:'The purpose, authority, and responsibility of internal audit had to be set out in a charter, consistent with the mission of internal audit and the mandatory parts of the then framework.',
          points:['The charter defined the mandate.','The chief audit executive reviewed the charter periodically.','The charter was presented to senior management and the board for approval.'],
          assurance:'1000.A1 described the nature of assurance services.',
          consulting:'1000.C1 described the nature of consulting services.',
          now:'Domain I and Standards 6.1 and 6.2.' },
        { id:'1010', num:'1010', title:'Recognizing Mandatory Guidance',
          summary:'The charter had to recognise the mandatory nature of the then definition, the Code of Ethics, and the standards.',
          points:['The charter named the mandatory guidance.','Readers of the charter could see that conformance was required.'],
          assurance:'The recognition applied to assurance work.',
          consulting:'The recognition applied to consulting work as well.',
          now:'The Global Internal Audit Standards are now the mandatory core. See the charter requirements in Domain III.' },
        { id:'1100', num:'1100', title:'Independence and Objectivity',
          summary:'Internal audit activity had to be independent, and internal auditors had to be objective in their work.',
          points:['Independence was about the function’s position.','Objectivity was about the auditor’s impartial judgement.'],
          assurance:'Assurance work required freedom from interference in scope and reporting.',
          consulting:'Consulting work still required disclosure where objectivity could be impaired.',
          now:'Principle 2 and Principle 7.' },
        { id:'1200', num:'1200', title:'Proficiency and Due Professional Care',
          summary:'Engagements had to be performed with the proficiency and care the work required.',
          points:['The team needed the right knowledge and skills.','Care included the cost and benefit of assurance and the significance of the risks.'],
          assurance:'Assurance conclusions depended on sufficient competence and care.',
          consulting:'Consulting work was declined or staffed where competence was lacking.',
          now:'Principles 3 and 4.' },
        { id:'1300', num:'1300', title:'Quality Assurance and Improvement Program',
          summary:'The chief audit executive had to develop and maintain a program that covered all aspects of the activity.',
          points:['The program included internal and external assessments.','Results were communicated to senior management and the board.'],
          assurance:'The program covered assurance engagements.',
          consulting:'The program covered consulting engagements.',
          now:'Standards 8.3, 12.1, and 12.2.' }
      ]},
      { title:'Performance Standards · 2000–2600', items:[
        { id:'2000', num:'2000', title:'Managing the Internal Audit Activity',
          summary:'The chief audit executive had to manage the activity so that it added value to the organisation.',
          points:['Management of the activity included the plan, resources, policies, and coordination.','The activity reported to senior management and the board.'],
          assurance:'The plan showed assurance coverage.',
          consulting:'Consulting work was considered in the plan where it was part of the mandate.',
          now:'Domain IV, Principles 9 to 12.' },
        { id:'2100', num:'2100', title:'Nature of Work',
          summary:'Internal audit evaluated and contributed to the improvement of governance, risk management, and control processes.',
          points:['The work addressed governance, risk, and control.','The focus followed the organisation’s objectives and risks.'],
          assurance:'Assurance engagements assessed those processes.',
          consulting:'Consulting engagements advised on them without assuming management’s role.',
          now:'Domain I and Standard 9.1.' },
        { id:'2200', num:'2200', title:'Engagement Planning',
          summary:'Internal auditors developed and documented a plan for each engagement.',
          points:['The plan covered objectives, scope, timing, and resource allocation.','Criteria and the work program were established before the conclusion.'],
          assurance:'Assurance plans stated the criteria for the assessment.',
          consulting:'Consulting plans stated the agreed objectives and scope.',
          now:'Principle 13.' },
        { id:'2300', num:'2300', title:'Performing the Engagement',
          summary:'Internal auditors identified, analyzed, evaluated, and documented sufficient information to achieve the engagement objectives.',
          points:['Information had to be sufficient and reliable.','Conclusions were based on appropriate analyses.'],
          assurance:'The evidence supported the assurance conclusion.',
          consulting:'The information supported the advice given.',
          now:'Principle 14.' },
        { id:'2400', num:'2400', title:'Communicating Results',
          summary:'Internal auditors communicated the results of engagements.',
          points:['Communications included the objectives, scope, and results.','They were accurate, objective, clear, concise, constructive, complete, and timely.'],
          assurance:'Assurance communications stated the conclusion.',
          consulting:'Consulting communications reflected the agreed scope.',
          now:'Standards 11.3 and 15.1.' },
        { id:'2500', num:'2500', title:'Monitoring Progress',
          summary:'The chief audit executive established a process to monitor and ensure that management actions had been effectively implemented, or that senior management had accepted the risk of not acting.',
          points:['Actions were followed up.','Acceptance of risk was communicated where management chose not to act.'],
          assurance:'Follow-up applied to assurance actions.',
          consulting:'Follow-up was agreed to the extent appropriate to the consulting work.',
          now:'Standards 15.2 and 11.5.' },
        { id:'2600', num:'2600', title:'Communicating the Acceptance of Risks',
          summary:'When the chief audit executive concluded that management had accepted a level of risk that might be unacceptable to the organisation, the matter was discussed with senior management and, if unresolved, with the board.',
          points:['The judgement was about risk to the organisation, not only about a missed action.','Unresolved matters reached the board.'],
          assurance:'The duty applied where assurance work identified the acceptance of risk.',
          consulting:'The same escalation was available where consulting work revealed such a risk.',
          now:'Standard 11.5.' }
      ]}
    ]
  }
];

function refFlat(page){
  const out = [];
  (page.groups || []).forEach(g => (g.items || []).forEach(item => {
    const bits = [item.summary, item.definition, item.overview, item.challenge, item.evidence, item.risks, item.procedures, item.flags, item.now, item.assurance, item.consulting, item.source];
    if (item.focus) bits.push(item.focus.map(f => f.t + ' ' + f.d).join(' '));
    if (item.rules) bits.push(item.rules.map(r => r.n + ' ' + r.t).join(' '));
    if (item.points) bits.push(item.points.join(' '));
    if (item.guidance) bits.push(item.guidance.join(' '));
    if (item.examples) bits.push(item.examples.join(' '));
    out.push({ h:item.title, p:bits.filter(Boolean).join(' ') });
  }));
  return out;
}

const REFS = REF_PAGES.map(p => ({
  id:p.id, group:p.group, chip:p.chip, title:p.title, blurb:p.blurb,
  keywords:p.keywords, status:p.status, badge:p.badge, official:p.official,
  officialLabel:p.officialLabel, lead:p.lede, action:p.action, icon:p.icon,
  sections:refFlat(p)
}));

function refPage(id){ return REF_PAGES.find(p => p.id === id) || null; }
function refItems(page){
  const items = [];
  (page.groups || []).forEach(g => (g.items || []).forEach(item => items.push({ group:g.title, item:item })));
  return items;
}

/* Search the displayed reference items, not just the six card descriptions. */
function searchReferences(query){
  const low=String(query).toLowerCase();
  const terms=(low.match(/[\p{L}\p{N}]+/gu)||[])
    .filter(t=>t.length>1 && !['what','does','mean','about','the','and','for','with','how','is','of','principle','standard'].includes(t));
  if(!terms.length)return [];
  return REF_PAGES.flatMap(page=>refItems(page).flatMap(({item})=>{
    const text=refFlat({groups:[{items:[item]}]})[0]?.p||'';
    const title=(page.title+' '+item.title+' '+(item.num||'')).toLowerCase();
    const matched=terms.filter(t=>(title+' '+text.toLowerCase()).includes(t));
    if(!matched.length || (terms.length>1 && matched.length<Math.min(2,terms.length)))return [];
    const score=matched.length*10+terms.filter(t=>title.includes(t)).length*18+
      (terms.includes(String(item.num||'').toLowerCase())?50:0)+
      (low.includes(item.title.toLowerCase())?120:0)+
      (low.includes(page.title.toLowerCase())?25:0);
    return [{page,item,text: item.title+' — '+text,score}];
  })).sort((a,b)=>b.score-a.score);
}
