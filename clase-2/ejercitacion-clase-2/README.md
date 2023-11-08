# Resolucion de ejercicio 1 y 2 (CLASE 2)

## Repositorio

- [https://github.com/JuanFPaz/curso-react](https://github.com/JuanFPaz/curso-react/tree/main/clase-2/ejercitacion-clase-2)

Para la resolucion de los trabajos utilice `Promesas`, `Babel` para transpilar codigo `ES6` a `ES5`, y `Bootstrap` para algunos diseños.

## Ejercicio 1 : Callbacks

Este directorio contiene un archivo `index.html` con un breve resumen de que son las callbacks, y en que casos se suelen implementar, con los ejemplos de los codigos mostrados en pantalla.

[Directorio Ejercico 1](./ejercicio-1/)

![Ejemplo directorio 1](https://i.imgur.com/wWs2oZE.png)

Implemente `Babel` para conocer que es la retrocompatibildad de `ES6` a `ES5`. Como no vi ningun tipo de problema, estan insertados en el documento `HTML`. Los codigos transpilados se encuentran en el directorio [build/main.js](./ejercicio-1/build/main.js). En el directorio [js/](./ejercicio-2/js/) estan los archivos con sintaxis `ES6`.

### Previsualizacion del ejercicio 1

[![Previsualizacion del ejercicio 1](https://i.imgur.com/x2Wvc7v.png)](./ejercicio-1/index.html)

#### Resolucuion del ejercicio 1

En el mismo [documento `html`](./ejercicio-1/index.html) contiene un resumen sobre los temas planteados en la [ejercitacion de la clase 2](ejercitacion.md).

## Ejercicio 2: Calculadora

Para este ejercicio, utilice `Promises` para crear la calculadora. Este directorio contiene un archivo `index.html`, donde se visualiza la calculadora, y otros archivos que instale en mi `package.json` como dependencias de desarrollo para utilizar `eslint`, `prettier` y `babel`:

[Directorio Ejercico 2](./ejercicio-2/)

![Ejemplo directorio 2](https://i.imgur.com/Dq68uVQ.png)

Borre la carpeta **node_modules** porque claramente iba a pesar mucho.

### Previsualicacion del ejercicio 2

[![Previsualizacion del ejercicio 2](https://i.imgur.com/91qlHbx.png)](./ejercicio-2/index.html)

En el directorio [build/](./ejercicio-2/build/) estan los codigos transpilados con la logica de la calculadora y que estan insertados en el documento `HTML`. En el directorio [js/](./ejercicio-2/js/) estan los archivos con sintaxis `ES6`.

#### Resolucion ejercicio 2

- [Main](./ejercicio-2/js/main.js) contiene la logica de la calculadora, asignandoles un evento a cada boton de la calculadora, con una funcion que recibe un operador (un Boton) y le asigna un evento `onclick`, evitando escribir el mismo evento para cada uno de los operadores (botones).

- El evento contiene una callback, que resuelve la promesa `calculo`. Esta promesa se resuelve cuando los `inputs` operando tengan un valor cada uno, enviando en un objeto los valores de cada operando y ademas, el `id` del boton que ejecuto el evento `onclick`. De lo contrario, se rechaza la promesa y se envia un mensaje de error.

```js
function main() {
  const suma = document.getElementById("suma");
  const resta = document.getElementById("resta");
  const multiplicacion = document.getElementById("multiplicacion");
  const division = document.getElementById("division");

  function calculadora(unOperador) {
    const op = unOperador;
    const operandoUno = document.getElementById("operando-uno");
    const operandoDos = document.getElementById("operando-dos");

    op.onclick = () => {
      const calculo = new Promise((res, rej) => {
        if (chequearOperandos(operandoUno, operandoDos)) {
          const calcular = {
            numUno: Number(operandoUno.value),
            numDos: Number(operandoDos.value),
            reset: function () {
              operandoUno.value = "";
              operandoDos.value = "";
            },
            operacion: op.id, // output -> "suma" || "resta" || "multiplicacion" || "division"
          };
          res(calcular);
        } else {
          const error = {
            mensaje:
              "Antes de realizar la operacion, rellene los dos campos porfavor.",
          };
          rej(new Error(error.mensaje));
        }
      });
    };
  }

  // utilidades
  function chequearOperandos(opUno, opDos) {
    return opUno.value && opDos.value;
  }

  calculadora(suma);
  calculadora(resta);
  calculadora(multiplicacion);
  calculadora(division);
}
```

- En el mismo evento `onclick`, se resuelve el calculo. El bloque `then` solo se va a ejecutar si la promesa se resuelve con exito. Llamamos una funcion realizar Operacion, que `destructura` un objeto que reciba como parametro, en este caso, el objeto es el `valor`.

- Esta funcion contine un objeto operaciones, y cada una de sus propiedades son funciones corresponde a `suma`, `resta`, `division`, `multiplicacion`. La funcion retorna una de estas funciones, accediendo al indice del objeto con una cadena de texto (que en este caso, `operacion` corresponde al valor id del operador seleccionado), y como parametros de la funcion, le enviamos el valor del `operandoUno` y `operandoDos` (que en este caso corresponden a `numUno` y `numDos`):

- En el caso del `catch`, este bloque se ejecuta cuando la promesa es rechazada. En este caso simplemente mostramos en el navegador, el `error.message` de la promesa.

```js
function main() {
  //resto del codigo ...
  function calculadora(unOperador) {
    //resto del codigo ...
    op.onclick = () => {
      const calculo = new Promise ((res,rej) => {...})

      calculo
        .then((valor) => {
          const divResultado = document.getElementById('resultado-contenedor')
          const resultado = realizarOperacion(valor) // <- Si se hace la division, deberia chequear si hay un error.
          if (resultado.estado) {
            throw new Error(resultado.mensaje)
          } else {
            const displayResultado = displayOperacion(valor)
            divResultado.innerHTML = `
            <p class="alert alert-success">
              ${displayResultado} ${resultado}
            </p>`
            valor.reset()
          }
        })
        .catch((error) => {
          console.log(error.message)
          const divResultado = document.getElementById('resultado-contenedor')
          divResultado.innerHTML = `
          <p class="alert alert-danger">
            ${error.message}
          </p>`
        })
    };
  }

  function realizarOperacion({ operacion, numUno, numDos }) {
    const operaciones = {
      suma: function (a, b) {
        return a + b
      },
      resta: function (a, b) {
        return a - b
      },
      multiplicacion: function (a, b) {
        return a * b
      },
      division: function (a, b) {
        return chequearDivision(a, b)
      }
    }
    return operaciones[operacion](numUno, numDos)
  }
    //resto del codigo
}
```

- En la funcion `division` del objeto operaciones, tenemos otra funcion que se encarga de chequear el resultado. Si la division nos da un resultado de `NaN` (que se genera cuando dividmos por 0) o `Infinity` (cuando divimos 1 por 0), retornamos un objeto `error` para detectarlo en el bloque `then`, y que el bloque `catch` se encargue de mostrar el error:

```js
function main() {
  //resto de codigo

  function calculadora(unOperador) {
  //resto de codigo

    op.onclick = () => {
      const calculo = new Promise ((res,rej) => {...})

      calculo
        .then((valor) => {
          const divResultado = document.getElementById('resultado-contenedor')
          const resultado = realizarOperacion(valor)
          if (resultado.estado) { // <- En el caso de una division, detecta si hubo un error
            throw new Error(resultado.mensaje)
          } else {
            const displayResultado = displayOperacion(valor)
            divResultado.innerHTML = `
            <p class="alert alert-success">
              ${displayResultado} ${resultado}
            </p>`
            valor.reset()
          }
        })
        .catch((error) => {
          console.log(error.message)
          const divResultado = document.getElementById('resultado-contenedor')
          divResultado.innerHTML = `
          <p class="alert alert-danger">
            ${error.message} 
          </p>` // <- y mostrar el error en este evento. Pero sale undefined
        })
    }
  }

  function chequearDivision(numUno, numDos) {
    const nan = numUno / numDos
    const infinity = numUno / numDos
    if (isNaN(nan) || infinity === Infinity) {
      const error = {
        estado: true,
        mensaje: `No se puede realizar la operacion ${numUno}/${numDos}`
      }
      return error
    } else {
      return numUno / numDos
    }
  }
  //resto del codigo
}

```

- Por ultimo, si la operacion se realizo con exito, mostramos en el navegador, el calculo realizado y el resultado de la operacion. Para mostrar el calculo realizado, creamos otra funcion similar a `realizarOperacion`, llamada `displayOperacion`:

```js
function main() {
  //resto del codigo ...
  function calculadora(unOperador) {
    //resto del codigo ...
    op.onclick = () => {
      const calculo = new Promise ((res,rej) => {...})

      calculo
        .then((valor) => {
          const divResultado = document.getElementById('resultado-contenedor')
          const resultado = realizarOperacion(valor) // <- Si se hace la division, deberia chequear si hay un error.
          if (resultado.estado) {
            throw new Error(resultado.mensaje)
          } else {
            const displayResultado = displayOperacion(valor)
            divResultado.innerHTML = `
            <p class="alert alert-success">
              ${displayResultado} ${resultado}
            </p>`
            valor.reset()
          }
        })
        .catch((error) => {
          console.log(error.message)
          const divResultado = document.getElementById('resultado-contenedor')
          divResultado.innerHTML = `
          <p class="alert alert-danger">
            ${error.message}
          </p>`
        })
    };
  }

  function displayOperacion({ operacion, numUno, numDos }) {
    const display = {
      suma: function (a, b) {
        return `${a} + ${b} =`
      },
      resta: function (a, b) {
        return `${a} - ${b} =`
      },
      multiplicacion: function (a, b) {
        return `${a} * ${b} =`
      },
      division: function (a, b) {
        return `${a} / ${b} =`
      }
    }
    return display[operacion](numUno, numDos)
  }
    //resto del codigo
}
```

Y por ultimo invocamos la funcion `main()` para que pueda funcionar todo :D

```js
function main(){...}

main()
```
