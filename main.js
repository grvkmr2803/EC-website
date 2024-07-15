const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = setInterval(nextSlide, 8000); // Change slide every 3 seconds

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

function nextSlide() {
    currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}