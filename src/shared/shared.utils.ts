import { createWriteStream } from "fs";

export const uploadFile = async (ownerId, upload) => {
  // let filename, createReadStream;
  // const { filename, createReadStream }: any = (async () => await upload)();
  const { filename, createReadStream } = await upload;
  const newFilename = `${ownerId}-${Date.now()}-${filename}`;
  const readStream = createReadStream();
  const writeStream = createWriteStream(
    `${process.cwd()}/uploads/${newFilename}`
  );
  readStream.pipe(writeStream);
  return `http://localhost:4000/static/${newFilename}`;
};
