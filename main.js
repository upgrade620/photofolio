
const openNavBtn = document.querySelector(".open__nav__btn");
const closeNavBtn = document.querySelector(".close__nav__btn");
const navListItems = document.querySelector(".nav__list__items");

openNavBtn.addEventListener('click', openSideMenu)
closeNavBtn.addEventListener('click', closeSideMenu)

function openSideMenu() {
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block";
    navListItems.style.display = "flex"
}

function closeSideMenu() {
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none";
    navListItems.style.display = "none"
}

const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    navBar.classList.toggle('change__navbar__theme__onscroll', window.scrollY > 0)
})

