export interface Resource {
  id: string;
  title: string;
  platform: string;
  category:
    | "YouTube"
    | "University Course"
    | "Online Course"
    | "Interactive Platform"
    | "GitHub Repository";
  topic: string;
  description: string;
  url: string;
  imageUrl?: string;
  brandTheme: {
    bg: string;
    text: string;
    accent: string;
  };
}

export const resourcesData: Resource[] = [
  {
    id: "yt-ds-full-course",
    title:
      "Data Science Full Course - Learn Python, Pandas, NumPy & Machine Learning",
    platform: "freeCodeCamp",
    category: "YouTube",
    topic: "Data Science & Machine Learning",
    description:
      "A comprehensive masterclass covering Python fundamentals, data manipulation with Pandas, numerical computing with NumPy, and introductory machine learning workflows.",
    url: "https://www.youtube.com/watch?v=CMEWVn1uZpQ",
    imageUrl: "https://i.ytimg.com/vi/CMEWVn1uZpQ/hqdefault.jpg",
    brandTheme: { bg: "#1b1b32", text: "#ffffff", accent: "#00b894" },
  },
  {
    id: "yt-sql-alex",
    title: "SQL Full Course - Beginner to Advanced Data Analysis",
    platform: "Alex The Analyst",
    category: "YouTube",
    topic: "Database Management & SQL",
    description:
      "The definitive guide for data analysts looking to master SQL queries, joins, aggregations, subqueries, and window functions using real-world datasets.",
    url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    imageUrl: "https://i.ytimg.com/vi/HXV3zeQKqGY/hqdefault.jpg",
    brandTheme: { bg: "#202020", text: "#ffffff", accent: "#ff4d4d" },
  },
  {
    id: "yt-statquest-stats",
    title: "StatQuest: Statistics & P-Values Clearly Explained",
    platform: "StatQuest",
    category: "YouTube",
    topic: "Statistics & Probability",
    description:
      "Crystal-clear, visually intuitive breakdowns of statistical distributions, p-values, confidence intervals, and machine learning algorithms without heavy jargon.",
    url: "https://www.youtube.com/watch?v=vemZtEM63GY",
    imageUrl: "https://i.ytimg.com/vi/vemZtEM63GY/hqdefault.jpg",
    brandTheme: { bg: "#0288d1", text: "#ffffff", accent: "#b3e5fc" },
  },
  {
    id: "yt-3blue1brown-nn",
    title: "Neural Networks & Deep Learning Visualized",
    platform: "3Blue1Brown",
    category: "YouTube",
    topic: "Artificial Intelligence",
    description:
      "An animated, mathematically rigorous visual introduction to how neural networks learn, gradient descent optimization, and backpropagation mechanics.",
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
    imageUrl: "https://i.ytimg.com/vi/aircAruvnKk/hqdefault.jpg",
    brandTheme: { bg: "#111111", text: "#ffffff", accent: "#80deea" },
  },
  {
    id: "github-ml-zoomcamp",
    title: "ML Zoomcamp - Free Machine Learning Engineering Bootcamp",
    platform: "DataTalks.Club",
    category: "GitHub Repository",
    topic: "Machine Learning & Engineering",
    description:
      "A hands-on, free machine learning curriculum covering regression, classification, neural networks, computer vision, Kubernetes, and model deployment in production.",
    url: "https://github.com/DataTalksClub/machine-learning-zoomcamp",
    imageUrl:
      "https://opengraph.githubassets.com/1/DataTalksClub/machine-learning-zoomcamp",
    brandTheme: { bg: "#24292e", text: "#ffffff", accent: "#28a745" },
  },
  {
    id: "github-awesome-ml",
    title: "Awesome Machine Learning - Curated Frameworks & Resources",
    platform: "GitHub Community",
    category: "GitHub Repository",
    topic: "Artificial Intelligence & Tools",
    description:
      "A sprawling, highly curated collection of machine learning frameworks, libraries, software, and tutorials across Python, R, C++, and Julia.",
    url: "https://github.com/josephmisiti/awesome-machine-learning",
    imageUrl:
      "https://opengraph.githubassets.com/1/josephmisiti/awesome-machine-learning",
    brandTheme: { bg: "#181717", text: "#ffffff", accent: "#f25022" },
  },
  {
    id: "mit-6006-algo",
    title: "MIT 6.006 Introduction to Algorithms",
    platform: "MIT OpenCourseWare",
    category: "University Course",
    topic: "Algorithms & Data Structures",
    description:
      "Rigorous undergraduate course covering asymptotic analysis, sorting, heaps, hash tables, binary search trees, graph algorithms, and dynamic programming.",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
    brandTheme: { bg: "#a31c1c", text: "#ffffff", accent: "#ffcccc" },
  },
  {
    id: "harvard-cs50-sql",
    title: "CS50's Introduction to Databases with SQL",
    platform: "Harvard University",
    category: "University Course",
    topic: "Database Management & SQL",
    description:
      "Learn how to query, design, and scale relational databases using SQLite, PostgreSQL, and MySQL with hands-on university problem sets.",
    url: "https://cs50.harvard.edu/sql/",
    brandTheme: { bg: "#a51c30", text: "#ffffff", accent: "#f5c6cb" },
  },
  {
    id: "harvard-ds-python",
    title: "Harvard Introduction to Data Science with Python",
    platform: "Harvard University",
    category: "University Course",
    topic: "Data Science & Machine Learning",
    description:
      "Exploratory data analysis, statistical modeling, and data visualization using Python libraries taught through Harvard's open learning initiatives.",
    url: "https://pll.harvard.edu/subject/data-science",
    brandTheme: { bg: "#841523", text: "#ffffff", accent: "#ffadad" },
  },
  {
    id: "w3schools-sql-python",
    title: "W3Schools SQL & Python Data Analytics Tutorials",
    platform: "W3Schools",
    category: "Interactive Platform",
    topic: "Database Management & Python",
    description:
      "Interactive reference guides and live code editors for SQL querying, Pandas dataframes, NumPy arrays, and statistics fundamentals.",
    url: "https://www.w3schools.com/",
    brandTheme: { bg: "#04aa6d", text: "#ffffff", accent: "#d9f9e6" },
  },
  {
    id: "kaggle-free-courses",
    title: "Kaggle Free Interactive Micro-Courses",
    platform: "Kaggle",
    category: "Interactive Platform",
    topic: "Data Science & Machine Learning",
    description:
      "Bite-sized, practical courses covering Pandas, SQL, Data Visualization, Machine Learning Intro, and Feature Engineering with instant notebook coding.",
    url: "https://www.kaggle.com/learn",
    brandTheme: { bg: "#20beff", text: "#ffffff", accent: "#e0f7ff" },
  },
  {
    id: "khan-academy-stats",
    title: "Statistics and Probability Full Curriculum",
    platform: "Khan Academy",
    category: "Interactive Platform",
    topic: "Statistics & Probability",
    description:
      "Free comprehensive interactive units covering categorical data, distributions, confidence intervals, hypothesis testing, and random variables.",
    url: "https://www.khanacademy.org/math/statistics-probability",
    brandTheme: { bg: "#1865f2", text: "#ffffff", accent: "#cce0ff" },
  },
  {
    id: "use-the-index-luke",
    title: "Use The Index, Luke! - SQL Indexing & Performance",
    platform: "UseTheIndexLuke.com",
    category: "Interactive Platform",
    topic: "Database Management & SQL",
    description:
      "The definitive guide to database performance for SQL developers. Covers B-Tree indexes, execution plans, joins, and database internals.",
    url: "https://use-the-index-luke.com/",
    brandTheme: { bg: "#2c3e50", text: "#ffffff", accent: "#95a5a6" },
  },
  {
    id: "visualgo-ds",
    title: "VisuAlgo - Visualizing Data Structures & Algorithms",
    platform: "VisuAlgo",
    category: "Interactive Platform",
    topic: "Algorithms & Data Structures",
    description:
      "Interactive visual animations and step-by-step execution traces for sorting, trees, graphs, and shortest-path algorithms.",
    url: "https://visualgo.net/",
    brandTheme: { bg: "#3f51b5", text: "#ffffff", accent: "#c5cae9" },
  },
  {
    id: "codecademy-excel-data",
    title: "Microsoft Excel for Data Analysis",
    platform: "Codecademy",
    category: "Online Course",
    topic: "Data Analysis & Visualization",
    description:
      "Master data wrangling, pivot tables, lookup functions, and data visualization fundamentals using industry-standard spreadsheets.",
    url: "https://www.codecademy.com/catalog/subject/excel",
    brandTheme: { bg: "#1f2022", text: "#ffffff", accent: "#20edf3" },
  },
  {
    id: "udacity-sql-data",
    title: "SQL for Data Analysis",
    platform: "Udacity",
    category: "Online Course",
    topic: "Database Management & SQL",
    description:
      "Free introductory course teaching basic to advanced SQL joins, aggregations, subqueries, and window functions tailored for data analysts.",
    url: "https://www.udacity.com/course/sql-for-data-analysis--ud198",
    brandTheme: { bg: "#02b3e4", text: "#ffffff", accent: "#b3f0ff" },
  },
  {
    id: "tableau-free-training",
    title: "Tableau Free Training Video Archive",
    platform: "Tableau",
    category: "Online Course",
    topic: "Data Visualization",
    description:
      "Official free video archive covering visual analytics, dashboard design, mapping, calculations, and data connectivity.",
    url: "https://www.tableau.com/learn/training/training-video-archive",
    brandTheme: { bg: "#e96b26", text: "#ffffff", accent: "#ffd6c2" },
  },
];
