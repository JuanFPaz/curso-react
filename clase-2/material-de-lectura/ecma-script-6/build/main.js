"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*En ES5*/
{
  var miNombre = "Juan Paz";
  var mensajeVar = "Hola a todos, me llamo " + miNombre + ", un gusto conocerlos.";
  console.log(mensajeVar);
}

/*En ES6*/
{
  var _miNombre = "Juan Paz";
  var mensajeLet = "Hola a todos, me llamo ".concat(_miNombre, ", un gusto conocerlos.");
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
  console.log("Nombre Usuario: ".concat(name, ". A\xF1o: ").concat(year));
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
var arregloDos = [10, 9, 8, 7, 6];
var nuevoArreglo = [].concat(arreglo, arregloDos);
console.log(nuevoArreglo);
var alumno = {
  nombre: "Juan",
  apellido: "Paz"
};
var alumnoCurso = _objectSpread(_objectSpread({}, alumno), {}, {
  curso: "Reactjs"
});
console.log(alumnoCurso);