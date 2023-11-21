import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header-container'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Main</Link>
        </li>
        <li className='nav-item'>
          <Link to='/pagina1' className='nav-link'>Página 1</Link>
        </li>
        <li className='nav-item'>
          <Link to='/pagina2' className='nav-link'>Página 2</Link>
        </li>
        <li className='nav-item'>
          <Link to='/pagina3' className='nav-link'>Página 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
