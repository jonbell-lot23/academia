import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const form = new IncomingForm();
    form.uploadDir = "public/uploads";

    const data = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Image upload failed:", err.message);
          res.status(500).json({ error: "Image upload failed" });
          return;
        }
        resolve({ fields, files });
      });
    });

    const { files } = data;
    const file = files.image;

    console.log("FILES:", files);
    console.log("FILE:", file);

    const oldPath = file.path;
    const newPath = path.join(
      "public/uploads",
      Date.now() + "-" + file.originalFilename
    );

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error("Renaming file failed:", err.message);
        res.status(500).json({ error: "Renaming file failed" });
        return;
      }

      const imagePath = path.join("/", newPath);
      res.status(200).json({ imagePath });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
