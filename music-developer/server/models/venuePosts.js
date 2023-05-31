const { Schema, model } = require("mongoose");

const venuePostsSchema = new Schema(
  {
    venue: { type: Schema.Types.ObjectId, ref: "venueUser" },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const venueUserPosts = model("venueUserPosts", venuePostsSchema);

model.exports = { venueUserPosts };
