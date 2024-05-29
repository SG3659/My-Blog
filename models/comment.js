const { Schema, model } = require("mongoose");

const commentSchem = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Comment = model("comment", commentSchem);
module.exports = Comment;
