import { gql } from "@apollo/client";

export const QUERY_MUSICPROFILES = gql`
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
  }
`;
