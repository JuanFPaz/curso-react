# Repaso Clase 5

Vamos a contruir una aplicacion de Tareas (**TODO App**) con el fin de entender loas bases de `React` repasando la composicion de los componentes, datos y estados.

```todo: subir planificacion```

## Iniciando proyecto

Iniciamos un nuevo proyecto con `Vite` utilizando el comando:

```npm create vite todo-app -- --template```

Una vez creado e instalado las dependencias de nuestro proyecto, nos dirigmos a [App.jsx](./src/App.jsx) y borramos todo el contendido del componente, y los imports que por ahora, no los necesitamos.

```jsx
//Componente App
function App () {
  return (
    <>
        {/*Dejamos este titulo por el momento*/}
      <h1>Lista de Tareas</h1>
    </>
  )
}

export default App
```

Creamos un directorio de componentes dentro de `src` y colocamos los componentes que habiamos planificado antes:

- `Input.jsx` - El componente Input que se encargara de agregrar nueva tarea
- `TaskList.jsx` - El componente encargado de mostrar nuestras tareas.
- `SearchBar.jsx` - El componente encargado de filtrar las tareas de la lista de tareas.

De los estilos, nos encargamos más adelante.

## Componente Input

A continuacion, vamos a crear nuestro componente `Input`. Por ahora, lo que vamos a crear, es un formulario, que contenga:

-`label`: Una etiqueta para referenciar nuestro input.
-`Input type text`: El input donde el usuario va a escribir una nueva tarea, con los atributos `placeholder` y `required`.
-`Input type submit`: El input cuando el usuario termine de escribir la tarea, le permita al formulario, enviar los datos ingresados.

```jsx
//Componente Input.jsx

function Input(){
    return (
        <form>
            <label htmlFor='input'>Nueva tarea: </label>
            <input type='text' name='input' id='input' placeholder='Comprar pan...' required/>
            <input type='submit' value='Crear' />
        </form>
    )
}

export default Input
```

Ahora el objetivo es, obtener el dato ingresado por el usuario, y poder almacenarlo en una variable para mostrarlo en las lista de tareas (`TaskList`). Para eso, vamos a utilizar el hook `useState` para almacenar estos datos, y de paso, importamos nuestro componente `Input` creado recientemente.

## Use State

```jsx
//Componente App.jsx
import { useState } from 'react'
import Input from './components/Input'


function App () {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input  />
      />
    </>
  )
}

export default App
```

El objetivo del estado de `App`, que almacene en su memoria, un arreglo de tareas. Para eso sirve `useState`, en este ejemplo, vemos que tenemos un arrego `destructurado`, que tiene:

- `tasks`: El nombre del arreglo que contendra las tareas.
- `setTask`: Es una funcion de `useState`, que nos permite actualizar el valor de `tasks`, y re-renderizar nuestro componente `App`, en este caso.
- `useState`: Es la funcion con la que inicializamos nuestro estado. Esta funcion, recibe el valor inicial de nuestras `tasks`, que en este caso es un arreglo vacio.

Para ser mas claros, `tasks` es igual a un arreglo vacio en este momento:

```js
const task = []
```

Pero con `useState`, nos permite tener una persistencia de los datos de las tareas. Y como mencionamos antes, estos datos corresponden a lo que ingresa nuestro usuario en el input, y que se van a guardar en nuestro estado. Esto no es lo mismo que decir, que almacenamos un dato en una base de datos, o localstorage o algo similar. Cada vez que volvamos a abrir nuestra aplicacion, apretemos F5 o algo similar, el arreglo de `tareas` va a estar vacia, porque cuando `App` se vuelva a renderizar desde el inicio, este crea el estado de las tareas, en un arreglo vacio.

Ahora tenemos que conseguir, que nuestro arreglo de tareas, reciba los datos ingresados por el usuario desde el input y los guarde en el arreglo. Primero, tenemos que saber, que tipo de objeto vamos a guardar. Por ejemplo, puede ser un objeto como el siguiente:

```js
const task01 = {id: 1, descripcion:'Darle de comer a la gata', isCompleted: false}
const task02 = {id: 2, descripcion:'Arreglar la moto', isCompleted: false}
```

Y nuestro arreglo de tareas, tendria que almacenarlos de la siguiente forma:

```js
task = [task01,task02] 
```

Aca es donde entra en juego el `setTask` para actualizar nuestro arreglo de tareas. Lo vamos a continuacion:

## Handler Events?

```jsx
//Componente App.jsx
import { useState } from 'react'
import Input from './components/Input'


function App () {
  const [tasks, setTasks] = useState([])

  function handleAddTask(unaDescripcion){
    const newTask = {
      id: self.crypto.randomUUID(),
      descripcion: unaDescripcion,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
    }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input  onAddTask={(unaDescripcion)=>{handleAddTask(unaDescripcion)}}/>
      />
    </>
  )
}

export default App
```

```jsx
//Componente Input

function Input ({ onAddTask }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const todoForm = new FormData(e.target)
    const description = todoForm.get('description')
    onAddTask(description)
    e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='description'>Nueva tarea: </label>
      <input type='text' name='description' id='description' placeholder='Comprar pan...' required />
      <input type='submit' value='Crear' />
    </form>
  )
}

export default Input
```