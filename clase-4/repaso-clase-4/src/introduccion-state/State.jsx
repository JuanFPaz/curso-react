/* eslint-disable react/prop-types */

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
function Button({unEvento,unaAccion}){
  console.log(`Se renderiza el componente del button ${unaAccion}`)
  return(
    <>
      <button onClick={unEvento}> {unaAccion} </button>
    </>
  )
}

function State() {
  //Ejemplo Statefull:
  console.log("Se renderiza el componente App con un estado")
  const [num, setNum] = useState(100)


  function incrementar(){
    setNum(num + 100)
  }
  
  function decrementar(){
    setNum(num - 100)
  }

  return (
    <>
      <div className='App'>
        <h1>Estados en React</h1>
        <p>{num}</p>
        <Button unEvento={incrementar} unaAccion="Incrementar"></Button>
        <Button unEvento={decrementar} unaAccion="Decrementar"></Button>
      </div>
    </>
  )
}

export default State
