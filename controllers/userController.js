// import User from "../models/User.js";

import User from "../models/User.js";


const addUser = async (req, res) => {
    if(req.body.rol===""){
        const error = new Error("Se debe asignar un rol");
        return res.status(404).json({msg: error.message})
    }
    try {
        const savedUser = await User.create(req.body);
        res.json(savedUser)
    } catch (error) {
        console.log(error);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error);
    }
}


export {
    addUser,
    getUsers
}