const button = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".shared");
const footer = document.querySelector(".card-footer");

const toggleSharePanel = () => {

  // Mostra/nasconde il popover
  sharePanel.classList.toggle("hide");

  // Stato "share aperto" sul footer (mobile) 
  footer.classList.toggle("footer--share-open");

  // Cambia stile del bottone (colore/icona)
  button.classList.toggle("share-btn--open");

  // Accessibilità
  button.setAttribute(
    "aria-expanded",
    !sharePanel.classList.contains("hide")
  );
};

button.addEventListener("click", toggleSharePanel);
