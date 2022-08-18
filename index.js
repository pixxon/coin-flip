import './style.css';

let currentDegrees = 0;
let amountRedAmount = 0;
let amountBlueAmount = 0;
let isFlipping = false;

coin.onclick = () => {
    if (isFlipping) return;

    coin.classList.add("flipping");
    isFlipping = true;
    const random = Math.floor(Math.random() * 4 + 9); 

    currentDegrees += 180 * random;

    if (currentDegrees % 360 === 0) {
        amountBlueAmount++;
    } else {
        amountRedAmount++;
    }

    coin.style.transform = `rotateY(${currentDegrees}deg)`;

    setTimeout(() => {
        red.innerHTML = `${amountRedAmount}`;
        blue.innerHTML = `${amountBlueAmount}`;
        isFlipping = false;
        coin.classList.remove("flipping");
    }, 5000);
}