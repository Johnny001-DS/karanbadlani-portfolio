import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

type AudienceView = 'Recruiters' | 'Hiring Managers';

type AudienceBrief = {
  title: string;
  lead: string;
  priorities: string[];
  proofSignals: string[];
};

type Pillar = {
  title: string;
  summary: string;
  businessTranslation: string;
  tools: string[];
};

type ActionMapItem = {
  step: string;
  stakeholder: string;
  decision: string;
  cadence: string;
  value: string;
};

type BusinessStory = {
  title: string;
  context: string;
  build: string;
  actionEnabled: string;
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

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'why-hire', label: 'Why Hire Me' },
  { id: 'business', label: 'Business Lens' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const impactStats: ImpactStat[] = [
  {
    value: '17%',
    label: 'Sales conversion lift',
    detail: 'A/B-test-informed recommendations translated model output into concrete advisor actions.',
  },
  {
    value: '40m -> 30s',
    label: 'Research time reduction',
    detail: 'Internal RAG platform made portfolio managers faster at finding evidence-backed answers.',
  },
  {
    value: '55%',
    label: 'False-positive reduction',
    detail: 'LangGraph-based retrieval quality controls improved precision before stakeholder rollout.',
  },
  {
    value: '15',
    label: 'Production-grade projects',
    detail: 'Portfolio spans analytics engineering, MLOps, healthcare AI, NLP, and decision intelligence.',
  },
];

const audienceBriefs: Record<AudienceView, AudienceBrief> = {
  Recruiters: {
    title: 'Why recruiters shortlist me',
    lead: 'I ship business-ready AI products, not notebook-only models. I can partner with data, product, and business teams from discovery to deployment.',
    priorities: [
      'Clear track record of measurable impact (conversion, forecast accuracy, retrieval speed, risk reduction).',
      'Comfort across the full lifecycle: data prep, modeling, experimentation, deployment, and stakeholder communication.',
      'Strong collaboration style with both technical teams and business leadership.',
    ],
    proofSignals: [
      'Improved sales forecasting error from 7.5% to 1.65% for 500 advisors.',
      'Built RAG systems that reduced knowledge discovery time from 40 minutes to under 30 seconds.',
      'Delivered ETL and analytics systems that made decisions faster for finance and operations teams.',
    ],
  },
  'Hiring Managers': {
    title: 'Why hiring managers trust my execution',
    lead: 'I optimize for decision velocity and reliability. Every model, dashboard, or RAG stack is designed with a stakeholder action path before release.',
    priorities: [
      'I define business KPIs and decision owners upfront, then map model outputs to those decision points.',
      'I choose architectures that are debuggable in production: validation, monitoring, and rollback-ready deployment workflows.',
      'I treat explainability and adoption as first-class outcomes, not post-launch tasks.',
    ],
    proofSignals: [
      'Designed retrieval grading + query rewriting loops to improve F1 from 0.64 to 0.85.',
      'Built Snowflake + forecasting pipeline architecture over 200GB+ workloads with stable downstream reporting.',
      'Operationalized churn and risk workflows with MLflow, APIs, containerization, and CI/CD alignment.',
    ],
  },
};

const pillars: Pillar[] = [
  {
    title: 'Data Science with Decision Ownership',
    summary:
      'I frame modeling work around who needs to act, how often they act, and what threshold changes behavior.',
    businessTranslation:
      'Stakeholders do not get raw scores. They get prioritized actions, confidence context, and next-best decisions.',
    tools: ['Predictive Modeling', 'Experiment Design', 'Segmentation', 'Forecasting'],
  },
  {
    title: 'Analytics Engineering that Builds Trust',
    summary:
      'I design data systems that keep metrics consistent across dashboards, models, and executive reviews.',
    businessTranslation:
      'When KPI definitions are stable and traceable, teams move faster and spend less time debating numbers.',
    tools: ['SQL', 'Airflow', 'Snowflake', 'ADF', 'Power BI/Tableau'],
  },
  {
    title: 'Generative AI with Production Guardrails',
    summary:
      'I build retrieval and LLM workflows with evaluation loops, fallback behavior, and measurable quality targets.',
    businessTranslation:
      'Outputs stay actionable for business users because latency, relevance, and confidence are continuously managed.',
    tools: ['LangChain', 'LangGraph', 'RAGAS', 'FastAPI', 'MLflow', 'Docker'],
  },
];

const actionMap: ActionMapItem[] = [
  {
    step: 'Frame the decision',
    stakeholder: 'Business lead / Product owner',
    decision: 'Which KPI and action should change if the model is right?',
    cadence: 'Project kickoff',
    value: 'Prevents building technically impressive but operationally unused systems.',
  },
  {
    step: 'Model + explain in context',
    stakeholder: 'Analysts and domain SMEs',
    decision: 'Which segments, risks, or opportunities matter this cycle?',
    cadence: 'Weekly iteration',
    value: 'Improves trust and adoption by pairing scores with interpretable drivers.',
  },
  {
    step: 'Operationalize delivery',
    stakeholder: 'Data/Platform teams',
    decision: 'How will this run, fail safely, and recover in production?',
    cadence: 'Before launch',
    value: 'Reduces downtime and protects decision continuity under real traffic.',
  },
  {
    step: 'Close the action loop',
    stakeholder: 'Functional teams',
    decision: 'What action was taken and what business delta followed?',
    cadence: 'Bi-weekly review',
    value: 'Transforms ML from insight generation into measurable business execution.',
  },
];

const businessStories: BusinessStory[] = [
  {
    title: 'Advisor Forecasting and Segmentation (MFS)',
    context: 'Sales teams needed reliable advisor-level forecasts and clearer retention priorities across large advisor cohorts.',
    build: 'Built SARIMA vs Prophet benchmarking, engineered behavioral features, and segmented advisors with classification workflows.',
    actionEnabled: 'Leadership received prioritized advisor interventions instead of raw model output, with experiment-backed confidence.',
    outcome: 'Forecast error dropped from 7.5% to 1.65%, and recommendation rollout contributed to a 17% conversion lift.',
  },
  {
    title: 'Research Intelligence RAG Platform',
    context: 'Portfolio managers were losing time searching documents and validating fragmented research responses.',
    build: 'Shipped retrieval pipelines with query rewriting and relevance grading to improve answer quality over internal documents.',
    actionEnabled: 'Teams could make research-backed investment decisions in minutes rather than long manual search cycles.',
    outcome: 'Discovery time moved from 40 minutes to under 30 seconds with a major precision improvement.',
  },
  {
    title: 'Churn and Risk Workflows',
    context: 'Customer and risk signals existed, but operational teams lacked production-grade systems for timely intervention.',
    build: 'Built reproducible model lifecycle flows with tracking, API serving, containerization, and deployment pipelines.',
    actionEnabled: 'Stakeholders could trigger intervention playbooks directly from model outputs with consistent service interfaces.',
    outcome: 'Faster retention response cycles and scalable serving patterns for ongoing model operations.',
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
    name: 'Production Grade RAG Python App',
    url: 'https://github.com/Johnny001-DS/ProductionGradeRAGPythonApp',
    categories: ['Generative AI', 'MLOps', 'RAG'],
    summary: 'Production-ready document QA with PDF ingestion, vector retrieval, and evaluation-first RAG quality management.',
    highlights: ['Qdrant + embeddings retrieval', 'RAGAS evaluation loops', 'Streamlit workflow for rapid stakeholder access'],
  },
  {
    id: 2,
    name: 'Telco Churn App',
    url: 'https://github.com/Johnny001-DS/telco-churn-app',
    categories: ['MLOps', 'Data Science', 'Analytics'],
    summary: 'End-to-end churn system from feature engineering to API deployment and monitoring-ready model operations.',
    highlights: ['XGBoost-centric pipeline', 'MLflow tracking', 'Dockerized serving + reproducible CI/CD'],
  },
  {
    id: 3,
    name: 'Dialogflow Chatbot',
    url: 'https://github.com/Johnny001-DS/dialogflow_chatbot',
    categories: ['NLP', 'Chatbot'],
    summary: 'Conversational ordering assistant with intent management, webhook processing, and transactional persistence.',
    highlights: ['Dialogflow intent/entity design', 'MySQL-backed order state', 'Frontend integration for business usability'],
  },
  {
    id: 4,
    name: 'Breast Cancer Classification',
    url: 'https://github.com/Johnny001-DS/Breast-cancer-classification',
    categories: ['Healthcare', 'Data Science', 'Computer Vision'],
    summary: 'Medical imaging classification workflow for benign vs malignant pattern detection experiments.',
    highlights: ['Histopathology image framing', 'Model experimentation in notebook pipelines', 'Clinical AI context alignment'],
  },
  {
    id: 5,
    name: 'EEG Brain Signal Classification',
    url: 'https://github.com/Johnny001-DS/EEG-Brain-Signal-classification',
    categories: ['Healthcare', 'Data Science', 'Signal Processing'],
    summary: 'EEG signal processing and emotion classification research for interpretable biological endpoints.',
    highlights: ['Signal preprocessing workflow', 'Feature extraction patterns', 'Classification benchmark experimentation'],
  },
  {
    id: 6,
    name: 'Credit Risk Modeling',
    url: 'https://github.com/Johnny001-DS/Credit_Risk_Modeling',
    categories: ['Finance', 'Data Science', 'Analytics'],
    summary: 'Probability-of-default modeling for lending risk, combining traditional and boosted model strategies.',
    highlights: ['Logistic regression + XGBoost', 'ROC/precision-recall evaluation', 'Risk-centric feature engineering'],
  },
  {
    id: 7,
    name: 'Healthcare RAG Bot',
    url: 'https://github.com/Johnny001-DS/Healthcare-RAG-Bot',
    categories: ['Generative AI', 'RAG', 'Healthcare', 'MLOps'],
    summary: 'Healthcare insurance document assistant with contextual retrieval and Bedrock-based response generation.',
    highlights: ['Amazon Titan embeddings', 'Amazon Nova Lite inference', 'User-friendly Streamlit interaction layer'],
  },
  {
    id: 8,
    name: 'Protein Prediction - Healthcare',
    url: 'https://github.com/Johnny001-DS/ProteinPrediction-HealthCare',
    categories: ['Healthcare', 'Data Science', 'Deep Learning'],
    summary: 'CAFA5 protein function prediction workflow using sequence-based TensorFlow deep learning experiments.',
    highlights: ['TensorFlow training pipeline', 'GO-term prediction setup', 'Competition-style validation approach'],
  },
  {
    id: 9,
    name: 'Analytics Data Warehousing (R)',
    url: 'https://github.com/Johnny001-DS/Analytics_DataWarehousing_R',
    categories: ['Data Engineering', 'Analytics', 'Data Warehousing'],
    summary: 'Sales datamart design integrating multi-source systems through star schema and ETL in R + SQL.',
    highlights: ['Star schema modeling', 'SQLite -> MySQL ETL', 'Business reporting with R Markdown'],
  },
  {
    id: 10,
    name: 'Healthcare Recommendation System',
    url: 'https://github.com/Johnny001-DS/HealthCare-Recommendation-System',
    categories: ['Healthcare', 'Data Science', 'Analytics'],
    summary: 'Patient clustering and recommendation research over NHANES with bias handling and dimensionality reduction.',
    highlights: ['KMeans/UMAP workflows', 'Bias handling notebooks', 'Patient-level recommendation scenarios'],
  },
  {
    id: 11,
    name: 'DocuFindAI',
    url: 'https://github.com/Johnny001-DS/DocuFindAI',
    categories: ['Generative AI', 'MLOps', 'Chatbot', 'RAG'],
    summary: 'Multi-format document and web QA platform comparing RAG and non-RAG quality profiles.',
    highlights: ['Multi-format ingestion', 'RAG vs non-RAG evaluation', 'Transformer + FAISS architecture'],
  },
  {
    id: 12,
    name: 'Flight Ops Airflow',
    url: 'https://github.com/Johnny001-DS/flight-ops-airflow',
    categories: ['Data Engineering', 'Analytics', 'MLOps'],
    summary: 'Bronze-silver-gold Airflow pipeline ingesting live aviation signals into Snowflake KPI layers.',
    highlights: ['OpenSky ingestion schedule', 'Medallion data modeling', 'MERGE-based Snowflake loading'],
  },
  {
    id: 13,
    name: 'Insureit DB Simulation',
    url: 'https://github.com/Johnny001-DS/Insureit-DB-Simulation-main',
    categories: ['Data Engineering', 'Analytics'],
    summary: 'CLI simulation of insurance operations with policy workflows and relational transaction logic.',
    highlights: ['Schema bootstrap scripts', 'Premium computation rules', 'Agent/admin process simulation'],
  },
  {
    id: 14,
    name: 'RAG Financial Analysis Chatbot',
    url: 'https://github.com/Johnny001-DS/RAG-based-Financial-Analysis-Chatbot',
    categories: ['Generative AI', 'RAG', 'MLOps', 'Finance'],
    summary: 'Financial RAG assistant blending retrieval architecture with cloud-native deployment patterns.',
    highlights: ['DPR + FAISS retrieval', 'Cloud Run container deployment', 'DVC + MLflow lifecycle patterns'],
  },
  {
    id: 15,
    name: 'Customer Segmentation',
    url: 'https://github.com/Johnny001-DS/customer-segmentation',
    categories: ['Analytics', 'Data Science'],
    summary: 'Retail segmentation and recommendation design for targeted campaign and revenue optimization strategy.',
    highlights: ['RFM-style feature framing', 'KMeans segment profiling', 'Recommendation decision mapping'],
  },
];

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [audienceView, setAudienceView] = useState<AudienceView>('Recruiters');

  const filters = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((project) => project.categories.forEach((category) => all.add(category)));
    return ['All', ...Array.from(all)];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const audienceBrief = audienceBriefs[audienceView];

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
  }, []);

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
          <a className="brand" href="#home">
            <span className="brand-dot" />
            <span>Karan Badlani // Decision-Centered AI</span>
          </a>

          <nav className="menu" aria-label="Section navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'menu-link active' : 'menu-link'}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="topbar-cta" href="#contact">
            Talk Business Impact
          </a>
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
                  <a className="btn btn-primary" href="#business">
                    See Actionability Framework
                  </a>
                  <a className="btn btn-secondary" href="#projects">
                    Explore Projects
                  </a>
                  <a className="btn btn-secondary" href="KaranBadlani.pdf" target="_blank" rel="noreferrer">
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
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card reveal">
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

            <div className="audience-toggle" role="tablist" aria-label="Audience lens selector">
              {(['Recruiters', 'Hiring Managers'] as AudienceView[]).map((view) => (
                <button
                  key={view}
                  type="button"
                  className={audienceView === view ? 'audience-pill active' : 'audience-pill'}
                  onClick={() => setAudienceView(view)}
                >
                  {view}
                </button>
              ))}
            </div>

            <article className="audience-card">
              <h3>{audienceBrief.title}</h3>
              <p>{audienceBrief.lead}</p>

              <div className="audience-grid">
                <div>
                  <h4>What this audience cares about</h4>
                  <ul>
                    {audienceBrief.priorities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>How I prove it in practice</h4>
                  <ul>
                    {audienceBrief.proofSignals.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card reveal">
                  <h3>{pillar.title}</h3>
                  <p className="pillar-summary">{pillar.summary}</p>
                  <p className="pillar-translation">{pillar.businessTranslation}</p>
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
              <h2>I design for stakeholder action, not model novelty</h2>
            </div>
            <p className="section-intro">
              My operating rule is simple: if stakeholders cannot take clear action on what I deliver, the system is incomplete. I
              structure projects so insight naturally becomes decision and decision becomes measurable outcome.
            </p>

            <div className="action-map-grid">
              {actionMap.map((item) => (
                <article key={item.step} className="action-card reveal">
                  <p className="action-step">{item.step}</p>
                  <h3>{item.stakeholder}</h3>
                  <p><strong>Decision:</strong> {item.decision}</p>
                  <p><strong>Cadence:</strong> {item.cadence}</p>
                  <p><strong>Business value:</strong> {item.value}</p>
                </article>
              ))}
            </div>

            <div className="story-grid">
              {businessStories.map((story) => (
                <article key={story.title} className="story-card reveal">
                  <h3>{story.title}</h3>
                  <p><strong>Context:</strong> {story.context}</p>
                  <p><strong>What I built:</strong> {story.build}</p>
                  <p><strong>Action enabled:</strong> {story.actionEnabled}</p>
                  <p><strong>Outcome:</strong> {story.outcome}</p>
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
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.role}`} className="timeline-card reveal">
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
              <h2>15 project assets with real delivery patterns</h2>
            </div>

            <div className="filters" role="tablist" aria-label="Project category filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? 'filter-pill active' : 'filter-pill'}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <p className="filter-count">
              Showing <strong>{visibleProjects.length}</strong> project{visibleProjects.length === 1 ? '' : 's'}
              {activeFilter === 'All' ? '' : ` in ${activeFilter}`}
            </p>

            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <article key={project.id} className="project-card reveal">
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Open Repo
                    </a>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tag-wrap">
                    {project.categories.map((category) => (
                      <span key={`${project.id}-${category}`} className="tag">
                        {category}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section reveal">
            <div className="contact-card">
              <p className="section-kicker">Contact</p>
              <h2>Let&apos;s build systems that teams can actually act on</h2>
              <p>
                I&apos;m looking for roles where AI and analytics are expected to influence real decisions, not just reports. If that
                sounds like your team, I&apos;d love to connect.
              </p>

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
