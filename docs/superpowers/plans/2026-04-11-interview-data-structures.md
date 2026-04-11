# Interview: Data Structures — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an Interview section to the Python learning site — 9 data structure topics each with a learn panel (what + key operations + big-O + code example) and 5 LeetCode algorithm problems (4 easy, 1 medium) validated by function-based hidden test cases.

**Architecture:** Pure HTML/CSS/JS, no framework. Two new views (`view-interview-topics`, `view-interview-topic`) follow the existing view-router pattern. Function-based test runner uses Pyodide globals to pass test cases and read results — no JSON escaping needed. Topics with structural types (linked list, binary tree) inject a preamble before user code.

**Tech Stack:** Vanilla JS, CSS, Pyodide (already loaded), localStorage.

---

## File Map

| File | Change |
|------|--------|
| `data.js` | Append `const INTERVIEW = [...]` — 9 topics, 45 problems |
| `index.html` | Add 2 new view divs: `view-interview-topics`, `view-interview-topic` |
| `style.css` | Add interview card, learn panel, problem tabs, test result styles |
| `app.js` | Add state fields, localStorage helpers, 3 new view functions, runInterviewCode(), wire Home + clear + Pyodide |

---

### Task 1: Add INTERVIEW constant to data.js

**Files:**
- Modify: `data.js` (append at end of file)

- [ ] **Step 1: Append INTERVIEW to data.js**

Add the entire block below at the very end of `data.js`, after the closing of `TUTORIAL`:

```js
const INTERVIEW = [
  // ── DS1: Array ──────────────────────────────────────────────────────────────
  {
    id: "ds1",
    title: "Array",
    learn: {
      what: "An ordered, index-based collection. Python's list is a dynamic array — it resizes automatically. Elements are stored contiguously so random access is O(1), but inserting or deleting in the middle shifts elements and costs O(n).",
      operations: [
        { name: "Access by index", complexity: "O(1)" },
        { name: "Append", complexity: "O(1) amortized" },
        { name: "Insert / delete at middle", complexity: "O(n)" },
        { name: "Search (unsorted)", complexity: "O(n)" },
        { name: "Slice [i:j]", complexity: "O(k)" },
      ],
      pythonTools: ["enumerate(iterable)", "zip(a, b)", "any(iterable)", "all(iterable)"],
      example: `nums = [3, 1, 4, 1, 5]

# enumerate: index + value
for i, v in enumerate(nums):
    pass  # i=0,v=3  i=1,v=1 ...

# zip: parallel iteration
a, b = [1, 2, 3], [4, 5, 6]
for x, y in zip(a, b):
    pass  # (1,4), (2,5), (3,6)

# two-pointer template
left, right = 0, len(nums) - 1
while left < right:
    left += 1
    right -= 1

