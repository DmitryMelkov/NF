export function smooth() {
  const anchors = document.querySelectorAll('.course-intro__steps-icons-link');
  // Цикл по всем ссылкам
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
      document.querySelector(goto).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
