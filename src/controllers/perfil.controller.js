import { perfilModel } from "../models/perfil.model.js";
import { usersModel } from "../models/users.model.js";


export const createPerfil = async (req, res) => {
  const datosValidos = matchedData(req);
  try {

    const nuevoPerfil = await perfilModel.create(datosValidos);
    return res.status(201).json(nuevoPerfil);
    
    } catch (error) {
        console.log(error);
            return res.status(404).json({ message: "Error por parte del servdior", error });
    }
};

//obtener
export const getAllPerfil = async (req, res) => {
    try {
        const obtener = await perfilModel.findAll({
            include: { model: usersModel,
                as: "perfil",
             }
        });
        return res.status(201).json(obtener);

    } catch (error) {
        console.log("no se pudo obtener todos los alumnos y profesores");
        return res.status(404).json({ message: "Error por parte del servidor", error });
    }
};

export const getByIdPerfil = async (req, res) => {
  try {
    const obtenerPerfilId = await perfilModel.findByPk(req.params.id, {
      include: usersModel,
      attributes: ["nombre", "correo", "pais", "genero" ,"edad"],
      as: "oneUser",
    });

    if (obtenerPerfilId) res.json(obtenerPerfilId);
    else
      return res
        .status(400)
        .json({ message: "no se pudo obtener los perfiles por id" });
  } catch (error) {
    console.log("Error al obtener los perfiles por id");
    return res.status(404).json({ message: "Error por parte del servidor" });
  }
};

export const updatePerfil = async (req, res) => {
  
  const datosValidos = matchedData(req);
  try {
    
    const perfil = await perfilModel.findByPk(req.params.id);
     if(!perfil)
      return res.status(404).json({ message: "perfil no encontrado"})

     Object.keys(datosValidos).forEach((campo) => {
      user[campo]= datosValidos[campo]
     });
  } catch (error) {
    console.log("no se pudo actualizar el perfil");
    return res.status(404).json({ message: "Error por parte del servidor" });
  }
};

export const deletePerfil = async (req, res) => {
  try {
    const borrarPerfil = await perfilModel.destroy({
      where: { id: req.params.id },
    });
    if (borrarPerfil) return res.json({ message: "se elimino el perfil" });

    return res.status(400).json({ message: "no se pudo eliminar el perfil" });
  } catch (error) {
    res.status(404).json({ message: "Error por parte del servidor" });
  }
};