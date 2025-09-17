// Inisialisasi Swiper Slider untuk Galeri
const swiper = new Swiper(".swiper", {
  effect: "coverflow", // Efek 3D modern
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Logika untuk Navbar Toggle
const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

if (menuOpenBtn && menuCloseBtn && navMenu) {
  menuOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  menuCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
}