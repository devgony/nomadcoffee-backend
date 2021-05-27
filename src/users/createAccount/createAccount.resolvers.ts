import client from "../../client";
import * as bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      try {
        const userExists = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (userExists) {
          return {
            ok: false,
            error: "This username or email is already taken.",
          };
        }
        const hashedPW = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            password: hashedPW,
            avatarURL,
            githubUsername,
          },
        });
        return { ok: true };
      } catch (error) {
        console.log(__filename, "\n", error);
        return { ok: false, error: "Could not create account." };
      }
    },
  },
};
