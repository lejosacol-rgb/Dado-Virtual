// 1. Referencias a los elementos
const cube = document.getElementById('cube');
const rollBtn = document.getElementById('roll-btn');
const diceSound = document.getElementById('dice-sound');

// 2. Mapeo de caras del dado (Posiciones finales exactas)
const faceRotations = [
    { x: 0, y: 0 },      // 1
    { x: -90, y: 0 },    // 2 (Top)
    { x: 0, y: -90 },    // 3 (Right)
    { x: 0, y: 90 },     // 4 (Left)
    { x: 90, y: 0 },     // 5 (Bottom)
    { x: 180, y: 0 }     // 6 (Back)
];

// Variables para acumular el giro y que siempre gire hacia adelante
let currentX = 0;
let currentY = 0;

// 3. Evento al presionar el botón
rollBtn.addEventListener('click', () => {
    
    // A. Reproducir sonido (reinicia el audio si se pulsa rápido)
    if (diceSound) {
        diceSound.currentTime = 0;
        diceSound.play().catch(error => console.log("Error al reproducir audio:", error));
    }

    // B. Seleccionar resultado al azar (0 a 5)
    const randomIndex = Math.floor(Math.random() * 6);
    const selectedFace = faceRotations[randomIndex];

    // C. Calcular giro espectacular (mínimo 3 vueltas completas = 1080deg)
    // Usamos múltiplos de 360 para que la cara final sea la correcta
    const spinsX = (Math.floor(Math.random() * 5) + 3) * 360; 
    const spinsY = (Math.floor(Math.random() * 5) + 3) * 360;

    currentX = selectedFace.x + spinsX;
    currentY = selectedFace.y + spinsY;

    // D. Aplicar la animación al dado
    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

    // E. Confirmación en consola y vibración
    console.log("Resultado del dado: " + (randomIndex + 1));
    
    if (navigator.vibrate) {
        // Vibra ligeramente cuando el dado "cae" (al final de la animación)
        setTimeout(() => navigator.vibrate(50), 1400);
    }
});

// Mensaje de confirmación al cargar el archivo
console.log("🎲 Script de Dado 3D cargado y listo.");
