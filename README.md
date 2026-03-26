# Learn Python!

A browser-based Python learning site for kids. Pick a difficulty, solve coding problems, and get instant feedback — no installation required.

![screenshot](https://raw.githubusercontent.com/hefeicoder/python_learning_course/main/preview.png)

## Features

- **Three difficulty levels** — Beginner, Intermediate, and Advanced
- **70 problems** covering Python fundamentals through advanced topics
- **In-browser Python** — powered by [Pyodide](https://pyodide.org) (no server needed)
- **Instant feedback** — runs your code and checks the output
- **Cheat prevention** — problems that require specific functions (e.g. `len()`, `def`, `class`) verify you used them
- **Progress tracking** — solved problems are saved in your browser via localStorage
- **Zero dependencies** — pure HTML, CSS, and JavaScript; works offline after first load

## Problem Curriculum

### Beginner (1.1 – 1.40) — *A step-by-step tutorial*

| Part | Topics |
|------|--------|
| 1 — Printing | `print()`, printing numbers vs strings |
| 2 — Variables | assignment, string variables, math with variables, updating values |
| 3 — Strings | concatenation, repetition, `len`, indexing, slicing |
| 4 — String Methods | `.upper()`, `.lower()`, `.strip()`, `.replace()`, f-strings |
| 5 — Arithmetic | `+` `-` `*` `/` `//` `%` `**`, order of operations |
| 6 — Math Functions | `abs()`, `round()`, `max()`, `min()` |
| 7 — Types & Conversion | `type()`, `int()`, `float()`, `str()` |
| 8 — Lists Intro | create, index, negative index, `len` |

### Intermediate (2.1 – 2.30)

Loops, lists, functions, conditionals, string algorithms, sorting, recursion basics.

### Advanced (3.1 – 3.8)

Dictionaries, classes, list comprehensions, error handling.

## Running Locally

No build step needed. Just serve the files with any static server:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Or use any other static file server (VS Code Live Server, `npx serve`, etc.).

## How It Works

- Python runs entirely in the browser via **Pyodide** (WebAssembly)
- Your code's `stdout` is captured and compared against the expected output
- For problems that teach specific concepts, the grader also checks that required keywords (e.g. `len(`, `def `, `class `) appear in your code
- Progress is stored in `localStorage` under the key `pylearn_solved`

## Project Structure

```
index.html   — app shell, three views (level select → problem list → editor)
app.js       — view routing, Pyodide loading, code execution and grading
data.js      — all problems (id, title, description, hint, expectedOutput, requiredKeywords)
style.css    — styles
```

## License

MIT
