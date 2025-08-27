import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
import { matchedData } from "express-validator";


export const createProfesor = async (req, res) => {
  const datosValidos = matchedData(req);
  try {

    const nuevoProfesor = await ProfesorModel.create(datosValidos);
    return res.status(201).json(nuevoProfesor);

    } catch (error) {
        console.log("No se pudo crear profesor", error);
        return res.status(404).json({ message: "Error por parte del servidor", error });
        
    }
};

export const getAllProfesor = async (req, res) => {
    try {
        const obtenerProfesor = await ProfesorModel.findAll({
            include: { model: AlumnoModel,
                as: "profesor",
                attribute: ["nombre", "apellido", "carrera", "cargaHoraria"],
             }
        });
        return res.status(201).json(obtenerProfesor);

    } catch (error) {
        console.log("no se pudo obtener todos los profesores");
        return res.status(404).json({ message: "Error por parte del servidor" });
    }
}

export const getByIdProfesor = async (req, res) => {
  try {
    const obtenerProfesorId = await perfilModel.findByPk(req.params.id, {
      include: usersModel,
      attributes: ["name", "email", "password" ],
      as: "oneUser",
    });

    if (obtenerProfesorId) res.json(obtenerProfesorId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los profesores por id" });
  } catch (error) {
    console.log("Error al obtener los profesores por id");
    return res.status(404).json({ message: "Error por parte del servidor", error });
  }
};

export const updateProfesor = async (req, res) => {
   
  const datosValidos = matchedData(req);
   try {
     
     const profesor = await ProfesorModel.findByPk(req.params.id);
      if(!profesor)
       return res.status(404).json({ message: "profesor no encontrado"})
 
      Object.keys(datosValidos).forEach((campo) => {
       user[campo]= datosValidos[campo]
      });
  } catch (error) {
    console.log("no se pudo actualizar el profesor");
    return res.status(404).json({ message: "Error por parte del servidor", error });
  }
};

export const deleteProfesor = async (req, res) => {
  try {
    const borrarProfesor = await ProfesorModel.destroy({
      where: { id: req.params.id },
    });
    if (borrarProfesor) return res.json({ message: "se elimino el profesor" });

    return res.status(400).json({ message: "no se pudo eliminar el profesor" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor", error });
  }
};