import { createWriteStream } from "fs";
import * as AWS from "aws-sdk";

export const namesToCategoryObjsWithSlug = categories =>
  categories.map(category => {
    const slug = category.trim().toLowerCase().replace(/\s+/g, "-");
    return {
      where: { slug },
      create: { name: category, slug },
    };
  });

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "nomadcoffee-backend-henry",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
