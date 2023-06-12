const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const venueUserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  venueName: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availableDates: { type: [Date] },
  website: {
    type: String,
  },
  description: {
    type: String,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "venueUserPosts" }],
  bandCoverPhoto: {
    type: String,
  },
  venuePhoto: {
    type: String,
  },
  website: {
    type: String,
  },
  socialLinks: {
    type: [String],
  },
});

venueUserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

venueUserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const venueUser = model("venueUser", venueUserSchema);

module.exports = venueUser;
