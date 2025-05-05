const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modalImage.src = e.target.src;
    modal.style.display = 'flex';
  }
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
