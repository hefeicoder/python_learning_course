// ─── State ───────────────────────────────────────────────────────────────────
const state = {
  currentProblemId: null,
  currentLevel: null,
  pyodideReady: false,
  pyodide: null,
};

// ─── View Router ─────────────────────────────────────────────────────────────
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
}

// ─── localStorage helpers ────────────────────────────────────────────────────
function getSolved()  { return JSON.parse(localStorage.getItem('pylearn_solved') || '[]'); }
function markSolved(id) {
  const solved = getSolved();
  if (!solved.includes(id)) {
    solved.push(id);
    localStorage.setItem('pylearn_solved', JSON.stringify(solved));
  }
}
function findProblem(id) {
  for (const level of ['beginner', 'intermediate', 'advanced']) {
    const p = PROBLEMS[level].find(p => p.id === id);
    if (p) return p;
  }
  return null;
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

const LEVEL_NUM = { beginner: 1, intermediate: 2, advanced: 3 };
function problemLabel(level, index) { return `${LEVEL_NUM[level]}.${index + 1}`; }
function getProblemMeta(id) {
  for (const level of ['beginner', 'intermediate', 'advanced']) {
    const index = PROBLEMS[level].findIndex(p => p.id === id);
    if (index !== -1) return { level, index };
  }
  return { level: 'beginner', index: 0 };
}

// ─── Level Select View ────────────────────────────────────────────────────────
function showLevelSelect() {
  const solved = getSolved();

  showView('view-level-select');

  const container = document.getElementById('level-cards');
  container.innerHTML = '';

  ['beginner', 'intermediate', 'advanced'].forEach(level => {
    const total = PROBLEMS[level].length;
    const solvedCount = PROBLEMS[level].filter(p => solved.includes(p.id)).length;

    const card = document.createElement('div');
    card.className = `level-card ${level}`;
    card.innerHTML = `
      <div class="level-card-left">
        <h3>${capitalize(level)}</h3>
        <p>${levelDescription(level)}</p>
      </div>
      <div class="level-card-right">
        <span class="level-card-count">${solvedCount} / ${total} solved</span>
      </div>
    `;
    card.addEventListener('click', () => showProblems(level));
    container.appendChild(card);
  });
}

function levelDescription(level) {
  return {
    beginner: 'Variables, strings, basic math, built-in functions',
    intermediate: 'Loops, lists, functions, conditionals, algorithms',
    advanced: 'Dicts, classes, comprehensions, error handling',
  }[level];
}

// ─── Problems View ────────────────────────────────────────────────────────────
function showProblems(level) {
  state.currentLevel = level;
  const solved = getSolved();
  const problems = PROBLEMS[level] || [];
  const solvedCount = problems.filter(p => solved.includes(p.id)).length;

  showView('view-problems');
  document.getElementById('problems-heading').textContent = `${capitalize(level)} Problems`;
  document.getElementById('problems-subtitle').textContent =
    `${solvedCount} of ${problems.length} solved`;
  document.getElementById('btn-back-levels').onclick = showLevelSelect;

  const list = document.getElementById('problems-list');
  list.innerHTML = '';
  problems.forEach((p, idx) => {
    const isSolved = solved.includes(p.id);
    const li = document.createElement('li');
    li.className = `problem-item${isSolved ? ' solved' : ''}`;
    li.innerHTML = `
      <span class="problem-title"><span class="problem-num">${problemLabel(level, idx)}</span> ${p.title}</span>
      <span class="problem-status ${isSolved ? 'solved' : 'unsolved'}">${isSolved ? '✓ Solved' : 'Unsolved'}</span>
    `;
    li.addEventListener('click', () => showEditor(p.id));
    list.appendChild(li);
  });
}

// ─── Pyodide ──────────────────────────────────────────────────────────────────
async function loadPyodide() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
  script.onload = async () => {
    state.pyodide = await globalThis.loadPyodide();
    state.pyodideReady = true;
    const runBtn = document.getElementById('btn-run');
    runBtn.disabled = false;
    runBtn.textContent = 'Run Code';
  };
  document.head.appendChild(script);
}

// ─── Editor View ─────────────────────────────────────────────────────────────
function showEditor(problemId) {
  const problem = findProblem(problemId);
  state.currentProblemId = problemId;

  showView('view-editor');
  const { level: pLevel, index: pIndex } = getProblemMeta(problemId);
  document.getElementById('editor-title').textContent = `${problemLabel(pLevel, pIndex)}  ${problem.title}`;
  document.getElementById('editor-description').textContent = problem.description;

  const hintEl = document.getElementById('editor-hint');
  if (problem.hint) {
    hintEl.textContent = '💡 Hint: ' + problem.hint;
    hintEl.classList.remove('hidden');
  } else {
    hintEl.classList.add('hidden');
  }

  document.getElementById('code-editor').value = '';
  document.getElementById('output-panel').classList.add('hidden');
  document.getElementById('output-text').textContent = '';
  document.getElementById('feedback-banner').className = 'feedback-banner hidden';

  document.getElementById('btn-run').onclick = runCode;
  document.getElementById('btn-back').onclick = () => showProblems(state.currentLevel);
}

async function runCode() {
  if (!state.pyodideReady) return;

  const code = document.getElementById('code-editor').value;
  const outputPanel = document.getElementById('output-panel');
  const outputText = document.getElementById('output-text');
  const feedbackBanner = document.getElementById('feedback-banner');

  outputPanel.classList.remove('hidden');
  feedbackBanner.className = 'feedback-banner hidden';
  outputText.textContent = 'Running...';

  let output = '';
  try {
    // Capture stdout (save original ref — sys.__stdout__ may be None in Pyodide)
    state.pyodide.runPython(`
import sys
import io
_orig_stdout = sys.stdout
sys.stdout = io.StringIO()
`);
    state.pyodide.runPython(code);
    output = state.pyodide.runPython('sys.stdout.getvalue()');
    state.pyodide.runPython('sys.stdout = _orig_stdout');
  } catch (err) {
    state.pyodide.runPython('sys.stdout = _orig_stdout');
    outputText.textContent = 'Error:\n' + err.message;
    feedbackBanner.textContent = 'Oops! There is an error in your code.';
    feedbackBanner.className = 'feedback-banner incorrect';
    return;
  }

  outputText.textContent = output || '(no output)';

  const problem = findProblem(state.currentProblemId);
  const expected = problem.expectedOutput.trim();
  const actual = output.trim();

  if (actual === expected) {
    const missing = (problem.requiredKeywords || []).find(kw => !code.includes(kw));
    if (missing) {
      feedbackBanner.textContent = `Output is correct! Now try solving it using \`${missing}\` as intended.`;
      feedbackBanner.className = 'feedback-banner incorrect';
    } else {
      feedbackBanner.textContent = '🎉 Correct! Great job!';
      feedbackBanner.className = 'feedback-banner correct';
      markSolved(state.currentProblemId);
    }
  } else {
    feedbackBanner.textContent = 'Not quite — check your output and try again!';
    feedbackBanner.className = 'feedback-banner incorrect';
  }
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-clear-history').addEventListener('click', () => {
    localStorage.removeItem('pylearn_solved');
    showLevelSelect();
  });
  showLevelSelect();
  loadPyodide();
});
