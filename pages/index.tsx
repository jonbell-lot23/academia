import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { PrismaClient, academia } from "@prisma/client";
import styles from "../styles/blog.module.css";
import ReactMarkdown from "react-markdown";

interface Props {
  posts: academiaWithDate[];
}

interface academiaWithDate extends academia {
  created_at: Date;
}

const prisma = new PrismaClient();

export async function getStaticProps() {
  const posts = await prisma.academia.findMany({
    orderBy: { id: "asc" },
  });

  return {
    props: {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        created_at: new Date(post.created_at).toISOString(),
      })),
    },
  };
}

const Home: NextPage<Props> = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState<academia[]>([]);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  return (
    <>
      <Head>
        <title>Jon's Adventures in Academia</title>
        <meta name="description" content="Jon's Adventures in Academia" />
      </Head>
      <div className="min-h-screen max-w-screen-md mx-auto">
        <div className="mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <img src="/academia_masthead.png" />
          </h1>
          <div className="grid gap-4 mx-auto prose">
            {sortedPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg p-4 transition-all duration-300"
              >
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div className="text-gray-600 mb-4">
                  {post.created_at ? (
                    <div>{new Date(post.created_at).toLocaleDateString()}</div>
                  ) : (
                    ""
                  )}
                </div>
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
