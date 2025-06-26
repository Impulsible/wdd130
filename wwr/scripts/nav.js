// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
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
