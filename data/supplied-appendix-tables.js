/* Short embedded tables checked against the supplied PDFs. Not IIA requirements. */
const SUPPLIED_APPENDIX_TABLES = {
  '10.2': {
    'Resource characteristic': {
      columns:['Resource characteristic','Meaning'], rows:[
        ['Appropriate','The function has the necessary mix of knowledge, skills, and abilities.'],
        ['Sufficient','The quantity of available human resources is adequate.'],
        ['Effectively deployed','Assignments optimize achievement of the approved audit plan.']
      ]
    }
  },
  '12.2': {
    'Category': {
      columns:['Category','Possible measure'], rows:[
        ['Mandate coverage','Coverage of engagement objectives expected under the mandate'],
        ['Organizational relevance','Extent to which broader audit conclusions address significant organizational objectives'],
        ['Risk coverage','Percentage of key risks and controls reviewed'],
        ['Delivery','Percentage of the adjusted and approved audit plan completed on time'],
        ['Stakeholder experience','Feedback on engagement understanding, timeliness, and clarity'],
        ['Service balance','Balance of assurance and advisory services relative to strategy'],
        ['Quality','Results of internal or external quality assessments'],
        ['Competencies','Availability of skills needed for scheduled engagements'],
        ['Development','Learning plans aligned with strategy and emerging risks'],
        ['Professional qualifications','Staff holding relevant recognized certifications'],
        ['Management action outcomes','Completed management actions producing the intended results']
      ]
    }
  },
  '13.4': {
    'Source': {
      columns:['Source','Examples'],rows:[
        ['Internal requirements','Policies, procedures, performance indicators, targets'],
        ['External obligations','Laws, regulations, contracts'],
        ['Authoritative practices','Relevant standards, frameworks, guidance, benchmarks'],
        ['Established practices','Consistently applied organizational procedures'],
        ['Control design','Expected control outcomes and operating requirements']
      ]
    }
  },
  '14.1': {
    'Characteristic': {
      columns:['Characteristic','Meaning'],rows:[
        ['Relevant','Supports the engagement objectives, falls within its scope, and contributes to the results.'],
        ['Reliable','Is factual and current. Reliability is strengthened through direct collection, independent sources, corroboration, and effective controls over the source system.'],
        ['Sufficient','Provides an adequate basis for analysis and evaluation and enables an informed, competent person to repeat the work and reach the same conclusions.']
      ]
    }
  },
  '14.3': {
    'Element': {
      columns:['Element','Description'],rows:[
        ['Criteria','What should happen.'],
        ['Condition','What was found.'],
        ['Root cause','Why the condition exists, when identifiable.'],
        ['Effect','Actual consequences or potential exposure.'],
        ['Significance and priority','The assessed importance of the finding.']
      ]
    }
  },
  '14.6': {
    'Workpaper': {
      columns:['Workpaper','Purpose'],rows:[
        ['Planning documentation','Records the basis and direction of the engagement.'],
        ['Process maps, flowcharts, or narratives','Explains how the activity operates.'],
        ['Interview summaries and surveys','Records information obtained from relevant individuals.'],
        ['Risk and control matrix','Connects risks, controls, and planned testing.'],
        ['Testing and analysis records','Shows procedures performed and results obtained.'],
        ['Finding and conclusion workpapers','Supports professional judgments and reported results.'],
        ['Proposed follow-up work','Identifies subsequent verification needs.'],
        ['Final communication and management responses','Records communicated results and responses.']
      ]
    }
  },
  '15.2': {
    'Field': {
      columns:['Field','Purpose'],rows:[
        ['Engagement reference','Links the action to the relevant engagement.'],
        ['Finding reference and title','Identifies the issue being addressed.'],
        ['Finding significance','Supports prioritization and follow-up planning.'],
        ['Recommendation or agreed action','Records the response to the finding.'],
        ['Responsible individual','Identifies management accountability.'],
        ['Original completion date','Preserves the initial commitment.'],
        ['Revised completion date','Records an approved or accepted change, where applicable.'],
        ['Reason for delay or revision','Explains changes in implementation timing.'],
        ['Management-reported status','Records management’s progress statement.'],
        ['Supporting evidence','Links to evidence of implementation.'],
        ['Internal audit verification','Records the procedures performed and their results.'],
        ['Internal audit-confirmed status','Distinguishes verified status from management’s assertion.'],
        ['Alternative action details','Records changes to the proposed response and their assessment.'],
        ['Escalation or risk-acceptance assessment','Documents matters requiring chief audit executive consideration.'],
        ['Last update and confirmation date','Shows the currency of the record.']
      ]
    },
    'Status': {
      columns:['Status','Meaning'],rows:[
        ['Not Started','Management has not begun implementation.'],
        ['In Progress','Implementation is underway.'],
        ['Management Reports Complete — Verification Pending','Management has reported completion; internal audit confirmation is pending.'],
        ['Verified Complete','Internal audit has confirmed implementation through procedures appropriate to the finding’s significance.'],
        ['Partially Implemented','Some elements are complete, but the action is not fully implemented.'],
        ['Alternative Action Under Review','A revised response is being evaluated.']
      ]
    }
  }
};