export interface Topic {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  breakdown: string[];
  code: {
    language: string;
    code: string;
    title: string;
  };
  formula: {
    title: string;
    latex: string;
    explanation: string;
  };
  realWorldApps: string[];
  links: { label: string; url: string }[];
}

export const topicsData: Topic[] = [
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    eyebrow: "Engineering Foundations",
    summary:
      "Master fundamental structures and algorithmic paradigms that govern computational efficiency and scale.",
    description:
      "Efficient problem solving requires choosing the right data organization and understanding time and space complexity boundaries. This section covers core algorithmic strategies and data containers.",
    breakdown: [
      "Asymptotic Analysis (Big-O, Omega, Theta notations)",
      "Linear Structures: Arrays, Linked Lists, Stacks, Queues",
      "Hierarchical Structures: Binary Search Trees, AVL Trees, Heaps",
      "Graph Traversal: Breadth-First Search, Depth-First Search, Dijkstra Algorithm",
      "Algorithmic Paradigms: Two Pointers, Sliding Window, Dynamic Programming",
    ],
    code: {
      language: "cpp",
      title: "Binary Search Implementation in C++",
      code: `#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    // Searches for a target value in a sorted array in O(log n) time.
    int left = 0;
    int right = static_cast<int>(arr.size()) - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}`,
    },
    formula: {
      title: "Master Theorem for Recurrence Relations",
      latex: "T(n) = aT(n/b) + f(n)",
      explanation:
        "Used to determine the time complexity of divide-and-conquer algorithms like Merge Sort and Binary Search, where 'a' is sub-problems count, 'b' is factor by which input size is reduced, and f(n) is work done outside recursive calls.",
    },
    realWorldApps: [
      "Database indexing and B-Tree lookups in PostgreSQL and MySQL",
      "Route calculation and shortest-path navigation in mapping software",
      "Real-time autocomplete and prefix search using Tries",
    ],
    links: [
      { label: "LeetCode Practice Hub", url: "https://leetcode.com" },
      {
        label: "VisuAlgo Data Structure Visualizations",
        url: "https://visualgo.net",
      },
    ],
  },
  {
    id: "database-management-sql",
    title: "Database Management & SQL",
    eyebrow: "Data Engineering",
    summary:
      "Design robust relational schemas, optimize query execution plans, and manage transactional integrity at scale.",
    description:
      "Relational database management systems form the backbone of modern web and data architectures. Understanding normalization, indexing, ACID properties, and window functions is critical.",
    breakdown: [
      "ACID Properties and Transaction Isolation Levels",
      "Schema Normalization (1NF through 3NF) and Denormalization tradeoffs",
      "B-Tree Indexes, Composite Indexes, and Query Execution Plans",
      "Advanced SQL: CTEs, Window Functions (ROW_NUMBER, RANK, LAG/LEAD)",
      "NoSQL versus Relational: CAP Theorem and Partition Tolerance",
    ],
    code: {
      language: "sql",
      title: "Advanced SQL: Moving Average Window Function",
      code: `SELECT 
    date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7day_avg
FROM daily_sales
ORDER BY date;`,
    },
    formula: {
      title: "Relational Algebra Selection and Join Cost",
      latex: "Cost(R \\bowtie S) = B_R + B_R \\times B_S",
      explanation:
        "Estimating block disk accesses during nested-loop joins to optimize query execution times in database query planners.",
    },
    realWorldApps: [
      "Financial ledger transactions maintaining strict ACID guarantees",
      "E-commerce inventory tracking across distributed fulfillment centers",
      "User analytics aggregation pipelines using windowed aggregations",
    ],
    links: [
      { label: "Use The Index, Luke!", url: "https://use-the-index-luke.com" },
      {
        label: "PostgreSQL Official Documentation",
        url: "https://www.postgresql.org/docs/",
      },
    ],
  },
  {
    id: "data-analysis-visualization",
    title: "Data Analysis & Visualization",
    eyebrow: "Data Science",
    summary:
      "Extract insights from raw datasets using statistical methods, exploratory data analysis, and clear visual storytelling.",
    description:
      "Data analysis bridges raw data collection and actionable decision making. Through Pandas, NumPy, and statistical testing, analysts uncover hidden distributions, anomalies, and correlations.",
    breakdown: [
      "Data Cleaning, Handling Missing Values, and Outlier Detection",
      "Exploratory Data Analysis with Pandas and NumPy",
      "Statistical Inference: Hypothesis Testing, p-values, and Confidence Intervals",
      "Correlation and Feature Distribution Analysis",
      "Visual Storytelling principles using Matplotlib and Seaborn",
    ],
    code: {
      language: "python",
      title: "Exploratory Data Analysis with Pandas",
      code: `import pandas as pd
import numpy as np

def compute_summary_stats(df: pd.DataFrame, column: str) -> dict:
    """Computes robust summary statistics for numerical features."""
    series = df[column].dropna()
    return {
        "mean": series.mean(),
        "median": series.median(),
        "std": series.std(),
        "iqr": series.quantile(0.75) - series.quantile(0.25),
        "skewness": series.skew()
    }`,
    },
    formula: {
      title: "Pearson Correlation Coefficient",
      latex:
        "r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}",
      explanation:
        "Measures linear correlation between two sets of data, yielding values between -1 and +1.",
    },
    realWorldApps: [
      "A/B testing analysis for product feature conversions",
      "Customer churn analysis and cohort retention tracking",
      "Financial market risk and volatility assessment dashboards",
    ],
    links: [
      {
        label: "Python Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
      },
      { label: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
    ],
  },
  {
    id: "machine-learning-modeling",
    title: "Machine Learning & Modeling",
    eyebrow: "Artificial Intelligence",
    summary:
      "Build, evaluate, and tune predictive models using supervised and unsupervised learning algorithms.",
    description:
      "Machine learning transforms historical data into predictive systems. From linear models to gradient boosted trees and neural networks, understanding underlying mathematics ensures robust generalization.",
    breakdown: [
      "Supervised Learning: Linear Regression, Logistic Regression, Decision Trees",
      "Ensemble Methods: Random Forests, Gradient Boosting (XGBoost, LightGBM)",
      "Model Evaluation: ROC-AUC, Precision, Recall, F1-Score, Cross-Validation",
      "Regularization: L1 and L2 penalty terms to prevent overfitting",
      "Feature Engineering and Dimensionality Reduction (PCA)",
    ],
    code: {
      language: "python",
      title: "Scikit-Learn Pipeline and Model Training",
      code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

def train_classifier(X, y):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
    ])
    
    pipeline.fit(X_train, y_train)
    score = pipeline.score(X_test, y_test)
    return pipeline, score`,
    },
    formula: {
      title: "Logistic Regression Sigmoid and Loss",
      latex: "P(y=1|x) = \\sigma(w^T x + b) = \\frac{1}{1 + e^{-(w^T x + b)}}",
      explanation:
        "Maps real-valued inputs into a probability range between 0 and 1 for binary classification tasks.",
    },
    realWorldApps: [
      "Credit card fraud detection models flagging anomalous transactions",
      "Recommendation engines powering e-commerce and media streaming",
      "Predictive maintenance systems forecasting industrial machine failures",
    ],
    links: [
      {
        label: "Scikit-Learn User Guide",
        url: "https://scikit-learn.org/stable/user_guide.html",
      },
      {
        label: "Hands-On Machine Learning Reference",
        url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
      },
    ],
  },
];
