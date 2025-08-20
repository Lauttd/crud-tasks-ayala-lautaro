import express from "express";
import { createAlumnoProfesor, getAllAlumnoProfesor } from "../controllers/alumnos_profesores.controller.js";

export const routerAlumnoProfesor = express.Router();

routerAlumnoProfesor.post ("/api/alumno_profesor", createAlumnoProfesor);
routerAlumnoProfesor.get ("/api/alumno_profesor", getAllAlumnoProfesor);