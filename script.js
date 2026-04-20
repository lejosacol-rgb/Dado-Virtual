// 1. Obtenemos las referencias a los elementos del DOM
const cube = document.getElementById('cube');
const rollBtn = document.getElementById('roll-btn');

// 2. Definimos las rotaciones base para que cada cara quede de frente [1, 2, 3, 4, 5, 6]
const faceRotations = [
    { x: 0, y: 0 },      // Muestra la cara 1 (Frontal)
    { x: -90, y: 0 },    // Muestra la cara 2 (Superior)
    { x: 0, y: -90 },    // Muestra la cara 3 (Derecha)
    { x: 0, y: 90 },     // Muestra la cara 4 (Izquierda)
    { x: 90, y: 0 },     // Muestra la cara 5 (Inferior)
    { x: 180, y: 0 }     // Muestra la cara 6 (Trasera)
];

// 3. Añadimos el evento clic al botón
rollBtn.addEventListener('click', () => {
    // A. Elegimos un número aleatorio del 1 al 6 (índice 0 a 5)
    const randomIndex = Math.floor(Math.random() * 6);
    const selected = faceRotations[randomIndex];
    
    // B. Añadimos vueltas extra (360 * n) para un efecto de giro más dinámico
    // Esto hace que el dado dé entre 3 y 7 vueltas completas antes de detenerse.
    const extraSpinX = (Math.floor(Math.random() * 5) + 3) * 360;
    const extraSpinY = (Math.floor(Math.random() * 5) + 3) * 360;

    // C. Calculamos la rotación final total
    const finalX = selected.x + extraSpinX;
    const finalY = selected.y + extraSpinY;

    // D. Aplicamos la rotación final al cubo usando CSS Transform
    cube.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;

    // E. (Opcional) Feedback háptico (vibración) para móviles
    if (navigator.vibrate) {
        // Vibra un poco después de que el dado deje de girar (aprox. 1.5s)
        setTimeout(() => navigator.vibrate(50), 1500);
    }
});
