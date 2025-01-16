document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.col-md-4');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('animate');
        }
    });
});