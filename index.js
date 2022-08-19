import './style.css';

let currentDegrees = 0;
let isFlipping = false;

coin.onclick = () => {
  if (isFlipping) return;

  coin.classList.add('flipping');
  isFlipping = true;
  const random = Math.floor(Math.random() * 4 + 9);

  currentDegrees += 180 * random;

  coin.style.transform = `rotateY(${currentDegrees}deg)`;

  setTimeout(() => {
    isFlipping = false;
    coin.classList.remove('flipping');
  }, 5000);
};
