import Swiper, { Pagination } from 'swiper';

export function courseBodySwiper() {
  const basicsSwiper = document.querySelector('.course-body__basics-swiper');
  const marketSwiper = document.querySelector('.course-body__market-swiper');
  const toolsSwiper = document.querySelector('.course-body__tools-swiper');
  const strategySwiper = document.querySelector('.course-body__strategy-swiper');
  const risksSwiper = document.querySelector('.course-body__risks-swiper');
  const caseSwiper = document.querySelector('.course-body__case-swiper');

  if ((basicsSwiper, marketSwiper, toolsSwiper, strategySwiper, risksSwiper, caseSwiper)) {
    const basics = () => {
      if (window.innerWidth <= 900 && basicsSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(basicsSwiper, {
          modules: [Pagination],
          pagination: {
            el: '.course-body__basics-pagination',
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
        basicsSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        basicsSwiper.dataset.mobile = 'false';
        if (basicsSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const market = () => {
      if (window.innerWidth <= 900 && marketSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(marketSwiper, {
          modules: [Pagination],
          pagination: {
            el: '.course-body__market-pagination',
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
        marketSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        marketSwiper.dataset.mobile = 'false';
        if (marketSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const tools = () => {
      if (window.innerWidth <= 900 && toolsSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(toolsSwiper, {
          modules: [Pagination],
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 32,
          pagination: {
            el: '.course-body__tools-pagination',
            clickable: true,
          },
        });
        toolsSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        toolsSwiper.dataset.mobile = 'false';
        if (toolsSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const strategy = () => {
      if (window.innerWidth <= 900 && strategySwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(strategySwiper, {
          modules: [Pagination],
          pagination: {
            el: '.course-body__strategy-pagination',
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
        strategySwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        strategySwiper.dataset.mobile = 'false';
        if (strategySwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const risks = () => {
      if (window.innerWidth <= 900 && risksSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(risksSwiper, {
          modules: [Pagination],
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 32,
          pagination: {
            el: '.course-body__risks-pagination',
            clickable: true,
          },
        });
        risksSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        risksSwiper.dataset.mobile = 'false';
        if (risksSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    const caseSw = () => {
      if (window.innerWidth <= 900 && caseSwiper.dataset.mobile == 'false') {
        var swiper = new Swiper(caseSwiper, {
          modules: [Pagination],
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 32,
          pagination: {
            el: '.course-body__case-pagination',
            clickable: true,
          },
        });
        caseSwiper.dataset.mobile = 'true';
      }

      if (window.innerWidth > 900) {
        caseSwiper.dataset.mobile = 'false';
        if (caseSwiper.classList.contains('swiper-container-initialized')) {
          swiper.destroy();
        }
      }
    };

    basics();
    market();
    tools();
    strategy();
    risks();
    caseSw();

    window.addEventListener('resize', () => {
      basics();
      market();
      tools();
      strategy();
      risks();
      caseSw();
    });
  }
}
