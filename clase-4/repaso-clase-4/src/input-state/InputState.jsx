import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function InputState() {
  //Ejemplo de Statefull:
  const [mensaje, setMensaje] = useState("");
  const [show, setShow] = useState(false)
  function obtenerDatos(e) {
    setMensaje(e.target.value);
    setShow(true)
  }

  return (
    <div className="App">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Label htmlFor="searchBar">Busqueda:</Form.Label>
        <Form.Control
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Buscar..."
          onChange={obtenerDatos}
        />
      </Form>
      <Alert className='mt-2' variant='dark' show={show}>
        {mensaje}
      </Alert>
    </div>
  );
}

export default InputState;
