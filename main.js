// menu
const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#menu-btn')
const menuBtnWhite = document.querySelector('#menuBtnWhite')
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('invisible');
    menuBtnWhite.classList.toggle('text-white');

})