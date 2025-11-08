// ===================== NAVIGATION =====================
// Script de navigation réutilisable pour toutes les pages
// Gère le menu burger et le scroll fluide

// Bouton burger: ouvre/ferme le menu en mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Année dynamique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