# any / all
print(any(v > 4 for v in nums))  # True
print(all(v > 0 for v in nums))  # True`,
    },
    problems: [
      {
        id: "ds1_1", title: "Two Sum", difficulty: "easy",
        leetcode: { number: 1, url: "https://leetcode.com/problems/two-sum/" },
        description: "Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. Assume exactly one solution exists. Return indices in ascending order.",
        stub: "def two_sum(nums, target):\n    pass",
        functionName: "two_sum",
        tests: [
          { args: [[2,7,11,15], 9],  expected: [0,1] },
          { args: [[3,2,4], 6],      expected: [1,2] },
          { args: [[3,3], 6],        expected: [0,1] },
        ],
      },
      {
        id: "ds1_2", title: "Best Time to Buy and Sell Stock", difficulty: "easy",
        leetcode: { number: 121, url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        description: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve from one buy and one sell. If no profit is possible, return 0.",
        stub: "def max_profit(prices):\n    pass",
        functionName: "max_profit",
        tests: [
          { args: [[7,1,5,3,6,4]], expected: 5 },
          { args: [[7,6,4,3,1]],   expected: 0 },
          { args: [[1,2]],         expected: 1 },
        ],
      },
      {
        id: "ds1_3", title: "Contains Duplicate", difficulty: "easy",
        leetcode: { number: 217, url: "https://leetcode.com/problems/contains-duplicate/" },
        description: "Given an integer array nums, return True if any value appears at least twice in the array, and False if every element is distinct.",
        stub: "def contains_duplicate(nums):\n    pass",
        functionName: "contains_duplicate",
        tests: [
          { args: [[1,2,3,1]],             expected: true },
          { args: [[1,2,3,4]],             expected: false },
          { args: [[1,1,1,3,3,4,3,2,4,2]], expected: true },
        ],
      },
      {
        id: "ds1_4", title: "Maximum Subarray", difficulty: "easy",
        leetcode: { number: 53, url: "https://leetcode.com/problems/maximum-subarray/" },
        description: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum. (Kadane's algorithm)",
        stub: "def max_subarray(nums):\n    pass",
        functionName: "max_subarray",
        tests: [
          { args: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
          { args: [[1]],                      expected: 1 },
          { args: [[5,4,-1,7,8]],             expected: 23 },
        ],
      },
      {
        id: "ds1_5", title: "Product of Array Except Self", difficulty: "medium",
        leetcode: { number: 238, url: "https://leetcode.com/problems/product-of-array-except-self/" },
        description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i]. Solve it in O(n) without using division.",
        stub: "def product_except_self(nums):\n    pass",
        functionName: "product_except_self",
        tests: [
          { args: [[1,2,3,4]],      expected: [24,12,8,6] },
          { args: [[-1,1,0,-3,3]], expected: [0,0,9,0,0] },
          { args: [[2,3]],          expected: [3,2] },
        ],
      },
    ],
  },

  // ── DS2: Hash Map ────────────────────────────────────────────────────────────
  {
    id: "ds2",
    title: "Hash Map",
    learn: {
      what: "A key-value store with O(1) average-case insert, delete, and lookup. Python's dict is a hash map. Counter counts element frequencies. defaultdict avoids KeyError by providing a default factory for missing keys.",
      operations: [
        { name: "Get / set / delete", complexity: "O(1) average" },
        { name: "Iterate all keys", complexity: "O(n)" },
        { name: "Counter(iterable)", complexity: "O(n)" },
        { name: "most_common(k)", complexity: "O(n log k)" },
      ],
      pythonTools: ["dict.get(key, default)", "Counter(iterable)", "defaultdict(list)"],
      example: `from collections import Counter, defaultdict

# dict: frequency map
freq = {}
for c in "hello":
    freq[c] = freq.get(c, 0) + 1  # {'h':1,'e':1,'l':2,'o':1}

# Counter: same thing, one line
freq = Counter("hello")
print(freq.most_common(2))  # [('l', 2), ('h', 1)]

# defaultdict: no KeyError on missing key
graph = defaultdict(list)
graph['a'].append('b')  # auto-creates 'a' key

# two-sum lookup pattern
seen = {}
for i, v in enumerate([2, 7, 11]):
    if 9 - v in seen:
        print([seen[9 - v], i])  # [0, 1]
    seen[v] = i`,
    },
    problems: [
      {
        id: "ds2_1", title: "Valid Anagram", difficulty: "easy",
        leetcode: { number: 242, url: "https://leetcode.com/problems/valid-anagram/" },
        description: "Given two strings s and t, return True if t is an anagram of s, and False otherwise.",
        stub: "def is_anagram(s, t):\n    pass",
        functionName: "is_anagram",
        tests: [
          { args: ["anagram", "nagaram"], expected: true  },
          { args: ["rat",     "car"],     expected: false },
          { args: ["a",       "a"],       expected: true  },
        ],
      },
      {
        id: "ds2_2", title: "Ransom Note", difficulty: "easy",
        leetcode: { number: 383, url: "https://leetcode.com/problems/ransom-note/" },
        description: "Given two strings ransomNote and magazine, return True if ransomNote can be constructed by using the letters from magazine (each letter used at most once).",
        stub: "def can_construct(ransom_note, magazine):\n    pass",
        functionName: "can_construct",
        tests: [
          { args: ["a",  "b"],   expected: false },
          { args: ["aa", "ab"],  expected: false },
          { args: ["aa", "aab"], expected: true  },
        ],
      },
      {
        id: "ds2_3", title: "Word Pattern", difficulty: "easy",
        leetcode: { number: 290, url: "https://leetcode.com/problems/word-pattern/" },
        description: "Given a pattern and a string s, return True if s follows the same pattern. Each letter in pattern maps to exactly one word and each word maps to exactly one letter.",
        stub: "def word_pattern(pattern, s):\n    pass",
        functionName: "word_pattern",
        tests: [
          { args: ["abba", "dog cat cat dog"],  expected: true  },
          { args: ["abba", "dog cat cat fish"], expected: false },
          { args: ["aaaa", "dog cat cat dog"],  expected: false },
        ],
      },
      {
        id: "ds2_4", title: "First Unique Character in a String", difficulty: "easy",
        leetcode: { number: 387, url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        description: "Given a string s, find the first non-repeating character and return its index. If it does not exist, return -1.",
        stub: "def first_uniq_char(s):\n    pass",
        functionName: "first_uniq_char",
        tests: [
          { args: ["leetcode"],     expected: 0  },
          { args: ["loveleetcode"], expected: 2  },
          { args: ["aabb"],         expected: -1 },
        ],
      },
      {
        id: "ds2_5", title: "Longest Consecutive Sequence", difficulty: "medium",
        leetcode: { number: 128, url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n).",
        stub: "def longest_consecutive(nums):\n    pass",
        functionName: "longest_consecutive",
        tests: [
          { args: [[100,4,200,1,3,2]],        expected: 4 },
          { args: [[0,3,7,2,5,8,4,6,0,1]],   expected: 9 },
          { args: [[1]],                       expected: 1 },
        ],
      },
    ],
  },

  // ── DS3: Stack ───────────────────────────────────────────────────────────────
  {
    id: "ds3",
    title: "Stack",
    learn: {
      what: "A last-in, first-out (LIFO) structure. Use Python list with append() (push) and pop(). The monotonic stack pattern maintains a stack in sorted order — powerful for 'next greater/smaller element' and histogram problems.",
      operations: [
        { name: "Push (append)", complexity: "O(1)" },
        { name: "Pop",           complexity: "O(1)" },
        { name: "Peek ([-1])",   complexity: "O(1)" },
        { name: "Search",        complexity: "O(n)" },
      ],
      pythonTools: ["list.append(x)", "list.pop()", "list[-1]  # peek"],
      example: `stack = []
stack.append(1)   # push
stack.append(2)
top = stack[-1]   # peek → 2
stack.pop()       # pop  → 2

# Matching brackets
def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return not stack

# Monotonic stack: next greater element
temps = [73, 74, 75, 71, 69]
result = [0] * len(temps)
stack = []  # indices
for i, t in enumerate(temps):
    while stack and temps[stack[-1]] < t:
        idx = stack.pop()
        result[idx] = i - idx
    stack.append(i)`,
    },
    problems: [
      {
        id: "ds3_1", title: "Valid Parentheses", difficulty: "easy",
        leetcode: { number: 20, url: "https://leetcode.com/problems/valid-parentheses/" },
        description: "Given a string s containing only '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Brackets must close in the correct order.",
        stub: "def is_valid(s):\n    pass",
        functionName: "is_valid",
        tests: [
          { args: ["()"],     expected: true  },
          { args: ["()[]{}"], expected: true  },
          { args: ["(]"],     expected: false },
        ],
      },
      {
        id: "ds3_2", title: "Baseball Game", difficulty: "easy",
        leetcode: { number: 682, url: "https://leetcode.com/problems/baseball-game/" },
        description: "You are keeping score for a baseball game. Operations: an integer (add score), '+' (sum of last two), 'D' (double last), 'C' (remove last). Return the sum of all scores after processing all operations.",
        stub: "def cal_points(operations):\n    pass",
        functionName: "cal_points",
        tests: [
          { args: [["5","2","C","D","+"]],         expected: 30 },
          { args: [["5","-2","4","C","D","9","+","+"]], expected: 27 },
          { args: [["1","C"]],                     expected: 0  },
        ],
      },
      {
        id: "ds3_3", title: "Remove Outermost Parentheses", difficulty: "easy",
        leetcode: { number: 1021, url: "https://leetcode.com/problems/remove-outermost-parentheses/" },
        description: "A valid parentheses string is primitive if it is non-empty and cannot be split into two non-empty valid strings. Given a valid string s, remove the outermost parentheses of every primitive string and return the result.",
        stub: "def remove_outer_parentheses(s):\n    pass",
        functionName: "remove_outer_parentheses",
        tests: [
          { args: ["(()())(())"],       expected: "()()()" },
          { args: ["(()())(())(()())"], expected: "()()()()()" },
          { args: ["()()"],             expected: "" },
        ],
      },
      {
        id: "ds3_4", title: "Backspace String Compare", difficulty: "easy",
        leetcode: { number: 844, url: "https://leetcode.com/problems/backspace-string-compare/" },
        description: "Given two strings s and t, return True if they are equal when both are typed into empty text editors. '#' means a backspace character.",
        stub: "def backspace_compare(s, t):\n    pass",
        functionName: "backspace_compare",
        tests: [
          { args: ["ab#c",  "ad#c"], expected: true  },
          { args: ["ab##",  "c#d#"], expected: true  },
          { args: ["a#c",   "b"],    expected: false },
        ],
      },
      {
        id: "ds3_5", title: "Daily Temperatures", difficulty: "medium",
        leetcode: { number: 739, url: "https://leetcode.com/problems/daily-temperatures/" },
        description: "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days until a warmer temperature. If no future day is warmer, answer[i] = 0.",
        stub: "def daily_temperatures(temperatures):\n    pass",
        functionName: "daily_temperatures",
        tests: [
          { args: [[73,74,75,71,69,72,76,73]], expected: [1,1,4,2,1,1,0,0] },
          { args: [[30,40,50,60]],             expected: [1,1,1,0] },
          { args: [[30,60,90]],                expected: [1,1,0] },
        ],
      },
    ],
  },

  // ── DS4: Queue & Deque ───────────────────────────────────────────────────────
  {
    id: "ds4",
    title: "Queue & Deque",
    learn: {
      what: "A first-in, first-out (FIFO) structure. Always use collections.deque — it provides O(1) append and popleft from both ends. A regular list costs O(n) for popleft. Deque is essential for BFS and sliding-window problems.",
      operations: [
        { name: "append (right)",   complexity: "O(1)" },
        { name: "appendleft",       complexity: "O(1)" },
        { name: "popleft",          complexity: "O(1)" },
        { name: "pop (right)",      complexity: "O(1)" },
        { name: "list.pop(0)",      complexity: "O(n) — avoid!" },
      ],
      pythonTools: ["from collections import deque", "deque.append()", "deque.appendleft()", "deque.popleft()"],
      example: `from collections import deque

q = deque([1, 2, 3])
q.append(4)       # [1,2,3,4]
q.appendleft(0)   # [0,1,2,3,4]
q.popleft()       # 0 — O(1)

# BFS template
def bfs(graph, start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                q.append(nb)

# Sliding window with deque (monotonic)
# deque stores indices, front = max index
def max_window(nums, k):
    dq, result = deque(), []
    for i, v in enumerate(nums):
        while dq and nums[dq[-1]] <= v:
            dq.pop()
        dq.append(i)
        if dq[0] < i - k + 1:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
    },
    problems: [
      {
        id: "ds4_1", title: "Number of Students Unable to Eat Lunch", difficulty: "easy",
        leetcode: { number: 1700, url: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/" },
        description: "Students queue for sandwiches. students[i] is the preference (0 or 1) of student i. sandwiches[i] is the top sandwich. A student who doesn't want the top sandwich goes to the back. Return the number of students who are unable to eat.",
        stub: "def count_students(students, sandwiches):\n    pass",
        functionName: "count_students",
        tests: [
          { args: [[1,1,0,0], [0,1,0,1]], expected: 0 },
          { args: [[1,1,1,0,0,1], [1,0,0,0,1,1]], expected: 3 },
          { args: [[0], [0]], expected: 0 },
        ],
      },
      {
        id: "ds4_2", title: "Time Needed to Buy Tickets", difficulty: "easy",
        leetcode: { number: 2073, url: "https://leetcode.com/problems/time-needed-to-buy-tickets/" },
        description: "People stand in a queue to buy tickets. tickets[i] is how many tickets person i wants. Each round, one ticket is sold per person. Return the time for person at index k to finish buying all their tickets.",
        stub: "def time_to_buy_tickets(tickets, k):\n    pass",
        functionName: "time_to_buy_tickets",
        tests: [
          { args: [[2,3,2], 2], expected: 6 },
          { args: [[5,1,1,1], 0], expected: 8 },
          { args: [[1], 0], expected: 1 },
        ],
      },
      {
        id: "ds4_3", title: "Remove All Adjacent Duplicates In String", difficulty: "easy",
        leetcode: { number: 1047, url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
        description: "Given a string s, repeatedly remove adjacent duplicate characters until no more can be removed. Return the final string. Use a stack/deque for an efficient one-pass solution.",
        stub: "def remove_duplicates(s):\n    pass",
        functionName: "remove_duplicates",
        tests: [
          { args: ["abbaca"], expected: "ca" },
          { args: ["azxxzy"], expected: "ay" },
          { args: ["aaa"],    expected: "a"  },
        ],
      },
      {
        id: "ds4_4", title: "Number of Recent Calls", difficulty: "easy",
        leetcode: { number: 933, url: "https://leetcode.com/problems/number-of-recent-calls/" },
        description: "Given a list of ping timestamps (strictly increasing), process each ping and count how many pings occurred in the last 3000 ms (inclusive). Return a list of counts, one per ping.",
        stub: "def ping_history(requests):\n    \"\"\"\n    For each request at time t, count pings in [t-3000, t].\n    Return list of counts, one per ping.\n    \"\"\"\n    pass",
        functionName: "ping_history",
        tests: [
          { args: [[1, 100, 3001, 3002]], expected: [1, 2, 3, 3] },
          { args: [[1]],                  expected: [1] },
          { args: [[100, 200, 300, 400]], expected: [1, 2, 3, 4] },
        ],
      },
      {
        id: "ds4_5", title: "Sliding Window Maximum", difficulty: "medium",
        leetcode: { number: 239, url: "https://leetcode.com/problems/sliding-window-maximum/" },
        description: "Given an integer array nums and an integer k, return the maximum value in each sliding window of size k. There are n - k + 1 windows total.",
        stub: "def max_sliding_window(nums, k):\n    pass",
        functionName: "max_sliding_window",
        tests: [
          { args: [[1,3,-1,-3,5,3,6,7], 3], expected: [3,3,5,5,6,7] },
          { args: [[1], 1],                  expected: [1] },
          { args: [[1,-1], 1],               expected: [1,-1] },
        ],
      },
    ],
  },

  // ── DS5: Heap ────────────────────────────────────────────────────────────────
  {
    id: "ds5",
    title: "Heap",
    learn: {
      what: "A complete binary tree satisfying the heap property. Python's heapq is a min-heap. For a max-heap, negate values. Enables O(log n) insert and O(log n) extract-min. heapify converts a list in O(n). Use nlargest/nsmallest for top-k queries.",
      operations: [
        { name: "heappush",        complexity: "O(log n)" },
        { name: "heappop",         complexity: "O(log n)" },
        { name: "Peek (h[0])",     complexity: "O(1)" },
        { name: "heapify",         complexity: "O(n)" },
        { name: "nlargest(k, h)",  complexity: "O(n log k)" },
      ],
      pythonTools: ["import heapq", "heapq.heappush(h, x)", "heapq.heappop(h)", "heapq.nlargest(k, iterable)", "heapq.heapify(list)"],
      example: `import heapq

# Min-heap
h = [3, 1, 4, 1, 5]
heapq.heapify(h)           # O(n)
heapq.heappush(h, 2)       # O(log n)
print(heapq.heappop(h))    # 1 — smallest

# Max-heap: negate to invert order
nums = [3, 1, 4, 1, 5]
max_h = [-x for x in nums]
heapq.heapify(max_h)
print(-heapq.heappop(max_h))  # 5 — largest

# Top-k pattern
print(heapq.nlargest(2, nums))   # [5, 4]
print(heapq.nsmallest(2, nums))  # [1, 1]

# Heap with tuples: sort by first element
tasks = [(3, 'low'), (1, 'urgent'), (2, 'normal')]
heapq.heapify(tasks)
print(heapq.heappop(tasks))  # (1, 'urgent')`,
    },
    problems: [
      {
        id: "ds5_1", title: "Last Stone Weight", difficulty: "easy",
        leetcode: { number: 1046, url: "https://leetcode.com/problems/last-stone-weight/" },
        description: "You have stones with integer weights. Each turn smash the two heaviest: if equal both are destroyed, otherwise the remainder survives. Return the weight of the last stone, or 0 if none remain.",
        stub: "def last_stone_weight(stones):\n    pass",
        functionName: "last_stone_weight",
        tests: [
          { args: [[2,7,4,1,8,1]], expected: 1 },
          { args: [[1]],           expected: 1 },
          { args: [[2,2]],         expected: 0 },
        ],
      },
      {
        id: "ds5_2", title: "Take Gifts From the Richest Pile", difficulty: "easy",
        leetcode: { number: 2558, url: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/" },
        description: "Each second, take gifts from the richest pile and leave floor(sqrt(pile)) gifts. After k seconds, return the total number of gifts remaining.",
        stub: "import math\n\ndef pick_gifts(gifts, k):\n    pass",
        functionName: "pick_gifts",
        tests: [
          { args: [[25,64,9,4,100], 4], expected: 29 },
          { args: [[1,1,1,1], 4],       expected: 4  },
          { args: [[4], 1],             expected: 2  },
        ],
      },
      {
        id: "ds5_3", title: "K Weakest Rows in a Matrix", difficulty: "easy",
        leetcode: { number: 1337, url: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/" },
        description: "Given a matrix of 1s (soldiers) and 0s (civilians) where soldiers always precede civilians in each row, return the indices of the k weakest rows (fewest soldiers, ties broken by index).",
        stub: "def k_weakest_rows(mat, k):\n    pass",
        functionName: "k_weakest_rows",
        tests: [
          { args: [[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3], expected: [2,0,3] },
          { args: [[[1,0,0],[1,1,0],[1,1,1]], 2], expected: [0,1] },
          { args: [[[1]], 1], expected: [0] },
        ],
      },
      {
        id: "ds5_4", title: "Top K Frequent Elements", difficulty: "easy",
        leetcode: { number: 347, url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        description: "Given an integer array nums and an integer k, return the k most frequent elements sorted in ascending order.",
        stub: "def top_k_frequent(nums, k):\n    pass",
        functionName: "top_k_frequent",
        tests: [
          { args: [[1,1,1,2,2,3], 2],   expected: [1,2]  },
          { args: [[1], 1],              expected: [1]    },
          { args: [[4,1,-1,2,-1,2,3], 2], expected: [-1,2] },
        ],
      },
      {
        id: "ds5_5", title: "Kth Largest Element in an Array", difficulty: "medium",
        leetcode: { number: 215, url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        description: "Given an integer array nums and an integer k, return the kth largest element in the array (not the kth distinct element).",
        stub: "def find_kth_largest(nums, k):\n    pass",
        functionName: "find_kth_largest",
        tests: [
          { args: [[3,2,1,5,6,4], 2],       expected: 5 },
          { args: [[3,2,3,1,2,4,5,5,6], 4], expected: 4 },
          { args: [[1], 1],                  expected: 1 },
        ],
      },
    ],
  },

  // ── DS6: Linked List ─────────────────────────────────────────────────────────
  {
    id: "ds6",
    title: "Linked List",
    preamble: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def _list_to_ll(lst):
    dummy = ListNode()
    cur = dummy
    for v in lst:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def _ll_to_list(node):
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result`,
    learn: {
      what: "A sequence of nodes, each storing a value and a pointer to the next node. O(1) insert/delete at a known node, O(n) search. The slow/fast pointer technique detects cycles and finds midpoints. The dummy head node simplifies edge cases.",
      operations: [
        { name: "Insert at head",      complexity: "O(1)" },
        { name: "Insert at tail",      complexity: "O(n)" },
        { name: "Delete known node",   complexity: "O(1)" },
        { name: "Search",              complexity: "O(n)" },
        { name: "Access by index",     complexity: "O(n)" },
      ],
      pythonTools: ["Custom ListNode class", "Dummy head pattern", "Slow/fast pointer"],
      example: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Traverse
cur = head
while cur:
    print(cur.val)
    cur = cur.next

# Reverse in-place
prev, cur = None, head
while cur:
    nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
# prev is new head

# Dummy head (simplifies edge cases)
dummy = ListNode(0)
dummy.next = head
cur = dummy
# ... manipulate ...
return dummy.next

# Slow/fast pointer — find middle
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
# slow is at middle`,
    },
    problems: [
      {
        id: "ds6_1", title: "Reverse Linked List", difficulty: "easy",
        leetcode: { number: 206, url: "https://leetcode.com/problems/reverse-linked-list/" },
        description: "Reverse a singly linked list. The function receives a ListNode head and must return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def reverse_list(head):\n    pass",
        functionName: "reverse_list",
        argTypes: ["ll"], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5]], expected: [5,4,3,2,1] },
          { args: [[1,2]],       expected: [2,1] },
          { args: [[1]],         expected: [1] },
        ],
      },
      {
        id: "ds6_2", title: "Merge Two Sorted Lists", difficulty: "easy",
        leetcode: { number: 21, url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        description: "Merge two sorted linked lists and return the merged list's head. (ListNode and helpers are pre-defined.)",
        stub: "def merge_two_lists(list1, list2):\n    pass",
        functionName: "merge_two_lists",
        argTypes: ["ll", "ll"], returnType: "ll",
        tests: [
          { args: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] },
          { args: [[], []],           expected: [] },
          { args: [[0], []],          expected: [0] },
        ],
      },
      {
        id: "ds6_3", title: "Remove Linked List Elements", difficulty: "easy",
        leetcode: { number: 203, url: "https://leetcode.com/problems/remove-linked-list-elements/" },
        description: "Remove all nodes from the linked list that have value equal to val. Return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def remove_elements(head, val):\n    pass",
        functionName: "remove_elements",
        argTypes: ["ll", null], returnType: "ll",
        tests: [
          { args: [[1,2,6,3,4,5,6], 6], expected: [1,2,3,4,5] },
          { args: [[], 1],               expected: [] },
          { args: [[7,7,7,7], 7],        expected: [] },
        ],
      },
      {
        id: "ds6_4", title: "Middle of the Linked List", difficulty: "easy",
        leetcode: { number: 876, url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        description: "Given a linked list, return the middle node. If two middle nodes exist, return the second one. Return as a list of values from the middle node to the end. (ListNode and helpers are pre-defined.)",
        stub: "def middle_node(head):\n    pass",
        functionName: "middle_node",
        argTypes: ["ll"], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5]], expected: [3,4,5] },
          { args: [[1,2,3,4,5,6]], expected: [4,5,6] },
          { args: [[1]], expected: [1] },
        ],
      },
      {
        id: "ds6_5", title: "Remove Nth Node From End of List", difficulty: "medium",
        leetcode: { number: 19, url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        description: "Given the head of a linked list, remove the nth node from the end and return the new head. (ListNode and helpers are pre-defined.)",
        stub: "def remove_nth_from_end(head, n):\n    pass",
        functionName: "remove_nth_from_end",
        argTypes: ["ll", null], returnType: "ll",
        tests: [
          { args: [[1,2,3,4,5], 2], expected: [1,2,3,5] },
          { args: [[1], 1],          expected: [] },
          { args: [[1,2], 1],        expected: [1] },
        ],
      },
    ],
  },

  // ── DS7: Binary Tree ─────────────────────────────────────────────────────────
  {
    id: "ds7",
    title: "Binary Tree",
    preamble: `from collections import deque as _deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def _build_tree(vals):
    if not vals or vals[0] is None:
        return None
    root = TreeNode(vals[0])
    q = _deque([root])
    i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i])
            q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i])
            q.append(node.right)
        i += 1
    return root

def _level_order(root):
    if not root:
        return []
    result, q = [], _deque([root])
    while q:
        node = q.popleft()
        result.append(node.val)
        if node.left:  q.append(node.left)
        if node.right: q.append(node.right)
    return result`,
    learn: {
      what: "A hierarchical structure where each node has at most two children. DFS traversal (recursive) costs O(n). Key traversal orders: inorder (left-root-right), preorder (root-left-right), postorder (left-right-root). BFS (level order) uses a deque.",
      operations: [
        { name: "DFS traversal",     complexity: "O(n)" },
        { name: "BFS traversal",     complexity: "O(n)" },
        { name: "BST insert/search", complexity: "O(log n) avg, O(n) worst" },
        { name: "Height",            complexity: "O(n)" },
      ],
      pythonTools: ["collections.deque  # for BFS", "Recursion with base case: if not root: return"],
      example: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Inorder DFS (recursive)
def inorder(root):
    if not root:
        return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# Max depth
def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Level order BFS
from collections import deque
def level_order(root):
    if not root: return []
    result, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result`,
    },
    problems: [
      {
        id: "ds7_1", title: "Maximum Depth of Binary Tree", difficulty: "easy",
        leetcode: { number: 104, url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        description: "Given the root of a binary tree, return its maximum depth (number of nodes along the longest root-to-leaf path). Input is a level-order array; None means no node. (TreeNode and helpers are pre-defined.)",
        stub: "def max_depth(root):\n    pass",
        functionName: "max_depth",
        argTypes: ["tree"], returnType: "int",
        tests: [
          { args: [[3,9,20,null,null,15,7]], expected: 3 },
          { args: [[1,null,2]],              expected: 2 },
          { args: [[]],                      expected: 0 },
        ],
      },
      {
        id: "ds7_2", title: "Invert Binary Tree", difficulty: "easy",
        leetcode: { number: 226, url: "https://leetcode.com/problems/invert-binary-tree/" },
        description: "Invert a binary tree (mirror it). Return the root of the inverted tree. Result is validated as level-order traversal. (TreeNode and helpers are pre-defined.)",
        stub: "def invert_tree(root):\n    pass",
        functionName: "invert_tree",
        argTypes: ["tree"], returnType: "tree",
        tests: [
          { args: [[4,2,7,1,3,6,9]], expected: [4,7,2,9,6,3,1] },
          { args: [[2,1,3]],          expected: [2,3,1] },
          { args: [[]],               expected: [] },
        ],
      },
      {
        id: "ds7_3", title: "Symmetric Tree", difficulty: "easy",
        leetcode: { number: 101, url: "https://leetcode.com/problems/symmetric-tree/" },
        description: "Given the root of a binary tree, check whether it is a mirror of itself (symmetric around its center). (TreeNode and helpers are pre-defined.)",
        stub: "def is_symmetric(root):\n    pass",
        functionName: "is_symmetric",
        argTypes: ["tree"], returnType: "bool",
        tests: [
          { args: [[1,2,2,3,4,4,3]],       expected: true  },
          { args: [[1,2,2,null,3,null,3]], expected: false },
          { args: [[1]],                    expected: true  },
        ],
      },
      {
        id: "ds7_4", title: "Path Sum", difficulty: "easy",
        leetcode: { number: 112, url: "https://leetcode.com/problems/path-sum/" },
        description: "Given the root of a binary tree and an integer targetSum, return True if the tree has a root-to-leaf path such that the sum of all node values equals targetSum. (TreeNode and helpers are pre-defined.)",
        stub: "def has_path_sum(root, target_sum):\n    pass",
        functionName: "has_path_sum",
        argTypes: ["tree", null], returnType: "bool",
        tests: [
          { args: [[5,4,8,11,null,13,4,7,2,null,null,null,1], 22], expected: true  },
          { args: [[1,2,3], 5],                                     expected: false },
          { args: [[], 0],                                          expected: false },
        ],
      },
      {
        id: "ds7_5", title: "Binary Tree Level Order Traversal", difficulty: "medium",
        leetcode: { number: 102, url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        description: "Given the root of a binary tree, return the level order traversal of its node values as a list of lists (left to right, level by level). (TreeNode and helpers are pre-defined.)",
        stub: "from collections import deque\n\ndef level_order(root):\n    pass",
        functionName: "level_order",
        argTypes: ["tree"], returnType: "list",
        tests: [
          { args: [[3,9,20,null,null,15,7]], expected: [[3],[9,20],[15,7]] },
          { args: [[1]],                     expected: [[1]] },
          { args: [[]],                      expected: [] },
        ],
      },
    ],
  },

  // ── DS8: Graph ───────────────────────────────────────────────────────────────
  {
    id: "ds8",
    title: "Graph",
    learn: {
      what: "A collection of nodes (vertices) connected by edges. Represent as an adjacency list using defaultdict(list). BFS finds shortest paths in unweighted graphs; DFS explores all reachable nodes. Both run in O(V + E).",
      operations: [
        { name: "Add edge",              complexity: "O(1)" },
        { name: "BFS / DFS traversal",  complexity: "O(V + E)" },
        { name: "Adjacency lookup",      complexity: "O(degree)" },
      ],
      pythonTools: ["from collections import defaultdict, deque", "visited = set()  # track visited nodes"],
      example: `from collections import defaultdict, deque

# Build adjacency list
graph = defaultdict(list)
for u, v in [[0,1],[0,2],[1,2]]:
    graph[u].append(v)
    graph[v].append(u)

# BFS — shortest path, level by level
def bfs(graph, start):
    visited = {start}
    q = deque([start])
    while q:
        node = q.popleft()
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                q.append(nb)

# DFS — recursive
def dfs(node, visited, graph):
    visited.add(node)
    for nb in graph[node]:
        if nb not in visited:
            dfs(nb, visited, graph)

# Grid DFS (4-directional)
def explore(grid, r, c, visited):
    if (r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0])
            or (r, c) in visited or grid[r][c] == 0):
        return
    visited.add((r, c))
    for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
        explore(grid, r+dr, c+dc, visited)`,
    },
    problems: [
      {
        id: "ds8_1", title: "Find the Town Judge", difficulty: "easy",
        leetcode: { number: 997, url: "https://leetcode.com/problems/find-the-town-judge/" },
        description: "In a town of n people (labeled 1..n), there may be a judge: trusted by everyone else, trusts nobody. Given trust[i]=[a,b] meaning a trusts b, find the judge. Return -1 if no judge.",
        stub: "def find_judge(n, trust):\n    pass",
        functionName: "find_judge",
        tests: [
          { args: [2, [[1,2]]],         expected: 2  },
          { args: [3, [[1,3],[2,3]]],   expected: 3  },
          { args: [3, [[1,3],[2,3],[3,1]]], expected: -1 },
        ],
      },
      {
        id: "ds8_2", title: "Find if Path Exists in Graph", difficulty: "easy",
        leetcode: { number: 1971, url: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
        description: "Given n nodes (0..n-1), a list of undirected edges, a source node, and a destination node, return True if a path exists from source to destination.",
        stub: "def valid_path(n, edges, source, destination):\n    pass",
        functionName: "valid_path",
        tests: [
          { args: [3, [[0,1],[1,2],[2,0]], 0, 2], expected: true  },
          { args: [6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5], expected: false },
          { args: [1, [], 0, 0], expected: true },
        ],
      },
      {
        id: "ds8_3", title: "Island Perimeter", difficulty: "easy",
        leetcode: { number: 463, url: "https://leetcode.com/problems/island-perimeter/" },
        description: "Given a grid where 1 = land and 0 = water, compute the perimeter of the island. Assume there is exactly one island and no holes.",
        stub: "def island_perimeter(grid):\n    pass",
        functionName: "island_perimeter",
        tests: [
          { args: [[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]], expected: 16 },
          { args: [[[1]]],                                        expected: 4  },
          { args: [[[1,0]]],                                      expected: 4  },
        ],
      },
      {
        id: "ds8_4", title: "Max Area of Island", difficulty: "easy",
        leetcode: { number: 695, url: "https://leetcode.com/problems/max-area-of-island/" },
        description: "Given a binary matrix grid (1=land, 0=water), return the area of the largest island (connected group of 1s). Return 0 if there is no island.",
        stub: "def max_area_of_island(grid):\n    pass",
        functionName: "max_area_of_island",
        tests: [
          { args: [[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]], expected: 6 },
          { args: [[[0,0,0,0,0,0,0,0]]],                                                                                                                                                                                                                                        expected: 0 },
          { args: [[[1,1],[1,0]]],                                                                                                                                                                                                                                               expected: 3 },
        ],
      },
      {
        id: "ds8_5", title: "Number of Islands", difficulty: "medium",
        leetcode: { number: 200, url: "https://leetcode.com/problems/number-of-islands/" },
        description: "Given a 2D grid of '1' (land) and '0' (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.",
        stub: "def num_islands(grid):\n    pass",
        functionName: "num_islands",
        tests: [
          { args: [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected: 1 },
          { args: [[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected: 3 },
          { args: [[["1"]]],                                                                                   expected: 1 },
        ],
      },
    ],
  },

  // ── DS9: Sorting & Binary Search ─────────────────────────────────────────────
  {
    id: "ds9",
    title: "Sorting & Binary Search",
    learn: {
      what: "Binary search runs in O(log n) by halving the search space each step — requires a sorted input. Python's sorted() returns a new sorted list in O(n log n). The bisect module finds insert positions in O(log n) on already-sorted lists.",
      operations: [
        { name: "sorted(iterable)",     complexity: "O(n log n)" },
        { name: "list.sort()",          complexity: "O(n log n) in-place" },
        { name: "Binary search",        complexity: "O(log n)" },
        { name: "bisect_left/right",    complexity: "O(log n)" },
      ],
      pythonTools: ["sorted(iterable, key=fn)", "bisect.bisect_left(a, x)", "bisect.bisect_right(a, x)"],
      example: `import bisect

