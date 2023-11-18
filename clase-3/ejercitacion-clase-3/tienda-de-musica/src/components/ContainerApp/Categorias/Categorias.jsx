import filtrarObjetoPor from "../../../utilities/filtrarObjeto.js";

function Categorias({ productos, onMostrarTodos ,onMostrarPor }) {
  const discograficas = filtrarObjetoPor(productos, "discografica");
  const artistas = filtrarObjetoPor(productos, "artista");

  return (
    <>
      <div className="categories-list">
        <h1>Categorias:</h1>
        <h2>Seccion</h2>
        <ul>
          <li onClick={onMostrarTodos}className="Miau">Rock Nacional ({productos.length})</li>
        </ul>
        <h2>Discograficas</h2>
        <ul>
          {discograficas.map((d) => (
            <li
              onClick={() => {
                onMostrarPor(d.nombre, "discografica");
              }}
              className="Miau"
              key={d.id}
            >
              {" "}
              {d.nombre} ({d.cantidad}){" "}
            </li>
          ))}
        </ul>
        <h2>Artistas</h2>
        <ul>
          {artistas.map((a) => (
            <li
              className="Miau"
              key={a.id}
              onClick={() => {
                onMostrarPor(a.nombre, "artista");
              }}
            >
              {" "}
              {a.nombre} ({a.cantidad})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categorias;
