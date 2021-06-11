import { PAGE_SIZE } from "../../constants";
import { Context } from "../../types";

export default {
  Query: {
    searchUsers: async (
      _,
      { keyword, page = 1 }: { keyword: string; page: number },
      { client }: Context
    ) => {
      try {
        return await client.user.findMany({
          where: {
            username: { startsWith: keyword.toLowerCase() },
          },
          take: PAGE_SIZE,
          skip: (page - 1) * PAGE_SIZE,
        });
      } catch (error) {
        console.log(__filename, "<=\n", error);
      }
    },
  },
};
