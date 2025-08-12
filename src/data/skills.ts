const imgRoot = "/app/images/extracirriculars"

export const relevantCourses = [
  {
    title: "Database Management Systems",
    description: "Studies the design of a database for use in a relational and non-relational database management system. The entity-relationship model and normalization are used in problems. Relational algebra and then the SQL (structured query language) are presented. Advanced topics include triggers, stored procedures, indexing, elementary query optimization, and fundamentals of concurrency and recovery. Students implement a database schema and short application programs on one or more commercial relational and non-relational database management systems.",
    skillsLearned: ["SQL", "NoSQL", "Database Design", "ER Modeling", "Normalization", "Query Optimization"]
  },
  {
    title: "Supervised Machine Learning and Statistics",
    description: "Focuses on fundamental concepts and algorithms of supervised machine learning, including regression, classification, and model evaluation. Covers statistical foundations such as probability distributions, hypothesis testing, and statistical inference to support model interpretation. Explores common algorithms like linear regression, logistic regression, decision trees, support vector machines, and ensemble methods. Emphasizes practical implementation and evaluation of predictive models using real-world datasets.",
    skillsLearned: ["Regression Analysis", "Classification Algorithms", "Model Evaluation", "Statistical Inference", "Hypothesis Testing", "Ensemble Methods"]
  },
  {
    title: "Natural Language Processing (LLMs)",
    description: "Introduces the techniques and methods used in processing and understanding human language with a focus on large language models (LLMs). Covers tokenization, embeddings, language modeling, sequence-to-sequence models, and attention mechanisms. Explores transformer architectures and their applications in tasks such as text classification, machine translation, summarization, and question answering. Provides hands-on experience with popular NLP libraries and fine-tuning pre-trained LLMs for domain-specific tasks.",
    skillsLearned: ["Tokenization", "Word Embeddings", "Transformer Models", "Attention Mechanisms", "Text Classification", "Model Fine-Tuning"]
  },
  {
    title: "MLOps and Best Practices",
    description: "Covers the principles and tools for operationalizing machine learning workflows to ensure reliable, scalable, and maintainable ML systems. Focuses on version control, continuous integration/continuous deployment (CI/CD), model monitoring, and automated testing. Discusses infrastructure automation using containers and orchestration tools such as Docker and Kubernetes. Emphasizes reproducibility, data management, and compliance considerations in production ML pipelines.",
    skillsLearned: ["CI/CD for ML", "Model Monitoring", "Containerization", "Kubernetes", "Pipeline Automation", "Reproducibility"]
  },
  {
    title: "Unsupervised Machine Learning and Data Mining",
    description: "Explores methods and algorithms for discovering patterns and structure in unlabeled data. Covers clustering techniques such as k-means, hierarchical clustering, and DBSCAN, as well as dimensionality reduction methods like PCA and t-SNE. Introduces association rule mining, anomaly detection, and topic modeling. Emphasizes practical applications in customer segmentation, market basket analysis, and exploratory data analysis.",
    skillsLearned: ["Clustering", "Dimensionality Reduction", "Association Rules", "Anomaly Detection", "Topic Modeling", "Exploratory Data Analysis"]
  },
  {
    title: "Data Analysis with Python (Undergrad)",
    description: "Introduces fundamental data analysis techniques using Python programming. Covers data manipulation with libraries such as pandas and NumPy, data visualization using Matplotlib and Seaborn, and basic statistical analysis. Emphasizes exploratory data analysis, data cleaning, and preparing datasets for further modeling and decision-making.",
    skillsLearned: ["Python Programming", "Data Manipulation", "Data Visualization", "Exploratory Data Analysis", "Statistical Analysis"]
  },
  {
    title: "Object Oriented Programming with Java (Undergrad)",
    description: "Focuses on the principles and practices of object-oriented programming using Java. Covers concepts such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Teaches design and implementation of robust, modular, and reusable code using Java’s core libraries and APIs. Includes hands-on projects to build console and GUI applications.",
    skillsLearned: ["Java", "OOP Principles", "Inheritance and Polymorphism", "Encapsulation", "Code Modularity", "Java APIs"]
  },
  {
    title: "Probability and Statistics (Undergrad)",
    description: "Provides foundational knowledge in probability theory and statistical methods essential for data analysis and inference. Covers probability distributions, random variables, expectation, variance, sampling theory, confidence intervals, hypothesis testing, and regression analysis. Emphasizes applications of probability and statistics in computer science and data-driven decision making.",
    skillsLearned: ["Probability Theory", "Statistical Inference", "Hypothesis Testing", "Regression Analysis", "Sampling Techniques", "Data-Driven Decision Making"]
  }
];


export const clubs = [
  {
    name: "Oasis",
    role: "Team Member & Mentor/Instructor",
    period: "September 2024 - Present",
    location: "Boston, MA",
    description: "Collaborated with 4 software engineers to develop a website that consolidates reviews and information on the over 200+ global opportunities a part of Northeastern's Global Campus Network. Mentoring new members on the team and helping them learn the ropes of full-stack development.",
    image: `${imgRoot}/oasis/oasis_banner.png`,
    details: {
      activities: [
        "Collaborated on developing the website architecture",
        "Designed and implemented the user interface",
        "Created database schemas for storing global opportunity and user data",
        "Mentoring 80+ students in full-stack development and project management principles through workshops and one-on-one sessions",
      ],
      skills: [
        "Web Development",
        "Team Collaboration",
        "UI/UX Design",
        "Database Design",
        "API Development",
        "Project Management"
      ],
      achievements: [
        "Successfully launched a comprehensive resource for students",
        "Implemented a user-friendly interface for accessing information on 200+ global opportunities",
        "Developed effective teamwork and communication skills"
      ],
      gallery: [
        `${imgRoot}/oasis/oasis_headshot.JPEG`
      ]
    }
  },
  {
    name: "ColorStack",
    role: "Team Member",
    period: "September 2024 - Present",
    location: "Boston, MA",
    description: "Engaging with over 1500+ other computer science students from underrepresented backgrounds across the ColorStack network to gain a better understanding of how a diverse and inclusive professional environment operates.",
    image: `${imgRoot}/colorstack/colorstack_banner.jpg`,
    details: {
      activities: [
        "Participating in diversity and inclusion initiatives",
        "Attending networking events and workshops",
        "Participating in mentorship programs",
        "Engaging in professional development activities",
      ],
      skills: [
        "Diversity & Inclusion",
        "Networking",
        "Professional Development",
        "Community Building",
      ],
      achievements: [
        "Built connections with computer science students from diverse backgrounds",
        "Enhanced understanding of inclusive professional environments",
        "Contributed to creating a more diverse tech community"
      ],
      gallery: [
        `${imgRoot}/colorstack/colorstack_gallery_1.jpeg`,
      ]
    }
  }
];