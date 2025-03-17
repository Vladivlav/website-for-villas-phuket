// Устанавливаем начальный прогресс при загрузке страницы
const initialQuestion = document.querySelector('#check-objects .quiz-question.active');
const allQuestions = document.querySelectorAll('#check-objects .quiz-question');
const initialIndex = Array.from(allQuestions).indexOf(initialQuestion);
updateProgress(initialIndex);

document.querySelectorAll('.quiz-result .close-popup').forEach(button => {
  button.addEventListener('click', function() {
    const result = this.closest('.quiz-result');
    if (!result) return;

    const backToBlur = result.closest('section')?.querySelector('.header-section');
    
    result.classList.add('hidden');
    if (backToBlur) {
      backToBlur.classList.remove('blur');
    }
  });
});

document.querySelectorAll('#prices-and-benefits .form-button').forEach(button => {
  button.addEventListener('click', function() {
    if (button.classList.contains('active')) {
      const backToBlur = document.querySelector('#prices-and-benefits .header-section');
      const result     = document.querySelector('#prices-and-benefits .quiz-result');

      result.classList.remove('hidden');
      backToBlur.classList.add('blur');
    }
  });
});

document.querySelectorAll('#check-objects .form-button').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, что у кнопки есть класс 'active'
    if (button.classList.contains('active')) {
      const container = document.querySelector('#check-objects');
      const guideResult = document.querySelector('#guide-form-result');
      const backToBlur = container.querySelector('.header-section');
      const result = container.querySelector('.quiz-result');

      result.classList.remove('hidden');
      backToBlur.classList.add('blur');

      // Новый код для отправки данных
      const name = container.querySelector('input[placeholder="Ваши Имя и Фамилия"]').value;
      const phone = container.querySelector('input[placeholder="Ваш номер телефона"]').value;
      const email = container.querySelector('input[placeholder="Ваш e-mail"]').value;

      // Проверяем, что пользователь дал согласие (наличие класса 'active')
      if (!button.classList.contains('active')) {
        alert('Вы должны согласиться с политикой конфиденциальности!');
        return;
      }

      // Формируем данные для отправки
      const data = {
        to_email: email,
        type: "fourth",
        name: name,
        phone: phone
      };

      // Отправляем запрос
      fetch('https://asia-east1-fifth-sprite-443116-h3.cloudfunctions.net/send_guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text()) // Получаем текстовый ответ
        .then(text => {
          alert(text); // Отображаем текст ответа в alert
          guideResult.style.display = 'flex';
          container.style.display = 'none';
        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert('Не удалось отправить запрос. Проверьте подключение к интернету.');
        });
    } else {
      // Если у кнопки нет класса 'active'
      alert('Пожалуйста, завершите все шаги квиза перед отправкой.');
    }
  });
});

document.querySelectorAll('#areas-and-beaches-guide .form-button').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, что у кнопки есть класс 'active'
    if (button.classList.contains('active')) {
      const container = document.querySelector('#areas-and-beaches-guide');
      const guideResult = document.querySelector('#guide-form-result');
      const backToBlur = container.querySelector('.header-section');
      const result = container.querySelector('.quiz-result');

      result.classList.remove('hidden');
      backToBlur.classList.add('blur');

      // Новый код для отправки данных
      const name = container.querySelector('input[placeholder="Ваши Имя и Фамилия"]').value;
      const phone = container.querySelector('input[placeholder="Ваш номер телефона"]').value;
      const email = container.querySelector('input[placeholder="Ваш e-mail"]').value;

      // Проверяем, что пользователь дал согласие (наличие класса 'active')
      if (!button.classList.contains('active')) {
        alert('Вы должны согласиться с политикой конфиденциальности!');
        return;
      }

      // Формируем данные для отправки
      const data = {
        to_email: email,
        type: "second",
        name: name,
        phone: phone
      };

      // Отправляем запрос
      fetch('https://asia-east1-fifth-sprite-443116-h3.cloudfunctions.net/send_guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text()) // Получаем текстовый ответ
        .then(text => {
          alert(text); // Отображаем текст ответа в alert
          guideResult.style.display = 'flex';
          container.style.display = 'none';
        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert('Не удалось отправить запрос. Проверьте подключение к интернету.');
        });
    } else {
      // Если у кнопки нет класса 'active'
      alert('Пожалуйста, завершите все шаги квиза перед отправкой.');
    }
  });
});

