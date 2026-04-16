function rollDice() {
    const diceElement = document.getElementById('dice');
    
    // Generar un número aleatorio entre 1 y 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Cambiar el texto del dado
    diceElement.innerText = randomNumber;
    
    // Un toque de animación: que el dado "salte"
    diceElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        diceElement.style.transform = "scale(1)";
    }, 100);
}