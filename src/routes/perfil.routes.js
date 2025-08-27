import express from "express";
import { createPerfil, getAllPerfil, getByIdPerfil, updatePerfil, deletePerfil } from "../controllers/perfil.controller.js";
import { validacionesPerfil, validacionesPerfilUpdate } from "../middlewares/perfil.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import { paramsValidation } from "../middlewares/validarParams.js";

export const routerPerfil = express.Router();

routerPerfil.post ("/api/perfil",validacionesPerfil, aplicarValidaciones, createPerfil);
routerPerfil.get ("/api/perfil", getAllPerfil);
routerPerfil.get ("/api/perfil/:id", paramsValidation, aplicarValidaciones, getByIdPerfil);
routerPerfil.put ("/api/perfil/:id",paramsValidation, validacionesPerfilUpdate, aplicarValidaciones, updatePerfil);
routerPerfil.delete ("/api/perfil/:id",paramsValidation, aplicarValidaciones, deletePerfil);
