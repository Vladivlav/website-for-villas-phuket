function applyParallax(blockSelector, intensity = 300) {
  const block = document.querySelector(blockSelector);
  const parallax = block.querySelector(".parallax-bg");

  if (!block || !parallax) return;

  const rect = block.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const blockHeight = block.offsetHeight;
  const imageHeight = parallax.offsetHeight;

  // Обновленный коэффициент скорости: Чем больше разница, тем выше интенсивность
  const scrollRatio = imageHeight > blockHeight ? imageHeight / blockHeight : 1;

  if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const translateY = (progress - 0.5) * intensity * scrollRatio;

      parallax.style.transform = `translateY(${translateY}px)`;
  }
}

window.addEventListener("scroll", function () {
  applyParallax("#quote-with-four-men", 300);
  applyParallax("#investments-base", 300);
  applyParallax("#check-objects", 300);
  applyParallax("#tenth-section .content", 300);
});