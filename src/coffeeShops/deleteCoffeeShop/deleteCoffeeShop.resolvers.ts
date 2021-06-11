import { Context } from "../../types";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteCoffeeShop: protectedResolver(
      async (_, { id }, { client }: Context) => {
        try {
          const coffeeShopExists = await client.coffeeShop.findUnique({
            where: { id },
          });
          if (!coffeeShopExists) {
            return { ok: false, error: "No coffeShop found." };
          }
          await client.$queryRaw('DELETE FROM "CoffeeShop" where id = $1;', id);
          return { ok: true };
        } catch (error) {
          console.log(__filename, "<=\n", error);
          return { ok: false, error: "Could not delete CoffeeShop" };
        }
      }
    ),
  },
};
