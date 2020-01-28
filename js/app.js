document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY === 0) {
      nav.classList.remove('nav-hide');
    } else {
      nav.classList.add('nav-hide');
    }
  });

  const commentBox = document.getElementById('addComment');
  commentBox.addEventListener('input', e => {
    if (e.target.scrollHeight <= 76) {
      commentBox.style.overflow = 'auto';
      autosize(commentBox);
    }
  });
});
