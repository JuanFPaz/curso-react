import { useState } from "react";
import Categorias from "./Categorias/Categorias";
import Album from "./Album/Album";

function ContainerApp({ productos }) {
  const [copyProducto, setCopy] = useState([...productos]);
  console.log(copyProducto);

  function mostrarPor(dato,clave) {
    const filterProducto = productos.filter((p) => p[clave] === dato);
    setCopy([...filterProducto]);
  }

  function mostrarTodos(){
    setCopy([...productos])
  }
  return (
    <div className="container">
      <aside>
        <div className="aside-App">
          <Categorias
            productos={productos}
            onMostrarTodos={()=>{mostrarTodos()}}
            onMostrarPor={(dato,clave) => {
              mostrarPor(dato,clave);
            }}
          ></Categorias>
        </div>
      </aside>
      <section>
        <div className="section-App">
          {copyProducto.map((p) => (
            <Album key={p.SKU} {...p}></Album>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ContainerApp;
