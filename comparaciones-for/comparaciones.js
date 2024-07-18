//comparaciones

//Igualdad
if (5 == 5){  //compracion simple
    console.log("5 es igual que 5");
}
if (5 === 5){  //compracion compuesta
    console.log("5 es igual que 5");
}

// == Solo compara los valores
// === busca ademas del valor contenido, el tipo de variable,
// y lo hace de manera mas especifica

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

if (a == b){
    console.log("a es igual a b DEBIL");
}

if (a === b){
    console.log("a es igual a b FUERTE");
}
//Desigualdad o valor Distinto

let c = 4;
let d = 10;

if (c != d){
    console.log("c es diferente que d DEBIL");
}

if (c !== d){
    console.log("c es diferente que d FUERTE");
}

//mayor que y menor que

let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min")
}

if(max >= min){
    console.log("max es mayor o igual que min")
}

if(min < max){
    console.log("min es menor que max")
}

if(min <= max){
    console.log("min es menor o igual que max")
}

