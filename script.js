function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  // Sedikit jeda agar animasi transisi Tailwind terlihat mulus
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
  }, 10);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('opacity-0');
  modal.querySelector('div').classList.add('scale-95');
  // Tunggu animasi selesai baru sembunyikan elemennya
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// Mengambil elemen tombol dari HTML
const backToTopBtn = document.getElementById("backToTopBtn");

// Mendengarkan aktivitas scroll pada halaman
window.addEventListener("scroll", () => {
  // Jika halaman digulir lebih dari 400 pixel ke bawah
  if (window.scrollY > 400) {
    // Munculkan tombol dengan menghapus class yang menyembunyikannya
    backToTopBtn.classList.remove("opacity-0", "translate-y-10", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  } else {
    // Jika kembali ke atas, sembunyikan lagi tombolnya
    backToTopBtn.classList.add("opacity-0", "translate-y-10", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
  }
});

// Fungsi untuk menggulir kembali ke atas saat tombol diklik
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Memberikan efek guliran yang mulus
  });
}