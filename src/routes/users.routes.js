import express from "express";
import { createUser, deleteUser, getAllUser, getByIdUser, updateUser } from "../controllers/user.controller.js";

export const routerUsers = express.Router();

routerUsers.post ("/api/users", createUser);
routerUsers.get ("/api/users", getAllUser);
routerUsers.get ("/api/users/:id", getByIdUser);
routerUsers.put ("/api/users/:id", updateUser);
routerUsers.delete ("/api/users/:id", deleteUser);