import express from "express";
import { createAlumno, getAllAlumno, updateAlumno, deleteAlumno, getByIdAlumno } from "../controllers/alumnos.controller.js";

export const routerAlumno = express.Router();

routerAlumno.post ("/api/alumno", createAlumno);
routerAlumno.get ("/api/alumno", getAllAlumno);
routerAlumno.get ("/api/alumno/:id", getByIdAlumno);
routerAlumno.put ("/api/alumno/:id", updateAlumno);
routerAlumno.delete ("/api/alumno/:id", deleteAlumno);