import { useMemo, useState } from "react";
import "./App.css";
import decks from "./data/decks";
import slideIndex from "./data/slideIndex";

const topics = [
  {
    id: "dictionary",
    title: "Dictionary ADT + Hashing",
    accent: "accent-slate",
    summary:
      "Maps store key-value pairs. Hashing makes lookup fast, but collisions must be handled thoughtfully.",
    definitions: [
      [
        "Dictionary / map",
        "A collection of key-value pairs keyed by unique identifiers. Supports lookup, insert, and delete by key, often with expected O(1) time when hashing is used.",
      ],
      [
        "Multimap",
        "A map that allows multiple values per key. Useful when keys are not unique but keyed lookup is still required.",
      ],
      [
        "Hash function",
        "Maps a key to a table index. A good hash spreads keys uniformly to reduce collisions.",
      ],
      [
        "Collision",
        "Two different keys map to the same slot. Collision handling is required for correctness and performance.",
      ],
      [
        "Chaining",
        "Store a list/bucket at each table index. Performance depends on load factor and bucket length.",
      ],
      [
        "Open addressing",
        "Probe alternative slots until a free one is found. Searches must follow the same probe sequence used on insert.",
      ],
    ],
    cheats: [
      "Lookup tables only work when the key universe is small.",
      "Good hashing spreads keys evenly across the table.",
      "Open addressing searches must follow the insertion probe path.",
      "Polynomial hashing keeps order info for strings and tuples.",
    ],
    pitfalls: [
      "Hashing reduces collisions, it does not eliminate them.",
      "Do not use direct indexing for huge or non-integer keys.",
    ],
    algorithms: [
      {
        name: "Chaining hash insert",
        code: "for item in bucket[h(k)]:\n  if item.key == k: item.val = v; return\nappend (k, v) to bucket[h(k)]",
      },
      {
        name: "Linear probing search",
        code: "i = h(k)\nwhile table[i] is not empty:\n  if table[i].key == k: return table[i].val\n  i = (i + 1) mod m\nreturn null",
      },
    ],
  },
  {
    id: "trees",
    title: "Balanced Binary Search Trees",
    accent: "accent-emerald",
    summary:
      "AVL and red-black trees maintain logarithmic height using rotations and color rules.",
    definitions: [
      [
        "BST property",
        "Left subtree keys are smaller, right subtree keys are larger. This invariant enables ordered search and in-order traversal.",
      ],
      [
        "Height",
        "Length of longest path from node to leaf. Search, insert, and delete cost O(h).",
      ],
      [
        "Balance factor",
        "Height(left) - height(right). AVL maintains factors in {-1,0,1}.",
      ],
      [
        "AVL tree",
        "Every node has balance factor -1, 0, or 1. Rotations restore balance after insert/delete.",
      ],
      [
        "AVL rotation cases",
        "LL, RR, LR, RL rotations restore balance. The case depends on the heavy child and grandchild.",
      ],
      [
        "Red-black tree",
        "BST with color rules to keep height balanced. Guarantees height O(log n) with fewer rotations than AVL.",
      ],
      [
        "Black height",
        "Number of black nodes on any root-to-leaf path. All such paths must have the same black height.",
      ],
      [
        "Double-red",
        "A red node with a red parent, fixed by recolor/rotate. Violates the red-black rule until corrected.",
      ],
    ],
    cheats: [
      "Rotations change links, not in-order order.",
      "AVL insert: find first unbalanced node and rotate.",
      "AVL delete can require repeated fixes up to root.",
      "Red-black insert fixes double-red via recolor/rotate.",
      "AVL rotations: LL -> right, RR -> left, LR -> left+right, RL -> right+left.",
      "Red-black properties: root black, red nodes have black children, equal black height.",
    ],
    pitfalls: [
      "Balanced does not mean perfectly symmetric.",
      "One rotation may not fix AVL deletions.",
      "After RBT insertion, recolor before rotating when the uncle is red.",
    ],
    algorithms: [
      {
        name: "AVL insert (high level)",
        code: "insert key as BST\nwalk up ancestors:\n  update heights\n  if balance factor out of range:\n    rotate (LL, RR, LR, or RL)\n    stop",
      },
      {
        name: "Red-black insert (outline)",
        code: "insert as BST, color node red\nwhile parent is red:\n  if uncle is red: recolor\n  else rotate to fix double-red\ncolor root black",
      },
      {
        name: "AVL rebalance cases",
        code: "if BF(A) = 2 and BF(B) >= 0: rotate right (LL)\nif BF(A) = -2 and BF(B) <= 0: rotate left (RR)\nif BF(A) = 2 and BF(B) < 0: rotate left at B, right at A (LR)\nif BF(A) = -2 and BF(B) > 0: rotate right at B, left at A (RL)",
      },
      {
        name: "Red-black fix cases",
        code: "if parent is red:\n  if uncle is red: recolor parent+uncle black, grandparent red\n  else rotate around grandparent to fix double-red",
      },
    ],
  },
  {
    id: "graphs",
    title: "Graphs + Traversal",
    accent: "accent-sky",
    summary:
      "Graphs model relationships. DFS/BFS power reachability, components, and paths.",
    definitions: [
      [
        "Adjacency list",
        "Store neighbors for each vertex. Space is O(V+E), ideal for sparse graphs.",
      ],
      [
        "Adjacency matrix",
        "n by n table of edges or weights. Space is O(n^2), but edge lookup is O(1).",
      ],
      [
        "DFS",
        "Explore as deep as possible before backtracking. Useful for connectivity, cycle checks, and ordering tasks.",
      ],
      [
        "BFS",
        "Explore level by level using a queue. Gives shortest path lengths in unweighted graphs.",
      ],
      [
        "Component",
        "A maximal connected subgraph. Count components by launching DFS/BFS from unvisited nodes.",
      ],
    ],
    cheats: [
      "Adjacency lists are best for sparse graphs.",
      "BFS gives shortest paths by edge count in unweighted graphs.",
      "Grid problems are implicit graphs with 4-neighbor edges.",
    ],
    pitfalls: [
      "Traversal order depends on neighbor ordering.",
      "BFS is not for weighted shortest paths.",
    ],
    algorithms: [
      {
        name: "BFS",
        code: "enqueue s; mark s\nwhile Q not empty:\n  v = dequeue\n  for u in Adj[v]:\n    if not marked u: mark u; enqueue u",
      },
      {
        name: "DFS (recursive)",
        code: "DFS(v): mark v\nfor u in Adj[v]:\n  if not marked u: DFS(u)",
      },
    ],
  },
  {
    id: "dc",
    title: "Divide and Conquer",
    accent: "accent-violet",
    summary:
      "Split a problem, solve the parts recursively, then combine their answers.",
    definitions: [
      [
        "Divide",
        "Break the problem into smaller instances. Subproblems are typically the same type as the original.",
      ],
      [
        "Conquer",
        "Solve subproblems recursively. Base cases are solved directly.",
      ],
      [
        "Combine",
        "Merge subproblem answers. This step often dominates per-level work.",
      ],
      [
        "Mergesort",
        "Split, sort recursively, then merge. Stable and O(n log n) in all cases.",
      ],
      [
        "Quicksort",
        "Partition around pivot, then recurse. Average O(n log n), worst O(n^2).",
      ],
      [
        "Strassen",
        "Matrix multiplication using 7 subproducts instead of 8. Lowers asymptotic complexity below O(n^3).",
      ],
    ],
    cheats: [
      "D&C recurrence often looks like T(n)=aT(n/b)+O(n).",
      "Mergesort is O(n log n).",
      "Quicksort is average O(n log n), worst O(n^2).",
      "Karatsuba replaces 4 multiplications with 3.",
      "Strassen reduces matrix multiply from 8 to 7 recursive products.",
    ],
    pitfalls: [
      "Divide and conquer is different from dynamic programming.",
      "Do not forget the combine step.",
    ],
    algorithms: [
      {
        name: "Mergesort",
        code: "if n <= 1: return A\nmid = n//2\nL = mergesort(A[0:mid])\nR = mergesort(A[mid:])\nreturn merge(L, R)",
      },
      {
        name: "Karatsuba",
        code: "split x = x1*B + x0, y = y1*B + y0\np = karatsuba(x1, y1)\nq = karatsuba(x0, y0)\nr = karatsuba(x1 + x0, y1 + y0)\nreturn p*B^2 + (r - p - q)*B + q",
      },
      {
        name: "Strassen (outline)",
        code: "split A,B into quadrants\ncompute 7 products M1..M7\ncombine into C11..C22 using Strassen formulas",
      },
    ],
  },
  {
    id: "greedy",
    title: "Greedy Algorithms",
    accent: "accent-amber",
    summary:
      "Greedy repeatedly takes the best local choice, but it needs proof of safety.",
    definitions: [
      [
        "Greedy choice",
        "The option that looks best right now. Correctness requires proof that local choices lead to a global optimum.",
      ],
      [
        "Making change",
        "Pick the largest coin not exceeding the remaining amount. Optimal only for canonical coin systems like US coins.",
      ],
      [
        "0/1 knapsack",
        "Items are indivisible, greedy may fail. Dynamic programming is used for guaranteed optimality.",
      ],
      [
        "Fractional knapsack",
        "Items can be split, ratio greedy is optimal. Sorting by value/weight yields the best solution.",
      ],
      [
        "Huffman coding",
        "Greedy prefix-code tree from least frequencies. Produces an optimal prefix code for compression.",
      ],
      [
        "Prefix code",
        "No codeword is a prefix of another. Enables unambiguous left-to-right decoding.",
      ],
    ],
    cheats: [
      "Use greedy only with a proof, often an exchange argument.",
      "Greedy coin change fails for some coin systems.",
      "Fractional knapsack is greedy; 0/1 knapsack needs DP.",
      "Huffman repeatedly combines two lowest-frequency trees.",
    ],
    pitfalls: [
      "Local best is not always global best.",
      "The correctness proof matters as much as the algorithm.",
      "Making change is optimal only for canonical coin systems.",
    ],
    algorithms: [
      {
        name: "Making change",
        code: "sort coins desc\nfor coin in coins:\n  while coin <= amount:\n    take coin; amount -= coin",
      },
      {
        name: "Fractional knapsack",
        code: "sort items by value/weight desc\nfor item in items:\n  take min(remaining, item.weight)\n  update remaining",
      },
      {
        name: "Huffman",
        code: "build min-heap of frequencies\nwhile heap size > 1:\n  x = pop min; y = pop min\n  push node(x,y) with freq x+y\nreturn root",
      },
    ],
  },
  {
    id: "dp",
    title: "Dynamic Programming",
    accent: "accent-indigo",
    summary:
      "DP solves overlapping subproblems once and builds toward the final answer.",
    definitions: [
      [
        "Memoization",
        "Top-down recursion with caching. Avoids recomputing overlapping subproblems.",
      ],
      [
        "Tabulation",
        "Bottom-up table filling. Requires an order that respects dependencies.",
      ],
      [
        "State",
        "A table entry describing one subproblem. The state definition controls table size and meaning.",
      ],
      [
        "Transition",
        "Formula to build larger states from smaller ones. Derived from the problem structure.",
      ],
      [
        "Base case",
        "Known smallest subproblem value. Seeds the recurrence and ensures termination.",
      ],
    ],
    cheats: [
      "Define the state before the recurrence.",
      "Fill the table in dependency order.",
      "0/1 knapsack is a classic DP table.",
    ],
    pitfalls: [
      "If subproblems do not overlap, DP is unnecessary.",
      "A recurrence without a state definition is incomplete.",
    ],
    algorithms: [
      {
        name: "0/1 knapsack DP",
        code: "for i in 1..n:\n  for w in 0..W:\n    A[i][w] = A[i-1][w]\n    if wi <= w:\n      A[i][w] = max(A[i][w], bi + A[i-1][w-wi])",
      },
      {
        name: "Floyd-Warshall",
        code: "for k in 1..n:\n  for i in 1..n:\n    for j in 1..n:\n      D[i][j] = min(D[i][j], D[i][k] + D[k][j])",
      },
    ],
  },
  {
    id: "mst",
    title: "MST + Shortest Paths",
    accent: "accent-rose",
    summary:
      "Kruskal and Prim find MSTs. Dijkstra solves shortest paths with nonnegative edges.",
    definitions: [
      [
        "Spanning tree",
        "A connected acyclic subgraph with all vertices. It contains exactly n-1 edges.",
      ],
      [
        "MST",
        "A spanning tree with minimum total weight. It minimizes total edge weight, not source distances.",
      ],
      [
        "Kruskal",
        "Sort edges, add the smallest safe edge. Uses union-find to avoid cycles.",
      ],
      [
        "Prim",
        "Grow a tree by picking the cheapest crossing edge. Similar to Dijkstra but optimizing total tree weight.",
      ],
      [
        "Dijkstra",
        "Finalize the nearest vertex and relax edges. Requires nonnegative edge weights to be correct.",
      ],
    ],
    cheats: [
      "Kruskal uses union-find to detect cycles.",
      "Dijkstra requires nonnegative edges.",
      "MST minimizes total weight, not source distance.",
    ],
    pitfalls: [
      "Do not use Dijkstra on negative edges.",
      "MST is not a shortest-path tree.",
    ],
    algorithms: [
      {
        name: "Kruskal",
        code: "sort edges by weight\nfor e in edges:\n  if find(u) != find(v):\n    add e; union(u,v)\n  stop when n-1 edges",
      },
      {
        name: "Dijkstra",
        code: "initialize D[source]=0, others=inf\nrepeat:\n  pick unvisited v with min D\n  relax edges (v,u)\n  mark v visited",
      },
    ],
  },
];

