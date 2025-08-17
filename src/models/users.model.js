import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const usersModel = sequelize.define("users", {
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(100), allowNull: false },
});