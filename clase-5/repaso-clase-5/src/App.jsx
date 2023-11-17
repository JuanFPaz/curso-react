import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  //función para agregar una nueva tarea, recibe la descripción que viene
  //del evento que se dispara cuando le damos "Crear" en el componente Input
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  };

  
  const handleDelete = (id) => {
    const remainingTask = tasks.filter(t=> t.id !== id);
    setTasks([...remainingTask])
  };

  const handleChangeStatus = (id) => {
    const newTaskCompleted = tasks.map(t=>{
        return t.id === id ? {...t, isCompleted: !t.isCompleted} : t
    })

    setTasks([...newTaskCompleted])
  }
  return (
    <>
      <h1>Lista de Tareas</h1>

      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList onDeleteTask={(id)=> handleDelete(id)} onChangeStatus={handleChangeStatus} tasks={tasks} />
    </>
  );
}

export default App;