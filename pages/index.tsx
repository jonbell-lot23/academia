import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { PrismaClient, academia } from "@prisma/client";
import styles from "../styles/blog.module.css";

interface Props {
  posts: academia[];
}

const prisma = new PrismaClient();

const Home: NextPage<Props> = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState<academia[]>([]);

  useEffect(() => {
    setSortedPosts(
      posts.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    );
  }, [posts]);

  return (
    <>
      <Head>
        <title>My Academic Journal</title>
        <meta name="description" content="My Academic Journal" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Academic Journal</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {sortedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div className="text-gray-600 mb-4">
                  {post.created_at ? (
                    <time dateTime={post.created_at}>
                      {new Date(post.created_at).toLocaleDateString()}
                    </time>
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-gray-700">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await prisma.academia.findMany({
    orderBy: { created_at: "desc" },
  });

  return {
    props: {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        body: post.body,
        created_at: post.created_at ? post.created_at.toISOString() : null, // convert Date to ISO string
      })),
    },
  };
}

export default Home;
