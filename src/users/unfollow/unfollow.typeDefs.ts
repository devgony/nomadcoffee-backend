import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    unfollow(username: String!): MutationResponse!
  }
`;
