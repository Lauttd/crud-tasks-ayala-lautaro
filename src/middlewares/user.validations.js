import { body } from "express-validator";
import { usersModel } from "../models/users.model.js";
import { Op } from "sequelize";

export const validacionesUser = [
    body("name")
    .isString().withMessage("El nnombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),   

    body("email")
    .isString().withMessage("El email debe ser un string")
    .trim()
    .notEmpty().withMessage("El email no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El email no puede tener mas de 100 caracteres")
    .custom(async (email)=>{
        const emailExist = await usersModel.findOne({ where: { email } });
            if (emailExist) 
             throw new Error("El email ya existe")
            
            return true
    }),

    body("password")
    .isString().withMessage("La contraseña debe ser un string")
    .trim()
    .notEmpty().withMessage("La contraseña no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),   
];

export const validacionesUserUpdate = [
    body("name")
    .optional()
    .isString().withMessage("El nnombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),   

    body("email")
    .optional()
    .isString().withMessage("El email debe ser un string")
    .trim()
    .notEmpty().withMessage("El email no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El email no puede tener mas de 100 caracteres"),


    body("password")
    .optional()
    .isString().withMessage("La contraseña debe ser un string")
    .trim()
    .notEmpty().withMessage("La contraseña no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),   
];




