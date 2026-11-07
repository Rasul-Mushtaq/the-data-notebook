export interface SubtopicDetail {
  id: string;
  title: string;
  parentTopicId: string;
  level: "Elementary" | "Intermediate" | "Advanced";
  summary: string;
  explanation: string;
  keyTakeaways: string[];
  formula?: {
    title: string;
    latex: string;
    explanation: string;
  };
  code?: {
    language: string;
    title: string;
    code: string;
  };
  realWorldApps: string[];
}

export interface TopicModule {
  level: "Elementary" | "Intermediate" | "Advanced";
  title: string;
  description: string;
  keyConcepts: { id: string; label: string }[];
}

export interface Topic {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  modules: TopicModule[];
  subtopics: Record<string, SubtopicDetail>;
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
          { id: "big-o-notation", label: "Big-O, Omega, and Theta notations" },
          {
            id: "arrays-and-vectors",
            label: "Static arrays and dynamic vector resizing",
          },
          { id: "linked-lists", label: "Singly and doubly linked lists" },
        ],
      },
      {
        level: "Intermediate",
        title: "Searching, Sorting & Divide-and-Conquer",
        description:
          "Optimizing search spaces using logarithmic partitioning and pointer manipulation paradigms.",
        keyConcepts: [
          { id: "binary-search", label: "Binary search invariants" },
          {
            id: "merge-sort-quicksort",
            label: "Merge sort and quicksort partitioning",
          },
          {
            id: "two-pointers-sliding-window",
            label: "Two pointers and sliding window techniques",
          },
        ],
      },
      {
        level: "Advanced",
        title: "Hierarchical Structures & Graph Theory",
        description:
          "Modeling non-linear relationships using trees, priority queues, and network pathfinding algorithms.",
        keyConcepts: [
          {
            id: "binary-search-trees",
            label: "Binary Search Trees (BST) and AVL self-balancing",
          },
          {
            id: "heaps-priority-queues",
            label: "Min-Heaps and priority queue scheduling",
          },
          {
            id: "graph-traversals",
            label:
              "Breadth-First Search, Depth-First Search, and Dijkstra shortest path",
          },
        ],
      },
    ],
    subtopics: {
      "big-o-notation": {
        id: "big-o-notation",
        parentTopicId: "data-structures-algorithms",
        level: "Elementary",
        title: "Big-O, Omega, and Theta Notations",
        summary:
          "Asymptotic notation forms the formal mathematical framework for analyzing algorithm execution bounds as input size $n$ grows to infinity.",
        explanation:
          "Big-O defines an upper bound on run-time or space complexity ($O(g(n))$). Big-Omega ($\Omega(g(n))$) defines the tight lower bound, while Big-Theta ($\Theta(g(n))$) indicates an exact asymptotically tight bound where upper and lower bounds coincide.",
        keyTakeaways: [
          "O(1) Constant Time: Direct array index access or hash map lookups.",
          "O(log n) Logarithmic Time: Halving problem space iteratively (e.g., Binary Search).",
          "O(n) Linear Time: Single pass traversal over elements.",
          "O(n log n) Linearithmic Time: Optimal comparison-based sorting (e.g., Merge Sort).",
          "O(n^2) Quadratic Time: Nested loops over input size.",
        ],
        formula: {
          title: "Formal Definition of Big-O Notation",
          latex: "f(n) \\le c \\cdot g(n) \\quad \\forall n \\ge n_0",
          explanation:
            "There exist positive constants $c$ and $n_0$ such that $f(n)$ never exceeds $c \\cdot g(n)$ for all inputs larger than $n_0$.",
        },
        code: {
          language: "cpp",
          title: "Comparing Time Complexity Profiles in C++",
          code: `#include <iostream>
#include <vector>

// O(1) Constant Time
int getFirst(const std::vector<int>& arr) {
    return arr.empty() ? -1 : arr[0];
}

// O(n) Linear Time
int sumArray(const std::vector<int>& arr) {
    int total = 0;
    for (int val : arr) {
        total += val;
    }
    return total;
}`,
        },
        realWorldApps: [
          "Benchmarking engine latency during database query execution planning",
          "Preventing algorithmic complexity attacks (e.g., hash collision flooding)",
          "Memory footprint optimization in resource-constrained embedded software",
        ],
      },
      "binary-search": {
        id: "binary-search",
        parentTopicId: "data-structures-algorithms",
        level: "Intermediate",
        title: "Binary Search Invariants & Partitioning",
        summary:
          "Binary search eliminates half of the remaining search space with each comparison by maintaining strict array sorting invariants.",
        explanation:
          "By computing the midpoint index $mid = left + (right - left) / 2$, binary search avoids integer overflow while recursively narrowing down target intervals in logarithmic time.",
        keyTakeaways: [
          "Requires data to be pre-sorted in contiguous memory buffers.",
          "Protects against integer overflow by using midpoint computation bounds.",
          "Forms the foundation for lower-bound and upper-bound searching algorithms.",
        ],
        formula: {
          title: "Logarithmic Division Recurrence",
          latex: "T(n) = T(n/2) + O(1) \\implies T(n) = O(\\log n)",
          explanation:
            "At each recursive step, the search domain size is divided by 2, requiring $\\log_2(n)$ steps to reduce to a single element.",
        },
        code: {
          language: "cpp",
          title: "Binary Search Invariant Guard Implementation",
          code: `#include <vector>

int binarySearchInvariant(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = static_cast<int>(arr.size()) - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
        },
        realWorldApps: [
          "B-Tree block index searching in database engines",
          "Binary searching git commits via 'git bisect' to locate regressions",
          "Logarithmic range filtering in memory management frameworks",
        ],
      },
    },
    code: {
      language: "cpp",
      title: "Binary Search Implementation in C++",
      code: `#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
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
    return -1;
}`,
    },
    formula: {
      title: "Master Theorem for Recurrence Relations",
      latex: "T(n) = aT(n/b) + f(n)",
      explanation:
        "Used to determine the time complexity of divide-and-conquer algorithms like Merge Sort and Binary Search.",
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
          {
            id: "select-filtering",
            label: "SELECT projections and WHERE filtering",
          },
          {
            id: "aggregate-functions",
            label: "Aggregate functions (COUNT, SUM, AVG)",
          },
          { id: "group-by-having", label: "GROUP BY and HAVING clauses" },
        ],
      },
      {
        level: "Intermediate",
        title: "Joins, Normalization & Schema Design",
        description:
          "Combining disparate tables and structuring schemas to eliminate redundancy and anomaly risks.",
        keyConcepts: [
          {
            id: "sql-joins",
            label: "Inner, Left, Right, and Full Outer Joins",
          },
          {
            id: "schema-normalization",
            label: "First through Third Normal Forms (1NF - 3NF)",
          },
          {
            id: "entity-relationship",
            label: "Entity-relationship modeling and foreign key cascades",
          },
        ],
      },
      {
        level: "Advanced",
        title: "Indexing, Transactions & Window Functions",
        description:
          "Maximizing throughput with B-Tree indexes, isolation levels, and analytical windowing.",
        keyConcepts: [
          {
            id: "acid-transactions",
            label: "ACID properties and transaction isolation levels",
          },
          {
            id: "btree-indexes",
            label: "B-Tree index structure and query execution plan analysis",
          },
          {
            id: "window-functions",
            label:
              "Advanced window functions (ROW_NUMBER, RANK, LAG, LEAD, CTEs)",
          },
        ],
      },
    ],
    subtopics: {
      "acid-transactions": {
        id: "acid-transactions",
        parentTopicId: "database-management-sql",
        level: "Advanced",
        title: "ACID Properties & Transaction Isolation",
        summary:
          "ACID guarantees guarantee database reliability despite hardware crashes, power outages, and concurrent query updates.",
        explanation:
          "Transactions isolate state modifications. Atomicity ensures all-or-nothing execution; Consistency enforces database constraints; Isolation prevents concurrent query corruption; Durability commits completed changes to non-volatile disk storage.",
        keyTakeaways: [
          "Atomicity: Implemented via Write-Ahead Logging (WAL).",
          "Consistency: Enforced by foreign keys, unique constraints, and domain checks.",
          "Isolation Levels: Read Uncommitted, Read Committed, Repeatable Read, and Serializable.",
          "Durability: Ensured by flushes to non-volatile storage prior to transaction success response.",
        ],
        formula: {
          title: "Serializability Validation Cost",
          latex: "T_{isolation} = \\sum_{i=1}^{k} R_i(x) \\cup W_i(x)",
          explanation:
            "Models conflict serializability testing across concurrent transaction schedules.",
        },
        code: {
          language: "sql",
          title: "Explicit Transaction Control with Rollback Guard",
          code: `BEGIN TRANSACTION;

UPDATE accounts 
SET balance = balance - 500 
WHERE account_id = 101;

UPDATE accounts 
SET balance = balance + 500 
WHERE account_id = 202;

-- Guarantee atomic commit
COMMIT;`,
        },
        realWorldApps: [
          "Bank account ledger transfers ensuring money is never duplicated or lost",
          "E-commerce flash sale inventory decrements guarding against double allocation",
          "Distributed flight booking engines managing concurrent seat reservations",
        ],
      },
    },
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
        "Estimating block disk accesses during nested-loop joins to optimize query execution times.",
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
          {
            id: "pandas-dataframes",
            label: "Pandas DataFrames and NumPy arrays",
          },
          {
            id: "handling-nulls",
            label: "Handling null values and type casting",
          },
          {
            id: "indexing-filtering",
            label: "Filtering, sorting, and conditional indexing",
          },
        ],
      },
      {
        level: "Intermediate",
        title: "Exploratory Data Analysis & Aggregation",
        description:
          "Summarizing distributions, computing descriptive metrics, and grouping data.",
        keyConcepts: [
          {
            id: "descriptive-stats",
            label: "Mean, median, variance, and interquartile range",
          },
          {
            id: "groupby-pivots",
            label: "Groupby operations and pivot tables",
          },
          {
            id: "outlier-detection",
            label: "Outlier detection using z-scores and IQR bounds",
          },
        ],
      },
      {
        level: "Advanced",
        title: "Statistical Inference & Visual Storytelling",
        description:
          "Validating hypotheses, measuring correlation, and rendering multi-variable dashboards.",
        keyConcepts: [
          {
            id: "hypothesis-testing",
            label: "Hypothesis testing, p-values, and confidence intervals",
          },
          {
            id: "correlation-matrices",
            label: "Pearson and Spearman correlation matrices",
          },
          {
            id: "visual-storytelling",
            label: "Visual storytelling principles with Matplotlib and Seaborn",
          },
        ],
      },
    ],
    subtopics: {
      "pandas-dataframes": {
        id: "pandas-dataframes",
        parentTopicId: "data-analysis-visualization",
        level: "Elementary",
        title: "Pandas DataFrames & Vectorized Memory Models",
        summary:
          "Pandas wraps contiguous NumPy arrays into labeled two-dimensional tables optimized for fast aligned operations.",
        explanation:
          "By leveraging column-oriented dynamic storage structures written in C/Cython, vectorized operations in Pandas bypass Python interpreter loop overhead.",
        keyTakeaways: [
          "Series represents 1D homogeneously typed memory columns.",
          "DataFrame represents 2D heterogeneous tabular structures.",
          "Avoid iterating over rows using iterrows(); use vectorized calculations instead.",
        ],
        code: {
          language: "python",
          title: "Vectorized Column Computation in Pandas",
          code: `import pandas as pd
import numpy as np

# Create sample dataset
df = pd.DataFrame({
    'price': [19.99, 49.99, 99.99, 14.99],
    'quantity': [5, 2, 1, 10]
})

# Vectorized total calculation without loops
df['total_revenue'] = df['price'] * df['quantity']
print(df)`,
        },
        realWorldApps: [
          "Batch financial record processing and automated reconciliation",
          "Automated ETL pipeline transformations prior to database ingestion",
          "High-throughput data preprocessing for statistical machine learning",
        ],
      },
    },
    code: {
      language: "python",
      title: "Exploratory Data Analysis with Pandas",
      code: `import pandas as pd
import numpy as np

def compute_summary_stats(df: pd.DataFrame, column: str) -> dict:
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
      explanation: "Measures linear correlation between two sets of data.",
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
          {
            id: "feature-scaling",
            label: "Feature scaling and standardization",
          },
          {
            id: "train-test-split",
            label: "Train/test dataset splitting strategies",
          },
          {
            id: "linear-regression",
            label: "Ordinary Least Squares linear regression",
          },
        ],
      },
      {
        level: "Intermediate",
        title: "Classification, Trees & Evaluation Metrics",
        description:
          "Predicting categorical outcomes, decision tree splitting, and measuring model performance.",
        keyConcepts: [
          {
            id: "logistic-regression",
            label: "Logistic regression and sigmoid activation",
          },
          { id: "decision-trees", label: "Decision trees and Gini impurity" },
          {
            id: "evaluation-metrics",
            label: "Precision, Recall, F1-Score, and ROC-AUC curves",
          },
        ],
      },
      {
        level: "Advanced",
        title: "Ensemble Methods, Pipelines & Regularization",
        description:
          "Combining models with bagging and boosting, building modular pipelines, and preventing overfitting.",
        keyConcepts: [
          {
            id: "ensemble-methods",
            label:
              "Random Forests and Gradient Boosted Trees (XGBoost/LightGBM)",
          },
          {
            id: "regularization-penalties",
            label: "L1 (Lasso) and L2 (Ridge) regularization penalties",
          },
          {
            id: "sklearn-pipelines",
            label: "Scikit-Learn Pipeline encapsulation and cross-validation",
          },
        ],
      },
    ],
    subtopics: {
      "logistic-regression": {
        id: "logistic-regression",
        parentTopicId: "machine-learning-modeling",
        level: "Intermediate",
        title: "Logistic Regression & Sigmoid Activation",
        summary:
          "Logistic regression predicts probabilities for binary classification targets by passing continuous linear outputs through the non-linear sigmoid function.",
        explanation:
          "By mapping inputs into values between 0.0 and 1.0, logistic regression models can be interpreted as conditional probabilities $P(Y=1|X)$. The parameters are optimized using log-loss cross-entropy minimization.",
        keyTakeaways: [
          "Uses maximum likelihood estimation rather than ordinary least squares.",
          "Outputs direct probability estimates bounded between 0 and 1.",
          "Provides easily interpretable feature coefficient weights.",
        ],
        formula: {
          title: "Binary Cross-Entropy Loss Function",
          latex:
            "L(w) = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log(\\hat{y}_i) + (1 - y_i) \\log(1 - \\hat{y}_i) \\right]",
          explanation:
            "Penalizes confident incorrect predictions exponentially to guide gradient descent optimization.",
        },
        code: {
          language: "python",
          title: "Logistic Regression Training with Scikit-Learn",
          code: `from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

# Sample feature matrix X and targets y
X = np.array([[25, 50000], [45, 120000], [35, 80000], [50, 40000]])
y = np.array([0, 1, 1, 0])

# Scale features and fit classifier
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = LogisticRegression()
model.fit(X_scaled, y)
print("Predicted Class:", model.predict(X_scaled))`,
        },
        realWorldApps: [
          "Credit decision engines determining loan default risk probabilities",
          "Email spam filter systems scoring message risk scores",
          "Medical diagnostic models estimating disease likelihood from patient biomarkers",
        ],
      },
    },
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
        "Maps real-valued linear combinations into a probability range between 0 and 1.",
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
