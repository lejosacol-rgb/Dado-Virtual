const cube = document.getElementById('cube');
const btn = document.getElementById('roll-btn');

// Rotaciones base para cada cara [1, 2, 3, 4, 5, 6]
const faceRotations = [
    { x: 0, y: 0 },      // 1
    { x: -90, y: 0 },    // 2
    { x: 0, y: -90 },    // 3
    { x: 0, y: 90 },     // 4
    { x: 90, y: 0 },     // 5
    { x: 180, y: 0 }     // 6
];

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 6);
    const selected = faceRotations[randomIndex];
    
    // Añadimos 1080 grados (3 vueltas) para que el giro sea dinámico
    const extraSpinX = (Math.floor(Math.random() * 5) + 3) * 360;
    const extraSpinY = (Math.floor(Math.random() * 5) + 3) * 360;

    const finalX = selected.x + extraSpinX;
    const finalY = selected.y + extraSpinY;

    cube.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;

    // Vibración en móviles
    if (navigator.vibrate) {
        setTimeout(() => navigator.vibrate(50), 1500);
    }
});
