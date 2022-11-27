import tippy from 'tippy.js';

export function listCollections() {
  //tooltip
  tippy('.raiting-btn-js', {
    trigger: 'click',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo mollitia, vel laboriosam explicabo odio totam veritatis velit suscipit libero quasi iure animi numquam nulla sunt sit, nesciunt quam, est delectus.',
  });
  tippy('.bottom-btn-js', {
    trigger: 'click',
    content: 'I am current content',
  });

  //hover
  const links = document.querySelectorAll('.list-collections__bottom-list-link');

  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
  // const bottomList1 = document.querySelector('.bottom-list-1');
  // const bottomList2 = document.querySelector('.bottom-list-2');
  // const bottomList3 = document.querySelector('.bottom-list-3');

  const linkBtn = document.querySelectorAll('.bottom-link');

  if (linkBtn) {
    linkBtn.forEach(function (item) {
      item.addEventListener('mouseover', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('href');
        let currentlink = document.querySelector(tabId);
        currentlink.classList.add('active');
      });
      item.addEventListener('mouseout', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('href');
        let currentlink = document.querySelector(tabId);
        currentlink.classList.remove('active');
      });
    });
  }

  //tabs
  const tabsBtn = document.querySelectorAll('.list-collections__tabs-btn');
  const tabsItems = document.querySelectorAll('.list-collections__tabs-item');

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
