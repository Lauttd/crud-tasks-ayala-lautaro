import { body } from "express-validator";
import { usersModel } from "../models/users.model.js";
import { Op } from "sequelize";
import { taskModel } from "../models/task.model.js";

export const validacionesTask = [
    body("title")
    .isString().withMessage("El titulo debe ser un string")
    .trim()
    .notEmpty().withMessage("El titulo no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres")
    .custom(async (title, {req})=>{
        const {id} = req.body
        const titleExist = await taskModel.findOne({ where: { title }, id: {[Op.ne]: id} });
            if (title) 
             throw new Error("El titulo ya existe")
            
            return true 
        }),

    body("description")
    .isBoolean().withMessage("La descripcion debe ser un boolean")
    .trim()
    .notEmpty().withMessage("El email no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El email no puede tener mas de 100 caracteres"),

    body("isComplete")
    .isBoolean().withMessage("Debe ser boolean")
    .trim()
    .notEmpty().withMessage("isComplete no debe estar vacio"),

    body("user_id")
    .isInt().withMessage("El user_id debe ser entero")
    .custom(async( user_id ) => {
        const existeUsurio = await usersModel.findByPk(req.body.user_id);
    if (!existeUsurio) 
    throw new Error("El usuario no existe")
    return  true
    })
]

export const validacionesTaskUpdate = [
    body("title")
    .isString().withMessage("El titulo debe ser un string")
    .trim()
    .notEmpty().withMessage("El titulo no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres")
    .custom(async (title, {req})=>{
        const {id} = req.body
        const titleExist = await taskModel.findOne({ where: { title }, id: {[Op.ne]: id} });
            if (title) 
             throw new Error("El titulo ya existe")
            
            return true 
        }),

    body("description")
    .isBoolean().withMessage("La descripcion debe ser un boolean")
    .trim()
    .notEmpty().withMessage("El email no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El email no puede tener mas de 100 caracteres"),

    body("isComplete")
    .isBoolean().withMessage("Debe ser boolean")
    .trim()
    .notEmpty().withMessage("isComplete no debe estar vacio"),

    body("user_id")
    .isInt().withMessage("El user_id debe ser entero")
    .custom(async( user_id ) => {
        const existeUsurio = await usersModel.findByPk(req.body.user_id);
    if (!existeUsurio) 
    throw new Error("El usuario no existe")
    return  true
    })
]



