/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import data from "./data/data";
import "./App.css";

function Album({ artista, nombre, precio, SKU, cantidad, descripcion, foto }) {
  return (
    <>
      <div className="product-card">
        <img
          src={foto}
          alt={`${artista} - ${nombre}`}
          onClick={() => {
            console.log("hola");
          }}
        />
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

function Categorias(props) {
  function filtrarObjeto(productos, clave) {
    const cantidadPorProductos = {};
  
    // Iteramos sobre los productos para contar la cantidad por discográfica
    productos.forEach((producto) => {
      const discografica = producto[clave];
      // Si ya existe la discográfica en el objeto, incrementamos la cantidad
      if (cantidadPorProductos[discografica]) {
        cantidadPorProductos[discografica]++;
      } else {
        // Si no existe, inicializamos la cantidad en 1
        cantidadPorProductos[discografica] = 1;
      }
    });
    // Mapeamos el objeto a un arreglo de objetos con la estructura deseada
    const products = Object.keys(cantidadPorProductos).map(
      (pro) => {
        return {
          id: self.crypto.randomUUID(),
          pro,
          cantidad: cantidadPorProductos[pro],
        };
      }
    );
  
    const ProductsSort = products.sort((d, dd)=> dd.cantidad - d.cantidad )
    return ProductsSort
  }
  const discograficas= filtrarObjeto(props.productos,'discografica')
  const artistas = filtrarObjeto(props.productos,'artista')
  return (
    <>
      <div className="categories-list">
        <h1>Categorias:</h1>
        <h2>Discograficas</h2>
        <ul>
          {discograficas.map((d)=>(<li onClick={()=>{props.onMostrarDiscograficas(d.pro)}} className="Miau" key={d.id}> {d.pro} ({d.cantidad}) </li>))}
        </ul>
        <h2>Artistas:</h2>
        <ul>
          {artistas.map((a)=>(<li className="Miau" key={a.id}> {a.pro} ({a.cantidad})</li>))}
        </ul>
      </div>
    </>
  );
}

function Spinner() {
  return (
    <div className="overlay">
      <div className="spinner"></div>
    </div>
  );
}

function App() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    data().then((data) => {
      setProductos(data.productos);
      console.log(data.productos);
      setCargando(false);
    });
  }, []);

  function mostrarPorDiscografica(unDato){
    const asd = productos.filter((p)=> p.discografica === unDato)
    setProductos(asd)
  }

  return (
    <>
      <header>
        <div className="titulo">
          <h1>Tienda de Rock - Peperina</h1>
        </div>
        <form>
          <input type="text" placeholder="Buscar..." id="search-input" />
        </form>
      </header>
      <div className="container">
        <aside>
          <div id="Aside-App">
            {cargando ? <></> : <Categorias productos={productos} onMostrarDiscograficas={(discografica)=>{mostrarPorDiscografica(discografica)}}></Categorias>}
          </div>
        </aside>
        <main>
          <div id="App">
            {cargando ? (
              <Spinner></Spinner>
            ) : (
              productos.map((producto) => (
                <Album key={producto.id} {...producto} />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
