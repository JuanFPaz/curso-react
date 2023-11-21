/* eslint-disable react-refresh/only-export-components */
import { Link, Outlet } from 'react-router-dom'

export default function Root () {
  return (
    <>
      <div id='sidebar'>
        <h1>Clase 6</h1>
        <nav>
          <ul>
            <li>
              <Link to='Props/'>Props</Link>
            </li>
            <li>
              <Link to='Estado/'>Estados</Link>
            </li>

            <li>
              <Link to='Hooks/'>Hooks</Link>
            </li>
            <li>
              <Link to='Eventos/'>Eventos</Link>
            </li>
            <li>
              <Link to='ListarElementos/'>Eventos</Link>
            </li>
            <li>
              <Link to='Ruteo/'>Ruteo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
