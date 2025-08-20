import express from "express";
import { createPerfil, getAllPerfil } from "../controllers/perfil.controller.js";

export const routerPerfil = express.Router();

routerPerfil.post ("/api/perfil", createPerfil);
routerPerfil.get ("/api/perfil", getAllPerfil);