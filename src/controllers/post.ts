import {Request, Response} from "express";
import post, {IPost} from '../models/post';
import image, {IImage} from '../models/Image';

class postControllers {
    public async index (request: Request, response: Response) {
        const posts = await post.find({});
        response.json({message: "todos los posts", serverResponse: posts});
    }
    public async createP (request: Request, response: Response){
        const{title, url, content} = request.body;
        const newP = new post(request.body);
        await newP.save();
        response.status(201).json({message: "nuevo post", serverResponse: newP});
    }
    public async updateP (request: Request, response: Response){
        const{title, url, content, createdAt} = request.body;
        const {id} = request.params;
        const updP = await post.findByIdAndUpdate(id, request.body);
        response.status(200).json({message: "post actualizado", serverResponse: updP});
    }
    public async deleteP (request: Request, response: Response){
        const {id} = request.params;
        const delP = await post.findByIdAndDelete(id);
        response.status(200).json({message: "post eliminado"});

    }
    public async createimg (request: Request, response: Response) {
        const {idP} = request.params;
        const {idI} = request.params;
        let createI = await post.findById(idP);
        let imgI = await image.findById(idI);
        if (createI != null && imgI != null){
            const{title, url, content} = request.body;
            const newI = new post(request.body);
            newI ["image"] = imgI.relativepath;
            await newI.save();
            response.status(300).json({message: "imagen asignado a un Post", newI});
        }
        response.status(300).json({message: "parametros nulos"});
    }
}
 export const PostControllers = new postControllers();