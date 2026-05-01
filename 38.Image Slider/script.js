const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        showSlide(index);
    });
});

// Auto slide
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
