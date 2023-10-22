import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import BreadcrumbTracker from "./BreadcrumbTracker";

const LeftNav = () => {
  const router = useRouter();

  const patternLibraryLinks = [
    { name: "about-the-library", displayName: "About" },
    { name: "digital-patina", displayName: "✅ Digital Patina" },
    { name: "personal-breadcrumbs", displayName: "✅ Personal Breadcrumbs" },
    { name: "last-read-indicator", displayName: "✅ Last Read Indicator" },
    { name: "reference-labels", displayName: "✅ Reference Labels" },
    { name: "article-diff", displayName: "Article Diff" },
    {
      name: "before-and-after-slider",
      displayName: "✅ Before and After Slider",
    },
    {
      name: "interactive-graph-compound-interest",
      displayName: "✅ Interactive numbers",
    },
    { name: "summarise-widget", displayName: "✅ Summarise Widget" },

    { name: "cite-pull-forward", displayName: "Cite Pull Forward" },
  ];

  const generalLinks = [
    { name: "about", displayName: "About" },
    { name: "thesis", displayName: "Thesis" },
    { name: "proposal", displayName: "Proposal" },
  ];

  const renderLinks = (links, basePath = "") =>
    links.map(({ name, displayName }) => (
      <li key={name}>
        <Link href={`/${basePath}${name}`} passHref>
          <span
            className="tracked-link"
            style={{
              color: router.pathname.endsWith(name) ? "blue" : "black",
            }}
          >
            {displayName}
          </span>
        </Link>
      </li>
    ));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "200px",
        background: "#f4f4f4",
        padding: "20px",
      }}
    >
      <h2 className="font-bold">General links</h2>
      <ul className="pb-8">{renderLinks(generalLinks)}</ul>

      <h2 className="font-bold">A Pattern Library</h2>
      <ul>{renderLinks(patternLibraryLinks, "a-pattern-library/")}</ul>
      <BreadcrumbTracker />
    </div>
  );
};

export default LeftNav;
