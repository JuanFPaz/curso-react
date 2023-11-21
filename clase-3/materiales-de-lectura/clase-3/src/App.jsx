/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react'
import './App.css'

function Introduccion () {
  return (
    <>
      <section>
        <h1>
          <h1>Introduccion a React</h1>
        </h1>
        <article>
          <h2>¿Que es React.js?</h2>
          <p>
            ReactJS es una libreria Javascript de código abierto enfocado a la
            visualizacion que nos permite desarrollar interfaces de usuario
            dinamicas e interactivas.
          </p>
          <p>
            Una libreria de Javascript es un conjunto de funciones y
            herramientas prescritas que pueden ser utilizads por desarrolladores
            para facilitar la creacion de aplicaciones web. Estas librerias
            pueden incluir funciones para manipular elementos HTML, interactuar
            con servidores, crear animaciones, gestionar eventos de usuarios,
            etc.
          </p>
          <p>
            React esta basado en un paradigma llamado programacion orientada a
            componentes, en el que cada componente es una pieza que el usuario
            puede interactuar. Estos componentes estan creados en una sintaxis
            llamada JSX, que nos permite escribir HTML y JS en un mismo archivo.
            La principal funcionalidad de estos componentes es que son
            reutilizables y se combinan para crear componentes mayores hasta
            configurar un sitio web completo.
          </p>
        </article>
        <article>
          <h2>Introduccion a JSX</h2>
          <p>
            JSX es una extension de sintaxis de Javascript, y que tambien nos
            permite escribir HTML en el mismo archivo. Por ejemplo:
          </p>
          <pre>
            <code>
              <span>
                {`
                  function UnComponente() {
                    let saludo = "Hola a todos";
                    return (
                      <>
                        <h1>{saludo}</h1>
                      </>
                    );
                  }
                `}
              </span>
            </code>
          </pre>
        </article>
      </section>
    </>
  )
}

function App () {
  return <Introduccion />
}

export default App
