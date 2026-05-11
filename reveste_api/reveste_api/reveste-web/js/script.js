document.querySelectorAll('[data-carrossel]').forEach(carrossel => {
  const track = carrossel.querySelector('.track');
  const imgs = Array.from(track.children);
  const btnPrev = carrossel.querySelector('.seta-esq');
  const btnNext = carrossel.querySelector('.seta-dir');

  const gap = 30;
  const imgWidth = imgs[0].getBoundingClientRect().width + gap;

  let index = 0;

  // DUPLICA AS IMAGENS PRA LOOP INFINITO
  imgs.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });

  const total = track.children.length;

  function move() {
    track.style.transform = `translateX(-${index * imgWidth}px)`;
  }

  btnNext.addEventListener('click', () => {
    index++;
    move();

    if (index >= total / 2) {
      setTimeout(() => {
        track.style.transition = 'none';
        index = 0;
        move();
        track.offsetHeight;
        track.style.transition = 'transform 0.45s ease';
      }, 450);
    }
  });

  btnPrev.addEventListener('click', () => {
    if (index === 0) {
      track.style.transition = 'none';
      index = total / 2;
      move();
      track.offsetHeight;
      track.style.transition = 'transform 0.45s ease';
    }

    index--;
    move();
  });
});
