/* eslint-disable no-unused-vars */
function main () {
  const operandoUno = document.getElementById('operando-uno')
  const operandoDos = document.getElementById('operando-dos')

  function obtenerResultado (evento) {
    return new Promise((resolve) => {
      const valor = evento.target.value
      if (valor) {
        resolve(Number(valor))
      }
    })
  }

  operandoUno.addEventListener('input', (e) => {
    obtenerResultado(e)
      .then((valorUno) => {
        console.log('Primer operando: ' + valorUno)
        operandoDos.removeAttribute('disabled')
        operandoDos.addEventListener('input', (e) => {
          obtenerResultado(e)
            .then((valorDos) => {
              console.log('Segundo operando: ' + valorDos)
              console.log(valorUno + valorDos)
            })
            .catch((error) => {
              console.error(error)
            })
        })
      })
      .catch((error) => {
        console.error(error)
      })
  })
}

function validaNumericos (event) {
  /* Este evento controla que solo se pueda ingresas numeros y un valor negativo en los input de los operando */
  const input = event.target.value
  // Permite solo números del 0 al 9 y un signo de menos al principio
  if (
    (event.charCode >= 48 && event.charCode <= 57) || (event.charCode === 45 && !input.includes('-'))
  ) {
    // Verifica si ya hay un signo de menos presente
    if (event.charCode === 45 && input.includes('-')) {
      // Evita agregar más signos de menos
      event.preventDefault()
    }
  } else {
    // Evita otros caracteres
    event.preventDefault()
  }
}
function resetForm () {
  /* Funcion que se encarga de resetar el formulario cuando se recarga la pagina */
  const form = document.getElementById('calculadora-form')
  window.addEventListener('load', async () => {
    await form.reset()
  })
}
function controllWheel () {
  /*
        Funcion que se encarga de controlar el incrementro/decremento del input type=number
        que viene por defecto
    */
  const operandoUno = document.getElementById('operando-uno')
  const operandoDos = document.getElementById('operando-dos')

  operandoUno.addEventListener('wheel', (e) => {
    e.preventDefault()
  })
  operandoDos.addEventListener('wheel', (e) => {
    e.preventDefault()
  })
}

main()
resetForm()
controllWheel()
