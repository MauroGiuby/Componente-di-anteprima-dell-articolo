const button = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".shared");

const toggleSharePanel = () => {

  // Mostra/nasconde il popover
  sharePanel.classList.toggle("hide");

  // Riduce il footer su mobile
  button.parentElement.classList.toggle("author--reduce");

  // Cambia stile del bottone (colore/icona)
  button.classList.toggle("share-btn--open");

  // Accessibilità
  button.setAttribute(
    "aria-expanded",
    !sharePanel.classList.contains("hide")
  );
};

button.addEventListener("click", toggleSharePanel);
