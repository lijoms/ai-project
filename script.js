'use strict';

// Each example pairs an opportunity with a practical limit. No data is collected.
const examples = {
  study: {
    title: 'AI as a study partner',
    intro: 'Seeking help from AI to give you practice questions or exams, as well as summaries or basic explanations of course concepts.',
    upside: 'Challenging your understanding could help you deepen it, and AI assistance could allow you to surpass academic roadblocks.',
    catch: 'Blind trust could lead to ignorance. AI can invent facts or give you information that do not align with course materials.'
  },
  work: {
    title: 'AI as a secretary',
    intro: 'Letting AI turn meeting notes into an action list, summarizing important information catered to the necessary audiences (if necessary).',
    upside: 'Less time formatting a document could leave more time to have the discussions and deliver in a prompt and organized manner.',
    catch: 'These tools could misinterpret or omit certain information that may not seem important, but holds a significant place in your own list. If you did not double-check, you could run into major issues.'
  },
  access: {
    title: 'AI as a bridge',
    intro: 'Using automatic captions to follow a recorded lecture or conversation, bridging the potential language or accessibility gaps',
    upside: 'Consuming recordings could become much more convenient and efficient, helping you with reviewing and understanding its content.',
    catch: 'AI could misinterpret or misspell information due to external factors like accents, technical issues, or unique spellings in general. If the captions are inaccurate, they may do more harm than good.'
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
