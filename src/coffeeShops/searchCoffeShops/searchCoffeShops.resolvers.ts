import { Context } from "../../types";

interface Props {
  searchType: "cafe" | "md-pricetags";
  keyword: string;
  offset: number;
}

export default {
  Query: {
    searchCoffeeShops: async (
      _,
      { searchType, keyword, offset }: Props,
      { client }: Context
    ) => {
      try {
        let whereClause;
        if (searchType === "cafe") {
          whereClause = { where: { name: { contains: keyword } } };
        } else if (searchType === "md-pricetags") {
          whereClause = {
            where: { categories: { some: { name: { contains: keyword } } } },
          };
        } else {
          throw "wrong searchType";
        }
        const coffeeShops = await client.coffeeShop.findMany({
          ...whereClause,
          take: 4,
          skip: offset,
          orderBy: { updatedAt: "desc" },
          include: { user: true, categories: true, photos: true },
        });
        return coffeeShops;
      } catch (error) {
        console.error(__filename, "<=\n", error);
      }
    },
  },
};
