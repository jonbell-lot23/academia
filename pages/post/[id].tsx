import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Layout from "../../components/Layout.mdx";

const prisma = new PrismaClient();

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      {post.body}
      <div>
        Posted on {new Date(post.created_at).toLocaleDateString("en-NZ")}
      </div>
    </Layout>
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
