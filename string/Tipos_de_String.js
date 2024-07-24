//String (cadena de caracteres)

let str_1 = "Hola soy un texto con comillas";
let str_2 = 'Hola soy un texto con comillas simples';
let str_3 = "Comillas dentro de las comillas \"ejemplo\"";
let str_4 = 'Comillas dentro de comilla simple "Ejemplo"'
let str_5 = "Comillas dentro de comillas 'Ejemplo'"

console.log(str_1)
console.log(str_2)
console.log(str_3)
console.log(str_4)
console.log(str_5)

// Comillas invertidas  (backticks)  Alt gr + } x2 `` 

let str_6 = `Comillas invertidas o backtings`;
console.log(str_6)

let nombre = "Paulina"
let saludar = `Hola, ${nombre} bienvenida`;

console.log(saludar)

let plantilla = `
<html>
<h3>Página web de ${nombre} </h3>
<p> Esto es un párrafo </p>
</html>
`

console.log(plantilla)

