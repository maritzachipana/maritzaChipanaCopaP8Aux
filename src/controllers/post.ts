import {Request, Response} from "express";
import post, {IPost} from '../models/post';

class postControllers {
    public async index (request: Request, response: Response) {
        const posts = await post.find({});
        response.json({message: "todos los posts", serverResponse: posts});
    }
    public async createP (request: Request, response: Response){
        const{title, url, content} = request.body;
        const newP = new post(request.body);
        await newP.save();
        //response.json({message: "nuevo post", newP});
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
}
 export const PostControllers = new postControllers();