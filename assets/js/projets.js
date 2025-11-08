// ===================== DONNÉES PROJETS DÉTAILLÉES =====================
// Remplace ces objets par tes vrais projets avec leurs détails complets.
// Tu peux aussi charger un JSON externe si tu préfères.

const projectsDetailed = [
  {
    id: 1,
    title: 'SocialHelp',
    description: 'Une application mobile qui permet de mettre en relation des personnes qui ont besoin d\'aide avec des personnes qui veulent aider.',
    descriptionLong: 'cette application est une solution au probleme de manque d\'information pour les personnes qui ont besoin d\'aide, et donc avec l\'application il est possible de trouver des personnes qui veulent aider, et de contacter ces derniers pour pouvoir obtenir l\'aide desiree.',
    tags: ['dart', 'sql','firebase'],
    technologies: ['Flutter', 'sqlite3', 'firebaseAuth'],
    date: '2025',
    status: 'Terminé',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projetSocialHelp.png", // Remplace par le chemin vers l'image du projet si tu en as une
  },
  {
    id: 2,
    title: 'Convertisseur de devises',
    description: 'Application web simple qui consomme une API pour convertir les devises en temps réel. Le projet illustre mes compétences en intégration d\'API et en gestion d\'état asynchrone.',
    descriptionLong: 'Cette application permet de convertir des devises en temps réel en utilisant une API externe. Le projet démontre ma capacité à intégrer des APIs REST, gérer les requêtes asynchrones avec fetch, et créer une interface utilisateur réactive. J\'ai également implémenté la gestion d\'erreurs et des états de chargement.',
    tags: ['api', 'js', 'html', 'css'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'API REST'],
    date: '2024',
    status: 'Terminé',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projetConvertisseur.png",
  },
  {
    id: 3,
    title: 'Landing page responsive',
    description: 'Maquette pixel‑perfect avec grille responsive et accessibilité. Le projet met en avant mes compétences en design responsive et en accessibilité web.',
    descriptionLong: 'Cette landing page a été développée avec une approche mobile-first, garantissant une expérience optimale sur tous les appareils. Le projet intègre les meilleures pratiques d\'accessibilité (ARIA, contraste, navigation au clavier) et utilise CSS Grid et Flexbox pour un layout flexible et moderne.',
    tags: ['html', 'css', 'responsive', 'accessibility'],
    technologies: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox'],
    date: '2024',
    status: 'Terminé',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projetLanding.png",
  },
  {
    id: 4,
    title: 'Easy Market',
    description: "Cette application est une solution accessible de tous les petits commercants pour gerer leurs boutique , suivre les ventes , conculter rapidement les profits faits , ainsi que les produits qui rapportent le plus afin d'optimiser leurs vente ..",
    descriptionLong: "Cette application est une solution accessible de tous les petits commercants pour gerer leurs boutique , suivre les ventes , conculter rapidement les profits faits , ainsi que les produits qui rapportent le plus afin d'optimiser leurs vente ..",
    tags: [ 'flutter', 'responsive', 'accessibility','firebase'],
    technologies: ['dart', 'sqlite3', 'Firebase', 'Flexbox'],
    date: '2025',
    status: 'Terminé',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projet2.png",
  },
  {
    id: 5,
    title: 'CNI Express',
    description: "Verification d'identitéExpress est une application mobile qui permet de verifier l'identité d'une personne en utilisant la carte cni, ou alors son numero de telephone pour pouvoir verifier si il est valide ou non.",
    descriptionLong: "Cette application est une solution au probleme 'd'oublie de cni' et donc avec l'application il est possible de verifier l'identité d'une personne peut importe la situation, avec possibilité de syncroniser les informations dans les differents terminaux mobiles",
    tags: [ 'flutter', 'responsive', 'accessibility','firebase'],
    technologies: ['dart', 'sqlite3', 'Firebase', 'Figma'],
    date: '2025',
    status: 'Terminé',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projetCni.png",
  },
  {
    id: 6,
    title: 'Blog IUT',
    description: "Une solution viable , et simple contre l'innaccessibilité à l'information pour les étudiants de l'IUT",
    descriptionLong: "une application mobile responsive et accessible pour les étudiants de l'IUT afin de pouvoir consulter les informations de l'IUT, les notes, les événements, les actualités, etc.",
    tags: [ 'flutter', 'responsive', 'accessibility','firebase'],
    technologies: ['dart', 'sqlite3', 'Firebase', 'Figma'],
    date: '2025',
    status: 'en cours',
    demoUrl: '#',
    codeUrl: '#',
    image: "assets/img/projetBlog.png",
  },
];

