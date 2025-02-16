const faqItems   = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqButtons = document.querySelectorAll('.faq-item img');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentNode.querySelector('.faq-question').click();
    })
});

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
            faqButtons.forEach(img => { img.classList.remove('animated') });
            imgElement.classList.add('animated');
        }
    });
});

document.querySelectorAll('#prices-and-benefits .quiz-result .close-popup').forEach(button => {
  button.addEventListener('click', function() {
    const backToBlur = document.querySelector('#prices-and-benefits .header-section');
    const result     = document.querySelector('#prices-and-benefits .quiz-result');

    result.classList.add('hidden');
    backToBlur.classList.remove('blur');
  });
});

document.querySelectorAll('#check-objects .quiz-result .close-popup').forEach(button => {
  button.addEventListener('click', function() {
    const backToBlur = document.querySelector('#check-objects .header-section');
    const result     = document.querySelector('#check-objects .quiz-result');

    result.classList.add('hidden');
    backToBlur.classList.remove('blur');
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

document.querySelectorAll('#prices-and-benefits .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#prices-and-benefits .form-select div.feddback-options-list');

    option_list.style.display = '';
    span.style.display = 'none';
  });
});

document.querySelectorAll('#check-objects .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');

    option_list.style.display = '';
    span.style.display = 'none';
  });
});


document.querySelectorAll('#investments-base .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#investments-base .form-select div.feddback-options-list');
    const option_input = document.querySelector('#investments-base .form-select > span > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
    document.querySelector('#investments-base .form-select > span').style.display = 'flex';
  });
});

document.querySelectorAll('#check-objects .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#check-objects .form-select div.feddback-options-list');
    const option_input = document.querySelector('#check-objects .form-select > span > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
    document.querySelector('#check-objects .form-select > span').style.display = 'flex';
  });
});

document.querySelectorAll('#prices-and-benefits .form-select div.feddback-options-list > span.option').forEach(option => {
  option.addEventListener('click', function() {
    const option_text = option.textContent;
    const option_list = document.querySelector('#prices-and-benefits .form-select div.feddback-options-list');
    const option_input = document.querySelector('#prices-and-benefits .form-select > span > span');

    option_list.style.display = 'none';
    option_input.textContent = option_text;
    option_input.classList.add('selected');
    document.querySelector('#prices-and-benefits .form-select > span').style.display = 'flex';
  });
});

document.querySelectorAll('#investments-base .form-select > span').forEach(span => {
  span.addEventListener('click', function() {
    const option_list = document.querySelector('#investments-base .form-select div.feddback-options-list');

    option_list.style.display = '';
    span.style.display = 'none';
  });
});

document.querySelectorAll('#investments-base .form-agreement svg').forEach(input => {
  input.addEventListener('click', function() {
    const icon = document.querySelector('#investments-base .form-agreement svg');
    const button = document.querySelector('#investments-base .form-button');

    console.log('click');
    if (icon.style.opacity == 0) {
      icon.style.opacity = 1;
      button.classList.add('active');
    } else {
      icon.style.opacity = 0;
      button.classList.remove('active');
    }
  })
})

document.querySelectorAll('#prices-and-benefits .form-agreement svg').forEach(input => {
  input.addEventListener('click', function() {
    const icon = document.querySelector('#prices-and-benefits .form-agreement svg');
    const button = document.querySelector('#prices-and-benefits .form-button');

    console.log('click');
    if (icon.style.opacity == 0) {
      icon.style.opacity = 1;
      button.classList.add('active');
    } else {
      icon.style.opacity = 0;
      button.classList.remove('active');
    }
  })
})

document.querySelectorAll('#check-objects .form-agreement svg').forEach(input => {
  input.addEventListener('click', function() {
    const icon = document.querySelector('#check-objects .form-agreement svg');
    const button = document.querySelector('#check-objects .form-button');

    console.log('click');
    if (icon.style.opacity == 0) {
      icon.style.opacity = 1;
      button.classList.add('active');
    } else {
      icon.style.opacity = 0;
      button.classList.remove('active');
    }
  })
})

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
let lastScrollTime = 0;
let firstTransition = true;
let lastTransition = true;

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

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll(delay = 1000) {
  setTimeout(() => {
    document.body.style.overflow = '';
  }, delay); // Включаем скролл с заданной задержкой
}

