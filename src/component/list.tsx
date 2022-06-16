import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iTask } from "../interfaces/task";
import { HttpStoreTask } from "../services/local.storage";
import * as ac from "../redux/action.creators";
import { Card } from "./card";
export function List() {
  const tasks = useSelector((state) => state as iTask[]);
  const api = new HttpStoreTask();
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllTask().then((resp) => {
      dispatch(ac.loadTaskAction(resp));
    });
  }, [dispatch]);

  return (
    <ul>
      {tasks.length &&
        tasks.map((task) => <Card key={task.id} task={task}></Card>)}
    </ul>
  );
}
