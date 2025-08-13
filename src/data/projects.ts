import { Project } from '@/types/index';

export const projects: Project[] = [
  {
    id: 1,
    title: "Data Science Analyst – Sales Prediction & Client Segmentation",
    description:
      "Led data science initiatives to improve sales forecasting accuracy and identify high-potential ‘Rising Star’ clients through clustering and predictive modeling.",
    image: "",
    tags: [
      "Python",
      "Azure ML Studio",
      "Azure Data Factory",
      "Snowflake",
      "Tableau",
      "Spark",
      "Scikit-learn",
      "Prophet",
      "SQL",
      "MLOps"
    ],
    icons: ["Python", "Azure", "Snowflake", "Tableau"],
    category: "Professional Experience",
    link: "#experience",
    details: {
      challenge:
        "Enhance sales forecasting accuracy and uncover high-value clients in a complex B2B environment with diverse buying units.",
      solution:
        "Developed PCA-guided K-Means clustering to segment buying units and identify ‘Rising Star’ prospects. Engineered and benchmarked forecasting models (Prophet, ARIMA, Naïve Bayes, LSTM), productionized pipelines using Azure ML Studio and Azure Data Factory, and built near-real-time Tableau dashboards for strategic decisions.",
      features: [
        "PCA-guided K-Means clustering for client segmentation",
        "Forecasting with Prophet, ARIMA, Naïve Bayes, LSTM",
        "End-to-end Azure ML Studio & Data Factory pipelines",
        "Snowflake integration for data warehousing",
        "CI/CD MLOps workflow for model deployment",
        "Interactive Tableau dashboards for decision-making"
      ],
      results:
        "Boosted sales conversion by 11.5% in two quarters and reduced forecast error from $7.5B to $1.65B with ±3.7% confidence intervals.",
      gallery: []
    }
  },
  {
    id: 2,
    title: "RAG-based Financial Analysis Chatbot",
    description:
      "A production-style RAG chatbot for finance that fuses real-time market data and news with retrieval for precise QA and analysis.",
    image: "",
    tags: [
      "Python",
      "RAG",
      "FAISS",
      "DPR",
      "Airflow",
      "Docker",
      "GCP",
      "Cloud Run",
      "MLflow",
      "DVC"
    ],
    icons: ["Python", "Docker", "GCP", "Airflow"],
    category: "GenAI",
    link: "https://github.com/Johnny001-DS/RAG-based-Financial-Analysis-Chatbot",
    details: {
      challenge:
        "Deliver accurate, fresh financial answers by unifying quantitative prices with qualitative news, while keeping MLOps clean.",
      solution:
        "Built a RAG pipeline with DPR encoders + FAISS retrieval, containerized services, tracked experiments with MLflow, and deployed on Cloud Run with CI/CD.",
      features: [
        "RAG with FAISS + DPR encoders",
        "Airflow/Composer orchestration & scheduled ingestion",
        "Cloud Run deployment with Cloud Build triggers",
        "MLflow experiment tracking & model registry",
        "Secrets via Secret Manager; artifacts in GCS",
        "DVC for data/experiment reproducibility"
      ],
      results:
        "End-to-end system template for financial QA with automated data pulls, retraining hooks, and scalable stateless inference.",
      gallery: []
    }
  },
  {
    id: 3,
    title: "GenAI Cold Mail Generator",
    description:
      "A Streamlit app that scrapes career pages, builds a vector index of your portfolio, and drafts targeted cold emails with Groq + LangChain.",
    image: "",
    tags: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq",
      "ChromaDB",
      "LLM"
    ],
    icons: ["Python", "Streamlit", "LangChain"],
    category: "GenAI",
    link: "https://github.com/Johnny001-DS/GenAI-cold-mail-generator",
    details: {
      challenge:
        "Personalize outreach at scale without manual research and copywriting for each role.",
      solution:
        "Built a pipeline that parses careers pages, extracts JDs, matches them to a vectorized portfolio, and drafts tailored emails with an LLM.",
      features: [
        "JD scraping from careers pages",
        "Vector search over portfolio items",
        "One-click email draft generation",
        "Config via .env; simple `streamlit run`",
        "Modular notebooks for Groq + Chroma demos"
      ],
      results:
        "Cuts outreach prep time from hours to minutes while improving JD-to-portfolio alignment.",
      gallery: []
    }
  }
];

