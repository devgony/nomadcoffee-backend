# Union type: ProtectedResolver retuning Model or Response

## .typeDefs.ts

```ts
import { gql } from "apollo-server-core";

export default gql`
  union Result = User | MutationResponse
  type Query {
    seeProfile(username: String!): Result!
  }
`;
```

## .resolvers.ts

```ts
export default {
  Result: {
    __resolveType(obj) {
      if (obj.username) {
        return "User";
      }
      if (obj.error) {
        return "MutationResponse";
      }
      return null;
    },
  },
  Query: {
    seeProfile: protectedResolver((_, { username }, { client }) =>
      client.user.findUnique({
        where: { username },
      })
    ),
  },
};
```
