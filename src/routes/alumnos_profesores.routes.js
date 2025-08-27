import express from "express";
import { createAlumnoProfesor, getAllAlumnoProfesor, getByIdAlumnoProfesor, deleteAlumnoProfesor, updateAlumnoPr } from "../controllers/alumnos_profesores.controller.js";
import { paramsValidation } from "../middlewares/validarParams.js";
import { alumnoProfesorValidacion, alumnoProfesorValidacionUp } from "../middlewares/alumnoProfesor.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";

export const routerAlumnoProfesor = express.Router();

routerAlumnoProfesor.post ("/api/alumno_profesor", alumnoProfesorValidacion, aplicarValidaciones, createAlumnoProfesor);
routerAlumnoProfesor.get ("/api/alumno_profesor", getAllAlumnoProfesor);
routerAlumnoProfesor.get ("/api/alumno_profesor/:id", paramsValidation, alumnoProfesorValidacion, aplicarValidaciones, getByIdAlumnoProfesor);
routerAlumnoProfesor.put ("/api/alumno_profesor/:id", paramsValidation, alumnoProfesorValidacionUp,aplicarValidaciones ,updateAlumnoPr);
routerAlumnoProfesor.delete ("/api/alumno_profesor/:id", paramsValidation, alumnoProfesorValidacion, aplicarValidaciones, deleteAlumnoProfesor);