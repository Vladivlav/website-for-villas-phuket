const faqItems = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        var faqItemElement = answer.parentElement;
        var imgElement = faqItemElement.querySelector('img');
        if (answer.classList.contains('current')) {
            answer.classList.remove('current');
            imgElement.classList.remove('animated');
        } else {
            faqAnswers.forEach((element) => { element.classList.remove('current'); });
            answer.classList.add('current');
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

function updateProgressFive(index) {
  const progress = document.querySelector('#prices-and-benefits .quiz-progress span');

  switch (index) {
      case 0:
          document.querySelector('#prices-and-benefits .progress').style.width = '0%';
          break;
      case 1:
          document.querySelector('#prices-and-benefits .progress').style.width = '20%';
          break;
      case 2:
          document.querySelector('#prices-and-benefits .progress').style.width = '40%';
          break;
      case 3:
          document.querySelector('#prices-and-benefits .progress').style.width = '60%';
          break;
      case 4:
          document.querySelector('#prices-and-benefits .progress').style.width = '80%';
          break;
      case 5:
          document.querySelector('#prices-and-benefits .progress').style.width = '100%';
          break;
  }

  if (index >= 5) {
      progress.classList.add('final');
  } else {
      progress.classList.remove('final');
      progress.textContent = `${index + 1}/5`;
  }
}
  
  // Обработчик для кнопок вперед
  document.querySelectorAll('#check-objects .next-button').forEach(button => {
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

  document.querySelectorAll('#prices-and-benefits .next-button').forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('active')) return;
  
      const currentQuestion = document.querySelector('#prices-and-benefits .quiz-question.active');
      const allQuestions = document.querySelectorAll('#prices-and-benefits .quiz-question');
  
      if (currentQuestion) {
        currentQuestion.classList.remove('active');
        const nextQuestion = currentQuestion.nextElementSibling;
        if (nextQuestion && nextQuestion.classList.contains('quiz-question')) {
          nextQuestion.classList.add('active');
          
          // Получаем индекс следующего вопроса и обновляем прогресс
          const newIndex = Array.from(allQuestions).indexOf(nextQuestion);
          updateProgressFive(newIndex); // обновляем прогресс
        }
      }
    });
  });
  
  // Обработчик для кнопок назад
  document.querySelectorAll('#check-objects .prev-button').forEach(button => {
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

document.querySelectorAll('#prices-and-benefits .prev-button').forEach(button => {
  button.addEventListener('click', function() {
    const currentQuestion = document.querySelector('#prices-and-benefits .quiz-question.active');
    const allQuestions = document.querySelectorAll('#prices-and-benefits .quiz-question');

    if (currentQuestion) {
      currentQuestion.classList.remove('active');
      const prevQuestion = currentQuestion.previousElementSibling;
      if (prevQuestion && prevQuestion.classList.contains('quiz-question')) {
        prevQuestion.classList.add('active');
        
        // Получаем индекс предыдущего вопроса и обновляем прогресс
        const newIndex = Array.from(allQuestions).indexOf(prevQuestion);
        updateProgressFive(newIndex); // обновляем прогресс
      }
    }
  });
});

document.querySelectorAll('#prices-and-benefits .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#prices-and-benefits .form-select div.feddback-options-list');
    const option_input = document.querySelector('#prices-and-benefits .form-select > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
  });
});

document.querySelectorAll('#prices-and-benefits .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#prices-and-benefits .form-select div.feddback-options-list');

    option_list.style.display = '';
  });
});

document.querySelectorAll('#check-objects .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');
    const option_input = document.querySelector('#check-objects .form-select > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
  });
});

document.querySelectorAll('#check-objects .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');

    option_list.style.display = '';
  });
});


document.querySelectorAll('#investments-base .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#investments-base .form-select div.feddback-options-list');
    const option_input = document.querySelector('#investments-base .form-select > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
  });
});

document.querySelectorAll('#investments-base .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#investments-base .form-select div.feddback-options-list');

    option_list.style.display = '';
  });
});

document.querySelectorAll('#check-objects .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');
    const option_input = document.querySelector('#check-objects .form-select > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text
  });
});

document.querySelectorAll('#check-objects .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');

    option_list.style.display = '';
  });
});
  
// Устанавливаем начальный прогресс при загрузке страницы
const initialQuestion = document.querySelector('#check-objects .quiz-question.active');
const allQuestions = document.querySelectorAll('#check-objects .quiz-question');
const initialIndex = Array.from(allQuestions).indexOf(initialQuestion);
updateProgress(initialIndex);


const factContainers = document.querySelectorAll('.fact-container');

function showNextFact() {
  const current = document.querySelector('.fact-container.current');
  const last_fact = document.querySelector('.last-fact-container');
  let next;

  if (current.nextElementSibling && current.nextElementSibling.classList.contains('fact-container')) {
    next = current.nextElementSibling;
  } else {
    next = factContainers[0];
  }

  const parent = next.parentElement;
  const elementsWithClass = parent.querySelectorAll('section#attractive-direction .fact-container');
  
  if (next === elementsWithClass[elementsWithClass.length - 1]) {
    last_fact.style.opacity = 1;
  } else {
    last_fact.style.opacity = 0;
  }

  current.classList.remove('current');
  next.classList.add('current');
}

factContainers.forEach(container => {
  container.addEventListener('click', showNextFact);
});

document.addEventListener('DOMContentLoaded', function() {
  const offersContent = document.querySelector('.offers-content');
  const prevBtn = document.querySelector('.offers-nav .prev-btn');
  const nextBtn = document.querySelector('.offers-nav .next-btn');
  const currentNumber = document.querySelector('section#main-page .offers-count .current-number');

  // Изначальное значение left
  let currentLeft = 0;

  prevBtn.addEventListener('click', function() {
    if (currentLeft < 0) { // Не выполняем, если currentLeft == 0
      currentLeft += 100;
      offersContent.style.left = `${currentLeft}vw`;

      // Уменьшаем значение currentNumber, если больше 1
      let number = parseInt(currentNumber.textContent);
      if (number > 1) {
        currentNumber.textContent = '0' + `${number - 1}`;
      }
    }
  });

  nextBtn.addEventListener('click', function() {
    if (currentLeft > -100) { // Не выполняем, если currentLeft == -100
      currentLeft -= 100;
      offersContent.style.left = `${currentLeft}vw`;

      // Увеличиваем значение currentNumber
      let number = parseInt(currentNumber.textContent);
      currentNumber.textContent = '0' + `${number + 1}`;
    }
  });
});