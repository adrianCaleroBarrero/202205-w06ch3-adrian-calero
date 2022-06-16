import { iTask } from "../interfaces/task";

export class TaskModel implements iTask {
  id: number;
  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }
  constructor(
    public task: string,
    public responsible: string,
    public isComplete: boolean
  ) {
    this.id = TaskModel.generateId();
  }
}
