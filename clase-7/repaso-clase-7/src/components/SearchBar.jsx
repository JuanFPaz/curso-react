/* eslint-disable react/prop-types */
function Search ({ onSearch }) {
  return (
    <>
      <form>
        <input type='search' name='search' id='search' aria-label='Escriba su busqueda' placeholder='Buscar..' onChange={(e) => onSearch(e.target.value)} />
      </form>
    </>
  )
}

export default Search
