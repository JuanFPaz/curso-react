export default function filtrarObjetoPor(productos, clave) {
    const cantidadPorProductos = {};

    productos.forEach((producto) => {
      const valor = producto[clave];

      if (cantidadPorProductos[valor]) {
        cantidadPorProductos[valor]++;
      } else {

        cantidadPorProductos[valor] = 1;
      }
    });

    const Ocurrencias = Object.keys(cantidadPorProductos).map((nombre) => {
      return {
        id: self.crypto.randomUUID(),
        nombre,
        cantidad: cantidadPorProductos[nombre],
      };
    }).sort((d, dd) => dd.cantidad - d.cantidad);
    return Ocurrencias;
  }