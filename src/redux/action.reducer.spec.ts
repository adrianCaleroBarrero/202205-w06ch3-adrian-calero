import { TaskModel } from "../model/task";
import { taskReducer } from "./action.reducer";
import * as ac from "./action.creators";

describe("Given the function taskReducer", () => {
  const mockComponent: TaskModel = {
    id: 1,
    task: "test",
    responsible: "yo",
    isComplete: true,
  };
  describe("When i use Load", () => {
    test("Then it should load the chapter", () => {
      const initialState: TaskModel[] = [];

      const newState = taskReducer(
        initialState,
        ac.loadTaskAction([mockComponent])
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockComponent]);
    });
  });
  describe("When i use add", () => {
    test("Then it should adding the chapter", () => {
      const initialState: TaskModel[] = [];

      const newState = taskReducer(
        initialState,
        ac.addTaskAction(mockComponent)
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockComponent]);
    });
  });
  describe("When i use modify", () => {
    test("Then it should update the chapter", () => {
      const initialState: TaskModel[] = [
        { ...mockComponent, isComplete: false },
      ];

      const newState = taskReducer(
        initialState,
        ac.modifyTaskAction(mockComponent)
      );

      expect(newState).toHaveLength(1);
      expect(newState).toStrictEqual([mockComponent]);
    });
  });
  describe("When i use delete", () => {
    test("Then it should delete the chapter", () => {
      const initialState: TaskModel[] = [];

      const newState = taskReducer(
        initialState,
        ac.deleteTaskAction(mockComponent)
      );

      expect(newState).toHaveLength(0);
    });
  });
});
