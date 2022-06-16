import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { TaskModel } from "../model/task";
import { HttpStoreTask } from "../services/local.storage";
import * as ac from "../redux/action.creators";

export function Form() {
  const api = new HttpStoreTask();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    task: "",
    responsible: "",
    isComplete: false,
  });

  function handleOnChange(ev: SyntheticEvent) {
    const target = ev.target as HTMLFormElement;
    setFormData({ ...formData, [target.name]: target.value });
  }

  function handleOnSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    const newTask: TaskModel = {
      ...new TaskModel(
        formData.task,
        formData.responsible,
        formData.isComplete
      ),
    };

    api.addTask(newTask).then((resp) => {
      dispatch(ac.addTaskAction(newTask));
      setFormData({
        task: "",
        responsible: "",
        isComplete: false,
      });
    });
  }
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <label>Añade una tarea: </label>
      <input
        type="text"
        name="task"
        value={formData.task}
        onChange={(ev) => {
          handleOnChange(ev);
        }}
      />
      <label>Responsable de la tarea: </label>
      <input
        type="text"
        name="responsible"
        value={formData.responsible}
        onChange={(ev) => handleOnChange(ev)}
      />
      <button type="submit" value="submit">
        Añadir
      </button>
    </form>
  );
}
