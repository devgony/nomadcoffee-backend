import { createWriteStream } from "fs";

export const uploadFile = (ownerId, upload) => {
  let path;
  (async () => {
    // let filename, createReadStream;
    // const { filename, createReadStream }: any = (async () => await upload)();
    const { filename, createReadStream } = await upload;
    const newFilename = `${ownerId}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(
      `${process.cwd()}/uploads/${newFilename}`
    );
    readStream.pipe(writeStream);
    path = `http://localhost:4000/static/${newFilename}`;
  })();
  return path;
};
