// slider first page
const slider        = document.querySelector(".offers-content");
const slides        = Array.from(document.querySelectorAll(".offer"));
const prevBtn       = document.querySelector(".prev-btn");
const nextBtn       = document.querySelector(".next-btn");
const currentNumber = document.querySelector(".current-number");
const totalNumber   = document.querySelector(".total-number");

const offerWidthVw = parseFloat(window.getComputedStyle(slides[0]).width);
const gapVw = parseFloat(window.getComputedStyle(slider).gap);
const totalWidthVw = -1 * (offerWidthVw + gapVw);

const slideWidth = totalWidthVw; // Перемещение с учетом ширины блока и gap в vw
let isCursorOnOffers = false;
let lastTransition = true;

slider.style.transform = `translateX(0vw)`;

totalNumber.textContent = `/0${slides.length}`;

let currentIndex = 1;
const updateCounter = () => {
    currentNumber.textContent = `0${currentIndex}`;
};

const moveSlide = () => {
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = `translateX(${slideWidth}px)`;
};

const moveSlideBack = () => {
  slider.style.transition = "none";
  slider.style.transform = `translateX(${slideWidth}px)`;
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
};

document.querySelector('section.offers').addEventListener('mouseenter', () => {
  isCursorOnOffers = true;
});

// Отслеживаем, когда курсор покидает section.offers
document.querySelector('section.offers').addEventListener('mouseleave', () => {
  isCursorOnOffers = false;
});

let autoSlideInterval;
const slideDuration = 400; // Длительность анимации
const autoSlideDelay = 5000; // Интервал автоматического переключения

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
    autoSlideInterval = setInterval(autoMoveSlideForward, autoSlideDelay);
}

function autoMoveSlideForward() {
  if (isCursorOnOffers) return;
  moveSlideForward();
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

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll(delay = 1000) {
  setTimeout(() => {
    document.body.style.overflow = '';
  }, delay);
}

function showPreviousFact() {
  const current = document.querySelector('.fact-container.current');
  const previous = current?.previousElementSibling?.classList.contains('fact-container') ? current.previousElementSibling : null;
  const lastFact = document.querySelector('.last-fact-container');

  if (previous) {
    current?.classList.remove('current');
    previous?.classList.add('current');
  }

  if (lastTransition && current?.classList.contains('fact-container') && !current.nextElementSibling) {
    lastTransition = false;
    disableScroll();
    enableScroll(1000);
  }

  lastFact.style.opacity = 0;
}

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