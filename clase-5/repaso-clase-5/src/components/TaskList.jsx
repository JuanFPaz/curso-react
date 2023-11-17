/* eslint-disable react/prop-types */
function TaskList({ tasks, onDeleteTask,onChangeStatus }) {
  return (
    <>
      <ul>
        {tasks.map((t) => (
          <li key ={t.id}>
            {t.id.slice(-5)} - {t.description} -{" "}
            {t.isCompleted ? "terminado" : "pendiente"}{" "}
            <button
              onClick={() => {
                onDeleteTask(t.id);
              }}
            >
              borrar
            </button>
            <button
              onClick={() => {
                onChangeStatus(t.id);
              }}
            >
              Cambiar estado
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
