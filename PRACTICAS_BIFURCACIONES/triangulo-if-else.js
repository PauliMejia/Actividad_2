//triangulo if else
let ladoA =6;
let ladoB = 10;
let ladoC = 3;


let tipoTriangulo;
if (ladoA === ladoB && ladoB === ladoC) {
  tipoTriangulo = "equilátero";
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  tipoTriangulo = "isósceles";
} else {
  tipoTriangulo = "escaleno";
}

console.log(`El triángulo es ${tipoTriangulo}` );