document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY === 0) {
      nav.classList.remove('nav-hide');
    } else {
      nav.classList.add('nav-hide');
    }
  });
});
