let $cursor = $(".cursor");

const $listHover = $("span ,h1 ,h3");

function moveCircle(e) {
  TweenLite.to($cursor, 0.3, {
    x: e.clientX,
    y: e.clientY,
  });
  console.log({ x: e.clientX, y: e.clientY });
}
// {
//   x: e.clientX,
//   y: e.clientY,
// }
function hoverFunc(e) {
  TweenLite.to($cursor, 0.3, {
    scale: 3,
  });
}
function unHoverFunc(e) {
  TweenLite.to($cursor, 0.3, {
    scale: 1,
  });
}

let swiper = new Swiper(".swiper-container", {
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
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

$(window).on("mousemove", moveCircle);
$listHover.hover(hoverFunc, unHoverFunc);
