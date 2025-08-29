import { matchedData } from "express-validator";
import { taskModel } from "../models/task.model.js";
import { usersModel } from "../models/users.model.js";
//Crear User
export const createUser = async (req, res) => {
    const datosValidos = matchedData(req)

  try {

    const user = await usersModel.create( datosValidos );
    return res.status(201).json(user);

  } catch (error) {
    console.log('no se pudo crear el usuario', error);
    return res.status(500).json({ message: "Error por parte del servidor"});
  }
};

//Obtener user
export const getAllUser = async (req, res) => {
    try {
        const obtenerUser = await usersModel.findAll({
          include: {model: taskModel,
            as: "manyTasks",
            attributes: ["title", "description", "isComplete"]
          }
        })
        res.json(obtenerUser);
        
    } catch (error) {
        console.log('no se pudo obtener todos los usuarios', error);
        return res.status(404).json({ message: 'Error por parte del servidor' }, error);
    };
};

export const getByIdUser = async (req, res) => {
    try {
        const obtenerUserId = await usersModel.findByPk(req.params.id, {
          attributes: [ "name", "email" ],
          include: {model: taskModel,
            as: "manyTasks",
            attributes: {exclude: ["user_id"]}
          }
        });

        if (obtenerUserId){
          res.json(obtenerUserId);

        }
        else return res.status(400).json({ message: 'no se puudo obtener los usuarios por id' });
    } catch (error) {
        console.log('Error al obtener los usuarios por id', error);
        return res.status(404).json({ message: 'Error por parte del servidor', error});
    };
};

export const updateUser = async (req, res) => {
    
  const datosValidos = matchedData(req)
  try {
        
      const user = await usersModel.findByPk(req.params.id);
      if(!user)
        return res.status(404).json({Message: "User no encontrado"})

      //Actualizar solo los campos que se pasen en la request
      Object.keys(datosValidos)
      .forEach((campo)=>{
        user[campo] = datosValidos[campo]
      })

      await user.save()
      res.status(200).json({Message: "Se actualizo el user.", user});


        
    } catch (error) {
        console.log('no se pudo actualizar el usuario');
        return res.status(404).json({ message: 'Error por parte del servidor' });
    };
};

export const deleteUser = async (req, res) => {
    try {
        const borrarUser = await usersModel.destroy({
            where: { id: req.params.id}
        });
        if (borrarUser) res.json({message: "se elimino el usuario"});
        else res.status(400).json({message: "no se pudo eliminar el usuario"});
    } catch (error) {
        res.status(404).json({message: "Error por parte del servidor"});
    }
};


