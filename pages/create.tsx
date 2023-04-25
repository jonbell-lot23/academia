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
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <h1 className="mb-12 text-4xl font-bold text-gray-800">
            My Academic Journal
          </h1>
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="mb-8">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={post.title}
                onChange={handleTitleChange}
                className="w-full px-6 py-4 text-xl border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="mb-12">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="body"
              >
                Body
              </label>
              <textarea
                id="body"
                value={post.body}
                onChange={handleBodyChange}
                style={{ height: "200px", resize: "both" }}
                className="w-full px-6 py-4 text-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
          <div className="space-y-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-8 space-y-4 bg-white rounded-lg shadow-md"
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <div className="text-lg leading-relaxed text-gray-800">
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
