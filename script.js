const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        var faqItemElement = answer.parentElement;
        var imgElement = faqItemElement.querySelector('img');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            imgElement.classList.remove('animated');
        } else {
            answer.style.display = 'block';
            imgElement.classList.add('animated');
        }
    });
});

document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        // Убираем класс active у всех соседних элементов с классом quiz-option
        document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('active'));

        // Добавляем класс active к текущему элементу quiz-option
        this.classList.add('active');

        // Находим кнопку .next-button рядом с кликнутым элементом и добавляем ей класс active
        const nextButton = this.parentNode.querySelector('.next-button');
        if (nextButton) {
        nextButton.classList.add('active');
        }
    });
});
// Обновление счетчика
function updateProgress(index) {
    const progress = document.querySelector('#check-objects .quiz-progress span');

    switch (index) {
        case 0:
            document.querySelector('#check-objects .progress').style.width = '0%';
            break;
        case 1:
            document.querySelector('#check-objects .progress').style.width = '33%';
            break;
        case 2:
            document.querySelector('#check-objects .progress').style.width = '66%';
            break;
        case 3:
            document.querySelector('#check-objects .progress').style.width = '100%';
            break;
    }

    if (index >= 3) {
        progress.classList.add('final');
    } else {
        progress.classList.remove('final');
        progress.textContent = `${index + 1}/3`;
    }
  }
  
  // Обработчик для кнопок вперед
  document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('active')) return;
  
      const currentQuestion = document.querySelector('#check-objects .quiz-question.active');
      const allQuestions = document.querySelectorAll('#check-objects .quiz-question');
  
      if (currentQuestion) {
        currentQuestion.classList.remove('active');
        const nextQuestion = currentQuestion.nextElementSibling;
        if (nextQuestion && nextQuestion.classList.contains('quiz-question')) {
          nextQuestion.classList.add('active');
          
          // Получаем индекс следующего вопроса и обновляем прогресс
          const newIndex = Array.from(allQuestions).indexOf(nextQuestion);
          updateProgress(newIndex); // обновляем прогресс
        }
      }
    });
  });
  
  // Обработчик для кнопок назад
  document.querySelectorAll('.prev-button').forEach(button => {
    button.addEventListener('click', function() {
      const currentQuestion = document.querySelector('#check-objects .quiz-question.active');
      const allQuestions = document.querySelectorAll('#check-objects .quiz-question');
  
      if (currentQuestion) {
        currentQuestion.classList.remove('active');
        const prevQuestion = currentQuestion.previousElementSibling;
        if (prevQuestion && prevQuestion.classList.contains('quiz-question')) {
          prevQuestion.classList.add('active');
          
          // Получаем индекс предыдущего вопроса и обновляем прогресс
          const newIndex = Array.from(allQuestions).indexOf(prevQuestion);
          updateProgress(newIndex, allQuestions.length) - 1; // обновляем прогресс
        }
      }
    });
  });
  
  // Устанавливаем начальный прогресс при загрузке страницы
  const initialQuestion = document.querySelector('#check-objects .quiz-question.active');
  const allQuestions = document.querySelectorAll('# check-objects .quiz-question');
  const initialIndex = Array.from(allQuestions).indexOf(initialQuestion);
  updateProgress(initialIndex);


const factContainers = document.querySelectorAll('.fact-container');

function showNextFact() {
const current = document.querySelector('.fact-container.current');
let next;

if (current.nextElementSibling && current.nextElementSibling.classList.contains('fact-container')) {
    next = current.nextElementSibling;
} else {
    next = factContainers[0];
}

current.classList.remove('current');
next.classList.add('current');
}

factContainers.forEach(container => {
container.addEventListener('click', showNextFact);
});