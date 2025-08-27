import { body } from "express-validator";

export const validacionesPerfil = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),

    body("correo")
    .isString().withMessage("El apellido debe ser un string")
    .trim()
    .notEmpty().withMessage("El apellido no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El apellido no puede tener mas de 100 caracteres")
      .custom(async (correo)=>{
            const correoExist = await usersModel.findOne({ where: { correo } });
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
]

export const validacionesPerfilUpdate = [
    body("nombre")
    .isString().withMessage("El nombre debe ser un string")
    .trim()
    .notEmpty().withMessage("El nombre no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El nombre no puede tener mas de 100 caracteres"),

    body("correo")
    .isString().withMessage("El apellido debe ser un string")
    .trim()
    .notEmpty().withMessage("El apellido no debe estar vacio")
    .isLength({ max: 100 }).withMessage("El apellido no puede tener mas de 100 caracteres")
      .custom(async (correo)=>{
            const correoExist = await usersModel.findOne({ where: { correo } });
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
]