nums = [1, 3, 5, 7, 9]

# Classic binary search template
def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# bisect: O(log n) insert position
idx = bisect.bisect_left(nums, 6)  # 3

# sorted with key function
words = ["banana", "apple", "cherry"]
print(sorted(words, key=len))  # ['apple', 'banana', 'cherry']

# sort descending
print(sorted(nums, reverse=True))  # [9,7,5,3,1]`,
    },
    problems: [
      {
        id: "ds9_1", title: "Binary Search", difficulty: "easy",
        leetcode: { number: 704, url: "https://leetcode.com/problems/binary-search/" },
        description: "Given a sorted array of integers nums and a target, return the index of target. If not found, return -1. Must run in O(log n).",
        stub: "def search(nums, target):\n    pass",
        functionName: "search",
        tests: [
          { args: [[-1,0,3,5,9,12], 9], expected: 4  },
          { args: [[-1,0,3,5,9,12], 2], expected: -1 },
          { args: [[5], 5],              expected: 0  },
        ],
      },
      {
        id: "ds9_2", title: "Search Insert Position", difficulty: "easy",
        leetcode: { number: 35, url: "https://leetcode.com/problems/search-insert-position/" },
        description: "Given a sorted array and a target, return the index if found, or the index where it would be inserted to keep the array sorted. Must run in O(log n).",
        stub: "def search_insert(nums, target):\n    pass",
        functionName: "search_insert",
        tests: [
          { args: [[1,3,5,6], 5], expected: 2 },
          { args: [[1,3,5,6], 2], expected: 1 },
          { args: [[1,3,5,6], 7], expected: 4 },
        ],
      },
      {
        id: "ds9_3", title: "Squares of a Sorted Array", difficulty: "easy",
        leetcode: { number: 977, url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
        description: "Given an integer array sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order. Try to solve it in O(n) with two pointers.",
        stub: "def sorted_squares(nums):\n    pass",
        functionName: "sorted_squares",
        tests: [
          { args: [[-4,-1,0,3,10]], expected: [0,1,9,16,100] },
          { args: [[-7,-3,2,3,11]], expected: [4,9,9,49,121] },
          { args: [[0,2]],          expected: [0,4] },
        ],
      },
      {
        id: "ds9_4", title: "Sort Colors", difficulty: "easy",
        leetcode: { number: 75, url: "https://leetcode.com/problems/sort-colors/" },
        description: "Given an array nums with values 0 (red), 1 (white), 2 (blue), sort them in-place so that reds come first, then whites, then blues. Return the sorted array. (Dutch National Flag problem — try one pass with three pointers.)",
        stub: "def sort_colors(nums):\n    pass",
        functionName: "sort_colors",
        tests: [
          { args: [[2,0,2,1,1,0]], expected: [0,0,1,1,2,2] },
          { args: [[2,0,1]],        expected: [0,1,2] },
          { args: [[0]],            expected: [0] },
        ],
      },
      {
        id: "ds9_5", title: "Find Minimum in Rotated Sorted Array", difficulty: "medium",
        leetcode: { number: 153, url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        description: "Given a sorted array rotated at an unknown pivot, find the minimum element. Must run in O(log n).",
        stub: "def find_min(nums):\n    pass",
        functionName: "find_min",
        tests: [
          { args: [[3,4,5,1,2]],    expected: 1  },
          { args: [[4,5,6,7,0,1,2]], expected: 0  },
          { args: [[11,13,15,17]], expected: 11 },
        ],
      },
    ],
  },
];
```

- [ ] **Step 2: Verify in browser**

Start the server and open the browser console. Run:
```
INTERVIEW.length           // should be 9
INTERVIEW[0].problems.length  // should be 5
INTERVIEW[5].preamble      // should show ListNode class string
```

- [ ] **Step 3: Commit**

```bash
git add data.js
git commit -m "feat: add INTERVIEW data — 9 topics, 45 LeetCode problems"
```

---

### Task 2: Add HTML views to index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add two new views before the closing `</body>` script tags**

Insert the following block after the closing `</div>` of `view-tutorial` (line 89) and before the `<script>` tags:

```html
  <!-- View: Interview Topics -->
  <div id="view-interview-topics" class="view hidden">
    <button id="btn-back-from-interview-topics" class="btn-secondary">← All Levels</button>
    <h2 style="margin-top:1rem;">Interview Prep</h2>
    <p id="interview-topics-subtitle" class="subtitle"></p>
    <ul id="interview-topics-list" class="problems-list"></ul>
  </div>

  <!-- View: Interview Topic (Learn + Practice) -->
  <div id="view-interview-topic" class="view hidden">
    <button id="btn-back-to-interview-topics" class="btn-secondary">← All Topics</button>
    <div id="interview-topic-nav" class="interview-topic-nav"></div>
    <p id="interview-progress" class="subtitle" style="margin-top:0.5rem;"></p>

    <div class="card interview-learn-card">
      <h3 id="interview-topic-title"></h3>
      <div class="learn-block">
        <span class="learn-label">What is it?</span>
        <p id="interview-what" class="learn-text"></p>
      </div>
      <div class="learn-block">
        <span class="learn-label">Key Operations</span>
        <table id="interview-operations" class="ops-table"></table>
      </div>
      <div class="learn-block">
        <span class="learn-label">Python Tools</span>
        <p id="interview-python-tools" class="learn-text interview-tools-text"></p>
      </div>
      <div class="learn-block">
        <span class="learn-label">Example</span>
        <pre id="interview-example" class="code-example"></pre>
      </div>
    </div>

    <div class="card editor-card">
      <div id="interview-problem-tabs" class="interview-problem-tabs"></div>
      <div class="interview-problem-header">
        <h4 id="interview-problem-title"></h4>
        <a id="interview-leetcode-link" href="#" target="_blank" rel="noopener" class="leetcode-link"></a>
      </div>
      <p id="interview-problem-description" class="editor-description"></p>
      <textarea id="interview-code-editor" class="code-editor" spellcheck="false" autocorrect="off" autocapitalize="none" placeholder="# Implement the function" aria-label="Python code editor"></textarea>
      <button id="btn-run-interview" class="btn-primary" disabled>Loading Python...</button>
      <div id="interview-test-results" class="interview-test-results hidden"></div>
      <div id="interview-feedback-banner" class="feedback-banner hidden"></div>
    </div>
  </div>
