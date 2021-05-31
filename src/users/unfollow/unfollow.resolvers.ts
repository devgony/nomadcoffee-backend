import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    unfollow: protectedResolver(
      async (_, { username }, { loggedInUser, client }) => {
        try {
          const userExists = await client.user.findUnique({
            where: { username },
            select: { id: true },
          });
          if (!userExists) {
            return { ok: false, error: "User does not exist." };
          }
          await client.user.update({
            where: {
              id: loggedInUser.id,
            },
            data: {
              following: {
                disconnect: { username },
              },
            },
          });
          return { ok: true };
        } catch (error) {
          console.log(__filename, "<=\n", error);
          return { ok: false, error: "Could not unfollow." };
        }
      }
    ),
  },
};
