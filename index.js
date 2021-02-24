var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
