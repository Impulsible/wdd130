document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('hamburger');
  const nav = document.getElementById('navMenu');

  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const open = nav.classList.toggle('active');   // show/hide nav
    document.body.classList.toggle('no-scroll', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Last Modified Date
document.getElementById("lastModified").textContent =
  "Last Updated: " + document.lastModified;

// scripts/nav.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
});

function scrollGallery(direction) {
  const gallery = document.querySelector('.adventure-gallery');
  const scrollAmount = 300; // Adjust as needed
  gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    navBackdrop.classList.toggle('active');
  });

  navBackdrop.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navBackdrop.classList.remove('active');
  });
});
