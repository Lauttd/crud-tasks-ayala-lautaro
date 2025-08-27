import { param } from "express-validator";

 const validarParam = [
    param("id")
        .isInt().withMessage("El id debe ser entero")
]

export default validarParam