```

- [ ] **Step 2: Add the two new views to the wide-view CSS selector in style.css** *(done in Task 3)*

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add interview HTML views"
```

---

### Task 3: Add CSS styles to style.css

**Files:**
- Modify: `style.css` (append at end)

- [ ] **Step 1: Add interview-specific styles at the end of style.css**

```css
/* ── Interview wide views ────────────────────────────────────────────────── */
#view-interview-topics,
#view-interview-topic {
  max-width: 1100px;
}

/* ── Interview level card ────────────────────────────────────────────────── */
.level-card.interview { border-color: #90cdf4; }

/* ── Interview topic nav dots ────────────────────────────────────────────── */
.interview-topic-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

/* ── Interview learn card ────────────────────────────────────────────────── */
.interview-learn-card { background: #f7faff; border-left: 4px solid #4299e1; }
.interview-learn-card h3 { font-size: 1.3rem; margin-bottom: 1rem; }

/* ── Operations table ────────────────────────────────────────────────────── */
.ops-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
.ops-table td { padding: 0.3rem 0.5rem; border-bottom: 1px solid #e2e8f0; }
.ops-table td:first-child { color: #2d3748; font-family: "Fira Code", "Courier New", monospace; }
.ops-table td:last-child { color: #4299e1; font-weight: 600; text-align: right; }

/* ── Python tools inline list ────────────────────────────────────────────── */
.interview-tools-text {
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.88rem;
  color: #553c9a;
  white-space: pre-line;
}

/* ── Problem tabs ────────────────────────────────────────────────────────── */
.interview-problem-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.problem-tab {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  border: 2px solid #e2e8f0;
  background: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  color: #4a5568;
  transition: border-color 0.15s, background 0.15s;
}
.problem-tab:hover { border-color: #4299e1; }
.problem-tab.active { border-color: #4299e1; background: #ebf8ff; color: #2b6cb0; }
.problem-tab.solved { border-color: #68d391; background: #f0fff4; color: #276749; }
.problem-tab.active.solved { border-color: #48bb78; background: #c6f6d5; }
.diff-badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}
.diff-badge.easy   { background: #c6f6d5; color: #276749; }
.diff-badge.medium { background: #feebc8; color: #7b341e; }

/* ── Problem header (title + leetcode link) ──────────────────────────────── */
.interview-problem-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.interview-problem-header h4 { font-size: 1.1rem; margin: 0; }
.leetcode-link {
  font-size: 0.8rem;
  color: #4299e1;
  text-decoration: none;
  font-weight: 600;
}
.leetcode-link:hover { text-decoration: underline; }

/* ── Test results panel ──────────────────────────────────────────────────── */
.interview-test-results {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.test-result-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-family: "Fira Code", "Courier New", monospace;
}
.test-result-row.pass { background: #f0fff4; color: #276749; }
.test-result-row.fail { background: #fff5f5; color: #9b2c2c; }
.test-icon { font-weight: 700; flex-shrink: 0; }
```

