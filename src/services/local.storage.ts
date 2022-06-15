import { iTask } from "../interfaces/task";

export class HttpStorecharacters {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/characters/";
  }
  getAllcharacters(): Promise<iTask[]> {
    return fetch(this.url).then((resp) => {
      return resp.json();
    });
  }

  addcharacter(charapter: iTask): Promise<iTask> {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(charapter),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  updatecharacter(character: iTask): Promise<Partial<iTask>> {
    return fetch(this.url + `/${character.id}`, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  removecharacter(character: iTask): Promise<number> {
    return fetch(this.url + `/${character.id}`, {
      method: "DELETE",
    }).then((response) => response.status);
  }
}