const practiceBank = [
  {
    id: "dict-mc-1",
    topic: "dictionary",
    type: "mc",
    prompt:
      "Which collision strategy stores a list of items at each table index?",
    choices: ["Open addressing", "Chaining", "Double hashing", "Cuckoo"],
    answer: "Chaining",
  },
  {
    id: "dict-mc-2",
    topic: "dictionary",
    type: "mc",
    prompt: "What does the load factor n/m represent?",
    choices: ["Key size", "Table size", "Fill ratio", "Hash range"],
    answer: "Fill ratio",
  },
  {
    id: "dict-mc-3",
    topic: "dictionary",
    type: "mc",
    prompt: "Which statement is true for open addressing search?",
    choices: [
      "Stops at first collision",
      "Uses any random slot",
      "Uses the same probe sequence as insert",
      "Never requires deletion handling",
    ],
    answer: "Uses the same probe sequence as insert",
  },
  {
    id: "dict-short-1",
    topic: "dictionary",
    type: "short",
    prompt: "Define a dictionary ADT in one sentence.",
    answer:
      "A collection of key-value pairs supporting lookup, insert, and delete by key.",
  },
  {
    id: "dict-short-2",
    topic: "dictionary",
    type: "short",
    prompt: "Why is a simple sum hash bad for strings?",
    answer: "It ignores order, so many anagrams collide.",
  },
  {
    id: "dict-code-1",
    topic: "dictionary",
    type: "code",
    prompt: "Write linear probing insert pseudocode.",
    answer:
      "i = h(k)\nwhile table[i] occupied and table[i].key != k:\n  i = (i+1) mod m\nif table[i] empty or key match: table[i] = (k,v)",
  },
  {
    id: "trees-mc-1",
    topic: "trees",
    type: "mc",
    prompt: "Which AVL case needs a left rotation?",
    choices: ["LL", "RR", "LR", "RL"],
    answer: "RR",
  },
  {
    id: "trees-mc-2",
    topic: "trees",
    type: "mc",
    prompt: "Which red-black rule is true?",
    choices: [
      "Root is red",
      "Red nodes have red children",
      "Every root-to-nil path has same black height",
      "All leaves are red",
    ],
    answer: "Every root-to-nil path has same black height",
  },
  {
    id: "trees-mc-3",
    topic: "trees",
    type: "mc",
    prompt: "BST search time is O(h). What is h in a balanced tree?",
    choices: ["n", "log n", "n log n", "1"],
    answer: "log n",
  },
  {
    id: "trees-short-1",
    topic: "trees",
    type: "short",
    prompt: "What is the balance factor of a node?",
    answer: "Height(left subtree) - height(right subtree).",
  },
  {
    id: "trees-short-2",
    topic: "trees",
    type: "short",
    prompt: "Why do rotations preserve BST order?",
    answer:
      "They change parent/child links without changing in-order sequence.",
  },
  {
    id: "trees-code-1",
    topic: "trees",
    type: "code",
    prompt: "Write pseudocode for a right rotation at node A.",
    answer: "B = A.left\nA.left = B.right\nB.right = A\nreturn B",
  },
  {
    id: "graphs-mc-1",
    topic: "graphs",
    type: "mc",
    prompt: "Which structure gives O(1) edge lookup?",
    choices: ["Adjacency list", "Adjacency matrix", "Edge list", "Union-find"],
    answer: "Adjacency matrix",
  },
  {
    id: "graphs-mc-2",
    topic: "graphs",
    type: "mc",
    prompt:
      "Which traversal finds connected components in an undirected graph?",
    choices: ["DFS", "Dijkstra", "Prim", "Kruskal"],
    answer: "DFS",
  },
  {
    id: "graphs-mc-3",
    topic: "graphs",
    type: "mc",
    prompt: "BFS uses which data structure?",
    choices: ["Stack", "Queue", "Heap", "Set"],
    answer: "Queue",
  },
  {
    id: "graphs-short-1",
    topic: "graphs",
    type: "short",
    prompt: "Define a connected component.",
    answer:
      "A maximal subgraph where every vertex is reachable from every other vertex.",
  },
  {
    id: "graphs-short-2",
    topic: "graphs",
    type: "short",
    prompt: "Why does BFS give shortest path lengths in unweighted graphs?",
    answer: "It explores vertices in increasing edge distance layers.",
  },
  {
    id: "graphs-code-1",
    topic: "graphs",
    type: "code",
    prompt: "Write pseudo-code for BFS using an adjacency list.",
    answer:
      "enqueue s; mark s\nwhile Q not empty:\n  v = dequeue\n  for u in Adj[v]:\n    if not marked u: mark u; enqueue u",
  },
  {
    id: "dc-mc-1",
    topic: "dc",
    type: "mc",
    prompt: "Which recurrence matches mergesort?",
    choices: [
      "T(n)=T(n-1)+O(n)",
      "T(n)=2T(n/2)+O(n)",
      "T(n)=T(n/2)+O(1)",
      "T(n)=3T(n/2)+O(n)",
    ],
    answer: "T(n)=2T(n/2)+O(n)",
  },
  {
    id: "dc-mc-2",
    topic: "dc",
    type: "mc",
    prompt: "Quicksort worst-case time is?",
    choices: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    id: "dc-mc-3",
    topic: "dc",
    type: "mc",
    prompt: "Karatsuba reduces multiplications from 4 to?",
    choices: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    id: "dc-short-1",
    topic: "dc",
    type: "short",
    prompt: "Name the three steps of divide and conquer.",
    answer: "Divide, conquer, combine.",
  },
  {
    id: "dc-short-2",
    topic: "dc",
    type: "short",
    prompt: "What is the crossing case in max subarray D&C?",
    answer: "Best suffix of left plus best prefix of right.",
  },
  {
    id: "dc-code-1",
    topic: "dc",
    type: "code",
    prompt: "Write mergesort pseudocode.",
    answer:
      "if n <= 1: return A\nmid = n//2\nL = mergesort(A[0:mid])\nR = mergesort(A[mid:])\nreturn merge(L, R)",
  },
  {
    id: "greedy-mc-1",
    topic: "greedy",
    type: "mc",
    prompt: "Which problem is solved optimally by greedy?",
    choices: [
      "0/1 knapsack",
      "Fractional knapsack",
      "Longest path",
      "All-pairs shortest path",
    ],
    answer: "Fractional knapsack",
  },
  {
    id: "greedy-mc-2",
    topic: "greedy",
    type: "mc",
    prompt: "Huffman coding builds a tree from which criterion?",
    choices: [
      "Largest weights",
      "Smallest weights",
      "Random weights",
      "Edge weights",
    ],
    answer: "Smallest weights",
  },
  {
    id: "greedy-mc-3",
    topic: "greedy",
    type: "mc",
    prompt: "Which property makes Huffman codes decodable greedily?",
    choices: [
      "Fixed length",
      "Prefix-free",
      "Balanced tree",
      "Sorted alphabet",
    ],
    answer: "Prefix-free",
  },
  {
    id: "greedy-short-1",
    topic: "greedy",
    type: "short",
    prompt: "Why can greedy fail on 0/1 knapsack?",
    answer: "Local ratio choices can block a better overall combination.",
  },
  {
    id: "greedy-short-2",
    topic: "greedy",
    type: "short",
    prompt: "Name one correctness proof technique for greedy algorithms.",
    answer: "Exchange argument or staying-ahead argument.",
  },
  {
    id: "greedy-code-1",
    topic: "greedy",
    type: "code",
    prompt: "Write pseudocode for building a Huffman tree.",
    answer:
      "build min-heap of frequencies\nwhile heap size > 1:\n  x = pop min; y = pop min\n  push node(x,y) with freq x+y\nreturn root",
  },
  {
    id: "dp-mc-1",
    topic: "dp",
    type: "mc",
    prompt: "Which is a valid DP requirement?",
    choices: [
      "Subproblems overlap",
      "Only recursion",
      "No table",
      "Random choice",
    ],
    answer: "Subproblems overlap",
  },
  {
    id: "dp-mc-2",
    topic: "dp",
    type: "mc",
    prompt: "Floyd-Warshall computes which result?",
    choices: [
      "MST",
      "Single-source shortest paths",
      "All-pairs shortest paths",
      "Topological order",
    ],
    answer: "All-pairs shortest paths",
  },
  {
    id: "dp-mc-3",
    topic: "dp",
    type: "mc",
    prompt: "Which table entry fits 0/1 knapsack?",
    choices: ["A[w]", "A[i][w]", "A[i][j][k]", "A[n]"],
    answer: "A[i][w]",
  },
  {
    id: "dp-short-1",
    topic: "dp",
    type: "short",
    prompt: "What is memoization?",
    answer: "Top-down recursion with caching of subproblem answers.",
  },
  {
    id: "dp-short-2",
    topic: "dp",
    type: "short",
    prompt: "What does a DP transition describe?",
    answer: "How to compute a state from smaller states.",
  },
  {
    id: "dp-code-1",
    topic: "dp",
    type: "code",
    prompt: "Write pseudocode for Floyd-Warshall.",
    answer:
      "for k in 1..n:\n  for i in 1..n:\n    for j in 1..n:\n      D[i][j] = min(D[i][j], D[i][k] + D[k][j])",
  },
  {
    id: "mst-mc-1",
    topic: "mst",
    type: "mc",
    prompt: "Which algorithm grows a tree by cheapest crossing edge?",
    choices: ["Kruskal", "Prim", "Dijkstra", "BFS"],
    answer: "Prim",
  },
  {
    id: "mst-mc-2",
    topic: "mst",
    type: "mc",
    prompt: "Kruskal requires which data structure to detect cycles?",
    choices: ["Stack", "Queue", "Union-find", "Heap"],
    answer: "Union-find",
  },
  {
    id: "mst-mc-3",
    topic: "mst",
    type: "mc",
    prompt: "Dijkstra fails when edges are?",
    choices: ["Positive", "Zero", "Negative", "Undirected"],
    answer: "Negative",
  },
  {
    id: "mst-short-1",
    topic: "mst",
    type: "short",
    prompt: "What is an MST?",
    answer: "A spanning tree with minimum total edge weight.",
  },
  {
    id: "mst-short-2",
    topic: "mst",
    type: "short",
    prompt: "Why is an MST not the same as a shortest-path tree?",
    answer: "MST minimizes total weight, not distances from a single source.",
  },
  {
    id: "mst-code-1",
    topic: "mst",
    type: "code",
    prompt: "Write pseudocode for Kruskal's algorithm.",
    answer:
      "sort edges by weight\nfor e in edges:\n  if find(u) != find(v):\n    add e; union(u,v)\n  stop when n-1 edges",
  },
];

const traversalSteps = {
  bfs: [
    { seen: ["A"], queue: ["A"], visit: "A", note: "Start at A." },
    {
      seen: ["A", "B", "C"],
      queue: ["B", "C"],
      visit: "A",
      note: "Enqueue neighbors B, C.",
    },
    {
      seen: ["A", "B", "C", "D"],
      queue: ["C", "D"],
      visit: "B",
      note: "Visit B, enqueue D.",
    },
    {
      seen: ["A", "B", "C", "D", "E"],
      queue: ["D", "E"],
      visit: "C",
      note: "Visit C, enqueue E.",
    },
    {
      seen: ["A", "B", "C", "D", "E", "F"],
      queue: ["E", "F"],
      visit: "D",
      note: "Visit D, enqueue F.",
    },
  ],
  dfs: [
    { seen: ["A"], stack: ["A"], visit: "A", note: "Start at A." },
    { seen: ["A", "B"], stack: ["A", "B"], visit: "B", note: "Go deep to B." },
    {
      seen: ["A", "B", "D"],
      stack: ["A", "B", "D"],
      visit: "D",
      note: "Explore D.",
    },
    {
      seen: ["A", "B", "D", "E"],
      stack: ["A", "B", "E"],
      visit: "E",
      note: "Backtrack then visit E.",
    },
    {
      seen: ["A", "B", "D", "E", "C"],
      stack: ["A", "C"],
      visit: "C",
      note: "Visit remaining neighbor C.",
    },
  ],
};

