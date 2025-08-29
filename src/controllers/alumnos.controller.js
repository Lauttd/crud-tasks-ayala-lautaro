import { matchedData } from "express-validator";
import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
 
export const createAlumno = async (req, res) => {
    
  const datosValidos = matchedData(req);
  try {
         
        //crear Alumno
        const nuevoAlumno = await AlumnoModel.create(datosValidos);
        return res.status(201).json(nuevoAlumno);

    } catch (error) {
        console.log("No se pudo crear Alumno");
        return res.status(404).json({ message: "Error por parte del servidor", error });
        
    }
};

export const getAllAlumno = async (req, res) => {
    try {
        const obtenerAlumno = await AlumnoModel.findAll({
            include: { model: ProfesorModel,
                as: "profesor",
                attribute: ["nombre", "apellido", "carrera", "cargaHoraria"],
             }
        });
        return res.status(201).json(obtenerAlumno);

    } catch (error) {
        console.log("no se pudo obtener todos los alumnos");
        return res.status(404).json({ message: "Error por parte del servidor" });
    }
};

export const getByIdAlumno = async (req, res) => {
  try {
    const obtenerAlumnoId = await AlumnoModel.findByPk(req.params.id, {
        include: { model: ProfesorModel,
        as: "profesor",
        attributes: ["nombre", "apellido", "carrera", "cargaHoraria"],
        }  
    });

    if (obtenerAlumnoId) res.json(obtenerAlumnoId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los alumnos por id" });
  } catch (error) {
    console.log("Error al obtener los alumnos por id", error);
    return res.status(404).json({ message: "Error por parte del servidor", error });
  }
};

export const updateAlumno = async (req, res) => {
  const datosValidos = matchedData(req);

  try {
    const alumnos = await AlumnoModel.findByPk(req.params.id);
     if(!alumnos)
      return res.status(404).json({ message: "alumno no encontrado"})

     Object.keys(datosValidos).forEach((campo) => {
      alumnos[campo]= datosValidos[campo]
     });

       res.status(200).json({Message: "Se actualizo el alumno.", alumnos});

  } catch (error) {
    console.log("no se pudo actualizar el alumno", error);
    return res.status(404).json({ message: "Error por parte del servidor", error });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const borrarAlumno = await AlumnoModel.destroy({
      where: { id: req.params.id },
    });
    if (borrarAlumno) return res.json({ message: "se elimino el alumno" });

    return res.status(400).json({ message: "no se pudo eliminar el alumno" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor", error });
  }
};