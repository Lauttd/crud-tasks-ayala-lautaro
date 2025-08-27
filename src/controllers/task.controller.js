import { matchedData } from "express-validator";
import { taskModel } from "../models/task.model.js";
import { usersModel } from "../models/users.model.js";

//Crear User
export const createTask = async (req, res) => {
  
  const datosValidos = matchedData(req);
  try {

    const nuevoTask = await taskModel.create({
      title,
      description,
      isComplete,
      user_id,
    });
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
    const obtenerTaskId = await taskModel.findByPk(req.params.id, {
      include: usersModel,
      attributes: ["name", "email"],
      as: "oneUser",
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
  try {
    const [updated] = await taskModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const actualizarTask = await taskModel.findByPk(req.params.id);
      res.json(actualizarTask);
    } else {
      return res.status(400).json({ message: "no se encontro la tarea" });
    }
  } catch (error) {
    console.log("no se pudo actualizar la tarea");
    return res.status(404).json({ message: "Error por parte del servidor" });
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
