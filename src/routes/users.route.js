import express from "express";
import { createUser, deleteUser, getAllUser, getByIdUser, updateUser } from "../controllers/user.controller.js";

export const router = express.Router();

POST /api/users, createUser;
GET /api/users, getAllUser;
GET /api/users/:id, getByIdUser;
PUT /api/users/:id, updateUser;
DELETE /api/users/:id, deleteUser;