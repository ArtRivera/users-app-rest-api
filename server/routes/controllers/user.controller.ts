import {RequestHandler} from 'express';
import User from '../../models/User'

const test: RequestHandler = (req,res)=>{
    res.json({ok:'Servidor de Arturo Escuchando...'});
}

const getUsers: RequestHandler = async (req,res) =>{
try {
const users = await User.find({});
 res.json(users);
} catch (error) {
    res.status(500).json(error);
}
}

const getUserById: RequestHandler = async (req,res) =>{
    try {
    const {id} = req.params;
    const users = await User.findById(id);
     res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
    }

const createUser: RequestHandler = async (req,res) =>{
    try {
        const {nombre,email,img,genero,celular} = req.body;
        const user = new User({
            nombre,
            email,
            genero,
            img,
            celular
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updUser: RequestHandler = async (req,res) =>{
    try {
        const {id} = req.params;
        const {body} = req;

        const user = await User.findByIdAndUpdate(id,body,{new: true});
        if(!user) res.status(204).json({message: 'Usuario no encontrado'});
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteUser: RequestHandler = async (req,res) => {
    try {
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser) res.json(204).json({message: 'No existe el usuario a eliminar'});
        res.json({message: `Usuario ${id} eliminado`});
    } catch (error) {
        res.status(500).json(error);
    }
}


export {
    test,
    getUsers,
    getUserById,
    createUser,
    updUser,
    deleteUser
}