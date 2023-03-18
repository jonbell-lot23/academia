import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: "Title and body are required" });
    }

    // Replace line breaks with \n character
    const formattedBody = body.replace(/\r?\n/g, "\\n");

    try {
      const post = await prisma.academia.create({
        data: { title, body: formattedBody },
      });
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
