import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";
 
export const createProfesor = async (req, res) => {
    try {
        const { nombre, apellido, materia, cargaHoraria } = req.body;

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
s

        //validar materia
        if (typeof carrera !== "string") {
            return res.status(400).json({ message: "La materia tiene q ser una cadena" });
        }

        if (materia === "") {
            return res.status(400).json({ message: "La materia no puede estar vacio" });
        }

        //validar cargaHoraria
        if (typeof cargaHoraria !== "number") {
            return res.status(400).json({ message: "La carga horaria debe ser un numero" });
        }

        if (cargaHoraria === "") {
            return res.status(400).json({ message: "La la carga horaria no puede estar vacio" });
        }
        

        //crear Alumno
        const nuevoProfesor = await AlumnoModel.create({
            nombre,
            apellido, 
            materia,
            cargaHoraria
        });
        return res.status(201).json(nuevoAlumno);

    } catch (error) {
        console.log("No se pudo crear profesor");
        return res.status(404).json({ message: "Error por parte del servidor", error });
        
    }
};

export const getAllProfesor = async (req, res) => {
    try {
        const obtenerProfesor = await ProfesorModel.findAll({
            include: { model: AlumnoModel,
                as: "profesor",
                attribute: ["nombre", "apellido", "materia", "cargaHoraria"],
             }
        });
        return res.status(201).json(obtenerProfesor);

    } catch (error) {
        console.log("no se pudo obtener todos los profesores");
        return res.status(404).json({ message: "Error por parte del servidor" });
    }
}