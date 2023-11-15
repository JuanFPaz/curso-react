/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

// function SearchBar(){

// }

function Input({ onAddTask }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const input = formdata.get("description");
        onAddTask(input);
        e.target.reset()
      }}
    >
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Agrega una nueva tarea"
      />
      <input type="submit" value="Crear" />
    </form>
  );
}

function TaskList({ tarea }) {
  return (
    <>
      <ul>
        {tarea.map((t) => (
          <li key={t.id}>{t.description}</li>
        ))}
      </ul>
    </>
  );
}

function RepasoClases() {
  const [tarea, setTarea] = useState([]);

  function eventoInput(descripcion) {
    const newTask = {
      id: self.crypto.randomUUID(), //UUID[0-9a-fA-E]
      description: descripcion,
      isCompleted: false,
    };
    setTarea([...tarea, newTask]);
    console.log(tarea);
  }


  return (
    <>
      <h1>Lista de tareas</h1>
      {  /*Creamos una funcion personalizada*/}
      <Input
        onAddTask={(text) => {
          eventoInput(text);
        }}
      ></Input>
      <TaskList tarea = {tarea}></TaskList>
    </>
  );
}

export default RepasoClases;
