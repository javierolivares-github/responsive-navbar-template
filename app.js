// (5) - Logic for the toggle menu
const navbarMenu = document.querySelector('.navbar__menu');
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});