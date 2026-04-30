import { useEffect, useState } from 'react'
import { Modal } from './Modal'
import type { PortfolioProject } from '../types/projectAnalysis'
import './ProjectAnalysisModal.css'

export type ProjectAnalysisModalProps = {
  isOpen: boolean
  onClose: () => void
  project: PortfolioProject | null
}

const ZOOM_LEVELS = [1, 1.5, 2] as const

export function ProjectAnalysisModal({ isOpen, onClose, project }: ProjectAnalysisModalProps) {
  const [zoomIndex, setZoomIndex] = useState(0)

  useEffect(() => {
    setZoomIndex(0)
  }, [project?.id])

  if (!isOpen || !project) return null

  const titleId = `analysis-modal-title-${project.id}`
  const fullSrc = project.dashboardImageSrc ?? project.imageSrc
  const fullAlt = project.dashboardImageAlt ?? project.imageAlt
  const imageGrid = project.dashboardImages
  const zoom = ZOOM_LEVELS[zoomIndex]

  const cycleZoom = () => {
    setZoomIndex((i) => (i + 1) % ZOOM_LEVELS.length)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId} className="modal__dialog--analysis">
      <div className="analysis-modal">
        <header className="analysis-modal__header">
          <div className="analysis-modal__headerText">
            <p className="analysis-modal__eyebrow">Case study</p>
            <h2 id={titleId} className="analysis-modal__title">
              {project.title}
            </h2>
            {project.subtitle ? <p className="analysis-modal__subtitle">{project.subtitle}</p> : null}
          </div>
          <button type="button" className="analysis-modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="analysis-modal__body">
          <section className="analysis-modal__section" aria-labelledby={`${project.id}-problem`}>
            <h3 id={`${project.id}-problem`} className="analysis-modal__h">
              Problem
            </h3>
            <p className="analysis-modal__p">{project.problem}</p>
          </section>

          <section className="analysis-modal__section" aria-labelledby={`${project.id}-tools`}>
            <h3 id={`${project.id}-tools`} className="analysis-modal__h">
              Tools used
            </h3>
            <ul className="analysis-modal__badges" aria-label="Tools">
              {project.tools.map((t) => (
                <li key={t} className="analysis-modal__badge">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="analysis-modal__section" aria-labelledby={`${project.id}-process`}>
            <h3 id={`${project.id}-process`} className="analysis-modal__h">
              Analysis &amp; process
            </h3>
            <p className="analysis-modal__p">{project.analysisProcess}</p>
          </section>

          <section
            className="analysis-modal__section analysis-modal__section--insights"
            aria-labelledby={`${project.id}-insights`}
          >
            <h3 id={`${project.id}-insights`} className="analysis-modal__h analysis-modal__h--insights">
              Key insights
            </h3>
            <ul className="analysis-modal__insights">
              {project.keyInsights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section
            className="analysis-modal__section analysis-modal__section--impact"
            aria-labelledby={`${project.id}-impact`}
          >
            <h3 id={`${project.id}-impact`} className="analysis-modal__h analysis-modal__h--impact">
              Impact
            </h3>
            <ul className="analysis-modal__impact">
              {project.impact.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="analysis-modal__section" aria-labelledby={`${project.id}-dash`}>
            <div className="analysis-modal__dashHead">
              <h3 id={`${project.id}-dash`} className="analysis-modal__h">
                Full dashboard
              </h3>
              <div className="analysis-modal__zoomTools">
                <span className="analysis-modal__zoomLabel">Zoom</span>
                {ZOOM_LEVELS.map((z, i) => (
                  <button
                    key={z}
                    type="button"
                    className={`analysis-modal__zoomBtn${i === zoomIndex ? ' analysis-modal__zoomBtn--active' : ''}`}
                    onClick={() => setZoomIndex(i)}
                  >
                    {z === 1 ? '100%' : z === 1.5 ? '150%' : '200%'}
                  </button>
                ))}
              </div>
            </div>
            <figure className="analysis-modal__figure">
              <button
                type="button"
                className="analysis-modal__imgBtn"
                onClick={cycleZoom}
                title="Click to cycle zoom (100% → 150% → 200%)"
                aria-label="Cycle dashboard zoom level"
              >
                {imageGrid?.length ? (
                  <div
                    className="analysis-modal__imageGrid"
                    role="group"
                    aria-label={fullAlt}
                    style={{ width: `${zoom * 100}%` }}
                  >
                    {imageGrid.map((image) => (
                      <img key={image.src} src={image.src} alt={image.alt} className="analysis-modal__gridImg" />
                    ))}
                  </div>
                ) : fullSrc ? (
                  <img
                    src={fullSrc}
                    alt={fullAlt}
                    className="analysis-modal__img"
                    style={{ width: `${zoom * 100}%`, maxWidth: 'none', height: 'auto' }}
                    draggable={false}
                  />
                ) : (
                  <div className="analysis-modal__placeholder" role="img" aria-label={fullAlt}>
                    <div className="analysis-modal__placeholderInner">
                      <span className="analysis-modal__placeholderHint">Dashboard preview</span>
                      <span className="analysis-modal__placeholderSub">
                        Add `dashboardImageSrc` or `imageSrc` to show your report here.
                      </span>
                    </div>
                  </div>
                )}
              </button>
            </figure>
            <p className="analysis-modal__hint">Scroll inside the frame when zoomed. Click the image to cycle zoom.</p>
          </section>
        </div>
      </div>
    </Modal>
  )
}