// ===================== FILTRES =====================
// Récupère toutes les technologies uniques des projets
function getAllTechnologies() {
  const allTags = new Set();
  projectsDetailed.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

// État des filtres
let activeFilters = [];

// ===================== RENDU UI =====================

// Rendu des boutons de filtre
function renderFilters() {
  const filtersContainer = document.getElementById('filtersButtons');
  const clearButton = document.getElementById('clearFilters');
  if (!filtersContainer) return;

  const technologies = getAllTechnologies();
  filtersContainer.innerHTML = '';

  technologies.forEach(tech => {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.textContent = `#${tech}`;
    button.setAttribute('data-filter', tech);
    button.addEventListener('click', () => toggleFilter(tech));
    filtersContainer.appendChild(button);
  });

  // Bouton "Effacer les filtres"
  if (clearButton) {
    clearButton.addEventListener('click', clearAllFilters);
  }
}

// Toggle d'un filtre
function toggleFilter(tech) {
  const index = activeFilters.indexOf(tech);
  if (index > -1) {
    activeFilters.splice(index, 1);
  } else {
    activeFilters.push(tech);
  }
  updateFiltersUI();
  renderProjects();
}

// Effacer tous les filtres
function clearAllFilters() {
  activeFilters = [];
  updateFiltersUI();
  renderProjects();
}

// Mise à jour de l'UI des filtres
function updateFiltersUI() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const clearButton = document.getElementById('clearFilters');

  filterButtons.forEach(btn => {
    const tech = btn.getAttribute('data-filter');
    if (activeFilters.includes(tech)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Afficher/masquer le bouton "Effacer"
  if (clearButton) {
    clearButton.style.display = activeFilters.length > 0 ? 'block' : 'none';
  }
}

// Filtrage des projets
function getFilteredProjects() {
  if (activeFilters.length === 0) {
    return projectsDetailed;
  }
  return projectsDetailed.filter(project =>
    activeFilters.some(filter => project.tags.includes(filter))
  );
}

// Rendu des projets détaillés
function renderProjects() {
  const grid = document.getElementById('projectsGridDetailed');
  const noProjects = document.getElementById('noProjects');
  if (!grid) return;

  const filteredProjects = getFilteredProjects();
  grid.innerHTML = '';

  if (filteredProjects.length === 0) {
    if (noProjects) noProjects.style.display = 'block';
    return;
  }

  if (noProjects) noProjects.style.display = 'none';

  filteredProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card-detailed glass-effect';

    // Image du projet (si disponible)
    const imageSection = project.image
      ? `<div class="project-image-wrapper">
           <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
         </div>`
      : `<div class="project-image">Image du projet</div>`;

    // Technologies
    const techTags = project.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');

    // Actions (liens)
    const actions = `
      <div class="project-actions">
        ${project.demoUrl !== '#' ? `<a href="${project.demoUrl}" class="project-link project-link-primary" target="_blank" rel="noopener">Voir la démo</a>` : ''}
        ${project.codeUrl !== '#' ? `<a href="${project.codeUrl}" class="project-link project-link-secondary" target="_blank" rel="noopener">Voir le code</a>` : ''}
      </div>
    `;

    card.innerHTML = `
      ${imageSection}
      <div class="project-header">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${techTags}
        </div>
      </div>
      <div class="project-details">
        <div class="project-detail-item">
          <span class="project-detail-label">Technologies</span>
          <span class="project-detail-value">${project.technologies.join(', ')}</span>
        </div>
        <div class="project-detail-item">
          <span class="project-detail-label">Date</span>
          <span class="project-detail-value">${project.date}</span>
        </div>
        <div class="project-detail-item">
          <span class="project-detail-label">Statut</span>
          <span class="project-detail-value">${project.status}</span>
        </div>
      </div>
      ${actions}
    `;

    grid.appendChild(card);
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProjects();
});

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
  document.querySelectorAll('section, .project-card-detailed').forEach(el=>el.classList.add('js-reveal'));
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

