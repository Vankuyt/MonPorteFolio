// ===================== NAVIGATION =====================
// Bouton burger: ouvre/ferme le menu en mobile.
// Tu peux changer le comportement (ex: menu latéral) en adaptant cette partie.
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll fluide pour les liens internes (ancres #...)
document.querySelectorAll('.js-scroll').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Année dynamique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ===================== DONNÉES D'EXEMPLE =====================
// Remplace ces objets par tes vrais projets/compétences.
// Tu peux aussi charger un JSON externe si tu préfères.
const projects = [
  {
    title: 'Mini‑jeu DOM',
    description: 'Un mini‑jeu interactif en JavaScript qui utilise des événements DOM.',
    tags: ['html', 'css', 'js'],
    url: '#',
  },
  {
    title: 'Convertisseur de devises',
    description: 'App simple qui consomme une API pour convertir les devises.',
    tags: ['api', 'js'],
    url: '#',
  },
  {
    title: 'Landing page responsive',
    description: 'Maquette pixel‑perfect avec grille responsive et accessibilité.',
    tags: ['html', 'css'],
    url: '#',
  },
];

const softSkills = [
  { label: 'Gestion de projet', value: 60 },
  { label: 'Résolution de problème', value: 80},
  { label: 'Adaptabilité', value: 97 },
  { label: 'Curiosité intelectuelle', value: 76 },
  { label: 'Travail en équipe', value: 95 },

];

const hardSkills = [
  { label: 'HTML', value: 70 },
  { label: 'CSS', value: 75 },
  { label: 'JavaScript', value: 60 },
  { label: 'VS Code', value: 87 },
  { label: 'Vibe coding', value: 70 },
  { label: 'Anglais', value: 57 },
  { label: 'Flutter/Dart', value: 60 },
];

// ===================== RENDU UI =====================
// Helpers de rendu: transforment les données en DOM.
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card glass-effect';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>
      <a class="btn btn-primary" href="projets.html">Voir les détails</a>
    `;
    grid.appendChild(card);
  });
}

function renderMeters(list, targetId) {
  const ul = document.getElementById(targetId);
  if (!ul) return;
  ul.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.className = 'meter';
    li.innerHTML = `
      <div class="label"><span>${item.label}</span><span>${item.value}%</span></div>
      <div class="bar" aria-hidden="true"><span style="--value:${item.value}%;"></span></div>
    `;
    ul.appendChild(li);
  });
}

// Appels initiaux de rendu (au chargement)
renderProjects();
renderMeters(softSkills, 'softSkills');
renderMeters(hardSkills, 'hardSkills');

// === CURSOR BLOB ANIMATION EFFECT ===
const blob = document.getElementById("cursor-blob");
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let currentX = mouseX, currentY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateBlob() {
  currentX += (mouseX - currentX) * 0.15; // effet lissé
  currentY += (mouseY - currentY) * 0.15;
  if (blob) {
    blob.style.left = `${currentX}px`;
    blob.style.top = `${currentY}px`;
  }
  requestAnimationFrame(animateBlob);
}
if (blob) animateBlob();

// === BOUTON RETOUR EN HAUT DE PAGE ===
const btnScrollTop=document.getElementById('btnScrollTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300){btnScrollTop?.classList.add('active');}
  else{btnScrollTop?.classList.remove('active');}
});
btnScrollTop?.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:'smooth'});
});

// === Animation scroll reveal des sections et cartes ===
function setupRevealAnimation() {
  const els = document.querySelectorAll('.js-reveal');
  const obs = new window.IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  },{threshold:0.15});
  els.forEach(el=>obs.observe(el));
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('section, .card, .project-card-detailed').forEach(el=>el.classList.add('js-reveal'));
  setupRevealAnimation();
});

// Effet ripple sur btn-primary
function enableRipple() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      ripple.style.left = `${e.clientX ? e.clientX-rect.left : rect.width/2}px`;
      ripple.style.top = `${e.clientY ? e.clientY-rect.top : rect.height/2}px`;
      ripple.style.width = ripple.style.height = Math.max(rect.width,rect.height)+8 + 'px';
      btn.appendChild(ripple);
      setTimeout(()=>ripple.remove(), 520);
    });
  });
}
document.addEventListener('DOMContentLoaded', enableRipple);


