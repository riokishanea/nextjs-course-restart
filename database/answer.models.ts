import { Document, model, models, Schema, Types } from "mongoose";

export interface IAnswer {
  author: Types.ObjectId;
  question: Types.ObjectId;
  content: string;
  upvote: number;
  downvote: number;
}

export interface IAnswerDoc extends IAnswer, Document{}

const AnswerScheme = new Schema<IAnswer>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    content: { type: String, required: true },
    upvote: { type: Number,default:0, required: true },
    downvote: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);
const Answer = models?.Answer || model<IAnswer>("Answer", AnswerScheme);

export default Answer;
