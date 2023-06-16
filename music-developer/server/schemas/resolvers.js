const { AuthenticationError } = require("apollo-server-express");
const {
  MusicUser,
  musicUserPosts,
  VenueUser,
  venueUserPosts,
  message,
  bookings,
} = require("../models/index");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    musicUsers: async () => {
      try {
        const users = await MusicUser.find();
        return users || [];
      } catch (error) {
        console.error("Error fetching musicUsers:", error);
        return [];
      }
    },
    venueUsers: async () => {
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
      const newMusicUser = await MusicUser.create(userInput);
      return newMusicUser;
    },
  },
};

module.exports = resolvers;
