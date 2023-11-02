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

Hoy tenemos transpiladores para traducir `ES6` a `ES5`, pero tambien los hay para traducir de otros lenguajes a `JavaScript`, como por ejemplo `TypeScript`, que nos permite transpilar el codigo a cualquier estandar de `Javascript` como `ES5` o `ES6`.

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

Con `ES6` podemos definir las variables con las palabras reservadas `let` y `const`. La principal diferencia entre ellas se presenta que las variables definidas con `const` (conocidas como **constantes**), no pueden cambiar su valor, es decir una ves que definimos una **constante**, siempre representara es valor. Por eso es una buena practica hacer referencia a los arreglos, objetos y objetos del DOM con una `const`.

Por su parte, las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor.

```js
let unaVariable = "Las variables definidas con `let`, pueden ser inicializadas con un valor y pueden redeclarar un valor."

const unaConstante = "Una constante no puede cambiar si valor una ves que la inicializamos.";

console.log(unaVariable);
console.log(unaConstante);

unaVariable = "Tranquilamente, aca podemos redeclar un nuevo valor para la variable LET, puede ser mismo un String, un Number, un Boolean, etc."

// unaConstante = "Si intentamos cambiar el valor de la constante, la consola nos mostrar aun mensaje de error"
```

