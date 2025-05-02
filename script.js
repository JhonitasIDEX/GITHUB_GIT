const images = document.querySelectorAll('.fade-img');

function showImagesOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;

    if (imgTop < triggerBottom) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showImagesOnScroll);
window.addEventListener('load', showImagesOnScroll);
