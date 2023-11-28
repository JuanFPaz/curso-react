import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TaskList from './components/TaskList'
import Search from './components/SearchBar'

function App () {
  const [tasks, setTasks] = useState([])
  const [filteredTask, setFiltered] = useState([]) // <-- filteredTask
  const [searchQuery, setQuery] = useState('')

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
}

export default App
