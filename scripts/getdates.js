const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById("copyright").textContent = `© ${currentYear} Your Website Name`;

document.getElementById("lastModified").textContent = `Last updated: ${lastModified}`;
