import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  {
    musicUsers {
      _id
      bandCoverPhoto
      bandName
      bandProfilePhoto
      bio
      genre
      location
      socialLinks
    }
    venueUsers {
      _id
      description
      location
      venueName
      venuePhoto
      website
    }
  }
`;
