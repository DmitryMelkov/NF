import Swiper, { Navigation, Autoplay } from 'swiper';

export function courseSwiper() {
  var swiper = new Swiper('.course-intro__swiper', {
    modules: [Navigation, Autoplay],
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    speed: 1000,
    navigation: {
      nextEl: '.course-intro__next-btn',
      prevEl: '.course-intro__prev-btn',
    },
  });

  const link1 = document.querySelector('.course-intro__steps-icons-link-1');
  const link2 = document.querySelector('.course-intro__steps-icons-link-2');
  const link3 = document.querySelector('.course-intro__steps-icons-link-3');
  const link4 = document.querySelector('.course-intro__steps-icons-link-4');
  const link5 = document.querySelector('.course-intro__steps-icons-link-5');
  const link6 = document.querySelector('.course-intro__steps-icons-link-6');

  if ((link1, link2, link3, link4, link5, link6)) {
    link1.addEventListener('mouseover', function () {
      swiper.slideTo(0, 800);
    });
    link2.addEventListener('mouseover', function () {
      swiper.slideTo(1, 800);
    });
    link3.addEventListener('mouseover', function () {
      swiper.slideTo(2, 800);
    });
    link4.addEventListener('mouseover', function () {
      swiper.slideTo(3, 800);
    });
    link5.addEventListener('mouseover', function () {
      swiper.slideTo(4, 800);
    });
    link6.addEventListener('mouseover', function () {
      swiper.slideTo(5, 800);
    });
  }
}
