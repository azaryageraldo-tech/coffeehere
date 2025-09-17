// script3.js (Diperbarui untuk Mobile)
const swiper = new Swiper(".mySwiper", { // Pastikan selectornya ".mySwiper"
  loop: true,
  spaceBetween: 30, // Sedikit jarak antar slide
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // === Tambahkan bagian ini ===
  breakpoints: {
    // Tampilkan 1 slide jika lebar layar di bawah 768px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // Tampilkan 3 slide jika lebar layar di atas 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});