import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../redux/action.reducer";

const preloadedState = {
  tasks: [],
};

export const store = configureStore({
  reducer: taskReducer,
});
