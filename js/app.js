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
  commentBox &&
    commentBox.addEventListener('input', e => {
      if (e.target.scrollHeight <= 76) {
        commentBox.style.overflow = 'auto';
        autosize(commentBox);
      }
    });
});

const convertValues = value => {
  if (value >= 1000000000) {
    value = `${value / 1000000000}b`;
  } else if (value >= 1000000) {
    value = `${value / 1000000}m`;
  } else if (value >= 1000) {
    value = `${value / 1000}k`;
  }
  return value;
};

// console.log(convertValues(80000000000));

const periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000
};

const formatTime = timeCreated => {
  const diff = Date.now() - new Date(timeCreated);

  if (diff > periods.month) {
    return `${Math.floor(diff / periods.month)}m`;
  } else if (diff > periods.week) {
    return `${Math.floor(diff / periods.week)}w`;
  } else if (diff > periods.day) {
    return `${Math.floor(diff / periods.day)}d`;
  } else if (diff > periods.hour) {
    return `${Math.floor(diff / periods.hour)}h`;
  } else if (diff > periods.minute) {
    return `${Math.floor(diff / periods.minute)}m`;
  }
  return 'Just now';
};
// console.log(formatTime('2020-01-29T13:01:56.446Z'));
