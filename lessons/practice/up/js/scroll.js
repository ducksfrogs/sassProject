const scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('active', window.scrollY > 200);
});
