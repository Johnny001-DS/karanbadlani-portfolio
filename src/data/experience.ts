import { Experience } from "@/types/index";

export const experiences: Experience[] = 
[
  {
    id: 1,
    company: "MFS Investment Management",
    logo: "/app/images/experiences/mfs_logo.png",
    position: "Data Science Analyst",
    period: "January 2025 - July 2025",
    location: "Boston, MA",
    description: "Delivered data-driven sales forecasting and customer segmentation solutions, enabling strategic insights and operational efficiency.",
    details: {
      responsibilities: [
        "Developed PCA-guided K-means clustering to segment buying units and identify ‘Rising Star’ clients, uncovering 22% untapped prospects.",
        "Engineered and benchmarked statistical forecasting models (Prophet, ARIMA, Naïve Bayes, LSTM) for sales prediction with high accuracy.",
        "Productionized end-to-end sales forecasting pipelines using Azure ML Studio, Azure Data Factory, and Snowflake with CI/CD MLOps.",
        "Collaborated closely with strategists and leadership, delivering near-real-time dashboards in Tableau for decision making."
      ],
      technologies: [
        "Python",
        "Azure ML Studio",
        "Azure Data Factory",
        "Snowflake",
        "Tableau",
        "Spark",
        "Scikit-learn",
        "Prophet",
        "SQL",
        "MLOps worklfow"
      ],
      achievements: [
        "Boosted sales conversion by 11.5% within two quarters through effective customer segmentation.",
        "Reduced sales forecast error from $7.5B to $1.65B with ±3.7% confidence intervals."
      ]
    }
  },
  {
    id: 2,
    company: "Khoury College of Computer Sciences, Northeastern University",
    logo: "/app/images/experiences/northeastern_logo.png",
    position: "Research and Teaching Assistant",
    period: "May 2024 - December 2024",
    location: "Boston, MA",
    description: "Led mentoring and course content design for data modeling, exploratory data analysis, and ML pipeline integration with AutoML tools.",
    details: {
      responsibilities: [
        "Mentored 100+ students on data modeling, EDA, and integrating ML pipelines using Airflow, Docker, and Google Cloud Platform.",
        "Designed and delivered labs and course content to improve hands-on learning and project quality."
      ],
      technologies: [
        "Apache Airflow",
        "Docker",
        "Google Cloud Platform",
        "AutoML",
        "Python"
      ],
      achievements: [
        "Elevated student project accuracy and practical knowledge through structured mentorship and curriculum design."
      ]
    }
  },
  {
    id: 3,
    company: "InfoCepts",
    logo: "/app/images/experiences/infocepts_logo.jpeg",
    position: "Data Scientist",
    period: "December 2022 - June 2023",
    location: "India",
    description: "Developed predictive models and scalable data pipelines to enhance demand forecasting and business intelligence dashboards.",
    details: {
      responsibilities: [
        "Improved bike rental demand forecasting accuracy by 35% using ML models in Azure ML and Databricks.",
        "Built and automated over 10 data ingestion pipelines integrating APIs and Azure Logic Apps.",
        "Developed 7+ Power BI dashboards to visualize KPIs, accelerating data-driven decision-making.",
        "Engineered ETL workflows with Azure Data Factory and Synapse Analytics handling over 1TB data."
      ],
      technologies: [
        "Azure ML",
        "Azure Databricks",
        "Power BI",
        "Azure Data Factory",
        "Synapse Analytics",
        "Python",
        "Java",
        "SQL"
      ],
      achievements: [
        "Increased KPI accuracy by 20% and reduced operational costs by 9% through optimized data workflows."
      ]
    }
  },
  {
    id: 4,
    company: "Shri Ramdeobaba College of Engineering",
    logo: "/app/images/experiences/srcoe_logo.png",
    position: "Research Scientist",
    period: "January 2022 - June 2022",
    location: "India",
    description: "Designed and deployed an end-to-end air quality analysis pipeline utilizing cloud and machine learning tools.",
    details: {
      responsibilities: [
        "Developed data ingestion, cleaning, and classification pipelines for air quality monitoring using AWS S3, Glue, and Redshift.",
        "Applied Random Forest and XGBoost models to improve classification accuracy and enable KPI reporting.",
        "Created interactive dashboards with Streamlit for visualization of air quality metrics."
      ],
      technologies: [
        "AWS S3",
        "AWS Glue",
        "AWS Redshift",
        "Python",
        "Random Forest",
        "XGBoost",
        "Streamlit"
      ],
      achievements: [
        "Improved model accuracy by 22%, supporting data-driven air quality KPIs and decision-making."
      ]
    }
  }
];