import { BOOLEAN } from "sequelize";
import { taskModel } from "../models/task.model.js";

//Crear User
export const createTask = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    //Validar name
    if (typeof title !== "string") {
      return res.status(400).json({ message: "titulo tiene que ser una cadena" });
    }

    if (title.length > 100) {
      return res
        .status(400)
        .json({ message: "el titulo no puede ser mayor a 100 caracteres" });
    }

    if (title === "") {
      return res.status(400).json({ message: "el titulo no puede estar vacio" });
    }

    //Validar que titulo sea unico
      const titleExist = await taskModel.findOne({ where: { title } });

      if (titleExist) {
        return res.status(400).json({ message: "el titulo ya existe" });
      }
      
      //Validar description
          if (typeof description !== "string") {
      return res.status(400).json({ message: "description tiene que ser una cadena" });
    }

    if (description.length > 100) {
      return res
        .status(400)
        .json({ message: "la descriocion no puede ser mayor a 100 caracteres" });
    }

    if (description === "") {
      return res.status(400).json({ message: "la descripcion no puede estar vacio" });
    }
    
    if ( typeof isComplete !== 'boolean') {
        return res.status(400).json({ message: 'debe ser booleano'});
    };

  } catch (error) {
    console.log('error al crear la tarea');
    return res.status(404).json({ message: "Error por parte del servidor"});
    };
};

//Obtener user
export const getAllTask = async (req, res) => {
    try {
        const obtenerTask = await taskModel.findAll()
        res.json(obtenerTask);
        
    } catch (error) {
        console.log('no se pudo obtener todos las tareas');
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const getByIdTask = async (req, res) {
    try {
        const obtenerTaskId = await taskModel.findByPk(req.params.id);

        if (obtenerTaskId)
            res.json(obtenerTaskId);
        else return res.status(400).json({ message: 'no se pudo obtener las tareas por id' });
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


