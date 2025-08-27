import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
 
export const createProfesor = async (req, res) => {
    try {
        const { nombre, apellido, carrera, cargaHoraria } = req.body;

        //validar nombre
        if (typeof nombre !== "string") {
            return res.status(400).json({ message: "El nombre tiene q ser una cadena" });
        }

        if (nombre === "") {
            return res.status(400).json({ message: "El nombre no puede estar vacio" });
        }


        //validar apellido
        if (typeof apellido !== "string") {
            return res.status(400).json({ message: "El apellido tiene q ser una cadena" });
        }

        if (apellido === "") {
            return res.status(400).json({ message: "El apellido no puede estar vacio" });
        }

        //validar materia
        if (typeof carrera !== "string") {
            return res.status(400).json({ message: "La carrera tiene q ser una cadena" });
        }

        if (carrera === "") {
            return res.status(400).json({ message: "La carrera no puede estar vacio" });
        }

        //validar cargaHoraria
        if (typeof cargaHoraria !== "number") {
            return res.status(400).json({ message: "La carga horaria debe ser un numero" });
        }

        if (cargaHoraria === "") {
            return res.status(400).json({ message: "La la carga horaria no puede estar vacio" });
        }
        

        //crear Alumno
        const nuevoProfesor = await ProfesorModel.create({
            nombre,
            apellido, 
            carrera,
            cargaHoraria
        });
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

export const updateProfespr = async (req, res) => {
  try {
    const [updated] = await ProfesorModel.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const actualizarProfesor = await ProfesorModel.findByPk(req.params.id);
      res.json(actualizarProfesor);
    } else {
      return res.status(400).json({ message: "no se encontro el profesor" });
    }
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