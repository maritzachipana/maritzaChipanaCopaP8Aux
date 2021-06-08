import {Schema, Document, model} from "mongoose";

export interface IUser extends Document{
    fullname: string;
    username: string;
    password: string;
    email: string;
}

const userSchema = new Schema<IUser> ({
    fullname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
});

export default model<IUser>("user", userSchema);