- [ ] **Step 2: Commit**

```bash
git add style.css
git commit -m "feat: add interview CSS styles"
```

---

### Task 4: Add interview state, localStorage helpers, and navigation wiring

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Add interview fields to the `state` object** (top of app.js, lines 1–10)

Change the `state` object from:
```js
const state = {
  currentProblemId: null,
  currentLevel: null,
  currentTutorialTopicIndex: null,
  currentTutorialQuestionIndex: null,
  advanceTimer: null,
  pyodideReady: false,
  pyodide: null,
};
```
To:
```js
const state = {
  currentProblemId: null,
  currentLevel: null,
  currentTutorialTopicIndex: null,
  currentTutorialQuestionIndex: null,
  currentInterviewTopicIndex: null,
  currentInterviewProblemIndex: null,
  advanceTimer: null,
  pyodideReady: false,
  pyodide: null,
};
```

- [ ] **Step 2: Add interview localStorage helpers** after the `isTutorialTopicComplete` function (~line 72)

```js
// ─── Interview localStorage helpers ──────────────────────────────────────────
function getInterviewSolved() {
  return JSON.parse(localStorage.getItem('pylearn_interview_solved') || '[]');
}
function markInterviewSolved(id) {
  const solved = getInterviewSolved();
  if (!solved.includes(id)) {
    solved.push(id);
    localStorage.setItem('pylearn_interview_solved', JSON.stringify(solved));
  }
}
function isInterviewTopicComplete(topic) {
  const solved = getInterviewSolved();
  return topic.problems.every(p => solved.includes(p.id));
}
```

