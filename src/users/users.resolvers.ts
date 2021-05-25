import client from "../client";

export default {
  Query: {
    user: async (_, { id }) => await client.user.findUnique({ where: { id } }),
    users: async () => await client.user.findMany(),
  },
};
