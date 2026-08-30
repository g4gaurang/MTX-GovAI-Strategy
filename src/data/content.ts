import type { Application, ArchitectureLayer, DetailItem, Opportunity, Phase, RoadmapWave } from '../types'

export const navItems = [
  ['overview', 'Overview'],
  ['challenges', 'Challenges'],
  ['atlas', 'Opportunity Atlas'],
  ['method', 'Method'],
  ['prioritizer', 'Prioritizer'],
  ['architecture', 'Architecture'],
  ['roadmap', 'Roadmap'],
  ['outcomes', 'Outcomes'],
] as const

export const sharedServices = [
  { id: 'document', name: 'Document Intelligence' },
  { id: 'knowledge', name: 'Enterprise Knowledge Assistant' },
  { id: 'contact', name: 'Contact-Center Assistance' },
  { id: 'content', name: 'Correspondence and Content Assistance' },
  { id: 'translation', name: 'Translation and Accessibility Support' },
  { id: 'governance', name: 'AI Identity, Logging, Evaluation, and Monitoring' },
]

const meta = {
  technology: 'Mixed cloud and legacy',
  documentVolume: 'High',
  integrationComplexity: 'Medium',
  dataReadiness: 'Developing',
  modernization: 'Planned',
}

export const applications: Application[] = [
  {
    id: 'benefits', name: 'Benefits Administration', owner: 'Program Operations', users: 'Eligibility specialists', workflowCount: 14,
    ...meta,
    functions: ['Intake', 'Verification', 'Eligibility support', 'Notices', 'Renewals'],
    candidates: ['Document classification', 'Missing-information detection', 'Case summarization', 'Policy knowledge assistance', 'Notice drafting'],
    services: ['document', 'knowledge', 'content', 'translation', 'governance'],
  },
  {
    id: 'licensing', name: 'Licensing and Inspections', owner: 'Regulatory Services', users: 'Reviewers and inspectors', workflowCount: 11,
    ...meta, integrationComplexity: 'High', dataReadiness: 'Moderate',
    functions: ['Application review', 'Inspection preparation', 'Corrective action', 'Complaint intake', 'Renewal'],
    candidates: ['Application completeness review', 'Inspection-history summarization', 'Complaint classification', 'Corrective-action tracking', 'Risk indicators for staff review'],
    services: ['document', 'knowledge', 'content', 'governance'],
  },
  {
    id: 'grants', name: 'Grants Management', owner: 'Office of Grants', users: 'Grant managers and reviewers', workflowCount: 9,
    ...meta, documentVolume: 'Medium', dataReadiness: 'Moderate',
    functions: ['Solicitation support', 'Application intake', 'Review', 'Award administration', 'Monitoring'],
    candidates: ['Application package review', 'Reviewer assistance', 'Award-document preparation', 'Monitoring summary', 'Anomaly identification'],
    services: ['document', 'knowledge', 'content', 'governance'],
  },
  {
    id: 'provider', name: 'Provider Management', owner: 'Provider Services', users: 'Enrollment and compliance staff', workflowCount: 12,
    ...meta, modernization: 'In progress',
    functions: ['Enrollment', 'Credential review', 'Profile maintenance', 'Compliance', 'Communications'],
    candidates: ['Document extraction', 'Credential review assistance', 'Provider-record summarization', 'Compliance reminders', 'Correspondence assistance'],
    services: ['document', 'knowledge', 'content', 'translation', 'governance'],
  },
  {
    id: 'case', name: 'Case Management', owner: 'Human Services Programs', users: 'Caseworkers and supervisors', workflowCount: 16,
    ...meta, integrationComplexity: 'High', dataReadiness: 'Early',
    functions: ['Intake', 'Assessment', 'Service coordination', 'Case review', 'Closure'],
    candidates: ['Case summarization', 'Service-plan drafting assistance', 'Timeline generation', 'Quality review', 'Knowledge retrieval'],
    services: ['document', 'knowledge', 'content', 'translation', 'governance'],
  },
  {
    id: 'contact', name: 'Contact Center', owner: 'Resident Services', users: 'Agents and supervisors', workflowCount: 8,
    ...meta, documentVolume: 'Low', integrationComplexity: 'Medium', dataReadiness: 'Moderate', modernization: 'Active',
    functions: ['Call intake', 'Identity verification', 'Inquiry resolution', 'Escalation', 'Follow-up'],
    candidates: ['Transcription', 'Call summarization', 'Knowledge assistance', 'Suggested responses', 'Routing and escalation support'],
    services: ['knowledge', 'contact', 'content', 'translation', 'governance'],
  },
]

