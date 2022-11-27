export function buble() {
  function createBuble() {
    const header = document.querySelector('.header-bubles');
    if (header) {
      const createElement = document.createElement('span');
      let size = Math.random() * 60;
      let widthHeader = header.offsetWidth;

      createElement.style.width = 20 + size + 'px';
      createElement.style.height = 20 + size + 'px';
      createElement.style.left = Math.random() * (widthHeader - 50) + 'px';

      createElement.classList.add('buble');

      header.appendChild(createElement);
      setTimeout(() => {
        createElement.remove();
      }, 2000);
    }


  }

  setInterval(createBuble, 50);
}
