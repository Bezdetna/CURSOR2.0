const boxes = document.querySelectorAll('.box');

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  box.classList.add('changing');
}

function removeShadow(e) {
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  if (!box) return;
  setTimeout(() => {
    box.classList.remove('changing');
  }, 600);
}

document.addEventListener('keydown', playSound);
document.addEventListener('keyup', removeShadow);

boxes.forEach(box => {
  box.addEventListener('click', function() {
    const audio = document.querySelector(`audio[data-key="${box.dataset.key}"]`);
    audio.currentTime = 0;
    audio.play();
    box.classList.add('changing');
    setTimeout(() => {
      box.classList.remove('changing');
    }, 600);
  });
});


 