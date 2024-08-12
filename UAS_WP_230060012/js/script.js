document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle_230060012');
    const navLinks = document.querySelector('.nav-links_230060012');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active_230060012');
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, 3000); 
});
