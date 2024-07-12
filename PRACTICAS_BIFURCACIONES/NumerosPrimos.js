function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(limit) {
    const primos = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primos.push(i);
        }
    }
    return primos;
}

const NumeroIngresado = 30;  
const primos = findPrimes(NumeroIngresado);

console.log(`Los números primos hasta ${NumeroIngresado} son: ${primos.join(', ')}`);
