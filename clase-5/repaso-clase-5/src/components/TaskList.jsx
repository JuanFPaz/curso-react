function TaskList({ tasks }) {
    const handleDelete = (id) => {
      alert("vamos a borrar:" + id);
    };
    return (
      <div>
        <ul>
          {tasks.map(t => <li>{t.id} - {t.description} - {t.isCompleted ? "terminado" : "pendiente"} <button onClick={() => handleDelete(t.id)}>borrar</button></li>)}      </ul>
      </div>
    );
  }
  
  export default TaskList;