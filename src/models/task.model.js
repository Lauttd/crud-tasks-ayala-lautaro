import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const taskModel = sequelize.define("task", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    description: { type: DataTypes.STRING(100), allowNull: false },
    isComplete: { type: DataTypes.BOOLEAN, default: false },
});