export const challenges = [
  ['Incomplete application visibility', 'Application inventories may omit the business functions, workflows, integrations, owners, costs, and modernization dependencies needed for AI planning.', 'MTX develops an enterprise application and capability map that connects technology assets to the work performed within each program.'],
  ['AI ideas evaluated in isolation', 'Programs may pursue similar document, chatbot, knowledge, or contact-center functions without recognizing opportunities for reuse.', 'MTX identifies common requirements and defines shared AI services that can support several applications under program-specific access and policy controls.'],
  ['Limited workflow detail', 'High-level process diagrams may not reveal manual reviews, exceptions, handoffs, decision points, or information searches.', 'MTX decomposes priority workflows into tasks and evaluates where AI could assist staff, accelerate processing, or improve access to authorized information.'],
  ['Unclear prioritization', 'A promising demonstration may still face weak data, policy constraints, difficult integrations, or limited operational value.', 'MTX scores each opportunity using mission value, workforce impact, reuse potential, data readiness, delivery complexity, risk, and measurability.'],
  ['Governance separated from delivery', 'Responsible-AI principles may remain at the policy level without being translated into workflow and architecture controls.', 'MTX connects governance requirements to human-review points, access controls, evaluation methods, audit records, monitoring, and escalation procedures.'],
  ['Strategy without activation', 'Agencies may receive a list of AI ideas without the sequencing, architecture, ownership, measures, and delivery plans needed for implementation.', 'MTX produces a decision-oriented roadmap and can continue into prototyping, implementation, adoption, evaluation, and operational support.'],
]

export const mappingLayers: DetailItem[] = [
  { title: 'Application Portfolio', description: 'Systems, owners, users, vendors, technologies, integrations, costs, lifecycle status, and modernization plans.' },
  { title: 'Business Capabilities', description: 'The services supported by each application and the relationships among programs, channels, and organizational units.' },
  { title: 'Workflows and Decisions', description: 'Activities, handoffs, documents, exceptions, approval points, information searches, and manual work.' },
  { title: 'Data and Integrations', description: 'Data sources, sensitivity, quality, authorization, lineage, exchange patterns, retention requirements, and access constraints.' },
  { title: 'AI Opportunities', description: 'Tasks suited to extraction, retrieval, summarization, generation, classification, prediction, or agent-assisted execution.' },
  { title: 'Delivery Constraints', description: 'Policy, security, privacy, procurement, workforce, architecture, funding, change readiness, and model-governance considerations.' },
]

export const phases: Phase[] = [
  { eyebrow: 'Phase 1', title: 'Enterprise Discovery', description: 'MTX reviews the application portfolio, strategic plans, architecture, process documentation, operational measures, and current AI activity. Working sessions validate how work is performed.', outputs: ['Application inventory', 'Business-capability map', 'Integration landscape', 'Workflow catalog', 'Baseline measures'] },
  { eyebrow: 'Phase 2', title: 'AI Opportunity Assessment', description: 'Priority workflows are examined at the task level to identify opportunities for automation, decision support, authorized knowledge retrieval, summarization, and agent-assisted execution.', outputs: ['AI opportunity register', 'Workflow-to-AI mappings', 'Shared-capability heatmap', 'Data-readiness findings', 'Preliminary risk classifications'] },
  { eyebrow: 'Phase 3', title: 'Prioritization and Business Case', description: 'Each opportunity is assessed for mission value, workforce impact, reuse potential, data readiness, technical complexity, policy sensitivity, and measurability.', outputs: ['Prioritized opportunity portfolio', 'Value hypotheses', 'Dependency map', 'Pilot recommendations', 'Implementation estimates'] },
  { eyebrow: 'Phase 4', title: 'Architecture and Governance Blueprint', description: 'MTX defines how AI services will interact with agency applications and data, including selection, retrieval, integration, access, evaluation, logging, monitoring, human review, and ownership.', outputs: ['Target architecture', 'Shared AI service model', 'Governance framework', 'Evaluation plan', 'Security and operational requirements'] },
  { eyebrow: 'Phase 5', title: 'Roadmap and Activation', description: 'The agency receives a sequenced roadmap covering foundations, pilots, shared services, application-level implementations, adoption, and operational support. MTX can continue into implementation.', outputs: ['Implementation waves', 'Pilot charters', 'Delivery plans', 'Procurement inputs', 'Performance framework'] },
]

const baseScores = { missionValue: 4, workforceImpact: 4, reusePotential: 4, dataReadiness: 3, feasibility: 3, measurability: 4, complexity: 3, risk: 2 }
export const initialOpportunities: Opportunity[] = [
  { id: 'document', name: 'Enterprise Document Intake', scores: { ...baseScores, missionValue: 5, reusePotential: 5 } },
  { id: 'knowledge', name: 'Employee Knowledge Assistant', scores: { ...baseScores, risk: 2, feasibility: 4 } },
  { id: 'review', name: 'Application Review Assistance', scores: { ...baseScores, missionValue: 5, risk: 4 } },
  { id: 'audit', name: 'Audit Preparation Assistant', scores: { ...baseScores, dataReadiness: 4, measurability: 5 } },
  { id: 'copilot', name: 'Contact-Center Copilot', scores: { ...baseScores, workforceImpact: 5, complexity: 4 } },
]

