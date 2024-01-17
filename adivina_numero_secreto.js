const readline = require('readline-sync');

// Función para generar un número aleatorio entre 1 y 100
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

// Función principal del juego
function adivinaNumeroSecreto() {
  const numeroSecreto = generarNumeroAleatorio();
  let intentos = 0;

  console.log('¡Bienvenido al juego Adivina el Número Secreto!\n');

  while (true) {
    const guess = readline.question('Ingresa un número entre 1 y 100: ');

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log('Por favor, ingresa un número válido entre 1 y 100.');
      continue;
    }

    intentos++;

    if (guess == numeroSecreto) {
      console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`);
      break;
    } else if (guess < numeroSecreto) {
      console.log('El número es demasiado bajo. ¡Intenta nuevamente!');
    } else {
      console.log('El número es demasiado alto. ¡Intenta nuevamente!');
    }
  }
}

// Llama a la función principal del juego
adivinaNumeroSecreto();
