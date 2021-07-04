import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchMyCoffeeShops(
      searchType: String!
      keyword: String
      offset: Int!
    ): [CoffeeShop]
  }
`;
