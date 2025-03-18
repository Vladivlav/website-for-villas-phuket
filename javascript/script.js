
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

document.addEventListener('click', function(event) {
  const buttons = Array.from(document.querySelectorAll('.offer-button'));
  const clickedButton = event.target.closest('.offer-button'); // Определяем, кликнули ли по кнопке

  event.preventDefault();
  if (!clickedButton || clickedButton !== buttons[0]) return; // Если не первая, выходим

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
