import Swiper, { Navigation } from 'swiper';

export function ourPartnersSwiper() {
  const swiper = new Swiper('.our-partners__swiper', {
    modules: [Navigation],

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.our-partners__next',
      prevEl: '.our-partners__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });
}
