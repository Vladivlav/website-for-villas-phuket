// Проверяем, что данные есть в переменной
if (window.specialOffersData) {
  const container = document.getElementById('offers-container');

  // Генерируем HTML для каждого офера
  window.specialOffersData.forEach(offer => {
      container.innerHTML += `
      <div class="offer">
          <div class="offer-image">
          <picture>
              <source srcset="${offer.image.desktop}" media="(min-width: 1920px)">
              <source srcset="${offer.image.desktop}" media="(min-width: 1200px) and (max-width: 1919px)">
              <source srcset="${offer.image.tablet}" media="(min-width: 768px) and (max-width: 1199px)">
              <source srcset="${offer.image.mobile}" media="(max-width: 767px)">
              <img src="${offer.image.default}" alt="${offer.image.alt}">
          </picture>
          <span class="offer-label">${offer.label}</span>
          </div>
          <div class="offer-info">
          <h3>${offer.title}</h3>
          <p>${offer.description}</p>
          <a href="#" class="offer-button ${offer.hasForm ? 'show-form' : ''}">
              ${offer.buttonText}
              <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2.98047H0M15 2.98047L12.973 0.980469M15 2.98047L12.973 4.98047" stroke-width="1"/>
              </svg>
          </a>
          </div>
      </div>
      `;
  });
} else {
  console.error('Данные specialOffersData не найдены или имеют неверный формат');
}