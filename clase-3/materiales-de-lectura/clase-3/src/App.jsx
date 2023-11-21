/* eslint-disable react/prop-types */
import React from "react";

class Saludo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.nombre = props.nombre;
    this.apellido = props.apellido 
  }
  render() {
    return (
      <>
        <h1>Hola {this.nombre} {this.apellido}</h1>
        <p>Estamos en un componente de clase</p>
      </>
    );
  }
}

function App() {
  const usuario = {
    nombre: 'Luxa',
    apellido: 'Paz'
  }
  return <Saludo {...usuario}></Saludo>;
}

export default App;
