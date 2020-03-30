let button = document.querySelector('.js-nav-button');
let menu = document.querySelector('.js-menu');
let body = document.querySelector('body');

button.addEventListener('click', function () {
    this.classList.toggle('opened');
    menu.classList.toggle('opened');
    body.classList.toggle('menu-opened');
});

document.querySelectorAll('.js-link').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
        });

        if (window.matchMedia('(max-width: 768px)').matches) {
            button.classList.toggle('opened');
            menu.classList.toggle('opened');
            body.classList.toggle('menu-opened');
            console.log('matches');
        }
    });
});