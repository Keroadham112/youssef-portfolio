import './ProjectCard.css'
import type { ProjectKpi } from '../types/projectAnalysis'

export type { ProjectKpi } from '../types/projectAnalysis'

export type ProjectCardProps = {
  title: string
  /** One or two sentences: outcome, scope, or decision impact — avoid filler. */
  description: string
  /** Dashboard or report screenshot URL (or imported static asset). */
  imageSrc?: string
  imageAlt: string
  kpis: readonly ProjectKpi[]
  tools: readonly string[]
  /** Used when `onViewAnalysis` is not provided. */
  analysisHref?: string
  githubHref: string
  /** Opens the analysis modal instead of navigating. */
  onViewAnalysis?: () => void
  theme?: 'light' | 'dark'
  className?: string
  analysisLabel?: string
  githubLabel?: string
}

function GitHubIcon() {
  return (
    <svg className="project-card__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg className="project-card__icon project-card__icon--sm" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 19h16v2H4v-2zm2-4h2v4H6v-4zm4-6h2v10h-2V9zm4 3h2v7h-2v-7zm4-5h2v12h-2V7z"
      />
    </svg>
  )
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  kpis,
  tools,
  analysisHref,
  githubHref,
  onViewAnalysis,
  theme = 'dark',
  className = '',
  analysisLabel = 'View Analysis',
  githubLabel = 'GitHub',
}: ProjectCardProps) {
  const rootClass = ['project-card', `project-card--${theme}`, className].filter(Boolean).join(' ')

  return (
    <article className={rootClass}>
      <div className="project-card__media">
        <div className="project-card__chrome" aria-hidden="true">
          <span className="project-card__chrome-dot" />
          <span className="project-card__chrome-dot" />
          <span className="project-card__chrome-dot" />
          <span className="project-card__chrome-title">Report view</span>
        </div>
        <div className="project-card__imageWrap">
          {imageSrc ? (
            <img className="project-card__image" src={imageSrc} alt={imageAlt} loading="lazy" />
          ) : (
            <div className="project-card__placeholder" role="img" aria-label={imageAlt}>
              <div className="project-card__placeholder-grid" />
              <div className="project-card__placeholder-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <p className="project-card__eyebrow">
          <ChartIcon />
          Analytics deliverable
        </p>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <dl className="project-card__kpis">
          {kpis.map((k) => (
            <div key={k.label} className="project-card__kpi">
              <dt className="project-card__kpi-label">{k.label}</dt>
              <dd className="project-card__kpi-value">{k.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="project-card__tools" aria-label="Tools used">
          {tools.map((t) => (
            <li key={t} className="project-card__tool">
              {t}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {onViewAnalysis ? (
            <button
              type="button"
              className="project-card__btn project-card__btn--primary"
              onClick={onViewAnalysis}
            >
              {analysisLabel}
            </button>
          ) : (
            <a className="project-card__btn project-card__btn--primary" href={analysisHref ?? '#'}>
              {analysisLabel}
            </a>
          )}
          <a
            className="project-card__btn project-card__btn--ghost"
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            {githubLabel}
          </a>
        </div>
      </div>
    </article>
  )
}
