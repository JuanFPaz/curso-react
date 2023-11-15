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

  //todo: función para borrar una tarea habiendo recibido el id
  const handleDeleteTask = (id) => {
    //borrar una tarea que coincida con el id
  };


  return (
    <>
      <h1>Lista de Tareas</h1>

      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;