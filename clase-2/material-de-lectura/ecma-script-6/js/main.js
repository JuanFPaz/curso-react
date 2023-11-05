/*En ES5*/
{
    var miNombre = "Juan Paz";
    var mensajeVar = "Hola a todos, me llamo " + miNombre + ", un gusto conocerlos.";
    console.log(mensajeVar);
}

/*En ES6*/
{
    let miNombre = "Juan Paz"
    let mensajeLet = `Hola a todos, me llamo ${miNombre}, un gusto conocerlos.`;
    console.log(mensajeLet)
}

let unaVariable = "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor."

const unaConstante = "Una constante no puede cambiar su valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable = "Tranquilamente, aca podemos redeclar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc."

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"

//Ejemplo de Ambito de bloque:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// console.log(i); -> Output: i is not defined

//Ejemplo de var

var miau = "Miau"

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
ejemploVar()


// console.log(guau) -> output: guau is not defined
// console.log(pio); -> output: miau is not defined

/*Ejemplos arrow function*/

const saludo = mensaje => {
    console.log(mensaje);
}

saludo("hola");

/*Ejemplos valores por defecto de funciones*/

function obtenerUsuario(name,year=2023){
    console.log(`Nombre Usuario: ${name}. Año: ${year}`);
}

obtenerUsuario("Peperino Paz");

/*Ejemplos desestructuracion*/
const gato = {
    nombre: "Luxita",
    apellido: "Paz",
    edad: 7,
    esDomestico: true,
    genero: "femenino"
}

const {nombre, apellido,edad,esDomestico,genero} = gato;

console.log(nombre); // Output -> "Luxita"
console.log(apellido); // Output -> "Paz"
console.log(edad); // Output -> 7
console.log(esDomestico); // Output -> true 
console.log(genero); // Output -> "femenino"

const frutas = ["Banana","Naranja","Manzana","Frutillas","Peras"];
const [frutaUno,frutaDos,frutaTres,frutaCuatro,frutaCinco] = frutas;

console.log(frutaUno); // Output ->"Banana"
console.log(frutaDos); // Output ->"Naranja"
console.log(frutaTres); // Output ->"Manzana"
console.log(frutaCuatro); // Output ->"Frutillas"
console.log(frutaCinco); // Output ->"Peras"

/*Rest y spread*/

const arreglo = [1,2,3,4,5];
const arregloDos = [10,9,8,7,6];
const nuevoArreglo = [...arreglo, ...arregloDos];

console.log(nuevoArreglo);

let alumno = {nombre : "Juan",apellido : "Paz"};

let alumnoCurso = {...alumno, curso:"Reactjs"};

console.log(alumnoCurso);