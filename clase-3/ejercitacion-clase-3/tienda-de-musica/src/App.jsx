/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import data from "./data/data";
import "./App.css";

function Album({ artista, nombre, precio, SKU, cantidad, descripcion, foto }) {
  return (
    <>
      <div className="product-card">
        <img src={foto} alt={`${artista} - ${nombre}`} />
        <div className="product-details">
          <h2>
            {artista} - {nombre}
          </h2>
          <p>{descripcion}</p>
          <div className="product-sku">SKU: {SKU}</div>
          <div className="product-price">{precio}</div>
          <div className="availability">Disponible: {cantidad} unidades</div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    data().then((data) => {
      setProductos(data.productos);
      setCargando(false);
    });
  }, []);

  return (
    <>
      <header>
        <input type="text" placeholder="Buscar..." id="search-input" />
      </header>
      <div className="container">
        <aside>
          <div id="Aside-App"></div>
        </aside>
        <main>
          <div id="App">
            {cargando ? (
              <p>Cargando...</p>
            ) : productos ? (
              productos.map((producto) => (
                <Album key={producto.id} {...producto} />
              ))
            ) : (
              <p>No hay productos disponibles.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
