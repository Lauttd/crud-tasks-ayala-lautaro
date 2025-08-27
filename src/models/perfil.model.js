import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";  


export const perfilModel = sequelize.define("perfil", {
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    correo: { type: DataTypes.STRING(100), allowNull: false },
    pais: { type: DataTypes.STRING(100), allowNull: false },
    genero: { type: DataTypes.STRING(100), allowNull: false},
    edad: { type: DataTypes.INTEGER, allowNull: false }
} ,{
    paranoid: true,
    createdAt: false,
    updatedAt: false,
});