- [ ] **Step 3: Add Interview card to `showLevelSelect`**

Inside `showLevelSelect()`, after `container.innerHTML = '';` and before the tutorial card block, add:

```js
  // Interview card
  const interviewSolved = getInterviewSolved();
  const interviewSolvedCount = interviewSolved.length;
  const interviewTotal = INTERVIEW.reduce((sum, t) => sum + t.problems.length, 0);
  const interviewCard = document.createElement('div');
  interviewCard.className = 'level-card interview';
  interviewCard.innerHTML = `
    <div class="level-card-left">
      <h3>Interview Prep</h3>
      <p>Data structures, big-O, and LeetCode algorithm problems</p>
    </div>
    <div class="level-card-right">
      <span class="level-card-count">${interviewSolvedCount} / ${interviewTotal} solved</span>
    </div>
  `;
  interviewCard.addEventListener('click', showInterviewTopics);
  container.appendChild(interviewCard);
```

- [ ] **Step 4: Add `pylearn_interview_solved` to clear history**

Inside the `DOMContentLoaded` handler, update the clear history listener:
```js
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    localStorage.removeItem('pylearn_solved');
    localStorage.removeItem('pylearn_tutorial_solved');
    localStorage.removeItem('pylearn_interview_solved');
    showLevelSelect();
  });
```

