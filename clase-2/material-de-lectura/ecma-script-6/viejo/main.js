"use strict";

/*En ES5*/
{
    var miNombre = "Juan Paz";
    var mensajeVar = "Hola a todos, me llamo " + miNombre + ", un gusto conocerlos.";
    console.log(mensajeVar);
}

/*En ES6*/
{
    var _miNombre = "Juan Paz";
    var mensajeLet = "Hola a todos, me llamo " + _miNombre + ", un gusto conocerlos.";
    console.log(mensajeLet);
}

var unaVariable = "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor.";

var unaConstante = "Una constante no puede cambiar su valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable = "Tranquilamente, aca podemos redeclar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc.";

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"

//Ejemplo de Ambito de bloque:

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// console.log(i); -> Output: i is not defined

//Ejemplo de var

var miau = "Miau";

function ejemploVar() {
    var guau = "guau";
    console.log(miau);
    console.log(guau);
    if (true) {
        var pio = "pio-pio";
        console.log(pio);
        console.log(miau);
        console.log(guau);
    }
    console.log(pio);
}
ejemploVar();

// console.log(guau) -> output: guau is not defined
// console.log(pio); -> output: miau is not defined

/*Ejemplos arrow function*/

var saludo = function saludo(mensaje) {
    console.log(mensaje);
};

saludo("hola");

/*Ejemplos valores por defecto de funciones*/

function obtenerUsuario(name) {
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2023;

    console.log("Nombre Usuario: " + name + ". A\xF1o: " + year);
}

obtenerUsuario("Peperino Paz");

/*Ejemplos desestructuracion*/
var gato = {
    nombre: "Luxita",
    apellido: "Paz",
    edad: 7,
    esDomestico: true,
    genero: "femenino"
};

var nombre = gato.nombre,
    apellido = gato.apellido,
    edad = gato.edad,
    esDomestico = gato.esDomestico,
    genero = gato.genero;


console.log(nombre); // Output -> "Luxita"
console.log(apellido); // Output -> "Paz"
console.log(edad); // Output -> 7
console.log(esDomestico); // Output -> true 
console.log(genero); // Output -> "femenino"

var frutas = ["Banana", "Naranja", "Manzana", "Frutillas", "Peras"];
var frutaUno = frutas[0],
    frutaDos = frutas[1],
    frutaTres = frutas[2],
    frutaCuatro = frutas[3],
    frutaCinco = frutas[4];


console.log(frutaUno); // Output ->"Banana"
console.log(frutaDos); // Output ->"Naranja"
console.log(frutaTres); // Output ->"Manzana"
console.log(frutaCuatro); // Output ->"Frutillas"
console.log(frutaCinco); // Output ->"Peras"

/*Rest y spread*/

var arreglo = [1, 2, 3, 4, 5];

var nuevoArreglo = [].concat(arreglo);

console.log(nuevoArreglo);