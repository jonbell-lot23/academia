import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import cloudinary from "cloudinary";

// Configure Cloudinary
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("Received POST request");
    const form = new IncomingForm();

    const data = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Image upload failed:", err.message);
          res.status(500).json({ error: "Image upload failed" });
          return;
        }
        console.log("Form parsed successfully:", fields, files);
        resolve({ fields, files });
      });
    });

    const { files } = data;
    const file = files.image.path;

    console.log("File to be uploaded:", file);

    // Upload image to Cloudinary
    try {
      console.log("Trying to upload to Cloudinary");
      const response = await cloudinary.v2.uploader.upload(file, {
        folder: "academia", // Optional: you can set a folder name to organize the uploaded images
        timeout: 5000, // Add the timeout parameter, 5000 milliseconds = 5 seconds
      });
    
      console.log("Cloudinary response:", response);
    
      const imagePath = response.secure_url;
      res.status(200).json({ imagePath });
    } catch (error) {
      console.error("Image upload to Cloudinary failed:", error.message);
      res.status(500).json({ error: "Image upload to Cloudinary failed" });
    }
  } else {
    console.log("Received non-POST request");
    res.status(405).json({ error: "Method not allowed" });
  }
}
