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
          "Asymptotic notation forms the formal mathematical framework for analyzing algorithm execution bounds as input size n grows.",
        explanation:
          "Big-O defines an upper bound on run-time or space complexity. Big-Omega defines the tight lower bound, while Big-Theta indicates an exact asymptotically tight bound where upper and lower bounds coincide.",
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
            "There exist positive constants c and n0 such that f(n) never exceeds c * g(n) for all inputs larger than n0.",
        },
        code: {
          language: "cpp",
          title: "Comparing Time Complexity Profiles in C++",
          code: `#include <iostream>
#include <vector>

int getFirst(const std::vector<int>& arr) {
    return arr.empty() ? -1 : arr[0]; // O(1)
}

int sumArray(const std::vector<int>& arr) {
    int total = 0;
    for (int val : arr) {
        total += val; // O(n)
    }
    return total;
}`,
        },
        realWorldApps: [
          "Benchmarking engine latency during database query execution planning",
          "Preventing algorithmic complexity attacks like hash collision flooding",
          "Memory footprint optimization in resource-constrained embedded software",
        ],
      },
      "arrays-and-vectors": {
        id: "arrays-and-vectors",
        parentTopicId: "data-structures-algorithms",
        level: "Elementary",
        title: "Static Arrays & Dynamic Vector Resizing",
        summary:
          "Contiguous memory blocks provide O(1) random access but require careful resizing strategies when capacity is exceeded.",
        explanation:
          "Static arrays allocate fixed memory blocks at compile time. Dynamic vectors allocate underlying contiguous arrays on the heap and double capacity whenever allocation limits are reached, amortizing insertion costs to O(1).",
        keyTakeaways: [
          "O(1) random access via memory offset calculations: BaseAddress + (index * sizeof(type)).",
          "Dynamic resizing amortizes reallocation cost across multiple insertions.",
          "Cache-friendly spatial locality optimizes CPU instruction throughput.",
        ],
        formula: {
          title: "Amortized Cost per Insertion",
          latex: "T_{amortized} = \\frac{O(n) + n \\cdot O(1)}{n} = O(1)",
          explanation:
            "When doubling array capacity, expensive O(n) reallocations occur infrequently, resulting in an amortized O(1) insertion time.",
        },
        code: {
          language: "cpp",
          title: "Simulating Dynamic Vector Growth in C++",
          code: `#include <vector>
#include <iostream>

void demonstrateVectorGrowth() {
    std::vector<int> vec;
    for (int i = 0; i < 5; ++i) {
        vec.push_back(i * 10);
        std::cout << "Size: " << vec.size() << ", Capacity: " << vec.capacity() << "\\n";
    }
}`,
        },
        realWorldApps: [
          "High-performance numerical matrix storage in scientific computing libraries",
          "Buffer management in network packet streaming sockets",
          "Dynamic tabular data buffers in database query engines",
        ],
      },
      "linked-lists": {
        id: "linked-lists",
        parentTopicId: "data-structures-algorithms",
        level: "Elementary",
        title: "Singly & Doubly Linked Lists",
        summary:
          "Pointer-based nodes allow O(1) insertions and deletions at known positions without requiring contiguous memory blocks.",
        explanation:
          "Linked lists consist of nodes containing data and reference pointers to successor (and predecessor) nodes. While insertion is efficient, random access requires O(n) traversal.",
        keyTakeaways: [
          "O(1) insertions and deletions when the target node reference is known.",
          "O(n) random access time complexity due to sequential pointer traversal.",
          "Higher memory overhead per element due to explicit pointer storage.",
        ],
        code: {
          language: "cpp",
          title: "Singly Linked List Node Insertion in C++",
          code: `#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

void insertAtHead(Node*& head, int val) {
    Node* newNode = new Node(val);
    newNode->next = head;
    head = newNode;
}`,
        },
        realWorldApps: [
          "Implementing undo and redo operation stacks in text editors",
          "Memory management free lists in operating system allocators",
          "LRU cache eviction linked-list structures",
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
          "By computing midpoint index mid = left + (right - left) / 2, binary search avoids integer overflow while narrowing down target intervals in logarithmic time.",
        keyTakeaways: [
          "Requires data to be pre-sorted in contiguous memory buffers.",
          "Protects against integer overflow by using midpoint computation bounds.",
          "Forms the foundation for lower-bound and upper-bound searching algorithms.",
        ],
        formula: {
          title: "Logarithmic Division Recurrence",
          latex: "T(n) = T(n/2) + O(1) \\implies T(n) = O(\\log n)",
          explanation:
            "At each recursive step, search domain size is divided by 2, requiring log2(n) steps.",
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
          "Binary searching git commits via git bisect to locate regressions",
          "Logarithmic range filtering in memory management frameworks",
        ],
      },
      "merge-sort-quicksort": {
        id: "merge-sort-quicksort",
        parentTopicId: "data-structures-algorithms",
        level: "Intermediate",
        title: "Merge Sort & Quicksort Partitioning",
        summary:
          "Divide-and-conquer sorting algorithms achieve O(n log n) efficiency through recursive sub-problem decomposition.",
        explanation:
          "Merge sort divides arrays evenly and merges sorted halves with O(n) auxiliary memory. Quicksort partitions arrays around a pivot element in-place with O(log n) stack space.",
        keyTakeaways: [
          "Merge Sort guarantees O(n log n) worst-case time with O(n) extra space.",
          "Quicksort achieves O(n log n) average time in-place with optimal cache performance.",
          "Pivot selection strategy determines quicksort worst-case degradation to O(n^2).",
        ],
        formula: {
          title: "Merge Sort Recurrence Relation",
          latex: "T(n) = 2T(n/2) + O(n) \\implies O(n \\log n)",
          explanation:
            "Splitting array into 2 halves of size n/2 and combining them in linear O(n) time.",
        },
        code: {
          language: "cpp",
          title: "Quicksort Lomuto Partitioning in C++",
          code: `#include <vector>
#include <algorithm>

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; ++j) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}`,
        },
        realWorldApps: [
          "External sorting pipelines for massive out-of-core datasets",
          "Database query result sorting prior to merge-join execution",
          "Standard library sorting implementations (std::sort introsort)",
        ],
      },
      "two-pointers-sliding-window": {
        id: "two-pointers-sliding-window",
        parentTopicId: "data-structures-algorithms",
        level: "Intermediate",
        title: "Two Pointers & Sliding Window Techniques",
        summary:
          "Reduce nested loop complexity from O(n^2) to O(n) by maintaining synchronized index pointers or dynamic sub-array windows.",
        explanation:
          "Two pointers operate from opposing ends or matching paces to scan sorted arrays. Sliding windows expand and contract right and left boundaries to maintain valid sub-array conditions.",
        keyTakeaways: [
          "Transforms quadratic brute-force searches into linear O(n) scans.",
          "Ideal for substring searching, subarray summation, and palindrome validation.",
          "Minimizes redundant computations across overlapping intervals.",
        ],
        realWorldApps: [
          "Network packet inspection for rate-limiting sliding windows",
          "Genomic sequence alignment and substring matching",
          "Financial ticker moving average calculation over streaming trades",
        ],
      },
      "binary-search-trees": {
        id: "binary-search-trees",
        parentTopicId: "data-structures-algorithms",
        level: "Advanced",
        title: "Binary Search Trees & AVL Self-Balancing",
        summary:
          "Hierarchical node trees maintain ordered keys, while self-balancing rotations guarantee logarithmic search performance.",
        explanation:
          "Standard BSTs degrade to O(n) linked lists under sorted insertions. AVL and Red-Black trees enforce strict balance factor invariants through tree rotations.",
        keyTakeaways: [
          "BST invariants: left subtree values < node < right subtree values.",
          "Self-balancing AVL trees maintain height difference <= 1 across all subtrees.",
          "Guarantees O(log n) worst-case search, insertion, and deletion.",
        ],
        formula: {
          title: "AVL Balance Factor Invariant",
          latex:
            "BF(node) = Height(LeftSubtree) - Height(RightSubtree) \\in \\{-1, 0, 1\\}",
          explanation:
            "Tree rotations are triggered immediately if any node balance factor falls outside [-1, 1].",
        },
        realWorldApps: [
          "In-memory symbol tables and compiler syntax tree parsing",
          "Database indexing structures and ordered set containers",
          "Hierarchical file system directory indexing",
        ],
      },
      "heaps-priority-queues": {
        id: "heaps-priority-queues",
        parentTopicId: "data-structures-algorithms",
        level: "Advanced",
        title: "Min-Heaps & Priority Queue Scheduling",
        summary:
          "Complete binary trees satisfying heap property allow O(1) access to minimum/maximum elements and O(log n) insertions.",
        explanation:
          "Heaps are typically stored in contiguous arrays where element $i$ has children at indices $2i+1$ and $2i+2$. Priority queues use heaps to schedule tasks by priority weight.",
        keyTakeaways: [
          "Min-Heap invariant: parent node is less than or equal to its children.",
          "O(1) peek access to extrema and O(log n) heapify-up/down updates.",
          "Forms the core data structure for Dijkstra and Huffman coding algorithms.",
        ],
        realWorldApps: [
          "Operating system CPU task schedulers managing thread priorities",
          "Event-driven simulation engines processing timed execution queues",
          "Finding top-K streaming analytics elements efficiently",
        ],
      },
      "graph-traversals": {
        id: "graph-traversals",
        parentTopicId: "data-structures-algorithms",
        level: "Advanced",
        title: "BFS, DFS & Dijkstra Shortest Path",
        summary:
          "Explore network nodes and compute optimal weighted paths using queue, stack, and priority queue graph traversals.",
        explanation:
          "BFS explores neighbors level by level using queues (shortest path in unweighted graphs). DFS explores depth-first using recursion stacks. Dijkstra uses min-heaps to compute shortest paths in weighted graphs.",
        keyTakeaways: [
          "BFS computes shortest paths in unweighted graphs in O(V + E) time.",
          "DFS handles cycle detection, topological sorting, and maze solving.",
          "Dijkstra algorithm computes single-source shortest paths on non-negative weighted graphs.",
        ],
        formula: {
          title: "Dijkstra Edge Relaxation Inequality",
          latex:
            "dist(v) > dist(u) + weight(u, v) \\implies dist(v) = dist(u) + weight(u, v)",
          explanation:
            "Updates shortest known distance to vertex v whenever a shorter path through u is discovered.",
        },
        realWorldApps: [
          "GPS routing and map navigation engines calculating fastest driving routes",
          "Social network connection degree calculations and friend recommendations",
          "Internet packet routing protocols (OSPF, BGP network topology traversal)",
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
      "select-filtering": {
        id: "select-filtering",
        parentTopicId: "database-management-sql",
        level: "Elementary",
        title: "SELECT Projections & WHERE Filtering",
        summary:
          "Extract specific columns and filter rows using relational boolean predicates.",
        explanation:
          "The SELECT statement retrieves data from relational tables. Projections choose columns, while WHERE clauses apply boolean conditions using comparison and logical operators.",
        keyTakeaways: [
          "Avoid SELECT * in production queries to minimize I/O and network bandwidth.",
          "Use indexed columns in WHERE predicates for faster row lookup.",
          "Combine conditions using AND, OR, and IN operators.",
        ],
        code: {
          language: "sql",
          title: "Filtered SQL Projection Query",
          code: `SELECT customer_id, email, signup_date
FROM customers
WHERE country = 'US' AND status = 'active';`,
        },
        realWorldApps: [
          "Filtering active user accounts in customer relationship portals",
          "Retrieving specific product inventory details by SKU",
          "Logging query projections in audit compliance pipelines",
        ],
      },
      "aggregate-functions": {
        id: "aggregate-functions",
        parentTopicId: "database-management-sql",
        level: "Elementary",
        title: "Aggregate Functions (COUNT, SUM, AVG)",
        summary:
          "Summarize column datasets across row groups to compute metrics and totals.",
        explanation:
          "Aggregate functions compress multiple rows into single summary metrics. COUNT tallies rows, SUM totals numerical values, and AVG computes arithmetic means.",
        keyTakeaways: [
          "NULL values are automatically ignored by aggregate functions.",
          "Use COUNT(DISTINCT column) to count unique entities.",
          "Combine with GROUP BY for category-level metric reporting.",
        ],
        code: {
          language: "sql",
          title: "Computing Sales Aggregations",
          code: `SELECT 
    COUNT(order_id) AS total_orders,
    SUM(amount) AS gross_revenue,
    AVG(amount) AS average_order_value
FROM orders
WHERE order_date >= '2026-01-01';`,
        },
        realWorldApps: [
          "Calculating daily e-commerce gross merchandise value (GMV)",
          "Counting active session counts in web analytics tables",
          "Computing average latency metrics in server log databases",
        ],
      },
      "group-by-having": {
        id: "group-by-having",
        parentTopicId: "database-management-sql",
        level: "Elementary",
        title: "GROUP BY & HAVING Clauses",
        summary:
          "Group rows by categorical columns and filter aggregated summary results using HAVING.",
        explanation:
          "GROUP BY aggregates rows sharing common column values. The HAVING clause filters grouped results based on aggregate metric thresholds, unlike WHERE which filters raw rows prior to aggregation.",
        keyTakeaways: [
          "WHERE filters individual rows before aggregation; HAVING filters aggregated groups.",
          "All selected non-aggregated columns must be included in the GROUP BY clause.",
          "Enables powerful categorical reporting and segmentation.",
        ],
        code: {
          language: "sql",
          title: "Categorical Grouping and Aggregation",
          code: `SELECT category_id, COUNT(*) AS product_count, AVG(price) AS avg_price
FROM products
GROUP BY category_id
HAVING COUNT(*) > 5;`,
        },
        realWorldApps: [
          "Identifying high-volume merchant categories in payment systems",
          "Filtering user cohorts meeting minimum activity thresholds",
          "Summarizing regional sales performance reports",
        ],
      },
      "sql-joins": {
        id: "sql-joins",
        parentTopicId: "database-management-sql",
        level: "Intermediate",
        title: "Inner, Left, Right & Full Outer Joins",
        summary:
          "Combine relational table rows based on shared foreign key relationships.",
        explanation:
          "Joins connect disparate tables. INNER JOIN keeps matching records in both tables. LEFT (or RIGHT) JOIN retains all records from the left (or right) table regardless of matches.",
        keyTakeaways: [
          "INNER JOIN returns rows where join conditions match on both sides.",
          "LEFT JOIN preserves all left table records, padding unmatched right columns with NULL.",
          "Ensure foreign key columns are indexed to accelerate join execution.",
        ],
        code: {
          language: "sql",
          title: "Relational Join Query",
          code: `SELECT o.order_id, c.customer_name, o.amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;`,
        },
        realWorldApps: [
          "Linking customer profiles to their corresponding order transactions",
          "Associating order line items with product catalog details",
          "Generating comprehensive audit reports across relational schemas",
        ],
      },
      "schema-normalization": {
        id: "schema-normalization",
        parentTopicId: "database-management-sql",
        level: "Intermediate",
        title: "Normalization & 1NF through 3NF",
        summary:
          "Structure relational tables to minimize data redundancy and prevent insertion, update, and deletion anomalies.",
        explanation:
          "Normalization rules organize database columns and tables. 1NF eliminates repeating groups; 2NF removes partial functional dependencies; 3NF eliminates transitive dependencies.",
        keyTakeaways: [
          "1NF: Atomic column values with no repeating groups.",
          "2NF: 1NF plus all non-key attributes fully dependent on the primary key.",
          "3NF: 2NF plus no transitive dependencies between non-key attributes.",
        ],
        realWorldApps: [
          "Designing clean multi-entity delivery and e-commerce database schemas",
          "Eliminating customer address duplication across order records",
          "Ensuring scalable schema maintainability as business requirements evolve",
        ],
      },
      "entity-relationship": {
        id: "entity-relationship",
        parentTopicId: "database-management-sql",
        level: "Intermediate",
        title: "Entity-Relationship Modeling & Cascades",
        summary:
          "Model one-to-one, one-to-many, and many-to-many business domain relationships with referential integrity.",
        explanation:
          "ER modeling defines entities, attributes, and relationships. Foreign key constraints enforce referential integrity, while cascading rules manage updates and deletions across related child records.",
        keyTakeaways: [
          "One-to-Many relationships utilize foreign keys in the child table.",
          "Many-to-Many relationships require junction/association tables.",
          "ON DELETE CASCADE rules automate referential clean-up.",
        ],
        realWorldApps: [
          "Modeling multi-entity ride-sharing or delivery platforms (riders, drivers, orders)",
          "Mapping student enrollment and course registration systems",
          "Configuring organizational reporting hierarchies",
        ],
      },
      "acid-transactions": {
        id: "acid-transactions",
        parentTopicId: "database-management-sql",
        level: "Advanced",
        title: "ACID Properties & Transaction Isolation",
        summary:
          "ACID guarantees database reliability despite hardware crashes, power outages, and concurrent query updates.",
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

COMMIT;`,
        },
        realWorldApps: [
          "Bank account ledger transfers ensuring money is never duplicated or lost",
          "E-commerce flash sale inventory decrements guarding against double allocation",
          "Distributed flight booking engines managing concurrent seat reservations",
        ],
      },
      "btree-indexes": {
        id: "btree-indexes",
        parentTopicId: "database-management-sql",
        level: "Advanced",
        title: "B-Tree Indexes & Query Execution Plans",
        summary:
          "Accelerate query lookups using self-balancing B-Tree index structures and analyze optimizer execution plans.",
        explanation:
          "B-Tree indexes maintain sorted key pointers allowing logarithmic O(log n) searches instead of O(n) full table scans. EXPLAIN ANALYZE reveals whether the query planner utilizes index scans or sequential scans.",
        keyTakeaways: [
          "Reduces disk block I/O operations from linear to logarithmic complexity.",
          "Composite indexes optimize queries filtering on multiple leading columns.",
          "EXPLAIN ANALYZE inspects cost estimates, scan types, and execution bottlenecks.",
        ],
        code: {
          language: "sql",
          title: "Creating and Analyzing Indexed Queries",
          code: `CREATE INDEX idx_customers_email ON customers(email);

EXPLAIN ANALYZE 
SELECT * FROM customers WHERE email = 'user@example.com';`,
        },
        realWorldApps: [
          "Speeding up user authentication lookups on user email tables",
          "Optimizing time-series range scans on large transactional logs",
          "Database performance tuning and slow query remediation",
        ],
      },
      "window-functions": {
        id: "window-functions",
        parentTopicId: "database-management-sql",
        level: "Advanced",
        title: "Advanced Window Functions & CTEs",
        summary:
          "Perform complex analytical computations across sliding row partitions without collapsing result sets.",
        explanation:
          "Window functions compute aggregates and rankings over specified partitions of rows using OVER(). Common Table Expressions (CTEs) structure complex multi-step queries into readable modular blocks.",
        keyTakeaways: [
          "ROW_NUMBER(), RANK(), and DENSE_RANK() assign sequential ranking within partitions.",
          "LAG() and LEAD() access previous and subsequent row values without self-joins.",
          "CTEs simplify hierarchical queries and recursive graph traversals.",
        ],
        code: {
          language: "sql",
          title: "Moving Average Window Function",
          code: `SELECT 
    date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7day_avg
FROM daily_sales;`,
        },
        realWorldApps: [
          "Calculating rolling financial metrics and 7-day active user averages",
          "Ranking top sales performers within regional sales departments",
          "Sessionizing user clickstream logs for funnel drop-off analysis",
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

df = pd.DataFrame({
    'price': [19.99, 49.99, 99.99, 14.99],
    'quantity': [5, 2, 1, 10]
})

df['total_revenue'] = df['price'] * df['quantity']
print(df)`,
        },
        realWorldApps: [
          "Batch financial record processing and automated reconciliation",
          "Automated ETL pipeline transformations prior to database ingestion",
          "High-throughput data preprocessing for statistical machine learning",
        ],
      },
      "handling-nulls": {
        id: "handling-nulls",
        parentTopicId: "data-analysis-visualization",
        level: "Elementary",
        title: "Handling Missing Values & Type Casting",
        summary:
          "Identify missing data points, impute null records, and ensure correct data types for robust analysis.",
        explanation:
          "Real-world datasets contain missing or malformed values. Pandas provides robust tools like dropna(), fillna(), and astype() to clean data prior to statistical modeling.",
        keyTakeaways: [
          "Inspect missing counts using df.isna().sum().",
          "Impute missing numerical values using mean, median, or predictive models.",
          "Cast datatypes appropriately (e.g., categories, datetimes) to save memory.",
        ],
        code: {
          language: "python",
          title: "Cleaning Missing Values in Pandas",
          code: `import pandas as pd
import numpy as np

df = pd.DataFrame({'score': [85, np.nan, 92, 78, np.nan]})
df['score'] = df['score'].fillna(df['score'].median())
print(df)`,
        },
        realWorldApps: [
          "Cleaning survey response datasets with missing customer ratings",
          "Handling missing sensor telemetry logs in IoT data pipelines",
          "Preparing clean training features for machine learning algorithms",
        ],
      },
      "indexing-filtering": {
        id: "indexing-filtering",
        parentTopicId: "data-analysis-visualization",
        level: "Elementary",
        title: "Filtering, Sorting & Conditional Indexing",
        summary:
          "Extract specific subsets of dataframes using boolean masks and multi-condition logical filters.",
        explanation:
          "Conditional indexing uses boolean arrays to filter dataframe rows matching specific criteria. loc[] and iloc[] provide robust label-based and integer-based indexing.",
        keyTakeaways: [
          "Combine multiple conditions using bitwise operators (&, |, ~).",
          "Use .loc[row_selector, col_selector] for precise data slicing.",
          "Sort values using df.sort_values(by=..., ascending=False).",
        ],
        code: {
          language: "python",
          title: "Boolean Filtering in Pandas",
          code: `import pandas as pd

df = pd.DataFrame({'age': [22, 35, 42, 28], 'income': [45000, 85000, 120000, 52000] })
filtered = df[(df['age'] > 30) & (df['income'] > 60000)]
print(filtered)`,
        },
        realWorldApps: [
          "Filtering high-value customer transactions for targeted marketing",
          "Isolating anomalous sensor readings exceeding safety thresholds",
          "Segmenting user demographics for exploratory data reports",
        ],
      },
      "descriptive-stats": {
        id: "descriptive-stats",
        parentTopicId: "data-analysis-visualization",
        level: "Intermediate",
        title: "Descriptive Statistics & Dispersion Metrics",
        summary:
          "Summarize dataset central tendencies and dispersion using mean, median, variance, and IQR.",
        explanation:
          "Descriptive statistics characterize numerical distributions. While mean and variance capture parametric center and spread, median and interquartile range (IQR) remain robust against outliers.",
        keyTakeaways: [
          "Mean and standard deviation are sensitive to skewed distributions and outliers.",
          "Median and IQR provide robust summary statistics for skewed data.",
          "Skewness measures distribution asymmetry.",
        ],
        formula: {
          title: "Interquartile Range Formula",
          latex: "IQR = Q_3 - Q_1",
          explanation:
            "Measures statistical dispersion by finding the range between the 75th and 25th percentiles.",
        },
        code: {
          language: "python",
          title: "Computing Summary Statistics",
          code: `import pandas as pd

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
        realWorldApps: [
          "Summarizing property housing price distributions in real estate markets",
          "Analyzing salary benchmarks across engineering departments",
          "Assessing financial portfolio return dispersion",
        ],
      },
      "groupby-pivots": {
        id: "groupby-pivots",
        parentTopicId: "data-analysis-visualization",
        level: "Intermediate",
        title: "Groupby Operations & Pivot Tables",
        summary:
          "Aggregate, transform, and reshape tabular datasets using split-apply-combine groupby workflows.",
        explanation:
          "The split-apply-combine pattern splits data into groups based on keys, applies aggregate or transformation functions, and combines results. Pivot tables create multidimensional cross-tabulations.",
        keyTakeaways: [
          "groupby() enables powerful metric aggregation across categorical groups.",
          "agg() applies multiple statistical functions simultaneously.",
          "pivot_table() reshapes data into clear spreadsheet-style matrices.",
        ],
        code: {
          language: "python",
          title: "Groupby and Pivot Aggregations",
          code: `import pandas as pd

df = pd.DataFrame({
    'region': ['North', 'North', 'South', 'South'],
    'product': ['A', 'B', 'A', 'B'],
    'sales': [100, 200, 150, 300]
})

summary = df.groupby('region')['sales'].sum()
print(summary)`,
        },
        realWorldApps: [
          "Aggregating regional sales performance across product lines",
          "Summarizing monthly active user metrics by subscription tier",
          "Generating executive financial summary reports",
        ],
      },
      "outlier-detection": {
        id: "outlier-detection",
        parentTopicId: "data-analysis-visualization",
        level: "Intermediate",
        title: "Outlier Detection (Z-Scores & IQR Bounds)",
        summary:
          "Identify and filter anomalous extreme data points using z-scores or interquartile range fences.",
        explanation:
          "Outliers skew statistical models and descriptive metrics. Z-scores measure standard deviations from the mean, while IQR fences flag values lying beyond $Q_3 + 1.5 \\times IQR$ or $Q_1 - 1.5 \\times IQR$.",
        keyTakeaways: [
          "Z-score method assumes approximately normal data distributions.",
          "IQR method is non-parametric and robust against skewed data.",
          "Outliers can be clipped, imputed, or removed based on domain context.",
        ],
        formula: {
          title: "IQR Outlier Fence Equation",
          latex: "UpperBound = Q_3 + 1.5 \\times IQR",
          explanation:
            "Any observation exceeding the upper IQR fence is flagged as a statistical outlier.",
        },
        realWorldApps: [
          "Detecting fraudulent financial transactions exceeding normal spending patterns",
          "Filtering faulty sensor telemetry spikes in industrial monitoring",
          "Cleaning experimental data in scientific research",
        ],
      },
      "hypothesis-testing": {
        id: "hypothesis-testing",
        parentTopicId: "data-analysis-visualization",
        level: "Advanced",
        title: "Hypothesis Testing, p-Values & Confidence Intervals",
        summary:
          "Validate statistical assumptions and evaluate experimental significance using rigorous hypothesis tests.",
        explanation:
          "Hypothesis testing evaluates whether observed sample differences are statistically significant or merely due to random chance. The p-value measures the probability of observing results as extreme under the null hypothesis.",
        keyTakeaways: [
          "Null hypothesis ($H_0$) assumes no effect or difference.",
          "Reject $H_0$ when p-value falls below significance threshold alpha (e.g., 0.05).",
          "Confidence intervals estimate plausible range boundaries for population parameters.",
        ],
        formula: {
          title: "T-Statistic Formula",
          latex:
            "t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}",
          explanation:
            "Measures the difference between two sample means relative to combined standard error.",
        },
        realWorldApps: [
          "Analyzing A/B test conversion rates for digital product releases",
          "Validating clinical trial drug efficacy against placebo controls",
          "Quality control manufacturing defect rate comparisons",
        ],
      },
      "correlation-matrices": {
        id: "correlation-matrices",
        parentTopicId: "data-analysis-visualization",
        level: "Advanced",
        title: "Pearson & Spearman Correlation Matrices",
        summary:
          "Measure linear and monotonic associations between numerical feature variables.",
        explanation:
          "Correlation coefficients quantify the strength and direction of association between variables. Pearson measures linear relationships, while Spearman measures monotonic rank relationships.",
        keyTakeaways: [
          "Pearson correlation ranges from -1 to +1, measuring linear association.",
          "Spearman rank correlation handles monotonic relationships and resists outliers.",
          "High feature correlation indicates potential multicollinearity in linear models.",
        ],
        formula: {
          title: "Pearson Correlation Coefficient",
          latex:
            "r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}",
          explanation:
            "Quantifies linear correlation between two random variables.",
        },
        code: {
          language: "python",
          title: "Computing Correlation Matrix in Pandas",
          code: `import pandas as pd
import numpy as np

df = pd.DataFrame(np.random.randn(100, 4), columns=['A', 'B', 'C', 'D'])
corr_matrix = df.corr(method='pearson')
print(corr_matrix)`,
        },
        realWorldApps: [
          "Identifying redundant features prior to machine learning model training",
          "Analyzing financial asset return co-movements in portfolio management",
          "Discovering biomedical biomarker relationships",
        ],
      },
      "visual-storytelling": {
        id: "visual-storytelling",
        parentTopicId: "data-analysis-visualization",
        level: "Advanced",
        title: "Visual Storytelling with Matplotlib & Seaborn",
        summary:
          "Communicate analytical insights effectively through clear, well-structured charts and dashboards.",
        explanation:
          "Data visualization translates complex numerical patterns into intuitive visual formats. Proper choice of chart types (scatter plots, box plots, heatmaps) prevents misinterpretation and highlights key takeaways.",
        keyTakeaways: [
          "Match visualization types to analytical goals (distributions, trends, relationships).",
          "Ensure clear axis labels, titles, and accessible color palettes.",
          "Seaborn builds on Matplotlib to provide high-level statistical data graphics.",
        ],
        code: {
          language: "python",
          title: "Creating Statistical Plots with Seaborn",
          code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="time")
plt.title("Total Bill vs Tip Amount")
plt.show()`,
        },
        realWorldApps: [
          "Building executive dashboard visualizations for business intelligence",
          "Presenting scientific research findings in academic publications",
          "Visualizing model evaluation curves for machine learning stakeholders",
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
      "feature-scaling": {
        id: "feature-scaling",
        parentTopicId: "machine-learning-modeling",
        level: "Elementary",
        title: "Feature Scaling & Standardization",
        summary:
          "Normalize feature magnitudes so gradient descent and distance-based algorithms converge efficiently.",
        explanation:
          "Features with larger numerical ranges dominate objective loss functions. Standardization scales features to zero mean and unit variance, while normalization bounds features between 0 and 1.",
        keyTakeaways: [
          "Crucial for gradient descent optimization, SVMs, k-NN, and neural networks.",
          "Standardization formula: $z = (x - \\mu) / \\sigma$.",
          "Always fit scalers on training sets only to prevent data leakage.",
        ],
        code: {
          language: "python",
          title: "Standardizing Features with Scikit-Learn",
          code: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[100, 0.05], [200, 0.10], [150, 0.08]])
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print(X_scaled)`,
        },
        realWorldApps: [
          "Preprocessing multi-scale financial and demographic features for credit scoring",
          "Normalizing image pixel intensities for computer vision models",
          "Optimizing distance metrics in recommendation nearest-neighbor searches",
        ],
      },
      "train-test-split": {
        id: "train-test-split",
        parentTopicId: "machine-learning-modeling",
        level: "Elementary",
        title: "Train/Test Dataset Splitting Strategies",
        summary:
          "Partition data into training and holdout test sets to evaluate out-of-sample model generalization.",
        explanation:
          "Evaluating models on training data leads to overly optimistic performance due to memorization (overfitting). Train/test splitting holds out unseen validation data to test true generalization.",
        keyTakeaways: [
          "Standard splits allocate 70-80% for training and 20-30% for testing.",
          "Stratified sampling preserves target class label proportions across splits.",
          "Cross-validation averages performance across multiple train/test folds.",
        ],
        code: {
          language: "python",
          title: "Stratified Train-Test Splitting",
          code: `from sklearn.model_selection import train_test_split
import numpy as np

X = np.arange(100).reshape((50, 2))
y = np.array([0]*25 + [1]*25)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)`,
        },
        realWorldApps: [
          "Evaluating predictive model accuracy on unseen customer data",
          "Preventing data leakage during exploratory hyperparameter tuning",
          "Validating financial forecasting models across historical time blocks",
        ],
      },
      "linear-regression": {
        id: "linear-regression",
        parentTopicId: "machine-learning-modeling",
        level: "Elementary",
        title: "Ordinary Least Squares Linear Regression",
        summary:
          "Fit linear hyperplanes to continuous target variables by minimizing squared error residuals.",
        explanation:
          "Linear regression models continuous targets as a weighted linear combination of input features plus a bias term. Ordinary Least Squares (OLS) solves for weights that minimize total squared prediction error.",
        keyTakeaways: [
          "Minimizes Residual Sum of Squares (RSS) loss function.",
          "Assumes linear relationship, homoscedasticity, and normally distributed errors.",
          "Provides closed-form analytical solution via matrix operations.",
        ],
        formula: {
          title: "Residual Sum of Squares Loss",
          latex: "RSS(w) = \\sum_{i=1}^{n} (y_i - w^T x_i)^2",
          explanation:
            "Measures total squared vertical distance between actual targets and model predictions.",
        },
        code: {
          language: "python",
          title: "Linear Regression in Scikit-Learn",
          code: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X, y)
print("Coefficient:", model.coef_[0])`,
        },
        realWorldApps: [
          "Real estate housing price estimation based on square footage and bedrooms",
          "Forecasting future sales revenue based on advertising spend",
          "Predicting energy consumption demand based on weather temperatures",
        ],
      },
      "logistic-regression": {
        id: "logistic-regression",
        parentTopicId: "machine-learning-modeling",
        level: "Intermediate",
        title: "Logistic Regression & Sigmoid Activation",
        summary:
          "Predict probabilities for binary classification targets by passing continuous linear outputs through the sigmoid function.",
        explanation:
          "By mapping inputs into values between 0.0 and 1.0, logistic regression models can be interpreted as conditional probabilities. Parameters are optimized using log-loss cross-entropy minimization.",
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
            "Penalizes confident incorrect predictions exponentially during gradient descent.",
        },
        code: {
          language: "python",
          title: "Logistic Regression Training",
          code: `from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[25, 50000], [45, 120000], [35, 80000], [50, 40000]])
y = np.array([0, 1, 1, 0])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = LogisticRegression()
model.fit(X_scaled, y)`,
        },
        realWorldApps: [
          "Credit decision engines determining loan default risk probabilities",
          "Email spam filter systems scoring message risk scores",
          "Medical diagnostic models estimating disease likelihood from biomarkers",
        ],
      },
      "decision-trees": {
        id: "decision-trees",
        parentTopicId: "machine-learning-modeling",
        level: "Intermediate",
        title: "Decision Trees & Gini Impurity",
        summary:
          "Partition feature spaces hierarchically using recursive binary splits based on Gini impurity or entropy.",
        explanation:
          "Decision trees construct flowchart-like rules where each internal node splits data on a feature threshold to maximize information gain or minimize Gini impurity in child nodes.",
        keyTakeaways: [
          "Non-parametric models capable of capturing non-linear feature interactions.",
          "Gini impurity measures how often a randomly chosen element would be incorrectly labeled.",
          "Prone to overfitting if tree depth grows unrestricted.",
        ],
        formula: {
          title: "Gini Impurity Formula",
          latex: "Gini(t) = 1 - \\sum_{i=1}^{C} p_i^2",
          explanation: "Measures node impurity across C target classes.",
        },
        realWorldApps: [
          "Customer segmentation rule generation in marketing",
          "Automated medical triage diagnostic decision support systems",
          "Credit card fraud rule engines",
        ],
      },
      "evaluation-metrics": {
        id: "evaluation-metrics",
        parentTopicId: "machine-learning-modeling",
        level: "Intermediate",
        title: "Precision, Recall, F1-Score & ROC-AUC",
        summary:
          "Measure classification performance rigorously across imbalanced datasets using confusion matrix metrics.",
        explanation:
          "Accuracy can be misleading on imbalanced data. Precision measures exactness (True Positives / Predicted Positives), Recall measures completeness (True Positives / Actual Positives), and ROC-AUC evaluates ranking thresholds.",
        keyTakeaways: [
          "Precision guards against false positives.",
          "Recall guards against false negatives.",
          "ROC-AUC evaluates model separability across all possible classification thresholds.",
        ],
        formula: {
          title: "F1-Score Harmonic Mean",
          latex:
            "F1 = 2 \\cdot \\frac{Precision \\cdot Recall}{Precision + Recall}",
          explanation:
            "Balances precision and recall into a single comprehensive evaluation metric.",
        },
        realWorldApps: [
          "Evaluating rare disease medical screening diagnostic models",
          "Assessing cybersecurity malware detection precision and recall",
          "Credit card fraudulent transaction detector evaluation",
        ],
      },
      "ensemble-methods": {
        id: "ensemble-methods",
        parentTopicId: "machine-learning-modeling",
        level: "Advanced",
        title: "Random Forests & Gradient Boosted Trees",
        summary:
          "Combine multiple decision trees via bagging and boosting to achieve state-of-the-art predictive accuracy.",
        explanation:
          "Random Forests average predictions across independently bagged decision trees to reduce variance. Gradient Boosting builds trees sequentially, where each new tree fits the residual errors of prior estimators.",
        keyTakeaways: [
          "Random Forests prevent overfitting through bootstrapping and random feature subsets.",
          "Gradient Boosting (XGBoost, LightGBM) minimizes loss iteratively via gradient descent.",
          "Ensemble methods dominate tabular machine learning competitions and production systems.",
        ],
        realWorldApps: [
          "Enterprise fraud detection and risk scoring platforms",
          "Personalized e-commerce recommendation ranking systems",
          "Predictive maintenance forecasting for industrial IoT equipment",
        ],
      },
      "regularization-penalties": {
        id: "regularization-penalties",
        parentTopicId: "machine-learning-modeling",
        level: "Advanced",
        title: "L1 (Lasso) & L2 (Ridge) Regularization",
        summary:
          "Prevent model overfitting by adding penalty terms to loss functions that discourage extreme coefficient weights.",
        explanation:
          "Ridge (L2) regression adds a penalty proportional to squared coefficient magnitudes, shrinking weights. Lasso (L1) adds a penalty proportional to absolute magnitudes, performing automated feature selection by zeroing out weak coefficients.",
        keyTakeaways: [
          "L2 Ridge regularization shrinks coefficients and handles multicollinearity.",
          "L1 Lasso regularization performs sparse feature selection.",
          "Regularization hyperparameter alpha controls model complexity vs training fit.",
        ],
        formula: {
          title: "Lasso L1 Loss Objective",
          latex: "Loss = RSS(w) + \\alpha \\sum_{j=1}^{p} |w_j|",
          explanation:
            "Adds absolute sum of weights penalty to objective loss function.",
        },
        realWorldApps: [
          "Genomic biomarker selection from thousands of gene expression variables",
          "High-dimensional text classification feature pruning",
          "Preventing overfitting in over-parameterized financial models",
        ],
      },
      "sklearn-pipelines": {
        id: "sklearn-pipelines",
        parentTopicId: "machine-learning-modeling",
        level: "Advanced",
        title: "Scikit-Learn Pipelines & Cross-Validation",
        summary:
          "Encapsulate data preprocessing steps and model estimators into robust, reproducible modular pipelines.",
        explanation:
          "Scikit-Learn pipelines chain transformers (scalers, imputers) and final estimators together. This prevents data leakage during cross-validation by ensuring transformations are fitted strictly on training folds.",
        keyTakeaways: [
          "Eliminates data leakage during cross-validation evaluation.",
          "Streamlines deployment by bundling preprocessing and modeling into a single artifact.",
          "Integrates seamlessly with GridSearchCV for automated hyperparameter tuning.",
        ],
        code: {
          language: "python",
          title: "Building a Scikit-Learn Pipeline",
          code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
])`,
        },
        realWorldApps: [
          "Production machine learning inference service packaging",
          "Automated hyperparameter grid search and model validation workflows",
          "Ensuring reproducible data science experiment tracking",
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
