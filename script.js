// Small interaction script: nav toggle, year, and scroll reveal

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
});