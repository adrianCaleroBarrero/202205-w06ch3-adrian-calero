import * as ac from "./action.creators";
import { iTask } from "../interfaces/task";
import { createReducer } from "@reduxjs/toolkit";

const initialState: Array<iTask> = [];
export const taskReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(ac.loadTaskAction, (state, action) => [...action.payload])
    .addCase(ac.addTaskAction, (state, action) => [...state, action.payload])
    .addCase(ac.modifyTaskAction, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(ac.deleteTaskAction, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    )
    .addDefaultCase((state) => state);
});
