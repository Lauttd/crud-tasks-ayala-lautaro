import { body } from "express-validator";
import { perfilModel } from "../models/perfil.model.js";
import { usersModel } from "../models/users.model.js"

export const validacionesPerfil = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),


    body("correo")
    .isString().withMessage("El correo debe ser un string")
    .trim()
    .notEmpty().withMessage("El correo no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El correo no puede tener mas de 200 caracteres")
      .custom(async (correo)=>{
            const correoExist = await perfilModel.findOne({ where: { correo } });
                if (correoExist) 
                 throw new Error("El correo ya existe")
                
                return true
        }),

    body("pais")
    .isString().withMessage("El pais debe ser un string")
    .trim()
    .notEmpty().withMessage("El pais no debe estar vacio"),


    body("genero")
    .isString().withMessage("El genero debe ser string")
    .notEmpty().withMessage("El genero no debe estar vacio"),

    body("edad")
    .isInt().withMessage("La edad debe ser un entero")
    .notEmpty().withMessage("El pais no debe estar vacio"),

    body("user_id")
    .isInt().withMessage("Debe ser un entero")
    .notEmpty().withMessage("La id no debe estar vacio"),
]

export const validacionesPerfilUpdate = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),

    body("correo")
    .isString().withMessage("El correo debe ser un string")
    .trim()
    .notEmpty().withMessage("El correo no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El correo no puede tener mas de 200 caracteres"),

    body("pais")
    .isString().withMessage("El pais debe ser un string")
    .trim()
    .notEmpty().withMessage("El pais no debe estar vacio"),


    body("genero")
    .isString().withMessage("El genero debe ser string")
    .notEmpty().withMessage("El genero no debe estar vacio"),

    body("edad")
    .isInt().withMessage("La edad debe ser un entero")
    .notEmpty().withMessage("El pais no debe estar vacio"),
        
    body("user_id")
    .isInt().withMessage("Debe ser un entero")
    .notEmpty().withMessage("La id no debe estar vacio"),
]
