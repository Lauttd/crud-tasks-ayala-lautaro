import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { taskModel } from "./task.model.js";
import { perfilModel } from "./perfil.model.js";


export const usersModel = sequelize.define("users", {
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(100), allowNull: false },
},{
    timestamps: false
});

//relaciones mucho a mucho
usersModel.hasMany(taskModel, 
    {foreignKey: "user_id", as: "manyTasks"});

taskModel.belongsTo(usersModel, 
    {foreignKey: "user_id", as: "oneUser"});


perfilModel.hasOne(usersModel, {foreignKey: "perfil_id", as: "perfil"});

usersModel.hasOne(perfilModel, {foreignKey: "user_id", as: "user"});