import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";
import Ten from "../components/Ten";

import LeftNav from "../components/LeftNav";

const components = {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
};

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

  // Serialize the content for MDX without the 'components' option
  const mdxSource = await serialize(data.content);

  return { props: { source: mdxSource } };
}
