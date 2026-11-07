export interface TopicModule {
  level: "Elementary" | "Intermediate" | "Advanced";
  title: string;
  description: string;
  keyConcepts: string[];
}

export interface Topic {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  modules: TopicModule[];
  code: {
    language: string;
    title: string;
    code: string;
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
      "Master computational efficiency and scale by progressing from elementary linear containers to advanced graph and tree traversal algorithms.",
    description:
      "Building resilient software systems requires selecting optimal data layouts and understanding asymptotic complexity bounds across different hardware and memory hierarchies.",
    modules: [
      {
        level: "Elementary",
        title: "Asymptotic Analysis & Linear Containers",
        description:
          "Understanding Big-O notation, memory allocation models, and contiguous vs linked memory structures.",
        keyConcepts: [
          "Big-O, Omega, and Theta notations",
          "Static arrays and dynamic vector resizing",
          "Singly and doubly linked lists",
        ],
      },
      {
        level: "Intermediate",
        title: "Searching, Sorting & Divide-and-Conquer",
        description:
          "Optimizing search spaces using logarithmic partitioning and pointer manipulation paradigms.",
        keyConcepts: [
          "Binary search invariants",
          "Merge sort and quicksort partitioning",
          "Two pointers and sliding window techniques",
        ],
      },
      {
        level: "Advanced",
        title: "Hierarchical Structures & Graph Theory",
        description:
          "Modeling non-linear relationships using trees, priority queues, and network pathfinding algorithms.",
        keyConcepts: [
          "Binary Search Trees (BST) and AVL self-balancing",
          "Min-Heaps and priority queue scheduling",
          "Breadth-First Search, Depth-First Search, and Dijkstra shortest path",
        ],
      },
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
        "Used to determine the time complexity of divide-and-conquer algorithms like Merge Sort and Binary Search, where 'a' represents sub-problems count, 'b' is the input reduction factor, and f(n) is the work done outside recursive calls.",
    },
    realWorldApps: [
      "Database engine indexing and B-Tree disk page lookups in PostgreSQL and MySQL",
      "Geospatial route calculation and shortest-path navigation in mapping software",
      "Real-time autocomplete and prefix search indexing using Trie data structures",
    ],
    links: [
      { label: "LeetCode Practice Hub", url: "https://leetcode.com" },
      { label: "VisuAlgo Visualizations", url: "https://visualgo.net" },
    ],
  },
  {
    id: "database-management-sql",
    title: "Database Management & SQL",
    eyebrow: "Data Engineering",
    summary:
      "Design reliable relational schemas, optimize query execution plans, and enforce transactional ACID integrity at scale.",
    description:
      "Relational database management systems form the bedrock of backend architectures. Mastery ranges from basic projection and filtering to complex window functions and cost-based query optimization.",
    modules: [
      {
        level: "Elementary",
        title: "Relational Foundations & Basic Queries",
        description:
          "Understanding tables, primary keys, foreign keys, and basic filtering predicates.",
        keyConcepts: [
          "SELECT projections and WHERE filtering",
          "Aggregate functions (COUNT, SUM, AVG)",
          "GROUP BY and HAVING clauses",
        ],
      },
      {
        level: "Intermediate",
        title: "Joins, Normalization & Schema Design",
        description:
          "Combining disparate tables and structuring schemas to eliminate redundancy and anomaly risks.",
        keyConcepts: [
          "Inner, Left, Right, and Full Outer Joins",
          "First through Third Normal Forms (1NF - 3NF)",
          "Entity-relationship modeling and foreign key cascades",
        ],
      },
      {
        level: "Advanced",
        title: "Indexing, Transactions & Window Functions",
        description:
          "Maximizing throughput with B-Tree indexes, isolation levels, and analytical windowing.",
        keyConcepts: [
          "ACID properties and transaction isolation levels",
          "B-Tree index structure and query execution plan analysis",
          "Advanced window functions (ROW_NUMBER, RANK, LAG, LEAD, CTEs)",
        ],
      },
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
        "Estimating block disk accesses during nested-loop joins to optimize query execution times in database cost-based optimizers.",
    },
    realWorldApps: [
      "Financial ledger transactions maintaining strict ACID guarantees across distributed banking nodes",
      "E-commerce inventory management tracking real-time stock levels across fulfillment centers",
      "Analytical user behavior aggregation pipelines utilizing windowed aggregations",
    ],
    links: [
      { label: "Use The Index, Luke!", url: "https://use-the-index-luke.com" },
      {
        label: "PostgreSQL Documentation",
        url: "https://www.postgresql.org/docs/",
      },
    ],
  },
  {
    id: "data-analysis-visualization",
    title: "Data Analysis & Visualization",
    eyebrow: "Data Science",
    summary:
      "Extract actionable insights from raw datasets using rigorous statistical testing, exploratory data analysis, and clear visual communication.",
    description:
      "Data analysis bridges raw data ingestion and strategic decision making. Through Pandas, NumPy, and statistical hypothesis testing, analysts uncover hidden distributions and anomalies.",
    modules: [
      {
        level: "Elementary",
        title: "Data Wrangling & Cleaning",
        description:
          "Ingesting tabular datasets, handling missing values, and reshaping data frames.",
        keyConcepts: [
          "Pandas DataFrames and NumPy arrays",
          "Handling null values and type casting",
          "Filtering, sorting, and conditional indexing",
        ],
      },
      {
        level: "Intermediate",
        title: "Exploratory Data Analysis & Aggregation",
        description:
          "Summarizing distributions, computing descriptive metrics, and grouping data.",
        keyConcepts: [
          "Mean, median, variance, and interquartile range",
          "Groupby operations and pivot tables",
          "Outlier detection using z-scores and IQR bounds",
        ],
      },
      {
        level: "Advanced",
        title: "Statistical Inference & Visual Storytelling",
        description:
          "Validating hypotheses, measuring correlation, and rendering multi-variable dashboards.",
        keyConcepts: [
          "Hypothesis testing, p-values, and confidence intervals",
          "Pearson and Spearman correlation matrices",
          "Visual storytelling principles with Matplotlib and Seaborn",
        ],
      },
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
        "Measures linear correlation between two sets of data, yielding values between -1 (perfect negative correlation) and +1 (perfect positive correlation).",
    },
    realWorldApps: [
      "A/B testing analysis for digital product feature conversions and statistical significance",
      "Customer churn analysis and cohort retention curve tracking for SaaS platforms",
      "Financial market risk assessment and historical volatility dashboards",
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
      "Build, evaluate, and tune predictive machine learning systems ranging from linear models to gradient boosted trees and neural networks.",
    description:
      "Machine learning transforms historical observations into predictive intelligence. Understanding underlying objective functions, optimization mechanics, and evaluation metrics ensures robust model generalization.",
    modules: [
      {
        level: "Elementary",
        title: "Supervised Foundations & Linear Models",
        description:
          "Understanding feature matrices, target vectors, training splits, and linear regression.",
        keyConcepts: [
          "Feature scaling and standardization",
          "Train/test dataset splitting strategies",
          "Ordinary Least Squares linear regression",
        ],
      },
      {
        level: "Intermediate",
        title: "Classification, Trees & Evaluation Metrics",
        description:
          "Predicting categorical outcomes, decision tree splitting, and measuring model performance.",
        keyConcepts: [
          "Logistic regression and sigmoid activation",
          "Decision trees and Gini impurity",
          "Precision, Recall, F1-Score, and ROC-AUC curves",
        ],
      },
      {
        level: "Advanced",
        title: "Ensemble Methods, Pipelines & Regularization",
        description:
          "Combining models with bagging and boosting, building modular pipelines, and preventing overfitting.",
        keyConcepts: [
          "Random Forests and Gradient Boosted Trees (XGBoost/LightGBM)",
          "L1 (Lasso) and L2 (Ridge) regularization penalties",
          "Scikit-Learn Pipeline encapsulation and cross-validation",
        ],
      },
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
        "Maps real-valued linear combinations into a probability range between 0 and 1, serving as the foundation for binary classification models.",
    },
    realWorldApps: [
      "Credit card fraud detection models flagging anomalous transaction patterns in real-time",
      "Recommendation engines powering e-commerce product suggestions and media streaming",
      "Predictive maintenance models forecasting industrial hardware failures before occurrence",
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
