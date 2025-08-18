import express, { Router } from "express";
import { createAlumno, getAllAlumno } from "../controllers/alumnos.controller.js";

export const routerAlumno = express.Router();