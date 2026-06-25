import { model, models, Schema, Types } from "mongoose";

export interface ITagQuestion {
    tag: Types.ObjectId;
    question: Types.ObjectId;
}

const TagQuestionScheme = new Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag" },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
  },
  { timestamps: true }
);

const TagQuestion =
  models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionScheme);

export default TagQuestion;
