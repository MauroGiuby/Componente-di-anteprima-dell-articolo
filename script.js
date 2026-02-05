const btn = document.querySelector('.btn-share');
const shared = document.querySelector('.shared');

btn.addEventListener('click', () => {
  const rect = btn.getBoundingClientRect();

  // Position Popover Ã¼ber dem Button
  shared.style.position = 'fixed';
  shared.style.top = rect.top - shared.offsetHeight - 100 + 'px';
  shared.style.left = rect.right - shared.offsetWidth - 110 + 'px';
  shared.style.zIndex = '1000';

  // Einfacher Toggle
  if (shared.style.display === 'block') {
    shared.style.display = 'none';
  } else {
    shared.style.display = 'block';
  }

  const w = window.innerWidth;
  if (w < 800) {
    // FÃ¼r jeden px kleiner als 800 â 1 px weiter nach links, max 74 px bei 726 px
    const shift = Math.min(800 - w, 74);
    // aktuelle Position holen und verschieben
    const currentLeft = parseFloat(shared.style.left) || 0;
    shared.style.left = currentLeft - shift + 'px';
  }
});

// Popover beim Fenster-Resize schlieÃen
window.addEventListener('resize', () => {
  shared.style.display = 'none';
});