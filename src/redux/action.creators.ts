import { createAction } from "@reduxjs/toolkit";
import { iTask } from "../interfaces/task";
import { actionTypes } from "./action.types";

export const loadTaskAction = createAction<iTask[]>(actionTypes["task@load"]);
export const addTaskAction = createAction<iTask>(actionTypes["task@create"]);
export const modifyTaskAction = createAction<iTask>(actionTypes["task@modify"]);
export const deleteTaskAction = createAction<iTask>(actionTypes["task@delete"]);
