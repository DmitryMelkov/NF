import Swiper, { Pagination } from 'swiper';

export function partnershipsSwiper() {
  const servicesSwiper = document.querySelector('.services__swiper');
  const ambasadorsSwiper = document.querySelector('.ambasadors__swiper');

  if ((servicesSwiper, ambasadorsSwiper)) {
    const services = () => {
      if (window.innerWidth <= 900 && servicesSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(servicesSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.services__pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 32,
            },
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 32,
            },
          },
        });
        servicesSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        servicesSwiper.dataset.mobile = 'false';
        if (servicesSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const ambasadors = () => {
      if (window.innerWidth <= 900 && ambasadorsSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(ambasadorsSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.ambasadors__pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 32,
            },
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 32,
            },
          },
        });
        ambasadorsSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        ambasadorsSwiper.dataset.mobile = 'false';
        if (ambasadorsSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    services();
    ambasadors();

    window.addEventListener('resize', () => {
      services();
      ambasadors();
    });
  }
}
