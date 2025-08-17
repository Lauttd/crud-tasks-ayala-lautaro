import express from "express";
import { createTask, deleteTask, getAllTask, getByIdTask, updateTask } from "../controllers/task.controller.js";

export const routerTask = express.Router();

routerTask.post ("/api/tasks", createTask);
routerTask.get ("/api/tasks", deleteTask);
routerTask.get ("/api/tasks/:id", getAllTask);
routerTask.put ("/api/tasks/:id", getByIdTask);
routerTask.delete ("/api/tasks/:id", updateTask);