import  Sequelize  from "sequelize";
import dotenv from 'dotenv';
dotenv.config;

export const Sequelize = new Sequelize(
    procces.env.DB_NAME,
    procces.env.DB_USER,
    procces.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

export const initDB  = async () => {
    try{
    await Sequelize.athenticate();
    console.log('se conecto a la base de datos');
    await Sequelize.sync({ alter: true });
    } catch ( error ){
        console.error('no fue posible conectar a la base de datos:, error');
    }
}