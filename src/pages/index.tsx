import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
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

type RecruiterSignal = {
  title: string;
  recruiterQuestion: string;
  answer: string;
};

type ManagerSignal = {
  stage: string;
  technicalMove: string;
  businessMove: string;
  governance: string;
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

type GuidanceStep = {
  phase: string;
  businessInput: string;
  whatIDeliver: string;
  decisionEnabled: string;
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
    title: 'Recruiter Lens: 30-second role fit',
    lead: 'Short version: I am a business-facing AI data scientist who can translate ambiguity into shipped, measurable outcomes.',
    priorities: [
      'Demonstrated business impact with clear metric deltas.',
      'Can collaborate across analytics, engineering, and leadership stakeholders.',
      'Can independently execute from strategy to production.',
    ],
    proofSignals: [
      'Reduced advisor forecasting error from 7.5% to 1.65%.',
      'Cut research retrieval from 40 minutes to under 30 seconds.',
      'Turned model outputs into decision workflows, not one-off insights.',
    ],
  },
  'Hiring Managers': {
    title: 'Hiring Manager Lens: execution model',
    lead: 'I operate with a product mindset: define decision owners first, design robust architecture second, and prove business movement third.',
    priorities: [
      'Clear problem framing tied to KPI ownership.',
      'Production reliability through validation, monitoring, and deployment rigor.',
      'Business-action loops that show downstream adoption and impact.',
    ],
    proofSignals: [
      'Improved retrieval F1 from 0.64 to 0.85 through query control loops.',
      'Built Snowflake + forecasting architecture over 200GB+ workloads.',
      'Operationalized churn/risk workflows with tracked, deployable ML lifecycle patterns.',
    ],
  },
};

const recruiterSignals: RecruiterSignal[] = [
  {
    title: 'Business Outcome Focus',
    recruiterQuestion: 'Can this person drive measurable outcomes?',
    answer: 'Yes. My delivery history is framed by conversion lift, forecast accuracy gains, and decision-speed improvements.',
  },
  {
    title: 'Cross-Functional Communication',
    recruiterQuestion: 'Can this person work with non-technical stakeholders?',
    answer: 'Yes. I design outputs as decision narratives (what to do next, why, and expected KPI effect), not raw model dumps.',
  },
  {
    title: 'Execution Versatility',
    recruiterQuestion: 'Can this person own delivery beyond modeling?',
    answer: 'Yes. I work across data engineering, modeling, MLOps, and stakeholder rollouts to move projects end-to-end.',
  },
];

const hiringManagerSignals: ManagerSignal[] = [
  {
    stage: 'Problem Framing',
    technicalMove: 'Define KPI, leading indicators, and decision boundary before selecting algorithms.',
    businessMove: 'Prevents misaligned optimization and improves stakeholder trust from day one.',
    governance: 'Documented owner, decision cadence, and success criteria.',
  },
  {
    stage: 'System Design',
    technicalMove: 'Build reproducible pipelines with validation gates, versioned data/model assets, and observability hooks.',
    businessMove: 'Keeps production stable and reduces stakeholder disruption from model drift or data breaks.',
    governance: 'Runbooks for failure handling and rollback-ready deployment paths.',
  },
  {
    stage: 'Adoption & Action',
    technicalMove: 'Translate predictions into action tiers (who to target, when, and with what confidence).',
    businessMove: 'Turns insights into operational decisions instead of passive dashboards.',
    governance: 'Track action uptake and KPI response in recurring business reviews.',
  },
];

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

