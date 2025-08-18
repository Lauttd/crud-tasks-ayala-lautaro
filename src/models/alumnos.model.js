import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const AlumnoModel = sequelize.define("alumno", {
    nombre: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    carrera: { type: DataTypes.STRING(100), allowNull: false },
    edad: { type: DataTypes.BOOLEAN, defaultValue: false}
} ,{
    timestamps: false
});