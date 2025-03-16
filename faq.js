document.addEventListener('DOMContentLoaded', function() {
    const firstOpenAnswer = document.querySelector('.faq-answer.open');
    if (firstOpenAnswer) {
      firstOpenAnswer.style.maxHeight = firstOpenAnswer.scrollHeight + 'px';
    }
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const currentAnswer = this.nextElementSibling;
    const openAnswer = document.querySelector('.faq-answer.open');

    if (openAnswer && openAnswer !== currentAnswer) {
      openAnswer.style.maxHeight = '0px';
      openAnswer.classList.remove('open');
    }

    if (!currentAnswer.classList.contains('open')) {
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
      currentAnswer.classList.add('open');
    } else {
      currentAnswer.style.maxHeight = '0px';
      currentAnswer.classList.remove('open');
    }
  });
});
