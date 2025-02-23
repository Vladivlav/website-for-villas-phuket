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


function handleScroll(event) {
    if (isScrolling) return;
    
    if (factIndex < totalSlides - 1 && event.deltaY > 0) {
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

factsSlider.addEventListener('wheel', handleScroll, { passive: false });

