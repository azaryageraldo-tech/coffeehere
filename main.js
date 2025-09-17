// === KODE UNTUK NAVIGASI MOBILE ===

document.addEventListener('DOMContentLoaded', function() {
    const menuOpenBtn = document.getElementById("menu-open-button");
    const menuCloseBtn = document.getElementById("menu-close-button");
    const navMenu = document.querySelector(".nav-menu");

    if (menuOpenBtn && navMenu) {
        menuOpenBtn.addEventListener("click", () => {
            navMenu.classList.add("open");
        });
    }

    if (menuCloseBtn && navMenu) {
        menuCloseBtn.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    }
});