import { Schema, model, Document} from "mongoose";

export interface IImage extends Document {
    path: string;
    relativepath: string;
    filename: string;
    timestamp: Date;
}

const imgSchema: Schema = new Schema ({
    path: {type: String, required: true},
    relativepath: { type: String, required: true},
    filename: { type: String, required: true},
    timestamp: {type: Date, default: Date.now()},
});

export default model<IImage>("image", imgSchema);