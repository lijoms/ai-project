'use strict';

// Each example pairs an opportunity with a practical limit. No data is collected.
const examples = {
  study: {
    title: 'A study partner, on demand.',
    intro: 'Ask for practice questions or a simpler explanation of a difficult concept.',
    upside: 'Different explanations can help you get unstuck and practise at your own pace.',
    catch: 'A confident answer may contain an invented fact. Check it against course materials, then explain it yourself.'
  },
  work: {
    title: 'A first draft, faster.',
    intro: 'Turn non-sensitive meeting notes into a draft summary or action list.',
    upside: 'Less time formatting a document can leave more time for decisions and discussion.',
    catch: 'A summary can omit a condition or invent a task. Compare it with the original notes and confirm the owners.'
  },
  access: {
    title: 'Another way to connect.',
    intro: 'Use automatic captions to follow a recorded lecture or conversation.',
    upside: 'Text alongside speech can make information easier to access and revisit.',
    catch: 'Names, accents and technical terms can be misheard. Correct important captions and offer another way to get help.'
  }
};

const buttons = document.querySelectorAll('[data-case]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const example = examples[button.dataset.case];
    if (!example) return;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    for (const field of ['title', 'intro', 'upside', 'catch']) {
      document.getElementById(`case-${field}`).textContent = example[field];
    }
  });
});
