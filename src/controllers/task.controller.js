import { matchedData } from "express-validator";
import { taskModel } from "../models/task.model.js";
import { usersModel } from "../models/users.model.js";


//Crear User
export const createTask = async (req, res) => {
  
  const datosValidos = matchedData(req);
  try {

    const nuevoTask = await taskModel.create(datosValidos);
    return res.status(201).json(nuevoTask);

  } catch (error) {
    console.log("error al crear la tarea");
    return res.status(404).json({ message: "Error por parte del servidor" });
  }
};

//Obtener user
export const getAllTask = async (req, res) => {
  try {
    const obtenerTask = await taskModel.findAll({
        include: { model: usersModel,
        as: "oneUser",
        attributes: ["name", "email"],
        }
    });
    res.json(obtenerTask);
  } catch (error) {
    console.log("no se pudo obtener todos las tareas", error);
    return res.status(404).json({ message: "error por parte del servidor" });
  }
};

export const getByIdTask = async (req, res) => {
  try {
    const obtenerTaskId = await taskModel.findAll({
        include: { model: usersModel,
        as: "oneUser",
        attributes: ["name", "email"],
        }
    });

    if (obtenerTaskId) res.json(obtenerTaskId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener las tareas por id" });
  } catch (error) {
    console.log("Error al obtener los usuarios por id");
    return res.status(404).json({ message: "Error por parte del servidor" });
  }
};

export const updateTask = async (req, res) => {
  
  const datosValidos = matchedData(req);
  try {
    
    const task = await taskModel.findByPk(req.params.id);
     if(!task)
      return res.status(404).json({ message: "Tarea no encontrada"})

     Object.keys(datosValidos).forEach((campo) => {
      task[campo]= datosValidos[campo]
     });
           await task.save()

      res.status(200).json({Message: "Se actualizo la tarea.", task});

  } catch (error) {
    console.log("no se pudo actualizar la tarea");
    return res.status(404).json({ message: "Error por parte del servidor"});
  }
};

export const deleteTask = async (req, res) => {
  try {
    const borrarTask = await taskModel.destroy({
      where: { id: req.params.id },
    });
    if (borrarTask) return res.json({ message: "se elimino la tarea" });

    return res.status(400).json({ message: "no se pudo eliminar la tarea" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor" });
  }
};
