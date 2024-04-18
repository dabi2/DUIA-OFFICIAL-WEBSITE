let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelector('.slides');
    const slideCount = slides.childElementCount;

    currentSlide = (currentSlide + n + slideCount) % slideCount;
    const translateX = -currentSlide * 100;
    
    slides.style.transform = `translateX(${translateX}%)`;
}

// Optional: you can add automatic slide transitions
setInterval(() => {
    changeSlide(1);
}, 3000); // Change slide every 3 seconds
