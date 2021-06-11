import { PAGE_SIZE } from "../../constants";
import { Context } from "../../types";

export default {
  Query: {
    seeCategories: (_, { page }, { client }: Context) =>
      client.category.findMany({
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
      }),
  },
};
