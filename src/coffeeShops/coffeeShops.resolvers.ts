import { Context } from "../types";

export default {
  Category: {
    totalShops: ({ id }, __, { client }: Context) =>
      client.coffeeShop.count({ where: { categories: { some: { id } } } }),
  },
};
