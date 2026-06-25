import { model, models, Schema, Types } from "mongoose";

export interface IQuestion {
    title: string;
    content: string;
    tags: Types.ObjectId[];
    author: Types.ObjectId;
    views: number;
    upvotes: number;
    downvotes: number;
    answers: number;
}

const QuestionScheme = new Schema<IQuestion>({
    title: {type: String, required: true},
    content: {type: String, required: true}, 
    tags: [{type: Schema.Types.ObjectId, ref: "Tags", required: true}],
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    views: {type: Number, default: 0},
    upvotes: {type: Number, default: 0}, 
    downvotes: {type: Number, default: 0},
    answers: {type: Number, default: 0},
},{timestamps:true});

const Question = models?.Question || model<IQuestion>("Question", QuestionScheme);
export default Question;
