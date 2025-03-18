document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        // Убираем класс active у всех соседних элементов с классом quiz-option
        this.parentNode.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('active'));
        this.parentNode.querySelectorAll('.quiz-option').forEach(el => el.classList.add('inactive'));

        // Добавляем класс active к текущему элементу quiz-option
        this.classList.remove('inactive');
        this.classList.add('active');

        // Находим кнопку .next-button рядом с кликнутым элементом и добавляем ей класс active
        const nextButton = this.parentNode.querySelector('.next-button');
        if (nextButton) {
          nextButton.classList.add('active');
        }
    });
});
// Обновление счетчика
function updateProgress(index, totalSteps, formId) {
  const form = document.querySelector(`#${formId}`);
  if (!form) return;

  const progress = form.querySelector('.quiz-progress span');
  const progressBar = form.querySelector('.progress');
  console.log(progressBar);

  const stepPercentage = index / (totalSteps - 1) * 100;
  progressBar.style.width = `${stepPercentage}%`;

  if (index >= totalSteps - 1) {
    progress.classList.add('final');
  } else {
    progress.classList.remove('final');
    progress.textContent = `${index + 1}/${totalSteps - 1}`;
  }
}

function updateProgressFive(index) {
  updateProgress(index, 6, 'prices-and-benefits');
}

function updateProgressThree(index) {
  updateProgress(index, 4, 'check-objects');
}
  
// Обработчик для кнопок вперед
document.querySelectorAll('.non-popup-form .next-button').forEach(button => {
  button.addEventListener('click', function() {
    if (!this.classList.contains('active')) return;

    const parentForm = this.closest('.non-popup-form');
    if (!parentForm) return;

    const currentQuestion = parentForm.querySelector('.quiz-question.active');
    const allQuestions = parentForm.querySelectorAll('.quiz-question');
    const quizSection = parentForm.querySelector('.quiz-section');

    if (currentQuestion) {
      currentQuestion.classList.remove('active');
      const nextQuestion = currentQuestion.nextElementSibling;

      if (nextQuestion && nextQuestion.classList.contains('quiz-question')) {
        nextQuestion.classList.add('active');

        // Получаем индекс следующего вопроса и обновляем прогресс
        const newIndex = Array.from(allQuestions).indexOf(nextQuestion);

        if (parentForm.id === 'check-objects') {
          updateProgressThree(newIndex);
        } else if (parentForm.id === 'prices-and-benefits') {
          updateProgressFive(newIndex);
        }

        // Проверяем, является ли следующий вопрос последним
        if (newIndex === allQuestions.length - 1) {
          quizSection.classList.add('last-slide');
        } else {
          quizSection.classList.remove('last-slide');
        }
      }
    }

    if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
      const container = parentForm.querySelector('.quiz-questions-container');
      if (!container) return;

      allQuestions.forEach(q => q.style.opacity = "0");

      const current = parentForm.querySelector('.quiz-question.active');
      if (current) {
        current.style.opacity = "1";
        const index = Array.from(allQuestions).indexOf(current) + 1;

        if (parentForm.id === 'check-objects') {
          if ([1].includes(index)) {
            container.style.height = "8.59375vw";
          } else if ([2, 3].includes(index)) {
            container.style.height = "15.364583vw";
          } else if (index == 4) {
            container.style.height = "24.739583333333336vw";
          }
        } else if (parentForm.id === 'prices-and-benefits') {
          if ([1, 4, 5].includes(index)) {
            container.style.height = "8.59375vw";
          } else if ([2, 3].includes(index)) {
            container.style.height = "15.364583vw";
          } else if (index == 6) {
            container.style.height = "24.739583333333336vw";
          }
        }
      }
    }
  });
});

// Обработчик для кнопок назад
document.querySelectorAll('.non-popup-form .prev-button').forEach(button => {
  button.addEventListener('click', function() {
    const parentForm = this.closest('.non-popup-form');
    if (!parentForm) return;

    const currentQuestion = parentForm.querySelector('.quiz-question.active');
    const allQuestions = parentForm.querySelectorAll('.quiz-question');

    if (currentQuestion) {
      currentQuestion.classList.remove('active');
      const prevQuestion = currentQuestion.previousElementSibling;
      if (prevQuestion && prevQuestion.classList.contains('quiz-question')) {
        prevQuestion.classList.add('active');

        // Получаем индекс предыдущего вопроса и обновляем прогресс
        const newIndex = Array.from(allQuestions).indexOf(prevQuestion);
        if (parentForm.id === 'check-objects') {
          updateProgressThree(newIndex, allQuestions.length);
        } else if (parentForm.id === 'prices-and-benefits') {
          updateProgressFive(newIndex);
        }
      }
    }

    if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
      const container = parentForm.querySelector(".quiz-questions-container");
      if (!container) return;

      allQuestions.forEach(q => q.style.opacity = "0");

      const current = parentForm.querySelector(".quiz-question.active");
      if (current) {
        current.style.opacity = "1";
        const index = Array.from(allQuestions).indexOf(current) + 1;

        if (parentForm.id === 'check-objects') {
          if ([1].includes(index)) {
            container.style.height = "8.59375vw";
          } else if ([2, 3].includes(index)) {
            container.style.height = "15.364583vw";
          } else if (index == 4) {
            container.style.height = "24.739583333333336vw";
          }
        } else if (parentForm.id === 'prices-and-benefits') {
          if ([1, 4, 5].includes(index)) {
            container.style.height = "8.59375vw";
          } else if ([2, 3].includes(index)) {
            container.style.height = "15.364583vw";
          } else if (index == 6) {
            container.style.height = "24.739583333333336vw";
          }
        }
      }
    }
  });
});