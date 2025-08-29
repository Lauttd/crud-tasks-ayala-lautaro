import { body } from "express-validator";
import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";

export const alumnoProfesorValidacion = [
  body("alumno_id")
    .isInt()
    .withMessage("Alumno id debe ser entero")
    .custom(async (alumno_id) => {
      const alumno = await AlumnoModel.findByPk(alumno_id);
      if (!alumno) throw new Error("Ese alumno no existe");
    }),
  body("profesor_id")
    .isInt()
    .withMessage("profesor id debe ser entero")
    .custom(async (profesor_id) => {
      const profesor = await ProfesorModel.findByPk(profesor_id);
      if (!profesor) throw new Error("Ese profesor no existe");
    }),
];

export const alumnoProfesorValidacionUp = [
  body("alumno_id")
    .isInt()
    .withMessage("Alumno id debe ser entero")
    .custom(async (alumno_id) => {
      const alumno = await AlumnoModel.findByPk(alumno_id);
      if (!alumno) throw new Error("Ese alumno no existe");
    }),
  body("profesor_id")
    .isInt()
    .withMessage("profesor id debe ser entero")
    .custom(async (profesor_id) => {
      const profesor = await ProfesorModel.findByPk(alumno_id);
      if (!profesor) throw new Error("Ese profesor no existe");
    }),
];

