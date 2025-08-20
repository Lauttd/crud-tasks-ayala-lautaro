import express from "express";
import { createTask, deleteTask, getAllTask, getByIdTask, updateTask } from "../controllers/task.controller.js";

export const routerTask = express.Router();

routerTask.post ("/api/tasks", createTask);
routerTask.get ("/api/tasks", getAllTask);
routerTask.get ("/api/tasks/:id", getByIdTask);
routerTask.put ("/api/tasks/:id", updateTask);
routerTask.delete ("/api/tasks/:id", deleteTask);