import { act } from "react";
import { usersModel } from "../models/users.model.js";

//Crear User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Validar name
    if (typeof name !== "string") {
      return res.status(400).json({ message: "name tiene que ser una cadena" });
    }

    if (name.length > 100) {
      return res
        .status(400)
        .json({ message: "no puede ser mayor a 100 caracteres" });
    }

    if (name === "") {
      return res.status(400).json({ message: "no puede estar vacio" });
    }

    //Validar email
      if (typeof email !== "string") {
        return res
          .status(400)
          .json({ message: "email tiene que ser una cadena" });
      }

      if (name.length > 100) {
        return res
          .status(400)
          .json({ message: "no puede ser mayor a 100 caracteres" });
      }

      if (email === "") {
        return res.status(400).json({ message: "no puede estar vacio" });
      }

      const emailExist = await usersModel.findOne({ where: { email } });

      if (emailExist) {
        return res.status(400).json({ message: "el email ya existe" });
      }
      
      //Validar password
          if (typeof password !== "string") {
      return res.status(400).json({ message: "name tiene que ser una cadena" });
    }

    if (password.length > 100) {
      return res
        .status(400)
        .json({ message: "no puede ser mayor a 100 caracteres" });
    }

    if (password === "") {
      return res.status(400).json({ message: "no puede estar vacio" });
    }
  } catch (error) {
    console.log('error al crear user');
    return res.status(404).json({ message: "Error por parte del servidor"});
    }
};

//Obtener user
export const getAllUser = async (req, res) => {
    try {
        const obtenerUser = await usersModel.findAll()
        res.json(obtenerUser);
        
    } catch (error) {
        console.log('no se pudo obtener todos los usuarios');
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const getByIdUser = async (req, res) {
    try {
        const obtenerUserId = await usersModel.findByPk(req.params.id);

        if (obtenerUserId)
            res.json(obtenerUserId);
        else return res.status(400).json({ message: 'no se puudo obtener los usuarios por id' });
    } catch (error) {
        console.log('Error al obtener los usuarios por id');
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const updateUser = async (req, res) {
    try {
        const [updated] = await usersModel.update(req.body, { where: { id: req.params.id }});
        
        if(updated) {
            const actualizarUser = await usersModel.findByPk(req.params.id);
            res.json(actualizarUser);
        } else {
            return res.status(400).json({ message: 'no se encontro el usuario'});
        }
    } catch (error) {
        console.log('no se pudo actualizar el usuario');
        return res.status(404).json( message: 'Error por parte del servidor');
    };
};

export const deleteUser = async (req, res) => {
    try {
        const borrarUser = await usersModel.destroy({
            where: { id: req.params.id}
        });
        if (borrarBooks) res.json({message: "se elimino el usuario"});
        else res.status(400).json({message: "no se pudo eliminar el usuario"});
    } catch (error) {
        res.status(404).json({message: "Error por parte del servidor"});
    }
};


