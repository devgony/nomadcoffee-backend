import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Query: {
    me: protectedResolver((_, __, { loggedInUser }) => {
      try {
        return client.user.findUnique({
          where: {
            id: loggedInUser.id,
          },
        });
      } catch (error) {
        console.log(error);
        return "Can't get me";
      }
    }),
  },
};
