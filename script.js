// Small interaction script: nav toggle, year, scroll reveal, Fabergé Egg animation, and Scenic Archive modal

document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // IntersectionObserver for reveal on scroll
  const revealElems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElems.forEach(el => obs.observe(el));
  } else {
    // fallback: reveal everything
    revealElems.forEach(el => el.classList.add('active'));
  }

  // Optional: subtle hover pointer animation for CTA
  const ctas = document.querySelectorAll('.btn.primary');
  ctas.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.animate([{ transform: 'translateY(-2px)' }, { transform: 'translateY(0)' }], { duration: 300, easing: 'cubic-bezier(.2,.9,.3,1)' });
    });
  });

  // Fabergé Egg Archive CTA animation + delayed redirect
  const fabergeBtn = document.getElementById('fabergeEggBtn');
  if (fabergeBtn) {
    let isNavigating = false;

    fabergeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isNavigating) return;
      isNavigating = true;

      const destination = fabergeBtn.getAttribute('href');
      fabergeBtn.classList.add('is-open');

      setTimeout(() => {
        window.location.href = destination;
      }, 650);
    });
  }

  // Scenic Archive Project Modal (past-projects.html)
  const scenicModal = document.getElementById('scenicModal');
  if (scenicModal) {
    const modalTitle = document.getElementById('scenicModalTitle');
    const modalDesc = document.getElementById('scenicModalDesc');
    const modalPhotos = document.getElementById('scenicModalPhotos');
    const closeBtn = document.getElementById('scenicCloseBtn');

    document.querySelectorAll('.scenic-card').forEach((card) => {
      const btn = card.querySelector('.scenic-open-btn');
      const openHandler = () => {
        modalTitle.textContent = card.dataset.title || 'Scenic Project';
        modalDesc.textContent = card.dataset.description || '';
        modalPhotos.innerHTML = '';

        let photos = [];
        try {
          photos = JSON.parse(card.dataset.photos || '[]');
        } catch (err) {
          photos = [];
        }

        photos.forEach((src) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = modalTitle.textContent;
          modalPhotos.appendChild(img);
        });

        scenicModal.classList.add('is-open');
      };

      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        openHandler();
      });
      if (btn) btn.addEventListener('click', openHandler);
    });

    const closeModal = () => scenicModal.classList.remove('is-open');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    scenicModal.addEventListener('click', (e) => {
      if (e.target === scenicModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
});