function Luxa({ nombre, apellido, edad, fotos}) {
  const nombreCompleto = `${nombre} ${apellido}`;
  return (
    <div className="container">
      <h1>{nombreCompleto}</h1>
      <p>Edad: {edad}</p>
      <img src={fotos[0].url} alt="brigitta xd" width="350px"/>
    </div>
  );
}

function App() {
  const luxita = {
    nombre: 'Luxita',
    apellido: 'Paz',
    edad: 7,
    fotos: [
      {descripcion: 'La desgracia de ser cuerva.', url:'https://i.imgur.com/pAo10Pe.jpg'},
      {descripcion: 'Jugando un poco...', url:'https://i.imgur.com/8ZbHrrt.jpg'},
    ]
  }
  return <>
    <Luxa {...luxita}></Luxa>
  </>;
}
export default App;