const guidanceSteps: GuidanceStep[] = [
  {
    phase: '1) Align on business objective',
    businessInput: 'You define the business objective (revenue, retention, risk, cost, speed) and the decision owner.',
    whatIDeliver: 'I convert objective into measurable KPI, operating constraints, and success thresholds.',
    decisionEnabled: 'Leadership can approve a clear scope with ROI logic before technical build starts.',
  },
  {
    phase: '2) Build for operational use',
    businessInput: 'You provide operating realities: data freshness needs, action cadence, and acceptable risk.',
    whatIDeliver: 'I design pipelines/models/RAG flows that match those realities with reliability guardrails.',
    decisionEnabled: 'Teams can use outputs in day-to-day workflows instead of ad hoc analysis.',
  },
  {
    phase: '3) Translate output to action',
    businessInput: 'You clarify how teams act on different confidence bands and priority tiers.',
    whatIDeliver: 'I package output into decision-ready views (who to act on, why now, what next).',
    decisionEnabled: 'Stakeholders can take immediate action without interpreting raw technical artifacts.',
  },
  {
    phase: '4) Close the business loop',
    businessInput: 'You track adoption and business movement with us in recurring review cycles.',
    whatIDeliver: 'I provide monitoring, drift checks, and KPI impact reporting tied to decisions taken.',
    decisionEnabled: 'Organization learns what worked, what to tune, and where to scale next.',
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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeTrackId, setActiveTrackId] = useState<InterestTrackId>('ds-analytics');
  const [audienceView, setAudienceView] = useState<AudienceView>('Recruiters');

  const activeTrack = useMemo(
    () => interestTracks.find((track) => track.id === activeTrackId) ?? interestTracks[0],
    [activeTrackId]
  );

  const visibleProjects = useMemo(() => {
    const trackProjects = new Set(activeTrack.projectIds);
    return projects.filter((project) => trackProjects.has(project.id));
  }, [activeTrack]);

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
  }, [activeTrackId, audienceView]);

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

          <a className="topbar-cta wiggle-cta" href="#why-hire">
            Why Hire Me
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

            <div className="why-hire-highlight">
              <p className="highlight-kicker">Why Hire Me</p>
              <h3>Business acumen is part of my technical process</h3>
              <p>
                I do not treat data science as a modeling-only function. I treat it as a decision-enablement function, where the
                final deliverable is stakeholder action with measurable business movement.
              </p>
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

            {audienceView === 'Recruiters' ? (
              <div className="audience-recruiter-grid">
                {recruiterSignals.map((signal, index) => (
                  <article key={signal.title} className="recruiter-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                    <h3>{signal.title}</h3>
                    <p><strong>Recruiter check:</strong> {signal.recruiterQuestion}</p>
                    <p><strong>What I demonstrate:</strong> {signal.answer}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="audience-hm-grid">
                {hiringManagerSignals.map((signal, index) => (
                  <article key={signal.stage} className="hm-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                    <h3>{signal.stage}</h3>
                    <p><strong>Technical move:</strong> {signal.technicalMove}</p>
                    <p><strong>Business move:</strong> {signal.businessMove}</p>
                    <p><strong>Operating discipline:</strong> {signal.governance}</p>
                  </article>
                ))}
              </div>
            )}

            <div className="pillar-grid">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="pillar-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
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
              {actionMap.map((item, index) => (
                <article key={item.step} className="action-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="action-step">{item.step}</p>
                  <h3>{item.stakeholder}</h3>
                  <p><strong>Decision:</strong> {item.decision}</p>
                  <p><strong>Cadence:</strong> {item.cadence}</p>
                  <p><strong>Business value:</strong> {item.value}</p>
                </article>
              ))}
            </div>

            <div className="story-grid">
              {businessStories.map((story, index) => (
                <article key={story.title} className="story-card reveal" style={{ transitionDelay: `${index * 110}ms` }}>
                  <h3>{story.title}</h3>
                  <p><strong>Context:</strong> {story.context}</p>
                  <p><strong>What I built:</strong> {story.build}</p>
                  <p><strong>Action enabled:</strong> {story.actionEnabled}</p>
                  <p><strong>Outcome:</strong> {story.outcome}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="guidance" className="section reveal">
            <div className="section-head">
              <p className="section-kicker">Business Guidance</p>
              <h2>How to work with me for business outcomes</h2>
            </div>
            <p className="section-intro">
              For business leaders and stakeholders: this is the operating model I use to make AI and analytics decisions
              actionable. It keeps teams aligned from objective definition through measurable outcome reviews.
            </p>

            <div className="guidance-track" aria-hidden="true">
              <span className="track-pulse pulse-one" />
              <span className="track-pulse pulse-two" />
              <span className="track-pulse pulse-three" />
            </div>

            <div className="guidance-grid">
              {guidanceSteps.map((step, index) => (
                <article key={step.phase} className="guidance-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="guidance-phase">{step.phase}</p>
                  <p><strong>What you bring:</strong> {step.businessInput}</p>
                  <p><strong>What I deliver:</strong> {step.whatIDeliver}</p>
                  <p><strong>Decision unlocked:</strong> {step.decisionEnabled}</p>
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
                  onClick={() => setActiveTrackId(track.id)}
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
              {visibleProjects.map((project, index) => (
                <article key={project.id} className="project-card reveal" style={{ transitionDelay: `${(index % 6) * 70}ms` }}>
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
