import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { taskModel } from "./task.model.js";


export const usersModel = sequelize.define("users", {
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(100), allowNull: false },
},{
    timestamps: false
});

//relaciones 
usersModel.hasMany(taskModel, {foreignKey: "user_id", as: "manyTasks"});

taskModel.belongsTo(usersModel, {foreignKey: "user_id", as: "oneUser"});