document.querySelectorAll('#forms-of-ownerships-guide .form-button').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, что у кнопки есть класс 'active'
    if (button.classList.contains('active')) {
      const container = document.querySelector('#forms-of-ownerships-guide');
      const guideResult = document.querySelector('#guide-form-result');
      const backToBlur = container.querySelector('.header-section');
      const result = container.querySelector('.quiz-result');

      result.classList.remove('hidden');
      backToBlur.classList.add('blur');

      // Новый код для отправки данных
      const name = container.querySelector('input[placeholder="Ваши Имя и Фамилия"]').value;
      const phone = container.querySelector('input[placeholder="Ваш номер телефона"]').value;
      const email = container.querySelector('input[placeholder="Ваш e-mail"]').value;

      // Проверяем, что пользователь дал согласие (наличие класса 'active')
      if (!button.classList.contains('active')) {
        alert('Вы должны согласиться с политикой конфиденциальности!');
        return;
      }

      // Формируем данные для отправки
      const data = {
        to_email: email,
        type: "first",
        name: name,
        phone: phone
      };

      // Отправляем запрос
      fetch('https://asia-east1-fifth-sprite-443116-h3.cloudfunctions.net/send_guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text()) // Получаем текстовый ответ
        .then(text => {
          alert(text); // Отображаем текст ответа в alert
          guideResult.style.display = 'flex';
          container.style.display = 'none';
        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert('Не удалось отправить запрос. Проверьте подключение к интернету.');
        });
    } else {
      // Если у кнопки нет класса 'active'
      alert('Пожалуйста, завершите все шаги квиза перед отправкой.');
    }
  });
});

document.querySelectorAll('#phuket-future-guide .form-button').forEach(button => {
  button.addEventListener('click', function() {
    // Проверяем, что у кнопки есть класс 'active'
    if (button.classList.contains('active')) {
      const container = document.querySelector('#phuket-future-guide');
      const guideResult = document.querySelector('#guide-form-result');
      const backToBlur = container.querySelector('.header-section');
      const result = container.querySelector('.quiz-result');

      result.classList.remove('hidden');
      backToBlur.classList.add('blur');

      // Новый код для отправки данных
      const name = container.querySelector('input[placeholder="Ваши Имя и Фамилия"]').value;
      const phone = container.querySelector('input[placeholder="Ваш номер телефона"]').value;
      const email = container.querySelector('input[placeholder="Ваш e-mail"]').value;

      // Проверяем, что пользователь дал согласие (наличие класса 'active')
      if (!button.classList.contains('active')) {
        alert('Вы должны согласиться с политикой конфиденциальности!');
        return;
      }

      // Формируем данные для отправки
      const data = {
        to_email: email,
        type: "third",
        name: name,
        phone: phone
      };

      // Отправляем запрос
      fetch('https://asia-east1-fifth-sprite-443116-h3.cloudfunctions.net/send_guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text()) // Получаем текстовый ответ
        .then(text => {
          alert(text); // Отображаем текст ответа в alert
          guideResult.style.display = 'flex';
          container.style.display = 'none';
        })
        .catch(error => {
          console.error('Ошибка:', error);
          alert('Не удалось отправить запрос. Проверьте подключение к интернету.');
        });
    } else {
      // Если у кнопки нет класса 'active'
      alert('Пожалуйста, завершите все шаги квиза перед отправкой.');
    }
  });
});

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
        const quizSection = document.querySelector('#check-objects .quiz-section');

        if (currentQuestion) {
            currentQuestion.classList.remove('active');
            const nextQuestion = currentQuestion.nextElementSibling;
            
            if (nextQuestion && nextQuestion.classList.contains('quiz-question')) {
                nextQuestion.classList.add('active');

                // Получаем индекс следующего вопроса и обновляем прогресс
                const newIndex = Array.from(allQuestions).indexOf(nextQuestion);
                updateProgress(newIndex);

                // Проверяем, является ли следующий вопрос последним
                if (newIndex === allQuestions.length - 1) {
                    quizSection.classList.add('last-slide');
                } else {
                    quizSection.classList.remove('last-slide');
                }
            }
          }
          if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
            const container = document.querySelector("#check-objects .quiz-questions-container");
            const questions = document.querySelectorAll("#check-objects .quiz-question");
        
            questions.forEach(q => q.style.opacity = "0");
        
            const current = document.querySelector("#check-objects .quiz-question.active");
            if (current) {
                current.style.opacity = "1";
    
                const index = Array.from(questions).indexOf(current) + 1;
    
                if ([1].includes(index)) {
                    container.style.height = "8.59375vw";
                } else if ([2, 3].includes(index)) {
                    container.style.height = "15.364583vw";
                } else if (index == 4) {
                  container.style.height = "24.739583333333336vw";
                }
            }
          }
    });
});


