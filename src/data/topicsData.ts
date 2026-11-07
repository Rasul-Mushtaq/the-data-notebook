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
      "Architect high-performance computational systems by mastering memory layout, cache locality, and algorithmic complexity.",
    description:
      "Low-latency systems require precise alignment between data structures and hardware caches. Beyond basic syntax, production engineering demands understanding amortized complexity, pointer chasing overhead, and graph topology traversal under memory constraints.",
    breakdown: [
      "Cache-conscious data layouts and contiguous memory allocation versus pointer indirections",
      "Asymptotic analysis frameworks for worst-case, average-case, and amortized time complexity",
      "Hierarchical balancing in self-balancing binary search trees and heap memory organization",
      "Graph and network topology traversals for shortest path routing and dependency resolution",
      "Algorithmic paradigms including two pointers, sliding windows, and memoized dynamic programming",
    ],
    code: {
      language: "cpp",
      title: "Cache-Efficient LRU Cache Implementation in C++",
      code: `#include <unordered_map>
#include <list>

class LRUCache {
private:
    int capacity;
    std::list<std::pair<int, int>> cacheList;
    std::unordered_map<int, std::list<std::pair<int, int>>::iterator> cacheMap;

public:
    LRUCache(int cap) : capacity(cap) {}

    int get(int key) {
        auto it = cacheMap.find(key);
        if (it == cacheMap.end()) return -1;
        
        // Move accessed item to the front (most recently used)
        cacheList.splice(cacheList.begin(), cacheList, it->second);
        return it->second->second;
    }

    void put(int key, int value) {
        auto it = cacheMap.find(key);
        if (it != cacheMap.end()) {
            it->second->second = value;
            cacheList.splice(cacheList.begin(), cacheList, it->second);
            return;
        }

        if (cacheList.size() >= capacity) {
            int lastKey = cacheList.back().first;
            cacheList.pop_back();
            cacheMap.erase(lastKey);
        }

        cacheList.push_front({key, value});
        cacheMap[key] = cacheList.begin();
    }
};`,
    },
    formula: {
      title: "Amortized Analysis Potential Function",
      latex: "\\Phi(D_i) \\ge \\Phi(D_0) \\quad \\text{for all } i",
      explanation:
        "The potential method assigns a potential function to data structure states. Amortized cost equals actual cost plus the change in potential, ensuring efficient bounds across a sequence of operations.",
    },
    realWorldApps: [
      "In-memory caching layers in distributed key-value stores like Redis and Memcached",
      "Database engine buffer pool management replacing Least Recently Used disk pages",
      "Packet routing and network switch forwarding tables operating at wire speed",
    ],
    links: [
      { label: "LeetCode Algorithmic Hub", url: "https://leetcode.com" },
      { label: "VisuAlgo Structure Visualizer", url: "https://visualgo.net" },
    ],
  },
  {
    id: "database-management-sql",
    title: "Database Management & SQL",
    eyebrow: "Data Engineering",
    summary:
      "Design resilient relational schemas, analyze execution plans, and maintain strict transactional ACID guarantees at scale.",
    description:
      "Relational database management systems require careful index design, isolation level tuning, and query optimization. Understanding cost-based optimizers and lock contention prevents performance degradation under high concurrent loads.",
    breakdown: [
      "ACID transactional guarantees and isolation anomalies (dirty reads, non-repeatable reads, phantom reads)",
      "Relational schema normalization through Boyce-Codd Normal Form and strategic denormalization",
      "B-Tree index structures, composite index column ordering rules, and covering index scans",
      "Advanced analytical querying using Common Table Expressions and window frame functions",
      "Distributed consistency models, replication lag management, and the CAP theorem",
    ],
    code: {
      language: "sql",
      title: "Advanced SQL: Hierarchical CTE with Recursive Traversal",
      code: `WITH RECURSIVE org_hierarchy AS (
    -- Anchor member: Select root management nodes
    SELECT employee_id, manager_id, name, title, 1 AS depth
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive member: Traverse down the organizational tree
    SELECT e.employee_id, e.manager_id, e.name, e.title, oh.depth + 1
    FROM employees e
    INNER JOIN org_hierarchy oh ON e.manager_id = oh.employee_id
)
SELECT employee_id, name, title, depth
FROM org_hierarchy
ORDER BY depth, name;`,
    },
    formula: {
      title: "B-Tree Node Search Cost Function",
      latex: "Cost = I/O_{read} \\times \\log_b(N)",
      explanation:
        "Models disk input and output operations required to locate a record in a B-Tree index, where b is the branching factor and N is total indexed rows.",
    },
    realWorldApps: [
      "Multi-tenant financial ledgers ensuring zero-loss double-entry bookkeeping",
      "High-throughput e-commerce inventory reservation and locking mechanisms",
      "Real-time fraud detection transaction logging and auditing pipelines",
    ],
    links: [
      { label: "Use The Index, Luke!", url: "https://use-the-index-luke.com" },
      {
        label: "PostgreSQL Architecture Guide",
        url: "https://www.postgresql.org/docs/",
      },
    ],
  },
  {
    id: "data-analysis-visualization",
    title: "Data Analysis & Visualization",
    eyebrow: "Data Science",
    summary:
      "Transform raw telemetry and logs into actionable insights using rigorous statistical testing and robust EDA workflows.",
    description:
      "Data analysis bridges raw data ingestion and executive decision making. Practitioners must handle skewed distributions, missing data imputation, and hypothesis testing without introducing sampling bias.",
    breakdown: [
      "Robust exploratory data analysis, missing data imputation strategies, and outlier detection",
      "Parametric and nonparametric hypothesis testing, p-values, and statistical power",
      "Feature distribution transformations, log scaling, and variance stabilization",
      "Correlation structures, multicollinearity diagnostics, and principal component analysis",
      "Visual storytelling principles emphasizing data-ink ratios and perceptual accuracy",
    ],
    code: {
      language: "python",
      title: "Robust Outlier Detection via Interquartile Range",
      code: `import pandas as pd
import numpy as np

def filter_outliers_iqr(df: pd.DataFrame, column: str, multiplier: float = 1.5) -> pd.DataFrame:
    """Removes statistical outliers from a dataframe column using IQR bounds."""
    series = df[column].dropna()
    q1 = series.quantile(0.25)
    q3 = series.quantile(0.75)
    iqr = q3 - q1
    
    lower_bound = q1 - (multiplier * iqr)
    upper_bound = q3 + (multiplier * iqr)
    
    filtered_df = df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]
    return filtered_df`,
    },
    formula: {
      title: "Mann-Whitney U Test Statistic",
      latex: "U_1 = n_1 n_2 + \\frac{n_1(n_1 + 1)}{2} - R_1",
      explanation:
        "A nonparametric statistical test used to evaluate whether two independent samples were selected from populations with identical distributions.",
    },
    realWorldApps: [
      "A/B testing conversion rate analysis with statistical confidence intervals",
      "User engagement retention cohort analysis and churn modeling",
      "Financial portfolio risk assessment and volatility tracking dashboards",
    ],
    links: [
      {
        label: "Python Data Science Handbook",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
      },
      {
        label: "Pandas Reference Manual",
        url: "https://pandas.pydata.org/docs/",
      },
    ],
  },
  {
    id: "machine-learning-modeling",
    title: "Machine Learning & Modeling",
    eyebrow: "Artificial Intelligence",
    summary:
      "Build, evaluate, and regularize predictive systems using supervised algorithms and robust cross-validation pipelines.",
    description:
      "Machine learning converts historical observations into predictive generalization. Engineers must navigate the bias-variance dilemma, prevent data leakage during feature engineering, and optimize loss functions.",
    breakdown: [
      "Supervised learning algorithms including linear models, decision trees, and gradient boosters",
      "Regularization techniques (L1 Lasso and L2 Ridge) to penalize model complexity",
      "Cross-validation strategies, stratified splitting, and temporal time-series validation",
      "Classification evaluation metrics (ROC-AUC, Precision-Recall curves, F1 optimization)",
      "Model deployment considerations, latency constraints, and feature store architectures",
    ],
    code: {
      language: "python",
      title: "Ridge Regression Gradient Descent Optimization",
      code: `import numpy as np

def compute_ridge_gradient_descent(X: np.ndarray, y: np.ndarray, alpha: float, lr: float, epochs: int) -> np.ndarray:
    """Optimizes weights for linear regression with L2 regularization."""
    m, n = X.shape
    weights = np.zeros(n)
    bias = 0.0

    for _ in range(epochs):
        y_pred = np.dot(X, weights) + bias
        error = y_pred - y
        
        # Gradient computation with L2 penalty term
        dw = (1 / m) * np.dot(X.T, error) + (alpha / m) * weights
        db = (1 / m) * np.sum(error)
        
        weights -= lr * dw
        bias -= lr * db

    return weights`,
    },
    formula: {
      title: "Ridge Regularized Loss Function",
      latex:
        "L(w) = \\frac{1}{2m} \\sum_{i=1}^{m} (y^{(i)} - w^T x^{(i)})^2 + \\frac{\\alpha}{2m} \\sum_{j=1}^{n} w_j^2",
      explanation:
        "Minimizes residual sum of squares while adding an L2 penalty on weight magnitudes to prevent overfitting and multicollinearity.",
    },
    realWorldApps: [
      "Credit card fraud detection models flagging anomalous transaction patterns",
      "Personalized recommendation engines powering streaming media platforms",
      "Predictive maintenance systems forecasting industrial machinery failures",
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
