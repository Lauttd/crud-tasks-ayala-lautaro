import express from "express";
import { createAlumno, getAllAlumno, updateAlumno, deleteAlumno, getByIdAlumno } from "../controllers/alumnos.controller.js";
import validarParam from "../middlewares/validarParams.js";
import { validacionesAlumno, validacionesAlumnoUpdate } from "../middlewares/alumno.validaciones.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";

export const routerAlumno = express.Router();

routerAlumno.post ("/api/alumno", validacionesAlumno, aplicarValidaciones, createAlumno);
routerAlumno.get ("/api/alumno", getAllAlumno);
routerAlumno.get ("/api/alumno/:id",validarParam, aplicarValidaciones, getByIdAlumno);
routerAlumno.put ("/api/alumno/:id",validarParam, validacionesAlumnoUpdate, aplicarValidaciones, updateAlumno);
routerAlumno.delete ("/api/alumno/:id",validarParam, aplicarValidaciones, deleteAlumno);