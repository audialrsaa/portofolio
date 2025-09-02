// Fungsi untuk menggulir ke bagian tertentu pada halaman
 function scrollToContent(section) {
    document.getElementById(section).scrollIntoView({behavior:"smooth"}); // Menggulir secara halus ke elemen dengan ID yang diberikan
  }

  // Fungsi untuk menampilkan atau menyembunyikan menu navigasi pada tampilan mobile
  function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu'); // Mengambil elemen menu navigasi
    const burgerMenu = document.querySelector('.burger-menu');  // Mengambil elemen tombol burger menu
  
    // Toggle kelas "active" untuk menu dan tombol burger
    navMenu.classList.toggle('active'); // Menambah atau menghapus kelas "active" pada menu navigasi
    burgerMenu.classList.toggle('active'); // Menambah atau menghapus kelas "active" pada tombol burger
  }
  

  // Event listener yang dijalankan setelah DOM sepenuhnya dimuat
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-actionn"); // Mengambil elemen form berdasarkan kelasnya

    // Menambahkan event listener untuk menangani pengiriman formulir
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman formulir secara default (refresh halaman)
      const formAction = form.action; // Mendapatkan URL aksi dari atribut "action" pada form
      const formData = new FormData(form); // Mengumpulkan data dari form

      // Mengirim data form menggunakan metode fetch
      fetch(formAction, {
        method: "POST", // Menggunakan metode POST untuk pengiriman data
        body: formData, // Data yang akan dikirim adalah isi form
        headers: {
          Accept: "application/json", // Menerima respons dalam format JSON
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Pesan berhasil dikirim!"); // Notifikasi sukses jika respons berhasil
            form.reset(); // Mengosongkan formulir setelah pengiriman berhasil
          } else {
            alert("Gagal mengirim pesan. Coba lagi nanti."); // Notifikasi gagal jika ada masalah dengan respons
          }
        })
        .catch((error) => {
          console.error("Kesalahan:", error); // Menampilkan kesalahan di konsol jika terjadi error
          alert("Terjadi kesalahan. Coba lagi nanti."); // Notifikasi jika ada kesalahan dalam pengiriman
        });
    });
  });


  // contact
document.addEventListener("DOMContentLoaded", function () { // Tunggu sampai DOM selesai dimuat
  const form = document.querySelector(".contact-form"); // Ambil elemen formulir berdasarkan kelasnya

  form.addEventListener("submit", function (event) { // Tambahkan event listener untuk submit
      event.preventDefault(); // Mencegah halaman refresh otomatis bawaan saat formulir dikirim
      const formAction = form.action; // Ambil URL tujuan pengiriman formulir (dari atribut action)
      const formData = new FormData(form); // Ambil semua data dari input formulir

      // Kirim formulir ke server menggunakan Fetch API
      fetch(formAction, {
          method: "POST", // Metode pengiriman formulir (POST)
          body: formData, // Data formulir yang dikirim
          headers: {
              Accept: "application/json", // Memberitahu server untuk mengembalikan respons JSON
          },
      })
          .then((response) => {
              if (response.ok) { // Jika respons dari server berhasil
                  alert("Pesan berhasil dikirim!"); // Tampilkan notifikasi berhasil
                  location.reload(); // Refresh halaman setelah pesan terkirim
              } else {
                  alert("Gagal mengirim pesan. Coba lagi nanti."); // Tampilkan pesan jika gagal
              }
          })
          .catch((error) => {
              console.error("Kesalahan:", error); // Log kesalahan ke konsol untuk debugging
              alert("Terjadi kesalahan. Coba lagi nanti."); // Tampilkan pesan kesalahan kepada pengguna
          });
  });
});

// document.addEventListener("DOMContentLoaded", ... )
// Menunggu halaman selesai dimuat sebelum menjalankan JavaScript. Ini memastikan elemen HTML sudah tersedia.

// const form = document.querySelector(".contact-form");
// Mengambil elemen <form> dengan kelas contact-form untuk diproses.

// form.addEventListener("submit", function (event) { ... });
// Menambahkan listener untuk menangani event submit dari formulir.

// event.preventDefault();
// Mencegah perilaku default browser, seperti reload otomatis.

// const formAction = form.action;
// Mendapatkan URL dari atribut action formulir (https://formspree.io/f/xpwzlnaa).

// const formData = new FormData(form);
// Mengambil semua data dari input, textarea, atau elemen lain dalam formulir.

// fetch(formAction, { ... })
// Mengirim data ke URL yang diambil dari atribut action.

// method: "POST": Menentukan metode HTTP POST untuk pengiriman.
// body: formData: Data formulir yang dikirim ke server.
// headers: { Accept: "application/json" }: Meminta respons berupa JSON dari server.
// response.ok
// Mengecek apakah respons server menunjukkan keberhasilan (status HTTP 200–299).

// alert("Pesan berhasil dikirim!")
// Menampilkan notifikasi bahwa pesan berhasil dikirim.

// location.reload();
// Me-refresh halaman setelah server berhasil menerima pesan.

// .catch((error) => { ... })
// Menangkap kesalahan saat mencoba mengirimkan formulir, misalnya koneksi internet terputus.
