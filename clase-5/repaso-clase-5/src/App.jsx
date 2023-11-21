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



  // función para borrar una tarea habiendo recibido el id
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
  };

  //función que cambia el valor de isCompleted (una tarea puede pasar de 
  // pendiente a competada )

  const handleChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id ?
        { ...t, isCompleted: !t.isCompleted }
        :
        t
    );
    setTasks([...modifiedTasks]);

  };


  return (
    <>
      <h1>Lista de Tareas</h1>

      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList
        onDeleteTask={(id) => handleDelete(id)} tasks={tasks}
        onChangeStatus={(id) => handleChangeStatus(id)}
      />
    </>
  );
}

export default App;




