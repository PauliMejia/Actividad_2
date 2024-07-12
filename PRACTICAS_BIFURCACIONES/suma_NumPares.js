let sum = 0;

for (let num = 0; num <= 1000; num++) {
    if (num % 2 === 0) {
        sum += num;
    } else {
        // No hacer nada para los números impares
    }
}

console.log("La suma de los números pares del 0 al 1000 es:", sum);
