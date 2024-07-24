//variables

//que es una variable?? es un contenedorque puede tener un valor y este valor puede ser cambiado, actualizado, borrado, etc.

//declarar variables
var variableVAR;  //variable de instancia - son variables que se declaran en cualquier parte del codigo y se puede
//reutilizar es uno o mas archivoso clases diferentes perteneciantes al mismo proyecto y ademas puede enviar
//datos y recibirlos hacia programas externo mediante una API
let variableLET;  //variable local

//EJEMPLO de una variableLET
for(let i=3; i < 5; i++){
    console.log(i)
}
//ejemplo de una variable de instancia
var i=9;
console.log(i)

//variable LET mal declarada o redundante
var variable = "Soy una variable VAR";
let variable1 = "Soy una variable LET";
for(let i=3; 1<5; i++){ //i es una variable local
    let variable1="Soy una variable LET reutilizada";
}

//Variable LET declarada despues de usarla
var variable = "Soy una variable VAR";
for(let i=3; i<5; i++){ //i es una variable local
let variable1 = "Soy una variable LET";
}
let variable1 = "Soy una variable LET";
