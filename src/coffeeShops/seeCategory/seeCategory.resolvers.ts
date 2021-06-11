import { PAGE_SIZE } from "../../constants";
import { Context } from "../../types";

export default {
  Query: {
    seeCategory: (_, { slug, page }, { client }: Context) =>
      client.category.findUnique({ where: { slug } }).shops({
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
        include: { photos: true, categories: true },
      }),
  },
};
