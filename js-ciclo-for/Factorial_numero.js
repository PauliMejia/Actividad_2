
function factorialIterativo(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Ejemplo de uso
let numero = 5; // Aquí puedes cambiar el número para obtener su factorial
let resultado = factorialIterativo(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
