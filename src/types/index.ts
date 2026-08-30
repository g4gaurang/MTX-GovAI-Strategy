export type Application = {
  id: string
  name: string
  owner: string
  users: string
  technology: string
  workflowCount: number
  documentVolume: string
  integrationComplexity: string
  dataReadiness: string
  modernization: string
  functions: string[]
  candidates: string[]
  services: string[]
}

export type DetailItem = {
  title: string
  description: string
}

export type Phase = DetailItem & {
  eyebrow: string
  outputs: string[]
}

export type ArchitectureLayer = DetailItem & {
  items: string[]
  tone: string
}

export type RoadmapWave = {
  title: string
  objectives: string[]
  dependencies: string
  services: string
  gate: string
}

export type Scores = {
  missionValue: number
  workforceImpact: number
  reusePotential: number
  dataReadiness: number
  feasibility: number
  measurability: number
  complexity: number
  risk: number
}

export type Opportunity = {
  id: string
  name: string
  scores: Scores
}
