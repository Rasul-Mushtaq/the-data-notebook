export interface Resource {
  id: string;
  title: string;
  platform: string;
  category:
    | "YouTube"
    | "University Course"
    | "Online Course"
    | "Interactive Platform";
  topic: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
}

export const resourcesData: Resource[] = [
  // --- YouTube Video Masterclasses ---
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
    thumbnailUrl: "https://img.youtube.com/vi/CMEWVn1uZpQ/maxresdefault.jpg",
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
    thumbnailUrl: "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
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
    thumbnailUrl: "https://img.youtube.com/vi/vemZtEM63GY/maxresdefault.jpg",
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
    thumbnailUrl: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
  },

  // --- University Courses ---
  {
    id: "mit-6006-algo",
    title: "MIT 6.006 Introduction to Algorithms",
    platform: "MIT OpenCourseWare",
    category: "University Course",
    topic: "Algorithms & Data Structures",
    description:
      "Rigorous undergraduate course covering asymptotic analysis, sorting, heaps, hash tables, binary search trees, graph algorithms, and dynamic programming.",
    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
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
  },

  // --- Online Courses ---
  {
    id: "codecademy-excel-data",
    title: "Microsoft Excel for Data Analysis",
    platform: "Codecademy",
    category: "Online Course",
    topic: "Data Analysis & Visualization",
    description:
      "Master data wrangling, pivot tables, lookup functions, and data visualization fundamentals using industry-standard spreadsheets.",
    url: "https://www.codecademy.com/catalog/subject/excel",
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
  },
  {
    id: "simplilearn-data-science",
    title: "Free Data Science & Analytics Courses",
    platform: "Simplilearn",
    category: "Online Course",
    topic: "Data Analysis & Visualization",
    description:
      "Free online training catalog introducing Tableau workspace fundamentals, data analysis tools, and career paths in data science.",
    url: "https://www.simplilearn.com/free-data-science-courses-skillup",
  },

  // --- Interactive Platforms ---
  {
    id: "khan-academy-stats",
    title: "Statistics and Probability Full Curriculum",
    platform: "Khan Academy",
    category: "Interactive Platform",
    topic: "Statistics & Probability",
    description:
      "Free comprehensive interactive units covering categorical data, distributions, confidence intervals, hypothesis testing, and random variables.",
    url: "https://www.khanacademy.org/math/statistics-probability",
  },
  {
    id: "tableau-free-training",
    title: "Tableau Free Training Video Archive",
    platform: "Tableau",
    category: "Interactive Platform",
    topic: "Data Analysis & Visualization",
    description:
      "Official free video archive covering visual analytics, dashboard design, mapping, calculations, and data connectivity.",
    url: "https://www.tableau.com/learn/training/training-video-archive",
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
  },
];
