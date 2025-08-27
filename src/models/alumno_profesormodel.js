import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { AlumnoModel } from "./alumnos.model.js";
import { ProfesorModel } from "./profesores.model.js";

export const AlumnoProfesorModel = sequelize.define(
    "alumno_profesor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,     
        },
        alumno_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        profesor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    }
);


AlumnoModel.belongsToMany(ProfesorModel, {
    through: AlumnoProfesorModel,
    foreignKey: "alumno_id",
    as: "profesor"
});

ProfesorModel.belongsToMany(AlumnoModel, {
    through: AlumnoProfesorModel,
    foreignKey: "profesor_id",
    as: "alumno"
});

AlumnoProfesorModel.belongsTo(AlumnoModel, {foreignKey: "alumno_id", as: "alumno"});

AlumnoProfesorModel.belongsTo(ProfesorModel, {foreignKey: "profesor_id", as: "profesor"});


