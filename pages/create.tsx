import Head from "next/head";
import Image from "next/image";
import styles from "../styles/blog.module.css";
import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home(): React.ReactNode {
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
  });

  const [posts, setPosts] = useState<Post[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/createPost", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 200) {
        throw new Error(await res.text());
      }

      const newPost = await res.json();
      setPosts([...posts, newPost]);
      setPost({
        id: 0,
        title: "",
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPost((prev) => ({ ...prev, title: value }));
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPost((prev) => ({ ...prev, body: value }));
  };

  return (
    <>
      <Head>
        <title>My academic journal</title>
        <meta name="description" content="My academic journal" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-12">
            My Academic Journal
          </h1>
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="mb-8">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={post.title}
                onChange={handleTitleChange}
                className="w-full py-4 px-6 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xl"
              />
            </div>
            <div className="mb-12">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="body"
              >
                Body
              </label>
              <textarea
                id="body"
                value={post.body}
                onChange={handleBodyChange}
                className="w-full py-4 px-6 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-xl"
            >
              Submit
            </button>
          </form>
          <div className="space-y-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md p-8 space-y-4"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {post.title}
                </h2>
                <div className="text-gray-800 text-lg leading-relaxed">
                  {post.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
