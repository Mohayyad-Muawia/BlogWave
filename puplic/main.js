let menuIcon = document.querySelector('.menuIcon');
let closeIcon = document.querySelector('.closeIcon');

let menu = document.querySelector('nav ul');

menuIcon.addEventListener('click',  openMenu);
closeIcon.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.add('opened');
}
function closeMenu() {
    menu.classList.remove('opened');
}
