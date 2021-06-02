import { Context } from "../../types";

export default {
  Query: {
    seeCategories: (_, { page }, { client }: Context) =>
      client.category.findMany({
        take: 5,
        skip: (page - 1) * 5,
      }),
  },
};