const dijkstraSteps = [
  {
    chosen: "A",
    D: { A: 0, B: 4, C: 2, D: 7 },
    P: { B: "A", C: "A", D: "A" },
    note: "Start at A, set initial distances from A, and mark A as the closest unvisited node.",
  },
  {
    chosen: "C",
    D: { A: 0, B: 4, C: 2, D: 6 },
    P: { B: "A", C: "A", D: "C" },
    note: "Pick C next (smallest tentative distance) and relax edges to improve D via C.",
  },
  {
    chosen: "B",
    D: { A: 0, B: 4, C: 2, D: 6 },
    P: { B: "A", C: "A", D: "C" },
    note: "Choose B, check its outgoing edges, and keep distances if no shorter path appears.",
  },
  {
    chosen: "D",
    D: { A: 0, B: 4, C: 2, D: 6 },
    P: { B: "A", C: "A", D: "C" },
    note: "Finish by selecting D; all shortest paths from A are finalized.",
  },
];

const kruskalSteps = [
  {
    edge: "AC (4)",
    action: "Accept",
    sets: "{A,C} {B} {D} {E}",
    chosen: ["AC"],
    note: "Pick the lightest edge AC and accept it because it connects two different components.",
  },
  {
    edge: "BE (5)",
    action: "Accept",
    sets: "{A,C} {B,E} {D}",
    chosen: ["AC", "BE"],
    note: "Next lightest edge BE also joins two different sets, so include it.",
  },
  {
    edge: "AB (6)",
    action: "Accept",
    sets: "{A,B,C,E} {D}",
    chosen: ["AC", "BE", "AB"],
    note: "Edge AB connects two sets, merging them without creating a cycle.",
  },
  {
    edge: "BD (10)",
    action: "Accept",
    sets: "{A,B,C,D,E}",
    chosen: ["AC", "BE", "AB", "BD"],
    note: "Edge BD brings in the last vertex, completing the MST.",
  },
];

const knapsackItems = [
  { id: 1, name: "Item 1", weight: 2, benefit: 30 },
  { id: 2, name: "Item 2", weight: 3, benefit: 50 },
  { id: 3, name: "Item 3", weight: 4, benefit: 60 },
];

