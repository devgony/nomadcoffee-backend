import { protectedResolver } from "../users.utils";

export default {
  Query: {
    seeProfile: (_, { username }, { client }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};
