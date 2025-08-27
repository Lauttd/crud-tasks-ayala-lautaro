import express from "express";
import { createPerfil, getAllPerfil, getByIdPerfil, updatePerfil, deletePerfil } from "../controllers/perfil.controller.js";

export const routerPerfil = express.Router();

routerPerfil.post ("/api/perfil", createPerfil);
routerPerfil.get ("/api/perfil", getAllPerfil);
routerPerfil.get ("/api/perfil/:id", getByIdPerfil);
routerPerfil.put ("/api/perfil/:id", updatePerfil);
routerPerfil.delete ("/api/perfil/:id", deletePerfil);