const knapsackSteps = [
  {
    currentItem: 1,
    currentCapacity: 2,
    updatedCells: [
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    table: [
      [0, 0, 0, 0, 0],
      [0, 0, 30, 30, 30],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
    note: "Row 1 considers only item 1. Since item 1 has weight 2 and benefit 30, capacities 2, 3, and 4 update from 0 to 30.",
  },
  {
    currentItem: 2,
    currentCapacity: 3,
    updatedCells: [
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ],
    table: [
      [0, 0, 0, 0, 0],
      [0, 0, 30, 30, 30],
      [0, 0, 30, 50, 50],
      [null, null, null, null, null],
    ],
    note: "Row 2 considers items 1 and 2. The whole row is filled. At capacity 3, item 2 fits, so max(skip=30, take=50) gives 50.",
  },
  {
    currentItem: 3,
    currentCapacity: 4,
    updatedCells: [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
    ],
    table: [
      [0, 0, 0, 0, 0],
      [0, 0, 30, 30, 30],
      [0, 0, 30, 50, 50],
      [0, 0, 30, 50, 60],
    ],
    note: "Row 3 considers all items. At capacity 4, item 3 fits exactly, so max(skip=50, take=60) gives 60.",
  },
];

const huffmanSteps = [
  {
    pick: "a:5, b:9",
    combine: "n1:14",
    note: "Pick the two lowest frequencies and merge them into a new internal node.",
    nodes: [
      { id: "n1", label: "14", x: 80, y: 40, active: true },
      { id: "a", label: "a:5", x: 40, y: 120 },
      { id: "b", label: "b:9", x: 120, y: 120 },
      { id: "c", label: "c:12", x: 220, y: 120 },
      { id: "d", label: "d:13", x: 300, y: 120 },
      { id: "e", label: "e:16", x: 380, y: 120 },
    ],
    edges: [
      { from: "n1", to: "a", bit: "0" },
      { from: "n1", to: "b", bit: "1" },
    ],
    codes: [],
  },
  {
    pick: "c:12, d:13",
    combine: "n2:25",
    note: "Merge the next two smallest nodes.",
    nodes: [
      { id: "n1", label: "14", x: 80, y: 120 },
      { id: "n2", label: "25", x: 260, y: 40, active: true },
      { id: "a", label: "a:5", x: 40, y: 180 },
      { id: "b", label: "b:9", x: 120, y: 180 },
      { id: "c", label: "c:12", x: 220, y: 120 },
      { id: "d", label: "d:13", x: 300, y: 120 },
      { id: "e", label: "e:16", x: 380, y: 120 },
    ],
    edges: [
      { from: "n1", to: "a", bit: "0" },
      { from: "n1", to: "b", bit: "1" },
      { from: "n2", to: "c", bit: "0" },
      { from: "n2", to: "d", bit: "1" },
    ],
    codes: [],
  },
  {
    pick: "n1:14, e:16",
    combine: "n3:30",
    note: "Merge the next smallest pair: the previous subtree n1 and e.",
    nodes: [
      { id: "n3", label: "30", x: 140, y: 40, active: true },
      { id: "n1", label: "14", x: 80, y: 110 },
      { id: "e", label: "e:16", x: 200, y: 110 },
      { id: "n2", label: "25", x: 320, y: 110 },
      { id: "a", label: "a:5", x: 40, y: 180 },
      { id: "b", label: "b:9", x: 120, y: 180 },
      { id: "c", label: "c:12", x: 280, y: 180 },
      { id: "d", label: "d:13", x: 360, y: 180 },
    ],
    edges: [
      { from: "n3", to: "n1", bit: "0" },
      { from: "n3", to: "e", bit: "1" },
      { from: "n1", to: "a", bit: "0" },
      { from: "n1", to: "b", bit: "1" },
      { from: "n2", to: "c", bit: "0" },
      { from: "n2", to: "d", bit: "1" },
    ],
    codes: [],
  },
  {
    pick: "n2:25, n3:30",
    combine: "root:55",
    note: "The final merge creates the Huffman tree root. Read off each code by tracing 0/1 edges from root to leaf.",
    nodes: [
      { id: "root", label: "55", x: 220, y: 25, active: true },
      { id: "n2", label: "25", x: 320, y: 90 },
      { id: "n3", label: "30", x: 140, y: 90 },
      { id: "n1", label: "14", x: 80, y: 150 },
      { id: "e", label: "e:16", x: 200, y: 150 },
      { id: "c", label: "c:12", x: 280, y: 150 },
      { id: "d", label: "d:13", x: 360, y: 150 },
      { id: "a", label: "a:5", x: 40, y: 210 },
      { id: "b", label: "b:9", x: 120, y: 210 },
    ],
    edges: [
      { from: "root", to: "n3", bit: "0" },
      { from: "root", to: "n2", bit: "1" },
      { from: "n3", to: "n1", bit: "0" },
      { from: "n3", to: "e", bit: "1" },
      { from: "n1", to: "a", bit: "0" },
      { from: "n1", to: "b", bit: "1" },
      { from: "n2", to: "c", bit: "0" },
      { from: "n2", to: "d", bit: "1" },
    ],
    codes: [
      { symbol: "a", code: "000" },
      { symbol: "b", code: "001" },
      { symbol: "e", code: "01" },
      { symbol: "c", code: "10" },
      { symbol: "d", code: "11" },
    ],
  },
];

const floydSteps = [
  {
    k: "A",
    matrix: [
      [0, 4, 2, 7],
      [4, 0, 5, 3],
      [2, 5, 0, 4],
      [7, 3, 4, 0],
    ],
    note: "Use A as an intermediate and test whether paths via A improve any pairwise distances.",
  },
  {
    k: "B",
    matrix: [
      [0, 4, 2, 7],
      [4, 0, 5, 3],
      [2, 5, 0, 4],
      [7, 3, 4, 0],
    ],
    note: "Use B as the intermediate node and apply the same relaxation rule to every pair.",
  },
  {
    k: "C",
    matrix: [
      [0, 4, 2, 6],
      [4, 0, 5, 3],
      [2, 5, 0, 4],
      [6, 3, 4, 0],
    ],
    note: "Using C reveals shorter paths to D, so distances update where C is beneficial.",
  },
  {
    k: "D",
    matrix: [
      [0, 4, 2, 6],
      [4, 0, 5, 3],
      [2, 5, 0, 4],
      [6, 3, 4, 0],
    ],
    note: "Finalize with D as the intermediate; no further improvements appear.",
  },
];

const deckTopicMap = {
  "6-DictionaryADT.pptx": "dictionary",
  "7-Balanced Binary trees.pptx": "trees",
  "8-Graphs.pptx": "graphs",
  "9-Divide and Conquer.pptx": "dc",
  "9-Divide and Conquer-class work.pptx": "dc",
  "10-Greedy 1.pptx": "greedy",
  "10-Greedy 2.pptx": "mst",
  "11-DynamicProgramming.pptx": "dp",
  "11-Dynamic Programming 2.pptx": "dp",
  "practice DC-solution.pptx": "dc",
  "practice-DP.pptx": "dp",
  "practice-greedy.pptx": "greedy",
  "Graph-practice problems-solution.pdf": "graphs",
  "karatsuba.pdf": "dc",
};

const deckPdfMap = {
  "6-DictionaryADT.pptx": "6-DictionaryADT.pdf",
  "7-Balanced Binary trees.pptx": "7-Balanced Binary trees.pdf",
  "8-Graphs.pptx": "8-Graphs.pdf",
  "9-Divide and Conquer.pptx": "9-Divide and Conquer.pdf",
  "9-Divide and Conquer-class work.pptx": "9-Divide and Conquer-class work.pdf",
  "10-Greedy 1.pptx": "10-Greedy 1.pdf",
  "10-Greedy 2.pptx": "10-Greedy 2.pdf",
  "11-DynamicProgramming.pptx": "11-DynamicProgramming.pdf",
  "11-Dynamic Programming 2.pptx": "11-Dynamic Programming 2.pdf",
  "Graph-practice problems-solution.pdf":
    "Graph-practice problems-solution.pdf",
  "karatsuba.pdf": "karatsuba.pdf",
  "practice DC-solution.pptx": "practice DC-solution.pdf",
  "practice-DP.pptx": "practice-DP.pdf",
  "practice-greedy.pptx": "practice-greedy.pdf",
};

const testableContentMap = [
  {
    topic: "dictionary",
    tested: "Dictionaries, maps, lookup tables, hash functions, collisions",
    decks: "6-DictionaryADT.pptx: slides 2-15, 23-24, 28, 31, 33-34, 43, 53",
    importance: "High",
    recognition:
      "Recognize dictionary/map operations, lookup-table limits, hash function purpose, collisions, chaining, and probing.",
    written:
      "Explain why hashing is needed when keys are not small integers and why collisions are unavoidable.",
    solving:
      "Trace get/put/remove, compute a hash index, and follow a collision strategy step by step.",
    gaps: "Slides emphasize concepts, but you should add deletion-with-open-addressing/tombstone practice if your instructor expects implementation details.",
  },
  {
    topic: "trees",
    tested: "Balanced binary trees: BST, AVL, red-black trees",
    decks:
      "7-Balanced Binary trees.pptx: slides 2-6, 11-30, red-black sections later in deck",
    importance: "High",
    recognition:
      "Identify BST property, height effect, AVL balance factor, rotation cases, red-black color rules, and double-red situations.",
    written:
      "Explain why balancing keeps search/insert/delete logarithmic and why rotations preserve in-order order.",
    solving:
      "Trace AVL insert balance-factor updates, choose LL/RR/LR/RL rotation, and describe red-black recolor vs rotate cases.",
    gaps: "The deck has many visual rotation frames; the app should force step-by-step recognition of the first unbalanced node.",
  },
  {
    topic: "graphs",
    tested: "Graph representation, DFS, BFS",
    decks: "8-Graphs.pptx: slides 2-16 plus practice solution PDF pages 1-4",
    importance: "High",
    recognition:
      "Distinguish directed/undirected, weighted/unweighted, adjacency matrix/list, degree, indegree, outdegree, DFS, and BFS.",
    written:
      "Explain why BFS gives shortest paths in unweighted graphs and why DFS/BFS order is not unique.",
    solving:
      "Build adjacency matrix/list, run DFS/BFS, count components, test connectivity, and solve grid-reachability as an implicit graph.",
    gaps: "Weighted shortest paths are not BFS; connect this topic to Dijkstra and Floyd-Warshall.",
  },
  {
    topic: "dc",
    tested: "Divide and conquer, Strassen, Karatsuba",
    decks:
      "9-Divide and Conquer.pptx: slides 5-24; class work slides 2-14; karatsuba.pdf",
    importance: "High",
    recognition:
      "Recognize divide/conquer/combine, recurrence shapes, quicksort, mergesort, Strassen, Karatsuba, and crossing subarray cases.",
    written:
      "Explain how recursive splitting reduces problem size and how combining restores the full solution.",
    solving:
      "Trace recursion, write recurrence, apply Karatsuba formula, and count single-digit multiplications in tricky cases.",
    gaps: "Strassen formulas can be formula-heavy; memorize the purpose and complexity even if full M1..M7 formulas are not required.",
  },
  {
    topic: "greedy",
    tested: "Making change, knapsack, Huffman coding",
    decks: "10-Greedy 1.pptx: slides 2-21, 27, 35-36; practice-greedy.pptx",
    importance: "High",
    recognition:
      "Recognize greedy choice, coin change behavior, 0/1 vs fractional knapsack, Huffman's two-smallest merge rule, and prefix codes.",
    written:
      "Explain why local choices need proof and why 0/1 knapsack is not safely solved by greedy.",
    solving:
      "Trace coin change, sort by ratio for fractional knapsack, build a Huffman tree, and decode using a prefix tree.",
    gaps: "Greedy correctness proof style may be underdeveloped; add exchange-argument language to written answers.",
  },
  {
    topic: "mst",
    tested: "Kruskal, Prim, Dijkstra",
    decks:
      "10-Greedy 2.pptx: slides 2-38 plus Dijkstra sections; practice-greedy.pptx",
    importance: "High",
    recognition:
      "Distinguish MST from shortest-path tree, Kruskal from Prim, and Dijkstra from BFS/Floyd-Warshall.",
    written:
      "Explain cut/safe-edge intuition, union-find cycle prevention, and why Dijkstra requires nonnegative edges.",
    solving:
      "Sort edges for Kruskal, update sets, grow Prim by cheapest crossing edge, and maintain D/P tables for Dijkstra.",
    gaps: "Path reconstruction from predecessor matrices needs extra practice because it is easy to confuse with distance updates.",
  },
  {
    topic: "dp",
    tested: "Dynamic programming, 0/1 knapsack DP, Floyd-Warshall",
    decks:
      "11-DynamicProgramming.pptx: slides 3-6, 26-35, 73-80; 11-Dynamic Programming 2.pptx; practice-DP.pptx slides 59-65",
    importance: "High",
    recognition:
      "Recognize overlapping subproblems, memoization, tabulation, state, transition, base case, Floyd distance matrix, and path matrix.",
    written:
      "Explain how DP differs from divide and conquer and how Floyd-Warshall allows intermediate vertices gradually.",
    solving:
      "Define state, fill tables, apply D[i][j] = min(D[i][j], D[i][k]+D[k][j]), and reconstruct paths from P.",
    gaps: "Slides cover Floyd path matrix, but students often need more recursive path reconstruction drills.",
  },
];

const masteryModules = {
  dictionary: {
    must: [
      "Dictionary ADT methods: get, put, remove",
      "Why lookup tables are O(1) but limited",
      "Hash functions and collision handling",
    ],
    should: [
      "Chaining vs open addressing tradeoffs",
      "Load factor intuition",
      "String/polynomial hashing intuition",
    ],
    nice: ["Cuckoo hashing and advanced collision strategies"],
    easy: "A dictionary is like a labeled folder system: give a key, get the matching value quickly.",
    deep: "A map stores unique keys with values. If keys are not already small array indices, a hash function compresses them into table positions. Because many possible keys map into fewer slots, collisions must be resolved with chaining or probing.",
    why: "Exam questions often ask why hashing is fast but not magic. Expected O(1) depends on good distribution and controlled load factor.",
    process: [
      "Decide what the key is.",
      "Map the key through h(k).",
      "If the slot is empty, insert/search there.",
      "If occupied, use chaining or follow the probe sequence.",
      "For search, follow the same collision path used during insertion.",
    ],
    visual:
      "key k -> h(k) -> table index -> either value directly or a bucket/probe path",
    basicExample: "Student ID 123 maps to A[123] in a small lookup table.",
    examExample:
      "If h(k)=k mod 10, keys 24 and 34 collide at index 4, so chaining stores both in bucket 4 or probing finds another slot.",
    edgeCase:
      "Open addressing search cannot stop at the first collision. It stops at the key or an actually empty slot after following the probe sequence.",
    confusions: [
      "Hashing reduces collisions, it does not eliminate them.",
      "A hash index is not the same thing as the original key.",
      "Lookup tables only work when the key range is small enough.",
    ],
    checklist: [
      "Define map/multimap/hash/collision",
      "Compute hash indices",
      "Trace chaining and probing",
      "Explain why load factor matters",
    ],
  },
  trees: {
    must: [
      "BST property and O(h) operations",
      "AVL balance factor",
      "LL/RR/LR/RL rotations",
      "Red-black rules and double-red",
    ],
    should: [
      "Why rotations preserve sorted order",
      "AVL vs red-black strictness",
      "Deletion may require repeated fixes",
    ],
    nice: ["Rank-balanced tree framing and external nodes"],
    easy: "A balanced BST keeps the tree from becoming a linked list, so searches stay fast.",
    deep: "BST operations depend on height h. AVL trees enforce balance factors in {-1,0,1}; red-black trees enforce color and black-height rules. Both maintain O(log n) height through local restructuring.",
    why: "Most tree exam problems are trace problems: insert a key, update balance/color info, find the first violation, and choose the fix.",
    process: [
      "Insert as a normal BST.",
      "Walk upward updating heights/balance factors or checking red-black rules.",
      "Find the first violated node/rule.",
      "Use LL/RR single rotation or LR/RL double rotation for AVL.",
      "For red-black, recolor if uncle is red; rotate if uncle is black.",
    ],
    visual:
      "LL: heavy-left-left -> rotate right. RR: heavy-right-right -> rotate left. LR/RL: rotate child first, then grandparent.",
    basicExample:
      "Inserting 10, 20, 30 into an AVL causes RR imbalance at 10, fixed by a left rotation.",
    examExample:
      "If BF(A)=2 and BF(A.left)=-1, it is LR: left-rotate the child, then right-rotate A.",
    edgeCase:
      "A balanced tree does not mean every subtree has equal size; it means height stays controlled.",
    confusions: [
      "Rotations change pointers, not in-order order.",
      "AVL is stricter than red-black.",
      "The first unbalanced ancestor matters for AVL insertion.",
    ],
    checklist: [
      "Find height and BF",
      "Classify rotation case",
      "Trace one rotation",
      "State red-black properties",
      "Explain double-red repair",
    ],
  },
  graphs: {
    must: [
      "Graph terminology",
      "Adjacency matrix vs list",
      "DFS",
      "BFS",
      "Connected components",
    ],
    should: [
      "Directed indegree/outdegree",
      "Grid as implicit graph",
      "Traversal order not unique",
    ],
    nice: ["Cycle/reachability extensions"],
    easy: "A graph is nodes plus edges. Traversal means systematically visiting reachable nodes.",
    deep: "Adjacency matrices use O(V^2) space and give O(1) edge lookup. Adjacency lists use O(V+E), better for sparse graphs. DFS uses depth/backtracking; BFS uses levels/queue.",
    why: "Graph questions often hide behind wording like connected, reachable, component, room/grid, or shortest number of moves.",
    process: [
      "Choose representation.",
      "Mark a start node visited.",
      "DFS: recurse or stack into one neighbor deeply.",
      "BFS: queue neighbors by layers.",
      "For components, restart traversal from each unvisited node.",
    ],
    visual:
      "BFS layers: source -> distance 1 neighbors -> distance 2 neighbors. DFS path: source -> deep branch -> backtrack.",
    basicExample:
      "BFS from A with neighbors B,C visits A, then B/C, then their unvisited neighbors.",
    examExample:
      "To test if an undirected graph is connected, run DFS/BFS from any node and check whether all vertices were visited.",
    edgeCase:
      "If the graph is disconnected, BFS from one node cannot discover every component.",
    confusions: [
      "BFS is shortest path only for unweighted graphs.",
      "Adjacency matrix rows/columns depend on vertex order.",
      "DFS order can change if neighbor order changes.",
    ],
    checklist: [
      "Build matrix/list",
      "Trace DFS/BFS",
      "Count components",
      "Write connectivity pseudocode",
      "Model grid movement as graph edges",
    ],
  },
  dc: {
    must: [
      "Divide/conquer/combine",
      "Mergesort/quicksort intuition",
      "Strassen purpose",
      "Karatsuba formula",
      "Recurrences",
    ],
    should: [
      "Crossing subarray case",
      "Binary-search style halving",
      "Base cases",
    ],
    nice: ["Exact Strassen M1..M7 formulas if assigned"],
    easy: "Divide and conquer solves a problem by cutting it into smaller versions, solving them, then joining answers.",
    deep: "The runtime depends on how many subproblems are created, how much smaller they are, and how expensive combine is. Karatsuba reduces four multiplications to three; Strassen reduces eight matrix multiplications to seven.",
    why: "Exam questions test whether you can recognize the recursive structure and trace formulas without getting lost in notation.",
    process: [
      "Identify the base case.",
      "Split the input.",
      "Recursively solve smaller instances.",
      "Combine subanswers.",
      "Write/solve the recurrence when asked.",
    ],
    visual:
      "Problem size n branches into subproblems size n/2 until base cases, then answers combine upward.",
    basicExample:
      "Mergesort splits [4,1,3,2] into halves, sorts halves, then merges sorted halves.",
    examExample:
      "Karatsuba: (xB+y)(zB+t)=pB^2+(r-p-q)B+q where p=xz, q=yt, r=(x+y)(z+t).",
    edgeCase:
      "Karatsuba's middle product may not be single-digit, so it may recursively require more single-digit multiplications.",
    confusions: [
      "DP reuses overlapping subproblems; D&C usually treats subproblems independently.",
      "Quicksort's combine is trivial; mergesort's combine is merge.",
      "Karatsuba counts multiplications, not additions.",
    ],
    checklist: [
      "Name divide/conquer/combine",
      "Trace mergesort/quicksort",
      "Apply Karatsuba",
      "Explain Strassen's improvement",
      "Write a recurrence",
    ],
  },
  greedy: {
    must: [
      "Greedy-choice idea",
      "Coin change limitations",
      "0/1 vs fractional knapsack",
      "Huffman coding",
    ],
    should: [
      "Exchange argument wording",
      "Prefix-free decoding",
      "Sorting by value/weight",
    ],
    nice: ["Proof templates"],
    easy: "Greedy makes the choice that looks best right now and commits to it.",
    deep: "Greedy is correct only when a local safe choice can be extended to an optimal solution. Fractional knapsack has this property by ratio; 0/1 knapsack usually does not. Huffman is correct because repeatedly merging the two least frequent symbols is safe.",
    why: "The trap is assuming greedy always works because it feels natural.",
    process: [
      "Define the local choice.",
      "Apply it repeatedly.",
      "Check whether the solution is complete.",
      "Justify why the choice is safe or identify a counterexample.",
      "For Huffman, combine two smallest frequencies until one tree remains.",
    ],
    visual:
      "Huffman: min-heap -> pop two smallest -> merge -> push combined node -> repeat.",
    basicExample: "Coin change with US coins usually takes largest coin first.",
    examExample:
      "For fractional knapsack, sort by benefit/weight and take full items until the last fraction.",
    edgeCase:
      "For coin system {1,3,4}, greedy for 6 takes 4+1+1, but optimal is 3+3.",
    confusions: [
      "0/1 knapsack is not fractional knapsack.",
      "Huffman codes are variable length but prefix-free.",
      "A greedy algorithm needs a correctness argument.",
    ],
    checklist: [
      "Identify greedy choice",
      "Give counterexample when greedy fails",
      "Trace Huffman",
      "Explain prefix-free",
      "Separate 0/1 and fractional knapsack",
    ],
  },
  mst: {
    must: [
      "Spanning tree and MST",
      "Kruskal",
      "Prim",
      "Dijkstra",
      "D/P table tracing",
    ],
    should: [
      "Union-find cycle detection",
      "MST vs shortest-path tree",
      "Nonnegative edge requirement",
    ],
    nice: ["Path compression complexity intuition"],
    easy: "MST connects every vertex as cheaply as possible; Dijkstra finds shortest paths from one source.",
    deep: "Kruskal sorts all edges and accepts safe edges that connect different components. Prim grows one tree through cheapest crossing edges. Dijkstra repeatedly finalizes the closest unvisited vertex and relaxes its outgoing edges.",
    why: "These algorithms look similar because they pick small weights, but they optimize different goals.",
    process: [
      "Kruskal: sort edges, accept if no cycle, merge sets.",
      "Prim: start anywhere, repeatedly add cheapest edge leaving the tree.",
      "Dijkstra: initialize distances, choose min tentative node, relax neighbors, update predecessors.",
    ],
    visual:
      "Kruskal grows a forest that merges. Prim grows one connected tree. Dijkstra grows a finalized distance region from the source.",
    basicExample:
      "Kruskal skips an edge if both endpoints already belong to the same set.",
    examExample:
      "A Dijkstra P table stores predecessors, so path 1 to 2 may reconstruct as 1 -> 3 -> 4 -> 2.",
    edgeCase: "A negative edge breaks Dijkstra's finalized-node assumption.",
    confusions: [
      "MST is not shortest path from a source.",
      "Prim is not Dijkstra, even if both use a priority idea.",
      "Kruskal checks cycles; Dijkstra relaxes distances.",
    ],
    checklist: [
      "Trace Kruskal sets",
      "Trace Prim crossing edge choices",
      "Trace Dijkstra D/P tables",
      "Explain MST vs SPT",
      "Know Dijkstra's edge-weight condition",
    ],
  },
  dp: {
    must: [
      "State, transition, base case",
      "Memoization vs tabulation",
      "DP vs D&C",
      "0/1 knapsack DP",
      "Floyd-Warshall",
    ],
    should: [
      "Path matrix P",
      "All-pairs vs single-source shortest paths",
      "Dependency order",
    ],
    nice: ["Binomial coefficient DP"],
    easy: "DP solves the same smaller problems once, stores answers, and reuses them.",
    deep: "A DP solution is defined by subproblem state, base cases, transition relation, and fill order. Floyd-Warshall's state restricts which intermediate vertices may be used, then gradually allows more vertices.",
    why: "Exam DP questions often reward a clear state definition more than long code.",
    process: [
      "Define state meaning.",
      "Set base cases.",
      "Write transition.",
      "Choose fill order.",
      "Return the main problem cell.",
    ],
    visual:
      "Floyd: D^0 -> allow v1 -> allow v2 -> ... -> allow vn, updating every pair i,j each round.",
    basicExample:
      "Fibonacci stores F[i]=F[i-1]+F[i-2] instead of recomputing recursively.",
    examExample:
      "Floyd update: if path i -> k -> j is shorter than current i -> j, replace D[i][j] and record k in P[i][j].",
    edgeCase:
      "Floyd handles negative edges but not negative cycles; Dijkstra handles nonnegative edges only.",
    confusions: [
      "DP is not just recursion; it requires reuse of overlapping subproblems.",
      "Floyd-Warshall is all-pairs, Dijkstra is single-source.",
      "P matrix stores intermediate nodes, not distances.",
    ],
    checklist: [
      "Define a DP state",
      "Write base cases",
      "Fill knapsack table",
      "Apply Floyd update",
      "Reconstruct path from P",
    ],
  },
};

const masteryPractice = [
  {
    id: "m-dict-1",
    topic: "dictionary",
    level: "Level 4",
    type: "spot the error",
    prompt:
      "A linear-probing search stops immediately when it sees a slot with a different key. What is wrong?",
    answer:
      "It must continue along the same probe sequence until it finds the key or an actually empty slot.",
    explanation:
      "A collision may have pushed the target key farther down the probe path. Stopping at the first different key creates false negatives.",
    wrong:
      "Saying 'hash again randomly' is wrong because search must match insertion's probe sequence.",
    source: "6-DictionaryADT.pptx collision/open-addressing slides",
  },
  {
    id: "m-tree-1",
    topic: "trees",
    level: "Level 3",
    type: "trace",
    prompt:
      "In an AVL tree, BF(A)=2 and BF(A.left)=-1 after insertion. Which rotation fixes it?",
    answer:
      "Left-right rotation: first left-rotate the left child, then right-rotate A.",
    explanation:
      "A is left-heavy, but its left child is right-heavy, so this is the LR zig-zag case.",
    wrong: "A single right rotation only fixes LL, not LR.",
    source: "7-Balanced Binary trees.pptx AVL rotation slides",
  },
  {
    id: "m-graph-1",
    topic: "graphs",
    level: "Level 3",
    type: "pseudocode",
    prompt: "How do you determine whether an undirected graph is connected?",
    answer:
      "Run DFS or BFS from any vertex, then check whether the visited set contains all vertices.",
    explanation:
      "If every node is reachable from the start, the graph has one component; otherwise it is disconnected.",
    wrong:
      "Checking only degree > 0 is wrong because two separated cycles can each have positive degree.",
    source: "Graph-practice problems-solution.pdf page 1",
  },
  {
    id: "m-dc-1",
    topic: "dc",
    level: "Level 4",
    type: "formula",
    prompt:
      "Why can 56 × 78 require more single-digit multiplications than 24 × 35 under Karatsuba?",
    answer:
      "Because the middle product r=(5+6)(7+8)=11×15 is not single-digit, so it must be recursively split.",
    explanation:
      "Karatsuba reduces the top-level multiplication count to p, q, r, but r can itself become a multi-digit multiplication.",
    wrong:
      "Answering always 3 ignores the machine restriction to single-digit multiplication.",
    source: "karatsuba.pdf",
  },
  {
    id: "m-greedy-1",
    topic: "greedy",
    level: "Level 4",
    type: "counterexample",
    prompt: "Give a coin system where greedy change fails for amount 6.",
    answer: "Coins {1,3,4}: greedy gives 4+1+1, but optimal is 3+3.",
    explanation:
      "This shows local largest-coin choice can block the global optimum.",
    wrong:
      "Using US coins is a poor counterexample because greedy is canonical there.",
    source: "10-Greedy 1.pptx making change slides",
  },
  {
    id: "m-mst-1",
    topic: "mst",
    level: "Level 2",
    type: "compare",
    prompt: "Why is an MST not the same thing as a shortest-path tree?",
    answer:
      "An MST minimizes total tree weight over all vertices; a shortest-path tree preserves shortest distances from one source.",
    explanation:
      "The objectives are different, so the same weighted graph can produce different edge sets.",
    wrong:
      "Saying both pick smallest edges is too vague and misses the optimization target.",
    source: "10-Greedy 2.pptx MST/Dijkstra slides",
  },
  {
    id: "m-dp-1",
    topic: "dp",
    level: "Level 4",
    type: "trace",
    prompt: "In Floyd-Warshall, what does P[i][j]=k mean?",
    answer:
      "The shortest path from i to j passes through intermediate vertex k.",
    explanation:
      "To reconstruct the path, recursively find i to k, then k to j. P[i][j]=0 means the direct edge is used for that segment.",
    wrong:
      "It is not the distance value and not necessarily the predecessor of j.",
    source:
      "11-DynamicProgramming.pptx path matrix slides; practice-DP.pptx slides 59-65",
  },
];

const flashcards = [
  {
    topic: "dictionary",
    front: "Dictionary / map",
    back: "Stores key-value pairs and supports lookup, insert, and remove by key.",
  },
  {
    topic: "dictionary",
    front: "Collision",
    back: "Two distinct keys map to the same hash table index.",
  },
  {
    topic: "trees",
    front: "AVL balance factor",
    back: "height(left subtree) - height(right subtree), kept in {-1,0,1}.",
  },
  {
    topic: "trees",
    front: "Double-red",
    back: "A red node with a red parent in a red-black tree; fixed by recolor or rotation.",
  },
  {
    topic: "graphs",
    front: "BFS data structure",
    back: "Queue; explores vertices by increasing edge distance.",
  },
  {
    topic: "graphs",
    front: "Adjacency matrix vs list",
    back: "Matrix uses O(V^2) and has O(1) edge lookup; list uses O(V+E) and is better for sparse graphs.",
  },
  {
    topic: "dc",
    front: "Karatsuba core",
    back: "Use p=xz, q=yt, r=(x+y)(z+t), then pB^2+(r-p-q)B+q.",
  },
  {
    topic: "dc",
    front: "Divide and conquer steps",
    back: "Divide, conquer recursively, combine.",
  },
  {
    topic: "greedy",
    front: "Huffman rule",
    back: "Repeatedly merge the two lowest-frequency nodes.",
  },
  {
    topic: "greedy",
    front: "0/1 vs fractional knapsack",
    back: "0/1 items are indivisible and need DP; fractional items can be split and ratio-greedy works.",
  },
  {
    topic: "mst",
    front: "Kruskal",
    back: "Sort edges and add the smallest edge that does not create a cycle.",
  },
  {
    topic: "mst",
    front: "Dijkstra condition",
    back: "Requires nonnegative edge weights.",
  },
  {
    topic: "dp",
    front: "DP state",
    back: "A table entry that represents one well-defined subproblem.",
  },
  {
    topic: "dp",
    front: "Floyd-Warshall",
    back: "All-pairs shortest paths using D[i][j]=min(D[i][j],D[i][k]+D[k][j]).",
  },
];

const mixedExam = [
  {
    id: "exam-1",
    topic: "dictionary",
    prompt: "If h(k)=k mod 7, why do keys 15 and 22 collide?",
    answer: "Both have remainder 1, so both map to table index 1.",
  },
  {
    id: "exam-2",
    topic: "trees",
    prompt:
      "An AVL node has BF=-2 and its right child has BF=1. Name the case and fix.",
    answer: "RL case: right-rotate the right child, then left-rotate the node.",
  },
  {
    id: "exam-3",
    topic: "graphs",
    prompt: "Which graph representation is better for sparse graphs and why?",
    answer:
      "Adjacency list, because it stores only actual edges using O(V+E) space.",
  },
  {
    id: "exam-4",
    topic: "dc",
    prompt: "State the crossing case in divide-and-conquer maximum subarray.",
    answer:
      "The best subarray crosses the midpoint, so it is best suffix of left plus best prefix of right.",
  },
  {
    id: "exam-5",
    topic: "greedy",
    prompt: "Why is Huffman coding greedily decodable?",
    answer:
      "Its codes are prefix-free, so no valid codeword is the prefix of another.",
  },
  {
    id: "exam-6",
    topic: "mst",
    prompt:
      "In Kruskal, why skip an edge whose endpoints are already in the same set?",
    answer:
      "It would create a cycle, so it cannot be part of the spanning tree being built.",
  },
  {
    id: "exam-7",
    topic: "mst",
    prompt: "Why can Dijkstra fail with negative edges?",
    answer:
      "A node marked final could later be improved through a negative edge, violating the algorithm's assumption.",
  },
  {
    id: "exam-8",
    topic: "dp",
    prompt: "What are the four pieces of a DP solution?",
    answer: "State, base cases, transition, and fill order/final answer.",
  },
  {
    id: "exam-9",
    topic: "dp",
    prompt: "In Floyd-Warshall, what changes when k increases?",
    answer:
      "The algorithm allows vertex k as a possible intermediate for every pair i,j.",
  },
  {
    id: "exam-10",
    topic: "dc",
    prompt: "Karatsuba reduces which expensive operation?",
    answer:
      "It reduces four recursive multiplications to three, using extra additions/subtractions.",
  },
];

const studyPlan = [
  {
    label: "Must know",
    items: [
      "AVL rotation cases",
      "DFS/BFS pseudocode",
      "Kruskal/Prim/Dijkstra differences",
      "Floyd-Warshall update and path matrix",
      "Hash collision handling",
    ],
  },
  {
    label: "Needs memorization",
    items: [
      "Red-black rules",
      "AVL BF cases",
      "DP recurrence wording",
      "Karatsuba formula",
      "Dijkstra/Floyd conditions",
    ],
  },
  {
    label: "Needs practice",
    items: [
      "Trace D/P tables",
      "Run Kruskal sets",
      "Build Huffman trees",
      "Represent graphs as matrices/lists",
      "Fill 0/1 knapsack rows",
    ],
  },
  {
    label: "Conceptual explanation",
    items: [
      "Why DP differs from D&C",
      "Why greedy can fail",
      "Why MST is not shortest path",
      "Why rotations preserve BST order",
    ],
  },
];

const stopwords = new Set([
  "the",
  "and",
  "of",
  "to",
  "in",
  "a",
  "is",
  "for",
  "on",
  "with",
  "by",
  "we",
  "be",
  "as",
  "are",
  "or",
  "that",
  "this",
  "an",
  "it",
  "from",
  "at",
  "if",
  "then",
  "do",
  "not",
  "while",
  "into",
  "how",
  "what",
  "when",
  "why",
  "can",
  "will",
  "all",
  "using",
  "use",
  "used",
  "more",
  "most",
  "two",
  "one",
  "new",
  "set",
  "table",
  "algorithm",
  "algorithms",
  "example",
  "examples",
  "step",
  "steps",
]);

function extractKeywords(text, limit = 8) {
  const counts = new Map();
  text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2 && !stopwords.has(word))
    .forEach((word) => {
      counts.set(word, (counts.get(word) ?? 0) + 1);
    });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word);
}

