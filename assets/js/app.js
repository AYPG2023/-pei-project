(() => {
  const STORAGE_KEY = 'pei-presentation-fields-v1';
  const menuButton = document.querySelector('#menuButton');
  const nav = document.querySelector('#mainNav');
  const progress = document.querySelector('#readingProgress');
  const editableFields = [...document.querySelectorAll('[contenteditable="true"][data-field]')];

  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (_) { saved = {}; }
  editableFields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(saved, field.dataset.field)) field.textContent = saved[field.dataset.field];
    field.addEventListener('input', () => {
      saved[field.dataset.field] = field.textContent.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    });
  });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
  document.querySelector('#printButton')?.addEventListener('click', () => window.print());

  const sectionLinks = [...document.querySelectorAll('#mainNav a')];
  const sections = sectionLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const updateScrollState = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    let current = sections[0]?.id;
    sections.forEach((section) => { if (section.getBoundingClientRect().top <= 150) current = section.id; });
    sectionLinks.forEach((link) => {
      const active = link.hash === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll([
    '#inicio > div > div', '#inicio aside', '.section-heading', '.section-lead',
    '.score-story', '.matrix-card', '.note-card', '.principle', '.forgiveness',
    '.new-start', '.pillar-heading', '.chapter-list article', '.source-note',
    '.ethics-grid li', 'main > section:last-of-type article'
  ].join(','));
  document.querySelectorAll('.matrix-card').forEach((item) => item.parentElement?.classList.add('stagger-group'));
  document.querySelectorAll('.principle').forEach((item) => item.parentElement?.classList.add('stagger-group'));
  document.querySelectorAll('.ethics-grid li').forEach((item) => item.parentElement?.classList.add('stagger-group'));

  if (!reducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((element) => element.classList.add('reveal'));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, { rootMargin: '-7% 0px -9%', threshold: .08 });
    revealTargets.forEach((element) => revealObserver.observe(element));
    document.body.classList.add('js-ready');
  } else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
  }
})();
