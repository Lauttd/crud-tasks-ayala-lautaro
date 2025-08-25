import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const AlumnoModel = sequelize.define("alumno", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    carrera: { type: DataTypes.STRING(100), allowNull: false },
    edad: { type: DataTypes.BOOLEAN, defaultValue: false}
} ,{
    timestamps: false
});