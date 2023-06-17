import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { filename } = req.query;

  try {
    const content = fs.readFileSync(
      path.resolve(`./versions/${filename}.md`),
      "utf8"
    );
    res.status(200).json({ content });  // Send the markdown content as a JSON object
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while reading the file." });
  }
}
