import { useDispatch } from "react-redux";
import { iTask } from "../interfaces/task";
import { HttpStoreTask } from "../services/local.storage";
import * as ac from "../redux/action.creators";

export function Card({ task }: { task: iTask }) {
  const dispatch = useDispatch();
  const api = new HttpStoreTask();

  function handleUpdate() {
    const newState = { ...task, isComplete: !task.isComplete };
    api.updateTask(newState).then((resp) => {
      dispatch(ac.modifyTaskAction(newState));
    });
  }

  function handleRemove() {
    api.removeTask(task).then((resp) => dispatch(ac.deleteTaskAction(task)));
  }

  return (
    <li>
      <p>{task.task}</p>
      <p>{task.responsible}</p>
      <input
        checked={task.isComplete}
        type="checkbox"
        name="isComplete"
        id="completed"
        onChange={handleUpdate}
      />
      <button onClick={handleRemove}>🗑️</button>
    </li>
  );
}
