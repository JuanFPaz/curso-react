function validarDatos() {
  const operandoUno = document.getElementById('operando-uno')
  const operandoDos = document.getElementById('operando-dos')

  function eventCharCode(opNum) {
    opNum.onkeypress = (event) => {
      // Permite solo números del 0 al 9 y un signo de menos al principio
      if (
        (event.charCode >= 48 && event.charCode <= 57) ||
        (event.charCode === 45 && !opNum.value.includes('-'))
      ) {
        // Verifica si ya hay un signo de menos presente
        if (event.charCode === 45 && opNum.value.includes('-')) {
          // Evita agregar más signos de menos
          event.preventDefault()
        }
      } else {
        // Evita otros caracteres
        event.preventDefault()
      }
    }
  }
  function controllWheel(opNum) {
    opNum.onmousewheel = (event) => {
      event.preventDefault()
    }
  }
  eventCharCode(operandoUno)
  eventCharCode(operandoDos)
  controllWheel(operandoUno)
  controllWheel(operandoDos)
}

function resetForm() {
  /* Funcion que se encarga de resetar el formulario cuando se recarga la pagina */
  const form = document.getElementById('calculadora-form')
  window.addEventListener('load', async () => {
    await form.reset()
  })
}
validarDatos()
resetForm()
