//control de bucles

let listum =  [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < listum.length; i++){
    //Exclusion de un valor a traves  de --------> parametro continue
    if (listum[i] ===5){
        continue;
    }
    console.log(listum[i]);

    //Interrumpir un bucle ----------> parametro break
    if(listum[i] > 6){
        break;
    }
}
