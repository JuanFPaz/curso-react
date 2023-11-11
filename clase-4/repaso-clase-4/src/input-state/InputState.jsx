import { useState } from "react";

function InputState() {
  //Ejemplo de Statefull:
  const [mensaje, setMensaje] = useState("");

  function obtenerDatos(e){
    setMensaje(e.target.value)
  }

  return (
    /*1:23*/
    /* Quedamos minuto 1:26*/
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchBar">Busqueda:</label>
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Buscar..."
          onChange={obtenerDatos}
        />
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default InputState;
