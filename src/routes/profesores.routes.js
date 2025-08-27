import express from "express";
import { createProfesor, getAllProfesor, updateProfesor, deleteProfesor , getByIdProfesor} from "../controllers/profesores.controller.js";
import {validarParam} from "../middlewares/validarParams.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import { validacionesProfesor, validacionesProfesorUpdate } from "../middlewares/profesor.validaciones.js";

export const routerProfesores = express.Router();

routerProfesores.post ("/api/profesor", validacionesProfesor, aplicarValidaciones, createProfesor);
routerProfesores.get ("/api/profesor", getAllProfesor);
routerProfesores.get ("/api/profesor/:id", validarParam, aplicarValidaciones, getByIdProfesor);
routerProfesores.put ("/api/profesor/:id", validarParam, validacionesProfesorUpdate, aplicarValidaciones, updateProfesor);
routerProfesores.delete ("/api/profesor/:id", validarParam, aplicarValidaciones, deleteProfesor);
