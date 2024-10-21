let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = document.querySelectorAll('.carousel-slide').length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}