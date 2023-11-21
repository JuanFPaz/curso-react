
import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
function TaskList({ tasks, onDeleteTask, onChangeStatus }) {
  const msg = (text) => alert(text);
  return (
    <div>
      <ul>
        {tasks.map(t => <li key={t.id}
          className={t.isCompleted ? "completed" : null}
        >{t.id.slice(-5)} - {t.description}   <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(t.id)} />  <IoIosCloseCircle className="icons" size={20} color="blue" onClick={() => onChangeStatus(t.id)} /></li>)}      </ul>
    </div>
  );
}

export default TaskList;