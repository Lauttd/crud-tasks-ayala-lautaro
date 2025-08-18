import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const ProfesorModel = sequelize.define("profesor", {
    nombre: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    materia: { type: DataTypes.STRING(100), allowNull: false },
    cargaHoraria: { type: DataTypes.INTEGER, defaultValue: false}
} ,{
    timestamps: false
});

