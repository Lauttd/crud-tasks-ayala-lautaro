import express from "express";
import { createTask, deleteTask, getAllTask, getByIdTask, updateTask } from "../controllers/task.controller.js";

export const router = express.Router();

POST /api/users, createTask;
GET /api/users, deleteTask;
GET /api/users/:id, getAllTask;
PUT /api/users/:id, getByIdTask;
DELETE /api/users/:id, updateTask;