// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import State from './introduccion-state/State'
import InputState from './input-state/InputState'
import './App.css'

function App() {
  //Ejemplo Statefull:
  console.log("Se renderiza el componente App con un estado")
  return (
    <>
        <State></State>
        <InputState></InputState>
    </>
  )
}

export default App
