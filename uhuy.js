  const sections = [
    document.querySelector("#bagisi"),
    document.querySelector("#bagisi2"),
    document.querySelector("#bagisi3"),
    document.querySelector("#bagisi4")
  ];

  const navLinks = document.querySelectorAll(".af ul li a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navLinks.forEach(function(link) {
        link.classList.remove("aktif");
      });
      this.classList.add("aktif");
    });
  });

  window.addEventListener("scroll", function() {
    const currentScrollPosition = window.scrollY;

    sections.forEach(function(section, index) {
      if (
        section.offsetTop <= currentScrollPosition + 30 &&
        section.offsetTop + section.offsetHeight > currentScrollPosition + 30
      ) {
        navLinks.forEach(function(link) {
          link.classList.remove("aktif");
        });
        navLinks[index].classList.add("aktif");
      }
    });
  });

  // Mengambil referensi ke elemen div yang akan dimunculkan
  const divsToBeShown = document.querySelectorAll('.show-on-scroll');

  // Menambahkan event listener untuk window scroll event
  window.addEventListener('scroll', function() {
    // Mengiterasi melalui setiap elemen div
    for (let i = 0; i < divsToBeShown.length; i++) {
      const currentDiv = divsToBeShown[i];
      // Jika user scroll ke bawah 300 pixel, maka tampilkan div
      if (window.scrollY > currentDiv.offsetTop - window.innerHeight / 2) {
        currentDiv.classList.add('show');
      } else {
        currentDiv.classList.remove('show');
      }
    }
  });
// Membuat array yang berisi teks yang akan dijadikan efek mengetik
const texts = ["Fresh Graduate in Informatics Engineering | Universitas PGRI Yogyakarta"];

// Mendapatkan elemen HTML tempat teks akan ditampilkan
const typedText = document.getElementById("typed-text");

// Mengatur index awal teks dan index teks yang sedang ditampilkan
let textIndex = 0;
let charIndex = 0;

// Mengatur delay antar karakter
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 2000;

// Fungsi untuk menghapus teks
function erase() {
  if (charIndex > 0) {
    typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, typingDelay + newTextDelay);
  }
}

// Fungsi untuk menampilkan teks
function type() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, typingDelay + newTextDelay);
  }
}

// Memulai efek mengetik

setTimeout(type, typingDelay + newTextDelay);
