"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var objetoOriginal = {
  a: 1,
  b: 2
};
var objetoCopia = _objectSpread({}, objetoOriginal);
objetoCopia.a = 10;
console.log("La propiedad \"a\" del objeto Copia ahora vale 10: ".concat(objetoCopia.a));
console.log("La propiedad \"a\" del objeto Original siguie valiendo 1:".concat(objetoOriginal.a));
var objetoCopiaDos = objetoOriginal;
objetoCopiaDos.a = 100;
console.log("La propiedad \"a\" del objeto Copia Dos ahora vale 100: ".concat(objetoCopia.a));
console.log("La propiedad \"a\" del objeto Original ahora vale 100:".concat(objetoOriginal.a));
function rest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  console.log(numeros);
}
rest(100, 15, 221, 54, 6879, 5, 13, 246, 4984, 555);

/* promesas sobre el bidet*/

/*Codigo Productor*/
var promesa = new Promise(function (res, rej) {
  //Si esta condicion se cumple, la promesa llama la callback resolve y envia una respuesta exitosa. De lo contrario, la promesa envia una respuesta de error con la callback reject.
  var x = 10;
  if (x === 10) {
    res("Promesa Resuelta");
  } else {
    rej("Promesa Rechazada");
  }
});

/*Condigo consumidor*/
promesa.then(function (resultado) {
  console.log(resultado); //Output -> "Promesa Resulta"
})["catch"](function (error) {
  console.error(error); // Output -> "Promesa rechazada"
});

var promesaSobreElBidet = new Promise(function (res) {
  console.log("Obteniendo datos...");
  setTimeout(function () {
    var pianoBar = {
      nombreAlbum: "Piano Bar",
      artistas: ["Charly Garcia", "Fito Paez", "Pablo Guyot", "Willy Iturri", "Alfredo Toth"],
      listaCanciones: ["Demoliendo Hoteles", "Promesas Sobre el bidet", "Raros peinados nuevos", "Piano Bar", "No te animas a despegar", "No se va a llamar mi amor", "Tuve tu amor", "Rap del exilio", "Cerca de la revolucion", "Total interferencia"],
      totalCanciones: 10,
      año: 1984
    };
    res(pianoBar);
  }, 2500);
});
promesaSobreElBidet.then(function (resultado) {
  console.log("Datos obtenidos!");
  var nombreAlbum = resultado.nombreAlbum,
    artistas = resultado.artistas,
    listaCanciones = resultado.listaCanciones,
    totalCanciones = resultado.totalCanciones,
    año = resultado.año;
  var _artistas = _slicedToArray(artistas, 5),
    autor = _artistas[0],
    tecladista = _artistas[1],
    guitarrista = _artistas[2],
    baterista = _artistas[3],
    bajista = _artistas[4];
  var disco = "\n    Album: ".concat(nombreAlbum, "\n    Fecha de lanzamiento: ").concat(año, "\n    Canciones: ").concat(totalCanciones, ";\n    Artista: ").concat(autor, ";\n    Teclados: ").concat(tecladista, ";\n    Guitarra: ").concat(guitarrista, ";\n    Bajo: ").concat(bajista, ";\n    Bateria: ").concat(baterista, ";\n    Canciones: ").concat(totalCanciones, ";\n    Lista de canciones: ").concat(listaCanciones, "\n    ");
  console.log(disco);
})["catch"](function (error) {
  console.error("Ocurrio un error inesperado: ".concat(error));
});