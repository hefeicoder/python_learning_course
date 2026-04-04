// ─── State ───────────────────────────────────────────────────────────────────
const state = {
  currentProblemId: null,
  currentLevel: null,
  currentTutorialTopicIndex: null,
  currentTutorialQuestionIndex: null,
  advanceTimer: null,
  pyodideReady: false,
  pyodide: null,
};

// ─── Emoji Pop Celebration ───────────────────────────────────────────────────
function triggerEmojiPop() {
  const emojis = ['🎉', '⭐', '🏆', '🌟', '🥳', '💥', '🎊', '👏'];
  const container = document.createElement('div');
  container.className = 'emoji-container';
  document.body.appendChild(container);

  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.className = 'emoji-pop';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const duration = 1.0 + Math.random() * 0.8;
    const delay    = Math.random() * 0.6;
    const x        = 5 + Math.random() * 90;
    const y        = 20 + Math.random() * 60;
    const size     = 1.8 + Math.random() * 1.6;
    el.style.cssText = `left:${x}%;top:${y}%;font-size:${size}rem;animation-duration:${duration}s;animation-delay:${delay}s;`;
    container.appendChild(el);
  }

  setTimeout(() => container.remove(), 2200);
}

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

// ─── Tutorial localStorage helpers ───────────────────────────────────────────
function getTutorialSolved() {
  return JSON.parse(localStorage.getItem('pylearn_tutorial_solved') || '[]');
}
function markTutorialSolved(id) {
  const solved = getTutorialSolved();
  if (!solved.includes(id)) {
    solved.push(id);
    localStorage.setItem('pylearn_tutorial_solved', JSON.stringify(solved));
  }
}
function isTutorialTopicComplete(topic) {
  const solved = getTutorialSolved();
  return topic.questions.every(q => solved.includes(q.id));
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

// ─── Tutorial Topics View ────────────────────────────────────────────────────
function showTutorialTopics() {
  const completed = TUTORIAL.filter(t => isTutorialTopicComplete(t)).length;

  showView('view-tutorial-topics');
  document.getElementById('tutorial-topics-subtitle').textContent =
    `${completed} of ${TUTORIAL.length} topics completed`;
  document.getElementById('btn-back-from-tutorial-topics').onclick = showLevelSelect;

  const list = document.getElementById('tutorial-topics-list');
  list.innerHTML = '';
  TUTORIAL.forEach((topic, idx) => {
    const solved = getTutorialSolved();
    const solvedCount = topic.questions.filter(q => solved.includes(q.id)).length;
    const isComplete = solvedCount === topic.questions.length;
    const isStarted = solvedCount > 0;
    const statusText = isComplete ? '✓ Done' : isStarted ? `${solvedCount} / ${topic.questions.length} done` : 'Not started';
    const statusClass = isComplete ? 'solved' : isStarted ? 'in-progress' : 'unsolved';
    const li = document.createElement('li');
    li.className = `problem-item${isComplete ? ' solved' : ''}`;
    li.innerHTML = `
      <span class="problem-title"><span class="problem-num">${idx + 1}</span> ${topic.title}</span>
      <span class="problem-status ${statusClass}">${statusText}</span>
    `;
    li.addEventListener('click', () => showTutorial(idx, 0));
    list.appendChild(li);
  });
}

// ─── Tutorial View ────────────────────────────────────────────────────────────
function showTutorial(topicIndex, questionIndex) {
  clearTimeout(state.advanceTimer);
  state.currentTutorialTopicIndex = topicIndex;
  state.currentTutorialQuestionIndex = questionIndex;

  const topic = TUTORIAL[topicIndex];
  const question = topic.questions[questionIndex];

  showView('view-tutorial');

  document.getElementById('btn-back-to-topics').onclick = showTutorialTopics;

  // Topic nav dots
  const nav = document.getElementById('tutorial-topic-nav');
  nav.innerHTML = '';
  TUTORIAL.forEach((t, i) => {
    const isComplete = isTutorialTopicComplete(t);
    const isCurrent = i === topicIndex;
    const dot = document.createElement('button');
    dot.className = [
      'topic-nav-dot',
      isCurrent ? 'active' : '',
      isComplete ? 'done' : '',
    ].filter(Boolean).join(' ');
    dot.title = t.title;
    dot.textContent = isComplete ? '✓' : (i + 1);
    dot.addEventListener('click', () => showTutorial(i, 0));
    nav.appendChild(dot);
  });

  // Progress indicator
  document.getElementById('tutorial-progress').textContent =
    `Topic ${topicIndex + 1} of ${TUTORIAL.length} — Question ${questionIndex + 1} of ${topic.questions.length}`;

  // Learn content
  document.getElementById('tutorial-topic-title').textContent = topic.title;
  document.getElementById('tutorial-what').textContent = topic.explanation.what;
  document.getElementById('tutorial-when').textContent = topic.explanation.when;
  document.getElementById('tutorial-example').textContent = topic.explanation.example;

  // Practice content
  document.getElementById('tutorial-question-label').textContent =
    `Practice ${questionIndex + 1} of ${topic.questions.length}`;
  document.getElementById('tutorial-question-description').textContent = question.description;

  // Reset editor
  document.getElementById('tutorial-code-editor').value = '';
  document.getElementById('tutorial-output-panel').classList.add('hidden');
  document.getElementById('tutorial-output-text').textContent = '';
  document.getElementById('tutorial-feedback-banner').className = 'feedback-banner hidden';

  document.getElementById('btn-run-tutorial').onclick = runTutorialCode;
}

// ─── Tutorial Run ─────────────────────────────────────────────────────────────
async function runTutorialCode() {
  if (!state.pyodideReady) return;

  const code = document.getElementById('tutorial-code-editor').value;
  const outputPanel = document.getElementById('tutorial-output-panel');
  const outputText = document.getElementById('tutorial-output-text');
  const feedbackBanner = document.getElementById('tutorial-feedback-banner');

  outputPanel.classList.remove('hidden');
  feedbackBanner.className = 'feedback-banner hidden';
  outputText.textContent = 'Running...';

  let output = '';
  try {
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

  const topic = TUTORIAL[state.currentTutorialTopicIndex];
  const question = topic.questions[state.currentTutorialQuestionIndex];
  const expected = question.expectedOutput.trim();
  const actual = output.trim();

  if (actual === expected) {
    markTutorialSolved(question.id);
    feedbackBanner.textContent = '🎉 Correct!';
    feedbackBanner.className = 'feedback-banner correct';
    triggerEmojiPop();

    const advanceFromTopic = state.currentTutorialTopicIndex;
    const advanceFromQuestion = state.currentTutorialQuestionIndex;
    const advanceTopic = TUTORIAL[advanceFromTopic];

    state.advanceTimer = setTimeout(() => {
      const nextQuestion = advanceFromQuestion + 1;
      if (nextQuestion < advanceTopic.questions.length) {
        showTutorial(advanceFromTopic, nextQuestion);
      } else {
        const nextTopic = advanceFromTopic + 1;
        if (nextTopic < TUTORIAL.length) {
          showTutorial(nextTopic, 0);
        } else {
          showTutorialTopics();
        }
      }
    }, 1200);
  } else {
    feedbackBanner.textContent = 'Not quite — check your output and try again!';
    feedbackBanner.className = 'feedback-banner incorrect';
  }
}

// ─── Level Select View ────────────────────────────────────────────────────────
function showLevelSelect() {
  const solved = getSolved();

  showView('view-level-select');

  const container = document.getElementById('level-cards');
  container.innerHTML = '';

  // Tutorial card (first)
  const tutorialSolved = getTutorialSolved();
  const tutorialSolvedCount = TUTORIAL.reduce(
    (sum, t) => sum + t.questions.filter(q => tutorialSolved.includes(q.id)).length, 0
  );
  const tutorialTotal = TUTORIAL.reduce((sum, t) => sum + t.questions.length, 0);
  const tutorialCard = document.createElement('div');
  tutorialCard.className = 'level-card tutorial';
  tutorialCard.innerHTML = `
    <div class="level-card-left">
      <h3>Tutorial</h3>
      <p>Start here — learn Python from scratch with guided lessons</p>
    </div>
    <div class="level-card-right">
      <span class="level-card-count">${tutorialSolvedCount} / ${tutorialTotal} solved</span>
    </div>
  `;
  tutorialCard.addEventListener('click', showTutorialTopics);
  container.appendChild(tutorialCard);

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
    ['btn-run', 'btn-run-tutorial'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) { btn.disabled = false; btn.textContent = 'Run Code'; }
    });
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
      triggerEmojiPop();
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
    localStorage.removeItem('pylearn_tutorial_solved');
    showLevelSelect();
  });
  showLevelSelect();
  loadPyodide();
});
