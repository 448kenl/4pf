const menuToggle = document.querySelector('[data-menu-toggle]');
const mobilePanel = document.querySelector('[data-mobile-panel]');
if (menuToggle && mobilePanel) {
  menuToggle.addEventListener('click', () => {
    mobilePanel.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(mobilePanel.classList.contains('open')));
  });
}

const chips = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
    const target = chip.dataset.filter;
    cards.forEach((card) => {
      card.style.display = target === 'all' || card.dataset.category === target ? '' : 'none';
    });
  });
});

const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
