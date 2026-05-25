// ── FOTO PROFIL ──
// Foto diambil langsung dari folder images/foto-viona.jpg
// Pastikan file foto sudah ada di folder tersebut sebelum di-push ke GitHub

// ── HEADER STICKY ──
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──
function toggleMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.classList.toggle('toggle');
    nav.classList.toggle('active');
}

// ── SCROLL FADE IN (PROGRESSIVE ENHANCEMENT) ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .edu-card, .pill, .skill-group').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
});
