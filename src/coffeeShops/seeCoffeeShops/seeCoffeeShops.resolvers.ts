import { PAGE_SIZE } from "../../constants";
import { Context } from "../../types";

export default {
  Query: {
    seeCoffeeShops: async (_, { page }, { client }: Context) => {
      const coffeeShops = await client.coffeeShop.findMany({
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
        include: { photos: true, categories: true, user: true },
      });
      const totalCoffeeShop = await client.coffeeShop.count();
      const maxPage = Math.ceil(totalCoffeeShop / 6);
      return { coffeeShops, maxPage };
    },
  },
};
