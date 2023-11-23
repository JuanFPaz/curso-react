/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function MyButton ({ unEvento, unaAccion }) {
  console.log(`Se renderiza el componente del button ${unaAccion}`)
  return (
    <>
      <Button variant='light' onClick={unEvento}> {unaAccion} </Button>
    </>
  )
}

function State () {
  // Ejemplo Statefull:
  console.log('Se renderiza el componente App con un estado')
  const [num, setNum] = useState(100)

  function incrementar () {
    setNum(num + 100)
  }

  function decrementar () {
    setNum(num - 100)
  }

  return (
    <>
      <div className='container-fluid'>
        <h1>Estados en React</h1>
        <p>{num}</p>
        <MyButton unEvento={incrementar} unaAccion='Incrementar' />
        <MyButton unEvento={decrementar} unaAccion='Decrementar' />
      </div>
    </>
  )
}

export default State
