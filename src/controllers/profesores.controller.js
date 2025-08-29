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
                as: "alumno",
                attribute: ["nombre", "apellido", "carrera", "cargaHoraria"],
             }
        });
        return res.status(201).json(obtenerProfesor);

    } catch (error) {
        console.log("no se pudo obtener todos los profesores", error);
        return res.status(404).json({ message: "Error por parte del servidor" });
    }
}

export const getByIdProfesor = async (req, res) => {
  try {
    const obtenerProfesorId = await ProfesorModel.findByPk(req.params.id, {
        include: { model: AlumnoModel,
        as: "alumno",
        attributes: ["nombre", "apellido", "carrera", "edad"],
        }  
      });

    if (obtenerProfesorId) res.json(obtenerProfesorId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los profesores por id" });

  } catch (error) {
    console.log("Error al obtener los profesores por id", error);
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
       profesor[campo]= datosValidos[campo]
      });

        res.status(200).json({Message: "Se actualizo el profesor.", profesor});
  } catch (error) {
    console.log("no se pudo actualizar el profesor", error);
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