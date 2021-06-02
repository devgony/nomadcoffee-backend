import { namesToCategoryObjsWithSlug } from "../../shared/shared.utils";
import { Context } from "../../types";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(
      async (
        _,
        { id, name, latitude, longitude, categoryNames },
        { client }: Context
      ) => {
        const oldCoffeeShop = await client.coffeeShop.findUnique({
          where: { id },
          include: { categories: { select: { slug: true } } },
        });
        try {
          if (!oldCoffeeShop) {
            return { ok: false, error: "Could not find the coffee shop." };
          }
          const categoryObjs = namesToCategoryObjsWithSlug(categoryNames);
          await client.coffeeShop.update({
            where: { id },
            data: {
              name,
              latitude,
              longitude,
              categories: {
                disconnect: oldCoffeeShop.categories,
                connectOrCreate: categoryObjs,
              },
            },
          });
          return { ok: true };
        } catch (error) {
          console.log(__filename, error);
          return { ok: false, error: "Could not edit coffee shop." };
        }
      }
    ),
  },
};
