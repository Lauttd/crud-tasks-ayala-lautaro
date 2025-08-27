import express from "express";
import { createUser, deleteUser, getAllUser, getByIdUser, updateUser } from "../controllers/user.controller.js";
import {  validacionesUser, validacionesUserUpdate} from "../middlewares/user.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import { paramsValidation } from "../middlewares/validarParams.js";


export const routerUsers = express.Router();

routerUsers.post ("/api/users",validacionesUser,aplicarValidaciones, createUser);
routerUsers.get ("/api/users", getAllUser);
routerUsers.get ("/api/users/:id", paramsValidation, aplicarValidaciones, getByIdUser);
routerUsers.put ("/api/users/:id",paramsValidation, validacionesUserUpdate,aplicarValidaciones, updateUser);
routerUsers.delete ("/api/users/:id",paramsValidation, aplicarValidaciones, deleteUser);