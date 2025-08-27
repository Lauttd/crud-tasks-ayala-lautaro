import { body } from "express-validator";

export const validacionesProfesor = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),

    body("apellido")
    .isString().withMessage("El apellido debe ser un string")
    .trim()
    .notEmpty().withMessage("El apellido no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El apellido no puede tener mas de 100 caracteres"),

    body("carrera")
    .isString().withMessage("La carrera debe ser un string")
    .trim()
    .notEmpty().withMessage("La carrera no debe estar vacio")
    .isLength({ max: 100 }).withMessage("La carrera no puede tener mas de 100 caracteres"),


    body("cargaHoraria")
    .isInt().withMessage("La edad debe ser entero")
]

export const validacionesProfesorUpdate = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),

    body("apellido")
    .isString().withMessage("El apellido debe ser un string")
    .trim()
    .notEmpty().withMessage("El apellido no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El apellido no puede tener mas de 100 caracteres"),

    body("carrera")
    .isString().withMessage("La carrera debe ser un string")
    .trim()
    .notEmpty().withMessage("La carrera no debe estar vacio")
    .isLength({ max: 100 }).withMessage("La carrera no puede tener mas de 100 caracteres"),


    body("cargaHoraria")
    .isInt().withMessage("La edad debe ser entero")
]
