import { useState, useEffect } from "react";
import Spinner from "./ContainerApp/Spinner";
import ContainerApp from "./ContainerApp/ContainerApp";
import data from '../data/data.js'

function Main() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    data().then((data) => {
      setProductos(data.productos);
      setCargando(false);
    });
  }, []);
  return (
    <main>
      {cargando ? (
        <Spinner></Spinner>
      ) : (
        <ContainerApp productos={productos}></ContainerApp>
      )}
    </main>
  );
}

export default Main