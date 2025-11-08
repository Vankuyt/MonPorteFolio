// Validation simple côté client
// - Objectif: guider l'utilisateur, pas remplacer une vraie validation serveur
// - Pour un envoi réel, branche un service (EmailJS, webhook serverless, etc.)
const form = document.getElementById('contactForm');
const feedback = document.querySelector('.form-feedback');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const first = (data.get('firstName') || '').toString().trim();
    const last = (data.get('lastName') || '').toString().trim();
    const subject = (data.get('subject') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!first || !last || !subject || message.length < 10) {
      feedback.textContent = 'Veuillez remplir tous les champs (message ≥ 10 caractères).';
      feedback.className = 'form-feedback error';
      const firstField = form.querySelector('[name="firstName"]');
      if (firstField && typeof firstField.focus === 'function') firstField.focus();
      return;
    }

    feedback.textContent = "Merci ! Votre message a été préparé (démo).";
    feedback.className = 'form-feedback success';
    form.reset();
  });
}


