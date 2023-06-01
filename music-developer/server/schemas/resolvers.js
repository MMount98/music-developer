const { AuthenticationError } = require("apollo-server-express");
const {
  musicUser,
  musicUserPosts,
  venueUser,
  venueUserPosts,
  message,
  bookings,
} = require("../models/index");

const { signToken } = require("../utils/auth");
const { musicUser } = require("../models/musicUser");

const resolvers = {
  Query: {
    musicUser: async () => {
      return await MusicUser.find();
    },
    venueUser: async () => {
      return await VenueUser.find();
    },
  },

  Mutation: {
    createVenueUser: async (parent, userInput) => {
      if (!userInput.venuePhoto) {
        userInput.venuePhoto =
          "https://png.pngtree.com/png-vector/20190221/ourlarge/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg";
      }
      const newVenueUser = await venueUser.create(userInput);
      return newVenueUser;
    },
    removeVenueUser: async (parent, args, context) => {
      if (context.User) {
        const User = await musicUser.findOne({ _id: context.User._id });
        await musicUser.findOneAndDelete({ _id: context.User._id });
      }
    },
    createMusicUser: async (parent, userInput) => {
      if (!userInput.bandProfilePhoto) {
        userInput.bandProfilePhoto =
          "https://png.pngtree.com/png-vector/20190221/ourlarge/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg";
      }
      const newMusicUser = await musicUser.create(userInput);
      return newMusicUser;
    },
  },
};
