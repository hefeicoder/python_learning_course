// ─── State ───────────────────────────────────────────────────────────────────
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
function getInterviewCode(id) {
  const all = JSON.parse(localStorage.getItem('pylearn_interview_code') || '{}');
  return all[id] || null;
}
function saveInterviewCode(id, code) {
  const all = JSON.parse(localStorage.getItem('pylearn_interview_code') || '{}');
  all[id] = code;
  localStorage.setItem('pylearn_interview_code', JSON.stringify(all));
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

  // Editor — restore saved code if available, otherwise show stub
  document.getElementById('interview-code-editor').value = getInterviewCode(problem.id) ?? problem.stub;
  document.getElementById('interview-test-results').classList.add('hidden');
  document.getElementById('interview-test-results').innerHTML = '';
  document.getElementById('interview-feedback-banner').className = 'feedback-banner hidden';

  document.getElementById('btn-run-interview').onclick = runInterviewCode;
}

// ─── Interview Run ────────────────────────────────────────────────────────────
async function runInterviewCode() {
  if (!state.pyodideReady) return;

  const topic   = INTERVIEW[state.currentInterviewTopicIndex];
  const problem = topic.problems[state.currentInterviewProblemIndex];
  const code    = document.getElementById('interview-code-editor').value;
  saveInterviewCode(problem.id, code);
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
import traceback as _tb

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
        _results.append({'pass': False, 'error': str(_e), 'traceback': _tb.format_exc()})
        break  # stop on first error — remaining tests would fail identically

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
      row.innerHTML = `<span class="test-icon">✗</span> Test ${i + 1} raised an exception:<pre class="traceback-block">${r.traceback}</pre>`;
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

  // Interview card (last)
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
    ['btn-run', 'btn-run-tutorial', 'btn-run-interview'].forEach(id => {
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

// ─── Keyboard helpers for all code editors ───────────────────────────────────
document.addEventListener('keydown', e => {
  const el = e.target;
  if (!el.classList.contains('code-editor')) return;

  if (e.key === 'Tab') {
    e.preventDefault();
    const start = el.selectionStart;
    const end = el.selectionEnd;
    el.value = el.value.slice(0, start) + '    ' + el.value.slice(end);
    el.selectionStart = el.selectionEnd = start + 4;
  }

  if (e.key === 'Enter') {
    e.preventDefault();
    const start = el.selectionStart;
    const end = el.selectionEnd;
    // Find the start of the current line
    const lineStart = el.value.lastIndexOf('\n', start - 1) + 1;
    // Extract leading whitespace from the current line
    const indent = el.value.slice(lineStart).match(/^[ \t]*/)[0];
    el.value = el.value.slice(0, start) + '\n' + indent + el.value.slice(end);
    el.selectionStart = el.selectionEnd = start + 1 + indent.length;
  }
});

// ─── Line numbers for all code editors ───────────────────────────────────────
function initLineNumbers(ta) {
  const wrap = document.createElement('div');
  wrap.className = 'editor-wrap';
  ta.parentNode.insertBefore(wrap, ta);
  const nums = document.createElement('div');
  nums.className = 'line-nums';
  wrap.appendChild(nums);
  wrap.appendChild(ta);

  function update() {
    const count = ta.value.split('\n').length;
    nums.innerHTML = Array.from({length: count}, (_, i) => `<span>${i + 1}</span>`).join('');
    nums.scrollTop = ta.scrollTop;
  }
  ta.addEventListener('input', update);
  ta.addEventListener('scroll', () => { nums.scrollTop = ta.scrollTop; });
  update();
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code-editor').forEach(initLineNumbers);

  document.getElementById('btn-clear-history').addEventListener('click', () => {
    localStorage.removeItem('pylearn_solved');
    localStorage.removeItem('pylearn_tutorial_solved');
    localStorage.removeItem('pylearn_interview_solved');
    localStorage.removeItem('pylearn_interview_code');
    showLevelSelect();
  });
  showLevelSelect();
  loadPyodide();
});
