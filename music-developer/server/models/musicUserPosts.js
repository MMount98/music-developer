const { Schema, model } = require("mongoose");

const musicUserPostsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "musicUser" },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const musicUserPosts = model("musicUserPosts", musicUserPostsSchema);

model.exports = { musicUserPosts };
