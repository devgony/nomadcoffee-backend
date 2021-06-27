import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchCoffeeShops(
      searchType: String!
      keyword: String!
      offset: Int!
    ): [CoffeeShop]
  }
`;
