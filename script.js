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
