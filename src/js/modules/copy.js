export function copy() {
  const copyBtnCareers = document.querySelectorAll('.copywriter__btn-click');
  const copyBtnCourse = document.querySelector('.course-connection__btn-js ');

  const copy = () => {
    const copyText = document.getElementById('copy');
    copyText.select();
    document.execCommand('copy');
  };

  if (copyBtnCareers) {
    copyBtnCareers.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        copy();
      });
    });
  }

  if (copyBtnCourse) {
    copyBtnCourse.addEventListener('click', (e) => {
      e.preventDefault();
      copy();
    });
  }
}
