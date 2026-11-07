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
    durationOrLevel: "6 Hours • Beginner to Intermediate",
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
    id: "use-the-index-luke",
    title: "Use The Index, Luke! - SQL Indexing & Performance",
    platform: "UseTheIndexLuke.com",
    category: "Interactive Platform",
    topic: "Database & SQL",
    description:
      "The definitive guide to database performance for SQL developers. Covers B-Tree indexes, execution plans, joins, and database internals across PostgreSQL and MySQL.",
    url: "https://use-the-index-luke.com/",
    durationOrLevel: "Self-Paced • Intermediate",
  },
  {
    id: "fast-ai-deep-learning",
    title: "Practical Deep Learning for Coders",
    platform: "fast.ai",
    category: "Online Course",
    topic: "Machine Learning & AI",
    description:
      "World-renowned practical deep learning course starting from application-first principles and building up to state-of-the-art computer vision and NLP models.",
    url: "https://course.fast.ai/",
    durationOrLevel: "8 Weeks • Intermediate",
  },
  {
    id: "leetcode-hub",
    title: "LeetCode Algorithm Practice & Interview Hub",
    platform: "LeetCode",
    category: "Interactive Platform",
    topic: "Algorithms & Data Structures",
    description:
      "Interactive coding platform with thousands of curated algorithmic challenges, discussion forums, and company interview problem sets.",
    url: "https://leetcode.com/",
    durationOrLevel: "Ongoing • All Levels",
  },
  {
    id: "python-ds-handbook",
    title: "Python Data Science Handbook",
    platform: "O'Reilly / GitHub",
    category: "Online Course",
    topic: "Data Science & ML",
    description:
      "Full open-source digital textbook by Jake VanderPlas covering NumPy, Pandas, Matplotlib, Scikit-Learn, and core data science workflows.",
    url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
    durationOrLevel: "Self-Paced • Comprehensive",
  },
  {
    id: "stanford-cs145-sql",
    title: "Stanford CS145: Introduction to Databases",
    platform: "Stanford Online",
    category: "University Course",
    topic: "Database & SQL",
    description:
      "Comprehensive relational database design, SQL querying, transactional ACID guarantees, indexing, and NoSQL data architectures.",
    url: "https://online.stanford.edu/courses/cs145-introduction-databases",
    durationOrLevel: "10 Weeks • Intermediate",
  },
  {
    id: "visualgo-ds",
    title: "VisuAlgo - Visualizing Data Structures and Algorithms",
    platform: "VisuAlgo",
    category: "Interactive Platform",
    topic: "Algorithms & Data Structures",
    description:
      "Interactive visual animations and step-by-step execution traces for sorting, trees, graphs, and graph pathfinding algorithms.",
    url: "https://visualgo.net/",
    durationOrLevel: "Interactive • Visual",
  },
];
