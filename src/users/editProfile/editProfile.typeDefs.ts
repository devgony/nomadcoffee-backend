import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    editProfile(
      email: String
      name: String
      location: String
      password: String
      avatarURL: Upload
      githubUsername: String
    ): MutationResponse!
  }
`;
