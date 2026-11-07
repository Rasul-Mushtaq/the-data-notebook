export interface TopicCard {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
}

export const topicsData: TopicCard[] = [
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    eyebrow: "Engineering Foundations",
    summary:
      "Master computational efficiency, time complexity bounds, and sorting/graph paradigms.",
  },
  {
    id: "database-management-sql",
    title: "Database Management & SQL",
    eyebrow: "Data Engineering",
    summary:
      "Design relational schemas, optimize B-Tree indexes, and manage ACID transactions.",
  },
  {
    id: "data-analysis-visualization",
    title: "Data Analysis & Visualization",
    eyebrow: "Data Science",
    summary:
      "Extract insights using Pandas, statistical testing, and clear visual storytelling.",
  },
  {
    id: "machine-learning-modeling",
    title: "Machine Learning & Modeling",
    eyebrow: "Artificial Intelligence",
    summary:
      "Build predictive models, evaluate metrics, and train gradient boosted ensembles.",
  },
];
