import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">{post.title}</h1>
      <div className="mt-6 prose prose-lg text-gray-500">
        <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>Posted on {new Date(post.created_at).toLocaleDateString("en-NZ")}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await prisma.academia.findMany();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await prisma.academia.findUnique({
    where: { id: Number(params.id) },
  });

  return {
    props: { post: { ...post, created_at: post.created_at.toISOString() } },
  };
}
