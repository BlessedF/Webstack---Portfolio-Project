let currentSlide = 0;
const slides = document.querySelectorAll('.sliderItem');
const totalSlides = slides.length;

function updateSlider() {
  const sliderWrapper = document.querySelector('.sliderWrapper');
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

setInterval(nextSlide, 5000);

const buyButtons = document.querySelectorAll('.buyButton');
const paymentModal = document.querySelector('.payment');
const closeModalButton = document.querySelector('.close');

buyButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    paymentModal.style.display = 'flex';
  });
});

closeModalButton.addEventListener('click', () => {
  paymentModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === paymentModal) {
    paymentModal.style.display = 'none';
  }
});
