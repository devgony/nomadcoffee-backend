import { uploadFile } from "../../shared/shared.utils";
import { Context } from "../../types";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, photos, categories },
        { loggedInUser, client }: Context
      ) => {
        try {
          const coffeeShopExists = await client.coffeeShop.findFirst({
            where: { name },
          });
          if (coffeeShopExists) {
            return {
              ok: false,
              error: "That coffee shop name already exists.",
            };
          }
          const photoObjs = photos.map(photo => ({
            url: uploadFile(loggedInUser.id, photo),
          }));
          const categoryObjs = categories.map(category => {
            const slug = category.trim().toLowerCase().replace(/\s/g, "-");
            return {
              where: { slug },
              create: { name: category, slug },
            };
          });
          console.log(photoObjs);
          await client.coffeeShop.create({
            data: {
              name,
              latitude,
              longitude,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              photos: {
                create: photoObjs,
              },
              categories: {
                connectOrCreate: categoryObjs,
              },
            },
          });
          return { ok: true };
        } catch (error) {
          console.log(__filename, "<=\n", error);
          return { ok: false, error: "Could not create coffeeShop" };
        }
      }
    ),
  },
};
