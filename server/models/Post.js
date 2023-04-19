import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String },
    content: { type: String },
    cover: { type: String },
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
