import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

type LensCard = {
  title: string;
  label: string;
  bullets: string[];
};

type Pillar = {
  title: string;
  tools: string[];
};

type ActionMapItem = {
  step: string;
  stakeholder: string;
  action: string;
  outcome: string;
};

type GuidanceStep = {
  id: number;
  label: string;
  summary: string;
};

type BusinessStory = {
  title: string;
  what: string;
  outcome: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
};

type Project = {
  id: number;
  name: string;
  url: string;
  categories: string[];
  summary: string;
  highlights: string[];
};

type InterestTrackId = 'ds-analytics' | 'genai-mlops' | 'finance-healthcare';

type InterestTrack = {
  id: InterestTrackId;
  title: string;
  shortLine: string;
  projectIds: number[];
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'why-hire', label: 'Why Hire Me' },
  { id: 'business', label: 'Business Lens' },
  { id: 'guidance', label: 'Business Guidance' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const impactStats: ImpactStat[] = [
  {
    value: '17%',
    label: 'Sales conversion lift',
    detail: 'A/B-tested recommendations improved advisor conversion actions.',
  },
  {
    value: '40m -> 30s',
    label: 'Research time reduction',
    detail: 'Internal RAG cut research retrieval to seconds.',
  },
  {
    value: '55%',
    label: 'False-positive reduction',
    detail: 'LangGraph quality loops reduced pre-rollout noise.',
  },
  {
    value: '15',
    label: 'Production-grade projects',
    detail: 'Shipped assets across analytics, MLOps, and healthcare AI.',
  },
];

const lensCards: LensCard[] = [
  {
    title: 'Recruiter View',
    label: '30-second fit',
    bullets: [
      'Forecast error: 7.5% -> 1.65%',
      'Research retrieval: 40 min -> under 30 sec',
      'End-to-end delivery: strategy through production',
    ],
  },
  {
    title: 'Hiring Manager View',
    label: 'Technical depth',
    bullets: [
      'LangGraph RAG with relevance control loops',
      'RF segmentation, chi-square hypothesis validation',
      'MLOps: MLflow, Docker, FastAPI, CI/CD',
    ],
  },
];

const pillars: Pillar[] = [
  {
    title: 'Predictive Modeling',
    tools: ['Forecasting', 'Segmentation', 'Experiment Design'],
  },
  {
    title: 'Analytics Engineering',
    tools: ['SQL', 'Airflow', 'Snowflake', 'Power BI/Tableau'],
  },
  {
    title: 'Generative AI',
    tools: ['LangChain/LangGraph', 'RAGAS', 'FastAPI', 'MLflow', 'Docker'],
  },
];

const actionMap: ActionMapItem[] = [
  {
    step: 'Frame the decision',
    stakeholder: 'Business Lead / Product Owner',
    action: 'Define KPI and decision owner upfront',
    outcome: 'Prevents technically impressive but unused systems',
  },
  {
    step: 'Model with context',
    stakeholder: 'Analysts and Domain SMEs',
    action: 'Prioritize segments, risks, and opportunities weekly',
    outcome: 'Improves trust and action adoption',
  },
  {
    step: 'Operationalize delivery',
    stakeholder: 'Data / Platform Teams',
    action: 'Deploy with runbooks, rollback paths, and alerts',
    outcome: 'Reduces downtime and service disruption',
  },
  {
    step: 'Close the loop',
    stakeholder: 'Functional Teams',
    action: 'Track actions taken and KPI movement',
    outcome: 'Transforms insights into measurable execution',
  },
];

const guidanceSteps: GuidanceStep[] = [
  {
    id: 1,
    label: 'Align on Objective',
    summary: 'KPI, decision owner, and ROI logic defined first',
  },
  {
    id: 2,
    label: 'Build for Operations',
    summary: 'Pipelines matched to data freshness and action cadence',
  },
  {
    id: 3,
    label: 'Package for Action',
    summary: 'Output as prioritized decisions, not raw model scores',
  },
  {
    id: 4,
    label: 'Close the Loop',
    summary: 'Monitoring, drift checks, and KPI impact reviews',
  },
];

const businessStories: BusinessStory[] = [
  {
    title: 'Advisor Forecasting & Segmentation - MFS',
    what: 'Prophet + RF segmentation across 500 advisors, 200GB+ inputs',
    outcome: 'Forecast error: 7.5% -> 1.65% | Conversion lift: 17%',
  },
  {
    title: 'Research Intelligence RAG Platform - MFS',
    what: 'LangGraph retrieval with query rewriting over internal docs',
    outcome: 'Discovery time: 40 min -> under 30 sec',
  },
  {
    title: 'Churn & Risk Workflows',
    what: 'MLflow + FastAPI + Docker serving pipeline, CI/CD deployed',
    outcome: '88% recall | Sub-10ms inference | Reproducible lifecycle',
  },
];

const experiences: Experience[] = [
  {
    role: 'ML Engineer (Part-time)',
    company: 'Squark AI',
    period: 'Mar 2026 - Present',
    location: 'Remote, US',
    achievements: [
      'Improved XGBoost AutoML training efficiency by 20% across benchmark client datasets.',
      'Reduced pipeline failures by 15% via stronger data validation for edge-case null distributions.',
      'Contributed Docker and AWS deployment documentation to tighten CI/CD handoff quality.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'MFS Investment Management',
    period: 'Jan 2025 - Jul 2025',
    location: 'Boston, MA',
    achievements: [
      'Built advisor forecasting and segmentation workflows across 500 advisors and 200GB+ model inputs.',
      'Architected Snowflake model-ready layers across Sales, AUM, Interaction, and metadata systems.',
      'Implemented LangGraph relevance control loops for internal RAG workflows and improved retrieval quality.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'InfoCepts',
    period: 'Dec 2022 - Jun 2023',
    location: 'India',
    achievements: [
      'Designed ADF ETL/ELT data flows and improved reporting reliability for finance stakeholders.',
      'Integrated 45GB partner API ingestion pipelines into ADLS Gen2 with versioned transformations.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Superfine Minerals',
    period: 'Mar 2022 - Oct 2022',
    location: 'India',
    achievements: ['Delivered SARIMA + Tableau reporting that reduced manual reporting from three days to under thirty minutes.'],
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'Decision Copilot for Enterprise Knowledge',
    url: 'https://github.com/Johnny001-DS/ProductionGradeRAGPythonApp',
    categories: ['Generative AI', 'MLOps', 'RAG'],
    summary: 'Document QA with ingestion, retrieval, and evaluation loops.',
    highlights: ['Qdrant + embeddings retrieval', 'RAGAS evaluation loops', 'Streamlit workflow for rapid stakeholder access'],
  },
  {
    id: 2,
    name: 'Revenue Retention Action Engine',
    url: 'https://github.com/Johnny001-DS/telco-churn-app',
    categories: ['MLOps', 'Data Science', 'Analytics'],
    summary: 'Churn prediction system from feature pipeline to deployment.',
    highlights: ['XGBoost-centric pipeline', 'MLflow tracking', 'Dockerized serving + reproducible CI/CD'],
  },
  {
    id: 3,
    name: 'Conversational Order Automation Assistant',
    url: 'https://github.com/Johnny001-DS/dialogflow_chatbot',
    categories: ['NLP', 'Chatbot'],
    summary: 'Dialog assistant for intent-based ordering and persistence.',
    highlights: ['Dialogflow intent/entity design', 'MySQL-backed order state', 'Frontend integration for business usability'],
  },
  {
    id: 4,
    name: 'Clinical Triage Signal Classifier',
    url: 'https://github.com/Johnny001-DS/Breast-cancer-classification',
    categories: ['Healthcare', 'Data Science', 'Computer Vision'],
    summary: 'Histopathology image model for benign versus malignant patterns.',
    highlights: ['Histopathology image framing', 'Model experimentation in notebook pipelines', 'Clinical AI context alignment'],
  },
  {
    id: 5,
    name: 'Neuro-Signal Insight Classifier',
    url: 'https://github.com/Johnny001-DS/EEG-Brain-Signal-classification',
    categories: ['Healthcare', 'Data Science', 'Signal Processing'],
    summary: 'EEG signal processing for interpretable emotion classification.',
    highlights: ['Signal preprocessing workflow', 'Feature extraction patterns', 'Classification benchmark experimentation'],
  },
  {
    id: 6,
    name: 'Lending Risk Decision Model',
    url: 'https://github.com/Johnny001-DS/Credit_Risk_Modeling',
    categories: ['Finance', 'Data Science', 'Analytics'],
    summary: 'Probability-of-default model suite for lending risk decisions.',
    highlights: ['Logistic regression + XGBoost', 'ROC/precision-recall evaluation', 'Risk-centric feature engineering'],
  },
  {
    id: 7,
    name: 'Healthcare Policy Intelligence Assistant',
    url: 'https://github.com/Johnny001-DS/Healthcare-RAG-Bot',
    categories: ['Generative AI', 'RAG', 'Healthcare', 'MLOps'],
    summary: 'Insurance document assistant with context retrieval and responses.',
    highlights: ['Amazon Titan embeddings', 'Amazon Nova Lite inference', 'User-friendly Streamlit interaction layer'],
  },
  {
    id: 8,
    name: 'Protein Function Discovery Predictor',
    url: 'https://github.com/Johnny001-DS/ProteinPrediction-HealthCare',
    categories: ['Healthcare', 'Data Science', 'Deep Learning'],
    summary: 'Sequence-based deep learning for protein function prediction.',
    highlights: ['TensorFlow training pipeline', 'GO-term prediction setup', 'Competition-style validation approach'],
  },
  {
    id: 9,
    name: 'Executive-Ready Sales Intelligence Mart',
    url: 'https://github.com/Johnny001-DS/Analytics_DataWarehousing_R',
    categories: ['Data Engineering', 'Analytics', 'Data Warehousing'],
    summary: 'Sales datamart with star schema and ETL for reporting.',
    highlights: ['Star schema modeling', 'SQLite -> MySQL ETL', 'Business reporting with R Markdown'],
  },
  {
    id: 10,
    name: 'Patient Care Recommendation Intelligence',
    url: 'https://github.com/Johnny001-DS/HealthCare-Recommendation-System',
    categories: ['Healthcare', 'Data Science', 'Analytics'],
    summary: 'Patient clustering and recommendation modeling over NHANES data.',
    highlights: ['KMeans/UMAP workflows', 'Bias handling notebooks', 'Patient-level recommendation scenarios'],
  },
  {
    id: 11,
    name: 'Multi-Document Evidence Navigator',
    url: 'https://github.com/Johnny001-DS/DocuFindAI',
    categories: ['Generative AI', 'MLOps', 'Chatbot', 'RAG'],
    summary: 'Multi-format QA with RAG versus non-RAG quality comparison.',
    highlights: ['Multi-format ingestion', 'RAG vs non-RAG evaluation', 'Transformer + FAISS architecture'],
  },
  {
    id: 12,
    name: 'Flight Operations KPI Pipeline',
    url: 'https://github.com/Johnny001-DS/flight-ops-airflow',
    categories: ['Data Engineering', 'Analytics', 'MLOps'],
    summary: 'Airflow medallion pipeline for aviation KPI reporting layers.',
    highlights: ['OpenSky ingestion schedule', 'Medallion data modeling', 'MERGE-based Snowflake loading'],
  },
  {
    id: 13,
    name: 'Insurance Operations Decision Simulator',
    url: 'https://github.com/Johnny001-DS/Insureit-DB-Simulation-main',
    categories: ['Data Engineering', 'Analytics'],
    summary: 'CLI simulation of insurance operations and transaction logic.',
    highlights: ['Schema bootstrap scripts', 'Premium computation rules', 'Agent/admin process simulation'],
  },
  {
    id: 14,
    name: 'Financial Research Decision Assistant',
    url: 'https://github.com/Johnny001-DS/RAG-based-Financial-Analysis-Chatbot',
    categories: ['Generative AI', 'RAG', 'MLOps', 'Finance'],
    summary: 'Financial RAG assistant with cloud-native deployment patterns.',
    highlights: ['DPR + FAISS retrieval', 'Cloud Run container deployment', 'DVC + MLflow lifecycle patterns'],
  },
  {
    id: 15,
    name: 'Customer Growth Segment Strategist',
    url: 'https://github.com/Johnny001-DS/customer-segmentation',
    categories: ['Analytics', 'Data Science'],
    summary: 'Retail segments and recommendations for campaign targeting.',
    highlights: ['RFM-style feature framing', 'KMeans segment profiling', 'Recommendation decision mapping'],
  },
];

const interestTracks: InterestTrack[] = [
  {
    id: 'ds-analytics',
    title: 'Data Science & Analytics',
    shortLine: 'Decision intelligence',
    projectIds: [2, 9, 10, 12, 13, 15],
  },
  {
    id: 'genai-mlops',
    title: 'MLOps & AI',
    shortLine: 'Production-ready systems',
    projectIds: [1, 2, 7, 11, 12, 14],
  },
  {
    id: 'finance-healthcare',
    title: 'Healthcare & Financial Projects',
    shortLine: 'Trust-critical domains',
    projectIds: [4, 5, 6, 7, 8, 10, 14],
  },
];

const Home: NextPage = () => {
  const router = useRouter();
  const basePath = router.basePath ?? '';
  const headline = 'Data Scientist · AI Engineer · Machine Learning Engineer · 2+ YOE';

  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeTrackId, setActiveTrackId] = useState<InterestTrackId>('ds-analytics');
  const [typedHeadline, setTypedHeadline] = useState<string>('');
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const activeTrack = useMemo(
    () => interestTracks.find((track) => track.id === activeTrackId) ?? interestTracks[0],
    [activeTrackId]
  );

  const visibleProjects = useMemo(() => {
    const trackProjects = new Set(activeTrack.projectIds);
    return projects.filter((project) => trackProjects.has(project.id));
  }, [activeTrack]);

  const toggleProject = (projectId: number) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (!deleting) {
        index = Math.min(index + 1, headline.length);
        setTypedHeadline(headline.slice(0, index));
        if (index === headline.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1200);
          return;
        }
      } else {
        index = Math.max(index - 1, 0);
        setTypedHeadline(headline.slice(0, index));
        if (index === 0) {
          deleting = false;
          timeoutId = setTimeout(tick, 280);
          return;
        }
      }

      timeoutId = setTimeout(tick, deleting ? 30 : 60);
    };

    timeoutId = setTimeout(tick, 240);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [headline]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const revealTargets = document.querySelectorAll('.reveal');
    revealTargets.forEach((node) => observer.observe(node));

    return () => {
      revealTargets.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, [activeTrackId, expandedProjects]);

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find((item) => {
        const section = document.getElementById(item.id);
        if (!section) {
          return false;
        }
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Karan Badlani | Business-Centered Data Science & Generative AI</title>
        <meta
          name="description"
          content="Why hire Karan Badlani: business-centered Data Science, Analytics, and Generative AI that drives stakeholder action and measurable outcomes."
        />
      </Head>

      <div className="portfolio-shell">
        <div className="ambient-gradient" aria-hidden="true" />
        <div className="ambient-grain" aria-hidden="true" />

        <header className="topbar">
          <div className="top-identity">
            <a className="brand brand-center" href="#home">
              <span className="brand-dot" />
              <span>Karan Badlani</span>
            </a>
            <p className="top-role" aria-label={headline}>
              {typedHeadline}
              <span className="type-cursor" aria-hidden="true">
                |
              </span>
            </p>
          </div>

          <div className="topbar-row">
            <nav className="menu" aria-label="Section navigation">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'menu-link active' : 'menu-link'}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="topbar-cta wiggle-cta" href="#why-hire">
              Why Hire Me
            </a>
          </div>
        </header>

        <main>
          <section id="home" className="hero reveal">
            <div className="hero-layout">
              <div className="hero-content">
                <p className="eyebrow">Data Science • Analytics • Generative AI</p>
                <h1>
                  If stakeholders cannot act on what I build,
                  <span>the job is not finished.</span>
                </h1>
                <p className="hero-copy">
                  I build AI systems that are technically strong and operationally useful. That means every model, dashboard, and
                  RAG workflow is mapped to a business decision owner, action threshold, and measurable KPI shift.
                </p>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#why-hire">
                    Why Hire Me
                  </a>
                  <a className="btn btn-secondary" href="#business">
                    See Actionability Framework
                  </a>
                  <a className="btn btn-secondary" href="#projects">
                    Explore Project Lanes
                  </a>
                  <a className="btn btn-secondary" href={`${basePath}/KaranBadlani.pdf`} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </div>
              </div>

              <div className="ai-stage" aria-hidden="true">
                <span className="ai-orb orb-one" />
                <span className="ai-orb orb-two" />
                <span className="ai-orb orb-three" />
                <span className="ai-ring" />
                <span className="ai-node node-one" />
                <span className="ai-node node-two" />
                <span className="ai-node node-three" />
                <span className="ai-beam beam-one" />
                <span className="ai-beam beam-two" />
                <span className="ai-beam beam-three" />
                <div className="ai-badge badge-one">Recruiter-ready storytelling</div>
                <div className="ai-badge badge-two">Hiring-manager depth</div>
                <div className="ai-badge badge-three">Business action loops</div>
              </div>
            </div>

            <div className="stat-grid">
              {impactStats.map((stat, index) => (
                <article key={stat.label} className="stat-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                  <p className="stat-value">{stat.value}</p>
                  <h2>{stat.label}</h2>
                  <p>{stat.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="why-hire" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Audience-Aligned Value</p>
              <h2>One profile, two clear hiring lenses</h2>
            </div>

            <blockquote className="quote-line">
              <em>
                &ldquo;I treat data science as a decision-enablement function - the deliverable is stakeholder action.&rdquo;
              </em>
            </blockquote>

            <div className="lens-grid">
              {lensCards.map((card, index) => (
                <article key={card.title} className="lens-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="lens-title">{card.title}</p>
                  <p className="lens-label">{card.label}</p>
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="pillar-grid compact-pillars">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="pillar-card compact reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <h3>{pillar.title}</h3>
                  <div className="tag-wrap">
                    {pillar.tools.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="business" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Business Lens</p>
              <h2>Action-first system design</h2>
            </div>

            <div className="action-map-grid">
              {actionMap.map((item, index) => (
                <article key={item.step} className="action-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="action-step">{item.step}</p>
                  <h3>{item.stakeholder}</h3>
                  <p className="action-verb">{item.action}</p>
                  <p className="action-outcome">{item.outcome}</p>
                </article>
              ))}
            </div>

            <div className="story-grid compact-story-grid">
              {businessStories.map((story, index) => (
                <article key={story.title} className="story-card compact reveal" style={{ transitionDelay: `${index * 110}ms` }}>
                  <h3>{story.title}</h3>
                  <p className="story-what">{story.what}</p>
                  <p className="story-outcome">{story.outcome}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="guidance" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Business Guidance</p>
              <h2>4-step execution timeline</h2>
            </div>

            <div className="guidance-timeline">
              {guidanceSteps.map((step, index) => (
                <article key={step.id} className="guidance-step-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="step-head">
                    <span className="step-badge">{step.id}</span>
                    <strong>{step.label}</strong>
                  </p>
                  <p className="step-summary">{step.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Experience</p>
              <h2>Teams, roles, and delivery footprint</h2>
            </div>

            <div className="timeline">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="timeline-card reveal"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="timeline-head">
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                  <ul>
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Project Intelligence</p>
              <h2>Pick your interest lane, then dive into project proof</h2>
            </div>

            <div className="interest-grid" role="group" aria-label="Project interest lanes">
              {interestTracks.map((track, index) => (
                <button
                  key={track.id}
                  type="button"
                  className={activeTrackId === track.id ? 'interest-card lane-pill active reveal' : 'interest-card lane-pill reveal'}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  onClick={() => {
                    setActiveTrackId(track.id);
                    setExpandedProjects(new Set());
                  }}
                >
                  <div className="interest-copy">
                    <p className="interest-label">{track.title}</p>
                    <p className="interest-line">{track.shortLine}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="filter-count">
              Showing <strong>{visibleProjects.length}</strong> project{visibleProjects.length === 1 ? '' : 's'} for{' '}
              <strong>{activeTrack.title}</strong>
            </p>

            <div className="projects-list">
              {visibleProjects.map((project, index) => {
                const isExpanded = expandedProjects.has(project.id);
                return (
                  <article
                    key={project.id}
                    className={isExpanded ? 'project-card reveal expanded' : 'project-card reveal'}
                    style={{ transitionDelay: `${(index % 6) * 70}ms` }}
                  >
                    <div className="project-head">
                      <h3>
                        <span className="project-order">{String(index + 1).padStart(2, '0')}</span>
                        {project.name}
                      </h3>
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Open Repo
                      </a>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                    <div className="tag-wrap">
                      {project.categories.map((category) => (
                        <span key={`${project.id}-${category}`} className="tag">
                          {category}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className={isExpanded ? 'project-toggle active' : 'project-toggle'}
                      onClick={() => toggleProject(project.id)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Hide details' : 'Show details'}
                      <span className="toggle-chevron" aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    <ul className={isExpanded ? 'project-details expanded' : 'project-details'}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="contact" className="section reveal">
            <div className="contact-card">
              <p className="section-kicker">Contact</p>
              <h2>Let&apos;s build systems teams can act on</h2>
              <p>Open to impact-first Data Science and AI roles.</p>

              <div className="contact-actions">
                <a href="mailto:badlani.k@northeastern.edu" className="btn btn-primary">
                  badlani.k@northeastern.edu
                </a>
                <a href="tel:+16179921174" className="btn btn-secondary">
                  +1 (617) 992-1174
                </a>
                <a href="https://www.linkedin.com/in/karan-badlani/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  LinkedIn
                </a>
                <a href="https://github.com/Johnny001-DS" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
