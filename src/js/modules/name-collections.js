import tippy from 'tippy.js';
import Swiper, { Navigation, Pagination } from 'swiper';

export function nameCollections() {
  tippy('.name-js', {
    trigger: 'click',
    content: 'I am current content name',
  });

  const swiper = new Swiper('.name-collection__swiper', {
    modules: [Navigation, Pagination],

    loop: true,

    navigation: {
      nextEl: '.name-collection__swiper-next',
      prevEl: '.name-collection__swiper-prev',
    },
    pagination: {
      el: '.name-collection__swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 53,
      },
      659: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 53,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 53,
      },
    },
  });

  const btn = document.querySelectorAll('.name-attributes__item-btn');
  const btnItems = document.querySelectorAll('.name-attributes__item-list');
  if (btn) {
    btn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-btn');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          btn.forEach(function (item) {
            item.classList.remove('active');
          });
          btnItems.forEach(function (item) {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
  }

  const attribute = document.querySelector('.name-attributes__title-content');
  const attributeItems = document.querySelector('.name-attributes__list');

  if (attribute) {
    attribute.addEventListener('click', function () {
      attribute.classList.toggle('active');
      attributeItems.classList.toggle('active');
    });
  }
}
