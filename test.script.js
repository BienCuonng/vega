let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

// Tự động chuyển ảnh sau mỗi 3 giây
setInterval(nextSlide, 3000);
