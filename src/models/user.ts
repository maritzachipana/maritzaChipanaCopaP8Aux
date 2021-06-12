import {Schema, Document, model} from "mongoose";
import post, {IPost} from "./post";

export interface IUser extends Document{
    fullname: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    post: Array<IPost>;
}

const userSchema = new Schema<IUser> ({
    fullname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    createdAt: {type: Date},
    post: {type: [post.schema]},
});

export default model<IUser>("user", userSchema);