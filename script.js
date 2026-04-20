const cube1 = document.getElementById('cube1');
const cube2 = document.getElementById('cube2');
const scene2 = document.getElementById('scene2');
const rollBtn = document.getElementById('roll-btn');
const diceSound = document.getElementById('dice-sound');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');

let diceCount = 1;

const faceRotations = [
    { x: 0, y: 0 }, { x: -90, y: 0 }, { x: 0, y: -90 },
    { x: 0, y: 90 }, { x: 90, y: 0 }, { x: 180, y: 0 }
];

function setDiceMode(count) {
    diceCount = count;
    if (count === 1) {
        scene2.classList.add('hidden');
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else {
        scene2.classList.remove('hidden');
        btn1.classList.remove('active');
        btn2.classList.add('active');
    }
}

rollBtn.addEventListener('click', () => {
    if (diceSound) {
        diceSound.currentTime = 0;
        diceSound.play().catch(() => {});
    }

    const roll = (cube) => {
        const index = Math.floor(Math.random() * 6);
        const rot = faceRotations[index];
        const extraX = (Math.floor(Math.random() * 5) + 5) * 360;
        const extraY = (Math.floor(Math.random() * 5) + 5) * 360;
        cube.style.transform = `rotateX(${rot.x + extraX}deg) rotateY(${rot.y + extraY}deg)`;
    };

    roll(cube1);
    if (diceCount === 2) {
        setTimeout(() => roll(cube2), 60); // Ligero desfase visual
    }

    if (navigator.vibrate) navigator.vibrate(50);
});
