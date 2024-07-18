// Función para mostrar las tablas de multiplicar del 1 al 10
function mostrarTablasDeMultiplicar() {
    // Declarar variables para los contadores
    let numero = 1;
    let multiplicador;

    // Bucle para iterar por cada número del 1 al 10
    while (numero <= 10) {
        // Inicializar el multiplicador en 1
        multiplicador = 1;

        // Mostrar encabezado de la tabla
        console.log("Tabla del " + numero + ":");

        // Bucle para calcular y mostrar la tabla de multiplicar
        while (multiplicador <= 10) {
            console.log(numero + " x " + multiplicador + " = " + (numero * multiplicador));
            multiplicador++;
        }

        // Separar cada tabla con una línea en blanco
        console.log("");
        numero++;
    }
}

// Llamar a la función para mostrar las tablas de multiplicar
mostrarTablasDeMultiplicar();