export const architectureLayers: ArchitectureLayer[] = [
  { title: 'Experience layer', tone: 'cyan', description: 'Channels where residents, providers, and staff interact with agency services.', items: ['Resident and provider portals', 'Staff workspaces', 'Contact center', 'Mobile and field tools'] },
  { title: 'Agency application layer', tone: 'blue', description: 'Systems of record and operational platforms that remain authoritative.', items: ['Case management', 'Benefits systems', 'Licensing', 'Grants', 'Provider management', 'Data and reporting platforms'] },
  { title: 'Shared AI services layer', tone: 'purple', description: 'Reusable, governed capabilities selected according to workflow needs.', items: ['Document intelligence', 'Retrieval and knowledge services', 'Summarization and content assistance', 'Contact-center assistance', 'Workflow agents', 'Evaluation and monitoring'] },
  { title: 'Model and cloud layer', tone: 'indigo', description: 'Platform options evaluated against performance, cost, data, procurement, and operational requirements.', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Agency-approved frontier models', 'Open-source models', 'Hybrid and multi-model patterns'] },
]

export const governanceControls = ['Access and authorization', 'Approved data and knowledge sources', 'Human review and escalation', 'Source traceability', 'Accuracy and safety evaluation', 'Bias and performance testing', 'Prompt and model versioning', 'Usage and decision logging', 'Privacy and records management', 'Drift, cost, and adoption monitoring', 'Incident response and service disablement']

export const roadmap: RoadmapWave[] = [
  { title: 'Establish the Foundation', objectives: ['Confirm governance and decision rights', 'Inventory applications and workflows', 'Identify authorized data sources', 'Establish baseline measures', 'Define shared architecture patterns'], dependencies: 'Executive sponsorship, portfolio access, cross-functional working group', services: 'Identity, logging, evaluation foundations', gate: 'Approved opportunity portfolio and control baseline' },
  { title: 'Launch Focused Pilots', objectives: ['Select high-value, measurable use cases', 'Test model and retrieval performance', 'Validate staff-review procedures', 'Measure operational effects', 'Capture user feedback'], dependencies: 'Authorized pilot data, users, evaluation criteria', services: 'Selected document, knowledge, or contact-center capability', gate: 'Evidence supports expansion, revision, or stop decision' },
  { title: 'Build Shared AI Services', objectives: ['Create reusable document services', 'Establish enterprise knowledge retrieval', 'Implement common logging and evaluation', 'Connect identity and access controls', 'Develop reusable integration patterns'], dependencies: 'Pilot findings, target architecture, service ownership', services: 'Enterprise document, knowledge, governance services', gate: 'Shared services meet security and operational acceptance criteria' },
  { title: 'Scale Across Applications', objectives: ['Expand approved services', 'Add workflow-specific AI', 'Monitor quality, usage, and cost', 'Update governance and training', 'Retire duplicative components where appropriate'], dependencies: 'Production ownership, adoption support, service monitoring', services: 'Application-level assistance built on approved shared patterns', gate: 'Ongoing portfolio review and service health decisions' },
]

export const deliverables: DetailItem[] = [
  ['Enterprise application and capability map', 'Connects systems, owners, capabilities, workflows, dependencies, and lifecycle plans.'],
  ['Priority workflow maps', 'Documents tasks, handoffs, decisions, information needs, and staff-review points.'],
  ['AI opportunity register', 'Records workflow-level opportunities with value, readiness, risk, ownership, and measures.'],
  ['Shared AI services blueprint', 'Defines reusable capabilities and program-specific policy boundaries.'],
  ['Data and integration readiness assessment', 'Identifies authorized sources, quality conditions, interfaces, and remediation needs.'],
  ['Responsible-AI governance model', 'Translates policy into delivery roles, controls, evaluations, records, and escalation paths.'],
  ['Prioritization scores and business cases', 'Provides transparent comparisons, value hypotheses, assumptions, and dependencies.'],
  ['Target architecture and technology options', 'Presents platform-neutral patterns aligned to agency constraints.'],
  ['Pilot recommendations', 'Frames selected use cases, users, scope, controls, measures, and decision gates.'],
  ['Sequenced implementation roadmap', 'Organizes foundations, pilots, shared services, and application expansion into waves.'],
  ['Procurement and funding considerations', 'Identifies acquisition choices, funding dependencies, and inputs for solicitation planning.'],
  ['Performance-measure framework', 'Defines operational, quality, adoption, risk, and cost measures for service review.'],
].map(([title, description]) => ({ title, description }))
