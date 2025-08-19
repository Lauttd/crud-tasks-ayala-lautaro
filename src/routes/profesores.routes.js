import express from "express";
import { createProfesor, getAllProfesor } from "../controllers/profesores.controller.js";

export const routerProfesores = express.Router();

routerProfesores.post ("/api/profesor", createProfesor);
routerProfesores.get ("/api/profesor", getAllProfesor);