//array, lista, objeto o vector
//son un conjunto de variables
//Los objetos son entidades que tienen atributos , no cambian
//los atributos son todas las caracteristicas que tienen los objetos, pueden cambiar o permancer a medida que se va declarando el codigo
//Ejemplo de como declarar un array
const datos = [1, "Hola", true, undefined, null];   //declrando por separado, metodo sencillo
const datos2 = new Array(1, "Hola", true, undefined, null); //declaracion por separado, metodo sencillo
const datos3 = new Array(3);       //declarando vector de 3 posiciones, llenado posterior a la declaracion
datos3[1] = "Hola mundo";
datos3[0] = 1;
const datos4 = [datos, datos2, datos3];  //declarando lista de listas

//Ejemplo de impresion
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

//Objetos
//Ejemplo de un objeto
const alumno /*<---- Objeto  */  = {
    //Atributos
    edad: 15,
    peso: 80,
    nombre: "Pedro",
    isBlack; false,
    amistades: ("confi1", "confi2", "confi3", "confi4")
}

//Impresion del objeto
console.log(alumno);

//Impresion especifica
console.log(alumno.amistades);
