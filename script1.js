const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Hapus semua tab dan konten yang aktif
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Aktifkan tab dan konten yang dipilih
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});
