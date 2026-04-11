# Interview: Data Structures — Design Spec

**Date:** 2026-04-11

## Overview

A new "Interview" section targeting professional/advanced users preparing for coding interviews. Each topic introduces a data structure with key operations and big-O complexity, then provides 5 LeetCode algorithm problems (4 easy, 1 medium) for practice. Users implement functions in a pre-filled stub; hidden test cases validate correctness per test, not by stdout matching.

---

## Navigation

- The Home screen gains an **Interview** entry alongside Tutorial / Beginner / Intermediate / Advanced
- The Interview section has its own top-level view: a flat topic list
- No assessment required — users jump directly to any topic

---

## Topic List

9 topics in recommended study order. Python built-ins are integrated into relevant topics rather than standalone.

| # | Topic | Integrated Python Tools |
|---|-------|------------------------|
| 1 | Array | `enumerate()`, `zip()`, `any()`, `all()` |
| 2 | Hash Map | `dict`, `defaultdict`, `Counter` |
| 3 | Stack | list as stack, monotonic stack pattern |
| 4 | Queue & Deque | `collections.deque`, BFS pattern |
| 5 | Heap | `heapq`, min/max heap |
| 6 | Linked List | node class, pointer manipulation |
| 7 | Binary Tree | DFS traversal, recursion |
| 8 | Graph | adjacency list, BFS/DFS |
| 9 | Sorting & Binary Search | `sorted()`, custom key, `bisect` |

---

## Per-Topic Page Layout

Each topic page has two sections stacked vertically:

### Learn Panel (top)

- Topic title
- **What is it?** — concise definition aimed at professionals
- **Key operations** — bullet list, each with time complexity
- **Code example** — short read-only code block showing the data structure in typical use

### Practice Panel (bottom)

- Problem selector showing all 5 problems with difficulty badges (`E E E E M`)
- Active problem displays:
  - Problem title + difficulty badge + LeetCode number with external link (opens in new tab)
  - Problem description
  - Pre-filled function stub in a code editor (`<textarea>`)
  - "Run" button (disabled until Pyodide is loaded)
  - Per-test-case results on submit
  - Overall verdict

---

## Problems

### Structure

5 problems per topic (4 easy, 1 medium) = 45 problems total. All problems are existing LeetCode problems.

```js
{
  id: "ds1_1",
  title: "Two Sum",
  difficulty: "easy",
  leetcode: { number: 1, url: "https://leetcode.com/problems/two-sum/" },
  description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  stub: "def two_sum(nums, target):\n    pass",
  functionName: "two_sum",
  tests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6],      expected: [1, 2] },
    { args: [[3, 3], 6],         expected: [0, 1] }
  ]
}
```

### Difficulty per topic

| Topic | Easy | Medium |
|-------|------|--------|
| Array | 4 | 1 |
| Hash Map | 4 | 1 |
| Stack | 4 | 1 |
| Queue & Deque | 4 | 1 |
| Heap | 4 | 1 |
| Linked List | 4 | 1 |
| Binary Tree | 4 | 1 |
| Graph | 4 | 1 |
| Sorting & Binary Search | 4 | 1 |

---

## Validation Engine

The current site matches stdout strings. The Interview section uses function-based validation with hidden test cases.

### Flow

1. User writes their implementation in the pre-filled stub
2. User clicks "Run"
3. Pyodide executes the user's code to define the function
4. A hidden test runner is injected and calls the function with each test's `args`, comparing the return value to `expected`
5. Results displayed per test case; problem marked solved only when all tests pass

### Test Runner (injected by app.js into Pyodide)

`function_name` is replaced at runtime with the value of the problem's `functionName` field.

```python
_results = []
for _args, _expected in _test_cases:
    try:
        _actual = function_name(*_args)
        _results.append({
            "pass": _actual == _expected,
            "actual": _actual,
            "expected": _expected
        })
    except Exception as _e:
        _results.append({"pass": False, "error": str(_e)})
```

### UI Feedback

```
✓ Test 1 passed
✗ Test 2 failed — expected [0, 1], got [1, 0]
✗ Test 3 failed — TypeError: unsupported operand type

2 / 3 tests passed. Keep trying.
```

All tests pass → problem ID added to `pylearn_interview_solved` in localStorage.

---

## data.js Structure

```js
const INTERVIEW = [
  {
    id: "ds1",
    title: "Array",
    learn: {
      what: "An ordered, index-based collection of elements stored in contiguous memory.",
      operations: [
        { name: "Access by index", complexity: "O(1)" },
        { name: "Search (unsorted)", complexity: "O(n)" },
        { name: "Append", complexity: "O(1) amortized" },
        { name: "Insert / Delete at middle", complexity: "O(n)" }
      ],
      pythonTools: ["enumerate()", "zip()", "any()", "all()"],
      example: "nums = [1, 2, 3, 4]\n\n# enumerate gives index + value\nfor i, v in enumerate(nums):\n    print(i, v)\n\n# zip pairs two lists\nfor a, b in zip(nums, nums[1:]):\n    print(a, b)"
    },
    problems: [
      {
        id: "ds1_1",
        title: "Two Sum",
        difficulty: "easy",
        leetcode: { number: 1, url: "https://leetcode.com/problems/two-sum/" },
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume exactly one solution exists.",
        stub: "def two_sum(nums, target):\n    pass",
        functionName: "two_sum",
        tests: [
          { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
          { args: [[3, 2, 4], 6],      expected: [1, 2] },
          { args: [[3, 3], 6],         expected: [0, 1] }
        ]
      }
      // 3 more easy, 1 medium
    ]
  }
  // 8 more topics
]
```

---

## localStorage Schema

| Key | Type | Description |
|-----|------|-------------|
| `pylearn_interview_solved` | JSON array | Solved problem IDs, e.g. `["ds1_1", "ds1_3", "ds2_2"]` |

A topic is considered complete when all 5 of its problems are solved.

---

## Out of Scope

- Hints or editorial solutions
- Submission history or attempt tracking
- Time/space complexity analysis of the user's solution
- Multiple valid return value orderings (test cases are written to expect one canonical answer)
- Hard difficulty problems