// function handleScroll(event) {
//   const section = document.querySelector('section#attractive-direction');
//   const wrapper = section?.querySelector('div.wrapper1920');
//   const factsWrapper = section?.querySelector('.facts-wrapper');
//   const currentFact = document.querySelector('.fact-container.current');
//   if (!section || !wrapper || !factsWrapper || !currentFact) return;

//   const paddingLeft = parseFloat(getComputedStyle(wrapper).paddingLeft);
//   const factsTop = factsWrapper.getBoundingClientRect().top;
//   const sectionBottom = section.getBoundingClientRect().bottom;
//   const viewportHeight = window.innerHeight;

//   // Проверяем, достиг ли верхний край экрана верхней границы facts-wrapper с учетом padding-left
//   if (factsTop <= paddingLeft && factsTop > 0 && !currentFact.previousElementSibling) {
//     console.log("top is here");
//     if (!firstTransition) {
//       disableScroll();
//       enableScroll();
//       const now = Date.now();
//       if (now - lastScrollTime >= 1000) {
//         lastScrollTime = now;
        
//         if (event.deltaY > 0) {
//           showNextFact();
//         } else {
//           showPreviousFact();
//         }
//       }
//     }
//     return; // Прерываем обработку, чтобы избежать смены слайдов раньше времени
//   }

//   // Проверяем, достиг ли нижний край секции нижнего края экрана
//   if (sectionBottom >= viewportHeight && !currentFact.nextElementSibling) {
//     console.log("bottom is here");
//     if (!lastTransition) {
//       disableScroll();
//       enableScroll();
//       const now = Date.now();
//       if (now - lastScrollTime >= 1000) {
//         lastScrollTime = now;
        
//         if (event.deltaY > 0) {
//           showNextFact();
//         } else {
//           showPreviousFact();
//         }
//       }
//     }
//     return; // Прерываем обработку
//   }
// }

// window.addEventListener('wheel', handleScroll, { passive: false });
// window.addEventListener('DOMContentLoaded', enableScroll);

// function showNextFact() {
//   const current = document.querySelector('.fact-container.current');
//   const lastFact = document.querySelector('.last-fact-container');
//   const next = current?.nextElementSibling?.classList.contains('fact-container') ? current.nextElementSibling : null;

//   if (next) {
//     current?.classList.remove('current');
//     next?.classList.add('current');
//   }

//   if (firstTransition && current?.classList.contains('fact-container') && !current.previousElementSibling) {
//     firstTransition = false;
//     console.log("show next is here");
//     disableScroll();
//     enableScroll(1000);
//   }

//   lastFact.style.opacity = (!next || !next.nextElementSibling) ? 1 : 0;
// }

// function showPreviousFact() {
//   const current = document.querySelector('.fact-container.current');
//   const previous = current?.previousElementSibling?.classList.contains('fact-container') ? current.previousElementSibling : null;
//   const lastFact = document.querySelector('.last-fact-container');

//   if (previous) {
//     current?.classList.remove('current');
//     previous?.classList.add('current');
//   }

//   if (lastTransition && current?.classList.contains('fact-container') && !current.nextElementSibling) {
//     lastTransition = false;
//     console.log("show previous is here");
//     disableScroll();
//     enableScroll(1000);
//   }

//   lastFact.style.opacity = 0;
// }


