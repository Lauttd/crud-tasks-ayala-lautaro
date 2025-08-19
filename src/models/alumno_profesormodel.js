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
    },
    {
    timestamps: false,
    }
);

AlumnoModel.belongsToMany(ProfesorModel, {
    through: AlumnoProfesorModel,
    foreingKeys: "alumno_id",
    as: "profesor"
});

ProfesorModel.belongsToMany(AlumnoModel, {
    through: AlumnoProfesorModel,
    foreingKeys: "profesor_id",
    as: "alumno"
});

