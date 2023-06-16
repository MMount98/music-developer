const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type VenueUser {
    _id: ID!
    username: String
    email: String
    password: String
    venueName: String
    capacity: Int
    location: String
    availableDates: [String]
    website: String
    description: String
    posts: [VenueUserPosts]
    venuePhoto: String
    createdAt: String
  }

  type VenueUserPosts {
    _id: ID!
    venue: VenueUser
    content: String
    createdAt: String
  }

  type MusicUser {
    _id: ID!
    username: String
    email: String
    password: String
    location: String
    genre: [String]
    bandMembers: [String]
    bio: String
    bandName: String
    socialLinks: [String]
    description: String
    posts: [MusicUserPosts]
    bandCoverPhoto: String
    bandProfilePhoto: String
    createdAt: String
  }

  type MusicUserPosts {
    _id: ID!
    user: MusicUser
    content: String
    createdAt: String
  }

  type Messages {
    _id: ID!
    senderMusicUser: MusicUser
    senderVenueUser: VenueUser
    receiverMusicUser: MusicUser
    receiverVenueUser: VenueUser
    content: String
    createdAt: String
  }

  type Bookings {
    _id: ID!
    band: [MusicUser]
    venue: [VenueUser]
    date: String
    status: String
  }

  type Auth {
    token: ID!
    musicUser: MusicUser
    venueUser: VenueUser
  }

  type Query {
    musicUsers: [MusicUser]
    musicUser(musicUserId: ID!): MusicUser
    venueUsers: [VenueUser]!
    venueUser(VenueUserId: ID!): VenueUser
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
    ): VenueUser
    removeVenueUser(id: ID!): Boolean
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
    ): MusicUser
    removeMusicUser(id: ID!): Boolean
    updateMusicUser(
      id: ID!
      username: String
      email: String
      location: String
      genre: String
      bandMembers: [String]
      bio: String
      bandName: String
      socialLinks: String
      description: String
      bandCoverPhoto: String
      bandProfilePhoto: String
    ): Boolean
    updateVenueUser(
      id: ID!
      username: String
      email: String
      venueName: String
      capacity: Int
      location: String
      availableDates: [String]
      website: String
      description: String
      bandVenuePhoto: String
    ): Boolean
    createMusicUserPost(content: String!): MusicUserPosts
    createVenueUserPost(content: String!): VenueUserPosts
    loginMusicUser(email: String!, password: String!): Auth
    loginVenueUser(email: String!, password: String!): Auth
    sendMessageFromMusicUser(receiverId: ID!, content: String!): Messages
    sendMessageFromVenueUser(receiverId: ID!, content: String!): Messages
  }
`;

module.exports = typeDefs;
