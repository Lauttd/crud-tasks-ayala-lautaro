import { AlumnoProfesorModel } from "../models/alumno_profesormodel.js";
import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
import { matchedData } from "express-validator";

export const createAlumnoProfesor = async (req, res) => {
  const datosValidos = matchedData(req);
  try {
    //crear Alumno
    const alumnoProfesor = await AlumnoProfesorModel.create(datosValidos);
    return res.status(201).json(alumnoProfesor);
  } catch (error) {
    console.log("No se pudo crear Alumno_profesor", error);
    return res
      .status(404)
      .json({ message: "Error por parte del servdior", error });
  }
};

//obtener
export const getAllAlumnoProfesor = async (req, res) => {
  try {
    const obtener = await AlumnoProfesorModel.findAll({
      include: [
        { model: ProfesorModel, as: "profesor" },
        {
          model: AlumnoModel,
          as: "alumno",
        },
      ],
    });
    return res.status(201).json(obtener);
  } catch (error) {
    console.log("no se pudo obtener todos los alumnos y profesores");
    return res
      .status(404)
      .json({ message: "Error por parte del servidor", error });
  }
};

export const getByIdAlumnoProfesor = async (req, res) => {
  try {
    const obtenerId = await AlumnoProfesorModel.findByPk(req.params.id, {
      include: [
        {
          model: ProfesorModel,
          attributes: ["nombre", "apellido", "carrera", "cargaHoraria"],
          as: "profesor",
        },
          {
          model: AlumnoModel,
          attributes: ["nombre", "apellido", "carrera", "edad"],
          as: "alumno",
        }
      ],
    });

    if (obtenerId) res.json(obtenerId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los alumnos y profesores por id" });
  } catch (error) {
    console.log("Error al obtener los alumnos y profesores por id");
    return res
      .status(404)
      .json({ message: "Error por parte del servidor", error });
  }
};

export const updateAlumnoPr = async (req, res) => {
  const datosValidos = matchedData(req);

  try {
    const alumnoProfesor = await alumnoProfesor.findByPk(req.params.id);
    if (!alumnoProfesor) return res.status(404).json({ message: "alumno y profesor no encontrado" });

    Object.keys(datosValidos).forEach((campo) => {
      alumnoProfesor[campo] = datosValidos[campo];
    });

    return res.status(201).json({message: "se actualizaron los datos"});
  } catch (error) {
    console.log("no se pudo actualizar el alumno y profesor", error);
    return res
      .status(404)
      .json({ message: "Error por parte del servidor", error });
  }
};

export const deleteAlumnoProfesor = async (req, res) => {
  try {
    const borrar = await AlumnoProfesorModel.destroy({
      where: { id: req.params.id },
    });
    if (borrar) return res.json({ message: "se elimino el alumno y profesor" });

    return res.status(400).json({ message: "no se pudo eliminar el alumno y profesor" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor", error });
  }
};
