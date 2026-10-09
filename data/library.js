/* ============================================================
   IIA GLOBAL INTERNAL AUDIT STANDARDS — CONTENT
   ------------------------------------------------------------
   One record per standard. Fields follow the structure used in
   the source documents supplied by the client:
     requirement, implementation, conformance, focus, risks,
     controls, procedureTable, testing, evidence, redFlags,
     findings, causes, impacts, recommendations, references
   Records are matched to the navigator by `ref`.
   ============================================================ */

const RECORDS = [
  {
    "id": "iia-13-3",
    "fw": "iia",
    "ref": "Standard 13.3",
    "title": "Risk Assessment in Engagement Planning",
    "domain": "Domain V — Performing Internal Audit Services",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-09-25",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must assess the risks relevant to the activity under review and use that assessment to shape engagement objectives and scope.",
    "requirement": "The internal auditor evaluates the risks relevant to the area under review, considers the likelihood and impact of those risks, and documents how the assessment informed engagement objectives, scope and the testing approach.",
    "focus": [
      "Whether the engagement risk assessment is documented and traceable to the scope actually performed",
      "Alignment between the engagement risk assessment and the organisation's enterprise risk register",
      "Consideration of fraud risk as a distinct category, not folded into general operational risk",
      "Evidence that management's own risk assessment was challenged rather than accepted at face value"
    ],
    "risks": [
      {
        "r": "Engagement scope omits a material risk area",
        "i": "High",
        "d": "Audit provides false assurance over a process that was never examined."
      },
      {
        "r": "Risk assessment performed as a formality after scope was already fixed",
        "i": "Medium",
        "d": "Documentation exists but did not influence the work, undermining the standard's intent."
      },
      {
        "r": "Fraud risk not separately considered",
        "i": "High",
        "d": "Schemes involving management override go undetected."
      }
    ],
    "controls": [
      {
        "c": "Documented engagement risk assessment approved by the engagement supervisor before fieldwork begins",
        "t": "Preventive"
      },
      {
        "c": "Standard risk assessment template linking each identified risk to a planned procedure",
        "t": "Preventive"
      },
      {
        "c": "Supervisory review confirming scope coverage against the assessment",
        "t": "Detective"
      },
      {
        "c": "Periodic quality assurance review sampling completed engagements for assessment adequacy",
        "t": "Detective"
      }
    ],
    "procedures": [
      "Obtain the engagement planning file and locate the documented risk assessment.",
      "Confirm the assessment predates the approved engagement programme by reference to dates and version history.",
      "Trace each risk rated high or medium to a specific planned procedure in the audit programme.",
      "Identify any high-rated risk with no corresponding procedure and obtain the rationale.",
      "Compare the engagement risk assessment against the current enterprise risk register for omissions.",
      "Confirm fraud risk was considered separately and documented."
    ],
    "testing": "Select a sample of engagements completed in the period. For each, verify the risk assessment exists, is dated before the programme approval, and that every high-rated risk maps to at least one procedure. Recalculate coverage as procedures-mapped ÷ high-risks-identified; investigate any engagement below full coverage.",
    "evidence": [
      "Engagement planning memorandum with version history",
      "Documented risk assessment with supervisor sign-off and date",
      "Approved audit programme showing risk-to-procedure mapping",
      "Enterprise risk register extract for the period",
      "Supervisory review notes and clearance"
    ],
    "redFlags": [
      "Risk assessment and audit programme carry the same creation date",
      "Identical risk assessments across engagements in unrelated business areas",
      "High-rated risks with no corresponding fieldwork procedure",
      "Assessment signed off after fieldwork completion"
    ],
    "findings": [
      "Engagement risk assessments were prepared but not demonstrably used to determine scope",
      "Fraud risk was not separately assessed in a majority of engagements sampled",
      "Risk assessments were not updated when scope changed during fieldwork"
    ],
    "causes": [
      "Planning template treats the risk assessment as a compliance artefact rather than a scoping tool",
      "Time pressure at planning stage; assessment completed retrospectively to close the file",
      "Engagement supervisors not trained on the 2024 Standards restructure"
    ],
    "impacts": "Assurance provided to the Board may not address the risks that actually matter to the organisation. In a quality assessment against the Standards, this represents a conformance gap in Domain V.",
    "recommendations": [
      "Amend the planning template so the audit programme cannot be approved until each high-rated risk is mapped to a procedure.",
      "Require the engagement supervisor to evidence challenge of management's risk assessment in the planning memorandum.",
      "Introduce a fraud risk section as a mandatory, separately signed-off element of engagement planning.",
      "Include risk-assessment adequacy as a standing item in the internal quality assurance programme."
    ],
    "references": [
      {
        "t": "IIA Global Internal Audit Standards (2024) — Domain V",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "IIA Implementation Guidance — Engagement Planning",
        "u": "https://www.theiia.org"
      }
    ],
    "tags": [
      "risk assessment",
      "planning",
      "scope",
      "fraud risk",
      "engagement",
      "domain v"
    ]
  },
  {
    "id": "iia-9-4",
    "fw": "iia",
    "ref": "Standard 9.4",
    "title": "Internal Audit Resources",
    "domain": "Domain IV — Managing the Internal Audit Function",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-09-25",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "The chief audit executive must manage resources so the internal audit plan can be delivered, and must escalate where resources are insufficient.",
    "requirement": "The chief audit executive determines the resources — headcount, skills, technology and budget — required to deliver the approved internal audit plan, and communicates the impact of any shortfall to the Board.",
    "focus": [
      "Whether a documented resource assessment supports the approved plan",
      "Skills coverage for specialist areas: IT, data analytics, fraud, treasury",
      "Whether resource constraints were escalated to the Board in writing",
      "Use of co-source or guest auditor arrangements to close capability gaps"
    ],
    "risks": [
      {
        "r": "Audit plan approved without resources to deliver it",
        "i": "High",
        "d": "Coverage gaps emerge late in the year; assurance the Board expected is never provided."
      },
      {
        "r": "Specialist skills absent for technical audit areas",
        "i": "High",
        "d": "IT and data-heavy areas receive superficial coverage."
      },
      {
        "r": "Resource shortfall known but not escalated",
        "i": "Medium",
        "d": "Board unaware that approved coverage will not be achieved."
      }
    ],
    "controls": [
      {
        "c": "Annual resource assessment documented alongside the audit plan",
        "t": "Preventive"
      },
      {
        "c": "Skills matrix maintained and compared against planned engagement types",
        "t": "Detective"
      },
      {
        "c": "Quarterly plan-completion reporting to the Audit Committee with variance explanation",
        "t": "Detective"
      },
      {
        "c": "Formal escalation protocol where plan delivery falls below an agreed threshold",
        "t": "Corrective"
      }
    ],
    "procedures": [
      "Obtain the approved audit plan and the supporting resource assessment.",
      "Recalculate planned auditor-days against available capacity net of leave, training and administration.",
      "Compare the skills matrix against the specialist requirements of planned engagements.",
      "Review Audit Committee minutes for evidence of resource discussion and escalation.",
      "Track plan completion at year end and analyse the reasons for any engagements deferred or dropped."
    ],
    "testing": "Recompute available capacity independently: headcount × working days − leave − training − administrative time. Compare to planned engagement days. Where planned exceeds available, confirm the gap was reported to the Board and trace to the minutes.",
    "evidence": [
      "Approved internal audit plan and resource assessment",
      "Skills matrix and training records",
      "Audit Committee papers and minutes",
      "Timesheet or capacity data for the period",
      "Year-end plan completion analysis"
    ],
    "redFlags": [
      "Plan approved with no supporting resource calculation",
      "Year-on-year plan completion consistently below 80% with no escalation",
      "Specialist engagements repeatedly deferred to the following year",
      "Heavy reliance on overtime to deliver the plan"
    ],
    "findings": [
      "The internal audit plan was approved without a documented resource assessment",
      "Specialist IT audit capability was insufficient for the planned coverage",
      "Plan completion of 68% was not formally escalated to the Audit Committee"
    ],
    "causes": [
      "Resource planning treated as a budgeting exercise separate from audit planning",
      "Recruitment freeze not reflected in the plan submitted for approval",
      "No defined threshold triggering escalation"
    ],
    "impacts": "The Board receives less assurance than it believes it has approved. Repeated under-delivery erodes the credibility of the function and may constitute non-conformance with Domain IV.",
    "recommendations": [
      "Require the audit plan submission to include a resource assessment reconciling planned days to available capacity.",
      "Define a plan-completion threshold below which formal Board escalation is mandatory.",
      "Maintain a skills matrix reviewed annually against the forward plan, with co-source arrangements for identified gaps."
    ],
    "references": [
      {
        "t": "IIA Global Internal Audit Standards (2024) — Domain IV",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "resources",
      "capacity",
      "audit plan",
      "skills",
      "cae",
      "domain iv",
      "board reporting"
    ]
  },
  {
    "id": "iia-11-2",
    "fw": "iia",
    "ref": "Standard 11.2",
    "title": "Effective Communication",
    "domain": "Domain IV — Managing the Internal Audit Function",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-09-25",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal audit communications must be accurate, objective, clear, concise, constructive, complete and timely.",
    "requirement": "Engagement communications convey results in a manner that is accurate and objective, sufficiently clear and concise to be understood, constructive in tone, complete in covering the matters required, and delivered in time to enable action.",
    "focus": [
      "Whether findings state condition, criteria, cause, effect and recommendation distinctly",
      "Elapsed time between fieldwork completion and report issue",
      "Whether management responses include owner and target date",
      "Balance and tone — recognition of effective controls alongside deficiencies"
    ],
    "risks": [
      {
        "r": "Reports issued too late for management to act",
        "i": "Medium",
        "d": "Findings overtaken by events; remediation delayed."
      },
      {
        "r": "Findings lack a stated criterion",
        "i": "High",
        "d": "Observation reads as auditor opinion; management disputes the basis."
      },
      {
        "r": "Root cause not distinguished from condition",
        "i": "High",
        "d": "Remediation addresses the symptom, and the issue recurs."
      }
    ],
    "controls": [
      {
        "c": "Standard finding template enforcing the five elements",
        "t": "Preventive"
      },
      {
        "c": "Reporting service-level standard with elapsed-days monitoring",
        "t": "Detective"
      },
      {
        "c": "Supervisory review of draft reports before issue",
        "t": "Preventive"
      },
      {
        "c": "Management response required before final issue, with owner and date",
        "t": "Preventive"
      }
    ],
    "procedures": [
      "Select a sample of reports issued in the period.",
      "For each finding, confirm the criterion is stated and cites a specific policy, standard or regulation.",
      "Assess whether cause is distinct from condition, not a restatement of it.",
      "Calculate elapsed days from fieldwork close to report issue and compare to the service standard.",
      "Confirm every recommendation carries a named owner and a target date."
    ],
    "testing": "For the sampled reports, score each finding against the five elements. Compute the proportion of findings that are complete. Independently recalculate elapsed reporting days from the fieldwork close date recorded in the working papers, rather than relying on the reported figure.",
    "evidence": [
      "Issued engagement reports",
      "Working papers showing fieldwork completion dates",
      "Reporting service-level standard",
      "Supervisory review evidence on drafts",
      "Management response records"
    ],
    "redFlags": [
      "Cause stated as \"control not operating\" — a restatement of condition",
      "Findings with no criterion reference",
      "Elapsed reporting time exceeding the standard on most engagements",
      "Recommendations with no named owner"
    ],
    "findings": [
      "Root cause analysis was insufficient; cause frequently restated the condition",
      "Average elapsed time from fieldwork close to report issue was 47 days against a 20-day standard",
      "A minority of findings cited a specific criterion"
    ],
    "causes": [
      "Finding template does not enforce separation of condition and cause",
      "Report drafting competes with the next engagement; no protected time allocated",
      "Reviewers focus on factual accuracy rather than finding structure"
    ],
    "impacts": "Findings that do not identify true root cause produce remediation that fails, and the same issue reappears in later audits. Late reporting reduces the value of the work to management and the Board.",
    "recommendations": [
      "Revise the finding template to require cause to be evidenced separately, with reviewer sign-off that cause is not a restatement of condition.",
      "Introduce a reporting service-level standard with monthly monitoring of elapsed days.",
      "Provide root cause analysis training, using the five-whys technique on real engagement findings."
    ],
    "references": [
      {
        "t": "IIA Global Internal Audit Standards (2024) — Standard 11.2",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "reporting",
      "communication",
      "findings",
      "root cause",
      "timeliness",
      "domain iv"
    ]
  },
  {
    "id": "iia-1-1",
    "fw": "iia",
    "ref": "Standard 1.1",
    "title": "Honesty and Professional Courage",
    "domain": "Domain II — Ethics and Professionalism · Principle 1: Demonstrate Integrity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must perform their work with honesty and professional courage, communicating truthfully and never concealing or omitting findings or other relevant information.",
    "requirement": "Internal auditors must perform their work with honesty and professional courage; be truthful, accurate, clear, open and respectful in professional relationships and communications, including when expressing scepticism or opposing views; avoid false, misleading or deceptive statements; never conceal or omit findings or other relevant information; disclose known material facts that could affect the organisation's ability to make informed decisions; and communicate honestly and take appropriate action despite pressure or difficult circumstances. The chief audit executive must provide a supportive environment where auditors can communicate legitimate, evidence-based results, whether favourable or unfavourable.",
    "implementation": [
      "Provide ethics education and practical training on professional courage.",
      "Use mentoring and supervision to strengthen tactful, respectful communication.",
      "Discuss threats to honesty or professional courage with a supervisor.",
      "Include ethical dilemmas in team discussions and training.",
      "Use workpaper reviews, performance evaluations and stakeholder feedback to assess and support ethical behaviour."
    ],
    "conformance": [
      "Training plans that include ethics education.",
      "Records of participation in ethics training.",
      "Performance evaluations addressing honesty and professional courage.",
      "Stakeholder feedback on auditors' honesty and professional courage."
    ],
    "focus": [
      "Accuracy and completeness of audit communications.",
      "Consistency between supporting evidence and reported conclusions.",
      "Handling of pressure to change or suppress findings.",
      "Management support for evidence-based reporting.",
      "Ethics training and performance evaluation."
    ],
    "risks": [
      {
        "r": "Material findings are concealed or weakened under pressure.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Misleading communications result in poorly informed decisions.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Auditors avoid raising concerns because they fear negative consequences.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Insufficient training leaves auditors unprepared for ethical dilemmas.",
        "i": "Medium",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Supervisory review of significant findings against supporting evidence before report issuance.",
        "t": "Preventive"
      },
      {
        "c": "Documented reasons and approvals for material changes to findings and ratings.",
        "t": "Preventive"
      },
      {
        "c": "Defined escalation process for pressure affecting audit results.",
        "t": "Preventive"
      },
      {
        "c": "Ethics training incorporating practical audit scenarios.",
        "t": "Preventive"
      },
      {
        "c": "Periodic review of concerns and feedback for signs of interference.",
        "t": "Detective"
      }
    ],
    "procedureTable": [
      {
        "p": "Compare significant workpaper findings with final reports and investigate unexplained omissions.",
        "e": "Workpapers, draft and final reports"
      },
      {
        "p": "Examine material changes to findings and determine whether they are supported by evidence.",
        "e": "Review comments, version history, approvals"
      },
      {
        "p": "Interview auditors about pressure to alter results and the support available.",
        "e": "Confidential interview records"
      },
      {
        "p": "Review how reported instances of pressure were escalated and resolved.",
        "e": "Correspondence, escalation records, action logs"
      },
      {
        "p": "Assess coverage of honesty and professional courage in training and appraisals.",
        "e": "Training materials, attendance records, appraisal forms"
      }
    ],
    "procedures": [
      "Compare significant workpaper findings with final reports and investigate unexplained omissions.",
      "Examine material changes to findings and determine whether they are supported by evidence.",
      "Interview auditors about pressure to alter results and the support available.",
      "Review how reported instances of pressure were escalated and resolved.",
      "Assess coverage of honesty and professional courage in training and appraisals."
    ],
    "testing": "Compare the significant findings recorded in the workpapers against those appearing in the final issued report. Where a finding has been removed, downgraded or softened, trace the change through the review comments and version history and establish whether a documented, evidence-based justification exists. Unexplained omissions between workpaper and report are the central test of this standard.",
    "evidence": [
      "Workpapers, draft and final reports",
      "Review comments, version history, approvals",
      "Confidential interview records",
      "Correspondence, escalation records, action logs",
      "Training materials, attendance records, appraisal forms"
    ],
    "redFlags": [
      "Findings disappear without documented justification.",
      "Risk ratings are reduced without supporting evidence.",
      "Auditors are instructed not to document sensitive matters.",
      "Final conclusions contradict the workpapers.",
      "Auditors express fear of communicating legitimate concerns."
    ],
    "findings": [
      "Material changes to findings lacked documented justification.",
      "No clear process existed for escalating pressure on auditors.",
      "Ethics training did not address practical professional dilemmas.",
      "Performance evaluations did not address honesty and professional courage."
    ],
    "causes": [
      "No requirement for material changes to findings to carry a documented, evidence-based justification.",
      "Escalation route for pressure on auditors undefined, so concerns have nowhere to go.",
      "Ethics training delivered as policy awareness rather than through practical dilemmas."
    ],
    "impacts": "Where findings can be weakened or removed without documented justification, the assurance provided to the board does not reflect the work actually performed. Auditors who fear consequences for raising legitimate concerns will not raise them, and the function ceases to provide reliable assurance regardless of the quality of its fieldwork.",
    "recommendations": [
      "Require documented, evidence-based justification and approval for every material change to a finding or rating before report issuance.",
      "Establish a defined escalation route for pressure affecting audit results, independent of the line being audited.",
      "Incorporate practical ethical dilemmas into ethics training rather than policy awareness alone.",
      "Address honesty and professional courage explicitly within performance evaluation criteria."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 1, Standard 1.1 — Honesty and Professional Courage",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "honesty",
      "professional courage",
      "integrity",
      "domain ii",
      "ethics",
      "findings",
      "pressure",
      "escalation",
      "cia"
    ]
  },
  {
    "id": "iia-1-2",
    "fw": "iia",
    "ref": "Standard 1.2",
    "title": "Organization’s Ethical Expectations",
    "domain": "Domain II — Ethics and Professionalism · Principle 1: Demonstrate Integrity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must understand, respect, meet and contribute to the organisation’s legitimate and ethical expectations, and report behaviour inconsistent with them.",
    "requirement": "Internal auditors must understand, respect, meet and contribute to the organisation’s legitimate and ethical expectations; recognise conduct that conflicts with those expectations; encourage and promote an ethics-based organisational culture; and report identified behaviour that is inconsistent with ethical expectations in accordance with applicable policies and procedures.",
    "implementation": [
      "Understand the organisation’s code of ethics, code of conduct and related policies.",
      "Consider ethics-related risks and controls in audit planning and individual engagements.",
      "Assess whether policies define how ethical concerns are handled, communicated and escalated.",
      "The chief audit executive should establish an approach for addressing ethical issues and discuss it with the board and senior management.",
      "Where a senior management member has acted contrary to ethical expectations, the chief audit executive should report the violation to the board.",
      "Where a concern involves the board chair, the chief audit executive should report it to the entire board.",
      "Follow up on ethical issues involving senior management or the board and verify that appropriate action has been taken."
    ],
    "conformance": [
      "Records of workshops, training or meetings addressing ethical expectations.",
      "Signed auditor acknowledgments of organisational ethics policies.",
      "Audit plans, work programmes or workpapers addressing ethics-related objectives, risks and controls.",
      "Documentation of ethical concerns communicated to appropriate parties in accordance with policies and relevant legal requirements."
    ],
    "focus": [
      "Clarity and communication of ethical expectations.",
      "Auditors’ understanding of applicable ethics policies.",
      "Integration of ethics-related risks into audit work.",
      "Reporting and escalation of ethical concerns.",
      "Handling of concerns involving senior management or the board.",
      "Follow-up on corrective action."
    ],
    "risks": [
      {
        "r": "Ethical misconduct remains unreported or unresolved.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Concerns involving senior management are handled through an inappropriate reporting route.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Ethics-related risks are omitted from audit planning and testing.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Unclear ethical expectations result in inconsistent behaviour.",
        "i": "Medium",
        "d": ""
      },
      {
        "r": "Reported concerns recur because corrective action is not verified.",
        "i": "High",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Documented and communicated codes of ethics and conduct.",
        "t": "Preventive"
      },
      {
        "c": "Auditor acknowledgments and ethics awareness training.",
        "t": "Preventive"
      },
      {
        "c": "Audit planning prompts addressing relevant ethical risks and controls.",
        "t": "Preventive"
      },
      {
        "c": "Defined reporting and escalation routes, including concerns involving senior management or the board chair.",
        "t": "Preventive"
      },
      {
        "c": "Restricted-access case tracking and verification of corrective action.",
        "t": "Detective"
      }
    ],
    "procedureTable": [
      {
        "p": "Review ethics policies for clear expectations, reporting responsibilities and escalation routes.",
        "e": "Codes, policies, escalation procedures"
      },
      {
        "p": "Verify that auditors receive the policies and acknowledge their responsibilities.",
        "e": "Communications, acknowledgments, training records"
      },
      {
        "p": "Sample audit engagements to assess whether relevant ethical risks and controls were considered.",
        "e": "Risk assessments, audit programmes, workpapers"
      },
      {
        "p": "Sample reported ethical concerns and assess whether they reached the appropriate authority.",
        "e": "Case records, correspondence, relevant meeting minutes"
      },
      {
        "p": "Examine the process for concerns involving senior management or the board chair.",
        "e": "Escalation methodology, restricted-access case documentation"
      },
      {
        "p": "Verify that closed cases have evidence of appropriate corrective action.",
        "e": "Action plans, completion evidence, follow-up records"
      }
    ],
    "procedures": [
      "Review ethics policies for clear expectations, reporting responsibilities and escalation routes.",
      "Verify that auditors receive the policies and acknowledge their responsibilities.",
      "Sample audit engagements to assess whether relevant ethical risks and controls were considered.",
      "Sample reported ethical concerns and assess whether they reached the appropriate authority.",
      "Examine the process for concerns involving senior management or the board chair.",
      "Verify that closed cases have evidence of appropriate corrective action."
    ],
    "testing": "Test the escalation route specifically for concerns involving senior management or the board chair, since this is where the ordinary reporting line breaks down. Select reported concerns and trace each to the authority that received it, confirming the recipient was not within the reporting line of the person implicated. Separately, verify that cases marked closed carry evidence of corrective action rather than administrative closure alone.",
    "evidence": [
      "Codes, policies, escalation procedures",
      "Communications, acknowledgments, training records",
      "Risk assessments, audit programmes, workpapers",
      "Case records, correspondence, relevant meeting minutes",
      "Escalation methodology, restricted-access case documentation",
      "Action plans, completion evidence, follow-up records"
    ],
    "redFlags": [
      "Employees or auditors cannot explain how to report ethical concerns.",
      "Concerns involving senior personnel are repeatedly closed without a documented assessment.",
      "The person implicated controls the handling of the concern.",
      "Similar ethical issues recur despite being marked resolved.",
      "Relevant ethical risks are absent from audit documentation."
    ],
    "findings": [
      "Ethical expectations were not adequately communicated.",
      "Auditors’ acknowledgment of ethics policies was not documented.",
      "Reporting procedures did not address concerns involving senior management or the board chair.",
      "Audit work did not consider relevant ethics-related risks.",
      "Cases were closed without verification of corrective action."
    ],
    "causes": [
      "Ethics policies published without accompanying communication or acknowledgment process.",
      "Escalation procedure drafted for the ordinary reporting line only, with no route where senior management is implicated.",
      "Case closure measured on administrative completion rather than on verified corrective action."
    ],
    "impacts": "Where concerns involving senior management are routed through that same management, the reporting channel cannot function for the cases that matter most. Recurrence of issues marked resolved indicates corrective action was never verified, so the organisation carries risk it believes it has addressed.",
    "recommendations": [
      "Communicate ethical expectations through documented briefing with recorded auditor acknowledgment, not publication alone.",
      "Define an escalation route for concerns involving senior management or the board chair that bypasses the implicated party.",
      "Incorporate ethics-related risks and controls into audit planning prompts so they are considered in every engagement.",
      "Require evidence of implemented corrective action before any ethics case may be closed."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 1, Standard 1.2 — Organization’s Ethical Expectations",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "ethical expectations",
      "code of conduct",
      "escalation",
      "senior management",
      "board chair",
      "corrective action",
      "domain ii",
      "cia"
    ]
  },
  {
    "id": "iia-1-3",
    "fw": "iia",
    "ref": "Standard 1.3",
    "title": "Legal and Ethical Behavior",
    "domain": "Domain II — Ethics and Professionalism · Principle 1: Demonstrate Integrity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must avoid illegal or discreditable activities, comply with relevant laws and regulations, and report identified violations to those authorised to act.",
    "requirement": "Internal auditors must avoid participating in activities that are illegal, discredit the organisation or the internal audit profession, or may harm the organisation or its employees; understand and comply with laws and regulations relevant to the organisation’s industry and operating jurisdictions, including required disclosures; and report identified legal or regulatory violations to individuals or entities authorised to take appropriate action, as specified by applicable laws, regulations, policies and procedures.",
    "implementation": [
      "Where organisational policies do not adequately address situations encountered by internal audit, the chief audit executive may establish a methodology for responding to legal or regulatory violations.",
      "This methodology may include verification that appropriate action has been taken.",
      "The chief audit executive should establish arrangements for supervision, conformance with the standards, and ethical professional behaviour.",
      "Examples of discreditable behaviour include: bullying, harassment or discrimination; lying, deception or misrepresentation of qualifications or certification status; issuing false reports or encouraging others to do so; deliberately minimising, concealing or omitting audit findings, conclusions or ratings; overlooking illegal activities tolerated by the organisation; seeking or disclosing confidential information without proper authorisation; performing audit services while failing to disclose impairments to objectivity or independence; claiming conformance with the standards without supporting evidence; and refusing to accept responsibility for mistakes."
    ],
    "conformance": [
      "Training records covering relevant laws, regulations and professional behaviour.",
      "Auditor acknowledgments of legal and professional responsibilities.",
      "Documented methodologies for handling illegal or discreditable behaviour and organisational violations.",
      "Communications with supervisors or legal counsel concerning potentially illegal or unprofessional actions.",
      "Evidence of supervisory review of workpapers.",
      "Final engagement communications, where applicable."
    ],
    "focus": [
      "Awareness of relevant legal and regulatory obligations.",
      "Ethical and professional conduct within internal audit.",
      "Reporting and handling of identified violations.",
      "Accuracy of professional qualification claims.",
      "Authorised handling of confidential information.",
      "Disclosure of impairments to objectivity or independence.",
      "Support for statements of conformance with the standards."
    ],
    "risks": [
      {
        "r": "Identified legal or regulatory violations are not reported appropriately.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Auditors participate in or overlook discreditable conduct.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Confidential information is obtained or disclosed without authorisation.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Undisclosed impairments compromise audit judgments.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Unsupported qualification or conformance claims mislead stakeholders.",
        "i": "High",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Role-specific updates and training on relevant legal and professional obligations.",
        "t": "Preventive"
      },
      {
        "c": "Documented procedures for handling violations and obtaining legal advice when needed.",
        "t": "Preventive"
      },
      {
        "c": "Qualification verification and periodic certification-status checks.",
        "t": "Preventive"
      },
      {
        "c": "Confidentiality and objectivity declarations, with updates when circumstances change.",
        "t": "Preventive"
      },
      {
        "c": "Access restrictions and authorisation requirements for confidential information.",
        "t": "Preventive"
      },
      {
        "c": "Supervisory review of reports and evidence supporting conformance statements.",
        "t": "Preventive"
      },
      {
        "c": "Case tracking and follow-up on corrective actions.",
        "t": "Detective"
      }
    ],
    "procedureTable": [
      {
        "p": "Assess how auditors identify and remain informed about obligations relevant to their work.",
        "e": "Training records, regulatory updates, internal guidance"
      },
      {
        "p": "Review procedures for responding to violations, including reporting responsibilities and legal consultation.",
        "e": "Methodologies, policies, legal referral procedures"
      },
      {
        "p": "Sample identified violations and trace reporting to the appropriate authorised parties.",
        "e": "Case records, notifications, correspondence"
      },
      {
        "p": "Verify a sample of claimed qualifications and certification statuses using appropriate issuer evidence.",
        "e": "Qualification records, certification-status evidence"
      },
      {
        "p": "Review confidentiality and objectivity declarations and the handling of disclosed impairments.",
        "e": "Declarations, assessments, safeguards, assignment records"
      },
      {
        "p": "Test a sample of sensitive information disclosures for authorisation.",
        "e": "Approvals, access records, disclosure logs"
      },
      {
        "p": "Examine evidence supporting statements that the audit function conforms with the standards.",
        "e": "Quality assessment results, supporting review documentation"
      }
    ],
    "procedures": [
      "Assess how auditors identify and remain informed about obligations relevant to their work.",
      "Review procedures for responding to violations, including reporting responsibilities and legal consultation.",
      "Sample identified violations and trace reporting to the appropriate authorised parties.",
      "Verify a sample of claimed qualifications and certification statuses using appropriate issuer evidence.",
      "Review confidentiality and objectivity declarations and the handling of disclosed impairments.",
      "Test a sample of sensitive information disclosures for authorisation.",
      "Examine evidence supporting statements that the audit function conforms with the standards."
    ],
    "testing": "Verify claimed qualifications and certification statuses directly with the issuing body rather than from internal records, since internal records reproduce whatever was originally asserted. Separately, examine the evidence supporting any statement that the function conforms with the Standards — a conformance claim without a supporting quality assessment is itself a breach of this standard.",
    "evidence": [
      "Training records, regulatory updates, internal guidance",
      "Methodologies, policies, legal referral procedures",
      "Case records, notifications, correspondence",
      "Qualification records, certification-status evidence",
      "Declarations, assessments, safeguards, assignment records",
      "Approvals, access records, disclosure logs",
      "Quality assessment results, supporting review documentation"
    ],
    "redFlags": [
      "An auditor claims a qualification that cannot be substantiated.",
      "An expired or inactive certification is presented as active.",
      "Identified violations have no documented reporting or response.",
      "Sensitive information is shared without authorisation.",
      "Relationships or responsibilities affecting objectivity are not disclosed.",
      "Claims of conformance lack supporting evidence.",
      "Known reporting errors remain uncorrected."
    ],
    "findings": [
      "No documented methodology existed for responding to identified violations.",
      "Required reporting to authorised parties was not evidenced.",
      "Professional qualification records were not verified or updated.",
      "Impairments to objectivity were not disclosed or addressed.",
      "Confidential information was disclosed without appropriate authorisation.",
      "Statements of conformance were not supported by evidence."
    ],
    "causes": [
      "Reliance on organisational policy that does not address situations specific to internal audit.",
      "Qualification records captured at recruitment and never revalidated against issuer records.",
      "Conformance asserted in reporting without a completed quality assessment to support it."
    ],
    "impacts": "Unsupported conformance and qualification claims mislead the board and stakeholders about the capability of the function. Unreported legal or regulatory violations expose the organisation directly and may place the auditor in breach of their own professional and legal obligations.",
    "recommendations": [
      "Establish a documented methodology for responding to identified legal or regulatory violations, including reporting routes and legal consultation.",
      "Verify professional qualifications and certification statuses directly with issuing bodies on a periodic cycle.",
      "Require a completed quality assessment to support any statement of conformance with the Standards.",
      "Implement authorisation requirements and access logging for disclosure of confidential information."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 1, Standard 1.3 — Legal and Ethical Behavior",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "legal behaviour",
      "discreditable conduct",
      "qualifications",
      "certification",
      "confidentiality",
      "conformance",
      "violations",
      "domain ii",
      "cia"
    ]
  },
  {
    "id": "iia-2-1",
    "fw": "iia",
    "ref": "Standard 2.1",
    "title": "Individual Objectivity",
    "domain": "Domain II — Ethics and Professionalism · Principle 2: Maintain Objectivity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must maintain professional objectivity throughout all audit services, applying an impartial and unbiased mindset and recognising and managing potential biases.",
    "principleOverview": "Internal auditors maintain impartiality when performing audit services and making decisions. Objectivity supports balanced professional judgments without inappropriate influence. An independently positioned internal audit function helps auditors maintain this objectivity.",
    "requirement": "Internal auditors must maintain professional objectivity throughout all aspects of internal audit services; apply an impartial and unbiased mindset; base professional judgments on balanced assessments of all relevant circumstances; and recognise and manage potential biases.",
    "implementation": [
      "Exercise professional judgment without compromising it or subordinating it to others.",
      "Use systematic methods for gathering and evaluating information.",
      "Provide training on situations that may impair objectivity and how to address them.",
      "Consider how relationships, activities, assumptions and personal experiences may influence judgments.",
      "Recognise the possibility of misinterpreting information or making unsupported assumptions."
    ],
    "biasTable": [
      {
        "b": "Self-review bias",
        "d": "Insufficient critical scrutiny when reviewing one’s own work, potentially overlooking errors or weaknesses."
      },
      {
        "b": "Familiarity bias",
        "d": "Reliance on previous experience or familiarity that weakens professional scepticism."
      },
      {
        "b": "Prejudice or unconscious bias",
        "d": "Judgments influenced by preconceived views about personal characteristics, backgrounds or beliefs."
      }
    ],
    "conformance": [
      "References to objectivity responsibilities in the internal audit charter.",
      "Policies and procedures addressing objectivity.",
      "Planned and completed objectivity training, including attendance records.",
      "Auditor acknowledgments of objectivity responsibilities and disclosure obligations.",
      "Documented disclosures of potential conflicts or other impairments.",
      "Supervisory review and mentoring records."
    ],
    "focus": [
      "Balanced evaluation of relevant evidence.",
      "Recognition and management of individual biases.",
      "Professional judgment free from inappropriate influence.",
      "Objectivity training and awareness.",
      "Supervisory challenge of unsupported assumptions."
    ],
    "risks": [
      {
        "r": "Biased judgments produce inaccurate findings or conclusions.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Auditors overlook weaknesses when reviewing their own work.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Familiarity leads auditors to accept explanations without sufficient examination.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Personal assumptions result in inconsistent evaluation of evidence.",
        "i": "High",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Documented objectivity policies and auditor acknowledgments.",
        "t": "Preventive"
      },
      {
        "c": "Training using examples of self-review, familiarity and unconscious bias.",
        "t": "Preventive"
      },
      {
        "c": "Workpaper requirements to document relevant evidence and the rationale for conclusions.",
        "t": "Preventive"
      },
      {
        "c": "Supervisory review that challenges assumptions and considers contradictory evidence.",
        "t": "Detective"
      },
      {
        "c": "Reassignment or additional independent review where an identified bias threatens an engagement.",
        "t": "Corrective"
      }
    ],
    "procedureTable": [
      {
        "p": "Review the charter and methodologies for clear objectivity responsibilities.",
        "e": "Audit charter, policies, methodologies"
      },
      {
        "p": "Sample engagement files and assess whether conclusions reflect relevant supporting and contradictory evidence.",
        "e": "Workpapers, evidence records, conclusions"
      },
      {
        "p": "Examine whether significant assumptions were tested and justified.",
        "e": "Analysis, testing results, review comments"
      },
      {
        "p": "Interview auditors about recognising and managing biases.",
        "e": "Interview records, training materials"
      },
      {
        "p": "Review supervisory comments and confirm that identified concerns were resolved.",
        "e": "Review notes, responses, revised workpapers"
      },
      {
        "p": "Check completion of objectivity training and acknowledgments.",
        "e": "Attendance records, signed acknowledgments"
      }
    ],
    "procedures": [
      "Review the charter and methodologies for clear objectivity responsibilities.",
      "Sample engagement files and assess whether conclusions reflect relevant supporting and contradictory evidence.",
      "Examine whether significant assumptions were tested and justified.",
      "Interview auditors about recognising and managing biases.",
      "Review supervisory comments and confirm that identified concerns were resolved.",
      "Check completion of objectivity training and acknowledgments."
    ],
    "testing": "Examine sampled engagement files specifically for contradictory evidence — information that did not support the conclusion reached. Its complete absence across a sample is itself an indicator, since genuine fieldwork ordinarily encounters some evidence pointing the other way. Where contradictory evidence was obtained, assess whether the workpapers explain why it did not alter the conclusion.",
    "evidence": [
      "Audit charter, policies, methodologies",
      "Workpapers, evidence records, conclusions",
      "Analysis, testing results, review comments",
      "Interview records, training materials",
      "Review notes, responses, revised workpapers",
      "Attendance records, signed acknowledgments"
    ],
    "redFlags": [
      "Conclusions are formed before sufficient evidence is obtained.",
      "Contradictory information is dismissed without explanation.",
      "Auditors rely on statements such as “we have always trusted this department.”",
      "Personal views or stereotypes appear in audit judgments.",
      "Reviewers repeatedly identify unsupported assumptions."
    ],
    "findings": [
      "Audit conclusions did not reflect all relevant evidence.",
      "Significant assumptions were not tested or supported.",
      "Objectivity training did not address common sources of bias.",
      "Supervisory reviews did not adequately challenge unsupported judgments.",
      "Identified objectivity concerns were not addressed."
    ],
    "causes": [
      "Workpaper standards require conclusions to be supported but not contradictory evidence to be addressed.",
      "Objectivity training covers policy obligations rather than the specific biases that arise in audit work.",
      "Supervisory review focuses on completeness and accuracy rather than on challenging judgment."
    ],
    "impacts": "Bias operates without the auditor being aware of it, so findings affected by self-review or familiarity appear fully supported to the person who produced them. Where supervisory review does not challenge judgment, there is no point in the process at which bias would be detected.",
    "recommendations": [
      "Require workpapers to document contradictory evidence considered and explain why it did not alter the conclusion.",
      "Build objectivity training around worked examples of self-review, familiarity and unconscious bias in audit settings.",
      "Extend supervisory review to explicit challenge of significant assumptions, with the challenge and response recorded.",
      "Reassign or add independent review where an identified bias threatens an engagement."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 2, Standard 2.1 — Individual Objectivity",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "objectivity",
      "bias",
      "self-review",
      "familiarity",
      "unconscious bias",
      "professional judgment",
      "scepticism",
      "domain ii",
      "cia"
    ]
  },
  {
    "id": "iia-2-2",
    "fw": "iia",
    "ref": "Standard 2.2",
    "title": "Safeguarding Objectivity",
    "domain": "Domain II — Ethics and Professionalism · Principle 2: Maintain Objectivity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Internal auditors must identify and avoid or mitigate impairments to objectivity, decline benefits that may impair it, avoid conflicts of interest, and refrain from assessing activities for which they were previously responsible.",
    "requirement": "Internal auditors must identify and avoid or mitigate actual, potential and perceived impairments to objectivity; decline gifts, rewards, favours or other tangible or intangible benefits that may impair, or be perceived to impair, objectivity; avoid conflicts of interest; resist undue influence from personal interests, other individuals, senior management, people in authority, political circumstances or the surrounding environment; and refrain from assessing specific activities for which they were previously responsible.",
    "assignmentTable": [
      {
        "s": "Assurance over an activity for which the auditor had responsibility within the previous 12 months",
        "r": "Objectivity is presumed to be impaired."
      },
      {
        "s": "Assurance following previous advisory services by the internal audit function",
        "r": "The chief audit executive must confirm that the advisory work does not impair objectivity and assign resources to manage individual objectivity."
      },
      {
        "s": "Assurance over a function for which the chief audit executive has responsibility",
        "r": "An independent party outside the internal audit function must oversee the engagement."
      },
      {
        "s": "Advisory services concerning an activity for which the auditor previously had responsibility",
        "r": "Potential impairments must be disclosed to the requesting party before accepting the engagement."
      }
    ],
    "implementation": [
      "Consider both actual impairments and how circumstances may reasonably appear to others.",
      "Assess personal relationships, financial interests, previous responsibilities and other competing interests.",
      "Establish clear expectations for gifts, rewards, favours and responses to impairments.",
      "Apply the more restrictive policy where internal audit’s gift rules are stricter than the organisation’s general rules.",
      "Examine whether performance evaluations, remuneration, bonuses or incentives could influence audit judgments.",
      "Discuss current and previously disclosed impairments when assigning engagement resources.",
      "Use supervision and workpaper reviews to identify concerns and support balanced conclusions.",
      "Disclose and mitigate unavoidable impairments in accordance with Standard 2.3.",
      "Arrangements that may threaten objectivity include: evaluations or remuneration based primarily on feedback from the management being audited; incentives linked to the number of findings, revenue growth, cost savings or job reductions in the activity under review; and gifts or gratuities provided by management as indirect compensation."
    ],
    "conformance": [
      "Policies for identifying impairments and applying safeguards.",
      "Objectivity training records.",
      "Declarations confirming the absence of known impairments or disclosing potential impairments.",
      "Stakeholder feedback about auditors’ objectivity.",
      "Supervisory review notes.",
      "Remuneration plans.",
      "Board minutes addressing objectivity impairments.",
      "Alternative arrangements for audit activities affected by unavoidable impairments.",
      "Independent external quality assessment results."
    ],
    "focus": [
      "Engagement staffing and previous operational responsibilities.",
      "Actual, potential and perceived conflicts of interest.",
      "Gifts, hospitality, favours and financial relationships.",
      "Assurance assignments following advisory work.",
      "Independent oversight where the chief audit executive has responsibility for the activity.",
      "Performance measures and remuneration arrangements.",
      "Implementation of safeguards."
    ],
    "risks": [
      {
        "r": "Auditors provide assurance over activities they recently managed.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Gifts, financial interests or personal relationships influence audit judgments.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Previous advisory work creates unmanaged self-review threats.",
        "i": "High",
        "d": ""
      },
      {
        "r": "The chief audit executive oversees assurance over a function under their own responsibility.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Incentives encourage excessive findings, suppressed findings or predetermined outcomes.",
        "i": "High",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Engagement-level screening of previous responsibilities, relationships and interests before assignment.",
        "t": "Preventive"
      },
      {
        "c": "Assignment checks that identify responsibility for the activity within the previous 12 months.",
        "t": "Preventive"
      },
      {
        "c": "Gift and benefit rules addressing actual and perceived effects on objectivity.",
        "t": "Preventive"
      },
      {
        "c": "Documented assessment before assurance over areas previously covered by advisory services.",
        "t": "Preventive"
      },
      {
        "c": "Independent oversight outside internal audit for assurance over functions under the chief audit executive’s responsibility.",
        "t": "Preventive"
      },
      {
        "c": "Periodic review of remuneration and performance criteria for objectivity threats.",
        "t": "Detective"
      },
      {
        "c": "Documented safeguards, reassignment decisions and supervisory follow-up.",
        "t": "Corrective"
      }
    ],
    "procedureTable": [
      {
        "p": "Compare engagement assignments with auditors’ previous operational responsibilities and dates.",
        "e": "Assignment records, role histories, transfer dates"
      },
      {
        "p": "Review conflict declarations for relevant relationships, investments and other competing interests.",
        "e": "Declarations, conflict assessments, safeguard records"
      },
      {
        "p": "Examine a sample of gifts or benefits offered or received and assess compliance with applicable rules.",
        "e": "Gift registers, correspondence, decisions"
      },
      {
        "p": "Identify assurance engagements following advisory work and inspect the chief audit executive’s objectivity assessment.",
        "e": "Advisory scope, assurance plans, documented assessments"
      },
      {
        "p": "Verify independent oversight for assurance over functions under the chief audit executive’s responsibility.",
        "e": "Responsibility records, oversight arrangements, review evidence"
      },
      {
        "p": "Assess whether remuneration or appraisal criteria create inappropriate incentives.",
        "e": "Appraisal criteria, bonus arrangements, remuneration plans"
      },
      {
        "p": "Verify that agreed safeguards were implemented and monitored.",
        "e": "Staffing changes, review records, follow-up documentation"
      }
    ],
    "procedures": [
      "Compare engagement assignments with auditors’ previous operational responsibilities and dates.",
      "Review conflict declarations for relevant relationships, investments and other competing interests.",
      "Examine a sample of gifts or benefits offered or received and assess compliance with applicable rules.",
      "Identify assurance engagements following advisory work and inspect the chief audit executive’s objectivity assessment.",
      "Verify independent oversight for assurance over functions under the chief audit executive’s responsibility.",
      "Assess whether remuneration or appraisal criteria create inappropriate incentives.",
      "Verify that agreed safeguards were implemented and monitored."
    ],
    "testing": "Match engagement assignment records against auditors’ role histories and transfer dates as a full population test rather than a sample, since a single assignment within the twelve-month window is the finding. Separately, examine appraisal and bonus criteria for incentives linked to finding counts or to the financial outcomes of the audited activity — these create a threat that no amount of supervisory review will correct.",
    "evidence": [
      "Assignment records, role histories, transfer dates",
      "Declarations, conflict assessments, safeguard records",
      "Gift registers, correspondence, decisions",
      "Advisory scope, assurance plans, documented assessments",
      "Responsibility records, oversight arrangements, review evidence",
      "Appraisal criteria, bonus arrangements, remuneration plans",
      "Staffing changes, review records, follow-up documentation"
    ],
    "redFlags": [
      "An auditor is assigned assurance work over an activity they managed within the previous 12 months.",
      "A gift is considered acceptable solely because it falls below a monetary threshold.",
      "An auditor has an undisclosed close relationship or financial interest relevant to the engagement.",
      "Assurance follows advisory work without an objectivity assessment.",
      "A function under the chief audit executive’s responsibility is audited without outside independent oversight.",
      "Bonuses are linked to finding counts or financial outcomes of the audited activity.",
      "An impairment is disclosed, but no safeguard is implemented."
    ],
    "findings": [
      "Engagement allocation did not consider auditors’ previous responsibilities.",
      "Conflict assessments did not address perceived impairments.",
      "Gift procedures focused only on monetary value.",
      "Assurance following advisory work lacked a documented objectivity assessment.",
      "Required independent oversight was absent.",
      "Performance incentives created unmanaged threats to objectivity.",
      "Agreed safeguards were not implemented."
    ],
    "causes": [
      "Assignment process considers availability and skills but not previous operational responsibility.",
      "Gift policy written around monetary thresholds without addressing perception.",
      "Safeguards agreed at the point of disclosure with no mechanism to confirm implementation."
    ],
    "impacts": "Objectivity impairments are judged by how circumstances reasonably appear as well as by actual influence, so a perceived impairment damages the credibility of the work even where judgment was unaffected. Where safeguards are agreed but not implemented, the organisation holds a record suggesting the threat was managed when it was not.",
    "recommendations": [
      "Screen engagement assignments against auditors’ role histories for responsibility within the previous twelve months, before assignment is confirmed.",
      "Revise gift and benefit rules to address perceived as well as actual impairment, rather than monetary value alone.",
      "Require a documented objectivity assessment by the chief audit executive before assurance is provided over an area previously covered by advisory work.",
      "Review remuneration and appraisal criteria for incentives linked to finding counts or audited-activity outcomes, and remove them.",
      "Track agreed safeguards through to implementation with documented confirmation."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 2, Standard 2.2 — Safeguarding Objectivity",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "Related: Standard 2.3 — Disclosing Impairments to Objectivity",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "Related: Standard 12.3 — Oversee and Improve Engagement Performance",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "Related: Standard 13.5 — Engagement Resources",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "safeguarding objectivity",
      "conflict of interest",
      "gifts",
      "previous responsibility",
      "self-review",
      "advisory",
      "independent oversight",
      "incentives",
      "domain ii",
      "cia"
    ]
  },
  {
    "id": "iia-2-3",
    "fw": "iia",
    "ref": "Standard 2.3",
    "title": "Disclosing Impairments to Objectivity",
    "domain": "Domain II — Ethics and Professionalism · Principle 2: Maintain Objectivity",
    "tier": "ref",
    "version": "2024",
    "effective": "2025-01-09",
    "updated": "2026-10-03",
    "source": "The Institute of Internal Auditors",
    "url": "https://www.theiia.org/standards",
    "summary": "Actual or apparent impairments to objectivity must be disclosed promptly to the appropriate parties, assessed, and resolved through documented corrective action.",
    "requirement": "Actual or apparent impairments to objectivity must be disclosed promptly to the appropriate parties. Auditors who become aware of an impairment that may affect their objectivity must disclose it to the chief audit executive or a designated supervisor. When the chief audit executive determines that an impairment affects an auditor’s ability to perform objectively, the chief audit executive must discuss it with the management of the activity under review, the board, and/or senior management, as appropriate, and determine corrective action. If an impairment affecting the actual or perceived reliability of findings, recommendations or conclusions is discovered after an engagement is completed, the chief audit executive must discuss it with appropriate affected parties and determine how to resolve the situation. If the chief audit executive’s own objectivity is impaired in fact or appearance, the chief audit executive must disclose the impairment to the board.",
    "implementation": [
      "Define disclosure responsibilities, reporting routes and responses within internal audit methodologies.",
      "The chief audit executive generally determines the approach to disclosure and mitigation in agreement with the board and senior management.",
      "Where an impairment cannot be avoided, consider suitable arrangements such as reassigning the affected auditor, rescheduling the engagement to obtain appropriate staff, adjusting the engagement scope, or outsourcing engagement performance or supervision.",
      "Where a planning-stage concern relates solely to a perceived impairment, the chief audit executive may discuss it with the relevant management, explain why the exposure is minimal and how it will be managed, and document the decision.",
      "Consider Standard 7.1 where the chief audit executive assumes responsibilities beyond internal auditing."
    ],
    "conformance": [
      "Methodologies governing disclosure of objectivity impairments.",
      "Documentation disclosing impairments or confirming their absence.",
      "Records of disclosures and the appropriate parties’ responses and/or approval of mitigation."
    ],
    "focus": [
      "Timeliness and completeness of disclosures.",
      "Appropriate reporting and escalation routes.",
      "Assessment and mitigation of disclosed impairments.",
      "Disclosure of the chief audit executive’s own impairments to the board.",
      "Impairments discovered after engagement completion.",
      "Documentation of decisions and follow-up."
    ],
    "risks": [
      {
        "r": "Delayed disclosure allows an impaired auditor to continue influencing the engagement.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Disclosures do not reach parties able to address the situation.",
        "i": "High",
        "d": ""
      },
      {
        "r": "The chief audit executive’s impairment is not disclosed to the board.",
        "i": "High",
        "d": ""
      },
      {
        "r": "Users continue relying on results affected by an impairment discovered after completion.",
        "i": "High",
        "d": ""
      },
      {
        "r": "A disclosed impairment remains unresolved because mitigation is undocumented or ineffective.",
        "i": "High",
        "d": ""
      }
    ],
    "controls": [
      {
        "c": "Documented disclosure procedures identifying recipients, responsibilities and prompt reporting expectations.",
        "t": "Preventive"
      },
      {
        "c": "Engagement declarations updated when relevant circumstances change.",
        "t": "Preventive"
      },
      {
        "c": "Restricted-access register recording disclosures, assessments, decisions and actions.",
        "t": "Detective"
      },
      {
        "c": "Direct board disclosure process for impairments affecting the chief audit executive.",
        "t": "Preventive"
      },
      {
        "c": "Documented mitigation decisions and verification of implementation.",
        "t": "Corrective"
      },
      {
        "c": "Post-engagement assessment and communication process for newly discovered impairments.",
        "t": "Corrective"
      }
    ],
    "procedureTable": [
      {
        "p": "Review the disclosure methodology for actual and apparent impairments, reporting routes and required responses.",
        "e": "Methodologies, disclosure forms, escalation procedures"
      },
      {
        "p": "Sample cases and compare the date the impairment became known with the date of disclosure.",
        "e": "Dated declarations, correspondence, case records"
      },
      {
        "p": "Verify that disclosures reached the chief audit executive or designated supervisor and were escalated appropriately.",
        "e": "Notifications, assessments, meeting records"
      },
      {
        "p": "Examine impairments affecting the chief audit executive and verify disclosure to the board.",
        "e": "Board communications, relevant minutes"
      },
      {
        "p": "Check that mitigation decisions were documented and implemented.",
        "e": "Reassignment records, revised plans, oversight arrangements"
      },
      {
        "p": "Review impairments discovered after completion and assess consideration of report reliability and communication to affected parties.",
        "e": "Completed reports, impact assessments, stakeholder communications"
      },
      {
        "p": "Examine decisions to proceed despite perceived impairments for documented reasoning and safeguards.",
        "e": "Discussion records, risk assessments, final decisions"
      }
    ],
    "procedures": [
      "Review the disclosure methodology for actual and apparent impairments, reporting routes and required responses.",
      "Sample cases and compare the date the impairment became known with the date of disclosure.",
      "Verify that disclosures reached the chief audit executive or designated supervisor and were escalated appropriately.",
      "Examine impairments affecting the chief audit executive and verify disclosure to the board.",
      "Check that mitigation decisions were documented and implemented.",
      "Review impairments discovered after completion and assess consideration of report reliability and communication to affected parties.",
      "Examine decisions to proceed despite perceived impairments for documented reasoning and safeguards."
    ],
    "testing": "Compare the date each impairment became known against the date it was disclosed, taking the former from correspondence and case records rather than from the declaration itself. The gap is the measure of this standard. Where an impairment was discovered after an engagement was completed, confirm that the reliability of the issued report was assessed and that affected parties were informed — the absence of that assessment leaves users relying on results nobody has re-examined.",
    "evidence": [
      "Methodologies, disclosure forms, escalation procedures",
      "Dated declarations, correspondence, case records",
      "Notifications, assessments, meeting records",
      "Board communications, relevant minutes",
      "Reassignment records, revised plans, oversight arrangements",
      "Completed reports, impact assessments, stakeholder communications",
      "Discussion records, risk assessments, final decisions"
    ],
    "redFlags": [
      "Disclosure occurs only after the report is issued, although the concern was known earlier.",
      "The auditor continues unchanged in the assignment after a significant impairment is identified.",
      "A disclosure is recorded without an assessment or response.",
      "The chief audit executive handles their own impairment without informing the board.",
      "A post-engagement impairment is identified without assessing the reliability of issued results.",
      "Decisions to proceed are verbal and undocumented."
    ],
    "findings": [
      "Impairments were not disclosed promptly.",
      "Procedures did not clearly identify appropriate disclosure recipients.",
      "The chief audit executive’s impairment was not disclosed to the board.",
      "Disclosed impairments lacked documented mitigation decisions.",
      "Agreed actions were not implemented or followed up.",
      "Impairments discovered after completion were not assessed for their effect on issued results.",
      "Decisions concerning perceived impairments lacked supporting documentation."
    ],
    "causes": [
      "Disclosure procedure defines the obligation but not the recipient, timing expectation or required response.",
      "No route exists for the chief audit executive to disclose their own impairment other than through themselves.",
      "Decisions to proceed despite a perceived impairment handled verbally, leaving no record of the reasoning."
    ],
    "impacts": "An impairment disclosed after the report is issued cannot be mitigated — the work is already relied upon. Where the chief audit executive's own impairment is not disclosed to the board, the one control designed for that situation does not operate, and the board cannot know its assurance is affected.",
    "recommendations": [
      "Define disclosure recipients, timing expectations and required responses within the methodology, not the obligation alone.",
      "Establish a direct route for the chief audit executive to disclose personal impairments to the board.",
      "Record mitigation decisions in a restricted-access register and verify implementation rather than agreement alone.",
      "Require post-engagement impairments to trigger a documented assessment of report reliability and communication to affected parties.",
      "Document the reasoning and safeguards for any decision to proceed despite a perceived impairment."
    ],
    "references": [
      {
        "t": "IIA, Global Internal Audit Standards, Domain II, Principle 2, Standard 2.3 — Disclosing Impairments to Objectivity",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "Related: Standard 7.1 — Organizational Independence",
        "u": "https://www.theiia.org/standards"
      },
      {
        "t": "Related: Standard 11.4 — Errors and Omissions",
        "u": "https://www.theiia.org/standards"
      }
    ],
    "tags": [
      "disclosure",
      "impairment",
      "objectivity",
      "chief audit executive",
      "board",
      "mitigation",
      "post-engagement",
      "domain ii",
      "cia"
    ]
  }
];
