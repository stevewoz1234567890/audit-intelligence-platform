/* Tables extracted from the supplied PDFs using pdftotext -table. */
const SUPPLIED_TABLES = {
  "3.1": {
    "3": {
      "headers": [
        "Risk                                       Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "Auditors perform assignments without sufficient expertise, resulting in unsupported conclusions.",
          "right": "High"
        },
        {
          "left": "Collective competency gaps prevent adequate coverage of significant risks.",
          "right": "High"
        },
        {
          "left": "Insufficient knowledge of the Standards leads to inconsistent audit practices.",
          "right": "High"
        },
        {
          "left": "Specialist providers are used without adequate assessment of their capabilities.",
          "right": "High"
        },
        {
          "left": "Development activities fail to address demonstrated performance weaknesses.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                     Control Type"
      ],
      "rows": [
        {
          "left": "Maintain a competency framework defining expectations for audit roles.",
          "right": "Preventive"
        },
        {
          "left": "Map available competencies against the audit plan and identify gaps.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Assess team competence before assigning an engagement.",
          "right": "Preventive"
        },
        {
          "left": "Arrange specialist support, recruitment, or supervised development to address gaps.",
          "right": "Preventive / Corrective"
        },
        {
          "left": "Conduct supervisory reviews and periodic performance assessments.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Evaluate external providers’ qualifications, relevant experience, and proposed staffing.",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                      Evidence to Examine",
        "Procedure                                        Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Compare role expectations with auditors’ documented qualifications and experience.",
          "right": "Job descriptions, competency framework, staff profiles"
        },
        {
          "left": "Assess whether the function has the collective expertise needed for planned services.",
          "right": "Audit charter, audit plan, competency matrix, gap analysis"
        },
        {
          "left": "Sample engagements and evaluate whether assigned staff had or obtained the necessary competence.",
          "right": "Staffing decisions, training records, specialist support arrangements"
        },
        {
          "left": "Review how auditors demonstrate knowledge of the Standards.",
          "right": "Training records, assessments, methodologies, reviewed workpapers"
        },
        {
          "left": "Trace identified competency gaps to actions and subsequent evaluation.",
          "right": "Development plans, recruitment records, performance reviews"
        },
        {
          "left": "Evaluate assessments of external specialists or other assurance providers.",
          "right": "Provider evaluations, scope agreements, assurance maps"
        },
        {
          "left": "Examine whether supervision and quality assessments identify recurring competency weaknesses.",
          "right": "Review notes, quality assessment reports, corrective actions"
        }
      ]
    }
  },
  "3.2": {
    "3": {
      "headers": [
        "Risk                                        Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "Outdated knowledge reduces the function’s ability to assess emerging risks.",
          "right": "High"
        },
        {
          "left": "Certification holders fail to meet credential maintenance requirements.",
          "right": "Medium"
        },
        {
          "left": "Development activities do not address the skills needed for planned engagements.",
          "right": "High"
        },
        {
          "left": "Budget or workload constraints repeatedly prevent necessary training.",
          "right": "Medium"
        },
        {
          "left": "Training completion is recorded without evaluating whether learning improves performance.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                  Control Type"
      ],
      "rows": [
        {
          "left": "Maintain individual development plans linked to role requirements and performance feedback.",
          "right": "Preventive"
        },
        {
          "left": "Establish a function-wide development plan with appropriate resources.",
          "right": "Preventive"
        },
        {
          "left": "Track certification-specific education requirements and relevant deadlines.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Retain evidence supporting completed development activities.",
          "right": "Detective"
        },
        {
          "left": "Review progress periodically and address overdue development actions.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Assess practical learning through feedback, supervised assignments, and engagement reviews.",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                     Evidence to Examine",
        "Procedure                                Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Review whether all auditors have appropriate continuing development arrangements.",
          "right": "Development plans, staff roster, performance reviews"
        },
        {
          "left": "Compare planned learning with competency gaps and upcoming audit needs.",
          "right": "Competency assessments, audit plan, training schedule"
        },
        {
          "left": "Evaluate whether budgets and workloads allow necessary development.",
          "right": "Training budget, expenditure, attendance, cancellation records"
        },
        {
          "left": "For sampled credential holders, compare completed activities with applicable certification requirements.",
          "right": "Credential requirements, education logs, completion evidence"
        },
        {
          "left": "Examine whether development addresses ethics and relevant emerging topics.",
          "right": "Course content, learning plans, attendance records"
        },
        {
          "left": "Assess whether completed learning is applied in practice.",
          "right": "Workpapers, supervisor feedback, post-training evaluations"
        },
        {
          "left": "Review how missed training and overdue development actions are resolved.",
          "right": "Progress reports, revised plans, follow-up records"
        }
      ]
    }
  },
  "4.1": {
    "3": {
      "headers": [
        "Risk                                                              Indicative",
        "rating"
      ],
      "rows": [
        {
          "left": "Outdated methodologies result in audit work that does not conform with the Standards.",
          "right": "High"
        },
        {
          "left": "Engagement teams apply requirements inconsistently.",
          "right": "High"
        },
        {
          "left": "Nonconformance is not identified or appropriately disclosed.",
          "right": "High"
        },
        {
          "left": "Alternative actions are adopted without assessing their effect on engagement quality.",
          "right": "High"
        },
        {
          "left": "Communications omit other authoritative requirements used in the engagement.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                                 Type",
        "Suggested control                                               Type"
      ],
      "rows": [
        {
          "left": "Documented mapping of applicable requirements to audit methodologies and procedures.",
          "right": "Preventive"
        },
        {
          "left": "Defined responsibility for monitoring changes and updating methodologies.",
          "right": "Preventive"
        },
        {
          "left": "Version-controlled methodology documents with communicated effective dates.",
          "right": "Preventive"
        },
        {
          "left": "Supervisory review of engagement plans, workpapers, and reports for conformance.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Nonconformance register recording circumstances, alternative actions, impact, rationale, and disclosures.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Quality assessments with tracked improvement actions.",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                           Required evidence"
      ],
      "rows": [
        {
          "left": "Compare audit methodologies with applicable Standards requirements and identify gaps.",
          "right": "Methodology manual, requirements mapping, gap assessments"
        },
        {
          "left": "Examine how changes to the Standards are assessed, incorporated, and communicated.",
          "right": "Update logs, revised procedures, staff communications"
        },
        {
          "left": "Sample engagements and assess whether planning, execution, and reporting follow the methodologies.",
          "right": "Engagement plans, workpapers, final reports"
        },
        {
          "left": "Review identified nonconformance cases for documented circumstances, alternative actions, impact, and rationale.",
          "right": "Nonconformance register, supporting assessments"
        },
        {
          "left": "Verify that nonconformance was communicated to appropriate parties.",
          "right": "Final reports, board or management communications"
        },
        {
          "left": "For claimed legal restrictions, inspect the documented basis and continued conformance with unaffected requirements.",
          "right": "Relevant legal provisions, assessments, disclosures"
        },
        {
          "left": "Review quality assessment findings and the implementation of improvement actions.",
          "right": "Assessment reports, action plans, closure evidence"
        }
      ]
    }
  },
  "4.2": {
    "3": {
      "headers": [
        "Risk                                                Indicative  rating"
      ],
      "rows": [
        {
          "left": "Significant risks are omitted from the engagement scope.",
          "right": "High"
        },
        {
          "left": "Testing is insufficient for the complexity or significance of the activity.",
          "right": "High"
        },
        {
          "left": "Fraud, error, or noncompliance risks are not adequately considered.",
          "right": "High"
        },
        {
          "left": "Stakeholder interests or potential harm are overlooked.",
          "right": "High"
        },
        {
          "left": "Excessive work on low-risk areas diverts resources from significant issues.",
          "right": "Medium"
        },
        {
          "left": "Poor timing or unsuitable techniques reduce the usefulness of audit results.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                                Type"
      ],
      "rows": [
        {
          "left": "Engagement planning requirements covering objectives, stakeholders, governance, risks, and controls.",
          "right": "Preventive"
        },
        {
          "left": "Documented rationale linking significant risks to scope and testing procedures.",
          "right": "Preventive"
        },
        {
          "left": "Explicit consideration of fraud, error, and noncompliance during risk assessment.",
          "right": "Preventive"
        },
        {
          "left": "Review of planned effort, timing, resource needs, and expected benefits.",
          "right": "Preventive"
        },
        {
          "left": "Assessment of control design before determining operating-effectiveness testing.",
          "right": "Preventive"
        },
        {
          "left": "Documented consideration of suitable audit tools and data analysis techniques.",
          "right": "Preventive"
        },
        {
          "left": "Supervisory review and adjustment of work when new risks emerge.",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                        Required evidence"
      ],
      "rows": [
        {
          "left": "Review whether engagement planning identifies relevant organizational and activity-level objectives.",
          "right": "Strategy documents, planning memoranda, engagement objectives"
        },
        {
          "left": "Assess whether relevant stakeholder interests and potential impacts were considered.",
          "right": "Stakeholder assessments, meeting records, planning notes"
        },
        {
          "left": "Trace significant risks to the engagement scope and work program.",
          "right": "Risk assessments, scope documents, audit programs"
        },
        {
          "left": "Examine the assessment of fraud, error, and noncompliance risks.",
          "right": "Risk discussions, relevant analyses, planned responses"
        },
        {
          "left": "Evaluate whether testing extent and timing are appropriate to risk and complexity.",
          "right": "Testing plans, sample rationale, schedules"
        },
        {
          "left": "Review the basis for decisions about control design and operating-effectiveness testing.",
          "right": "Process walkthroughs, design assessments, testing records"
        },
        {
          "left": "Assess whether resource and technology choices support engagement objectives efficiently.",
          "right": "Resource plans, budgets, tool assessments, analysis outputs"
        },
        {
          "left": "Confirm that supervision addressed new information and necessary changes to the work.",
          "right": "Review notes, revised programs, approvals"
        }
      ]
    }
  },
  "4.3": {
    "3": {
      "headers": [
        "Risk                                       Indicative  rating"
      ],
      "rows": [
        {
          "left": "Unsupported management statements are accepted as sufficient evidence.",
          "right": "High"
        },
        {
          "left": "False or misleading information leads to inaccurate conclusions.",
          "right": "High"
        },
        {
          "left": "Contradictions remain unresolved when the report is issued.",
          "right": "High"
        },
        {
          "left": "Incomplete information conceals significant errors or control weaknesses.",
          "right": "High"
        },
        {
          "left": "Familiarity or confirmation bias limits further inquiry.",
          "right": "High"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                         Type"
      ],
      "rows": [
        {
          "left": "Evidence-evaluation procedures addressing source reliability, relevance, and sufficiency.",
          "right": "Preventive"
        },
        {
          "left": "Corroboration of significant management explanations with appropriate supporting evidence.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Exception tracking for contradictory, incomplete, or potentially misleading information.",
          "right": "Detective"
        },
        {
          "left": "Documented additional testing and resolution of significant inconsistencies before concluding.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Supervisory review that challenges unsupported conclusions and unresolved contradictions.",
          "right": "Detective"
        },
        {
          "left": "Scenario-based training and coaching on professional skepticism.",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                   Required evidence",
        "Procedure                                          Required evidence"
      ],
      "rows": [
        {
          "left": "Select significant conclusions and trace them to relevant, reliable, and sufficient supporting evidence.",
          "right": "Workpapers, source records, analysis"
        },
        {
          "left": "Identify significant management explanations and assess how they were corroborated.",
          "right": "Interview notes, supporting documents, confirmations"
        },
        {
          "left": "Review contradictory information and determine whether additional work resolved the differences.",
          "right": "Exception logs, follow-up requests, additional tests"
        },
        {
          "left": "Assess how the team responded to missing, inconsistent, or potentially misleading records.",
          "right": "Evidence requests, correspondence, revised testing"
        },
        {
          "left": "Review whether identified false or misleading information was appropriately evaluated and reported.",
          "right": "Findings, impact assessments, engagement communications"
        },
        {
          "left": "Examine supervisory comments for meaningful challenge of evidence and judgments.",
          "right": "Review notes, responses, approvals"
        },
        {
          "left": "Assess practical training in questioning information and avoiding bias.",
          "right": "Training materials, attendance records, coaching notes"
        }
      ]
    }
  },
  "5.1": {
    "3": {
      "headers": [
        "Risk                                                               Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "Confidential information is exploited for personal or third-party benefit.",
          "right": "High"
        },
        {
          "left": "Information obtained during an audit is used for an unauthorized purpose.",
          "right": "High"
        },
        {
          "left": "Third-party information is used contrary to applicable restrictions.",
          "right": "High"
        },
        {
          "left": "Sensitive data is transferred to unapproved tools or personal accounts.",
          "right": "High"
        },
        {
          "left": "Auditors misunderstand information-use responsibilities because expectations are unclear.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                   Control      Type"
      ],
      "rows": [
        {
          "left": "Define acceptable information use and explicitly prohibit personal exploitation.",
          "right": "Preventive"
        },
        {
          "left": "Link data requests and access permissions to documented audit responsibilities.",
          "right": "Preventive"
        },
        {
          "left": "Communicate information-use expectations through training and acknowledgments.",
          "right": "Preventive"
        },
        {
          "left": "Define approved systems and methods for processing and transferring audit information.",
          "right": "Preventive"
        },
        {
          "left": "Monitor unusual access, downloads, and transfers, with documented review of exceptions.",
          "right": "Detective"
        },
        {
          "left": "Establish procedures for reporting, investigating, and correcting suspected misuse.",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                    Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Review whether policies explain permitted uses and prohibit personal gain.",
          "right": "Information-use policies, code of conduct, audit methodology"
        },
        {
          "left": "Sample information requests and assess their connection to legitimate audit responsibilities.",
          "right": "Data requests, engagement scopes, assignment records"
        },
        {
          "left": "Examine selected downloads and transfers for compliance with approved practices.",
          "right": "Access logs, transfer records, approvals"
        },
        {
          "left": "Review how restrictions on third-party information are identified and communicated.",
          "right": "Agreements, handling instructions, staff communications"
        },
        {
          "left": "Assess auditors’ understanding of information-use responsibilities.",
          "right": "Training records, acknowledgments, interviews"
        },
        {
          "left": "Examine how suspected misuse was assessed and addressed.",
          "right": "Incident records, investigation documentation, corrective actions"
        }
      ]
    }
  },
  "5.2": {
    "3": {
      "headers": [
        "Risk                                       Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "Unauthorized users obtain confidential workpapers or reports.",
          "right": "High"
        },
        {
          "left": "Sensitive information is accidentally disclosed through email, sharing links, or physical records.",
          "right": "High"
        },
        {
          "left": "Former staff or service providers retain unnecessary access.",
          "right": "High"
        },
        {
          "left": "Audit records are destroyed prematurely or retained beyond applicable requirements.",
          "right": "High"
        },
        {
          "left": "Individuals assisting internal audit apply inadequate information-protection practices.",
          "right": "High"
        },
        {
          "left": "External disclosures occur without the required review or documented basis.",
          "right": "High"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                              Control Type"
      ],
      "rows": [
        {
          "left": "Apply role-based access permissions reflecting legitimate audit responsibilities.",
          "right": "Preventive"
        },
        {
          "left": "Review permissions periodically and remove access when no longer required.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Protect sensitive records through approved storage, encryption, authentication, and physical safeguards.",
          "right": "Preventive"
        },
        {
          "left": "Establish controlled distribution and approval procedures for workpapers and reports.",
          "right": "Preventive"
        },
        {
          "left": "Apply documented retention and secure disposal procedures, including applicable preservation requirements.",
          "right": "Preventive / Corrective"
        },
        {
          "left": "Extend confidentiality requirements to contractors and others assisting internal audit.",
          "right": "Preventive"
        },
        {
          "left": "Monitor potential disclosures and maintain an incident-response process.",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                       Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Review whether protection procedures cover physical and digital information throughout its lifecycle.",
          "right": "Security policies, audit methodology, retention schedules"
        },
        {
          "left": "Sample access permissions and assess whether they match current responsibilities.",
          "right": "User listings, assignments, access approvals, review records"
        },
        {
          "left": "Test whether departed staff and completed service providers had unnecessary access removed.",
          "right": "Departure records, contract completion dates, revocation logs"
        },
        {
          "left": "Examine selected storage locations and transfer methods for appropriate safeguards.",
          "right": "System settings, encryption evidence, sharing configurations"
        },
        {
          "left": "Sample report and workpaper disclosures for appropriate recipients and required approvals.",
          "right": "Distribution lists, release records, documented disclosure basis"
        },
        {
          "left": "Review retention and disposal practices against applicable requirements.",
          "right": "Archive inventories, disposal approvals, destruction records"
        },
        {
          "left": "Assess whether individuals assisting internal audit follow equivalent protection requirements.",
          "right": "Agreements, confidentiality commitments, training and oversight records"
        },
        {
          "left": "Examine accidental disclosure incidents and whether corrective actions addressed their causes.",
          "right": "Incident reports, response records, follow-up evidence"
        }
      ]
    }
  },
  "6.1": {
    "3": {
      "headers": [
        "Risk                                                 Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "An unclear mandate leads to disputes over internal audit’s authority.",
          "right": "High"
        },
        {
          "left": "Required activities fall outside the documented mandate and receive inadequate attention.",
          "right": "High"
        },
        {
          "left": "Overlapping or unclear assurance responsibilities create coverage gaps or duplication.",
          "right": "Medium"
        },
        {
          "left": "Organizational changes make the mandate outdated.",
          "right": "High"
        },
        {
          "left": "Additional responsibilities compromise internal audit’s ability to provide objective assurance.",
          "right": "High"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                    Control Type"
      ],
      "rows": [
        {
          "left": "Document the mandate in a board-approved charter.",
          "right": "Preventive"
        },
        {
          "left": "Map applicable legal requirements to the mandate.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Maintain a record of assurance providers’ roles and responsibilities.",
          "right": "Preventive"
        },
        {
          "left": "Assess significant organizational changes for their effect on the mandate.",
          "right": "Detective"
        },
        {
          "left": "Document mandate discussions, decisions, and approved revisions.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Communicate the mandate and resolve challenges to audit authority.",
          "right": "Preventive / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                       Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Assess whether the mandate clearly defines authority, roles, responsibilities, scope, and services.",
          "right": "Charter, mandate documents"
        },
        {
          "left": "Verify board approval and senior management participation.",
          "right": "Meeting minutes, consultation records"
        },
        {
          "left": "Compare applicable statutory responsibilities with the documented mandate.",
          "right": "Requirements mapping, legal input, charter"
        },
        {
          "left": "Examine coordination with other assurance providers.",
          "right": "Assurance maps, coordination meeting records"
        },
        {
          "left": "Review significant organizational changes and related mandate assessments.",
          "right": "Restructuring records, strategy updates, review documentation"
        },
        {
          "left": "Trace challenges to audit authority to escalation and resolution.",
          "right": "Access disputes, correspondence, board discussions"
        }
      ]
    }
  },
  "6.2": {
    "3": {
      "headers": [
        "Risk                                      Indicative    Rating"
      ],
      "rows": [
        {
          "left": "An incomplete charter leaves audit authority or responsibilities unclear.",
          "right": "High"
        },
        {
          "left": "Reporting relationships undermine effective positioning of internal audit.",
          "right": "High"
        },
        {
          "left": "An outdated charter conflicts with actual organizational arrangements.",
          "right": "High"
        },
        {
          "left": "Management and the board hold inconsistent expectations of internal audit.",
          "right": "Medium"
        },
        {
          "left": "Uncontrolled charter versions create uncertainty about approved provisions.",
          "right": "Medium"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                    Control Type"
      ],
      "rows": [
        {
          "left": "Use a charter review checklist covering all minimum content.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Document consultation with the board and senior management.",
          "right": "Preventive"
        },
        {
          "left": "Obtain and retain board approval of the charter and revisions.",
          "right": "Preventive"
        },
        {
          "left": "Establish an agreed review cycle and triggers for earlier review.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Maintain version control and make the approved charter available to relevant stakeholders.",
          "right": "Preventive"
        },
        {
          "left": "Compare actual reporting and approval arrangements with the charter.",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                  Evidence to Examine",
        "Procedure                                        Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Assess the charter against each minimum content requirement.",
          "right": "Approved charter, completeness checklist"
        },
        {
          "left": "Verify approval, approval date, and the version approved.",
          "right": "Board minutes, approval records, version history"
        },
        {
          "left": "Compare reporting relationships with actual arrangements.",
          "right": "Organization charts, reporting records, charter"
        },
        {
          "left": "Assess whether stakeholder expectations were discussed.",
          "right": "Draft comments, consultation records, meeting minutes"
        },
        {
          "left": "Examine whether significant changes prompted review.",
          "right": "Leadership changes, risk updates, charter review records"
        },
        {
          "left": "Check whether relevant stakeholders use the current approved version.",
          "right": "Published charter, distribution records, interviews"
        }
      ]
    }
  },
  "6.3": {
    "3": {
      "headers": [
        "Risk                                               Indicative",
        "Rating"
      ],
      "rows": [
        {
          "left": "Weak leadership support reduces cooperation with internal audit.",
          "right": "High"
        },
        {
          "left": "Management filters or delays significant communications to the board.",
          "right": "High"
        },
        {
          "left": "Access restrictions prevent sufficient audit coverage.",
          "right": "High"
        },
        {
          "left": "Resource limitations prevent delivery of planned activities.",
          "right": "High"
        },
        {
          "left": "The absence of private sessions prevents candid discussion of sensitive matters.",
          "right": "High"
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested Control                                  Control Type"
      ],
      "rows": [
        {
          "left": "Communicate leadership support for internal audit and expectations for cooperation.",
          "right": "Preventive"
        },
        {
          "left": "Maintain direct communication channels between the chief audit executive and board.",
          "right": "Preventive"
        },
        {
          "left": "Schedule private sessions and document that they occurred.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Obtain board approval of the charter, audit plan, budget, and resource plan.",
          "right": "Preventive"
        },
        {
          "left": "Record and escalate restrictions affecting scope, access, authority, or resources.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Agree on reporting topics, recipients, frequency, and urgent escalation arrangements.",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                   Evidence to Examine"
      ],
      "rows": [
        {
          "left": "Assess how the board and senior management communicate support for internal audit.",
          "right": "Leadership communications, meeting records, interviews"
        },
        {
          "left": "Verify regular direct communication and private sessions with the board.",
          "right": "Agendas, attendance records, communication logs"
        },
        {
          "left": "Examine board approval of plans and resources.",
          "right": "Approved charter, audit plan, budget, resource plan, minutes"
        },
        {
          "left": "Sample access difficulties and trace escalation and resolution.",
          "right": "Data requests, restriction logs, correspondence"
        },
        {
          "left": "Compare resource availability with planned work and assess board awareness of shortfalls.",
          "right": "Staffing records, budget reports, plan changes"
        },
        {
          "left": "Assess whether reporting arrangements support timely communication without inappropriate filtering.",
          "right": "Communication matrix, board submissions, escalation records"
        }
      ]
    }
  },
  "7.1": {
    "3": {
      "headers": [
        "Risk                                                 Indicative",
        "rating"
      ],
      "rows": [
        {
          "left": "Management influences audit scope or suppresses significant findings.",
          "right": "High"
        },
        {
          "left": "The CAE oversees activities that internal audit evaluates without adequate safeguards.",
          "right": "High"
        },
        {
          "left": "Restrictions on information, personnel, or resources prevent fulfillment of the mandate.",
          "right": "High"
        },
        {
          "left": "Independence impairments are not disclosed to the board.",
          "right": "High"
        },
        {
          "left": "Temporary non-audit responsibilities continue without transition or independent assurance.",
          "right": "High"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                               Type"
      ],
      "rows": [
        {
          "left": "Board-approved charter defining reporting relationships, authority, and access rights.",
          "right": "Preventive"
        },
        {
          "left": "Annual independence confirmation supported by documented assessment.",
          "right": "Detective"
        },
        {
          "left": "Regular private meetings between the board and CAE.",
          "right": "Preventive / Detective"
        },
        {
          "left": "Register of independence impairments, assigned actions, and escalation status.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Board-reviewed safeguards and alternative assurance arrangements for non- audit roles.",
          "right": "Preventive"
        },
        {
          "left": "Documented transition plan and independent third-party assurance for temporary assignments and the subsequent 12 months.",
          "right": "Preventive / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                             Evidence",
        "Procedure                                             Evidence"
      ],
      "rows": [
        {
          "left": "Compare the charter, organization chart, and actual reporting practices.",
          "right": "Approved charter, organization chart, reporting records"
        },
        {
          "left": "Verify that independence was confirmed to the board within the annual cycle.",
          "right": "Board papers, minutes, independence confirmation"
        },
        {
          "left": "Assess whether the CAE has direct and private access to the board.",
          "right": "Meeting records, agendas, interviews"
        },
        {
          "left": "Examine selected engagements for restrictions or pressure affecting scope, access, or findings.",
          "right": "Scope changes, correspondence, report revisions"
        },
        {
          "left": "Identify non-audit responsibilities and evaluate safeguards and alternative assurance.",
          "right": "Role descriptions, charter provisions, assurance reports"
        },
        {
          "left": "For temporary assignments, verify independent assurance coverage and the transition plan.",
          "right": "Assignment dates, third-party engagement terms, transition records"
        },
        {
          "left": "Review board involvement in CAE appointment, removal, evaluation, and remuneration.",
          "right": "Board decisions, recruitment and appraisal records"
        }
      ]
    }
  },
  "7.2": {
    "3": {
      "headers": [
        "Risk                                                     Indicative rating"
      ],
      "rows": [
        {
          "left": "Appointment criteria do not reflect the responsibilities of the CAE role.",
          "right": "High"
        },
        {
          "left": "Competency gaps weaken audit planning, supervision, or communication.",
          "right": "High"
        },
        {
          "left": "The board lacks sufficient information to assess candidate suitability.",
          "right": "High"
        },
        {
          "left": "Professional development does not address changing responsibilities or risks.",
          "right": "Medium"
        },
        {
          "left": "A CAE vacancy disrupts leadership and delivery of internal audit services.",
          "right": "Medium–High"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                               Type"
      ],
      "rows": [
        {
          "left": "Documented competency requirements aligned with the mandate and organizational risk profile.",
          "right": "Preventive"
        },
        {
          "left": "Defined recruitment and assessment criteria developed with board and senior management involvement.",
          "right": "Preventive"
        },
        {
          "left": "Verification of relevant qualifications and experience during appointment.",
          "right": "Preventive"
        },
        {
          "left": "Periodic competency assessment and targeted development plan.",
          "right": "Detective / Corrective"
        },
        {
          "left": "Tracking of completed professional development and identified gaps.",
          "right": "Detective"
        },
        {
          "left": "Succession arrangements identifying potential replacements and interim leadership options.",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                                 Evidence"
      ],
      "rows": [
        {
          "left": "Assess whether the CAE role description reflects the mandate and management responsibilities.",
          "right": "Job description, charter, responsibility statements"
        },
        {
          "left": "Verify board participation in determining competencies and assessing appointment suitability.",
          "right": "Board minutes, selection criteria, interview records"
        },
        {
          "left": "Compare the CAE’s qualifications and experience with documented expectations.",
          "right": "Qualification records, employment history, competency assessment"
        },
        {
          "left": "Evaluate how identified competency gaps are addressed.",
          "right": "Development plans, team capability assessments, specialist support arrangements"
        },
        {
          "left": "Review professional development plans and evidence of completion.",
          "right": "Training records, course completion evidence, development reviews"
        },
        {
          "left": "Examine succession-planning arrangements and discussions with relevant parties.",
          "right": "Succession plans, board and HR meeting records"
        }
      ]
    }
  },
  "8.1": {
    "3": {
      "headers": [
        "Risk                                   Potential consequence"
      ],
      "rows": [
        {
          "left": "Significant matters are reported late or omitted",
          "right": "The board cannot intervene promptly."
        },
        {
          "left": "Reports exclude recurring issues or unresolved actions",
          "right": "The board receives an incomplete view of exposure."
        },
        {
          "left": "Escalation criteria are unclear",
          "right": "Similar issues receive inconsistent treatment."
        },
        {
          "left": "Management filters communications to the board",
          "right": "Important findings or limitations may be suppressed."
        },
        {
          "left": "Reporting focuses only on completed activities",
          "right": "The board cannot assess internal audit’s effectiveness or impact."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                Type"
      ],
      "rows": [
        {
          "left": "Board-agreed reporting calendar and communication expectations",
          "right": "Preventive"
        },
        {
          "left": "Reporting checklist covering the required communication categories",
          "right": "Preventive"
        },
        {
          "left": "Documented escalation criteria, recipients, and timeframes",
          "right": "Preventive"
        },
        {
          "left": "Review of board reports against engagement results, independence matters, and quality findings",
          "right": "Detective"
        },
        {
          "left": "Log of escalated issues, board decisions, owners, and follow-up actions",
          "right": "Detective"
        },
        {
          "left": "Corrective action for repeated reporting omissions or delays",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                    Evidence to examine",
        "Procedure                                       Evidence to examine"
      ],
      "rows": [
        {
          "left": "Compare communication arrangements with the board’s stated expectations.",
          "right": "Charter, reporting calendar, communication protocols"
        },
        {
          "left": "Sample board reports and assess coverage of the required reporting categories.",
          "right": "Board packs, presentations, supporting records"
        },
        {
          "left": "Trace significant engagement findings and recurring themes into board communications.",
          "right": "Engagement reports, issue register, board reports"
        },
        {
          "left": "Select disagreements or scope restrictions and assess whether escalation was appropriate and timely.",
          "right": "Correspondence, escalation log, meeting minutes"
        },
        {
          "left": "Check whether potential independence impairments were communicated.",
          "right": "Independence declarations, board minutes"
        },
        {
          "left": "Verify that board decisions and requested actions were followed through.",
          "right": "Action tracker, subsequent reports, closure evidence"
        }
      ]
    }
  },
  "8.2": {
    "3": {
      "headers": [
        "Risk                                              Potential consequence"
      ],
      "rows": [
        {
          "left": "Insufficient audit capacity",
          "right": "High-risk areas receive delayed or incomplete coverage."
        },
        {
          "left": "Missing specialist expertise",
          "right": "Complex risks and control weaknesses may be overlooked."
        },
        {
          "left": "Resource shortages are not reported clearly",
          "right": "The board approves plans based on unrealistic assumptions."
        },
        {
          "left": "Excessive workload",
          "right": "Audit quality, supervision, and staff retention deteriorate."
        },
        {
          "left": "External resources are poorly integrated",
          "right": "Delivery becomes inconsistent or difficult to supervise."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                       Type"
      ],
      "rows": [
        {
          "left": "Resource assessment linked to the risk-based audit plan",
          "right": "Preventive"
        },
        {
          "left": "Skills matrix identifying required expertise and capability gaps",
          "right": "Detective"
        },
        {
          "left": "Capacity model allowing for leave, training, supervision, and administration",
          "right": "Preventive"
        },
        {
          "left": "Reporting of vacancies, budget pressures, and coverage implications",
          "right": "Detective"
        },
        {
          "left": "Board discussion of resource sufficiency at least annually",
          "right": "Detective"
        },
        {
          "left": "Documented remediation plan for material resource gaps",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                     Evidence to examine"
      ],
      "rows": [
        {
          "left": "Compare planned audit demand with realistically available capacity.",
          "right": "Audit plan, staffing schedule, capacity calculations"
        },
        {
          "left": "Assess whether required specialist skills are available internally or externally.",
          "right": "Skills matrix, qualifications, service agreements"
        },
        {
          "left": "Verify that the board discussed both resource numbers and capabilities at least annually.",
          "right": "Board packs and minutes"
        },
        {
          "left": "Trace identified shortages to their reported effects on audit coverage.",
          "right": "Gap analysis, deferred engagements, CAE reports"
        },
        {
          "left": "Evaluate proposed resourcing options and their feasibility.",
          "right": "Budget proposals, cost-benefit analyses, recruitment plans"
        },
        {
          "left": "Check implementation of approved resource actions and whether gaps remain.",
          "right": "Hiring records, contracts, training records, updated forecasts"
        }
      ]
    }
  },
  "8.3": {
    "3": {
      "headers": [
        "Risk                                         Potential consequence"
      ],
      "rows": [
        {
          "left": "QAIP exists only as a document",
          "right": "Deficiencies persist without detection or correction."
        },
        {
          "left": "Assessments cover only selected activities",
          "right": "Important weaknesses remain outside review."
        },
        {
          "left": "Performance measures reward volume alone",
          "right": "Engagement quality and professional judgment receive insufficient attention."
        },
        {
          "left": "Quality results are reported selectively",
          "right": "The board receives an inaccurate view of performance."
        },
        {
          "left": "Improvement actions are closed without verification",
          "right": "Recurring deficiencies remain unresolved."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                            Type"
      ],
      "rows": [
        {
          "left": "QAIP mapping assessment activities to all aspects of the function",
          "right": "Preventive"
        },
        {
          "left": "Quality assessment schedule with assigned responsibilities",
          "right": "Preventive"
        },
        {
          "left": "Annual board approval of performance objectives",
          "right": "Preventive"
        },
        {
          "left": "Reporting calendar covering annual internal results and completed external results",
          "right": "Preventive"
        },
        {
          "left": "Improvement tracker with owners, deadlines, and closure evidence",
          "right": "Corrective"
        },
        {
          "left": "Follow-up review to verify effectiveness of completed actions",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                              Evidence to examine"
      ],
      "rows": [
        {
          "left": "Assess whether QAIP coverage includes all significant aspects of internal audit.",
          "right": "QAIP, process inventory, assessment scope"
        },
        {
          "left": "Verify that scheduled quality activities occurred and produced documented results.",
          "right": "Assessment workpapers, review records"
        },
        {
          "left": "Confirm annual communication of internal assessment results.",
          "right": "Board and senior management reports, minutes"
        },
        {
          "left": "Confirm that completed external assessment results were communicated.",
          "right": "Assessment report, distribution records, presentations"
        },
        {
          "left": "Verify annual board approval of performance objectives.",
          "right": "Approved objectives, board minutes"
        },
        {
          "left": "Sample reported performance measures and test the reliability of underlying data.",
          "right": "Dashboards, source records, calculation methods"
        },
        {
          "left": "Select completed improvement actions and verify that the underlying deficiency was addressed.",
          "right": "Action tracker, revised procedures, follow-up results"
        }
      ]
    }
  },
  "8.4": {
    "3": {
      "headers": [
        "Risk                                            Potential consequence"
      ],
      "rows": [
        {
          "left": "Assessment exceeds the required interval",
          "right": "Quality weaknesses remain without timely external evaluation."
        },
        {
          "left": "Assessor independence is impaired",
          "right": "Conclusions may lack objectivity or credibility."
        },
        {
          "left": "Required active CIA qualification is absent",
          "right": "Assessor selection does not meet the standard."
        },
        {
          "left": "Assessment scope is unduly restricted",
          "right": "Significant weaknesses may remain unexamined."
        },
        {
          "left": "The board receives only selected results",
          "right": "Oversight and action planning are based on incomplete information."
        },
        {
          "left": "Actions remain overdue or ineffective",
          "right": "Identified deficiencies continue after assessment."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                           Type"
      ],
      "rows": [
        {
          "left": "Assessment timetable tracking the five-year deadline and preparation milestones",
          "right": "Preventive"
        },
        {
          "left": "Board-approved assessment plan and documented approach",
          "right": "Preventive"
        },
        {
          "left": "Assessor due diligence covering experience, credentials, and independence",
          "right": "Preventive"
        },
        {
          "left": "Verification of at least one assessor’s active CIA designation",
          "right": "Preventive"
        },
        {
          "left": "Engagement terms requiring complete results directly to the board",
          "right": "Preventive"
        },
        {
          "left": "Board-approved action tracker with owners and deadlines",
          "right": "Corrective"
        },
        {
          "left": "Follow-up verification of action completion and effectiveness",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                      Evidence to examine"
      ],
      "rows": [
        {
          "left": "Verify the date of the last completed assessment and evaluate the next assessment timetable.",
          "right": "Prior report, current plan, engagement contract"
        },
        {
          "left": "Check board approval of scope, frequency, assessor competence, and independence.",
          "right": "Approved plan, board minutes"
        },
        {
          "left": "Verify active CIA status for at least one assessor or team member.",
          "right": "Credential verification records"
        },
        {
          "left": "Review relationships that could impair assessor independence.",
          "right": "Declarations, service history, organizational relationships"
        },
        {
          "left": "Assess whether scope restrictions could prevent a meaningful quality evaluation.",
          "right": "Terms of reference, charter, assessment scope"
        },
        {
          "left": "For self-assessment with independent validation, examine the completeness of self-assessment and validation work.",
          "right": "Self-assessment workpapers, validation report"
        },
        {
          "left": "Confirm the board received complete results directly from the assessor.",
          "right": "Distribution records, assessor presentation, minutes"
        },
        {
          "left": "Trace findings to approved actions and test selected closures.",
          "right": "Action plans, approvals, remediation evidence"
        }
      ]
    }
  },
  "9.1": {
    "3": {
      "headers": [
        "Risk                                     Potential consequence"
      ],
      "rows": [
        {
          "left": "Internal audit has an incomplete understanding of organizational objectives",
          "right": "Audit priorities may not address matters critical to organizational success."
        },
        {
          "left": "Governance arrangements are misunderstood",
          "right": "Oversight gaps or unclear accountability may be overlooked."
        },
        {
          "left": "Management’s risk information is accepted without appropriate consideration",
          "right": "Significant or emerging risks may be missed."
        },
        {
          "left": "Key controls are not linked to significant risks",
          "right": "Assurance work may focus on controls that provide limited risk coverage."
        },
        {
          "left": "Understanding is outdated",
          "right": "The audit strategy and plan may no longer reflect the organization’s circumstances."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                      Type"
      ],
      "rows": [
        {
          "left": "Structured organizational understanding assessment covering governance, risk management, and control",
          "right": "Preventive"
        },
        {
          "left": "Documented discussions with the board, management, and relevant assurance providers",
          "right": "Preventive"
        },
        {
          "left": "Objective–risk–control mapping",
          "right": "Preventive"
        },
        {
          "left": "Review of information from multiple sources to identify inconsistencies and omissions",
          "right": "Detective"
        },
        {
          "left": "Updates following significant organizational or risk changes",
          "right": "Corrective"
        },
        {
          "left": "CAE review of how the documented understanding informs audit priorities",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                                 Required evidence"
      ],
      "rows": [
        {
          "left": "Compare internal audit’s understanding of objectives with the organization’s approved strategy.",
          "right": "Strategy, business plans, internal audit planning records"
        },
        {
          "left": "Review how governance structures, committee responsibilities, and decision-making arrangements were considered.",
          "right": "Charters, organizational charts, delegated authorities, meeting minutes"
        },
        {
          "left": "Check whether ethical culture, performance management, and accountability were included.",
          "right": "Ethics policies, performance reports, CAE assessment notes"
        },
        {
          "left": "Examine how risk appetite, risk tolerance, and risk management maturity informed planning.",
          "right": "Risk appetite statement, risk assessments, discussion records"
        },
        {
          "left": "Select significant objectives and trace them to risks and key controls.",
          "right": "Risk and control matrix, process documentation"
        },
        {
          "left": "Trace significant governance or control concerns into audit strategy or plan decisions.",
          "right": "Prior reports, strategy analysis, audit plan rationale"
        }
      ]
    }
  },
  "9.2": {
    "3": {
      "headers": [
        "Risk                                     Potential consequence"
      ],
      "rows": [
        {
          "left": "No documented strategic direction",
          "right": "Internal audit development becomes reactive and fragmented."
        },
        {
          "left": "Strategy is disconnected from organizational objectives",
          "right": "Resources may be invested in activities with limited organizational value."
        },
        {
          "left": "Objectives are vague or unsupported by initiatives",
          "right": "The strategy cannot be implemented or evaluated effectively."
        },
        {
          "left": "Initiatives lack resources or ownership",
          "right": "Delivery is delayed or abandoned."
        },
        {
          "left": "Strategy is not reviewed when circumstances change",
          "right": "Internal audit capabilities and services may become misaligned with stakeholder needs."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                           Type"
      ],
      "rows": [
        {
          "left": "Strategy template requiring a vision, objectives, and supporting initiatives",
          "right": "Preventive"
        },
        {
          "left": "Mapping of internal audit objectives to the mandate and organizational priorities",
          "right": "Preventive"
        },
        {
          "left": "Initiative plans with owners, milestones, resource needs, and target dates",
          "right": "Preventive"
        },
        {
          "left": "Periodic strategy discussions with the board and senior management",
          "right": "Detective"
        },
        {
          "left": "Progress reporting supported by measurable indicators",
          "right": "Detective"
        },
        {
          "left": "Documented strategy revisions following significant changes",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                   Required evidence",
        "Procedure                                             Required evidence"
      ],
      "rows": [
        {
          "left": "Verify that the strategy includes all three required components.",
          "right": "Current strategy"
        },
        {
          "left": "Trace strategic objectives to organizational priorities and the internal audit mandate.",
          "right": "Organizational strategy, charter, alignment analysis"
        },
        {
          "left": "Assess whether supporting initiatives are sufficiently specific to implement.",
          "right": "Initiative plans, milestones, resource estimates"
        },
        {
          "left": "Examine how stakeholder expectations informed the strategy.",
          "right": "Interviews, meeting minutes, correspondence"
        },
        {
          "left": "Verify periodic review with the board and senior management.",
          "right": "Review schedules, presentations, minutes"
        },
        {
          "left": "Test selected reported achievements against supporting records.",
          "right": "Progress reports, training records, implemented processes or tools"
        },
        {
          "left": "Evaluate whether significant organizational changes prompted reconsideration of the strategy.",
          "right": "Change records, revised strategy, decision logs"
        }
      ]
    }
  },
  "9.3": {
    "3": {
      "headers": [
        "Risk                                              Potential consequence"
      ],
      "rows": [
        {
          "left": "Methodologies are incomplete",
          "right": "Important activities may be performed inconsistently or omitted."
        },
        {
          "left": "Staff apply different risk or finding criteria",
          "right": "Results may not be comparable or reliable."
        },
        {
          "left": "Methodologies are outdated",
          "right": "Work may no longer reflect applicable requirements or current practices."
        },
        {
          "left": "Staff receive insufficient training",
          "right": "Documented processes may not be implemented correctly."
        },
        {
          "left": "Effectiveness is not evaluated",
          "right": "Recurring weaknesses remain embedded in audit practice."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                      Type"
      ],
      "rows": [
        {
          "left": "Controlled methodology repository with designated owners and effective dates",
          "right": "Preventive"
        },
        {
          "left": "Mapping of methodologies to relevant Standards",
          "right": "Preventive"
        },
        {
          "left": "Structured training for new and revised methodologies",
          "right": "Preventive"
        },
        {
          "left": "Engagement reviews checking practical application",
          "right": "Detective"
        },
        {
          "left": "Periodic methodology effectiveness assessments",
          "right": "Detective"
        },
        {
          "left": "Revision process addressing quality findings and significant changes",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                  Required evidence",
        "Procedure                                               Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether methodologies cover planning, execution, reporting, follow-up, and management activities.",
          "right": "Manual, procedures, software workflows"
        },
        {
          "left": "Check alignment with the strategy and relevant Standards.",
          "right": "Strategy, methodology mapping"
        },
        {
          "left": "Sample engagements and compare actual practice with applicable methodologies.",
          "right": "Workpapers, reports, review notes"
        },
        {
          "left": "Verify training on new or revised methods.",
          "right": "Training materials, attendance, communications"
        },
        {
          "left": "Assess whether users can identify and access the current version.",
          "right": "Repository, version history, withdrawn templates"
        },
        {
          "left": "Review evidence that methodology effectiveness is evaluated.",
          "right": "Quality reviews, staff feedback, assessment reports"
        },
        {
          "left": "Trace identified weaknesses to revisions or other corrective action.",
          "right": "Action logs, revised procedures, follow-up reviews"
        }
      ]
    }
  },
  "9.4": {
    "3": {
      "headers": [
        "Risk                                          Potential consequence"
      ],
      "rows": [
        {
          "left": "The plan repeats previous work without a current risk assessment",
          "right": "Important changes in risk exposure may be missed."
        },
        {
          "left": "High-risk areas are excluded without explanation",
          "right": "The board may assume assurance coverage exists when it does not."
        },
        {
          "left": "Resource assumptions are unrealistic",
          "right": "Planned work may be delayed, reduced, or performed inadequately."
        },
        {
          "left": "Unplanned requests displace critical assurance work",
          "right": "Stakeholder demand may override risk priorities."
        },
        {
          "left": "Significant changes bypass board approval",
          "right": "The approved assurance coverage may be materially reduced without oversight."
        },
        {
          "left": "Scope and access restrictions are not escalated",
          "right": "Internal audit’s ability to provide assurance may be compromised."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                          Type"
      ],
      "rows": [
        {
          "left": "Documented organizationwide risk assessment at least annually",
          "right": "Preventive"
        },
        {
          "left": "Risk-based engagement prioritization with recorded rationale",
          "right": "Preventive"
        },
        {
          "left": "Capacity and capability assessment linked to the proposed plan",
          "right": "Preventive"
        },
        {
          "left": "Board approval of the plan and significant revisions",
          "right": "Preventive"
        },
        {
          "left": "Tracking of high-risk exclusions, resource limitations, and access restrictions",
          "right": "Detective"
        },
        {
          "left": "Monitoring of emerging risks and changes affecting coverage",
          "right": "Detective"
        },
        {
          "left": "Controlled plan revision process with timely communication",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                   Required evidence"
      ],
      "rows": [
        {
          "left": "Verify that the documented risk assessment was performed at least annually.",
          "right": "Dated assessment, supporting data, review records"
        },
        {
          "left": "Assess whether board and senior management input was incorporated.",
          "right": "Meeting notes, submissions, planning correspondence"
        },
        {
          "left": "Trace significant risks to planned engagements or other assurance coverage.",
          "right": "Risk assessment, plan, assurance map"
        },
        {
          "left": "Examine reasons for excluding high-risk areas and evidence of communication.",
          "right": "Exclusion rationale, board reports, minutes"
        },
        {
          "left": "Check explicit consideration of IT governance, fraud, compliance, and ethics.",
          "right": "Risk assessment, coverage analysis, engagement descriptions"
        },
        {
          "left": "Reconcile planned work with available resources and skills.",
          "right": "Capacity model, budget, skills matrix"
        },
        {
          "left": "Sample significant plan changes and verify discussion and board approval.",
          "right": "Version history, change requests, minutes"
        },
        {
          "left": "Examine how emerging risks, conflicting requests, and access restrictions affected the plan.",
          "right": "Risk updates, request log, restriction records"
        }
      ]
    }
  },
  "9.5": {
    "3": {
      "headers": [
        "Risk                                        Potential consequence"
      ],
      "rows": [
        {
          "left": "Assurance providers operate without coordination",
          "right": "Significant risks may be missed while other areas are repeatedly reviewed."
        },
        {
          "left": "Internal audit relies on work without evaluating its quality",
          "right": "Conclusions may be unsupported or misleading."
        },
        {
          "left": "Conflicts or reporting relationships are overlooked",
          "right": "Reliance may be placed on work lacking objectivity."
        },
        {
          "left": "Scope or timing does not match internal audit’s needs",
          "right": "The relied-upon work may not address the relevant risk or period."
        },
        {
          "left": "Responsibility for conclusions is misunderstood",
          "right": "Internal audit may fail to take ownership of its assurance."
        },
        {
          "left": "Information is shared without appropriate safeguards",
          "right": "Confidential information may be exposed."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                         Type"
      ],
      "rows": [
        {
          "left": "Register of assurance providers, responsibilities, and planned coverage",
          "right": "Preventive"
        },
        {
          "left": "Assurance mapping of significant risks",
          "right": "Detective"
        },
        {
          "left": "Coordination meetings proportionate to organizational complexity",
          "right": "Preventive"
        },
        {
          "left": "Documented evaluation before reliance is accepted",
          "right": "Preventive"
        },
        {
          "left": "Review of the provider’s evidence, scope, methodology, and conclusions",
          "right": "Detective"
        },
        {
          "left": "Agreements defining continuing reliance and information-sharing arrangements",
          "right": "Preventive"
        },
        {
          "left": "Additional testing or independent work where reliance is insufficient",
          "right": "Corrective"
        },
        {
          "left": "Escalation of unresolved coordination problems",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                        Required evidence",
        "Procedure                                       Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether the provider inventory includes relevant internal and external assurance functions.",
          "right": "Organizational structure, provider register, contracts"
        },
        {
          "left": "Review the assurance map for significant uncovered risks and duplication.",
          "right": "Assurance map, risk register, provider plans"
        },
        {
          "left": "Examine whether coordination affects the nature, scope, or timing of planned work.",
          "right": "Meeting records, revised plans, shared schedules"
        },
        {
          "left": "Sample reliance decisions and inspect their documented basis.",
          "right": "Reliance evaluations, CAE review records"
        },
        {
          "left": "Evaluate how competence, objectivity, reporting relationships, and conflicts were considered.",
          "right": "Credentials, declarations, reporting structures"
        },
        {
          "left": "Compare relied-upon work with the scope, period, and evidence needed for internal audit’s conclusions.",
          "right": "Provider reports, workpapers, internal audit objectives"
        },
        {
          "left": "Check whether identified limitations led to additional testing or independent assurance work.",
          "right": "Gap assessments, supplementary testing, conclusions"
        },
        {
          "left": "Verify escalation of significant unresolved coordination concerns.",
          "right": "Correspondence, management and board minutes"
        }
      ]
    }
  },
  "10.1": {
    "3": {
      "headers": [
        "Risk                                      Potential consequence"
      ],
      "rows": [
        {
          "left": "The budget is not linked to planned audit activities",
          "right": "Approved work may lack the funding needed for delivery."
        },
        {
          "left": "Training and technology costs are omitted",
          "right": "Skills and tools may become inadequate for the function’s responsibilities."
        },
        {
          "left": "Significant variances are not investigated",
          "right": "Overspending or delivery problems may remain undetected."
        },
        {
          "left": "Funding shortfalls are communicated late",
          "right": "The board cannot respond before audit coverage is affected."
        },
        {
          "left": "Internal audit funding is embedded in another budget without clear tracking",
          "right": "The CAE may not know what resources are available or how they are used."
        },
        {
          "left": "Cost reductions are made without assessing their effects",
          "right": "Audit quality, capability, or coverage may be weakened."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                            Type"
      ],
      "rows": [
        {
          "left": "Budget preparation linking expenditure to audit activities and strategic initiatives",
          "right": "Preventive"
        },
        {
          "left": "Budget checklist covering staffing costs, training, technology, tools, and external support where relevant",
          "right": "Preventive"
        },
        {
          "left": "Documented board approval of the internal audit budget",
          "right": "Preventive"
        },
        {
          "left": "Periodic comparison of budget, actual expenditure, and forecast",
          "right": "Detective"
        },
        {
          "left": "Review and explanation of significant variances",
          "right": "Detective"
        },
        {
          "left": "Documented escalation of funding shortfalls and associated coverage implications",
          "right": "Corrective"
        },
        {
          "left": "Separate identification of internal audit allocations within wider departmental budgets",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                        Required evidence",
        "Procedure                                             Required evidence"
      ],
      "rows": [
        {
          "left": "Trace significant audit activities and strategic initiatives to their funding assumptions.",
          "right": "Audit plan, strategy, budget calculations"
        },
        {
          "left": "Check whether the budget includes necessary training, technology, tools, and operational expenditure.",
          "right": "Budget schedules, development plans, technology plans"
        },
        {
          "left": "Verify that the CAE sought board approval and examine the recorded outcome.",
          "right": "Board submissions, minutes, approved budget"
        },
        {
          "left": "Compare actual expenditure with budget and review explanations for significant variances.",
          "right": "Financial reports, variance analysis, forecasts"
        },
        {
          "left": "Assess whether identified shortfalls were communicated promptly and with a clear explanation of their effects.",
          "right": "CAE correspondence, board reports, revised coverage forecasts"
        },
        {
          "left": "Where funding sits within another budget, reconcile the internal audit allocation to expenditure records.",
          "right": "Cost-center reports, allocation schedules, ledger records"
        },
        {
          "left": "Examine responses to unforeseen financial needs.",
          "right": "Funding requests, management discussions, revised budgets"
        }
      ]
    }
  },
  "10.2": {
    "3": {
      "headers": [
        "Risk                                       Potential consequence"
      ],
      "rows": [
        {
          "left": "Staff lack competencies needed for assigned work",
          "right": "Significant risks or control weaknesses may be overlooked."
        },
        {
          "left": "Headcount is treated as equivalent to productive capacity",
          "right": "The audit plan may exceed realistic delivery capacity."
        },
        {
          "left": "Specialist skills are concentrated in one person",
          "right": "Absence or departure may disrupt critical audit coverage."
        },
        {
          "left": "Development activities are not linked to competency gaps",
          "right": "Training expenditure may not improve required capability."
        },
        {
          "left": "High turnover is not addressed",
          "right": "Institutional knowledge, continuity, and productivity may decline."
        },
        {
          "left": "Rotational staff review activities for which they recently had responsibility",
          "right": "Objectivity may be impaired."
        },
        {
          "left": "Staffing limitations are not communicated",
          "right": "The board may have unrealistic expectations about audit coverage and quality."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                            Type"
      ],
      "rows": [
        {
          "left": "Competency framework and job descriptions linked to audit service needs",
          "right": "Preventive"
        },
        {
          "left": "Individual skills assessments and a function-level competency matrix",
          "right": "Detective"
        },
        {
          "left": "Capacity planning based on productive hours and engagement complexity",
          "right": "Preventive"
        },
        {
          "left": "Assignment review considering expertise, availability, and objectivity",
          "right": "Preventive"
        },
        {
          "left": "Individual development plans supported by training, feedback, and mentoring",
          "right": "Corrective"
        },
        {
          "left": "Retention and succession arrangements for critical roles",
          "right": "Preventive"
        },
        {
          "left": "Review of external provider personnel against agreed requirements",
          "right": "Preventive"
        },
        {
          "left": "Reporting of staffing gaps and their effects to the board and senior management",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                          Required evidence"
      ],
      "rows": [
        {
          "left": "Compare recruitment criteria and job descriptions with competencies required by the audit plan.",
          "right": "Job descriptions, recruitment records, competency framework"
        },
        {
          "left": "Assess whether individual competencies have been evaluated and gaps identified.",
          "right": "Skills assessments, résumés, performance reviews"
        },
        {
          "left": "Recalculate available capacity using realistic productive hours.",
          "right": "Staffing schedules, leave plans, training commitments, capacity model"
        },
        {
          "left": "Sample engagements and assess whether assigned personnel had suitable skills and availability.",
          "right": "Resource allocations, workpapers, qualifications, schedules"
        },
        {
          "left": "Trace competency gaps to development actions and evidence of improvement.",
          "right": "Development plans, training records, subsequent review feedback"
        },
        {
          "left": "Examine supervisory feedback and mentoring arrangements.",
          "right": "Workpaper review notes, coaching records, mentoring plans"
        },
        {
          "left": "Review guest and rotational assignments for objectivity concerns and safeguards.",
          "right": "Previous responsibilities, declarations, assignment approvals"
        },
        {
          "left": "Assess how vacancies, turnover, and specialist shortages were addressed and communicated.",
          "right": "Vacancy reports, resource requests, board communications"
        },
        {
          "left": "Compare planned and actual engagement hours and evaluate lessons incorporated into future allocations.",
          "right": "Time records, engagement budgets, revised estimates"
        }
      ]
    }
  },
  "10.3": {
    "3": {
      "headers": [
        "Risk                                            Potential consequence",
        "Risk                                           Potential consequence"
      ],
      "rows": [
        {
          "left": "Existing technology cannot support audit needs",
          "right": "Coverage, analysis, documentation, or reporting may be constrained."
        },
        {
          "left": "Tools are acquired without a defined use case",
          "right": "Expenditure may produce little practical benefit."
        },
        {
          "left": "Staff are not trained to use new tools effectively",
          "right": "Technology may be underused or applied incorrectly."
        },
        {
          "left": "Implementation bypasses IT or information security review",
          "right": "Systems or audit information may be exposed to avoidable risks."
        },
        {
          "left": "Data processing and analytical outputs are not validated",
          "right": "Audit conclusions may be based on incomplete or inaccurate results."
        },
        {
          "left": "Technology limitations are not reported",
          "right": "The board may not understand their effects on audit performance."
        },
        {
          "left": "Benefits are not evaluated after implementation",
          "right": "Ineffective tools and processes may remain in use."
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                          Type"
      ],
      "rows": [
        {
          "left": "Periodic assessment of technology capabilities against audit requirements",
          "right": "Detective"
        },
        {
          "left": "Business cases linking proposed tools to defined needs and expected benefits",
          "right": "Preventive"
        },
        {
          "left": "Implementation review involving IT and information security",
          "right": "Preventive"
        },
        {
          "left": "Training and practical user acceptance activities before wider adoption",
          "right": "Preventive"
        },
        {
          "left": "Access restrictions and information-handling arrangements appropriate to audit data",
          "right": "Preventive"
        },
        {
          "left": "Validation of significant data imports and analytical outputs",
          "right": "Detective"
        },
        {
          "left": "Post-implementation review of usage and realized benefits",
          "right": "Detective"
        },
        {
          "left": "Escalation and remediation of material technological limitations",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                         Required evidence"
      ],
      "rows": [
        {
          "left": "Map key audit activities to existing tools and identify unsupported needs.",
          "right": "Technology inventory, process maps, user requirements"
        },
        {
          "left": "Examine whether technology is regularly evaluated for effectiveness and efficiency.",
          "right": "Evaluation records, user feedback, improvement proposals"
        },
        {
          "left": "Review selected acquisitions for a clear business need and expected benefits.",
          "right": "Business cases, funding requests, approvals"
        },
        {
          "left": "Verify participation by IT and information security in implementation.",
          "right": "Review records, implementation plans, security assessments"
        },
        {
          "left": "Assess whether users received training appropriate to their responsibilities.",
          "right": "Training materials, attendance records, practical assessments"
        },
        {
          "left": "Inspect workpapers to determine whether tools are being used effectively.",
          "right": "Engagement files, analytics outputs, system records"
        },
        {
          "left": "For selected analytical work, verify input completeness and test output accuracy.",
          "right": "Source-data reconciliations, scripts or configurations, validation records"
        },
        {
          "left": "Compare achieved benefits with the original proposal.",
          "right": "Performance measures, time comparisons, post-implementation review"
        },
        {
          "left": "Examine communication of significant technology limitations and follow-up actions.",
          "right": "Board reports, management correspondence, remediation tracker"
        }
      ]
    }
  },
  "11.1": {
    "3": {
      "headers": [
        "Risk                                       Potential consequence"
      ],
      "rows": [
        {
          "left": "Important stakeholders are excluded",
          "right": "Internal audit misses significant concerns or assurance needs"
        },
        {
          "left": "Communication occurs only during engagements",
          "right": "Risks and organizational changes are identified late"
        },
        {
          "left": "Stakeholder roles are unclear",
          "right": "Assurance work is duplicated or important areas remain uncovered"
        },
        {
          "left": "Employees distrust internal audit",
          "right": "Relevant information is withheld or disclosed too late"
        },
        {
          "left": "Informal relationships become overly familiar",
          "right": "Auditor judgment may be impaired or perceived as biased"
        },
        {
          "left": "Stakeholder feedback is collected but not considered",
          "right": "Audit priorities become disconnected from organizational needs"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                       Type"
      ],
      "rows": [
        {
          "left": "Maintain a stakeholder map covering governance, operational, regulatory, and assurance relationships",
          "right": "Preventive"
        },
        {
          "left": "Assign relationship owners and define communication arrangements",
          "right": "Preventive"
        },
        {
          "left": "Include internal audit in relevant management and governance information channels",
          "right": "Preventive"
        },
        {
          "left": "Record significant concerns and assign follow-up actions",
          "right": "Detective / Corrective"
        },
        {
          "left": "Review stakeholder coverage and feedback periodically",
          "right": "Detective"
        },
        {
          "left": "Assess objectivity concerns arising from long-standing assignments or relationships",
          "right": "Preventive / Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                      Required evidence"
      ],
      "rows": [
        {
          "left": "Compare the stakeholder map with the organizational structure and assurance landscape",
          "right": "Stakeholder register, organization chart, assurance map"
        },
        {
          "left": "Assess whether communication arrangements address responsibilities, significant issues, and reporting expectations",
          "right": "Communication methodology, board discussions, reporting schedules"
        },
        {
          "left": "Sample meetings to determine whether significant concerns were recorded and followed up",
          "right": "Agendas, minutes, action logs"
        },
        {
          "left": "Trace selected business changes to internal audit’s assessment of their implications",
          "right": "Change notifications, risk assessments, audit plan updates"
        },
        {
          "left": "Interview stakeholders about access to internal audit and the usefulness of communication",
          "right": "Interview records, survey results"
        },
        {
          "left": "Review whether stakeholder input influenced planning or engagement decisions",
          "right": "Planning documentation, risk assessment records"
        },
        {
          "left": "Assess safeguards where auditors have maintained prolonged relationships with an activity",
          "right": "Assignment records, objectivity declarations, supervisory reviews"
        }
      ]
    }
  },
  "11.2": {
    "3": {
      "headers": [
        "Risk                                       Potential consequence"
      ],
      "rows": [
        {
          "left": "Reports contain inaccurate statements",
          "right": "Stakeholders make decisions using incorrect information"
        },
        {
          "left": "Language is biased or accusatory",
          "right": "Trust declines and valid findings face unnecessary resistance"
        },
        {
          "left": "Reports are difficult to understand",
          "right": "Stakeholders misinterpret required action"
        },
        {
          "left": "Essential information is omitted",
          "right": "Conclusions appear unsupported or misleading"
        },
        {
          "left": "Reports contain excessive detail",
          "right": "Significant issues are overlooked"
        },
        {
          "left": "Important issues are communicated late",
          "right": "Exposure continues before corrective action begins"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                         Type"
      ],
      "rows": [
        {
          "left": "Use a communication quality checklist covering all seven characteristics",
          "right": "Preventive / Detective"
        },
        {
          "left": "Link significant reported facts and conclusions to supporting workpapers",
          "right": "Preventive / Detective"
        },
        {
          "left": "Require documented supervisory review before release",
          "right": "Preventive"
        },
        {
          "left": "Apply audience-specific templates and terminology guidance",
          "right": "Preventive"
        },
        {
          "left": "Establish reporting and escalation targets reflecting issue significance",
          "right": "Preventive"
        },
        {
          "left": "Monitor communication quality through feedback and quality reviews",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                  Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether communication methodologies address all seven characteristics",
          "right": "Policies, templates, style guides"
        },
        {
          "left": "Trace sampled report statements and calculations to evidence",
          "right": "Final reports, workpapers, source records"
        },
        {
          "left": "Review whether conclusions reflect relevant supporting and contradictory evidence",
          "right": "Analysis records, management responses, reviewer comments"
        },
        {
          "left": "Assess clarity, conciseness, and constructive tone",
          "right": "Reports, presentations, stakeholder feedback"
        },
        {
          "left": "Compare communication dates with issue identification dates and applicable internal targets",
          "right": "Issue logs, correspondence, release records"
        },
        {
          "left": "Verify that review comments were resolved before release",
          "right": "Review checklists, version histories, approvals"
        },
        {
          "left": "Assess whether recurring communication weaknesses led to improvement",
          "right": "Quality reviews, training plans, corrective actions"
        }
      ]
    }
  },
  "11.3": {
    "3": {
      "headers": [
        "Risk                                    Potential consequence",
        "Risk                                      Potential consequence"
      ],
      "rows": [
        {
          "left": "Final reports are issued without appropriate approval",
          "right": "Unsupported or inconsistent conclusions are released"
        },
        {
          "left": "Results do not reach responsible parties",
          "right": "Corrective action or oversight is delayed"
        },
        {
          "left": "External distribution is not appropriately assessed",
          "right": "Confidential information may be disclosed improperly"
        },
        {
          "left": "Recurring findings are reported separately without analysis",
          "right": "Systemic weaknesses remain unrecognized"
        },
        {
          "left": "Overall conclusions exceed the evidence or coverage",
          "right": "The board receives unjustified assurance"
        },
        {
          "left": "Reliance or scope limitations are omitted",
          "right": "Stakeholders misunderstand the conclusion’s boundaries"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                          Type"
      ],
      "rows": [
        {
          "left": "Document reporting expectations and intended recipients",
          "right": "Preventive"
        },
        {
          "left": "Maintain approval and delegation arrangements for final communications",
          "right": "Preventive"
        },
        {
          "left": "Apply controlled distribution and external-release review procedures",
          "right": "Preventive"
        },
        {
          "left": "Categorize findings and root causes consistently across engagements",
          "right": "Preventive / Detective"
        },
        {
          "left": "Prepare periodic thematic analyses",
          "right": "Detective"
        },
        {
          "left": "Maintain a supporting evidence and coverage matrix for broader conclusions",
          "right": "Preventive / Detective"
        },
        {
          "left": "Review scope, period, limitations, criteria, and reliance disclosures before release",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                        Required evidence"
      ],
      "rows": [
        {
          "left": "Compare actual reporting with board and senior management expectations",
          "right": "Reporting schedules, minutes, issued communications"
        },
        {
          "left": "Sample final reports for documented approval before release",
          "right": "Approval records, delegation arrangements, distribution dates"
        },
        {
          "left": "Assess whether recipients included relevant oversight and action owners",
          "right": "Distribution lists, action plans"
        },
        {
          "left": "Review selected external releases for required consultation",
          "right": "Legal or senior management advice, release records"
        },
        {
          "left": "Analyze repeated findings to assess whether significant themes were identified",
          "right": "Findings register, root cause analysis, thematic reports"
        },
        {
          "left": "Trace a broader conclusion to underlying engagements and other assurance work",
          "right": "Coverage matrix, engagement reports, reliance assessments"
        },
        {
          "left": "Verify inclusion of the five required elements in broader conclusions",
          "right": "Overall conclusion report, supporting papers"
        }
      ]
    }
  },
  "11.4": {
    "3": {
      "headers": [
        "Risk                                   Potential consequence"
      ],
      "rows": [
        {
          "left": "Significant errors are classified as minor without justification",
          "right": "Necessary corrections are not communicated"
        },
        {
          "left": "Corrections are delayed",
          "right": "Stakeholders continue relying on incorrect information"
        },
        {
          "left": "Only some original recipients receive the correction",
          "right": "Different stakeholders act on inconsistent information"
        },
        {
          "left": "The original report is silently replaced",
          "right": "Recipients remain unaware that conclusions or facts changed"
        },
        {
          "left": "Root causes are not addressed",
          "right": "Similar reporting errors recur"
        },
        {
          "left": "Versions are poorly controlled",
          "right": "Superseded communications remain in use"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                   Type"
      ],
      "rows": [
        {
          "left": "Maintain board-agreed significance criteria and a correction protocol",
          "right": "Preventive"
        },
        {
          "left": "Record identified errors and their significance assessments",
          "right": "Detective"
        },
        {
          "left": "Reconcile correction recipients to the original distribution list",
          "right": "Detective / Corrective"
        },
        {
          "left": "Clearly identify corrected versions and superseded communications",
          "right": "Corrective"
        },
        {
          "left": "Retain evidence of correction delivery and investigate failed delivery",
          "right": "Detective / Corrective"
        },
        {
          "left": "Perform root cause analysis and track improvement actions",
          "right": "Corrective / Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                     Required evidence"
      ],
      "rows": [
        {
          "left": "Confirm that significance criteria were agreed with the board",
          "right": "Criteria, board minutes, correspondence"
        },
        {
          "left": "Review identified errors and assess consistency of significance judgments",
          "right": "Error register, assessments, supporting facts"
        },
        {
          "left": "Assess elapsed time between identification, assessment, and correction",
          "right": "Dated records, correspondence, release logs"
        },
        {
          "left": "Reconcile correction recipients with original recipients",
          "right": "Original distribution list, corrected distribution records"
        },
        {
          "left": "Compare original and corrected reports to determine whether the issue was fully addressed",
          "right": "Both versions, change records"
        },
        {
          "left": "Assess the investigation of the cause and completion of corrective actions",
          "right": "Root cause analysis, action tracker"
        },
        {
          "left": "Review controls over superseded versions",
          "right": "Document repository records, access and version history"
        }
      ]
    }
  },
  "11.5": {
    "3": {
      "headers": [
        "Risk                                        Potential consequence"
      ],
      "rows": [
        {
          "left": "Excessive risk acceptance is not identified",
          "right": "Significant exposure persists without appropriate oversight"
        },
        {
          "left": "Repeated delays are treated only as administrative issues",
          "right": "Unacceptable residual risk remains unchallenged"
        },
        {
          "left": "Escalation depends on management’s willingness to report",
          "right": "Senior management or the board may remain uninformed"
        },
        {
          "left": "Risk concerns lack evidence and context",
          "right": "Escalation is ineffective or disputed"
        },
        {
          "left": "Senior management discussion does not lead to further escalation when necessary",
          "right": "Unresolved unacceptable risk is not brought to the board"
        },
        {
          "left": "Internal audit assumes responsibility for treatment",
          "right": "Objectivity and management accountability are weakened"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                             Type"
      ],
      "rows": [
        {
          "left": "Maintain access to current risk appetite, tolerance, and acceptance policies",
          "right": "Preventive"
        },
        {
          "left": "Document an escalation methodology and reporting responsibilities",
          "right": "Preventive"
        },
        {
          "left": "Review overdue and rejected actions for implications for residual risk",
          "right": "Detective"
        },
        {
          "left": "Record management’s rationale and the CAE’s assessment of acceptability",
          "right": "Detective"
        },
        {
          "left": "Track unresolved concerns through senior management and board escalation",
          "right": "Detective / Corrective"
        },
        {
          "left": "Document governance decisions and management ownership of resulting actions",
          "right": "Preventive / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                    Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether internal audit understands applicable appetite and tolerance",
          "right": "Risk framework, policy documents, meeting records"
        },
        {
          "left": "Sample rejected recommendations and delayed actions for assessment of continuing exposure",
          "right": "Action tracker, management responses, risk assessments"
        },
        {
          "left": "Review whether the CAE’s concern is supported by evidence and relevant risk criteria",
          "right": "Assessment papers, exposure analysis, rationale"
        },
        {
          "left": "Confirm that responsible management was engaged to understand its perspective",
          "right": "Correspondence, minutes, proposed revised actions"
        },
        {
          "left": "Verify senior management discussion where the CAE concluded that accepted risk exceeded appetite or tolerance",
          "right": "Escalation papers, senior management records"
        },
        {
          "left": "Verify board escalation where senior management did not resolve the concern",
          "right": "Board submissions, minutes, private-session records"
        },
        {
          "left": "Assess whether subsequent decisions preserve management’s risk ownership",
          "right": "Decision records, assigned action owners, follow-up reports"
        }
      ]
    }
  },
  "12.1": {
    "3": {
      "headers": [
        "Risk                                           Potential consequence"
      ],
      "rows": [
        {
          "left": "Quality assessment relies only on routine engagement reviews",
          "right": "Function-level governance and management weaknesses remain unidentified"
        },
        {
          "left": "Periodic assessment omits standards",
          "right": "Conformance conclusions are incomplete"
        },
        {
          "left": "Assessors lack sufficient knowledge",
          "right": "Nonconformance is overlooked or incorrectly evaluated"
        },
        {
          "left": "Assessment conclusions lack evidence",
          "right": "Governance stakeholders receive unreliable quality information"
        },
        {
          "left": "Improvement actions are not implemented",
          "right": "Identified weaknesses recur"
        },
        {
          "left": "Significant nonconformance is not disclosed",
          "right": "The board cannot assess its effect on internal audit services"
        },
        {
          "left": "Assessment documentation is incomplete",
          "right": "External assessors cannot evaluate the internal assessment process adequately"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                          Type",
        "Control                                                Type"
      ],
      "rows": [
        {
          "left": "Maintain a documented internal assessment methodology covering monitoring, periodic review, reporting, and follow-up",
          "right": "Preventive"
        },
        {
          "left": "Map assessment procedures to the Standards",
          "right": "Preventive / Detective"
        },
        {
          "left": "Evaluate assessor knowledge and experience before assignment",
          "right": "Preventive"
        },
        {
          "left": "Link assessment conclusions to supporting evidence",
          "right": "Detective"
        },
        {
          "left": "Record nonconformance, its impact, and required escalation",
          "right": "Detective / Corrective"
        },
        {
          "left": "Maintain improvement actions with owners and proposed completion dates",
          "right": "Corrective"
        },
        {
          "left": "Verify completed actions before closing them",
          "right": "Detective"
        },
        {
          "left": "Retain assessment records in an organized repository",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                          Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether the methodology covers both ongoing monitoring and periodic assessment",
          "right": "Quality methodology, assessment schedule"
        },
        {
          "left": "Compare periodic assessment coverage with the Standards",
          "right": "Coverage matrix, completed assessment tools"
        },
        {
          "left": "Evaluate the qualifications of assigned assessors",
          "right": "Experience records, training records, assignment rationale"
        },
        {
          "left": "Trace sampled assessment conclusions to evidence",
          "right": "Assessment workpapers, engagement files, interview records"
        },
        {
          "left": "Verify communication of results and action plans",
          "right": "Reports, board papers, management minutes"
        },
        {
          "left": "Review whether significant nonconformance and its impact were disclosed",
          "right": "Impact assessment, disclosure records"
        },
        {
          "left": "Test the implementation and closure of improvement actions",
          "right": "Action tracker, revised procedures, completion evidence"
        },
        {
          "left": "Confirm records are available for the external assessment",
          "right": "Assessment repository, external assessor information requests"
        }
      ]
    }
  },
  "12.2": {
    "3": {
      "headers": [
        "Risk                                       Potential consequence"
      ],
      "rows": [
        {
          "left": "Measures focus only on the number of completed audits",
          "right": "Delivery volume is prioritized over quality and risk coverage"
        },
        {
          "left": "Objectives are disconnected from the charter or strategy",
          "right": "Reported success does not demonstrate fulfillment of the mandate"
        },
        {
          "left": "Data definitions are inconsistent",
          "right": "Performance comparisons become misleading"
        },
        {
          "left": "Reported results are not validated",
          "right": "The board receives inaccurate information"
        },
        {
          "left": "Targets encourage superficial completion",
          "right": "Work is closed before sufficient evidence is obtained"
        },
        {
          "left": "Management action delays are attributed entirely to internal audit",
          "right": "Accountability and performance evaluation become distorted"
        },
        {
          "left": "Performance gaps do not lead to action",
          "right": "Measurement becomes reporting without improvement"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                         Type"
      ],
      "rows": [
        {
          "left": "Map each performance objective to the charter, strategy, or relevant desired outcome",
          "right": "Preventive"
        },
        {
          "left": "Document each measure’s definition, calculation, source, owner, and target",
          "right": "Preventive"
        },
        {
          "left": "Use a balanced set of quantitative and qualitative measures",
          "right": "Preventive"
        },
        {
          "left": "Validate reported results against source records",
          "right": "Detective"
        },
        {
          "left": "Obtain and document relevant governance stakeholder feedback",
          "right": "Detective"
        },
        {
          "left": "Analyze significant deviations and establish improvement actions",
          "right": "Corrective"
        },
        {
          "left": "Review whether measures create unintended incentives",
          "right": "Detective / Preventive"
        },
        {
          "left": "Track and assess the effectiveness of improvement actions",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                     Required evidence"
      ],
      "rows": [
        {
          "left": "Trace performance objectives to the charter and internal audit strategy",
          "right": "Charter, strategy, objective mapping"
        },
        {
          "left": "Verify consideration of board and senior management input",
          "right": "Meeting records, correspondence, feedback"
        },
        {
          "left": "Assess whether measures cover quality and outcomes as well as activity levels",
          "right": "Performance framework, dashboard"
        },
        {
          "left": "Recalculate selected reported measures",
          "right": "Source data, calculation rules, published results"
        },
        {
          "left": "Verify audit plan completion measures use the adjusted and approved plan consistently",
          "right": "Approved plan versions, completion records"
        },
        {
          "left": "Review interpretation of recommendation implementation metrics",
          "right": "Action tracking records, explanatory reporting"
        },
        {
          "left": "Examine responses to missed targets and negative feedback",
          "right": "Analysis, improvement plans, follow-up records"
        },
        {
          "left": "Assess whether implemented improvements achieved their intended effect",
          "right": "Subsequent results, evaluation records"
        }
      ]
    }
  },
  "12.3": {
    "3": {
      "headers": [
        "Risk                                    Potential consequence"
      ],
      "rows": [
        {
          "left": "Supervision occurs only at the end",
          "right": "Planning or testing weaknesses are identified too late"
        },
        {
          "left": "Supervisors lack relevant proficiency",
          "right": "Technical or judgment errors remain undetected"
        },
        {
          "left": "Sign-off is treated as sufficient without substantive review",
          "right": "Unsupported findings and conclusions are issued"
        },
        {
          "left": "Review comments are closed without resolution",
          "right": "Known evidence gaps remain in the file"
        },
        {
          "left": "External providers are excluded from supervision arrangements",
          "right": "Outsourced work receives inconsistent quality oversight"
        },
        {
          "left": "Significant judgment differences are not addressed",
          "right": "Conclusions are inconsistent or insufficiently supported"
        },
        {
          "left": "Feedback is not provided",
          "right": "Recurring individual and team weaknesses persist"
        },
        {
          "left": "Review evidence is not retained",
          "right": "The function cannot demonstrate effective supervision"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                              Type"
      ],
      "rows": [
        {
          "left": "Assign supervisors based on engagement complexity and demonstrated competencies",
          "right": "Preventive"
        },
        {
          "left": "Establish review points throughout planning, execution, and reporting",
          "right": "Preventive / Detective"
        },
        {
          "left": "Require traceability from conclusions to procedures and evidence",
          "right": "Detective"
        },
        {
          "left": "Track review concerns until adequately resolved",
          "right": "Detective / Corrective"
        },
        {
          "left": "Define oversight arrangements for external providers",
          "right": "Preventive"
        },
        {
          "left": "Document resolution of significant professional judgment differences",
          "right": "Detective / Corrective"
        },
        {
          "left": "Provide engagement feedback linked to development needs",
          "right": "Corrective / Preventive"
        },
        {
          "left": "Retain review records, approvals, and supporting evidence according to methodology",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                                Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether supervision methodology covers quality and competency development",
          "right": "Methodology, review guidance, development process"
        },
        {
          "left": "Evaluate supervisor suitability for selected engagements",
          "right": "Experience records, skills assessments, assignments"
        },
        {
          "left": "Determine whether supervision occurred throughout the engagement",
          "right": "Review dates, meeting records, correspondence"
        },
        {
          "left": "Trace significant findings and conclusions to reviewed evidence",
          "right": "Workpapers, testing records, final communication"
        },
        {
          "left": "Verify completion of work programs and handling of changes",
          "right": "Program versions, approvals, completion records"
        },
        {
          "left": "Sample review concerns and assess whether responses resolve them",
          "right": "Review notes, additional evidence, revised workpapers"
        },
        {
          "left": "Assess oversight of external service providers",
          "right": "Contracts, review records, CAE communications"
        },
        {
          "left": "Review handling of significant judgment differences",
          "right": "Discussion records, research, documented conclusions"
        },
        {
          "left": "Verify provision of performance feedback and development opportunities",
          "right": "Feedback records, coaching notes, development plans"
        }
      ]
    }
  },
  "13.1": {
    "3": {
      "headers": [
        "Risk                                      Potential consequence"
      ],
      "rows": [
        {
          "left": "Objectives and scope are not clearly communicated",
          "right": "Misunderstanding, resistance, or unmet expectations"
        },
        {
          "left": "Required information is requested late",
          "right": "Fieldwork delays and incomplete testing"
        },
        {
          "left": "Significant issues are held until final reporting",
          "right": "Management loses the opportunity to act promptly"
        },
        {
          "left": "Scope or timing changes are not communicated",
          "right": "Stakeholders work with outdated expectations"
        },
        {
          "left": "Disagreements are resolved through unsupported changes",
          "right": "Findings and conclusions lose objectivity"
        },
        {
          "left": "Action responsibilities remain unclear",
          "right": "Corrective actions are delayed or not implemented"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                 Type",
        "Control                                        Type"
      ],
      "rows": [
        {
          "left": "Use an engagement communication plan identifying recipients, topics, and timing",
          "right": "Preventive"
        },
        {
          "left": "Document opening discussions and initial information requests",
          "right": "Preventive"
        },
        {
          "left": "Maintain progress updates and a process for urgent issues",
          "right": "Detective / Corrective"
        },
        {
          "left": "Record and communicate significant planning changes",
          "right": "Preventive / Corrective"
        },
        {
          "left": "Maintain a disagreement log recording evidence, positions, and resolution",
          "right": "Detective"
        },
        {
          "left": "Confirm management action owners and target dates",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                     Required evidence"
      ],
      "rows": [
        {
          "left": "Verify communication of objectives, scope, and timing",
          "right": "Engagement announcement, opening meeting records"
        },
        {
          "left": "Assess whether updates reflected engagement progress and emerging issues",
          "right": "Status reports, correspondence, meeting notes"
        },
        {
          "left": "Trace significant changes to timely management communication",
          "right": "Change log, notifications, revised planning documents"
        },
        {
          "left": "Review how urgent matters were communicated",
          "right": "Issue records, escalation correspondence"
        },
        {
          "left": "Examine disagreements and the reasons for any changes to results",
          "right": "Drafts, supporting evidence, management responses"
        },
        {
          "left": "Confirm communication of proposed actions, ownership, and timing",
          "right": "Closing meeting records, action plans"
        }
      ]
    }
  },
  "13.2": {
    "3": {
      "headers": [
        "Risk                                        Potential consequence"
      ],
      "rows": [
        {
          "left": "Planning relies on outdated information",
          "right": "Significant current risks are excluded"
        },
        {
          "left": "Risks are disconnected from business objectives",
          "right": "Audit effort focuses on low-value issues"
        },
        {
          "left": "Fraud risks are not specifically considered",
          "right": "Relevant fraud scenarios and control weaknesses are overlooked"
        },
        {
          "left": "Management’s assessment is accepted without challenge",
          "right": "Understated or omitted risks remain unidentified"
        },
        {
          "left": "Control existence is confused with effective design",
          "right": "Testing provides insufficient assurance"
        },
        {
          "left": "Risk significance is unsupported",
          "right": "Engagement priorities cannot be justified"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                Type"
      ],
      "rows": [
        {
          "left": "Use a structured information-gathering and risk assessment methodology",
          "right": "Preventive"
        },
        {
          "left": "Document changes since the previous assessment",
          "right": "Detective"
        },
        {
          "left": "Include an explicit fraud-risk assessment step",
          "right": "Preventive"
        },
        {
          "left": "Maintain an objective–risk–control matrix",
          "right": "Preventive / Detective"
        },
        {
          "left": "Require supervisory review of risk significance and prioritization",
          "right": "Detective"
        },
        {
          "left": "Update the assessment when fieldwork reveals relevant new information",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                      Required evidence"
      ],
      "rows": [
        {
          "left": "Trace identified risks to activity and organizational objectives",
          "right": "Strategy documents, objectives, risk assessment"
        },
        {
          "left": "Assess whether information sources were sufficiently reliable and current",
          "right": "Source records, data validation, interviews"
        },
        {
          "left": "Verify consideration of changes since prior planning",
          "right": "Change analysis, prior assessments, recent developments"
        },
        {
          "left": "Examine the assessment of specific fraud scenarios",
          "right": "Fraud-risk analysis, discussion records, planned responses"
        },
        {
          "left": "Reassess selected risk ratings and prioritization decisions",
          "right": "Rating methodology, rationale, supporting evidence"
        },
        {
          "left": "Review whether significant risks were connected to controls and planned testing",
          "right": "Risk and control matrix, work program"
        },
        {
          "left": "Verify that reused assessments were reviewed and updated",
          "right": "Prior and current versions, review records"
        }
      ]
    }
  },
  "13.3": {
    "3": {
      "headers": [
        "Risk                                Potential consequence"
      ],
      "rows": [
        {
          "left": "Objectives are vague",
          "right": "Procedures and conclusions lack a clear purpose"
        },
        {
          "left": "Scope is too narrow",
          "right": "Significant risks remain unexamined"
        },
        {
          "left": "Scope expands without control",
          "right": "Resources are diverted and completion is delayed"
        },
        {
          "left": "Restrictions are not recognized as limitations",
          "right": "Stakeholders receive unjustified assurance"
        },
        {
          "left": "Changes are not approved",
          "right": "Work diverges from authorized objectives"
        },
        {
          "left": "Unresolved limitations are not escalated",
          "right": "The board is unaware of constraints on assurance"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                                Type"
      ],
      "rows": [
        {
          "left": "Document objectives and detailed scope boundaries in a planning memorandum",
          "right": "Preventive"
        },
        {
          "left": "Map each objective to risks and planned coverage",
          "right": "Preventive / Detective"
        },
        {
          "left": "Require CAE approval of objectives, scope, and changes",
          "right": "Preventive"
        },
        {
          "left": "Maintain a scope change and limitation register",
          "right": "Detective"
        },
        {
          "left": "Apply a documented process for resolving and escalating limitations",
          "right": "Corrective"
        },
        {
          "left": "Reassess the implications of limitations for reporting and conclusions",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                        Required evidence",
        "Procedure                                      Required evidence"
      ],
      "rows": [
        {
          "left": "Assess whether objectives identify specific goals",
          "right": "Planning memorandum, engagement rationale"
        },
        {
          "left": "Compare each objective with planned scope and procedures",
          "right": "Scope statement, risk assessment, work program"
        },
        {
          "left": "Verify CAE approval of initial and revised objectives and scope",
          "right": "Approval records, version history"
        },
        {
          "left": "Review requests to exclude activities or restrict time and access",
          "right": "Correspondence, limitation register"
        },
        {
          "left": "Trace unresolved limitations through management discussion and board escalation",
          "right": "Minutes, escalation papers, CAE records"
        },
        {
          "left": "Compare performed work and reported conclusions with the approved boundaries",
          "right": "Workpapers, final communication"
        }
      ]
    }
  },
  "13.4": {
    "3": {
      "headers": [
        "Risk                                   Potential consequence"
      ],
      "rows": [
        {
          "left": "Criteria are absent or vague",
          "right": "Findings and conclusions become subjective"
        },
        {
          "left": "Inadequate management criteria are accepted",
          "right": "Weak performance may be assessed as satisfactory"
        },
        {
          "left": "Criteria are unrelated to objectives",
          "right": "Testing does not answer the engagement questions"
        },
        {
          "left": "Outdated or inapplicable requirements are used",
          "right": "Findings are inaccurate or disputed"
        },
        {
          "left": "Criteria change without justification",
          "right": "Evaluation becomes inconsistent"
        },
        {
          "left": "Good practice is presented as a mandatory obligation",
          "right": "Report users misunderstand the basis of a finding"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                          Type"
      ],
      "rows": [
        {
          "left": "Maintain a criteria register linked to engagement objectives",
          "right": "Preventive"
        },
        {
          "left": "Document source, applicability, version, and effective period",
          "right": "Preventive"
        },
        {
          "left": "Assess criteria adequacy before applying them",
          "right": "Detective"
        },
        {
          "left": "Record discussions with the board and/or senior management where criteria are inadequate",
          "right": "Preventive / Corrective"
        },
        {
          "left": "Communicate selected criteria to activity management",
          "right": "Preventive"
        },
        {
          "left": "Review findings for consistency with the documented criteria",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                         Required evidence"
      ],
      "rows": [
        {
          "left": "Map criteria to engagement objectives and scope",
          "right": "Criteria register, planning memorandum"
        },
        {
          "left": "Assess whether criteria permit meaningful and reliable comparison",
          "right": "Definitions, targets, adequacy assessment"
        },
        {
          "left": "Confirm applicability and currency of selected requirements",
          "right": "Source documents, effective dates, applicability analysis"
        },
        {
          "left": "Review handling of inadequate or missing criteria",
          "right": "Discussion records, alternative criteria, expert input"
        },
        {
          "left": "Verify communication of criteria to management",
          "right": "Emails, minutes, planning documents"
        },
        {
          "left": "Trace sampled findings to the selected criteria and actual condition",
          "right": "Findings, workpapers, source requirements"
        }
      ]
    }
  },
  "13.5": {
    "3": {
      "headers": [
        "Risk                                           Potential consequence"
      ],
      "rows": [
        {
          "left": "Staff lack the necessary expertise",
          "right": "Significant issues are missed or misunderstood"
        },
        {
          "left": "Time budgets are unrealistic",
          "right": "Testing is rushed or incomplete"
        },
        {
          "left": "Technology is unavailable or unsuitable",
          "right": "Data analysis and evidence gathering are restricted"
        },
        {
          "left": "Resource gaps are not escalated",
          "right": "Objectives remain formally unchanged but cannot be achieved"
        },
        {
          "left": "Scope is reduced without assessing implications",
          "right": "Significant risks receive insufficient coverage"
        },
        {
          "left": "Recurring overruns are not analyzed",
          "right": "Planning weaknesses continue"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                             Type"
      ],
      "rows": [
        {
          "left": "Prepare task-based estimates of time, competencies, funding, and technology",
          "right": "Preventive"
        },
        {
          "left": "Match staff competencies to assigned procedures",
          "right": "Preventive"
        },
        {
          "left": "Arrange specialist support when needed",
          "right": "Preventive"
        },
        {
          "left": "Escalate resource deficiencies to the CAE with their expected impact",
          "right": "Corrective"
        },
        {
          "left": "Monitor resource use and remaining work during the engagement",
          "right": "Detective"
        },
        {
          "left": "Analyze significant variances after completion",
          "right": "Detective / Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                                 Required evidence",
        "Procedure                                      Required evidence"
      ],
      "rows": [
        {
          "left": "Compare estimated resources with engagement complexity and planned tasks",
          "right": "Work program, resource plan, time estimates"
        },
        {
          "left": "Assess whether assigned auditors have relevant competencies",
          "right": "Skills matrix, experience records, assignments"
        },
        {
          "left": "Verify availability of required tools and specialist support",
          "right": "Access records, contracts, staffing schedules"
        },
        {
          "left": "Review identified deficiencies and CAE discussions",
          "right": "Resource gap analysis, correspondence, decisions"
        },
        {
          "left": "Assess whether resource-driven scope changes were appropriately handled",
          "right": "Revised scope, approvals, limitation records"
        },
        {
          "left": "Compare actual resource use with budget and examine significant variances",
          "right": "Time records, cost reports, lessons learned"
        }
      ]
    }
  },
  "13.6": {
    "3": {
      "headers": [
        "Risk                                      Potential consequence"
      ],
      "rows": [
        {
          "left": "A generic program is used without adaptation",
          "right": "Significant engagement-specific risks are missed"
        },
        {
          "left": "Tasks do not cover all objectives",
          "right": "Conclusions lack sufficient support"
        },
        {
          "left": "Procedures are vague",
          "right": "Auditors perform inconsistent or ineffective testing"
        },
        {
          "left": "Sampling decisions are unsupported",
          "right": "Results are misinterpreted or improperly generalized"
        },
        {
          "left": "Work begins before program approval",
          "right": "Inappropriate procedures proceed without review"
        },
        {
          "left": "Changes are not controlled",
          "right": "Important coverage is removed or added without adequate oversight"
        }
      ]
    },
    "4": {
      "headers": [
        "Control                                           Type"
      ],
      "rows": [
        {
          "left": "Map objectives, risks, controls, criteria, and procedures",
          "right": "Preventive / Detective"
        },
        {
          "left": "Require specific testing instructions and evidence expectations",
          "right": "Preventive"
        },
        {
          "left": "Assign an auditor to each task",
          "right": "Preventive"
        },
        {
          "left": "Obtain CAE review and approval before implementation",
          "right": "Preventive"
        },
        {
          "left": "Maintain version history and approval of changes",
          "right": "Preventive / Detective"
        },
        {
          "left": "Document sampling design and limits on projection",
          "right": "Preventive"
        },
        {
          "left": "Track completion, workpaper references, and supervisory review",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Procedure                                     Required evidence",
        "Procedure                                       Required evidence"
      ],
      "rows": [
        {
          "left": "Trace each objective to relevant tasks and criteria",
          "right": "Objectives, criteria register, work program"
        },
        {
          "left": "Compare significant risks and controls with planned testing",
          "right": "Risk assessment, control matrix, procedures"
        },
        {
          "left": "Assess whether procedures specify useful methods and tools",
          "right": "Testing instructions, analytical plans"
        },
        {
          "left": "Confirm task assignments and completion records",
          "right": "Assignment fields, dates, workpaper references"
        },
        {
          "left": "Verify approval before implementation",
          "right": "Approval timestamps, fieldwork start records"
        },
        {
          "left": "Review changes for rationale and prompt approval",
          "right": "Version history, change log, approvals"
        },
        {
          "left": "Assess sampling methodology and any projection of results",
          "right": "Population records, selection method, sample rationale"
        },
        {
          "left": "Verify that control design evaluation is documented",
          "right": "Design assessment, testing workpapers"
        }
      ]
    }
  },
  "14.1": {
    "3": {
      "headers": [
        "Risk                                            Potential consequence"
      ],
      "rows": [
        {
          "left": "Reliance on unverified management explanations",
          "right": "Unsupported or biased conclusions."
        },
        {
          "left": "Incomplete data populations",
          "right": "Relevant transactions or exceptions remain undetected."
        },
        {
          "left": "Outdated information",
          "right": "Conclusions do not reflect the period or condition under review."
        },
        {
          "left": "Unrepresentative samples",
          "right": "Results are inappropriately generalized."
        },
        {
          "left": "Unresolved contradictory evidence",
          "right": "Findings misstate the underlying facts."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                          Type"
      ],
      "rows": [
        {
          "left": "Evidence request list linked to work program steps",
          "right": "Preventive"
        },
        {
          "left": "Reconciliation of extracted data to source-system totals",
          "right": "Detective"
        },
        {
          "left": "Recording sources, extraction parameters, dates, and periods",
          "right": "Preventive"
        },
        {
          "left": "Corroboration of significant explanations through independent evidence",
          "right": "Detective"
        },
        {
          "left": "Supervisor review of evidence sufficiency before conclusions are finalized",
          "right": "Detective"
        },
        {
          "left": "Additional testing or revised evidence collection where gaps are identified",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                 Required evidence",
        "Audit procedure                                  Required evidence"
      ],
      "rows": [
        {
          "left": "Map information collected to engagement objectives and work program steps.",
          "right": "Approved work program, evidence request list, indexed workpapers."
        },
        {
          "left": "Evaluate the source and reliability of information supporting significant judgments.",
          "right": "Source records, system descriptions, independent confirmations."
        },
        {
          "left": "Reconcile extracted populations to source totals and investigate differences.",
          "right": "Extraction parameters, record counts, control totals, reconciliation results."
        },
        {
          "left": "Check that evidence covers the relevant period and scope.",
          "right": "Transaction dates, reporting periods, population boundaries."
        },
        {
          "left": "Assess sample selection and the limits of any conclusions drawn from it.",
          "right": "Population description, sampling rationale, sample list, exclusions."
        },
        {
          "left": "Review unresolved evidence gaps and decisions on additional work or potential findings.",
          "right": "Follow-up requests, alternative procedures, supervisor review, documented decisions."
        }
      ]
    }
  },
  "14.2": {
    "3": {
      "headers": [
        "Risk                                   Potential consequence"
      ],
      "rows": [
        {
          "left": "Inappropriate criteria",
          "right": "Acceptable performance is incorrectly reported as deficient, or weaknesses are missed."
        },
        {
          "left": "Incorrect analytical logic",
          "right": "False exceptions or undetected issues."
        },
        {
          "left": "Unexplained variances",
          "right": "Significant conditions remain insufficiently investigated."
        },
        {
          "left": "Premature conversion of exceptions into findings",
          "right": "Unsupported reporting."
        },
        {
          "left": "Unsupported “no issues” conclusions",
          "right": "False assurance about process effectiveness."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                     Type"
      ],
      "rows": [
        {
          "left": "Documentation of criteria before evaluating results",
          "right": "Preventive"
        },
        {
          "left": "Independent review of formulas, scripts, and analytical assumptions",
          "right": "Detective"
        },
        {
          "left": "Exception register recording investigation and disposition",
          "right": "Detective"
        },
        {
          "left": "Approval workflow for changes to the work program",
          "right": "Preventive"
        },
        {
          "left": "Cross-references connecting conclusions to completed analyses",
          "right": "Preventive"
        },
        {
          "left": "Reperformance of selected significant calculations",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                      Required evidence"
      ],
      "rows": [
        {
          "left": "Verify that each analysis uses relevant evaluation criteria.",
          "right": "Criteria register, applicable policies, approved benchmarks."
        },
        {
          "left": "Reperform selected calculations and assess analytical assumptions.",
          "right": "Source data, formulas, scripts, parameters, results."
        },
        {
          "left": "Trace potential findings to evidence of the actual condition.",
          "right": "Exception records, transaction support, observation notes."
        },
        {
          "left": "Review explanations for significant variances and assess corroboration.",
          "right": "Management explanations, supporting documents, additional tests."
        },
        {
          "left": "Check whether additional analysis resulted in approved work program changes.",
          "right": "Revised work programs, change rationale, approvals."
        },
        {
          "left": "Review conclusions where no findings were reported.",
          "right": "Completed tests, results, coverage assessment, conclusion workpaper."
        }
      ]
    }
  },
  "14.3": {
    "3": {
      "headers": [
        "Risk                                 Potential consequence"
      ],
      "rows": [
        {
          "left": "Symptoms treated as root causes",
          "right": "Corrective actions fail to prevent recurrence."
        },
        {
          "left": "Unsupported impact estimates",
          "right": "Findings exaggerate or understate exposure."
        },
        {
          "left": "Inconsistent prioritization",
          "right": "Management directs resources to the wrong issues."
        },
        {
          "left": "Effective compensating controls ignored",
          "right": "Residual risk is overstated."
        },
        {
          "left": "Significant risks omitted",
          "right": "Decision-makers lack important information."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                             Type"
      ],
      "rows": [
        {
          "left": "Standard finding template covering criteria, condition, cause, effect, and priority",
          "right": "Preventive"
        },
        {
          "left": "Defined significance methodology reflecting likelihood and impact",
          "right": "Preventive"
        },
        {
          "left": "Root cause discussions with relevant management",
          "right": "Detective"
        },
        {
          "left": "Review of calculations, assumptions, and exposure estimates",
          "right": "Detective"
        },
        {
          "left": "Calibration review of ratings across engagements",
          "right": "Detective"
        },
        {
          "left": "Escalation of unresolved significant risk assessments",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                   Required evidence"
      ],
      "rows": [
        {
          "left": "Review potential findings for documented evaluation and disposition.",
          "right": "Potential-finding register, evaluation workpapers."
        },
        {
          "left": "Assess whether root causes are supported rather than assumed.",
          "right": "Interviews, process analysis, corroborating records."
        },
        {
          "left": "Recalculate quantified impacts and inspect estimation assumptions.",
          "right": "Calculations, source records, estimation methods."
        },
        {
          "left": "Evaluate how existing controls affect residual risk.",
          "right": "Control design assessments, operating- effectiveness tests."
        },
        {
          "left": "Compare assigned priorities with the approved methodology.",
          "right": "Rating criteria, likelihood and impact assessments, review sign-offs."
        },
        {
          "left": "Confirm that significant risks were communicated as findings.",
          "right": "Final report, relevant interim communications, distribution records."
        }
      ]
    }
  },
  "14.4": {
    "3": {
      "headers": [
        "Risk                                       Potential consequence"
      ],
      "rows": [
        {
          "left": "Generic recommendations",
          "right": "Actions do not address the identified weakness."
        },
        {
          "left": "Actions address symptoms only",
          "right": "Findings recur."
        },
        {
          "left": "Unrealistic or disproportionate solutions",
          "right": "Implementation is delayed or abandoned."
        },
        {
          "left": "Involvement of management without authority",
          "right": "Agreed actions cannot be delivered."
        },
        {
          "left": "Internal audit assumes implementation responsibility",
          "right": "Accountability becomes unclear and objectivity may be affected."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                  Type"
      ],
      "rows": [
        {
          "left": "Finding-to-action mapping showing the cause and risk addressed",
          "right": "Preventive"
        },
        {
          "left": "Feasibility and cost-benefit review",
          "right": "Preventive"
        },
        {
          "left": "Confirmation of the management owner’s authority",
          "right": "Preventive"
        },
        {
          "left": "Documented disagreement-resolution process",
          "right": "Corrective"
        },
        {
          "left": "Defined deliverables and completion evidence for each action",
          "right": "Preventive"
        },
        {
          "left": "Review of whether proposed actions reduce risk to an acceptable level",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                    Required evidence"
      ],
      "rows": [
        {
          "left": "Trace each proposed action to the relevant finding, cause, and exposure.",
          "right": "Finding records, recommendation/action mapping."
        },
        {
          "left": "Evaluate whether the action would reasonably address the underlying problem.",
          "right": "Process analysis, proposed control changes, rationale."
        },
        {
          "left": "Review feasibility and proportionality.",
          "right": "Resource estimates, dependencies, cost- benefit assessment."
        },
        {
          "left": "Verify discussion with management authorized to oversee implementation.",
          "right": "Meeting records, management responses, authority records."
        },
        {
          "left": "Examine disagreements and how they were handled.",
          "right": "Both parties’ positions, escalation records, resolution documentation."
        },
        {
          "left": "Confirm that implementation responsibility remains with management.",
          "right": "Action plans, ownership records, final communication."
        }
      ]
    }
  },
  "14.5": {
    "3": {
      "headers": [
        "Risk                                      Potential consequence"
      ],
      "rows": [
        {
          "left": "Conclusion does not address the objectives",
          "right": "Users cannot determine what the engagement established."
        },
        {
          "left": "Findings assessed only individually",
          "right": "A broader pattern of weakness is overlooked."
        },
        {
          "left": "Overall rating conflicts with evidence",
          "right": "Management receives misleading assurance."
        },
        {
          "left": "Positive results are omitted",
          "right": "Reporting becomes unbalanced."
        },
        {
          "left": "Conclusion extends beyond tested scope",
          "right": "Users assume assurance over unexamined activities."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                        Type"
      ],
      "rows": [
        {
          "left": "Objective-by-objective conclusion assessment",
          "right": "Preventive"
        },
        {
          "left": "Documented analysis of aggregated findings",
          "right": "Detective"
        },
        {
          "left": "Defined rating methodology where ratings are used",
          "right": "Preventive"
        },
        {
          "left": "Supervisor review of consistency between evidence and conclusion",
          "right": "Detective"
        },
        {
          "left": "Review of wording against scope and testing coverage",
          "right": "Detective"
        },
        {
          "left": "Separate conclusion guidance for assurance and advisory engagements",
          "right": "Preventive"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                               Required evidence"
      ],
      "rows": [
        {
          "left": "Map the conclusion to each engagement objective.",
          "right": "Objectives, work program, conclusion workpaper."
        },
        {
          "left": "Assess how findings were considered collectively.",
          "right": "Findings summary, thematic analysis, significance assessment."
        },
        {
          "left": "Compare the overall rating with the established methodology.",
          "right": "Rating definitions, supporting rationale, review records."
        },
        {
          "left": "Verify that judgments on effectiveness are supported by testing.",
          "right": "Control evaluations, test results, evidence references."
        },
        {
          "left": "Check that effective processes are appropriately acknowledged.",
          "right": "Positive test results, final conclusion."
        },
        {
          "left": "Assess whether the conclusion stays within the agreed scope.",
          "right": "Scope statement, coverage records, documented limitations."
        }
      ]
    }
  },
  "14.6": {
    "3": {
      "headers": [
        "Risk                                          Potential consequence"
      ],
      "rows": [
        {
          "left": "Unsupported findings or conclusions",
          "right": "Reported results cannot be substantiated."
        },
        {
          "left": "Missing analytical details",
          "right": "Another competent reviewer cannot repeat the work."
        },
        {
          "left": "Incomplete review evidence",
          "right": "Errors and gaps remain unresolved."
        },
        {
          "left": "Broken references or missing attachments",
          "right": "Evidence cannot be located or verified."
        },
        {
          "left": "Premature deletion or unauthorized alteration",
          "right": "Audit records lose integrity or become unavailable."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                              Type"
      ],
      "rows": [
        {
          "left": "Standard templates with required documentation fields",
          "right": "Preventive"
        },
        {
          "left": "Unique indexing and consistent cross-referencing",
          "right": "Preventive"
        },
        {
          "left": "Review and approval workflow with identifiable sign-offs",
          "right": "Detective"
        },
        {
          "left": "Resolution tracking for review comments",
          "right": "Corrective"
        },
        {
          "left": "Controlled access, version history, and protected storage",
          "right": "Preventive"
        },
        {
          "left": "Retention schedule aligned with applicable requirements",
          "right": "Preventive"
        },
        {
          "left": "Periodic quality review of completed engagement files",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                               Required evidence",
        "Audit procedure                                     Required evidence"
      ],
      "rows": [
        {
          "left": "Check completed files against the documentation methodology.",
          "right": "Documentation policy, file index, completed checklist."
        },
        {
          "left": "Trace reported findings and conclusions to supporting workpapers.",
          "right": "Final communication, finding records, evidence references."
        },
        {
          "left": "Reperform selected analyses using the documentation alone.",
          "right": "Source data, formulas or scripts, sampling details, test instructions."
        },
        {
          "left": "Verify reviewer and chief audit executive review and approval records.",
          "right": "Sign-offs, approval records, review history."
        },
        {
          "left": "Assess whether significant review comments were resolved.",
          "right": "Review notes, responses, amended workpapers, closure records."
        },
        {
          "left": "Inspect record retention arrangements against applicable requirements.",
          "right": "Retention policy, storage records, authorized disposal records."
        },
        {
          "left": "Review access and version controls over engagement documentation.",
          "right": "Access permissions, version history, change records."
        }
      ]
    }
  },
  "15.1": {
    "3": {
      "headers": [
        "Risk                                   Potential consequence"
      ],
      "rows": [
        {
          "left": "Required information is omitted",
          "right": "Readers cannot fully understand the results or required response."
        },
        {
          "left": "Findings or conclusions are unsupported",
          "right": "Decisions are based on inaccurate or unreliable information."
        },
        {
          "left": "Scope limitations are not disclosed",
          "right": "Recipients assume assurance beyond the work performed."
        },
        {
          "left": "Responsibilities or completion dates are unclear",
          "right": "Corrective action is delayed or accountability is disputed."
        },
        {
          "left": "Communication is issued without approval",
          "right": "Errors or inappropriate conclusions reach stakeholders."
        },
        {
          "left": "Distribution is incomplete or inappropriate",
          "right": "Relevant decision-makers do not receive results, or information reaches unintended recipients."
        },
        {
          "left": "An unsupported conformance statement is included",
          "right": "The quality and conformity of the engagement are misrepresented."
        },
        {
          "left": "Issuance is delayed without justification",
          "right": "Significant issues remain unresolved for longer than necessary."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                         Type"
      ],
      "rows": [
        {
          "left": "Final communication template covering required elements and assurance-specific disclosures",
          "right": "Preventive"
        },
        {
          "left": "Report-to-workpaper cross-referencing for findings and conclusions",
          "right": "Preventive"
        },
        {
          "left": "Quality review covering the seven communication characteristics",
          "right": "Detective"
        },
        {
          "left": "Required fields for responsible individuals and planned completion dates",
          "right": "Preventive"
        },
        {
          "left": "Approval workflow preventing issuance before chief audit executive approval",
          "right": "Preventive"
        },
        {
          "left": "Review of scope limitations and engagement nonconformance before issuance",
          "right": "Detective"
        },
        {
          "left": "Controlled distribution list approved for the engagement",
          "right": "Preventive"
        },
        {
          "left": "Tracking of report preparation, approval, and issuance dates",
          "right": "Detective"
        },
        {
          "left": "Review of management actions taken before issuance and the evidence supporting their reported status",
          "right": "Detective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                     Required evidence"
      ],
      "rows": [
        {
          "left": "Inspect final communications for objectives, scope, conclusions, and recommendations or action plans where applicable.",
          "right": "Final communication, approved objectives and scope, reporting template."
        },
        {
          "left": "For assurance engagements, verify inclusion of findings, priorities, scope limitations, and the effectiveness conclusion.",
          "right": "Final report, finding register, scope limitation records, conclusion workpaper."
        },
        {
          "left": "Trace selected findings, figures, and conclusions to supporting workpapers.",
          "right": "Indexed workpapers, calculations, source documents, analysis results."
        },
        {
          "left": "Confirm that the report identifies responsible individuals and planned action completion dates.",
          "right": "Final action plans, management responses, ownership records."
        },
        {
          "left": "Compare actions taken before issuance with how they are described in the communication.",
          "right": "Management updates, implementation evidence, final report wording."
        },
        {
          "left": "Verify that chief audit executive approval preceded issuance and covered the issued version.",
          "right": "Approval records, version history, issuance date."
        },
        {
          "left": "Review the distribution list for appropriate decision-makers and recipients.",
          "right": "Distribution methodology, approved list, transmission records."
        },
        {
          "left": "Assess whether any conformance statement is supported and whether identified nonconformance was properly disclosed.",
          "right": "Supervision records, relevant quality assessment results, nonconformance assessment, final communication."
        },
        {
          "left": "Review timeliness against the function’s methodology and the significance of the results.",
          "right": "Engagement milestones, reporting dates, documented reasons for delay."
        }
      ]
    }
  },
  "15.2": {
    "3": {
      "headers": [
        "Risk                                     Potential consequence"
      ],
      "rows": [
        {
          "left": "Actions are missing from the tracking system",
          "right": "Findings are not followed through to resolution."
        },
        {
          "left": "Closure relies only on unsupported management statements",
          "right": "Unresolved weaknesses are incorrectly reported as closed."
        },
        {
          "left": "Follow-up effort does not reflect significance",
          "right": "High-risk issues receive inadequate scrutiny."
        },
        {
          "left": "Overdue actions are not investigated",
          "right": "Exposure continues without appropriate oversight."
        },
        {
          "left": "Completion dates are repeatedly changed without explanation",
          "right": "Delays are obscured and accountability weakens."
        },
        {
          "left": "Alternative actions are accepted without evaluation",
          "right": "The original risk remains inadequately addressed."
        },
        {
          "left": "Partial implementation is recorded as complete",
          "right": "Reporting overstates progress."
        },
        {
          "left": "Excessive risk acceptance is not identified or escalated",
          "right": "The organization remains exposed beyond its risk tolerance."
        }
      ]
    },
    "4": {
      "headers": [
        "Suggested control                                           Type"
      ],
      "rows": [
        {
          "left": "Central action register reconciled to final engagement communications",
          "right": "Preventive / Detective"
        },
        {
          "left": "Defined follow-up criteria based on finding significance",
          "right": "Preventive"
        },
        {
          "left": "Evidence requirements appropriate to the action and risk",
          "right": "Preventive"
        },
        {
          "left": "Internal audit verification before an action is marked as confirmed complete",
          "right": "Detective"
        },
        {
          "left": "Recorded explanations and chief audit executive review of overdue actions",
          "right": "Detective / Corrective"
        },
        {
          "left": "Date-change history preserving original and revised completion dates",
          "right": "Preventive"
        },
        {
          "left": "Assessment of alternative plans against the original finding and risk",
          "right": "Preventive"
        },
        {
          "left": "Periodic reconciliation of status reports to underlying evidence",
          "right": "Detective"
        },
        {
          "left": "Escalation process linked to the risk-acceptance methodology",
          "right": "Corrective"
        }
      ]
    },
    "5": {
      "headers": [
        "Audit procedure                                           Required evidence",
        "Audit procedure                                  Required evidence"
      ],
      "rows": [
        {
          "left": "Reconcile findings and actions from final communications to the tracking system.",
          "right": "Final reports, action plans, tracking register, reconciliation results."
        },
        {
          "left": "Review the methodology for progress inquiries, risk-based follow-up, and status updates.",
          "right": "Follow-up methodology, significance criteria, responsibilities."
        },
        {
          "left": "Select actions for verification based on significance, age, and reported status.",
          "right": "Finding priorities, due dates, status history, selection rationale."
        },
        {
          "left": "Compare management’s completion statements with supporting evidence.",
          "right": "Management updates, revised procedures, system records, implementation documents."
        },
        {
          "left": "For selected significant actions, test whether the implemented response addresses the finding.",
          "right": "Follow-up test results, transactions after implementation, control-operation evidence."
        },
        {
          "left": "Inspect overdue actions for documented explanations and discussion with the chief audit executive.",
          "right": "Delay explanations, meeting records, escalation correspondence."
        },
        {
          "left": "Review alternative action plans for assessment and continued tracking.",
          "right": "Revised plans, internal audit evaluation, status updates."
        },
        {
          "left": "Evaluate the chief audit executive’s assessment of potentially excessive risk acceptance.",
          "right": "Risk assessments, tolerance criteria, discussions and escalation records."
        },
        {
          "left": "Reconcile board and senior management status reports to the underlying register and confirmation evidence.",
          "right": "Status reports, action register, closure workpapers."
        }
      ]
    }
  }
};
