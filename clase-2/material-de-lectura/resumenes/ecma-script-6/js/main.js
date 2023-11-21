/*En ES5*/
{
  var miNombre = "Juan Paz";
  var mensajeVar =
    "Hola a todos, me llamo " + miNombre + ", un gusto conocerlos.";
  console.log(mensajeVar);
}

/*En ES6*/
{
  let miNombre = "Juan Paz";
  let mensajeLet = `Hola a todos, me llamo ${miNombre}, un gusto conocerlos.`;
  console.log(mensajeLet);
}

let unaVariable =
  "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor.";

const unaConstante =
  "Una constante no puede cambiar su valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable =
  "Tranquilamente, aca podemos redeclar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc.";

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"

//Ejemplo de Ambito de bloque:

for (let i = 0; i < 10; i++) {
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

const saludo = (mensaje) => {
  console.log(mensaje);
};

saludo("hola");

/*Ejemplos valores por defecto de funciones*/

function obtenerUsuario(name, year = 2023) {
  console.log(`Nombre Usuario: ${name}. Año: ${year}`);
}

obtenerUsuario("Peperino Paz");

/*Ejemplos desestructuracion*/
const gato = {
  nombre: "Luxita",
  apellido: "Paz",
  edad: 7,
  esDomestico: true,
  genero: "femenino",
};

const { nombre, apellido, edad, esDomestico, genero } = gato;

console.log(nombre); // Output -> "Luxita"
console.log(apellido); // Output -> "Paz"
console.log(edad); // Output -> 7
console.log(esDomestico); // Output -> true
console.log(genero); // Output -> "femenino"

const frutas = ["Banana", "Naranja", "Manzana", "Frutillas", "Peras"];
const [frutaUno, frutaDos, frutaTres, frutaCuatro, frutaCinco] = frutas;

console.log(frutaUno); // Output ->"Banana"
console.log(frutaDos); // Output ->"Naranja"
console.log(frutaTres); // Output ->"Manzana"
console.log(frutaCuatro); // Output ->"Frutillas"
console.log(frutaCinco); // Output ->"Peras"

/*Rest y spread*/

const arreglo = [1, 2, 3, 4, 5];
const arregloDos = [10, 9, 8, 7, 6];
const nuevoArreglo = [...arreglo, ...arregloDos];

console.log(nuevoArreglo);

let alumno = { nombre: "Juan", apellido: "Paz" };

let alumnoCurso = { ...alumno, curso: "Reactjs" };

console.log(alumnoCurso);

const objetoOriginal = { a: 1, b: 2 };
const objetoCopia = { ...objetoOriginal };

objetoCopia.a = 10;
console.log(
  `La propiedad "a" del objeto Copia ahora vale 10: ${objetoCopia.a}`
);
console.log(
  `La propiedad "a" del objeto Original siguie valiendo 1:${objetoOriginal.a}`
);

const objetoCopiaDos = objetoOriginal;

objetoCopiaDos.a = 100;
console.log(
  `La propiedad "a" del objeto Copia Dos ahora vale 100: ${objetoCopia.a}`
);
console.log(
  `La propiedad "a" del objeto Original ahora vale 100:${objetoOriginal.a}`
);

function rest(...numeros) {
  console.log(numeros);
}

rest(100, 15, 221, 54, 6879, 5, 13, 246, 4984, 555);

/* promesas sobre el bidet*/

/*Codigo Productor*/
const promesa = new Promise((res, rej) => {
  //Si esta condicion se cumple, la promesa llama la callback resolve y envia una respuesta exitosa. De lo contrario, la promesa envia una respuesta de error con la callback reject.
  let x = 10;
  if (x === 10) {
    res("Promesa Resuelta");
  } else {
    rej("Promesa Rechazada");
  }
});

/*Condigo consumidor*/
promesa
  .then((resultado) => {
    console.log(resultado); //Output -> "Promesa Resulta"
  })
  .catch((error) => {
    console.error(error); // Output -> "Promesa rechazada"
  });

// const promesaSobreElBidet = new Promise((res,rej)=>{
//     console.log("Obteniendo datos...")
//     setTimeout(()=>{
//         let forzarError = x => x === 10;
//         const pianoBar = {
//             nombreAlbum: "Piano Bar",
//             artistas : ["Charly Garcia", "Fito Paez", "Pablo Guyot", "Willy Iturri", "Alfredo Toth"],
//             listaCanciones: ["Demoliendo Hoteles", "Promesas Sobre el bidet", "Raros peinados nuevos", "Piano Bar", "No te animas a despegar", "No se va a llamar mi amor", "Tuve tu amor", "Rap del exilio", "Cerca de la revolucion", "Total interferencia"],
//             totalCanciones: 10,
//             año: 1984,
//         };
//         if(forzarError(0)){
//             rej("No se pudo obtener el resultado porque forzamos el error.");
//         }else{
//             res(pianoBar);
//         }
//     },2500)
// });

// promesaSobreElBidet.then((resultado)=>{
//     console.log("Datos obtenidos!");
//     const {nombreAlbum, artistas, listaCanciones,totalCanciones,año} = resultado;
//     const [autor, tecladista, guitarrista, baterista, bajista] = artistas;
//     const disco = `
//     Album: ${nombreAlbum}
//     Fecha de lanzamiento: ${año}
//     Canciones: ${totalCanciones};
//     Artista: ${autor};
//     Teclados: ${tecladista};
//     Guitarra: ${guitarrista};
//     Bajo: ${bajista};
//     Bateria: ${baterista};
//     Canciones: ${totalCanciones};
//     Lista de canciones: ${listaCanciones}
//     `;
//     console.log(disco)
// }).catch(error => {
//     console.error(`Ocurrio un error inesperado: ${error}`);
// })

//Async await

// async function saludoAsync() {
//   let saludo = "HOla!!!";
//   return saludo;
// }

{
  function tareaAsincrona(forzarError = false) {
    return new Promise((res, rej) => {
      console.log("Realizando Tarea asincrona...");
      setTimeout(() => {
        if (forzarError) {
          rej(new Error("error forzado"));
        }
        res("Promesa resuelta exitosamente");
      }, 500);
    });
  }

  function tareaSincrona(unaTarea) {
    console.log(`Realizando ${unaTarea} tarea sincrona...`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${unaTarea} tarea sincrona ${i}`);
    }
  }
}
// function main() {
//   tareaAsincrona()
//     .then((promesaResulta) => {
//       console.log(promesaResulta);
//       for (let i = 0; i <= 20; i++) {
//         console.log(`Realizando tarea asincrona ${i}`);
//       }
//     })
//     .catch((error) => {
//       console.error("Error: " + error.message);
//     });
//   tareaSincrona("Primera");
//   tareaSincrona("Segunda");
// }

//   async function main(){
//     let mensaje = "";

//     try{
//     const promise = await tareaAsincrona();
//     mensaje = promise;
//     }catch(error){

//     }
//     console.log(mensaje)
//   }

//   main();
//   tareaSincrona(`primera`)
//   tareaSincrona(`segunda`)
// }

// async function tareaAsincrona(forzarError = false) {
//   let promise = new Promise((res, rej) => {
//     if (forzarError) {
//       rej(new Error("error forzado"));
//     }
//     res("Promesa resuelta exitosamente");
//   });
//   try {
//     let x = 100;
//     if(x===100){
//         throw new Error("x es igual a 100")
//     }
//     let promesaResuelta = await promise;
//     return promesaResuelta;
//   } catch (error) {
//     throw error;
//   }
// }

// async function main() {
//   try {
//     let promesa = await tareaAsincrona(false);
//     console.log(promesa);
//   } catch (err) {
//     let error = err.message;
//     console.log('Esto se ejecuta en el catch del main');
//     console.error(error);
//   }
// }

function aaa() {
  let a = ""
  setTimeout(() => {
    a = 'aaaa'
  },500);
  return a 
}

console.log(aaa());
