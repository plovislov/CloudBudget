// menu button

let button = document.querySelector('.js-nav-button');
let menu = document.querySelector('.js-menu');

button.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
});
