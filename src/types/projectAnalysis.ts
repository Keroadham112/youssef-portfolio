export type ProjectKpi = {
  label: string
  value: string
}

/** Full project payload for the card + analysis modal. */
export type PortfolioProject = {
  id: string
  title: string
  subtitle?: string
  /** Short impact line on the card. */
  description: string
  imageSrc?: string
  imageAlt: string
  kpis: readonly ProjectKpi[]
  tools: readonly string[]
  githubHref: string
  /** Business / stakeholder problem (modal). */
  problem: string
  /** What you did: cleaning, modeling, dashboard, etc. */
  analysisProcess: string
  /** Headline findings (modal). */
  keyInsights: readonly string[]
  /** Business value: clarity, decisions, consistency, etc. (modal). */
  impact: readonly string[]
  /** Optional larger screenshot; falls back to `imageSrc` when omitted. */
  dashboardImageSrc?: string
  dashboardImageAlt?: string
}
