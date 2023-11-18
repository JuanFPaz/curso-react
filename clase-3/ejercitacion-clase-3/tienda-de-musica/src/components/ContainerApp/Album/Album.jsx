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

export default Album;
