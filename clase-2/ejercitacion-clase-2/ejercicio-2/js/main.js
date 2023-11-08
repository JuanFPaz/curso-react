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
            operacion: op.id
          }
          res(calcular)
        } else {
          const error = {
            mensaje: 'llene los dos campos antes de realizar la operacion'
          }
          rej(error)
        }
      })

      calculo
        .then((valor) => {
          const resultado = realizarOperacion(valor)
          console.log(resultado)
        })
        .catch((error) => {
          console.error(error)
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
        return a / b
      }
    }

    return operaciones[operacion](numUno, numDos)
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