function getSlidePdfUrl(deckName, slideNumber) {
  const pdfName = deckPdfMap[deckName];

  if (!pdfName) {
    return null;
  }

  const encodedPdfName = encodeURIComponent(pdfName);
  return `${import.meta.env.BASE_URL}slides/${encodedPdfName}#page=${slideNumber}&toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
}

function SlideSnapshot({ deck, index }) {
  const slideUrl = getSlidePdfUrl(deck, index);

  if (!slideUrl) {
    return (
      <div className="slide-snapshot missing">
        <p>No PDF snapshot available.</p>
      </div>
    );
  }

  return (
    <div className="slide-snapshot">
      <iframe src={slideUrl} title={`${deck} slide ${index}`} loading="lazy" />
      <a
        className="slide-open-link"
        href={slideUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open slide {index}
      </a>
    </div>
  );
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].id);
  const [search, setSearch] = useState("");
  const [practiceFilter, setPracticeFilter] = useState("all");
  const [practiceType, setPracticeType] = useState("all");
  const [revealed, setRevealed] = useState({});
  const [deckQuery, setDeckQuery] = useState("");
  const [deckFilter, setDeckFilter] = useState("none");
  const [traversalMode, setTraversalMode] = useState("bfs");
  const [traversalStep, setTraversalStep] = useState(0);
  const [dijkstraStep, setDijkstraStep] = useState(0);
  const [kruskalStep, setKruskalStep] = useState(0);
  const [knapsackStep, setKnapsackStep] = useState(0);
  const [huffmanStep, setHuffmanStep] = useState(0);
  const [floydStep, setFloydStep] = useState(0);

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [confidence, setConfidence] = useState({});

  const filteredTopics = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return topics;
    return topics.filter((topic) => {
      const haystack = [
        topic.title,
        topic.summary,
        ...topic.cheats,
        ...topic.pitfalls,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [search]);

  const activeTopic =
    topics.find((topic) => topic.id === selectedTopic) ?? topics[0];

  const activeSlideIndex = slideIndex.find(
    (item) => item.topic === activeTopic.id,
  );

  const activeIndexedSlides = useMemo(() => {
    if (!activeSlideIndex) return [];

    return activeSlideIndex.decks.flatMap((indexedDeck) => {
      const fullDeck = decks.find((deck) => deck.file === indexedDeck.deck);

      if (!fullDeck) {
        return [];
      }

      return indexedDeck.slides
        .map((slideNumber) => {
          const slide = fullDeck.slides.find(
            (item) => item.index === slideNumber,
          );

          if (!slide) {
            return null;
          }

          return {
            deck: indexedDeck.deck,
            index: slide.index,
            text: slide.text,
          };
        })
        .filter(Boolean);
    });
  }, [activeSlideIndex]);

  const activeTestMap = testableContentMap.find(
    (item) => item.topic === activeTopic.id,
  );
  const activeMastery = masteryModules[activeTopic.id];
  const activeFlashcards = flashcards.filter(
    (card) => card.topic === activeTopic.id,
  );
  const currentFlashcard =
    activeFlashcards[Math.min(flashcardIndex, activeFlashcards.length - 1)];
  const activeMasteryPractice = masteryPractice.filter(
    (item) => item.topic === activeTopic.id,
  );

  const filteredPractice = useMemo(() => {
    return practiceBank.filter((item) => {
      const matchesTopic =
        practiceFilter === "all" || item.topic === practiceFilter;
      const matchesType = practiceType === "all" || item.type === practiceType;
      return matchesTopic && matchesType;
    });
  }, [practiceFilter, practiceType]);

  const deckOptions = decks.map((deck) => deck.file).sort();

  const deckMeta = useMemo(() => {
    return decks.map((deck) => {
      const topicId = deckTopicMap[deck.file];
      const topic = topics.find((item) => item.id === topicId);
      const allText = deck.slides.map((slide) => slide.text).join(" ");
      const keywords = extractKeywords(allText, 10);
      const rankedSlides = deck.slides
        .map((slide) => ({
          index: slide.index,
          text: slide.text,
          score: slide.text.split(/\s+/).length,
        }))
        .filter((slide) => slide.score >= 12)
        .sort((a, b) => b.score - a.score);
      const samples = rankedSlides.slice(0, 3);
      return {
        file: deck.file,
        type: deck.type,
        slideCount: deck.slides.length,
        topic,
        keywords,
        samples,
      };
    });
  }, []);

  const filteredDecks =
    deckFilter === "none"
      ? []
      : deckFilter === "all"
        ? deckMeta
        : deckMeta.filter((deck) => deck.file === deckFilter);

  const deckResults = useMemo(() => {
    const query = deckQuery.trim().toLowerCase();
    if (!query || deckFilter === "none") return [];
    const results = [];
    decks.forEach((deck) => {
      if (deckFilter !== "all" && deck.file !== deckFilter) return;
      deck.slides.forEach((slide) => {
        if (slide.text.toLowerCase().includes(query)) {
          results.push({
            deck: deck.file,
            index: slide.index,
            text: slide.text,
          });
        }
      });
    });
    return results.slice(0, 24);
  }, [deckQuery, deckFilter]);

  const traversalData = traversalSteps[traversalMode];
  const traversalState =
    traversalData[Math.min(traversalStep, traversalData.length - 1)];
  const dijkstraState =
    dijkstraSteps[Math.min(dijkstraStep, dijkstraSteps.length - 1)];
  const kruskalState =
    kruskalSteps[Math.min(kruskalStep, kruskalSteps.length - 1)];
  const knapsackState =
    knapsackSteps[Math.min(knapsackStep, knapsackSteps.length - 1)];
  const activeKnapsackItem =
    knapsackItems.find((item) => item.id === knapsackState.currentItem) ??
    knapsackItems[0];
  const huffmanState =
    huffmanSteps[Math.min(huffmanStep, huffmanSteps.length - 1)];
  const floydState = floydSteps[Math.min(floydStep, floydSteps.length - 1)];
  const floydPrev = floydSteps[Math.max(0, floydStep - 1)].matrix;
  const floydHighlights = floydState.matrix.map((row, rowIndex) =>
    row.map(
      (value, colIndex) =>
        floydStep > 0 && value !== floydPrev[rowIndex][colIndex],
    ),
  );

  const graphNodes = ["A", "B", "C", "D", "E", "F"];
  const graphLayout = {
    A: { x: 40, y: 80 },
    B: { x: 140, y: 30 },
    C: { x: 140, y: 130 },
    D: { x: 240, y: 80 },
    E: { x: 340, y: 30 },
    F: { x: 340, y: 130 },
  };
  const graphEdges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "D"],
    ["D", "E"],
    ["D", "F"],
  ];
  const dijkstraNodes = ["A", "B", "C", "D"];
  const dijkstraLayout = {
    A: { x: 40, y: 70 },
    B: { x: 160, y: 20 },
    C: { x: 160, y: 120 },
    D: { x: 300, y: 70 },
  };
  const dijkstraEdges = [
    { from: "A", to: "B", w: 4 },
    { from: "A", to: "C", w: 2 },
    { from: "B", to: "D", w: 3 },
    { from: "C", to: "D", w: 4 },
  ];
  const kruskalNodes = ["A", "B", "C", "D", "E"];
  const kruskalLayout = {
    A: { x: 40, y: 80 },
    B: { x: 140, y: 20 },
    C: { x: 140, y: 140 },
    D: { x: 260, y: 80 },
    E: { x: 360, y: 80 },
  };
  const kruskalEdges = [
    { from: "A", to: "C", w: 4 },
    { from: "B", to: "E", w: 5 },
    { from: "A", to: "B", w: 6 },
    { from: "B", to: "D", w: 10 },
    { from: "C", to: "D", w: 8 },
  ];
  const knapsackCaps = [0, 1, 2, 3, 4];

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-title">
          <p className="eyebrow">CS 435 review</p>
          <h1>Interactive algorithms study tool</h1>
          <p className="hero-copy">
            Deck-backed coverage of every slide. Search the raw deck text, drill
            the cheat sheets, and walk through algorithm visuals.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <strong>{topics.length}</strong>
            <span>topic decks</span>
          </div>
          <div>
            <strong>
              {decks.reduce((sum, deck) => sum + deck.slides.length, 0)}
            </strong>
            <span>deck slides indexed</span>
          </div>
          <div>
            <strong>{practiceBank.length}</strong>
            <span>practice prompts</span>
          </div>
        </div>
      </section>

      <section className="toolbar">
        <input
          className="search-input"
          type="search"
          placeholder="Search topic summaries, cheats, and pitfalls"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      <section className="topic-grid">
        {filteredTopics.map((topic, index) => (
          <button
            key={topic.id}
            type="button"
            className={`topic-card ${topic.accent} ${selectedTopic === topic.id ? "selected" : ""}`}
            style={{ animationDelay: `${index * 0.06}s` }}
            onClick={() => setSelectedTopic(topic.id)}
          >
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
          </button>
        ))}
      </section>

      <section className="detail-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Focused review</p>
            <h2>{activeTopic.title}</h2>
          </div>
          <button
            type="button"
            className="ghost-button"
            onClick={() => setSelectedTopic(topics[0].id)}
          >
            Reset topic
          </button>
        </div>

        <div className="detail-columns">
          <article className="detail-card">
            <h3>Definitions</h3>
            <div className="definition-list">
              {activeTopic.definitions.map(([term, definition]) => (
                <div key={term} className="definition-item">
                  <strong>{term}</strong>
                  <span>{definition}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h3>Cheat sheet</h3>
            <ul>
              {activeTopic.cheats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card warning">
            <h3>Common traps</h3>
            <ul>
              {activeTopic.pitfalls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <h3>Algorithm pseudocode</h3>
            <div className="code-list">
              {activeTopic.algorithms.map((algo) => (
                <div key={algo.name} className="code-block">
                  <p className="label">{algo.name}</p>
                  <pre>
                    <code>{algo.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h3>Deck coverage</h3>

            {activeSlideIndex ? (
              <>
                <p className="label">Important keywords</p>
                <div className="chip-row">
                  {activeSlideIndex.keywords.map((keyword) => (
                    <span key={keyword} className="chip">
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="code-list">
                  {activeSlideIndex.decks.map((deck) => (
                    <div key={deck.deck} className="code-block">
                      <p className="label">{deck.deck}</p>
                      <p>Slides: {deck.slides.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No indexed slides found for this topic yet.</p>
            )}
          </article>

          <article className="detail-card">
            <h3>Indexed slide excerpts</h3>

            {activeIndexedSlides.length > 0 ? (
              <div className="code-list">
                {activeIndexedSlides.slice(0, 8).map((slide) => (
                  <div
                    key={`${slide.deck}-${slide.index}`}
                    className="code-block"
                  >
                    <p className="label">
                      {slide.deck} — Slide {slide.index}
                    </p>

                    <SlideSnapshot deck={slide.deck} index={slide.index} />

                    <p>{slide.text}...</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No slide excerpts found for this topic.</p>
            )}
          </article>
        </div>
      </section>

      <section className="mastery-section">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Mastery map</p>
            <h2>What is actually testable for {activeTopic.title}</h2>
          </div>
        </div>

        {activeTestMap && (
          <article className="mastery-map-card">
            <div className="importance-pill">
              {activeTestMap.importance} importance
            </div>
            <div className="mastery-map-grid">
              <div>
                <p className="label">Tested topic</p>
                <h3>{activeTestMap.tested}</h3>
                <p>{activeTestMap.decks}</p>
              </div>
              <div>
                <p className="label">Recognition questions</p>
                <p>{activeTestMap.recognition}</p>
              </div>
              <div>
                <p className="label">Written explanation questions</p>
                <p>{activeTestMap.written}</p>
              </div>
              <div>
                <p className="label">Coding/problem-solving questions</p>
                <p>{activeTestMap.solving}</p>
              </div>
              <div className="gap-callout">
                <p className="label">Slide coverage gap</p>
                <p>{activeTestMap.gaps}</p>
              </div>
            </div>
          </article>
        )}

        {activeMastery && (
          <div className="mastery-grid">
            <article className="mastery-card priority-card">
              <h3>Must / should / nice to know</h3>
              <div className="priority-lanes">
                <div>
                  <p className="label">Must know</p>
                  <ul>
                    {activeMastery.must.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">Should know</p>
                  <ul>
                    {activeMastery.should.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">Nice to know</p>
                  <ul>
                    {activeMastery.nice.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="mastery-card">
              <h3>Big-picture explanation</h3>
              <p>
                <strong>Easy version:</strong> {activeMastery.easy}
              </p>
              <p>
                <strong>Exam-ready version:</strong> {activeMastery.deep}
              </p>
              <p>
                <strong>Why it matters:</strong> {activeMastery.why}
              </p>
            </article>

            <article className="mastery-card">
              <h3>Process breakdown</h3>
              <ol>
                {activeMastery.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="mastery-card">
              <h3>Visual intuition</h3>
              <p className="visual-text">{activeMastery.visual}</p>
              <p>
                <strong>Basic example:</strong> {activeMastery.basicExample}
              </p>
              <p>
                <strong>Exam example:</strong> {activeMastery.examExample}
              </p>
              <p>
                <strong>Tricky edge case:</strong> {activeMastery.edgeCase}
              </p>
            </article>

            <article className="mastery-card">
              <h3>Common confusions</h3>
              <ul>
                {activeMastery.confusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="mastery-card checklist-card">
              <h3>Mastery checklist</h3>
              {activeMastery.checklist.map((item) => (
                <label key={item} className="check-row">
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </article>
          </div>
        )}
      </section>

      <section className="visual-grid">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Visuals</p>
            <h2>Algorithm walk-throughs</h2>
          </div>
        </div>

        <article className="visual-card">
          <header>
            <h3>Graph traversal</h3>
          </header>
          <div className="visual-split">
            <div className="visual-pane">
              <div className="graph-wrap">
                <svg
                  viewBox="0 0 380 170"
                  role="img"
                  aria-label="Traversal graph"
                >
                  {graphEdges.map(([from, to]) => {
                    const fromPos = graphLayout[from];
                    const toPos = graphLayout[to];
                    const isSeen =
                      traversalState.seen.includes(from) &&
                      traversalState.seen.includes(to);
                    const isActive =
                      traversalState.visit === from ||
                      traversalState.visit === to;
                    return (
                      <line
                        key={`${from}-${to}`}
                        x1={fromPos.x}
                        y1={fromPos.y}
                        x2={toPos.x}
                        y2={toPos.y}
                        className={
                          isActive
                            ? "graph-edge active"
                            : isSeen
                              ? "graph-edge seen"
                              : "graph-edge"
                        }
                      />
                    );
                  })}
                  {graphNodes.map((node) => {
                    const pos = graphLayout[node];
                    const isSeen = traversalState.seen.includes(node);
                    const isVisit = traversalState.visit === node;
                    return (
                      <g key={node}>
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={16}
                          className={
                            isVisit
                              ? "graph-node active"
                              : isSeen
                                ? "graph-node seen"
                                : "graph-node"
                          }
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 5}
                          textAnchor="middle"
                          className="graph-label"
                        >
                          {node}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="visual-pane">
              <div className="visual-meta">
                <div>
                  <h4>{traversalMode === "bfs" ? "Queue" : "Stack"}</h4>
                  <div className="chip-row">
                    {(traversalState.queue || traversalState.stack || []).map(
                      (item, index) => (
                        <span key={`${item}-${index}`} className="chip">
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4>Visit</h4>
                  <p>{traversalState.visit}</p>
                </div>
                <div>
                  <h4>Note</h4>
                  <p>{traversalState.note}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stepper">
            <button
              type="button"
              className="ghost-button"
              onClick={() => setTraversalStep((s) => Math.max(0, s - 1))}
            >
              Previous
            </button>
            <span>
              Step {traversalStep + 1} / {traversalData.length}
            </span>
            <button
              type="button"
              className="ghost-button"
              onClick={() =>
                setTraversalStep((s) =>
                  Math.min(traversalData.length - 1, s + 1),
                )
              }
            >
              Next
            </button>
          </div>
        </article>

        <article className="visual-card">
          <header>
            <h3>Dijkstra table</h3>
            <div className="stepper">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setDijkstraStep((s) => Math.max(0, s - 1))}
              >
                Previous
              </button>
              <span>
                Step {dijkstraStep + 1} / {dijkstraSteps.length}
              </span>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setDijkstraStep((s) =>
                    Math.min(dijkstraSteps.length - 1, s + 1),
                  )
                }
              >
                Next
              </button>
            </div>
          </header>
          <div className="visual-split">
            <div className="visual-pane">
              <div className="graph-wrap">
                <svg
                  viewBox="0 0 340 150"
                  role="img"
                  aria-label="Dijkstra graph"
                >
                  {dijkstraEdges.map((edge) => {
                    const from = dijkstraLayout[edge.from];
                    const to = dijkstraLayout[edge.to];
                    const isActive =
                      dijkstraState.chosen === edge.from ||
                      dijkstraState.chosen === edge.to;
                    return (
                      <g key={`${edge.from}-${edge.to}`}>
                        <line
                          x1={from.x}
                          y1={from.y}
                          x2={to.x}
                          y2={to.y}
                          className={
                            isActive ? "graph-edge active" : "graph-edge"
                          }
                        />
                        <text
                          x={(from.x + to.x) / 2}
                          y={(from.y + to.y) / 2 - 6}
                          textAnchor="middle"
                          className="graph-weight"
                        >
                          {edge.w}
                        </text>
                      </g>
                    );
                  })}
                  {dijkstraNodes.map((node) => {
                    const pos = dijkstraLayout[node];
                    const isChosen = dijkstraState.chosen === node;
                    return (
                      <g key={node}>
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={18}
                          className={
                            isChosen ? "graph-node active" : "graph-node"
                          }
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 5}
                          textAnchor="middle"
                          className="graph-label"
                        >
                          {node}
                        </text>
                        <text
                          x={pos.x}
                          y={pos.y + 28}
                          textAnchor="middle"
                          className="graph-weight"
                        >
                          {dijkstraState.D[node] ?? ""}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="visual-pane">
              <div className="triple">
                <div>
                  <p className="label">Chosen</p>
                  <h4>{dijkstraState.chosen}</h4>
                </div>
                <div>
                  <p className="label">Distances</p>
                  {Object.entries(dijkstraState.D).map(([key, value]) => (
                    <div key={key} className="row">
                      <span>{key}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="label">Predecessors</p>
                  {Object.entries(dijkstraState.P).map(([key, value]) => (
                    <div key={key} className="row">
                      <span>{key}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="label">Step note</p>
                  <p>{dijkstraState.note}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="visual-card">
          <header>
            <h3>Kruskal MST</h3>
            <div className="stepper">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setKruskalStep((s) => Math.max(0, s - 1))}
              >
                Previous
              </button>
              <span>
                Step {kruskalStep + 1} / {kruskalSteps.length}
              </span>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setKruskalStep((s) =>
                    Math.min(kruskalSteps.length - 1, s + 1),
                  )
                }
              >
                Next
              </button>
            </div>
          </header>
          <div className="visual-split">
            <div className="visual-pane">
              <div className="graph-wrap">
                <svg
                  viewBox="0 0 400 170"
                  role="img"
                  aria-label="Kruskal graph"
                >
                  {kruskalEdges.map((edge) => {
                    const from = kruskalLayout[edge.from];
                    const to = kruskalLayout[edge.to];
                    const key = `${edge.from}${edge.to}`;
                    const reverseKey = `${edge.to}${edge.from}`;
                    const isChosen = kruskalState.chosen.some(
                      (item) =>
                        item.startsWith(key) || item.startsWith(reverseKey),
                    );
                    return (
                      <g key={`${edge.from}-${edge.to}`}>
                        <line
                          x1={from.x}
                          y1={from.y}
                          x2={to.x}
                          y2={to.y}
                          className={
                            isChosen ? "graph-edge active" : "graph-edge"
                          }
                        />
                        <text
                          x={(from.x + to.x) / 2}
                          y={(from.y + to.y) / 2 - 6}
                          textAnchor="middle"
                          className="graph-weight"
                        >
                          {edge.w}
                        </text>
                      </g>
                    );
                  })}
                  {kruskalNodes.map((node) => {
                    const pos = kruskalLayout[node];
                    return (
                      <g key={node}>
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={16}
                          className="graph-node"
                        />
                        <text
                          x={pos.x}
                          y={pos.y + 5}
                          textAnchor="middle"
                          className="graph-label"
                        >
                          {node}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="visual-pane">
              <div className="visual-meta">
                <div>
                  <h4>Edge</h4>
                  <p>{kruskalState.edge}</p>
                </div>
                <div>
                  <h4>Action</h4>
                  <p>{kruskalState.action}</p>
                </div>
                <div>
                  <h4>Sets</h4>
                  <p>{kruskalState.sets}</p>
                </div>
                <div>
                  <h4>Step note</h4>
                  <p>{kruskalState.note}</p>
                </div>
              </div>
              <div className="chip-row">
                {kruskalState.chosen.map((edge) => (
                  <span key={edge} className="chip">
                    {edge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="visual-card">
          <header>
            <h3>0/1 knapsack DP</h3>
            <div className="stepper">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setKnapsackStep((s) => Math.max(0, s - 1))}
              >
                Previous
              </button>
              <span>
                Step {knapsackStep + 1} / {knapsackSteps.length}
              </span>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setKnapsackStep((s) =>
                    Math.min(knapsackSteps.length - 1, s + 1),
                  )
                }
              >
                Next
              </button>
            </div>
          </header>

          <div className="visual-split">
            <div className="visual-pane">
              <h4 className="mini-heading">Items being considered</h4>
              <div className="knapsack-items">
                {knapsackItems.map((item) => {
                  const isActive = item.id === knapsackState.currentItem;
                  return (
                    <div
                      key={item.id}
                      className={`knapsack-item-card ${isActive ? "active" : ""}`}
                    >
                      <p className="label">{item.name}</p>
                      <p>Weight: {item.weight}</p>
                      <p>Benefit: {item.benefit}</p>
                    </div>
                  );
                })}
              </div>

              <div className="table-wrap knapsack-table">
                <div className="table-row header">
                  <span>A[i][w]</span>
                  {knapsackCaps.map((cap) => (
                    <span key={cap}>w={cap}</span>
                  ))}
                </div>

                {knapsackState.table.map((row, rowIndex) => (
                  <div key={rowIndex} className="table-row">
                    <span>{rowIndex === 0 ? "i=0" : `i=${rowIndex}`}</span>

                    {row.map((value, colIndex) => {
                      const isActive =
                        rowIndex === knapsackState.currentItem &&
                        colIndex === knapsackState.currentCapacity;

                      const isCurrentRow =
                        rowIndex === knapsackState.currentItem;

                      const isUpdated = knapsackState.updatedCells.some(
                        ([updatedRow, updatedCol]) =>
                          updatedRow === rowIndex && updatedCol === colIndex,
                      );

                      return (
                        <span
                          key={`${rowIndex}-${colIndex}`}
                          className={
                            isActive
                              ? "dp-cell active"
                              : isUpdated
                                ? "dp-cell updated"
                                : isCurrentRow
                                  ? "dp-cell current-row"
                                  : "dp-cell"
                          }
                        >
                          {value === null ? "—" : value}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="visual-pane">
              <div className="visual-meta">
                <div>
                  <h4>Current item</h4>
                  <p>{activeKnapsackItem.name}</p>
                </div>
                <div>
                  <h4>Weight</h4>
                  <p>{activeKnapsackItem.weight}</p>
                </div>
                <div>
                  <h4>Benefit</h4>
                  <p>{activeKnapsackItem.benefit}</p>
                </div>
                <div>
                  <h4>Step note</h4>
                  <p>{knapsackState.note}</p>
                </div>
              </div>

              <p className="label">Current DP row</p>
              <div className="chip-row">
                {knapsackState.table[knapsackState.currentItem].map(
                  (value, index) => (
                    <span
                      key={`${knapsackState.currentItem}-${index}`}
                      className="chip"
                    >
                      A[{knapsackState.currentItem}][{index}] ={" "}
                      {value === null ? "—" : value}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </article>

        <article className="visual-card">
          <header>
            <h3>Huffman tree construction</h3>
            <div className="stepper">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setHuffmanStep((s) => Math.max(0, s - 1))}
              >
                Previous
              </button>
              <span>
                Step {huffmanStep + 1} / {huffmanSteps.length}
              </span>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setHuffmanStep((s) =>
                    Math.min(huffmanSteps.length - 1, s + 1),
                  )
                }
              >
                Next
              </button>
            </div>
          </header>

          <div className="visual-split">
            <div className="visual-pane">
              <div className="graph-wrap">
                <svg
                  viewBox="0 0 420 240"
                  role="img"
                  aria-label="Huffman tree visualization"
                >
                  {huffmanState.edges.map((edge) => {
                    const fromNode = huffmanState.nodes.find(
                      (n) => n.id === edge.from,
                    );
                    const toNode = huffmanState.nodes.find(
                      (n) => n.id === edge.to,
                    );
                    if (!fromNode || !toNode) return null;

                    const midX = (fromNode.x + toNode.x) / 2;
                    const midY = (fromNode.y + toNode.y) / 2;

                    return (
                      <g key={`${edge.from}-${edge.to}`}>
                        <line
                          x1={fromNode.x}
                          y1={fromNode.y}
                          x2={toNode.x}
                          y2={toNode.y}
                          className="graph-edge seen"
                        />
                        <text
                          x={midX}
                          y={midY - 6}
                          textAnchor="middle"
                          className="graph-weight"
                        >
                          {edge.bit}
                        </text>
                      </g>
                    );
                  })}

                  {huffmanState.nodes.map((node) => (
                    <g key={node.id}>
                      <rect
                        x={node.x - 26}
                        y={node.y - 14}
                        width="52"
                        height="28"
                        rx="10"
                        className={
                          node.active ? "tree-node active" : "tree-node"
                        }
                      />
                      <text
                        x={node.x}
                        y={node.y + 5}
                        textAnchor="middle"
                        className="tree-label"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            <div className="visual-pane">
              <div className="visual-meta">
                <div>
                  <h4>Pick</h4>
                  <p>{huffmanState.pick}</p>
                </div>
                <div>
                  <h4>Combine</h4>
                  <p>{huffmanState.combine}</p>
                </div>
                <div>
                  <h4>Note</h4>
                  <p>{huffmanState.note}</p>
                </div>
              </div>

              {huffmanState.codes.length > 0 && (
                <>
                  <p className="label">Final Huffman codes</p>
                  <div className="chip-row">
                    {huffmanState.codes.map((entry) => (
                      <span key={entry.symbol} className="chip">
                        {entry.symbol} → {entry.code}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </article>

        <article className="visual-card">
          <header>
            <h3>Floyd-Warshall</h3>
            <div className="stepper">
              <button
                type="button"
                className="ghost-button"
                onClick={() => setFloydStep((s) => Math.max(0, s - 1))}
              >
                Previous
              </button>
              <span>
                Step {floydStep + 1} / {floydSteps.length}
              </span>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setFloydStep((s) => Math.min(floydSteps.length - 1, s + 1))
                }
              >
                Next
              </button>
            </div>
          </header>
          <div className="visual-split">
            <div className="visual-pane">
              <div className="matrix-wrap">
                <div className="matrix-row header">
                  <span></span>
                  {dijkstraNodes.map((node) => (
                    <span key={node}>{node}</span>
                  ))}
                </div>
                {floydState.matrix.map((row, rowIndex) => (
                  <div key={rowIndex} className="matrix-row">
                    <span>{dijkstraNodes[rowIndex]}</span>
                    {row.map((value, colIndex) => (
                      <span
                        key={`${rowIndex}-${colIndex}`}
                        className={
                          floydHighlights[rowIndex][colIndex]
                            ? "matrix-cell highlight"
                            : "matrix-cell"
                        }
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="visual-pane">
              <div className="visual-meta">
                <div>
                  <h4>Intermediate vertex</h4>
                  <p>{floydState.k}</p>
                </div>
                <div>
                  <h4>Update rule</h4>
                  <p>D[i][j] = min(D[i][j], D[i][k] + D[k][j])</p>
                </div>
                <div>
                  <h4>Step note</h4>
                  <p>{floydState.note}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="practice-section">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Practice</p>
            <h2>Multiple choice, short answer, and code prompts</h2>
          </div>
        </div>

        <div className="practice-filters">
          <select
            value={practiceFilter}
            onChange={(e) => setPracticeFilter(e.target.value)}
          >
            <option value="all">All topics</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
          <select
            value={practiceType}
            onChange={(e) => setPracticeType(e.target.value)}
          >
            <option value="all">All types</option>
            <option value="mc">Multiple choice</option>
            <option value="short">Short answer</option>
            <option value="code">Code writing</option>
          </select>
        </div>

        <div className="quiz-grid">
          {filteredPractice.map((item) => {
            const isOpen = Boolean(revealed[item.id]);
            return (
              <article key={item.id} className="quiz-card">
                <p className="quiz-tag">
                  {topics.find((topic) => topic.id === item.topic)?.title}
                </p>
                <h3>{item.prompt}</h3>
                {item.type === "mc" && (
                  <ol className="choice-list">
                    {item.choices.map((choice) => (
                      <li key={choice}>{choice}</li>
                    ))}
                  </ol>
                )}
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() =>
                    setRevealed((current) => ({
                      ...current,
                      [item.id]: !current[item.id],
                    }))
                  }
                >
                  {isOpen ? "Hide answer" : "Reveal answer"}
                </button>
                {isOpen && (
                  <div className="answer">
                    <p>{item.answer}</p>
                    {item.explanation && (
                      <p className="answer-note">{item.explanation}</p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="active-recall-section">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Active recall</p>
            <h2>Flashcards, mastery questions, and final mixed exam</h2>
          </div>
        </div>

        <div className="active-grid">
          <article className="recall-card flashcard-card">
            <div className="flashcard-topline">
              <p className="label">
                Flashcard {activeFlashcards.length ? flashcardIndex + 1 : 0} /{" "}
                {activeFlashcards.length}
              </p>
              <button
                type="button"
                className="ghost-button"
                onClick={() =>
                  setRevealed((current) => ({
                    ...current,
                    flashcard: !current.flashcard,
                  }))
                }
              >
                {revealed.flashcard ? "Hide back" : "Show back"}
              </button>
            </div>
            {currentFlashcard ? (
              <>
                <h3>{currentFlashcard.front}</h3>
                {revealed.flashcard && (
                  <p className="flashcard-back">{currentFlashcard.back}</p>
                )}
                <div className="stepper">
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => {
                      setFlashcardIndex((index) => Math.max(0, index - 1));
                      setRevealed((current) => ({
                        ...current,
                        flashcard: false,
                      }));
                    }}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => {
                      setFlashcardIndex((index) =>
                        Math.min(activeFlashcards.length - 1, index + 1),
                      );
                      setRevealed((current) => ({
                        ...current,
                        flashcard: false,
                      }));
                    }}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p>No flashcards for this topic yet.</p>
            )}
          </article>

          <article className="recall-card confidence-card">
            <h3>Self-test confidence tracker</h3>
            <div className="confidence-list">
              {topics.map((topic) => (
                <label key={topic.id} className="confidence-row">
                  <span>{topic.title}</span>
                  <select
                    value={confidence[topic.id] ?? "Basic"}
                    onChange={(event) =>
                      setConfidence((current) => ({
                        ...current,
                        [topic.id]: event.target.value,
                      }))
                    }
                  >
                    <option>Don't know</option>
                    <option>Basic</option>
                    <option>Good</option>
                    <option>Mastered</option>
                  </select>
                </label>
              ))}
            </div>
          </article>
        </div>

        <div className="mastery-practice-grid">
          {activeMasteryPractice.map((item) => {
            const isOpen = Boolean(revealed[item.id]);
            return (
              <article key={item.id} className="recall-card">
                <p className="quiz-tag">
                  {item.level} • {item.type}
                </p>
                <h3>{item.prompt}</h3>
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() =>
                    setRevealed((current) => ({
                      ...current,
                      [item.id]: !current[item.id],
                    }))
                  }
                >
                  {isOpen ? "Hide full explanation" : "Reveal full explanation"}
                </button>
                {isOpen && (
                  <div className="answer">
                    <p>
                      <strong>Answer:</strong> {item.answer}
                    </p>
                    <p>
                      <strong>Why correct:</strong> {item.explanation}
                    </p>
                    <p>
                      <strong>Common wrong answer:</strong> {item.wrong}
                    </p>
                    <p className="answer-note">Source: {item.source}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="exam-section">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Final mixed practice</p>
            <h2>Exam-style cumulative check</h2>
          </div>
        </div>
        <div className="exam-grid">
          {mixedExam.map((item, index) => {
            const isOpen = Boolean(revealed[item.id]);
            return (
              <article key={item.id} className="exam-card">
                <p className="quiz-tag">
                  Question {index + 1} •{" "}
                  {topics.find((topic) => topic.id === item.topic)?.title}
                </p>
                <h3>{item.prompt}</h3>
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() =>
                    setRevealed((current) => ({
                      ...current,
                      [item.id]: !current[item.id],
                    }))
                  }
                >
                  {isOpen ? "Hide answer" : "Reveal answer"}
                </button>
                {isOpen && (
                  <p className="answer">
                    <strong>Answer:</strong> {item.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="study-plan-section">
        <div className="panel-header compact">
          <div>
            <p className="eyebrow">Weakness finder</p>
            <h2>What to prioritize before the exam</h2>
          </div>
        </div>
        <div className="study-plan-grid">
          {studyPlan.map((group) => (
            <article key={group.label} className="study-plan-card">
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="deck-section">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Deck explorer</p>
            <h2>Search every slide and solution</h2>
          </div>
          <div className="deck-tools">
            <select
              value={deckFilter}
              onChange={(e) => setDeckFilter(e.target.value)}
            >
              <option value="none">No deck selected</option>
              <option value="all">All decks</option>
              {deckOptions.map((deck) => (
                <option key={deck} value={deck}>
                  {deck}
                </option>
              ))}
            </select>
            <input
              className="search-input"
              type="search"
              placeholder="Search deck text, formulas, or algorithm steps"
              value={deckQuery}
              onChange={(event) => setDeckQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="deck-grid">
          {filteredDecks.length === 0 ? (
            <div className="deck-empty">
              <p className="label">Select a deck to show slide snapshots.</p>
            </div>
          ) : (
            filteredDecks.map((deck) => (
              <article key={deck.file} className="deck-card">
                {(() => {
                  const pdfName = deckPdfMap[deck.file];
                  const fileUrl = pdfName
                    ? `${import.meta.env.BASE_URL}examnotes/${encodeURIComponent(pdfName)}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`
                    : null;

                  return (
                    <details className="deck-embed">
                      <summary>Open embedded slides</summary>

                      {fileUrl ? (
                        <iframe
                          title={`${deck.file} preview`}
                          src={fileUrl}
                          loading="lazy"
                        />
                      ) : (
                        <div className="deck-download">
                          <p>No PDF version found for this deck.</p>
                        </div>
                      )}
                    </details>
                  );
                })()}
              </article>
            ))
          )}
        </div>

        {deckQuery.trim() && (
          <div className="deck-results">
            <h3>Top matches</h3>
            {deckResults.length === 0 && (
              <p>No matches yet. Try a different keyword.</p>
            )}
            <div className="deck-match-grid">
              {deckResults.map((result) => (
                <article
                  key={`${result.deck}-${result.index}`}
                  className="deck-match"
                >
                  <h4>{result.deck}</h4>
                  <p className="label">Slide {result.index}</p>
                  <p>{result.text}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
