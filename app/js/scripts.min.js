// menu button

let button = document.querySelector('.js-nav-button');
let menu = document.querySelector('.js-menu');
let body = document.querySelector('body');

button.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
    body.classList.toggle('menu-opened');
});