// slider first page
const slider = document.querySelector(".offers-content");
const slides = Array.from(document.querySelectorAll(".offer"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const currentNumber = document.querySelector(".current-number");
const totalNumber = document.querySelector(".total-number");

const slideWidth = -25.83; // Перемещение с учетом ширины блока и gap в vw

slider.style.transform = `translateX(0vw)`;

totalNumber.textContent = `/0${slides.length}`;

let currentIndex = 1;
const updateCounter = () => {
    currentNumber.textContent = `0${currentIndex}`;
};

const moveSlide = () => {
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = `translateX(${slideWidth}vw)`;
};

const moveSlideBack = () => {
  slider.style.transition = "none";
  slider.style.transform = `translateX(${slideWidth}vw)`;
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
};

let autoSlideInterval;
const slideDuration = 400; // Длительность анимации
const autoSlideDelay = 3000; // Интервал автоматического переключения

function moveSlideForward() {
    moveSlide();
    setTimeout(() => {
        slider.style.transition = "none";
        slider.appendChild(slider.firstElementChild);
        slider.style.transform = "translateX(0vw)";
        currentIndex = (currentIndex % slides.length) + 1;
        updateCounter();

        // Восстанавливаем transition после перестановки элементов
        setTimeout(() => {
            slider.style.transition = "";
        }, 50);
    }, slideDuration);
}

function startAutoSlide() {
    clearInterval(autoSlideInterval); // Сброс текущего таймера
    autoSlideInterval = setInterval(moveSlideForward, autoSlideDelay);
}

// Обработчик кнопки
nextBtn.addEventListener("click", () => {
    moveSlideForward();
    startAutoSlide(); // Перезапуск таймера после ручного переключения
});

// Запуск автоматического слайдера при загрузке
startAutoSlide();

prevBtn.addEventListener("click", () => {
  moveSlideBack();
  setTimeout(() => {
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = `translateX(0vw)`;
    currentIndex = (currentIndex - 2 + slides.length) % slides.length + 1;
    updateCounter();
  }, 100);
});

updateCounter();

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.querySelector(".language-selector");
  const dropdown = document.querySelector(".lang-dropdown");
  const arrow = document.querySelector(".arrow");

  selector.addEventListener("click", (event) => {
      if (!event.target.closest(".lang-dropdown")) {
          selector.classList.toggle("open");
      }
  });

  document.addEventListener("click", (event) => {
      if (!selector.contains(event.target)) {
          selector.classList.remove("open");
      }
  });
});

// slider first page end

document.querySelector('div#choose-property .form-section .close-popup').addEventListener('click', function() {
  document.getElementById('choose-property').style.display = 'none';
});

document.querySelector('div#choose-property').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('div.yellow-link').addEventListener('click', function() {
  document.getElementById('choose-property').style.display = 'flex';
});

document.querySelector('div#personal-consultation .form-section .close-popup').addEventListener('click', function() {
  document.getElementById('personal-consultation').style.display = 'none';
});

document.querySelector('div#personal-consultation').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('#best-points .cta button').addEventListener('click', function() {
  document.getElementById('personal-consultation').style.display = 'flex';
});

document.querySelector('div#faq-form .form-section .close-popup').addEventListener('click', function() {
  document.getElementById('faq-form').style.display = 'none';
});

document.querySelector('div#faq-form').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('.faq-ask-question span').addEventListener('click', function() {
  document.getElementById('faq-form').style.display = 'flex';
});

document.querySelector('footer .btn-ask').addEventListener('click', function() {
  document.getElementById('faq-form').style.display = 'flex';
});


document.querySelector('div#phuket-future-guide .close-popup').addEventListener('click', function() {
  document.getElementById('phuket-future-guide').style.display = 'none';
});

document.querySelector('div#phuket-future-guide').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('.phuket-future-guide-form-link').addEventListener('click', function() {
  document.getElementById('phuket-future-guide').style.display = 'flex';
});

document.querySelector('div#areas-and-beaches-guide .close-popup').addEventListener('click', function() {
  document.getElementById('areas-and-beaches-guide').style.display = 'none';
});

document.querySelector('div#areas-and-beaches-guide').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('.areas-and-beaches-guide-form-link').addEventListener('click', function() {
  document.getElementById('areas-and-beaches-guide').style.display = 'flex';
});

document.querySelector('div#forms-of-ownerships-guide .close-popup').addEventListener('click', function() {
  document.getElementById('forms-of-ownerships-guide').style.display = 'none';
});

document.querySelector('div#forms-of-ownerships-guide').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('.forms-of-ownerships-guide-form-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('forms-of-ownerships-guide').style.display = 'flex';
});

document.querySelector('div#special-offer-form .form-section .close-popup').addEventListener('click', function() {
  document.getElementById('special-offer-form').style.display = 'none';
});

document.querySelector('div#special-offer-form').addEventListener('click', function(event) {
  if (!event.target.closest('.form-container')) {
      this.style.display = 'none';
  }
});

document.querySelector('.offer-button').addEventListener('click', function() {
  document.getElementById('special-offer-form').style.display = 'flex';
});