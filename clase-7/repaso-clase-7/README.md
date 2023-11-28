# Repaso Clase 7

- Barra de busqueda:

- Creamos una copia de tasks llamada filteredTask, para no modificare l estado original, y enviarsela al componente TaskList

```jsx
import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TaskList from './components/TaskList'
import Search from './components/SearchBar'

function App () {
  const [tasks, setTasks] = useState([])
  const [filteredTask, setFiltered] = useState([]) // <-- filteredTask

  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
    setFiltered([...filteredTask, newTask])
  }

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id)
    setTasks([...remainingTasks])
    setFiltered([...remainingTasks])
  }

  const handleChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id
        ? { ...t, isCompleted: !t.isCompleted }
        : t
    )
    setTasks([...modifiedTasks])
    setFiltered([...modifiedTasks])
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Search />
      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList
        onDeleteTask={(id) => handleDelete(id)} tasks={filteredTask} // <-- filteredTask
        onChangeStatus={(id) => handleChangeStatus(id)}
      />
    </>
  )
}

export default App
```

- Luego queda crear el handleChange para detectar cuando filtramos una tarea.
- Creamos un nuevo estado llamado `searchQuery`, y dentro del handleChange, le decimos que `setee` el estado con lo que busca nuestro usuario
- Para poder manipular este evento, tenemos que crear un evento personalizado en el componente Search, y que se encargue demaniupilarlo cuando ocurra el evento en el formulario.

```jsx
//Componente App
  const handleSearchQuery = (query) => {
    const queryResult = tasks.filter(t => t.description.toLowerCase().includes(query.toLowerCase()))
    setQuery(query)
    setFiltered([...queryResult])
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Search onSearch={(query) => handleSearchQuery(query)} />
      <p>{searchQuery}</p>
      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList
        onDeleteTask={(id) => handleDelete(id)} tasks={filteredTask} // <-- filteredTask
        onChangeStatus={(id) => handleChangeStatus(id)}
      />
    </>
  )

  //Componente Seach
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
```

//Local storage.

Minuto 1:03:22
