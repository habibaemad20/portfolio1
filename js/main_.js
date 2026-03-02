
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
  nav.classList.toggle("active");
};
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});