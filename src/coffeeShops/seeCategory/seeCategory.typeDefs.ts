import { gql } from "apollo-server-core";

export default gql`
  type Query {
    seeCategory(slug: String!, page: Int!): [CoffeeShop]
  }
`;
