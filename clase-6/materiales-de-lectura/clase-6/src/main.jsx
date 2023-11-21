import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './routes/errorpage'
import Props from './routes/components/props'
import Estado from './routes/components/estado'
import Hooks from './routes/components/hooks'
import Eventos from './routes/components/eventos'
import ListaElementos from './routes/components/listaElementos'
import Ruteo from './routes/components/ruteo'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'Props/',
        element: <Props />
      },
      {
        path: 'Estado/',
        element: <Estado />
      },
      {
        path: 'Hooks/',
        element: <Hooks />
      },
      {
        path: 'Eventos/',
        element: <Eventos />
      },
      {
        path: 'ListarElementos/',
        element: <ListaElementos />
      },
      {
        path: 'Ruteo/',
        element: <Ruteo />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
