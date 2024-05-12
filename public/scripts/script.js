// Enable Button Filter Car
document.addEventListener("DOMContentLoaded", function () {
  const driverInput = document.getElementById("driver")
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const submitButton = document.getElementById("submit-btn");

  function toggleSubmitButton() {
    if (driverInput.value && dateInput.value && timeInput.value) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  driverInput.addEventListener("input", toggleSubmitButton);
  dateInput.addEventListener("input", toggleSubmitButton);
  timeInput.addEventListener("input", toggleSubmitButton);
});

// Mobile Side Nav Menu
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');

openMenu.addEventListener('click', () => {
  sideMenu.classList.toggle('hidden');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.toggle('hidden');
});

// Accordion
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const arrowIcon = button.querySelector('.arrow-icon');

  content.classList.toggle('hidden');
  arrowIcon.classList.toggle('rotate-180');
}

// Carousel
// const swiperEl = document.querySelector('swiper-container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentIndex = 0;

// Sweeperjs
// nextButton.addEventListener('click', () => {
//   swiperEl.swiper.slideNext();
// });

// prevButton.addEventListener('click', () => {
//   swiperEl.swiper.slidePrev();
// });

// DOMjs
const showItem = (index) => {
  testimonialItems.forEach(item => item.classList.add('hidden'));
  testimonialItems[index].classList.remove('hidden');
};

showItem(currentIndex);

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
  showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  showItem(currentIndex);
});