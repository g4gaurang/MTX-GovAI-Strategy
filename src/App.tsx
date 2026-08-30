import { lazy, Suspense, useEffect, useState } from 'react'
import {
  Activity, ArrowRight, Blocks, BrainCircuit, Building2, Check, ChevronDown, ChevronRight,
  CircleGauge, Layers3, Menu, Network, PanelTop, Route, Scale, ShieldCheck, Sparkles,
  Workflow, X,
} from 'lucide-react'
import {
  applications, architectureLayers, challenges, deliverables, governanceControls, initialOpportunities,
  mappingLayers, navItems, phases, roadmap, sharedServices,
} from './data/content'
import type { Scores } from './types'

const OpportunityChart = lazy(() => import('./components/OpportunityChart'))

const contactLink = '#contact'
const scoreLabels: Record<keyof Scores, string> = {
  missionValue: 'Mission value',
  workforceImpact: 'Workforce impact',
  reusePotential: 'Reuse potential',
  dataReadiness: 'Data readiness',
  feasibility: 'Implementation feasibility',
  measurability: 'Measurability',
  complexity: 'Delivery complexity',
  risk: 'Risk and sensitivity',
}

function SectionHeading({ eyebrow, title, copy, inverse = false }: { eyebrow: string; title: string; copy?: string; inverse?: boolean }) {
  return (
    <div className={`section-heading ${inverse ? 'inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="nav-shell">
        <a className="brand" href="#overview" aria-label="MTX Enterprise AI home">
          <span className="brand-mark">MTX</span>
          <span className="brand-name">Enterprise AI</span>
        </a>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-small mobile-cta" href={contactLink} onClick={() => setOpen(false)}>Request a workshop</a>
        </nav>
        <a className="button button-small desktop-cta" href={contactLink}>Request an AI Opportunity Workshop</a>
        <button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function HeroDiagram() {
  const apps = ['Benefits', 'Licensing', 'Grants', 'Provider', 'Cases', 'Contact center']
  const workflows = ['Application review', 'Audit preparation', 'Case summary', 'Help-desk resolution']
  return (
    <div className="hero-diagram" role="img" aria-label="Agency applications connect through reusable AI services to application-level workflows">
      <div className="diagram-grid" aria-hidden="true" />
      <div className="diagram-column app-nodes">
        <span className="diagram-label">Agency applications</span>
        {apps.map((app) => <div className="diagram-node" key={app}><Blocks size={15} />{app}</div>)}
      </div>
      <div className="diagram-lines lines-left" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="diagram-core">
        <div className="core-orbit" />
        <BrainCircuit aria-hidden="true" />
        <strong>Shared AI<br />services</strong>
        <span>Governed + reusable</span>
      </div>
      <div className="diagram-lines lines-right" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="diagram-column workflow-nodes">
        <span className="diagram-label">Workflow assistance</span>
        {workflows.map((workflow) => <div className="diagram-node" key={workflow}><Workflow size={15} />{workflow}</div>)}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="overview">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> MTX Enterprise AI Strategy &amp; Activation</p>
          <h1>Turn your application portfolio into a practical AI implementation roadmap.</h1>
          <p>MTX helps government agencies map their applications, business functions, workflows, data dependencies, and technology environment. We identify AI opportunities that can be shared across the enterprise, prioritize application-level use cases, and help agencies move from initial discovery through implementation.</p>
          <div className="button-row">
            <a className="button" href="#method">Explore the approach <ArrowRight size={18} /></a>
            <a className="button button-secondary" href={contactLink}>Request an AI Opportunity Workshop</a>
          </div>
          <div className="hero-proof">
            <span><Check /> Portfolio mapped</span>
            <span><Check /> Opportunities scored</span>
            <span><Check /> Delivery sequenced</span>
          </div>
        </div>
        <HeroDiagram />
      </div>
      <div className="hero-image-band">
        <img src="./enterprise-ai-network.png" alt="Abstract network of agency applications, shared intelligence services, and workflow decision paths" />
      </div>
    </section>
  )
}

function Challenges() {
  const icons = [PanelTop, Network, Workflow, CircleGauge, ShieldCheck, Route]
  return (
    <section className="section light" id="challenges">
      <div className="container">
        <SectionHeading eyebrow="The implementation gap" title="AI interest is growing faster than implementation clarity." copy="Government agencies are receiving AI ideas from programs, technology teams, and vendors. These opportunities are often considered separately from the broader application portfolio. The result can be duplicated investments, inconsistent controls, disconnected pilots, and limited ability to reuse successful capabilities." />
        <div className="challenge-grid">
          {challenges.map(([title, challenge, response], index) => {
            const Icon = icons[index]
            return <article className="challenge-card" key={title}>
              <div className="card-icon"><Icon /></div>
              <p className="card-number">0{index + 1}</p>
              <h3>{title}</h3>
              <div><span>Agency challenge</span><p>{challenge}</p></div>
              <div className="response"><span>MTX response</span><p>{response}</p></div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

function OpportunityAtlas() {
  const [mode, setMode] = useState<'application' | 'service'>('application')
  const [appId, setAppId] = useState(applications[0].id)
  const [serviceId, setServiceId] = useState(sharedServices[0].id)
  const app = applications.find((item) => item.id === appId) ?? applications[0]
  const relatedApps = applications.filter((item) => item.services.includes(serviceId))
  const selectedService = sharedServices.find((service) => service.id === serviceId) ?? sharedServices[0]

  return (
    <section className="section atlas-section" id="atlas">
      <div className="container">
        <SectionHeading inverse eyebrow="Signature decision model" title="See the enterprise AI opportunity landscape." copy="The MTX Enterprise AI Opportunity Atlas connects applications, business capabilities, workflows, shared services, and implementation candidates in one decision model." />
        <div className="view-toggle" role="group" aria-label="Opportunity Atlas view">
          <button className={mode === 'application' ? 'selected' : ''} onClick={() => setMode('application')} type="button">View by application</button>
          <button className={mode === 'service' ? 'selected' : ''} onClick={() => setMode('service')} type="button">View by shared service</button>
        </div>
        <div className="atlas-shell">
          <div className="atlas-panel application-panel">
            <div className="panel-heading"><span>01</span><div><p>Agency applications</p><small>Illustrative agency portfolio data</small></div></div>
            <div className="app-list">
              {applications.map((item) => {
                const highlighted = mode === 'application' ? item.id === app.id : relatedApps.some((related) => related.id === item.id)
                return <button type="button" key={item.id} className={highlighted ? 'app-button selected' : 'app-button'} onClick={() => { setAppId(item.id); setMode('application') }}>
                  <Building2 /><span>{item.name}</span><ChevronRight />
                </button>
              })}
            </div>
            {mode === 'application' && <dl className="metadata-grid">
              <div><dt>Business owner</dt><dd>{app.owner}</dd></div>
              <div><dt>Primary users</dt><dd>{app.users}</dd></div>
              <div><dt>Technology</dt><dd>{app.technology}</dd></div>
              <div><dt>Workflows</dt><dd>{app.workflowCount}</dd></div>
              <div><dt>Document volume</dt><dd>{app.documentVolume}</dd></div>
              <div><dt>Integration</dt><dd>{app.integrationComplexity}</dd></div>
              <div><dt>Data readiness</dt><dd>{app.dataReadiness}</dd></div>
              <div><dt>Modernization</dt><dd>{app.modernization}</dd></div>
            </dl>}
          </div>
          <div className="atlas-panel workflow-panel">
            <div className="panel-heading"><span>02</span><div><p>{mode === 'application' ? 'Functions and workflows' : 'Reuse landscape'}</p><small>{mode === 'application' ? app.name : selectedService.name}</small></div></div>
            {mode === 'application' ? <>
              <p className="mini-label">Business functions</p>
              <div className="tag-list">{app.functions.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="mini-label">AI candidates</p>
              <ul className="candidate-list">{app.candidates.map((item) => <li key={item}><Sparkles />{item}</li>)}</ul>
            </> : <>
              <div className="reuse-count"><strong>{relatedApps.length}</strong><span>applications share this capability</span></div>
              <p>This view surfaces potential reuse. Program-specific access, data, workflow, and policy controls would still apply.</p>
              <div className="flow-line"><span>Shared service</span><ArrowRight /><span>Program controls</span><ArrowRight /><span>Workflow use</span></div>
            </>}
          </div>
          <div className="atlas-panel service-panel">
            <div className="panel-heading"><span>03</span><div><p>Shared AI services</p><small>Select to trace reuse</small></div></div>
            <div className="service-list">
              {sharedServices.map((service) => {
                const active = mode === 'service' ? service.id === serviceId : app.services.includes(service.id)
                return <button type="button" className={active ? 'service-button selected' : 'service-button'} key={service.id} onClick={() => { setServiceId(service.id); setMode('service') }}>
                  <span className="service-dot" /><span>{service.name}</span>{active && <Check />}
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MappingModel() {
  const [selected, setSelected] = useState(0)
  return (
    <section className="section light">
      <div className="container split-heading">
        <SectionHeading eyebrow="Connected context" title="What MTX maps before recommending AI." copy="A use case becomes actionable when it is connected to the systems, work, information, controls, and constraints around it." />
        <div className="layer-stack">
          {mappingLayers.map((layer, index) => (
            <div className={selected === index ? 'layer-row selected' : 'layer-row'} key={layer.title}>
              <button type="button" aria-expanded={selected === index} onClick={() => setSelected(index)}>
                <span>0{index + 1}</span><strong>{layer.title}</strong><ChevronDown />
              </button>
              {selected === index && <p>{layer.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Method() {
  const [selected, setSelected] = useState(0)
  const phase = phases[selected]
  return (
    <section className="section method-section" id="method">
      <div className="container">
        <SectionHeading eyebrow="Repeatable delivery method" title="Move from portfolio discovery to controlled activation." copy="Five connected phases turn enterprise context into decisions, architecture, and implementation work." />
        <div className="stepper" role="tablist" aria-label="MTX delivery phases">
          {phases.map((item, index) => <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)} key={item.title}>
            <span>{index + 1}</span><small>{item.eyebrow}</small><strong>{item.title}</strong>
          </button>)}
        </div>
        <div className="phase-detail" role="tabpanel">
          <div><p className="eyebrow">{phase.eyebrow}</p><h3>{phase.title}</h3><p>{phase.description}</p></div>
          <div><p className="mini-label">Decision-ready outputs</p><ul>{phase.outputs.map((output) => <li key={output}><Check />{output}</li>)}</ul></div>
        </div>
      </div>
    </section>
  )
}

function calculateScore(scores: Scores) {
  const weights: Record<keyof Scores, number> = {
    missionValue: .2, workforceImpact: .15, reusePotential: .15, dataReadiness: .15,
    feasibility: .1, measurability: .1, complexity: .075, risk: .075,
  }
  return Math.round((Object.keys(scores) as (keyof Scores)[]).reduce((sum, key) => {
    const normalized = key === 'complexity' || key === 'risk' ? (5 - scores[key]) / 4 : (scores[key] - 1) / 4
    return sum + normalized * weights[key]
  }, 0) * 100)
}

function classification(score: number) {
  if (score >= 80) return 'Pilot Candidate'
  if (score >= 65) return 'Prepare for Implementation'
  if (score >= 50) return 'Resolve Dependencies'
  return 'Monitor or Redesign'
}

function level(value: number) {
  return value >= 4 ? 'High' : value >= 2.75 ? 'Moderate' : 'Developing'
}

function Prioritizer() {
  const [items, setItems] = useState(initialOpportunities)
  const [selectedId, setSelectedId] = useState(items[0].id)
  const [compare, setCompare] = useState([items[0].id, items[1].id])
  const selected = items.find((item) => item.id === selectedId) ?? items[0]
  const score = calculateScore(selected.scores)
  const valueScore = (selected.scores.missionValue + selected.scores.workforceImpact + selected.scores.reusePotential) / 3
  const readinessScore = (selected.scores.dataReadiness + selected.scores.feasibility + selected.scores.measurability) / 3

  const updateScore = (key: keyof Scores, value: number) => {
    setItems((current) => current.map((item) => item.id === selected.id ? { ...item, scores: { ...item.scores, [key]: value } } : item))
  }
  const chartData = compare.map((id) => {
    const opportunity = items.find((item) => item.id === id)!
    return { name: opportunity.name.replace('Enterprise ', '').replace('Employee ', ''), score: calculateScore(opportunity.scores) }
  })

  return (
    <section className="section prioritizer-section" id="prioritizer">
      <div className="container">
        <SectionHeading inverse eyebrow="Interactive decision tool" title="Prioritize opportunities with transparent criteria." copy="Adjust the illustrative scores to see how mission value, readiness, delivery conditions, and risk change the recommended path." />
        <div className="prioritizer-shell">
          <div className="opportunity-selector">
            <p className="mini-label">Select an opportunity</p>
            {items.map((item) => <button type="button" className={selected.id === item.id ? 'selected' : ''} key={item.id} onClick={() => setSelectedId(item.id)}>
              <span>{item.name}</span><strong>{calculateScore(item.scores)}</strong>
            </button>)}
          </div>
          <div className="score-controls">
            <div className="control-header"><div><p className="mini-label">Scoring workspace</p><h3>{selected.name}</h3></div><span className="illustrative-pill">Illustrative model</span></div>
            <div className="sliders">
              {(Object.keys(scoreLabels) as (keyof Scores)[]).map((key) => (
                <label key={key}>
                  <span>{scoreLabels[key]} <output>{selected.scores[key]} / 5</output></span>
                  <input type="range" min="1" max="5" value={selected.scores[key]} onChange={(event) => updateScore(key, Number(event.target.value))} />
                </label>
              ))}
            </div>
          </div>
          <aside className="score-result" aria-live="polite">
            <p className="mini-label">Priority score</p>
            <div className="score-ring" style={{ '--score': `${score * 3.6}deg` } as React.CSSProperties}><strong>{score}</strong><span>/ 100</span></div>
            <h3>{classification(score)}</h3>
            <dl>
              <div><dt>Value</dt><dd>{level(valueScore)}</dd></div>
              <div><dt>Readiness</dt><dd>{level(readinessScore)}</dd></div>
              <div><dt>Risk</dt><dd>{selected.scores.risk >= 4 ? 'Elevated' : selected.scores.risk >= 3 ? 'Moderate' : 'Lower'}</dd></div>
              <div><dt>Suggested wave</dt><dd>{score >= 80 ? 'Wave 2' : score >= 65 ? 'Wave 3' : score >= 50 ? 'Wave 1' : 'Discovery'}</dd></div>
            </dl>
          </aside>
        </div>
        <div className="comparison-card">
          <div className="comparison-heading">
            <div><p className="mini-label">Opportunity comparison</p><h3>Compare priority scores</h3></div>
            <div className="compare-checks">
              {items.map((item) => <label key={item.id}><input type="checkbox" checked={compare.includes(item.id)} onChange={() => setCompare((current) => current.includes(item.id) ? (current.length > 2 ? current.filter((id) => id !== item.id) : current) : [...current, item.id])} />{item.name}</label>)}
            </div>
          </div>
          <div className="chart-wrap" role="img" aria-label={`Priority score comparison: ${chartData.map((item) => `${item.name} ${item.score}`).join(', ')}`}>
            <Suspense fallback={<div className="chart-loading">Loading comparison chart…</div>}>
              <OpportunityChart data={chartData} />
            </Suspense>
          </div>
          <p className="fine-print">The scoring model is illustrative and would be calibrated to agency priorities, policies, and risk tolerances.</p>
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  const [selected, setSelected] = useState(2)
  return (
    <section className="section architecture-section" id="architecture">
      <div className="container">
        <SectionHeading eyebrow="Composable by design" title="A platform-neutral architecture shaped around agency needs." copy="MTX evaluates technology options according to the use case, agency architecture, data sensitivity, model performance, operating cost, integration requirements, and procurement constraints." />
        <div className="architecture-shell">
          <div className="architecture-stack">
            {architectureLayers.map((layer, index) => <button type="button" key={layer.title} className={`architecture-layer ${layer.tone} ${selected === index ? 'selected' : ''}`} onClick={() => setSelected(index)} aria-pressed={selected === index}>
              <span><Layers3 /><strong>{layer.title}</strong></span>
              <span className="architecture-items">{layer.items.map((item) => <i key={item}>{item}</i>)}</span>
              <ChevronRight />
            </button>)}
            <div className="governance-rail"><ShieldCheck /><strong>Governance and control layer</strong><span>Identity · authorization · human review · evaluation · logging · monitoring</span></div>
          </div>
          <aside className="architecture-detail">
            <p className="eyebrow">Selected layer</p><h3>{architectureLayers[selected].title}</h3><p>{architectureLayers[selected].description}</p>
            <ul>{architectureLayers[selected].items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            <p className="fine-print">Options are selected by implementation context. Every technology is not required for every use case.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ResponsibleAI() {
  return (
    <section className="section governance-section">
      <div className="container">
        <SectionHeading inverse eyebrow="Responsible AI in operation" title="Connect responsible-AI policy to workflow controls." copy="MTX identifies the role AI will play in each process and documents where staff review, approval, or escalation is required. Higher-risk decisions remain with authorized agency personnel. Governance requirements are translated into architecture, workflow, evaluation, and operating controls." />
        <div className="principle"><Scale /><div><p>Operating principle</p><strong>AI supports authorized staff. Agencies retain decision authority for eligibility, licensing, enforcement, payments, appeals, safety, and other consequential actions.</strong></div></div>
        <div className="control-matrix">
          {governanceControls.map((control, index) => <div key={control}><span>{String(index + 1).padStart(2, '0')}</span><p>{control}</p><Check /></div>)}
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  const [selected, setSelected] = useState(0)
  const wave = roadmap[selected]
  return (
    <section className="section roadmap-section" id="roadmap">
      <div className="container">
        <SectionHeading eyebrow="Sequenced activation" title="Build foundations, learn through pilots, then scale reusable services." copy="Select a wave to review its objectives, dependencies, sample services, and decision gate." />
        <div className="roadmap-tabs" role="tablist" aria-label="Implementation roadmap">
          {roadmap.map((item, index) => <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)} key={item.title}>
            <span>Wave {index + 1}</span><strong>{item.title}</strong>
          </button>)}
        </div>
        <div className="roadmap-detail">
          <div><p className="mini-label">Wave {selected + 1} objectives</p><h3>{wave.title}</h3><ul>{wave.objectives.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
          <dl>
            <div><dt>Dependencies</dt><dd>{wave.dependencies}</dd></div>
            <div><dt>Sample services</dt><dd>{wave.services}</dd></div>
            <div><dt>Decision gate</dt><dd>{wave.gate}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}

const strategyMetrics = [
  ['Applications mapped', '24'], ['Business capabilities documented', '42'], ['Workflows assessed', '31'], ['Manual tasks identified', '68'],
  ['Shared AI services discovered', '6'], ['Use cases evaluated', '27'], ['Pilot candidates identified', '4'], ['Dependencies requiring action', '13'],
]
const performanceMeasures = ['Processing time', 'Staff effort per transaction', 'Document-review quality', 'Contact-center handling time', 'First-contact resolution', 'Rework rate', 'Audit-preparation time', 'Help-desk resolution time', 'Human override rate', 'Escalation rate', 'Response grounding', 'Adoption and cost per transaction']

function Outcomes() {
  const [tab, setTab] = useState<'strategy' | 'performance'>('strategy')
  const [expanded, setExpanded] = useState<number | null>(0)
  return (
    <section className="section outcomes-section" id="outcomes">
      <div className="container">
        <SectionHeading eyebrow="Measures and evidence" title="Measure the opportunity portfolio and implemented services." copy="The measurement model shifts from discovery outputs to operational performance as services move into use." />
        <div className="analytics-card">
          <div className="tab-list" role="tablist" aria-label="Measurement views">
            <button type="button" role="tab" aria-selected={tab === 'strategy'} className={tab === 'strategy' ? 'selected' : ''} onClick={() => setTab('strategy')}>Strategy engagement outputs</button>
            <button type="button" role="tab" aria-selected={tab === 'performance'} className={tab === 'performance' ? 'selected' : ''} onClick={() => setTab('performance')}>Implementation performance</button>
          </div>
          {tab === 'strategy' ? <div className="metrics-panel" role="tabpanel">
            <p className="illustrative-label">Illustrative engagement view</p>
            <div className="metrics-grid">{strategyMetrics.map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span><small>Illustrative</small></div>)}</div>
          </div> : <div className="measure-panel" role="tabpanel">
            <div><Activity /><h3>Measures an agency may track</h3><p>Targets and baselines are defined for the selected workflow and operating environment.</p></div>
            <ul>{performanceMeasures.map((measure) => <li key={measure}><CircleGauge />{measure}</li>)}</ul>
          </div>}
        </div>
        <div className="deliverables-heading"><p className="eyebrow">Engagement deliverables</p><h2>Decision tools designed for continued use.</h2></div>
        <div className="deliverables-grid">
          {deliverables.map((item, index) => <article className={expanded === index ? 'deliverable expanded' : 'deliverable'} key={item.title}>
            <button type="button" aria-expanded={expanded === index} onClick={() => setExpanded(expanded === index ? null : index)}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><ChevronDown />
            </button>
            {expanded === index && <p>{item.description}</p>}
          </article>)}
        </div>
      </div>
    </section>
  )
}

function WhyMTX() {
  const pillars = [
    ['Public-sector workflow knowledge', 'Frame opportunities around program rules, staff responsibilities, resident needs, and consequential decisions.'],
    ['Enterprise application perspective', 'Connect use cases to systems of record, modernization plans, shared capabilities, and operating ownership.'],
    ['Platform-neutral technology evaluation', 'Compare cloud, model, retrieval, integration, and deployment options against agency constraints.'],
    ['Strategy-to-implementation continuity', 'Carry decisions, measures, architecture, and controls into pilots, delivery, adoption, and service review.'],
  ]
  return (
    <section className="section why-section">
      <div className="container why-grid">
        <div>
          <SectionHeading inverse eyebrow="Why MTX" title="Connect public-sector operations, enterprise architecture, and implementation." />
          <p>MTX combines public-sector program knowledge with workflow design, enterprise platforms, cloud architecture, data engineering, and AI implementation. This allows AI opportunities to be evaluated within the agency’s operating environment rather than as isolated technology experiments.</p>
          <p>Each recommended use case is connected to a workflow, business owner, authorized data source, risk classification, architecture pattern, success measure, and delivery sequence. MTX can remain engaged through prototyping, implementation, adoption, evaluation, and ongoing improvement.</p>
        </div>
        <div className="pillar-grid">{pillars.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
  )
}

function Closing() {
  return (
    <>
      <section className="closing-section" id="contact">
        <div className="container closing-grid">
          <div><p className="eyebrow">Start with the operating landscape</p><h2>Create an AI roadmap grounded in how your agency operates.</h2><p>Start with an agency, department, program portfolio, or selected group of applications. MTX will map the operating landscape, identify reusable AI services, prioritize workflow-level opportunities, and develop a practical path from initial pilots to enterprise adoption.</p></div>
          <div className="closing-actions"><a className="button" href="mailto:enterprise-ai@mtxb2b.com">Request an AI Opportunity Workshop <ArrowRight /></a><a className="text-link" href="#method">Review the MTX Method <ChevronRight /></a></div>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div><span className="brand-mark">MTX</span><h3>Enterprise AI Strategy &amp; Activation</h3><p>A repeatable strategy-to-implementation service for government agencies.</p></div>
          <nav aria-label="Footer navigation">{navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <div><a href="mailto:enterprise-ai@mtxb2b.com">Contact MTX</a><p>© {new Date().getFullYear()} MTX Group</p></div>
        </div>
        <div className="container disclaimer">Prototype content is provided for discussion purposes. Illustrative data and use cases would be validated against each agency’s policies, systems, data, and operating environment.</div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Challenges />
        <OpportunityAtlas />
        <MappingModel />
        <Method />
        <Prioritizer />
        <Architecture />
        <ResponsibleAI />
        <Roadmap />
        <Outcomes />
        <WhyMTX />
        <Closing />
      </main>
    </>
  )
}
