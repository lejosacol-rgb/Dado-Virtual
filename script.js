const cube = document.getElementById('cube');
const rollBtn = document.getElementById('roll-btn');
const diceSound = document.getElementById('dice-sound');

const faceRotations = [
    { x: 0, y: 0 }, { x: -90, y: 0 }, { x: 0, y: -90 },
    { x: 0, y: 90 }, { x: 90, y: 0 }, { x: 180, y: 0 }
];

rollBtn.addEventListener('click', () => {
    // Forzar reproducción de sonido
    if (diceSound) {
        diceSound.pause();
        diceSound.currentTime = 0;
        
        // Intentar reproducir y manejar errores de permisos
        const playPromise = diceSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Esperando interacción para sonido...");
            });
        }
    }

    const randomIndex = Math.floor(Math.random() * 6);
    const selected = faceRotations[randomIndex];
    
    // Giros grandes para que se vea la animación
    const extraX = (Math.floor(Math.random() * 5) + 5) * 360;
    const extraY = (Math.floor(Math.random() * 5) + 5) * 360;

    cube.style.transform = `rotateX(${selected.x + extraX}deg) rotateY(${selected.y + extraY}deg)`;

    if (navigator.vibrate) {
        setTimeout(() => navigator.vibrate(40), 100);
    }
});