export const allProjects: Project[] = [
  ...projects,
  {
    id: 4,
    title: "Customer Segmentation & Recommendations",
    description:
      "K‑Means customer segmentation on a UCI retail dataset with top-seller recommendations per segment.",
    image: "",
    tags: ["Jupyter", "K-Means", "EDA", "Feature Engineering", "Recommender"],
    icons: ["Python", "Jupyter"],
    category: "Data Science",
    link: "https://github.com/Johnny001-DS/customer-segmentation",
    details: {
      challenge:
        "Turn raw transactions into actionable segments for targeted marketing and product upsell.",
      solution:
        "Engineered RFM-like features from invoices, clustered customers with K‑Means, and proposed per‑segment product suggestions.",
      features: [
        "RFM-style feature engineering",
        "K-Means clustering with tuning",
        "Segment profiling & visuals",
        "Top-seller recommendations by cluster"
      ],
      results:
        "Clear segment insights and a simple next-best-offer heuristic to drive targeted campaigns.",
      gallery: []
    }
  },
  {
    id: 5,
    title: "Chotu — Dialogflow Food Ordering Chatbot",
    description:
      "An NLP chatbot that takes food orders and stores them in MySQL via secure webhooks; includes a simple web frontend.",
    image: "",
    tags: ["Dialogflow", "Python", "MySQL", "Webhook", "Frontend"],
    icons: ["Python", "MySQL", "Dialogflow"],
    category: "GenAI",
    link: "https://github.com/Johnny001-DS/dialogflow_chatbot",
    details: {
      challenge:
        "Enable conversational ordering and persist orders reliably for tracking and fulfillment.",
      solution:
        "Created intents/entities in Dialogflow, implemented webhook logic (Python/Node), and integrated a lightweight web UI with DB writes.",
      features: [
        "Intent/entity recognition",
        "Webhook actions & order persistence",
        "MySQL schema for orders",
        "HTML/CSS/JS site integration"
      ],
      results:
        "Hands-on template for conversational commerce with a clean Dialogflow-to-DB path.",
      gallery: []
    }
  },
  {
    id: 6,
    title: "Classifier Accuracy with/without Outliers in Time-Series Air-Quality Data",
    description:
      "A published study comparing classifier performance in the presence and absence of outliers in air quality time-series datasets.",
    image: "",
    tags: ["Classifier Models", "EDA", "Time-Series Forecasting", "ARIMA/SARIMA/Prophet"],
    icons: ["ML", "Analysis", "Outliers"],
    category: "Data Science",
    link: "https://www.neuroquantology.com/open-access/Accuracy%2Bof%2BClassifier%2BModels%2Bin%2BPresence%2Band%2B%2BAbsence%2Bof%2BOutliers%2Bin%2Ba%2BTime-Series%2BDataset%2Bof%2B%2BAir%2BQuality_4131/",
    details: {
      challenge:
        "Evaluate how outliers affect the prediction accuracy of classification models on air-quality time-series data.",
      solution:
        "Conducted comparative experiments using various classifiers on datasets with and without outliers, analyzing accuracy impact.",
      features: [
        "Outlier-inclusive vs outlier-filtered dataset comparisons",
        "Accuracy metrics across multiple classifier algorithms",
        "Quantitative performance impact analysis"
      ],
      results:
        "Demonstrated clear differences in classifier accuracy depending on outlier presence—highlighting the importance of robust preprocessing for reliable air-quality forecasting.",      
      gallery: []
    }
  }
];