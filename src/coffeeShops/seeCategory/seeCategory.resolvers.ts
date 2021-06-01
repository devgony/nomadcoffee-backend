import { Context } from "../../types";

export default {
  Query: {
    seeCategory: (_, { slug, page }, { client }: Context) =>
      client.category.findUnique({ where: { slug } }).shops({
        take: 5,
        skip: (page - 1) * 5,
        include: { photos: true, categories: true },
      }),
  },
};
