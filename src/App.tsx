import { useState } from 'react'
import './App.css'
import profilePhoto from '../yous.jpeg'
import pharmaDashboardImage from '../WhatsApp Image 2026-04-30 at 2.28.55 AM.jpeg'
import salesDashboardImage from '../sales.png'
import { ProjectAnalysisModal } from './components/ProjectAnalysisModal'
import { ProjectCard } from './components/ProjectCard'
import type { PortfolioProject } from './types/projectAnalysis'

function App() {
  const person = {
    name: 'Youssef Alaa Eldin Mohamed',
    title: 'Chemistry Student & Junior Data Analyst',
    location: 'Giza, Egypt',
    phone: '+201118392245',
    email: 'youssefalaa12yu@gmail.com',
    linkedin: 'https://linkedin.com/in/youssefalaaa',
    photo: profilePhoto,
    tagline: 'Turning data into insights',
    summary:
      'Senior Chemistry student and Junior Data Analyst with experience in Advanced Excel, Power BI, SQL, and Python, along with a strong background in analytical chemistry and laboratory work.',
  } as const

  const kpis = [
    { label: 'Projects', value: '2+' },
    { label: 'Tools', value: 'Excel • Power BI' },
    { label: 'Experience', value: 'Lab + Data' },
  ] as const

  const portfolioProjects: PortfolioProject[] = [
    {
      id: 'sales-excel',
      title: 'Sales Data Analysis',
      subtitle: 'Excel dashboard + KPI tracking',
      description:
        'Consolidated fragmented retail extracts into one KPI-ready model so regional performance could be compared on a single timeline.',
      imageAlt: 'Sales analytics dashboard preview',
      dashboardImageSrc: salesDashboardImage,
      dashboardImageAlt: 'Sales analysis dashboard screenshot',
      kpis: [
        { label: 'Records', value: '15K+' },
        { label: 'KPIs', value: '10' },
        { label: 'Accuracy', value: '97%' },
      ],
      tools: ['Excel', 'Power Query', 'Pivot Tables'],
      githubHref: 'https://github.com/youssefalaa12yu-cyber',
      problem:
        'Leadership received inconsistent Excel extracts from regions, with mismatched product keys and week boundaries, so nobody trusted a single source of truth for sales performance.',
      analysisProcess:
        'Joined and cleaned multi-sheet exports in Power Query, standardized date grains and product hierarchies, built pivot-driven KPI panels, and documented assumptions so refreshes stayed reproducible.',
      keyInsights: [
        'Revenue peaks in July indicating seasonal demand trends',
        'Home & Garden category generates the highest revenue',
        'Premium brand tier contributes the largest share of total revenue',
        'Cairo shows the highest sales concentration among cities in sales',
      ],
      impact: [
        'Established a single source of truth for weekly sales reporting.',
        'Improved visibility of high-margin SKUs for better decision-making.',
        'Reduced reporting inconsistencies across regions.',
      ],
    },
    {
      id: 'pharma-pbi',
      title: 'Pharmaceutical Data Analysis',
      subtitle:
        'Built a unified healthcare analytics layer across hospital sources to standardize operational reporting. 10+ Hospitals • 50K+ Records • 20+ Measures',
      description:
        'Built a governed Power BI reporting system that consolidated visit, patient-mix, and diagnosis-cost signals into one decision-ready view.',
      imageAlt: 'Healthcare operations dashboard preview',
      dashboardImageSrc: pharmaDashboardImage,
      dashboardImageAlt: 'Pharmaceutical analysis dashboard screenshot',
      kpis: [
        { label: 'Tables', value: '8' },
        { label: 'Measures', value: '14' },
        { label: 'Refresh', value: 'Daily' },
      ],
      tools: ['Power BI', 'DAX'],
      githubHref: 'https://github.com/youssefalaa12yu-cyber',
      problem:
        'Hospital operations data was fragmented across departments and file formats, with no unified reporting layer. Teams could not consistently track patient distribution or isolate diagnosis-level cost drivers, which slowed weekly planning and created conflicting interpretations.',
      analysisProcess:
        'Cleaned and standardized multi-source extracts, modeled a star schema in Power BI, and authored reusable DAX measures for visits, cohorts, and diagnosis cost attribution. Delivered an interactive dashboard with consistent filters for hospital, specialty, and period comparisons.',
      keyInsights: [
        'Cairo hospital records the highest number of patient visits compared to other hospitals, indicating higher demand concentration',
        'Elderly patients represent the largest share (~41%) of total visits, highlighting increased pressure on age-related healthcare services',
        'Cardiovascular and hypertension-related diagnoses drive the highest cost per day, contributing most to total treatment expenses',
        'Patient visits vary significantly across hospitals, suggesting uneven resource utilization and potential service imbalance',
      ],
      impact: [
        'Improved reporting clarity through a single, trusted weekly view of visits, distribution, and diagnosis cost.',
        'Enabled faster, better operational decisions on staffing, capacity allocation, and priority service lines.',
        'Reduced reporting inconsistencies by replacing disconnected departmental cuts with standardized metric definitions.',
      ],
    },
  ]

  const [analysisProjectId, setAnalysisProjectId] = useState<string | null>(null)
  const analysisProject =
    analysisProjectId === null
      ? null
      : (portfolioProjects.find((p) => p.id === analysisProjectId) ?? null)

  const skillGroups = [
    {
      title: 'Data Tools',
      items: ['Advanced Excel', 'Power BI', 'SQL', 'Python'],
    },
    {
      title: 'Analysis Skills',
      items: ['Data Cleaning', 'Dashboards', 'KPI Tracking', 'DAX Basics', 'Reporting'],
    },
    {
      title: 'Laboratory Skills',
      items: ['HPLC', 'ICP', 'Spectroscopy', 'Analytical Chemistry', 'QC Documentation'],
    },
    {
      title: 'Soft Skills',
      items: ['Attention to detail', 'Teamwork', 'Communication', 'Time management'],
    },
  ] as const

  const experience = [
    {
      org: 'Pharco',
      role: 'Intern / Trainee',
      focus: 'Laboratory work, QC basics, documentation discipline.',
    },
    {
      org: 'PACHIN',
      role: 'Intern / Trainee',
      focus: 'Quality control exposure and lab workflow support.',
    },
    {
      org: 'RCTW',
      role: 'Intern / Trainee',
      focus: 'Hands-on lab tasks with an emphasis on accuracy and safety.',
    },
    {
      org: 'BUE',
      role: 'Training / Lab exposure',
      focus: 'Academic lab environment and structured experimentation.',
    },
  ] as const

  const education = {
    university: 'Ain Shams University',
    program: 'B.Sc. Chemistry (Senior student)',
    gpa: '—',
    projects: [
      'Photocatalyst for Dye Degradation',
      'Molecular Docking for Hepatitis C',
    ],
  } as const

  return (
    <div className="app">
      <div className="app__visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <header className="topbar">
        <div className="topbar__left">
          <div className="brand">
            <div className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="brand__icon">
                <path
                  d="M10 2h4v2h-1v3.2l4.9 8.7c1.2 2.1-.3 4.1-2.4 4.1H8.5c-2.1 0-3.6-2-2.4-4.1L11 7.2V4h-1V2zm1.8 6.1-4.1 7.3c-.4.8.1 1.6.9 1.6h7c.8 0 1.3-.8.9-1.6l-4.1-7.3c-.3-.5-1-.5-1.3 0z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="brand__text">
              <div className="brand__name">{person.name}</div>
              <div className="brand__meta">{person.location}</div>
            </div>
          </div>
        </div>

        <nav className="topbar__nav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="topbar__right">
          <a
            className="btn btn--ghost"
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn" href="/Youssef_Alaa_Eldin_Mohamed_CV.pdf">
            Download CV
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero" aria-label="Overview">
          <div className="hero__grid">
            <div className="card hero__intro">
              <div className="hero__introGrid">
                <div>
                  <div className="hero__eyebrow">{person.title}</div>
                  <h1 className="hero__title">
                    <span className="hero__iam">I am</span> {person.name}
                  </h1>
                  <p className="hero__tagline">{person.tagline}</p>
                  <p className="hero__summary">{person.summary}</p>
                </div>
                <figure className="hero__photoFrame" aria-label="Profile photo frame">
                  <img src={person.photo} alt={`${person.name} profile`} className="hero__photo" />
                  <div className="hero__photoRing" aria-hidden="true" />
                </figure>
              </div>

              <div className="hero__actions">
                <a
                  className="btn"
                  href="/Youssef_Alaa_Eldin_Mohamed_CV.pdf"
                >
                  Download CV
                </a>
                <a
                  className="btn btn--ghost"
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>
            </div>

            <div className="hero__kpis" aria-label="KPIs">
              <div className="card kpi kpi--header">
                <div className="kpi__label">Analytics Snapshot</div>
                <div className="kpi__value">Dashboard Profile</div>
                <p className="kpi__caption">
                  Chemistry + data analysis with clear reporting and QC mindset.
                </p>
              </div>
              {kpis.map((kpi) => (
                <div key={kpi.label} className="card kpi">
                  <div className="kpi__label">{kpi.label}</div>
                  <div className="kpi__value">{kpi.value}</div>
                  <div className="kpi__spark" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header">
            <h2>Projects</h2>
            <p>Dashboard-style cards with tools, tags, and quick visuals.</p>
          </div>

          <div className="grid grid--2">
            {portfolioProjects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
                kpis={p.kpis}
                tools={p.tools}
                githubHref={p.githubHref}
                onViewAnalysis={() => setAnalysisProjectId(p.id)}
                theme="dark"
              />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <h2>Skills</h2>
            <p>Organized like a BI dashboard: categories with badges.</p>
          </div>

          <div className="grid grid--2">
            {skillGroups.map((g) => (
              <div key={g.title} className="card">
                <div className="card__title">{g.title}</div>
                <div className="tags">
                  {g.items.map((s) => (
                    <span key={s} className="tag tag--soft">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section__header">
            <h2>Experience & Internships</h2>
            <p>QC-focused lab exposure with strong analytical discipline.</p>
          </div>

          <div className="timeline">
            {experience.map((e) => (
              <div key={e.org} className="timeline__row">
                <div className="timeline__dot" aria-hidden="true" />
                <div className="card timeline__card">
                  <div className="timeline__top">
                    <div className="timeline__org">{e.org}</div>
                    <div className="timeline__role">{e.role}</div>
                  </div>
                  <p className="timeline__focus">{e.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__header">
            <h2>Education</h2>
            <p>Academic foundation + graduation projects.</p>
          </div>

          <div className="grid grid--2">
            <div className="card">
              <div className="edu__top">
                <div>
                  <div className="card__title">{education.university}</div>
                  <div className="muted">{education.program}</div>
                </div>
                <div className="edu__gpa">
                  <div className="edu__gpaLabel">GPA</div>
                  <div className="edu__gpaValue">{education.gpa}</div>
                </div>
              </div>

              <div className="divider" />

              <div className="card__title">Graduation Projects</div>
              <ul className="bullets">
                {education.projects.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="card chemistry">
              <div className="card__title">Scientific Profile</div>
              <p className="muted">
                Blending analytical chemistry discipline with BI-style reporting:
                clean datasets, reliable measurements, and clear conclusions.
              </p>
              <div className="chemistry__icons" aria-hidden="true">
                <ChemIcon name="molecule" />
                <ChemIcon name="flask" />
                <ChemIcon name="chart" />
              </div>
              <div className="chemistry__note">
                Focus: QC mindset • reproducibility • visual clarity
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--last">
          <div className="section__header">
            <h2>Contact</h2>
            <p>Open to internships, research roles, and data projects.</p>
          </div>

          <div className="grid grid--3">
            <a className="card contact" href={`mailto:${person.email}`}>
              <div className="contact__icon" aria-hidden="true">
                <ChemIcon name="mail" />
              </div>
              <div className="contact__label">Email</div>
              <div className="contact__value">{person.email}</div>
            </a>
            <a className="card contact" href={`tel:${person.phone}`}>
              <div className="contact__icon" aria-hidden="true">
                <ChemIcon name="phone" />
              </div>
              <div className="contact__label">Phone</div>
              <div className="contact__value">{person.phone}</div>
            </a>
            <a
              className="card contact"
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact__icon" aria-hidden="true">
                <ChemIcon name="link" />
              </div>
              <div className="contact__label">LinkedIn</div>
              <div className="contact__value">/in/youssefalaaa</div>
            </a>
          </div>
        </section>
      </main>

      <ProjectAnalysisModal
        isOpen={analysisProjectId !== null}
        project={analysisProject}
        onClose={() => setAnalysisProjectId(null)}
      />

      <footer className="footer">
        <div className="footer__inner">
          <span>{person.name}</span>
          <span className="footer__sep" aria-hidden="true">
            •
          </span>
          <span>{person.title}</span>
        </div>
      </footer>
    </div>
  )
}

function ChemIcon({
  name,
}: {
  name: 'molecule' | 'flask' | 'chart' | 'mail' | 'phone' | 'link'
}) {
  const common = { className: 'icon', viewBox: '0 0 24 24' } as const
  switch (name) {
    case 'molecule':
      return (
        <svg {...common}>
          <path
            d="M7.8 14.7a3 3 0 1 1 1.2-5.7l3-2.1a3 3 0 1 1 4.8 2.5l-3.1 2.2a3 3 0 1 1-4.9 2.6l-1 .7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="13" r="2.2" fill="currentColor" opacity="0.2" />
          <circle cx="13.8" cy="7.8" r="2.2" fill="currentColor" opacity="0.2" />
          <circle cx="16.8" cy="14.6" r="2.2" fill="currentColor" opacity="0.2" />
        </svg>
      )
    case 'flask':
      return (
        <svg {...common}>
          <path
            d="M10 2h4v2h-1v4.2l4.8 8.4c1.2 2.1-.3 4.4-2.7 4.4H8.9c-2.4 0-3.9-2.3-2.7-4.4L11 8.2V4h-1V2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8.3 15h7.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path
            d="M4 19V5m0 14h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 15l3-4 3 2 4-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="7" cy="15" r="1.3" fill="currentColor" opacity="0.25" />
          <circle cx="10" cy="11" r="1.3" fill="currentColor" opacity="0.25" />
          <circle cx="13" cy="13" r="1.3" fill="currentColor" opacity="0.25" />
          <circle cx="17" cy="7" r="1.3" fill="currentColor" opacity="0.25" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <path
            d="M4.5 7.5h15v9h-15v-9z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M5.2 8.2 12 13.2l6.8-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path
            d="M8 3h8v18H8V3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M11 18h2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'link':
      return (
        <svg {...common}>
          <path
            d="M10 13a4 4 0 0 1 0-6l1-1a4 4 0 0 1 6 6l-1 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11a4 4 0 0 1 0 6l-1 1a4 4 0 0 1-6-6l1-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>
      )
  }
}

export default App
