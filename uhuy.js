const sections = [
    document.querySelector("#bagisi"),
    document.querySelector("#bagisi2"),
    document.querySelector("#bagisi3"),
    document.querySelector("#bagisi4")
];

const navLinks = document.querySelectorAll(".af ul li a");

// Event Click pada Menu
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(lnk => lnk.classList.remove("aktif"));
        this.classList.add("aktif");
    });
});

// Event Scroll untuk Highlight Menu
window.addEventListener("scroll", function() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("aktif");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("aktif");
        }
    });
});

// Event Scroll untuk Animasi Muncul (Fade Up)
const divsToBeShown = document.querySelectorAll('.show-on-scroll');

window.addEventListener('scroll', function() {
    for (let i = 0; i < divsToBeShown.length; i++) {
        const currentDiv = divsToBeShown[i];
        // Logika disesuaikan agar lebih responsif di HP
        const rect = currentDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
            currentDiv.classList.add('show');
        } 
    }
});

// Efek Mengetik (Typing Effect)
const texts = ["Fresh Graduate in Informatics Engineering", "Universitas PGRI Yogyakarta"]; // Saya pecah jadi array biar ganti-ganti
const typedText = document.getElementById("typed-text");
let textIndex = 0;
let charIndex = 0;
const typingDelay = 50;
const erasingDelay = 30;
const newTextDelay = 2000;

function type() {
    if (charIndex < texts[textIndex].length) {
        if(!typedText.classList.contains("typing")) typedText.classList.add("typing");
        typedText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        typedText.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!typedText.classList.contains("typing")) typedText.classList.add("typing");
        typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typedText.classList.remove("typing");
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(texts.length) setTimeout(type, newTextDelay + 250);
});
