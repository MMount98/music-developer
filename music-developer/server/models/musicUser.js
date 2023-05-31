const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const musicUserSchema = new Schema(
  {
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
    location: {
      type: String,
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    bandMembers: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
    },
    bandName: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    socialLinks: {
      type: [String],
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "musicUserPosts" }],
    bandCoverPhoto: {
      type: String,
    },
    bandProfilePhoto: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

musicUserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

musicUserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const musicUser = model("musicUser", musicUserSchema);

module.exports = { musicUser };
