import { Context } from "../../types";

export default {
  Query: {
    seeCoffeeShops: (_, { page }, { client }: Context) =>
      client.coffeeShop.findMany({
        take: 5,
        skip: (page - 1) * 5,
        include: { photos: true, categories: true },
      }),
  },
};
