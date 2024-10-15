const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById("copyright").textContent = `© ${currentYear} Your Website Name`;

document.getElementById("lastModified").textContent = `Last updated: ${lastModified}`;
const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

hamburgerBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    hamburgerBtn.innerHTML = 'X';
  } else {
    hamburgerBtn.innerHTML = '&#9776;';
  }
});
