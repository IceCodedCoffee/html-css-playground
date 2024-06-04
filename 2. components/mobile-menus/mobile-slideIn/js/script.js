const hamburger = document.querySelector('.hamburger');
const content = document.querySelector('.content');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    content.classList.toggle('active');
    mobileMenu.classList.toggle('active');

})