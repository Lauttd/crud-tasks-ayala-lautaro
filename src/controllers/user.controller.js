import { taskModel } from "../models/task.model.js";
import { usersModel } from "../models/users.model.js";

//Crear User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar name
    if (typeof name !== "string") {
      return res.status(400).json({ message: "name tiene que ser una cadena" });
    }
    if (name.length > 100) {
      return res.status(400).json({ message: "name no puede ser mayor a 100 caracteres" });
    }
    if (name.trim() === "") {
      return res.status(400).json({ message: "name no puede estar vacío" });
    }

    // Validar email
    if (typeof email !== "string") {
      return res.status(400).json({ message: "email tiene que ser una cadena" });
    }
    if (email.length > 100) {
      return res.status(400).json({ message: "email no puede ser mayor a 100 caracteres" });
    }
    if (email.trim() === "") {
      return res.status(400).json({ message: "email no puede estar vacío" });
    }

    const emailExist = await usersModel.findOne({ where: { email } });
    if (emailExist) {
      return res.status(400).json({ message: "el email ya existe" });
    }

    // Validar password
    if (typeof password !== "string") {
      return res.status(400).json({ message: "password tiene que ser una cadena" });
    }
    if (password.length > 100) {
      return res.status(400).json({ message: "password no puede ser mayor a 100 caracteres" });
    }
    if (password.trim() === "") {
      return res.status(400).json({ message: "password no puede estar vacío" });
    }

    const nuevoUser = await usersModel.create({ name, email, password });
    return res.status(201).json(nuevoUser);

  } catch (error) {
    console.log('no se pudo crear el usuario', error);
    return res.status(500).json({ message: "Error por parte del servidor"});
  }
};

//Obtener user
export const getAllUser = async (req, res) => {
    try {
        const obtenerUser = await usersModel.findAll({
          include: {model: taskModel,
            as: "manyTasks",
            attributes: ["name", "email", "password"]
          }
        })
        res.json(obtenerUser);
        
    } catch (error) {
        console.log('no se pudo obtener todos los usuarios');
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const getByIdUser = async (req, res) => {
    try {
        const obtenerUserId = await usersModel.findByPk(req.params.id, {
          attributes: [ "name", "email" ],
          include: {model: taskModel,
            as: "manyTasks",
            attributes: {exclude: ["user_id"]}
          }
        });

        if (obtenerUserId){
          res.json(obtenerUserId);

        }
        else return res.status(400).json({ message: 'no se puudo obtener los usuarios por id' });
    } catch (error) {
        console.log('Error al obtener los usuarios por id', error);
        return res.status(404).json({ message: 'Error por parte del servidor', error});
    };
};

export const updateUser = async (req, res) => {
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
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const deleteUser = async (req, res) => {
    try {
        const borrarUser = await usersModel.destroy({
            where: { id: req.params.id}
        });
        if (borrarUser) res.json({message: "se elimino el usuario"});
        else res.status(400).json({message: "no se pudo eliminar el usuario"});
    } catch (error) {
        res.status(404).json({message: "Error por parte del servidor"});
    }
};


