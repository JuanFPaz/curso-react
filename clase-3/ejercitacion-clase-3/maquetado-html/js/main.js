function data() {
  return new Promise((res, rej) => {
    fetch(
      "https://raw.githubusercontent.com/JuanFPaz/Json/main/JSON-ejercicios/rock-nacional.json"
    ).then((response) => {
      res(response.json());
    });
  });
}

function Productos({ artista, albumnes }) {
  console.log("*******");
  albumnes.map((album) => {
    Albumnes({ artista, ...album });
    return;
  });
}

function Albumnes({
  artista,
  nombre,
  precio,
  SKU,
  cantidad,
  descripcion,
  ...asdasd
}) {
  console.log(`Artista: ${artista}`);
  console.log(" ");
  console.log(`Nombre: ${nombre}`);
  console.log(" ");
  console.log(`Precio: ${precio}`);
  console.log(" ");
  console.log(`SKU: ${SKU}`);
  console.log(" ");
  console.log(`cantidad: ${cantidad}`);
  console.log(" ");
  console.log(`Descripcion: ${descripcion}`);
  console.log("*******");
  // console.log(asdasd)
}
function App() {
  data().then((data) => {
    const tituloSeccion = data.seccion;
    const productos = data.productos;
    (() => {
      console.log(`Seccion: ${tituloSeccion}`);
      productos.forEach((producto) => {
        Productos({ ...producto });
      });
    })();
  });
}

App();
