import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

type Pillar = {
  title: string;
  summary: string;
  proof: string;
  tools: string[];
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
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const impactStats: ImpactStat[] = [
  {
    value: '2+ yrs',
    label: 'Industry experience',
    detail: 'Delivered production ML and analytics systems across finance and enterprise data.',
  },
  {
    value: '40m -> 30s',
    label: 'Research retrieval speedup',
    detail: 'Built an internal RAG intelligence platform for 1,500+ investment documents.',
  },
  {
    value: '7.5% -> 1.65%',
    label: 'Forecast error reduction',
    detail: 'Designed forecasting workflows for 500 financial advisors with rigorous validation.',
  },
  {
    value: '15',
    label: 'End-to-end projects',
    detail: 'Portfolio spans GenAI, MLOps, healthcare AI, analytics engineering, and NLP.',
  },
];

const pillars: Pillar[] = [
  {
    title: 'Data Science That Moves KPIs',
    summary:
      'I build models with business intent first: segmentation, forecasting, risk scoring, and recommendation systems tied to measurable outcomes.',
    proof:
      'At MFS, I shipped advisor segmentation plus forecasting pipelines that improved decision quality and materially reduced prediction error.',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'Forecasting (SARIMA/Prophet)', 'A/B Testing'],
  },
  {
    title: 'Analytics & Data Engineering Rigor',
    summary:
      'I design clean data foundations using ETL/ELT, warehousing, medallion flows, and dashboard layers so stakeholders trust every number.',
    proof:
      'Built SQL + ADF + Power BI systems, star-schema datamarts in R/SQL, and an Airflow bronze-silver-gold pipeline with Snowflake loads.',
    tools: ['SQL', 'Airflow', 'Snowflake', 'Azure Data Factory', 'Power BI', 'Tableau'],
  },
  {
    title: 'Generative AI Built for Production',
    summary:
      'I ship retrieval systems, evaluation loops, and deployment workflows instead of demo-only LLM apps.',
    proof:
      'Built multiple RAG platforms with Qdrant/FAISS/Bedrock/OpenAI stacks, including relevance grading and RAGAS-backed quality checks.',
    tools: ['LangChain', 'LangGraph', 'FastAPI', 'Qdrant/FAISS', 'MLflow', 'Docker'],
  },
];

