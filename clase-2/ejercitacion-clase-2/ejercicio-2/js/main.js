function main() {
  const suma = document.getElementById('suma')
  const resta = document.getElementById('resta')
  const multiplicacion = document.getElementById('multiplicacion')
  const division = document.getElementById('division')

  function calculadora(unOperador) {
    const op = unOperador
    const operandoUno = document.getElementById('operando-uno')
    const operandoDos = document.getElementById('operando-dos')

    op.onclick = () => {
      const calculo = new Promise((res, rej) => {
        if (chequearOperandos(operandoUno, operandoDos)) {
          const calcular = {
            numUno: Number(operandoUno.value),
            numDos: Number(operandoDos.value),
            reset: function () {
              operandoUno.value = ''
              operandoDos.value = ''
            },
            operacion: op.id
          }
          res(calcular)
        } else {
          const error = {
            mensaje:
              'Antes de realizar la operacion, rellene los dos campos porfavor.'
          }
          rej(new Error(error.mensaje))
        }
      })

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
          </p>` // <- y mostrar el error en este evento. Pero sale undefined
        })
    }
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
  // utilidades
  function chequearOperandos(opUno, opDos) {
    return opUno.value && opDos.value
  }

  calculadora(suma)
  calculadora(resta)
  calculadora(multiplicacion)
  calculadora(division)
}

main()