const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const message = model("message", messageSchema);

model.exports = { message };
