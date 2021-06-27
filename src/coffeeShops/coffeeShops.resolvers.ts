import { Context } from "../types";

export default {
  Category: {
    totalShops: ({ id }, __, { client }: Context) =>
      client.coffeeShop.count({ where: { categories: { some: { id } } } }),
  },
  CoffeeShop: {
    isMine: ({ user }, _, { loggedInUser }: Context) =>
      loggedInUser?.id === user.id,
  },
};
