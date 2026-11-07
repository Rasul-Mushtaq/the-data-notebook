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
  durationOrLevel: string;
}

export const resourcesData: Resource[] = [
  {
    id: "yt-ds-full-course",
    title:
      "Data Science Full Course - Learn Python, Pandas, NumPy & Machine Learning",
    platform: "freeCodeCamp",
    category: "YouTube",
    topic: "Data Science & ML",
    description:
      "A comprehensive masterclass covering Python fundamentals, data manipulation with Pandas, numerical computing with NumPy, and introductory machine learning workflows.",
    url: "https://www.youtube.com/watch?v=CMEWVn1uZpQ",
    thumbnailUrl: "https://i.ytimg.com/vi/CMEWVn1uZpQ/maxresdefault.jpg",
    durationOrLevel: "6 Hours • Beginner",
  },
  {
    id: "yt-statquest-stats",
    title:
      "StatQuest with Josh Starmer - Statistics & Machine Learning Fundamentals",
    platform: "StatQuest",
    category: "YouTube",
    topic: "Data Science & Statistics",
    description:
      "Clear, visually intuitive step-by-step breakdowns of statistical concepts, p-values, machine learning algorithms, and neural networks without heavy jargon.",
    url: "https://www.youtube.com/@StatQuest",
    thumbnailUrl: "https://i.ytimg.com/vi/nk2cqITm_eg/maxresdefault.jpg",
    durationOrLevel: "Video Series • All Levels",
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
    durationOrLevel: "Spring 2020 • Advanced",
  },
  {
    id: "harvard-cs50-sql",
    title: "CS50's Introduction to Databases with SQL",
    platform: "Harvard University",
    category: "University Course",
    topic: "Database & SQL",
    description:
      "Learn how to query, design, and scale relational databases using SQLite, PostgreSQL, and MySQL with real-world problem sets.",
    url: "https://cs50.harvard.edu/sql/",
    durationOrLevel: "7 Weeks • Free OpenCourseWare",
  },
  {
    id: "harvard-ds-python",
    title: "Harvard Introduction to Data Science with Python",
    platform: "Harvard University",
    category: "University Course",
    topic: "Data Science & ML",
    description:
      "Exploratory data analysis, statistical modeling, and data visualization using Python libraries taught through Harvard's open learning resources.",
    url: "https://pll.harvard.edu/subject/data-science",
    durationOrLevel: "Self-Paced • Intermediate",
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
    durationOrLevel: "Free Interactive Modules • All Levels",
  },
  {
    id: "codecademy-excel-data",
    title: "Microsoft Excel for Data Analysis",
    platform: "Codecademy",
    category: "Online Course",
    topic: "Data Analysis",
    description:
      "Learn data wrangling, pivot tables, lookup functions, and data visualization fundamentals using Microsoft Excel.",
    url: "https://www.codecademy.com/",
    durationOrLevel: "Free Basic Track • Beginner",
  },
  {
    id: "udacity-sql-data",
    title: "SQL for Data Analysis",
    platform: "Udacity",
    category: "Online Course",
    topic: "Database & SQL",
    description:
      "Free introductory course teaching basic to advanced SQL joins, aggregations, subqueries, and window functions for data analysts.",
    url: "https://www.udacity.com/course/sql-for-data-analysis--ud198",
    durationOrLevel: "Free Course • Beginner to Intermediate",
  },
  {
    id: "tableau-free-training",
    title: "Tableau Free Training Video Archive",
    platform: "Tableau",
    category: "Interactive Platform",
    topic: "Data Visualization",
    description:
      "Official free video archive covering visual analytics, dashboard design, mapping, calculations, and data connectivity.",
    url: "https://www.tableau.com/learn/training/training-video-archive",
    durationOrLevel: "Video Library • Self-Paced",
  },
  {
    id: "simplilearn-tableau",
    title: "Introduction to Tableau Free Course",
    platform: "Simplilearn",
    category: "Online Course",
    topic: "Data Visualization",
    description:
      "Free online training course introducing Tableau workspace fundamentals, data visualization best practices, and interactive dashboard creation.",
    url: "https://www.simplilearn.com/free-tableau-training-course-skills",
    durationOrLevel: "Free Certification Course • Beginner",
  },
  {
    id: "use-the-index-luke",
    title: "Use The Index, Luke! - SQL Indexing & Performance",
    platform: "UseTheIndexLuke.com",
    category: "Interactive Platform",
    topic: "Database & SQL",
    description:
      "The definitive guide to database performance for SQL developers. Covers B-Tree indexes, execution plans, joins, and database internals.",
    url: "https://use-the-index-luke.com/",
    durationOrLevel: "Self-Paced • Intermediate",
  },
  {
    id: "visualgo-ds",
    title: "VisuAlgo - Visualizing Data Structures and Algorithms",
    platform: "VisuAlgo",
    category: "Interactive Platform",
    topic: "Algorithms & Data Structures",
    description:
      "Interactive visual animations and step-by-step execution traces for sorting, trees, graphs, and pathfinding algorithms.",
    url: "https://visualgo.net/",
    durationOrLevel: "Interactive • Visual",
  },
];
