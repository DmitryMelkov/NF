import Swiper, { Pagination } from 'swiper';

export function aboutSwiper() {
  const investionSwiper = document.querySelector('.invest__swiper');
  const introRightSwiper = document.querySelector('.intro__right-swiper');
  const analiticsSwiper = document.querySelector('.analitics__swiper');

  const questionSwiper1 = document.querySelector('.question__right-swiper-1');
  const questionSwiper2 = document.querySelector('.question__right-swiper-2');

  if ((investionSwiper, introRightSwiper, analiticsSwiper, questionSwiper1, questionSwiper2)) {
    const investion = () => {
      if (window.innerWidth <= 800 && investionSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(investionSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.invest__pagination',
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
        investionSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 800) {
        investionSwiper.dataset.mobile = 'false';
        if (investionSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };
    const introRight = () => {
      if (window.innerWidth <= 800 && introRightSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(introRightSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.intro__right-pagination',
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
        introRightSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 800) {
        introRightSwiper.dataset.mobile = 'false';
        if (introRightSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };
    const analitics = () => {
      if (window.innerWidth <= 800 && analiticsSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(analiticsSwiper, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.analitics__right-pagination',
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
        analiticsSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 800) {
        analiticsSwiper.dataset.mobile = 'false';
        if (analiticsSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };
    const answer = () => {
      if (window.innerWidth <= 800 && questionSwiper1.dataset.mobile == 'false') {
        var swiper = new Swiper(questionSwiper1, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.question__right-pagination-1',
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
        questionSwiper1.dataset.mobile = 'true';
      }

      if (window.innerWidth > 800) {
        questionSwiper1.dataset.mobile = 'false';
        if (questionSwiper1.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const question = () => {
      if (window.innerWidth <= 800 && questionSwiper2.dataset.mobile == 'false') {
        var swiper = new Swiper(questionSwiper2, {
          modules: [Pagination],
          loop: true,
          pagination: {
            el: '.question__right-pagination-2',
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
        questionSwiper2.dataset.mobile = 'true';
      }

      if (window.innerWidth > 800) {
        questionSwiper2.dataset.mobile = 'false';
        if (questionSwiper2.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    question();
    answer();
    investion();
    introRight();
    analitics();

    window.addEventListener('resize', () => {
      question();
      answer();
      investion();
      introRight();
      analitics();

    });
  }










}
