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

const resolvers = {
    Query: {
        
    }
}