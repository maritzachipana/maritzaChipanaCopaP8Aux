import {Schema, Document, model} from "mongoose";

export interface IPost extends Document {
    title: string;
    url: string;
    content: string;
    image: string;
    createdAt: Date;
    updateAt: Date;
}
const postSchema: Schema = new Schema ({
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true},
    content: { type: String, required: true },
    image: { type: String},
    createdAt: { type: Date, default: Date.now},
    updateAt: Date,
});

export default model<IPost>("post", postSchema);