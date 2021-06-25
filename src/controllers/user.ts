import {Request, Response} from "express";
import user, {IUser} from "../models/user";
import post, {IPost} from "../models/post";
import sha1 from "sha1";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

interface Icredencial{
    email: string;
    password: string;
}

class userControllers {
   
    public async index (request:  Request, response: Response){
        const users = await user.find({});
        response.json({message: "todos los usuarios", serverResponse: users});
    }
    public async logln (request: Request, response: Response){
        const {email, password} = request.body;
        var encri: string = sha1(password);
        const result = await user.findOne({email});
        if (result){
           if (result.password == encri){
                var token: string = jwt.sign ({id: result.id, email: result.email}, "security");
                response.status(200).json({serverResponse: "logedIn successfully", token}); 
            }   
        }
        response.status(300).json({serverResponse: "Credenciales incorrectas", encri});
        console.log(encri)
    }
    public async createU(request: Request, response: Response){
        const {fullname, username, password, email} = request.body;
        const newU = new user(request.body);
        newU["createdAt"] = new Date();
        newU["password"] = sha1(newU["password"]);
        await newU.save();
        //response.json({message: "usuario registrado", newU});
        response.status(201).json({message: "usuario registrado", serverResponse: newU});
    }
    public async updateU(request: Request, response: Response){
        const {fullname, username, password, email} = request.body;
        const {id} = request.params;
        const updU = await user.findByIdAndUpdate(id, request.body);
        response.status(200).json({message: "usuario actualizado", serverResponse: updU});
    }
    public async deleteU (request: Request, response: Response){
        const {id} = request.params;
        const delU = await user.findByIdAndDelete(id);
        response.status(200).json({message: "usuario eliminado"});

    }
    public async postTouser (request:Request, response: Response){
        const {idU} = request.params;
        const {idP} = request.body;
        let userT = await user.findById(idU);
        let posT = await post.findById(idP);
        if (userT != null && posT != null){
            userT.post.push(posT);
            userT.save();
            response.status(300).json({message: "post asignado a usuario"});
        } 
        response.status(300).json({message: "parametros nulos"});
    }
    public async getprofile (request: Request, response: Response){
        const {id} = request.params;
        const getU = await user.findById(id);
        response.status(200).json({message: "profile", serverResponse: getU});
    }
    public async sendEmail (request: Request, response: Response){
        const {to, subject, text} = request.body;
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user:"correo",
                pass:"1234567890qwe",
            },
        });
        var mailOptions ={
            from: "Maritza Chipana Copa",
            to: to,
            subject: subject,
            text: text,
            attachments: [{
                path: "/opt/app/files/23a9e87_memecl.jpeg",
            }]
        };
        transporter.sendMail(mailOptions, function ( error, info){
            if (error){
                response.status(500).json({message: "Error, error"}); 
            }else{
                response.status(200).json({message: "E-mail enviado con éxito", serverResponse: mailOptions});
            }
        });
    }    
}
export const UserControllers = new userControllers();