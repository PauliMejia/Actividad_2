// Tipos de for (Bucle)
/**estructura
 * for(inicializacion; condicion;actualizacion){
 * Bucle
 * }
 * 
 * i= i+1  estos 2 primeros sirven para invre,entar de dos en dos o mas
 * i +=1;  estos 2 primeros sirven para invre,entar de dos en dos o mas
 * i++
 * i--
 */

// for

for (let i = 0; i < 10; i++){
    //esto es un bucle
    console.log(i)
}

let lista = [1,12,34,56,568,454]
for (let i = 0; i < lista.length /* longitud de la cadena */;  i++){
    //esto es un bucle
    console.log(lista[i]);
}
//forEach
lista.forEach (valor => /* Arrow function */ {
    console.log(valor);
} )

//for...of
for (let valor of lista){
    console.log(valor);
}

//for...in
let persona = {
    nombre = "paulina";
    edad = 24
    isDeveloper = true;
}

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
