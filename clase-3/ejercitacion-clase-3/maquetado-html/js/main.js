function data() {
  return new Promise((res, rej) => {
    fetch(
      "https://raw.githubusercontent.com/JuanFPaz/Json/main/JSON-ejercicios/rock-nacional.json"
    ).then((response) => {
      res(response.json());
    });
  });
}

function Albumnes({
  artista,
  nombre,
  precio,
  SKU,
  cantidad,
  descripcion
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
    const productos = data.productos;
    productos.forEach((producto) => {
      Albumnes({ ...producto });
    });
    // (() => {
    //   console.log(`Seccion: ${tituloSeccion}`);
    //   productos.forEach((producto) => {
    //     Productos({ ...producto });
    //   });
    // })();
  });
}

App();

/*Cargando los datos al dom*/

function AppDom() {
  function Albumnes(
    unDiv,
    { artista, nombre, precio, SKU, cantidad, descripcion, foto }
  ) {
    const productoCard = document.createElement("div");
    const imageProducto = document.createElement("img");
    const detallesProducto = document.createElement("div");
    const titutloProducto = document.createElement("h2");
    const descripcionProducto = document.createElement("p");
    const precioProducto = document.createElement("div");
    const skuProducto = document.createElement("div");
    const cantidadProducto = document.createElement("div");

    productoCard.setAttribute("class", "product-card");
    imageProducto.setAttribute("src", foto);
    detallesProducto.setAttribute("class","product-details");
    precioProducto.setAttribute("class","product-price");
    skuProducto.setAttribute("class","product-sku");
    cantidadProducto.setAttribute("class","availability");
    titutloProducto.innerHTML = `${artista} - ${nombre}`;
    descripcionProducto.innerHTML = `${descripcion}`;
    precioProducto.innerHTML = `${precio}`;
    skuProducto.innerHTML = `SKU: ${SKU}`;
    cantidadProducto.innerHTML = `Disponible: ${cantidad} unidades`;
    detallesProducto.appendChild(titutloProducto);
    detallesProducto.appendChild(skuProducto);
    detallesProducto.appendChild(precioProducto);
    detallesProducto.appendChild(descripcionProducto);
    detallesProducto.appendChild(cantidadProducto);
    productoCard.appendChild(imageProducto);
    productoCard.appendChild(detallesProducto);
    unDiv.appendChild(productoCard);
  }

  data().then((data) => {
    const tituloSeccion = data.seccion;
    const productos = data.productos;
    (() => {
      console.log(`Seccion: ${tituloSeccion}`);
      const appDiv = document.getElementById("App");
      productos.forEach((producto) => {
        Albumnes(appDiv, { ...producto });
      });
    })();
  });
}

AppDom();