- [ ] **Step 5: Enable interview run button in `loadPyodide`**

Change:
```js
    ['btn-run', 'btn-run-tutorial'].forEach(id => {
```
To:
```js
    ['btn-run', 'btn-run-tutorial', 'btn-run-interview'].forEach(id => {
```

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "feat: add interview state, localStorage helpers, nav wiring"
```

---

### Task 5: Add showInterviewTopics() to app.js

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Add `showInterviewTopics` function** after the `showTutorialTopics` function

```js
// ─── Interview Topics View ────────────────────────────────────────────────────
function showInterviewTopics() {
  const solved = getInterviewSolved();
  const completedCount = INTERVIEW.filter(t => isInterviewTopicComplete(t)).length;

  showView('view-interview-topics');
  document.getElementById('interview-topics-subtitle').textContent =
    `${completedCount} of ${INTERVIEW.length} topics completed`;
  document.getElementById('btn-back-from-interview-topics').onclick = showLevelSelect;

  const list = document.getElementById('interview-topics-list');
  list.innerHTML = '';
  INTERVIEW.forEach((topic, idx) => {
    const solvedCount = topic.problems.filter(p => solved.includes(p.id)).length;
    const isComplete = solvedCount === topic.problems.length;
    const isStarted = solvedCount > 0;
    const statusText = isComplete
      ? '✓ Done'
      : isStarted ? `${solvedCount} / ${topic.problems.length} solved`
      : 'Not started';
    const statusClass = isComplete ? 'solved' : isStarted ? 'in-progress' : 'unsolved';

    const li = document.createElement('li');
    li.className = `problem-item${isComplete ? ' solved' : ''}`;
    li.innerHTML = `
      <span class="problem-title"><span class="problem-num">${idx + 1}</span> ${topic.title}</span>
      <span class="problem-status ${statusClass}">${statusText}</span>
    `;
    li.addEventListener('click', () => showInterviewTopic(idx, 0));
    list.appendChild(li);
  });
}
```

- [ ] **Step 2: Verify in browser**

Click "Interview Prep" on the home screen — topic list should appear with 9 items all showing "Not started".

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add showInterviewTopics view"
```

---

### Task 6: Add showInterviewTopic() to app.js

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Add `showInterviewTopic` function** after `showInterviewTopics`

