import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import DancingAboutArchitecture from "../components/DancingAboutArchitecture";
import { BeforeAndAfterSliderEmbed } from "./a-pattern-library/before-and-after-slider";
import { SummariseWidgetEmbed } from "./a-pattern-library/summarise-widget";
import Two from "../components/Two";
import Three from "../components/Three";
import Four from "../components/Four";
import DocumentStats from "../components/Five";
import Six from "../components/Six";
import Seven from "../components/Seven";
import Eight from "../components/Eight";
import Nine from "../components/Nine";

import LeftNav from "../components/LeftNav";

const components = {
  DancingAboutArchitecture,
  BeforeAndAfterSliderEmbed,
  SummariseWidgetEmbed,
  Two,
  Three,
  Four,
  DocumentStats,
  Six,
  Seven,
  Eight,
  Nine,
};

export default function ThesisPage({ source }) {
  return (
    <div className="mainContent">
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
