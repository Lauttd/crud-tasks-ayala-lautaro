import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const ProfesorModel = sequelize.define("profesor", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    carrera: { type: DataTypes.STRING(100), allowNull: false },
    cargaHoraria: { type: DataTypes.INTEGER, defaultValue: false}
} ,{
    timestamps: false
});

