import feather from 'feather-icons';

feather.replace();

document.querySelector('.duckduckgo .feather').addEventListener('click', () => {
  document.querySelector('.duckduckgo form').submit();
});

const clock = document.getElementsByClassName('clock')[0];
const date = document.getElementsByClassName('date')[0];

function getClock(d) {
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  return `${h >= 10 ? h : '0' + h}:${m >= 10 ? m : '0' + m}:${
    s >= 10 ? s : '0' + s
  }`;
}

function getDate(d) {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  return `${day >= 10 ? day : '0' + day}/${
    month >= 10 ? month : '0' + month
  }/${d.getFullYear()}`;
}

const d = new Date();
clock.innerText = getClock(d);
date.innerText = getDate(d);
setInterval(() => {
  const d = new Date();
  clock.innerText = getClock(d);
}, 1000);
setInterval(() => {
  const d = new Date();
  date.innerText = getDate(d);
}, 60000);
