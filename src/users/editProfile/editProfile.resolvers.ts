import { createWriteStream } from "fs";
import * as bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { uploadFile } from "../../shared/shared.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        {
          email,
          name,
          location,
          password: newPassword,
          avatarURL,
          githubUsername,
        },
        { loggedInUser, client }
      ) => {
        try {
          let avatarPath = null;
          if (avatarURL) {
            // const { filename, createReadStream } = await avatarURL;
            // const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
            // const readStream = createReadStream();
            // const writeStream = createWriteStream(
            //   `${process.cwd()}/uploads/${newFilename}`
            // );
            // readStream.pipe(writeStream);
            // avatarPath = `http://localhost:4000/static/${newFilename}`;
            avatarPath = uploadFile(loggedInUser.id, avatarURL);
          }
          let hashedPassword = null;
          if (newPassword) {
            hashedPassword = await bcrypt.hash(newPassword, 10);
          }
          const updatedUser = await client.user.update({
            where: { id: loggedInUser.id },
            data: {
              email,
              name,
              location,
              ...(hashedPassword && { password: hashedPassword }),
              ...(avatarPath && { avatarURL: avatarPath }),
              githubUsername,
            },
          });
          if (updatedUser.id) {
            return { ok: true };
          } else {
            return { ok: false, error: "Could not update User." };
          }
        } catch (error) {
          console.log(__filename, error);
          return { ok: false, error: "Could not edit profile." };
        }
      }
    ),
  },
};
