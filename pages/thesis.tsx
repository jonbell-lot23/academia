import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SampleComponent from "../components/SampleComponent";
import LeftNav from "../components/LeftNav";

const components = { SampleComponent }; // Ensure this matches the component used in your MDX

export default function ThesisPage({ source }) {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div className="container px-4 mx-auto mt-16 prose">
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Determine the base URL
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  // Fetch the latest document from your API
  const res = await fetch(`${baseUrl}/api/fetchVersion`);
  const data = await res.json();

  // Serialize the content for MDX
  const mdxSource = await serialize(data.content, { components });

  return { props: { source: mdxSource } };
}
