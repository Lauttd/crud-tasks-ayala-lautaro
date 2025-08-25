import { AlumnoProfesorModel } from "../models/alumno_profesormodel.js"
import { AlumnoModel } from "../models/alumnos.model.js";
import { ProfesorModel } from "../models/profesores.model.js";

export const createAlumnoProfesor = async (req, res) => {
    try {
        const { alumno_id, profesor_id } = req.body


        //verificar id alumno
        if (typeof alumno_id !== "number") {
            return res.status(400).json({ message: "El id debe ser un entero"})
        }
        
        if (alumno_id === "") {
            return res.status(400).json({ message: "El id no debe estar vacio"})
        }

        //verificar Id profesor 
        if (typeof profesor_id !== "number") {
            return res.status(400).json({ message: "El id debe ser un entero"})
        }
        
        if (profesor_id === "") {
            return res.status(400).json({ message: "El id no debe estar vacio"})
        }

        const crearAlumno_profesor = await AlumnoProfesorModel.create({
            alumno_id,
            profesor_id
        });
        return res.status(201).json(crearAlumno_profesor);

    } catch (error) {
        console.log("No se pudo crear Alumno_profesor", error);
            return res.status(404).json({ message: "Error por parte del servdior", error });
    }
};

//obtener
export const getAllAlumnoProfesor = async (req, res) => {
    try {
        const obtener = await AlumnoProfesorModel.findAll({
            include: [ { model: ProfesorModel,
                as: "profesor",
             }, {
                model: AlumnoModel,
                as: "alumno"
             } ]
        });
        return res.status(201).json(obtener);

    } catch (error) {
        console.log("no se pudo obtener todos los alumnos y profesores");
        return res.status(404).json({ message: "Error por parte del servidor", error });
    }
};