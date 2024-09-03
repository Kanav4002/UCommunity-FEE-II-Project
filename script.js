// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelector('.carousel-slides');
//   const prevButton = document.querySelector('.control-prev');
//   const nextButton = document.querySelector('.control-next');

//   let index = 0;
//   const totalSlides = document.querySelectorAll('.carousel-slide').length;

//   function updateCarousel() {
//     slides.style.transform = `translateX(-${index * 100}%)`;
//   }

//   prevButton.addEventListener('click', () => {
//     index = (index > 0) ? index - 1 : totalSlides - 1;
//     updateCarousel();
//   });

//   nextButton.addEventListener('click', () => {
//     index = (index < totalSlides - 1) ? index + 1 : 0;
//     updateCarousel();
//   });
// });
