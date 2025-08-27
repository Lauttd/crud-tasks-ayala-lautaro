import { param } from "express-validator";

export  const validarParam = [
    param("id")
        .isInt().withMessage("El id debe ser entero")
]