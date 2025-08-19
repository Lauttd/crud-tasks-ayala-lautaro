import express from "express";
import { createAlumno, getAllAlumno } from "../controllers/alumnos.controller.js";

export const routerAlumno = express.Router();

routerAlumno.post ("/api/alumno", createAlumno);
routerAlumno.get ("/api/alumno", getAllAlumno);