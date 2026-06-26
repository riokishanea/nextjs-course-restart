import { Document, model, models, Schema} from "mongoose";

export interface ITag {
    name: string;
    question: number;
}

export interface ITagDoc extends ITag, Document{}

const TagScheme = new Schema<ITag>({
    name: {type: String, required: true, unique: true},
    question: {type: Number,default:0}
},{timestamps:true});

const Tag = models?.Tag || model<ITag>("Tag", TagScheme);

export default Tag;
