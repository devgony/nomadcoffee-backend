import { Context } from "../../types";

export default {
  Query: {
    seeCoffeeShop: (_, { id }, { client }: Context) =>
      client.coffeeShop.findUnique({
        where: { id },
        include: { photos: true, categories: true },
      }),
  },
};
