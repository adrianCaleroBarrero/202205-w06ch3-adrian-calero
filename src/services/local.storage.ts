import { iTask } from "../interfaces/task";

export class HttpStoreTask {
  url: string;
  constructor() {
    this.url = "http://localhost:3542/tasks";
  }
  getAllTask(): Promise<iTask[]> {
    return fetch(this.url).then((resp) => {
      return resp.json();
    });
  }

  addTask(charapter: iTask): Promise<iTask> {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(charapter),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  updateTask(character: iTask): Promise<iTask> {
    return fetch(this.url + `/${character.id}`, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  removeTask(character: iTask): Promise<number> {
    return fetch(this.url + `/${character.id}`, {
      method: "DELETE",
    }).then((response) => response.status);
  }
}
