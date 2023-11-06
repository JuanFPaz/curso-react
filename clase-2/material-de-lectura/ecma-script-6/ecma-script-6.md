# ES6 - ECMAScript 6

## Bloques tematicos

- [Que es ECMA Script.](#que-es-ecma-script)
- [Transpiladores](#transpiladores)
- [Templates String](#javascript---template-string)

## Que es ECMA Script

**`ECMAScript`** es el estandar que define como debe ser el lenguaje `Javascript`.

`Javascript` es interpretado y procesado por multiples plataformas, como el navegador web, `NodeJS` y otros ambitos más especificos como el desarrollo de aplicaciones para windows y otros sistemas operativos. Todos los responsables de cada una de esas tecnologias se encargar de interpretar el lenguaje tal como dice el estándar `ECMAScript`.

`ECMAScript 5` (`ES5`) fue el estandar que se mantuvo por años, y a dia de hoy es la version mas extendida en todo tipo de plataformas.
Cuando uno dice que conoce o escribe `JavaScript`, es comun entender que usa `ES5`, el estandar de `Javascript` con mayor indice de compatibilidad.

En resumen, cuando escribimos `JavaScript` en el navegador, en distintos sistemas y entornos, lo normal es que el codigo termine siendo `ES5`.

### Transpiladores

Conscientes de los problemas de compatbilidad o soporte a `ES6` en las distintas plataformas, se podria pensar que:

- Es poco aconsejable usar `ES6` hoy, debido a la falta de compatibilidad.
- Lo correcto seria esperar que todos los navegadores es pongan al dia para empezar a usar ES6.

**Afortunadamente** no hay nada mas alejado a la realidad. Es totalmente recomendado usar `ES6`, gracias a la aparcion de una herramienta que existe en nuestros entornos de desarrollo, los ***transpiladores***.

Los transpiladores son programas capaces de traducir el código de un lenguaje para otro, o de una version para otra. Por ejemplo, el código escrito en `ES6`, traducirlo a `ES5`.

El transpilador es una herramienta que se **usa durante la fase de desarrollo.** En esta fase, podemos escribir codigo y el transpilador lo convierte en un priceso de *"traduccion/compilacion = transpilacion"*. EL codigo transpilado, compatible es el que se distribuye o despliega para llevar a produccion. Por tanto, todo el trabajo de traduccion del codigo, se queda solo en la etapa dedesarrollo y no supone una carga mayor para el sistema donde se va a ejecutar de cara al publico.

Hoy tenemos transpiladores para traducir `ES6` a `ES5`, pero tambien los hay para traducir de otros lenguajes a `JavaScript`, como por ejemplo el `TypeScript`, que nos permite transpilar el codigo a cualquier estandar de `Javascript` como `ES5` o `ES6` con su compilador `tsconfig.json`.

## Javascript - Template String

Una de las nuevas implementaciones de `ES6` es interpolar las `String`. De una formas mas sencilla que se usaba en otros lenguajes o mismo en estandares antiguos de `Javascript`:

```js
    /*En ES5*/ 
    {   
        var miNombre = "Juan Paz";
        var mensaje = "Hola a todos, me llamo " +minombre", un gusto conocerlos.";
    }

    /*En ES6*/
    {
        let miNombre = "Juan Paz"
        let mensaje = `Hola a todos, me llamo ${miNombre}, un gusto conocerlos.`;
    }
```

En este ejemplo, utilizamos los **ambitos de bloque** (una implementacion de `ES6` que veremos más adelante), y para realizar la interpolacion de `String` utilizamos las **backticks** (` `` `) luego colocamos el placehoder `${...}` para identificar el contenido interpolado. De esta forma evitamos tener que concatenar las variables al string definido con comillas.

## Javascript - Let y Const

Con `ES6` podemos definir las variables con las palabras reservadas `let` y `const`. La principal diferencia entre ellas se presenta que las variables definidas con `const` (conocidas como **constantes**), no pueden reasignar su valor, es decir una ves que definimos una **constante**, siempre representara es valor. Por eso es una buena practica hacer referencia a los arreglos, objetos y objetos del DOM con una `const`.

Por su parte, las variables definidas con `let`, pueden ser inicializadas con un valor y pueden reasignar un valor (No confundir con Redeclara un valor).

```js
let unaVariable = "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden reasignar un valor."

const unaConstante = "Una constante no puede cambiar su valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable = "Tranquilamente, aca podemos reasignar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc."

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"
```

## Scope (Alcance de ambito)

Antes de `ES6`, Javascript tenia 2 tipos de ambitos: El `Global Scope` (Ambito Global) y el `Function Scope` (Ambito de funcion.).

El ambito global es donde literalmente toda nuestro archivo `Javascript.` Cada Linea de codigo que escribimos, la escribimos en el ambito global. Dentro de este ambito global, tambien esta el ambito de funcion, las cuales estas pueden hacer referencia a las variables declaradas en el ambito global, pero no viceversa:

```js
/*Esto seria el ambito global*/
let unaGata = "Luxa Paz";
console.log(unGata);

/*Esto seria un ambito de funcion*/
function ambitoDeFuncion(){
    let unGato = "Peperino Paz";
    console.log(unaGata);
    console.log(unGato);
}

console.log(unGato);
```

Con la llegada de `ES6`, se introdujo el `Bloque Scope` (Ambito de Bloque, que vimos en el primer ejemplo). Este ambito nos permite declarar las variables `let` y `const` que no seran accesibles en el Ambito global.

Los ambitos de bloque tambien puede ser una condicional `if-else`, un bucle `for`, `do-while`, `while`, un `try-catch`, etc. Estos bloques estan delimitados por llaves (`{}`). Por ejemplo, si quisieramos acceder a una variable `let` definida en un bucle for desde afuera, la consola nos muestra un error:

```js
for(let i = 0; i < 10; i++){
    console.log(i);
}

// console.log(i); -> Output: i is not defined
```

La unica que escapa a esta regla, es la variable definida con `var`, cuyo alcance solo se limita con el de una funcion. Es decir, que desde una funcion podemso acceder a las variable de un ambito `global` y de un ambito de `bloque`, pero no podemos acceder a las variables en un ambito global que esten dentro de un ambito de `funcion`.

```js
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
```

## Function Arrow (Funciones de flecha)

Las funciones de flecha, es una simplificacion sintactica de las funciones de `ES5`.

Por ejemplo, tenemos esta funcion:

```js
/*ES5*/
var saludo = function (mensaje){
    console.log("Hola "+ mensaje);
}
saludo("a todes!") // output -> Hola a todes!
```

Con las funciones de flecha serian:

```js
/*ES6*/
const saludo = (mensaje) => {
    console.log(`Hola ${mensaje}`);
}
saludo("a todos, todas y todes!"); //outpu -> Hola a todos, todas y todes!
```

Para crear una `arrow function` no debemos colocar la palabra resevada `function`, solamente debemos poner los parentesis donde va a llevar (o no) los parametros de la funcion, seguido de una flecha (`=>`) y con apertura y cierre de llaves.

Una `arrow function` tambien puede tener distintos tipos de sintaxis, pero de todas formas, todas hacen lo mismo. Por ejemplo:

```js
/*ES5*/
var suma = function(num){
    return num + num;
}

/*ES6: En caso de ser una unica sentencia y sin {} aplica return*/
const suma = (num)=> num + num;

/*Si recibe un unico parametro no hace falta los ()*/
const suma = num => num + num;

/*Si no recibe parametros, debemos colocar los ()*/
const suma = () => 5 + 5;
```

Es importante entonces, en caso de no colocar las llaves (`{}`) y tener una unica sentencia, la `arrow function` de forma implicia nos `retorna` un valor. Si queremos crear una funcion que realice varias tareas y que nos pueda llevar mas de una linea de codigo para `retornar` un valor (o no, no es necesario siempre), ahi si debemos usar las llaves (`{}`):

```js
const calcular = ()=>{
    /*Realizamos uan suma, una resta, multiplicacion, separamos en termino, etc etc.*/
    return resultado
}
```

## Valores por defecto

Ya que estamos con las funciones, vamos a ver otra de las novedares que nos brinda `ES6`. Podemos asignar valores por defecto a las variables que se pasan por parámetros en las funciones. Antes teniamos que comprobar si la variable ya tenia un valor. Ahora con ES6 se la podemos asignar segunn creemos la funcion.

```js
/*ES5*/
function obtenerUsuario(nombre,año){
    año = (typeof año !== "undefined") ? año:2018; //COn esta liena de codigo se comprobaba si el parametro año le habiamos pasado un valor, de lo contrario se la asigna uno por defecto
    console.log("Nombre Usuario: " + nombre + ". Año: " + año);
}
obtenerUsuario("Juan Paz") //Output -> Nombre Usuario: Juan Paz. Año: 2018

/*ES6*/
function obtenerUsuario(nombre,año = 2018){
    console.log(`Nombre Usuario: ${name}. Año: ${year}`);
}
obtenerUsuario("Juan Paz") //Output -> Nombre Usuario: Juan Paz. Año: 2018
```

Como vemos, el parametro `año` cuando no recibe valor, tomara por default el valor 2018. Podriamos decir que ese parametro, se transforma en un `parametro opcional` de nuestra funcion.

## Deconstructor

El `deconstructor` es una expresion que nos permite extraer propiedades de un objeto o items de un arreglo:

Por ejemplo, supongamos que tenemos este objeto, y queremos acceder a sus propiedades para mostrarlo por consola:

```js
const gato = {
    nombre: "Luxita",
    apellido: "Paz",
    edad: 7,
    esDomestico: true,
    genero: "femenino"
}

const nombre = gato.nombre;
const apellido = gato.apellido;
const edad = gato.edad;
const esDomestico = gato.esDomestico;
const genero = gato.genero;


console.log(nombre); // Output -> "Luxita"
console.log(apellido); // Output -> "Paz"
console.log(edad); // Output -> 7
console.log(esDomestico); // Output -> true 
console.log(genero); // Output -> "femenino"
```

Con la `deconstruccion`, podemos obtener referencia de las propiedades de un objeto con una sola `constante`, con las propiedades del mismo nombre del objeto `gato`:

```js
const {nombre, apellido,edad,esDomestico,genero} = gato;

console.log(nombre); // Output -> "Luxita"
console.log(apellido); // Output -> "Paz"
console.log(edad); // Output -> 7
console.log(esDomestico); // Output -> true 
console.log(genero); // Output -> "femenino"
```

En el caso de un arreglo es similar. Anteriormente para tener referencia de un elemento de un arreglo, haciamos esto:

```js
const frutas = ["Banana","Naranja","Manzana","Frutillas","Peras"];
const frutaUno = frutas[0];
const frutaUno = frutas[1];
const frutaUno = frutas[2];
const frutaUno = frutas[3];
const frutaUno = frutas[4];

console.log(frutaUno); // Output ->"Banana"
console.log(frutaDos); // Output ->"Naranja"
console.log(frutaTres); // Output ->"Manzana"
console.log(frutaCuatro); // Output ->"Frutillas"
console.log(frutaCinco); // Output -> "Peras"
```

Con la `descontruccion` podemos obtener las referencias de los elementos de un arreglo con usa sola `constante`, creando una referencia por cada elemento del arreglo:

```js
const frutas = ["Banana","Naranja","Manzana","Frutillas","Peras"];
const [frutaUno,frutaDos,frutaTres,frutaCuatro,frutaCinco] = frutas;

console.log(frutaUno); // Output ->"Banana"
console.log(frutaDos); // Output ->"Naranja"
console.log(frutaTres); // Output ->"Manzana"
console.log(frutaCuatro); // Output ->"Frutillas"
console.log(frutaCinco); // Output ->"Peras"
```

## Rest y Spread

Los operadores `Rest` y `Spread` son dos caracteristicas de `ES6` que tambien nos permiten tener un mejor manejo de arreglos y objetos.

Con `Spread` podemos propagar los elementos de un arreglo de forma individual. Se denota tambien con tres puntos (`...`). En el contexto de un arreglo, se utiliza para expandir todo los elementos de un arreglo en una sola referencia:

```js
const arreglo = [1,2,3,4,5];
const arregloDos = [10,9,8,7,6]

const nuevoArreglo = [...arreglo, ...arregloDos];

console.log(nuevoArreglo); // Output -> [1,2,3,4,5,10,9,8,7,6]
```

En este ejemplo, utilizamos `Spread` para combinar los dos arreglos (`arreglo` y `arregloDos`) en el nuevo arreglo llamado `nuevoArreglo`.

Ademas de los arreglos, los `spread` tambien se puede utilizar con objetos par acombinar propiedades de multiples objetos, en uno solo:

```js
let alumno = {nombre : "Juan",apellido : "Paz"};
let curso = {curso: "ReactJs", modalidad: "Online"}

let alumnoCurso = {...alumno, ...curso};

console.log(alumnoCurso); //Output -> { nombre: 'Juan', apellido: 'Paz', curso: 'Reactjs' }
```

Otra funcionalidad del `Spread`, es que nos permite "copiar" un objeto. Es decir, utilizamos este operador, estamos creando un nuevo objeto con las mismas propiedades y valores que el objeto original. Por ejemplo:

```js
const objetoOriginal = {a:1, b:2};
const objetoCopia = {...objetoOriginal};

objetoCopia.a = 10;
console.log(`La propiedad "a" del objeto Copia ahora vale 10: ${objetoCopia}`);
console.log(`La propiedad "a" del objeto Original siguie valiendo 1:${objetoOriginal}`);
```

Esto es importante saber, porque generalmente cuando uno crea una referencia un objeto sin el operador `Spread`, generalmente suele tener problemas indeseados. Por ejemplo:

```js
const objetoCopiaDos = objetoOriginal;

objetoCopiaDos.a = 100;
console.log(`La propiedad "a" del objeto Copia Dos ahora vale 100: ${objetoCopia}`);
console.log(`La propiedad "a" del objeto Original ahora vale 100:${objetoOriginal}`);
```

El operador `Rest` tiene una sintaxis similar al `Spread`, pero este solo se utiliza al momento de definir una funcion, y se lo pasa como argumento. Al utilizar un parametro `rest` en una funcion, nos permite aceptar cualquier cantidad de datos como argumentos y crea un nuevo arreglo. Por ejemplo:

```js
function rest(...numeros){
    console.log(numeros);
}

rest(100,15,221,54,6879,5,13,246,4984,555,) // Output -> [100,15,21,54,6879,5,13,246,4984,555]
```

Tambien podemos aplicar `Rest` en objetos o arreglos, en combinacion con la `Descontruccion` que vimos previamente. Basicamente, seria mezclar lo visto con los `deconstructores`, `spread` y `rest.`

Por ejemplo, si tenemos este objeto, y queremos tener una referencia del nombre, y separar el resto de sus propiedades, con `rest` podemos hacer esto:

```js
const repartidor = {nombre: "Agustin Jimenez", moto:"Suzuki", aplicaciones: ["Pedidos ya", "Rapiboy"]};
const {nombre, ...datosAdicionales} = repartidor;
console.log(nombre); // output -> "Agustin Jimenez".
console.log(datosAdicionales); // Output -> {moto: "Suzuki", aplicaicones: ["Pedidos ya", "rapiboy"]}
```

En este caso, separamos el nombre del objeto `repartidor`, y con el operador `rest` capturamos el resto de los datos de este objeto en la `deconstruccion.`

## Promesas

Una `Promises` (promesa en castellano), es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona. Las promesas se crean utilizando su constructor, y este recibe una `callback` y que a su vez tambien recibe otras dos `callbacks` para definir el resultado del estado de la promesa. `Resolve` y `Reject`, Por ejemplo:

```js
/*Codigo Productor*/
const promesa = new Promise((res,rej)=>{
    //Si esta condicion se cumple, la promesa llama la callback resolve y envia una respuesta exitosa. De lo contrario, la promesa envia una respuesta de error con la callback reject.
    let x = 10;
    if(x === 10){
        res("Promesa Resuelta");
    }else {
        rej("Promesa Rechazada");
    }
});

/*Condigo consumidor*/
promesa.then((resultado)=>{
    console.log(resultado); //Output -> "Promesa Resulta"
}).catch((error)=>{
    console.error(error); // Output -> "Promesa rechazada"
})
```

Las `Promises` se dividen en dos partes: El `codigo productor` y el `codigo consumidor`.

El `codigo productor` de una promesa se encarga de enviar la respuesta, la cual puede llevar tiempo en ejecutarse, y nos puede enviar dos estados posibles, `resolve` y `reject`. En el ejemplo anterior, vemos que si `x === 10`, la promesa nos devuelve una respuesta exitosa, llamando a la callback `resolve` (`res` en este ejemplo). Y en caso de que esa condicion no se cumpla, la promesa nos devolvera una respuesta de error, llamando a la callback `Reject` (`rej` en este caso).

El `codigo consumidor`, debe esperar uno de los resultados de la promesa. Por eso se dice, que las promesa son tareas asincronas, porque nos permite realizar otras funciones mientras esperamos que se resuelva una promesa. Para poder utilizar una promesa, utilizamos la funcion `.then()` y `.catch()`, que reciben como argumento una callback, para poder trabajar con el resultado exisoto de la promesa, o con el resultado de error de la promesa.
En el ejemplo anterior, cuando se cumple la promesa, vemos que pasamos como argumento el `resultado` de la promesa, y luego la mostramos por consola. Y con la funcion `catch`, podemos manejar el error de la promesa cuando esta la rechaza, o bien cuando ocurre otro error inesperado, permitiendonos, tener mayor control sobre el codigo identificando el error inesperado y manejarlos correctamente.

El ejemplo que vimos anteriormente es muy sencillo para introduccirnos a las `Promesas`, pero no sirve si quermos ver como manejar datos devueltos de una promesa. Por ejemplo tenemos esta promesa que nos va a devolver un objeto, utilizando la funcion `setTimeout`. Esta funcion recibe 2 parametros, una `callback` y un tiempo en milisegundos (`ms`) que le indica cuanto tiempo debe esperar para ejecutar la `callback`. Dentro de la `callback`, es donde vamos a colocar el codigo productor de nuestra promesa:

```js
const promesaSobreElBidet = new Promise((res,rej)=>{
    console.log("Obteniendo datos...")
    setTimeout(()=>{
        let forzarError = x => x === 10;
        const pianoBar = {
            nombreAlbum: "Piano Bar",
            artistas : ["Charly Garcia", "Fito Paez", "Pablo Guyot", "Willy Iturri", "Alfredo Toth"],
            listaCanciones: ["Demoliendo Hoteles", "Promesas Sobre el bidet", "Raros peinados nuevos", "Piano Bar", "No te animas a despegar", "No se va a llamar mi amor", "Tuve tu amor", "Rap del exilio", "Cerca de la revolucion", "Total interferencia"],
            totalCanciones: 10,
            año: 1984,
        };
        if(forzarError(0)){
            rej("No se pudo obtener el resultado porque forzamos el error.");
        }else{
            res(pianoBar);
        }
    },2500)
});
```

En el codigo productor, creamos una funcion para forzar un error parametrizable, solamente de prueba. Tenemos el objeto `pianoBar` que nuestra promesa va a devolver si se cumple la condicion con la funcion creada previamente. Si le pasamos un parametro 10 a `forzarError`, la promesa va a ser rechazada. Si le cambiamos otro valor que no sea 10, nuestra promesa, se resuelve con exito, enviando el objeto `pianoBar.`

```js
promesaSobreElBidet.then((resultado)=>{
    console.log("Datos obtenidos!")
    const {nombreAlbum, artistas, listaCanciones,totalCanciones,año} = resultado;
    const [autor, tecladista, guitarrista, baterista, bajista] = artistas;
    const disco = `
    Album: ${nombreAlbum}
    Fecha de lanzamiento: ${año}
    Canciones: ${totalCanciones};
    Artista: ${autor};
    Teclados: ${tecladista};
    Guitarra: ${guitarrista};
    Bajo: ${bajista};
    Bateria: ${baterista};
    Canciones: ${totalCanciones};
    Lista de canciones: ${listaCanciones}
    `;
    console.log(disco)
}).catch(error => {
    console.error(error);
})
```

El codigo consumidor, solamente va a estar esperando que se resuelva la promesa, y a traves del `then`, vamos a manipular el resultado obtenido, para mostrar los datos del objeto.
Y si forzamos el error en el codigo productor, se ejecutara la funcion `catch`.
