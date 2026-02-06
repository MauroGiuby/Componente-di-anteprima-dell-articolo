// 1. Seleziono il bottone "share" e il popover
const btn = document.querySelector('.share-btn');
const shared = document.querySelector('.shared');

// 2. Quando clicco il bottone...
btn.addEventListener('click', () => {

  // Ottengo posizione e dimensioni del bottone
  const rect = btn.getBoundingClientRect();

  // Larghezza finestra (serve per distinguere mobile vs desktop/tablet)
  const w = window.innerWidth;

  // ---------------------------------------------------------
  // 📱 MOBILE (<480px)
  // ---------------------------------------------------------
  // Su mobile il popover diventa una barra in basso.
  // Quindi non serve calcolare posizioni: basta mostrarlo/nasconderlo.
  if (w < 480) {
    shared.style.display = shared.style.display === 'block' ? 'none' : 'block';
    return; // Esco dalla funzione: il resto è solo per desktop/tablet
  }

  // ---------------------------------------------------------
  // 🖥️ DESKTOP + TABLET
  // ---------------------------------------------------------
  // Mostro il popover (prima di calcolare offsetWidth/offsetHeight)
  shared.style.display = 'block';

  // Calcolo dimensioni reali del popover
  const popoverWidth = shared.offsetWidth;
  const popoverHeight = shared.offsetHeight;

  // ---------------------------------------------------------
  // 🎯 CENTRATURA PERFETTA SUL BOTTONE
  // ---------------------------------------------------------
  // Trovo il punto centrale del bottone
  const centerX = rect.left + rect.width / 2;

  // Posiziono il popover centrato orizzontalmente
  // (il CSS usa transform: translateX(-50%) per la centratura finale)
  shared.style.left = centerX + 'px';

  // Posiziono il popover sopra il bottone con 20px di distanza
  shared.style.top = rect.top - popoverHeight - 20 + 'px';
});

// ---------------------------------------------------------
// 🔄 Chiudo il popover quando la finestra viene ridimensionata
// ---------------------------------------------------------
window.addEventListener('resize', () => {
  shared.style.display = 'none';
});
