import { gql } from "apollo-server-core";

export default gql`
  type Result {
    coffeeShops: [CoffeeShop]
    maxPage: Int!
  }

  type Query {
    seeCoffeeShops(page: Int!): Result
  }
`;
