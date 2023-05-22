const toggleMenu = document.querySelector(".toggle-menu");
const mobileNav = document.querySelector(".header-actions");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
});