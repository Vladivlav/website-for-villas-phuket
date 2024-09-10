const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            item.querySelector('::after').textContent = '+';
        } else {
            answer.style.display = 'block';
            item.querySelector('::after').textContent = '−';
        }
    });
});


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