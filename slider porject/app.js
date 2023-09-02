const slides = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;

// Showing the slide
function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

// Click for slide
function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Interval

const intervalTime = 4000;
let sliderInterval;

function startSliderInterval() {
    sliderInterval = setInterval(nextSlide, intervalTime)
}
startSliderInterval()