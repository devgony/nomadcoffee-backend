import client from "../client";
import { PAGE_SIZE } from "../constants";

export default {
  User: {
    followers: async ({ id }, { page = 1 }) =>
      await client.user.findUnique({ where: { id } }).followers({
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
      }),
    following: async ({ id }, { page = 1 }) =>
      await client.user.findUnique({ where: { id } }).following({
        take: PAGE_SIZE,
        skip: (page - 1) * PAGE_SIZE,
      }),
  },
};