const experiences: Experience[] = [
  {
    role: 'ML Engineer (Part-time)',
    company: 'Squark AI',
    period: 'Mar 2026 - Present',
    location: 'Remote, US',
    achievements: [
      'Refactored XGBoost AutoML classification flow and improved hyperparameter tuning efficiency, reducing benchmark training time by 20%.',
      'Extended data-validation logic for edge-case null distributions and reduced pipeline failures by 15%.',
      'Contributed to Docker and AWS deployment documentation to improve CI/CD reliability.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'MFS Investment Management',
    period: 'Jan 2025 - Jul 2025',
    location: 'Boston, MA',
    achievements: [
      'Orchestrated a forecasting pipeline benchmarking SARIMA vs Prophet with forward chaining for 500 advisors.',
      'Architected Snowflake SQL models over 4 sources and resolved 200GB+ compute bottlenecks for downstream modeling.',
      'Built agentic retrieval with LangGraph for FiBi research intelligence, improving retrieval F1 from 0.64 to 0.85 and reducing false positives by 55%.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'InfoCepts',
    period: 'Dec 2022 - Jun 2023',
    location: 'India',
    achievements: [
      'Designed ADF ETL/ELT pipelines with SQL transformation logic and improved CFO-office reporting reliability.',
      'Integrated 45GB partner API data using Java Spring Boot into ADLS Gen2 through version-controlled ingestion flows.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Superfine Minerals',
    period: 'Mar 2022 - Oct 2022',
    location: 'India',
    achievements: [
      'Built SARIMA demand forecasting and Tableau reporting workflows, reducing analyst reporting time from 3 days to under 30 minutes.',
    ],
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'Production Grade RAG Python App',
    url: 'https://github.com/Johnny001-DS/ProductionGradeRAGPythonApp',
    categories: ['Generative AI', 'MLOps', 'RAG'],
    summary:
      'Production-ready document Q&A stack with PDF ingestion, Qdrant semantic search, GPT-powered responses, and RAG evaluation.',
    highlights: ['Qdrant + embeddings retrieval', 'RAGAS quality evaluation', 'Streamlit interface with robust ingestion'],
  },
  {
    id: 2,
    name: 'Telco Churn App',
    url: 'https://github.com/Johnny001-DS/telco-churn-app',
    categories: ['MLOps', 'Data Science', 'Analytics'],
    summary:
      'End-to-end churn prediction pipeline covering validation, experiment tracking, API serving, deployment, and monitoring.',
    highlights: ['XGBoost modeling pipeline', 'MLflow tracking + deployment workflow', 'Dockerized API/UI for repeatable delivery'],
  },
  {
    id: 3,
    name: 'Dialogflow Chatbot',
    url: 'https://github.com/Johnny001-DS/dialogflow_chatbot',
    categories: ['NLP', 'Chatbot'],
    summary:
      'Conversational food-ordering assistant with Dialogflow intents, webhook orchestration, and MySQL order persistence.',
    highlights: ['Intent/entity design', 'Webhook + DB integration', 'Frontend ordering experience'],
  },
  {
    id: 4,
    name: 'Breast Cancer Classification',
    url: 'https://github.com/Johnny001-DS/Breast-cancer-classification',
    categories: ['Healthcare', 'Data Science', 'Computer Vision'],
    summary:
      'Notebook-based computer vision workflow to distinguish benign and malignant tumor patterns in histopathology images.',
    highlights: ['Medical image classification framing', 'Model experimentation in Jupyter', 'Healthcare-focused diagnostic workflow'],
  },
  {
    id: 5,
    name: 'EEG Brain Signal Classification',
    url: 'https://github.com/Johnny001-DS/EEG-Brain-Signal-classification',
    categories: ['Healthcare', 'Data Science', 'Signal Processing'],
    summary:
      'EEG signal analysis and emotion-classification experimentation to convert brain-wave data into interpretable endpoints.',
    highlights: ['Biological signal preprocessing', 'Feature exploration for EEG', 'Classification-centric analysis pipeline'],
  },
  {
    id: 6,
    name: 'Credit Risk Modeling',
    url: 'https://github.com/Johnny001-DS/Credit_Risk_Modeling',
    categories: ['Finance', 'Data Science', 'Analytics'],
    summary:
      'Probability-of-default modeling project for credit risk assessment with traditional and boosted tree classifiers.',
    highlights: ['Logistic Regression + XGBoost', 'ROC AUC / precision-recall evaluation', 'Risk-focused feature engineering'],
  },
  {
    id: 7,
    name: 'Healthcare RAG Bot',
    url: 'https://github.com/Johnny001-DS/Healthcare-RAG-Bot',
    categories: ['Generative AI', 'RAG', 'Healthcare', 'MLOps'],
    summary:
      'Insurance-document assistant using Amazon Bedrock, contextual retrieval, and natural-language Q&A over PDF corpora.',
    highlights: ['Amazon Titan embeddings', 'Amazon Nova Lite response generation', 'Streamlit-based clinical insurance UX'],
  },
  {
    id: 8,
    name: 'Protein Prediction - Healthcare',
    url: 'https://github.com/Johnny001-DS/ProteinPrediction-HealthCare',
    categories: ['Healthcare', 'Data Science', 'Deep Learning'],
    summary:
      'CAFA5 protein-function prediction solution using TensorFlow DNN workflows on sequence-driven biological data.',
    highlights: ['TensorFlow model training', 'GO-term prediction framing', 'Competition-style experimentation'],
  },
  {
    id: 9,
    name: 'Analytics Data Warehousing (R)',
    url: 'https://github.com/Johnny001-DS/Analytics_DataWarehousing_R',
    categories: ['DBMS/ETL', 'Analytics', 'Data Warehousing'],
    summary:
      'Built a sales analytics datamart combining film and music systems via star-schema design and ETL in R + SQL.',
    highlights: ['Star schema implementation', 'SQLite to MySQL ETL pipeline', 'Business analysis reporting in R Markdown'],
  },
  {
    id: 10,
    name: 'Healthcare Recommendation System',
    url: 'https://github.com/Johnny001-DS/HealthCare-Recommendation-System',
    categories: ['Healthcare', 'Data Science', 'Analytics'],
    summary:
      'Patient clustering and recommendation research on NHANES data with dimensionality reduction and bias-handling experiments.',
    highlights: ['KMeans, UMAP, spectral workflows', 'Bias detection and mitigation notebooks', 'Patient-level evaluation scenarios'],
  },
  {
    id: 11,
    name: 'DocuFindAI',
    url: 'https://github.com/Johnny001-DS/DocuFindAI',
    categories: ['Generative AI', 'MLOps', 'Chatbot', 'RAG'],
    summary:
      'Document and website QA system comparing RAG vs non-RAG behavior across multiple file formats and web data.',
    highlights: ['Multi-format ingestion (PDF/DOCX/XLSX/PPTX)', 'RAG vs non-RAG comparative evaluation', 'FAISS + transformers stack'],
  },
  {
    id: 12,
    name: 'Flight Ops Airflow',
    url: 'https://github.com/Johnny001-DS/flight-ops-airflow',
    categories: ['DBMS/ETL', 'Analytics', 'MLOps'],
    summary:
      'Airflow medallion pipeline that ingests live flight states, transforms KPI layers, and upserts aggregates to Snowflake.',
    highlights: ['Bronze -> Silver -> Gold DAG stages', 'OpenSky API ingestion every 30 minutes', 'Snowflake MERGE-based KPI loading'],
  },
  {
    id: 13,
    name: 'Insureit DB Simulation',
    url: 'https://github.com/Johnny001-DS/Insureit-DB-Simulation-main',
    categories: ['DBMS/ETL', 'Analytics'],
    summary:
      'CLI insurance-provider simulator for policy sales, premium computation, and agent/admin operations over a relational backend.',
    highlights: ['Schema bootstrap + credential setup', 'Dynamic premium computation logic', 'Operational workflow simulation'],
  },
  {
    id: 14,
    name: 'RAG Financial Analysis Chatbot',
    url: 'https://github.com/Johnny001-DS/RAG-based-Financial-Analysis-Chatbot',
    categories: ['Generative AI', 'RAG', 'MLOps', 'Finance'],
    summary:
      'Financial QA system blending retrieval and cloud deployment patterns for market-aware chatbot analysis.',
    highlights: ['DPR + FAISS retrieval', 'Cloud Run + Docker deployment', 'DVC + MLflow lifecycle components'],
  },
  {
    id: 15,
    name: 'Customer Segmentation',
    url: 'https://github.com/Johnny001-DS/customer-segmentation',
    categories: ['Analytics', 'Data Science'],
    summary:
      'Retail transaction segmentation with recommendation heuristics for targeted customer strategy and campaign planning.',
    highlights: ['RFM-style feature framing', 'KMeans segment profiling', 'Recommendation mapping by segment'],
  },
];

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeFilter, setActiveFilter] = useState<string>('All');

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -80px 0px' }
    );

    const revealed = document.querySelectorAll('.reveal');
    revealed.forEach((node) => observer.observe(node));

    return () => {
      revealed.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);
      const current = sectionIds.find((id) => {
        const node = document.getElementById(id);
        if (!node) {
          return false;
        }
        const rect = node.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Karan Badlani | Data Science, Analytics & Generative AI</title>
        <meta
          name="description"
          content="Why hire Karan Badlani: production-grade Data Science, Analytics, and Generative AI systems with measurable business impact."
        />
      </Head>

      <div className="portfolio-shell">
        <div className="ambient-glow" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="#home">
            <span className="brand-dot" />
            <span>KB // AI Data Scientist</span>
          </a>

          <nav className="menu" aria-label="Section navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'menu-link active' : 'menu-link'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="topbar-cta" href="#contact">
            Let&apos;s Build
          </a>
        </header>

        <main>
          <section id="home" className="hero reveal">
            <p className="eyebrow">Why Hire Me</p>
            <h1>
              I build ML and GenAI systems
              <span>that survive production.</span>
            </h1>
            <p className="hero-copy">
              I combine Data Science depth, Analytics rigor, and MLOps discipline to ship systems that teams can trust at scale.
              From financial forecasting and segmentation to retrieval-augmented assistants, I focus on measurable outcomes.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore Projects
              </a>
              <a className="btn btn-secondary" href="KaranBadlani.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="btn btn-secondary" href="https://github.com/Johnny001-DS" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a className="btn btn-secondary" href="https://www.linkedin.com/in/karan-badlani/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="stat-grid">
              {impactStats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <h2>{stat.label}</h2>
                  <p>{stat.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="why-hire" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Differentiators</p>
              <h2>What makes me a strong hire for Data + AI teams</h2>
            </div>

            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <h3>{pillar.title}</h3>
                  <p className="pillar-summary">{pillar.summary}</p>
                  <p className="pillar-proof">{pillar.proof}</p>
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

          <section id="experience" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Experience Timeline</p>
              <h2>Recent roles and impact delivered</h2>
            </div>

            <div className="timeline">
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.role}`} className="timeline-card">
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
              <h2>15 production-oriented projects across Data Science, Analytics, and GenAI</h2>
            </div>

            <div className="filters" role="tablist" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'filter-pill active' : 'filter-pill'}
                  type="button"
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
                <article key={project.id} className="project-card">
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
              <h2>Let&apos;s build high-leverage data and AI products</h2>
              <p>
                If your team needs someone who can move from modeling to deployment to executive-ready storytelling, I&apos;d love to
                collaborate.
              </p>

              <div className="contact-actions">
                <a href="mailto:badlani.k@northeastern.edu" className="btn btn-primary">
                  badlani.k@northeastern.edu
                </a>
                <a href="tel:+16179921174" className="btn btn-secondary">
                  +1 (617) 992-1174
                </a>
                <a className="btn btn-secondary" href="https://github.com/Johnny001-DS" target="_blank" rel="noreferrer">
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