```js
// ─── Interview Topic View ─────────────────────────────────────────────────────
function showInterviewTopic(topicIndex, problemIndex) {
  state.currentInterviewTopicIndex = topicIndex;
  state.currentInterviewProblemIndex = problemIndex;

  const topic = INTERVIEW[topicIndex];
  const problem = topic.problems[problemIndex];
  const solved = getInterviewSolved();

  showView('view-interview-topic');

  document.getElementById('btn-back-to-interview-topics').onclick = showInterviewTopics;

  // Topic nav dots
  const nav = document.getElementById('interview-topic-nav');
  nav.innerHTML = '';
  INTERVIEW.forEach((t, i) => {
    const isComplete = isInterviewTopicComplete(t);
    const isCurrent = i === topicIndex;
    const dot = document.createElement('button');
    dot.className = [
      'topic-nav-dot',
      isCurrent ? 'active' : '',
      isComplete ? 'done' : '',
    ].filter(Boolean).join(' ');
    dot.title = t.title;
    dot.textContent = isComplete ? '✓' : (i + 1);
    dot.addEventListener('click', () => showInterviewTopic(i, 0));
    nav.appendChild(dot);
  });

  document.getElementById('interview-progress').textContent =
    `Topic ${topicIndex + 1} of ${INTERVIEW.length}`;

  // Learn panel
  document.getElementById('interview-topic-title').textContent = topic.title;
  document.getElementById('interview-what').textContent = topic.learn.what;

  const opsTable = document.getElementById('interview-operations');
  opsTable.innerHTML = topic.learn.operations
    .map(op => `<tr><td>${op.name}</td><td>${op.complexity}</td></tr>`)
    .join('');

  document.getElementById('interview-python-tools').textContent =
    topic.learn.pythonTools.join('\n');

  document.getElementById('interview-example').textContent = topic.learn.example;

  // Problem tabs
  const tabs = document.getElementById('interview-problem-tabs');
  tabs.innerHTML = '';
  topic.problems.forEach((p, i) => {
    const isSolved = solved.includes(p.id);
    const isActive = i === problemIndex;
    const btn = document.createElement('button');
    btn.className = [
      'problem-tab',
      isActive ? 'active' : '',
      isSolved ? 'solved' : '',
    ].filter(Boolean).join(' ');
    btn.innerHTML = `${i + 1} <span class="diff-badge ${p.difficulty}">${p.difficulty === 'easy' ? 'E' : 'M'}</span>`;
    btn.addEventListener('click', () => showInterviewTopic(topicIndex, i));
    tabs.appendChild(btn);
  });

  // Problem header
  document.getElementById('interview-problem-title').textContent = problem.title;
  const lcLink = document.getElementById('interview-leetcode-link');
  lcLink.textContent = `#${problem.leetcode.number} ↗`;
  lcLink.href = problem.leetcode.url;

  document.getElementById('interview-problem-description').textContent = problem.description;

  // Editor
  document.getElementById('interview-code-editor').value = problem.stub;
  document.getElementById('interview-test-results').classList.add('hidden');
  document.getElementById('interview-test-results').innerHTML = '';
  document.getElementById('interview-feedback-banner').className = 'feedback-banner hidden';

  document.getElementById('btn-run-interview').onclick = runInterviewCode;
}
```

- [ ] **Step 2: Verify in browser**

Click a topic — learn panel should show, 5 problem tabs should appear, editor should have the pre-filled stub.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add showInterviewTopic view with learn panel and problem tabs"
```

---

### Task 7: Add runInterviewCode() to app.js

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Add `runInterviewCode` function** after `showInterviewTopic`

```js
// ─── Interview Run ────────────────────────────────────────────────────────────
async function runInterviewCode() {
  if (!state.pyodideReady) return;

  const topic   = INTERVIEW[state.currentInterviewTopicIndex];
  const problem = topic.problems[state.currentInterviewProblemIndex];
  const code    = document.getElementById('interview-code-editor').value;
  const resultsPanel   = document.getElementById('interview-test-results');
  const feedbackBanner = document.getElementById('interview-feedback-banner');

  resultsPanel.innerHTML = '';
  resultsPanel.classList.add('hidden');
  feedbackBanner.className = 'feedback-banner hidden';

  // 1. Run preamble (if topic has structural helpers like ListNode/TreeNode)
  if (topic.preamble) {
    try {
      state.pyodide.runPython(topic.preamble);
    } catch (err) {
      feedbackBanner.textContent = 'Internal error in topic preamble: ' + err.message;
      feedbackBanner.className = 'feedback-banner incorrect';
      return;
    }
  }

  // 2. Run user code (defines the function)
  try {
    state.pyodide.runPython(code);
  } catch (err) {
    feedbackBanner.textContent = 'Error in your code:\n' + err.message;
    feedbackBanner.className = 'feedback-banner incorrect';
    return;
  }

  // 3. Pass test cases to Pyodide as a global, then run test runner
  state.pyodide.globals.set('_test_cases_js', problem.tests);

  // Build argTypes list for Python (null entries mean no conversion)
  const argTypes = problem.argTypes || [];
  const argTypesJson = JSON.stringify(argTypes);
  const returnType = problem.returnType || 'list';
  const fnName = problem.functionName;

  const testRunner = `
import json as _json_out

_test_cases = _test_cases_js.to_py()
_arg_types = ${argTypesJson}
_return_type = '${returnType}'
_results = []

for _tc in _test_cases:
    _raw_args = list(_tc['args'])
    _expected = _tc['expected']
    if hasattr(_expected, 'to_py'):
        _expected = _expected.to_py()

    _converted_args = []
    for _i, _arg in enumerate(_raw_args):
        _t = _arg_types[_i] if _i < len(_arg_types) else None
        if hasattr(_arg, 'to_py'):
            _arg = _arg.to_py()
        if _t == 'll':
            _converted_args.append(_list_to_ll(_arg) if _arg else None)
        elif _t == 'tree':
            _converted_args.append(_build_tree(_arg) if _arg else None)
        else:
            _converted_args.append(_arg)

    try:
        _actual = ${fnName}(*_converted_args)
        if _return_type == 'll':
            _actual = _ll_to_list(_actual) if _actual else []
        elif _return_type == 'tree':
            _actual = _level_order(_actual) if _actual else []
        _pass = _actual == _expected
        _results.append({'pass': bool(_pass), 'actual': repr(_actual), 'expected': repr(_expected)})
    except Exception as _e:
        _results.append({'pass': False, 'error': str(_e)})

_results_json = _json_out.dumps(_results)
`;

  let results;
  try {
    state.pyodide.runPython(testRunner);
    results = JSON.parse(state.pyodide.globals.get('_results_json'));
  } catch (err) {
    feedbackBanner.textContent = 'Test runner error: ' + err.message;
    feedbackBanner.className = 'feedback-banner incorrect';
    return;
  }

  // 4. Display per-test results
  resultsPanel.classList.remove('hidden');
  results.forEach((r, i) => {
    const row = document.createElement('div');
    row.className = `test-result-row ${r.pass ? 'pass' : 'fail'}`;
    if (r.pass) {
      row.innerHTML = `<span class="test-icon">✓</span> Test ${i + 1} passed`;
    } else if (r.error) {
      row.innerHTML = `<span class="test-icon">✗</span> Test ${i + 1} error — ${r.error}`;
    } else {
      row.innerHTML = `<span class="test-icon">✗</span> Test ${i + 1} failed &nbsp;—&nbsp; expected <code>${r.expected}</code>&nbsp; got <code>${r.actual}</code>`;
    }
    resultsPanel.appendChild(row);
  });

  // 5. Overall verdict
  const allPass = results.every(r => r.pass);
  const passCount = results.filter(r => r.pass).length;

  if (allPass) {
    markInterviewSolved(problem.id);
    feedbackBanner.textContent = `🎉 All ${results.length} tests passed!`;
    feedbackBanner.className = 'feedback-banner correct';
    triggerEmojiPop();
    // Mark the active tab solved without re-rendering (re-rendering resets the editor)
    const tabs = document.querySelectorAll('.problem-tab');
    if (tabs[state.currentInterviewProblemIndex]) {
      tabs[state.currentInterviewProblemIndex].classList.add('solved');
    }
  } else {
    feedbackBanner.textContent = `${passCount} / ${results.length} tests passed. Keep trying.`;
    feedbackBanner.className = 'feedback-banner incorrect';
  }
}
```

- [ ] **Step 2: Verify the full flow in browser**

Test each scenario:
1. Open DS1 (Array) → Two Sum → implement `def two_sum(nums, target): return [0,1]` (wrong) → should show 1/3 passing
2. Implement correct Two Sum → all 3 pass → emoji celebration, tab turns green
3. Open DS6 (Linked List) → Reverse Linked List → implement correctly → should pass all 3 tests
4. Open DS7 (Binary Tree) → Maximum Depth → implement correctly → should pass all 3 tests

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add interview function-based test runner"
```
