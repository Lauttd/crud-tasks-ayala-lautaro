import express from "express";
import { createTask, deleteTask, getAllTask, getByIdTask, updateTask } from "../controllers/task.controller.js";
import validarParam from "../middlewares/validarParams.js";
export const routerTask = express.Router();

routerTask.post ("/api/tasks", createTask);
routerTask.get ("/api/tasks", getAllTask);
routerTask.get ("/api/tasks/:id",validarParam, getByIdTask);
routerTask.put ("/api/tasks/:id",validarParam, updateTask);
routerTask.delete ("/api/tasks/:id",validarParam, deleteTask);