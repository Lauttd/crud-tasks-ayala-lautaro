import express from "express";
import { createProfesor, getAllProfesor, updateProfesor, deleteProfesor , getByIdProfesor} from "../controllers/profesores.controller.js";
import { aplicarValidaciones } from "../middlewares/aplicarValidaciones.js";
import { validacionesProfesor, validacionesProfesorUpdate } from "../middlewares/profesor.validaciones.js";
import { paramsValidation } from "../middlewares/validarParams.js";

export const routerProfesores = express.Router();

routerProfesores.post ("/api/profesor", validacionesProfesor, aplicarValidaciones, createProfesor);
routerProfesores.get ("/api/profesor", getAllProfesor);
routerProfesores.get ("/api/profesor/:id", paramsValidation, aplicarValidaciones, getByIdProfesor);
routerProfesores.put ("/api/profesor/:id", paramsValidation, validacionesProfesorUpdate, aplicarValidaciones, updateProfesor);
routerProfesores.delete ("/api/profesor/:id", paramsValidation, aplicarValidaciones, deleteProfesor);
