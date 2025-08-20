import { perfilModel } from "../models/perfil.model.js";
import { usersModel } from "../models/users.model.js";


export const createPerfil = async (req, res) => {
    try {
        const { nombre, correo, genero, pais, edad, user_id } = req.body


        //verificar perfil
        if (typeof nombre !== "string") {
            return res.status(400).json({ message: "El nombre debe ser un string"});
        }
        
        if (nombre === "") {
            return res.status(400).json({ message: "El nombre no debe estar vacio"});
        }

         if (typeof correo !== "string") {
            return res.status(400).json({ message: "El correo debe ser un string"});
        }
        
        if (correo === "") {
            return res.status(400).json({ message: "El correo no debe estar vacio"});
        }

         if (typeof genero !== "string") {
            return res.status(400).json({ message: "El genero debe ser un string"});
        }
        
        if (genero === "") {
            return res.status(400).json({ message: "El genero no debe estar vacio"});
        }

         if (typeof pais !== "string") {
            return res.status(400).json({ message: "El pais debe ser un string"});
        }
        
        if (pais === "") {
            return res.status(400).json({ message: "El pais no debe estar vacio"});
        }


         if (typeof edad !== "number") {
            return res.status(400).json({ message: "La edad debe ser un numero"});
        }
        
        if (edad === "") {
            return res.status(400).json({ message: "La edad no debe estar vacio"});
        }

        if (typeof user_id !== "number") {
            return res.status(400).json({ message: "La id debe ser un numero"});
        }

        //creamos el perfil
        const crearPerfil = await perfilModel.create({
            nombre,
            correo,
            pais,
            genero,
            edad,
            user_id
        });
        return res.status(201).json(crearPerfil);

    } catch (error) {
        console.log(error);
            return res.status(404).json({ message: "Error por parte del servdior", error });
    }
};

//obtener
export const getAllPerfil = async (req, res) => {
    try {
        const obtener = await perfilModel.findAll({
            include: { model: usersModel,
                as: "perfil",
             }
        });
        return res.status(201).json(obtener);

    } catch (error) {
        console.log("no se pudo obtener todos los alumnos y profesores");
        return res.status(404).json({ message: "Error por parte del servidor", error });
    }
};