import {Request, Response} from "express";
import user, {IUser} from "../models/user";

class userControllers {
    public async index (request:  Request, response: Response){
        const users = await user.find({});
        response.json({message: "todos los usuarios", users});
    }
    public async createU(request: Request, response: Response){
        const {fullname, username, password, email} = request.body;
        const newU = new user(request.body);
        await newU.save();
        response.json({message: "usuario registrado", newU});
        response.status(201).json({serverResponse: newU});
    }
    public async updateU(request: Request, response: Response){
        const {fullname, username, password, email} = request.body;
        const {id} = request.params;
        const updU = await user.findByIdAndUpdate(id, request.body);
        response.json({message: "usuario actualizado"});
        response.status(200).json({serverResponse: updU});
    }
    public async deleteU (request: Request, response: Response){
        const {id} = request.params;
        const delU = await user.findByIdAndDelete(id);
        response.json ({message: "usuario eliminado"});
        response.status(201).json({serverResponse: delU});

    }
}
export const UserControllers = new userControllers();