document.querySelectorAll('#prices-and-benefits .next-button').forEach(button => {
  button.addEventListener('click', function() {
      if (!this.classList.contains('active')) return;

      const currentQuestion = document.querySelector('#prices-and-benefits .quiz-question.active');
      const allQuestions = document.querySelectorAll('#prices-and-benefits .quiz-question');
      const quizSection = document.querySelector('#prices-and-benefits .quiz-section');

      if (currentQuestion) {
          currentQuestion.classList.remove('active');
          const nextQuestion = currentQuestion.nextElementSibling;

          if (nextQuestion && nextQuestion.classList.contains('quiz-question')) {
              nextQuestion.classList.add('active');

              // Получаем индекс следующего вопроса и обновляем прогресс
              const newIndex = Array.from(allQuestions).indexOf(nextQuestion);
              updateProgressFive(newIndex);

              // Проверяем, является ли следующий вопрос последним
              if (newIndex === allQuestions.length - 1) {
                  quizSection.classList.add('last-slide');
              } else {
                  quizSection.classList.remove('last-slide');
              }
          }
      }

      if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
        const container = document.querySelector("#prices-and-benefits .quiz-questions-container");
        const questions = document.querySelectorAll("#prices-and-benefits .quiz-question");
    
        questions.forEach(q => q.style.opacity = "0");
    
        const current = document.querySelector("#prices-and-benefits .quiz-question.active");
        if (current) {
            current.style.opacity = "1";

            const index = Array.from(questions).indexOf(current) + 1;

            if ([1, 4, 5].includes(index)) {
                container.style.height = "8.59375vw";
            } else if ([2, 3].includes(index)) {
                container.style.height = "15.364583vw";
            } else if (index == 6) {
              container.style.height = "24.739583333333336vw";
            }
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

      if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
        const container = document.querySelector("#check-objects .quiz-questions-container");
    
        allQuestions.forEach(q => q.style.opacity = "0");
    
        const current = document.querySelector("#check-objects .quiz-question.active");
        if (current) {
            current.style.opacity = "1";
  
            const index = Array.from(allQuestions).indexOf(current) + 1;
  
            if ([1].includes(index)) {
              container.style.height = "8.59375vw";
            } else if ([2, 3].includes(index)) {
                container.style.height = "15.364583vw";
            } else if (index == 4) {
              container.style.height = "24.739583333333336vw";
          }
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

    if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
      const container = document.querySelector("#prices-and-benefits .quiz-questions-container");
  
      allQuestions.forEach(q => q.style.opacity = "0");
  
      const current = document.querySelector("#prices-and-benefits .quiz-question.active");
      if (current) {
          current.style.opacity = "1";

          const index = Array.from(allQuestions).indexOf(current) + 1;

          if ([1, 4, 5].includes(index)) {
              container.style.height = "8.59375vw";
          } else if ([2, 3].includes(index)) {
              container.style.height = "15.364583vw";
          } else if (index == 6) {
            container.style.height = "24.739583333333336vw";
          }
      }
    }
  });
});

document.querySelectorAll('.non-popup-form .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const parentForm = this.closest('.non-popup-form');
    if (!parentForm) return;

    const optionList = parentForm.querySelector('.form-select .feddback-options-list');

    if (optionList) {
      optionList.style.display = '';
      this.style.display = 'none';
    }
  });
});

document.querySelectorAll('.non-popup-form .form-select .feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const parentForm = this.closest('.non-popup-form');
    if (!parentForm) return;

    const optionText = this.textContent;
    const optionList = parentForm.querySelector('.form-select .feddback-options-list');
    const optionInput = parentForm.querySelector('.form-select > span > span');

    if (optionList && optionInput) {
      optionList.style.display = 'none';
      optionInput.textContent = optionText;
      optionInput.classList.add('selected');
      parentForm.querySelector('.form-select > span').style.display = 'flex';
    }
  });
});

document.querySelectorAll('.form-agreement svg').forEach(input => {
  input.addEventListener('click', function() {
    const icon = input;
    const formActions = input.closest('.form-actions'); // Ищем родителя .form-actions
    const button = formActions ? formActions.querySelector('.form-button') : null; // Ищем .form-button внутри

    if (!button) return; // Если кнопка не найдена, выходим

    if (icon.style.opacity == 0) {
      icon.style.opacity = 1;
      button.classList.add('active');
    } else {
      icon.style.opacity = 0;
      button.classList.remove('active');
    }
  });
});

document.querySelectorAll('.form-close .form-section .close-popup').forEach(button => {
  button.addEventListener('click', function(event) {
    event.target.closest('.form-close').style.display = 'none';
  });
});

document.querySelector('div.yellow-link').addEventListener('click', function() {
  document.getElementById('choose-property').style.display = 'flex';
});

document.querySelector('#best-points .cta button').addEventListener('click', function() {
  document.getElementById('personal-consultation').style.display = 'flex';
});

document.querySelector('.faq-ask-question span').addEventListener('click', function() {
  document.getElementById('faq-form').style.display = 'flex';
});

document.querySelector('footer .btn-ask').addEventListener('click', function() {
  document.getElementById('faq-form').style.display = 'flex';
});

document.querySelector('.phuket-future-guide-form-link').addEventListener('click', function() {
  document.getElementById('phuket-future-guide').style.display = 'flex';
});

document.querySelector('.areas-and-beaches-guide-form-link').addEventListener('click', function() {
  document.getElementById('areas-and-beaches-guide').style.display = 'flex';
});

document.querySelector('.forms-of-ownerships-guide-form-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('forms-of-ownerships-guide').style.display = 'flex';
});

document.querySelector('.offer-button').addEventListener('click', function() {
  document.getElementById('special-offer-form').style.display = 'flex';
});

document.querySelectorAll('.form-close').forEach(button => {
  button.addEventListener('click', function(event) {
    if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
    }
  });
});


function pxToVw(px, viewportWidth = 1920) {
  const vw = (px / viewportWidth) * 100;
  return `${parseFloat(vw.toFixed(4))}vw`; // Ограничиваем до 4 цифр после запятой и добавляем "vw"
}
