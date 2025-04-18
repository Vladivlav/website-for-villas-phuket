const factsSlider = document.querySelector('.sticky-container');
let factIndex = 0;
let isScrolling = false;
const totalSlides = document.querySelectorAll('.fact-container').length;

function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "";  
}

function showNextFact(event) {
  const current = document.querySelector('.fact-container.current');
  const lastFact = document.querySelector('.last-fact-container');
  const factContainers = document.querySelectorAll('.fact-container'); // Получаем все элементы
  const lastFactContainer = factContainers[factContainers.length - 1]; // Берём последний элемент

  if (event && event.target.closest('span.fact-button')) {
    return; // Прерываем выполнение функции, если клик был по кнопке
  }

  let next;
  if (current.nextElementSibling && current.nextElementSibling.classList.contains('fact-container')) {
      next = current.nextElementSibling;
  } else {
      next = factContainers[0];
      lastFact.style.opacity = 0
  }

  current.classList.remove('current');
  next.classList.add('current');

  if (next == lastFactContainer) {
    lastFact.style.opacity = 1;
  }
}

function handleScroll(event) {
    if (isScrolling) return;
    
    if (factIndex < totalSlides - 1 && event.deltaY > 0) {
      console.log("I am here");
      isScrolling = true;
      showNextFact();
      factIndex++;
      lockScroll();
      event.preventDefault();
    } else if (factIndex > 0 && event.deltaY < 0) {
      isScrolling = true;
      showPreviousFact();
      factIndex--;
      lockScroll();
      event.preventDefault();
    } else {
      unlockScroll();
      // Позволяем странице двигаться дальше
      return;
    }
  
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  
    event.preventDefault(); // Блокируем скролл, пока листаем слайды
  }

factsSlider.addEventListener('scroll', handleScroll, { passive: false });
factsSlider.addEventListener('wheel', handleScroll, { passive: false });
factsSlider.addEventListener('touchmove', handleScroll, { passive: false });

function handleAllScroll(event) {
  const element = document.getElementById('attractive-direction');
  const rect = element.getBoundingClientRect();
  console.log(rect.top);
  if (rect.top <= 0 && event.deltaY > 0 && factIndex < totalSlides - 1) {
    event.preventDefault();
    window.scrollBy(0, rect.top);
  } else if (rect.top > 0 && event.deltaY < 0 && factIndex == totalSlides - 1) {
    event.preventDefault();
    window.scrollBy(0, rect.top);
  }
}

window.addEventListener('scroll', handleAllScroll, { passive: false });
window.addEventListener('wheel', handleAllScroll, { passive: false });
window.addEventListener('touchmove', handleAllScroll, { passive: false });
