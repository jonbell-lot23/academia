import Head from "next/head";
import styles from "../styles/blog.module.css";
import React, { useState, useEffect, useRef } from "react";
import cloudinary from "cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

const myImage = new CloudinaryImage("sample", {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
}).resize(fill().width(100).height(150));
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

    console.log("Submitting form");

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
      console.log("Error in handleSubmit:", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("Title changed:", value);
    setPost((prev) => ({ ...prev, title: value }));
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    console.log("Body changed:", value);
    setPost((prev) => ({ ...prev, body: value }));
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    console.log("Inside handlePaste");
    const { items } = e.clipboardData;

    for (const item of items) {
      console.log("Checking item type:", item.type);
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        console.log("Uploading image:", file);

        new Promise(async (resolve, reject) => {
          try {
            const imageUrl = await uploadImage(file);
            console.log("Image URL received:", imageUrl);
            resolve(imageUrl);
          } catch (error) {
            console.error("Error in handlePaste:", error.message);
            reject(error);
          }
        })
          .then((imageUrl) => {
            insertImageMarkdown(imageUrl as string);
          })
          .catch((error) => {
            console.error("Error in handlePaste:", error.message);
          });

        break;
      }
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    console.log("Jon is succeeding");
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      console.log("Upload response:", res);

      if (res.status !== 200) {
        const errorMessage = await res.text();
        console.error("Image upload failed:", errorMessage);
        throw new Error(errorMessage);
      }

      const { imagePath } = await res.json();
      console.log("Image uploaded successfully:", imagePath);
      return imagePath;
    } catch (error) {
      console.error("Image upload failed:", error.message);
      throw error;
    }
  };

  const insertImageMarkdown = (imageUrl: string) => {
    console.log("Inserting image markdown");
    const markdown = `![Uploaded Image](${imageUrl})\n`;

    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;

      const newValue =
        textarea.value.substring(0, startPos) +
        markdown +
        textarea.value.substring(endPos);

      setPost((prev) => ({ ...prev, body: newValue }));
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log("Running useEffect");

    const handleClientSidePaste = (e: Event) => {
      // Cast the event to React.ClipboardEvent
      handlePaste(e as unknown as React.ClipboardEvent<HTMLTextAreaElement>);
    };

    const textarea = textareaRef.current;

    if (textarea) {
      console.log("Adding paste event listener");
      textarea.addEventListener("paste", handleClientSidePaste);

      return () => {
        console.log("Removing paste event listener");
        textarea.removeEventListener("paste", handleClientSidePaste);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                ref={textareaRef} // Add the ref to the textarea
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
