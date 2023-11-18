function Header() {
  return (
    <header>
      <div className="titulo">
        <h1>Tienda de Rock - Peperina</h1>
      </div>
      <form>
        <input type="text" placeholder="Buscar..." id="search-input" />
      </form>
    </header>
  );
}

export default Header