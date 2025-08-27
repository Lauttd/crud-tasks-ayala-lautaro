import express from "express";
import { createUser, deleteUser, getAllUser, getByIdUser, updateUser } from "../controllers/user.controller.js";
import {  validacionesUser, validacionesUserUpdate} from "../middlewares/user.validations.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import  validarParam from "../middlewares/validarParams.js";


export const routerUsers = express.Router();

routerUsers.post ("/api/users",validacionesUser, aplicarValidaciones, createUser);
routerUsers.get ("/api/users", getAllUser);
routerUsers.get ("/api/users/:id", validarParam, aplicarValidaciones, getByIdUser);
routerUsers.put ("/api/users/:id",validarParam, validacionesUserUpdate, aplicarValidaciones, updateUser);
routerUsers.delete ("/api/users/:id",validarParam, aplicarValidaciones, deleteUser);