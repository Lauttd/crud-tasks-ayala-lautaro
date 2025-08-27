import express from "express";
import { createTask, deleteTask, getAllTask, getByIdTask, updateTask } from "../controllers/task.controller.js";
import validarParam from "../middlewares/validarParams.js";
import { validacionesTask, validacionesTaskUpdate } from "../middlewares/task.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
export const routerTask = express.Router();

routerTask.post ("/api/tasks", validacionesTask, aplicarValidaciones, createTask);
routerTask.get ("/api/tasks", getAllTask);
routerTask.get ("/api/tasks/:id",validarParam, aplicarValidaciones, getByIdTask);
routerTask.put ("/api/tasks/:id",validarParam, validacionesTaskUpdate ,aplicarValidaciones, updateTask);
routerTask.delete ("/api/tasks/:id",validarParam, aplicarValidaciones, deleteTask);