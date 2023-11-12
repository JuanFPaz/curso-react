/* eslint-disable react/prop-types */

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function MyButton({unEvento,unaAccion}){
  console.log(`Se renderiza el componente del button ${unaAccion}`)
  return(
    <>
      <Button variant="dark" onClick={unEvento}> {unaAccion} </Button>
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
        <MyButton unEvento={incrementar} unaAccion="Incrementar"></MyButton>
        <MyButton unEvento={decrementar} unaAccion="Decrementar"></MyButton>
      </div>
    </>
  )
}

export default State
