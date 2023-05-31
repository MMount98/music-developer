const { Schema, model } = require("mongoose");

const venuePostsSchema = new Schema(
  {
    venue: { type: Schema.Types.ObjectId, ref: "venueUser" },
    content: String,
    require: true,
  },
  { timestamps: true }
);

const venueUserPosts = model("venueUserPosts", venuePostsSchema);

model.exports = { venueUserPosts };
