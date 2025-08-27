import express from "express";
import { createAlumno, getAllAlumno, updateAlumno, deleteAlumno, getByIdAlumno } from "../controllers/alumnos.controller.js";
import { validacionesAlumno, validacionesAlumnoUpdate } from "../middlewares/alumno.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import { paramsValidation } from "../middlewares/validarParams.js";

export const routerAlumno = express.Router();

routerAlumno.post ("/api/alumno", validacionesAlumno, aplicarValidaciones, createAlumno);
routerAlumno.get ("/api/alumno", getAllAlumno);
routerAlumno.get ("/api/alumno/:id",paramsValidation, aplicarValidaciones, getByIdAlumno);
routerAlumno.put ("/api/alumno/:id",paramsValidation, validacionesAlumnoUpdate, aplicarValidaciones, updateAlumno);
routerAlumno.delete ("/api/alumno/:id",paramsValidation, aplicarValidaciones, deleteAlumno);