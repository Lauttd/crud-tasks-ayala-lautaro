import express from "express";
import { createProfesor, getAllProfesor, updateProfespr, deleteProfesor , getByIdProfesor} from "../controllers/profesores.controller.js";

export const routerProfesores = express.Router();

routerProfesores.post ("/api/profesor", createProfesor);
routerProfesores.get ("/api/profesor", getAllProfesor);
routerProfesores.get ("/api/profesor/:id", getByIdProfesor);
routerProfesores.put ("/api/profesor/:id", updateProfespr);
routerProfesores.delete ("/api/profesor/:id", deleteProfesor);
