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
                as: "alumno",
                attribute: ["nombre", "apellido", "carrera", "edad"],
             }
        });

    } catch (error) {
        console.log("no se pudo obtener todos los alumnos");
        return res.status(404).json({ message: "Error por parte del servidor" });
    }
}