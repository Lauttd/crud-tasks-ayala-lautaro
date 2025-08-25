import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
 
export const createAlumno = async (req, res) => {
    try {
        const { nombre, apellido, carrera, edad } = req.body;

        //validar nombre
        if (typeof nombre !== "string") {
            return res.status(400).json({ message: "El nombre tiene q ser una cadena" });
        }

        if (nombre === "") {
            return res.status(400).json({ message: "El nombre no puede estar vacio" });
        }

        const nombreExiste = await AlumnoModel.findOne({ where: { nombre} });
        if (nombreExiste) {
            return res.status(400).json({ message: "Este nombre ya existe"});
        }

        //validar apellido
        if (typeof apellido !== "string") {
            return res.status(400).json({ message: "El apellido tiene q ser una cadena" });
        }

        if (apellido === "") {
            return res.status(400).json({ message: "El apellido no puede estar vacio" });
        }

        const apellidoExiste = await AlumnoModel.findOne({ where: { nombre} });
        if (apellidoExiste) {
            return res.status(400).json({ message: "Este apellido ya existe"});
        }

        //validar carrera
        if (typeof carrera !== "string") {
            return res.status(400).json({ message: "La carrera tiene q ser una cadena" });
        }

        if (carrera === "") {
            return res.status(400).json({ message: "La carrera no puede estar vacio" });
        }

        //validar edad
        if (typeof edad !== "number") {
            return res.status(400).json({ message: "La edad debe ser un numero" });
        }
         
        //crear Alumno
        const nuevoAlumno = await AlumnoModel.create({
            nombre,
            apellido, 
            carrera,
            edad
        });
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
      include: ProfesorModel,
      attributes: [ "nombre", "apellido", "carrera", "cargaHoraria" ],
      as: "profesor",
    });

    if (obtenerAlumnoId) res.json(obtenerAlumnoId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los alumnos por id" });
  } catch (error) {
    console.log("Error al obtener los alumnos por id");
    return res.status(404).json({ message: "Error por parte del servidor", error });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const [updated] = await AlumnoModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const actualizarAlumno = await AlumnoModel.findByPk(req.params.id);
      res.json(actualizarAlumno);
    } else {
      return res.status(400).json({ message: "no se encontro el alumno" });
    }
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
    if (borrarPerfil) return res.json({ message: "se elimino el alumno" });

    return res.status(400).json({ message: "no se pudo eliminar el alumno" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor", error });
  }
};