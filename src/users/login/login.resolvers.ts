import client from "../../client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const user = await client.user.findFirst({ where: { username } });
        if (!user) {
          return { ok: false, error: "User not found." };
        }
        const passwordOK = await bcrypt.compare(password, user.password);
        if (!passwordOK) {
          return { ok: false, error: "Incorrect password." };
        }
        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return { ok: true, token };
      } catch (error) {
        console.log(__filename, error);
        return { ok: false, error: "Could not login" };
      }
    },
  },
};
