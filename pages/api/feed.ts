import { NextApiRequest, NextApiResponse } from "next";
import rss from "rss";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"] || req.url.split("/")[2];
  const feedUrl = `${protocol}://${host}/api/feed`;

  const feed = new rss({
    title: "Jon's Academic Journal",
    feed_url: feedUrl,
    site_url: `${protocol}://${host}`,
  });

  const items = await prisma.academia.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 10,
  });

  items.forEach((item) => {
    const bodyWithBreaks = item.body.replace(/\n/g, "<br />");
    feed.item({
      title: item.title,
      url: `${protocol}://${host}/post/${item.id}`,
      description: "",
      date: item.created_at,
      custom_elements: [
        {
          "content:encoded": {
            _cdata: bodyWithBreaks,
          },
        },
      ],
    });
  });

  res.setHeader("Content-Type", "application/rss+xml");
  res.send(feed.xml());
};
