import State from './introduccion-state/State'
import InputState from './Input-state/InputState'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  console.log('Se renderiza el componente App con un estado')
  return (
    <main>
      <State />
      <InputState />
    </main>
  )
}

export default App
