const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type venueUser {
    _id: ID!
    username: String
    email: String
    password: String
    venueName: String
    capacity: Int
    location: String
    availableDates: [Date]
    website: String
    description: String
    posts: [venueUserPosts]
    bandVenuePhoto: String
    createdAt: String
  }

  type venueUserPosts {
    _id: ID!
    venue: [venueUser]
    content: String
    createdAt: String
  }

  type musicUser {
    _id: ID!
    username: String
    email: String
    password: String
    location: String
    genre: String
    bandMembers: [String]
    bio: String
    bandName: String
    socialLinks: String
    description: String
    posts: [musicUserPosts]
    bandCoverPhoto: String
    bandProfilePhoto: String
    createdAt: String
  }

  type musicUserPosts {
    _id: ID!
    user: [musicUser]
    content: String
    createdAt: String
  }

  type messages {
    _id: ID!
    sender: [user]
    receiver: [user]
    content: String
    createdAt: String
  }

  type bookings {
    _id: ID!
    band: [musicUser]
    venue: [venueUser]
    date: [Date]
    status: String
  }

  type Auth {
    token: ID!
    user: User
    entity: Entity
  }

  type Query {
    musicUser: [musicUser]!
    musicUser(musicUserId: ID!): musicUser
    me: musicUser
    venueUser: [venueUser]!
    venueUser(venueUserId: ID!): venueUser
    me: venueUser
  }

  type Mutation {
    createVenueUser(
      username: String!
      email: String!
      password: String!
      venueName: String!
      capacity: Int
      location: String!
      website: String
      description: String
    ): venueUser
    createMusicUser(
      username: String!
      email: String!
      password: String!
      location: String!
      genre: String!
      bio: String
      bandName: String!
      socialLinks: String
      description: String
      bandCoverPhoto: String
      bandProfilePhoto: String
      createdAt: String
    ): musicUser
    updateMusicUser(
      username: String
      email: String
      password: String
      location: String
      genre: String
      bandMembers: [String]
      bio: String
      bandName: String
      socialLinks: String
      description: String
      posts: [musicUserPosts]
      bandCoverPhoto: String
      bandProfilePhoto: String
    ): musicUser
    updateVenueUser(
      username: String
      email: String
      password: String
      venueName: String
      capacity: Int
      location: String
      availableDates: [Date]
      website: String
      description: String
      posts: [venueUserPosts]
      bandVenuePhoto: String
    ): venueUser
    createMusicUserPost(content: String!): musicUserPosts
    createvenueUserPosts(content: String!): venueUserPosts
    removeMusicUser: musicUser
    removeVenueUser: venueUser
  }
`;

module.exports = typeDefs;
