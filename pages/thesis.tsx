import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import DancingAboutArchitecture from "../components/DancingAboutArchitecture";
import DocumentStats from "../components/DocStats";
import DigitalPatina from "./a-pattern-library/digital-patina";
import PersonalBreadcrumbs from "./a-pattern-library/personal-breadcrumbs";
import LastReadIndicator from "./a-pattern-library/last-read-indicator";
import ReferenceLabels from "./a-pattern-library/reference-labels";
import ArticleDiff from "./a-pattern-library/article-diff";
import { BeforeAndAfterSlider } from "./a-pattern-library/before-and-after-slider";
import InteractiveNumbers from "./a-pattern-library/interactive-numbers";
import { SummariseWidget } from "./a-pattern-library/summarise-widget";
import CitePullForward from "./a-pattern-library/cite-pull-forward";

import LeftNav from "../components/LeftNav";

const components = {
  DancingAboutArchitecture,
  DocumentStats,
  DigitalPatina,
  PersonalBreadcrumbs,
  LastReadIndicator,
  ReferenceLabels,
  ArticleDiff,
  BeforeAndAfterSlider,
  InteractiveNumbers,
  SummariseWidget,
  CitePullForward,
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

//

export async function getServerSideProps(context) {
  // Determine the base URL
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  // Add a query parameter for format, which could be 'narrative' or 'researchpaper'
  const format = "researchpaper"; // Determine this based on user choice or some logic

  const res = await fetch(`${baseUrl}/api/fetchVersion?format=${format}`);
  const data = await res.json();

  // Serialize the content for MDX without the 'components' option
  const mdxSource = await serialize(data.content);

  return { props: { source: mdxSource } };
}
