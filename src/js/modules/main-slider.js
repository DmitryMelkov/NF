import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';

export function mainSlider() {
  var swiper = new Swiper('.main__swiper', {
    modules: [Pagination, Navigation, Autoplay],
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    speed: 1000,

    navigation: {
      nextEl: '.main__btn-next',
      prevEl: '.main__btn-prev',
    },
    pagination: {
      el: '.main__pagination',
    },
  });

  const link1 = document.querySelector('.tab-slide-1');
  const link2 = document.querySelector('.tab-slide-2');
  const link3 = document.querySelector('.tab-slide-3');
  const link4 = document.querySelector('.tab-slide-4');

  if ((link1, link2)) {
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
  }

  const sliderBtnHeight = () => {
    const sliderContent = document.querySelector('.main__swiper-slide');

    const imgContent = document.querySelector('.main__swiper-img-content');
    const sliderBtns = document.querySelector('.main__btns');

    const textContent = document.querySelector('.main__swiper-content');
    const sliderPagination = document.querySelector('.main__pagination');

    if ((sliderContent, imgContent, sliderBtns, textContent, sliderPagination)) {
      let slideEmpty = sliderContent.offsetHeight - (imgContent.offsetHeight + textContent.offsetHeight);

      let imgHeight = Math.floor(imgContent.offsetHeight / 2) + 'px';
      let textHeight = Math.floor(textContent.offsetHeight + slideEmpty + 20) + 'px';

      sliderBtns.style.top = imgHeight;
      sliderPagination.style.bottom = textHeight;
    }
  };

  sliderBtnHeight();

  window.addEventListener('resize', sliderBtnHeight);

  const tabsBtn = document.querySelectorAll('.tab__nav-btn');
  const tabsItems = document.querySelectorAll('.tab__items');
  if (tabsBtn) {
    tabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          tabsBtn.forEach(function (item) {
            item.classList.remove('active');
          });
          tabsItems.forEach(function (item) {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
  }
}
