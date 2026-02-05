const shareBtn = document.querySelector('.toast__btn');
const shareMenu = document.querySelector('.toast__mobile');

shareBtn.addEventListener('click', () => {
  shareMenu.classList.toggle('hidden');
  shareBtn.classList.toggle('active');
});