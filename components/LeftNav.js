import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const LeftNav = () => {
  const router = useRouter();

  const patternLibraryLinks = [
    "about-the-library",
    "personal-breadcrumbs",
    "last-read-indicator",
    "reference-labels",
    "article-diff",
    "before-and-after-slider",
    "interactive-graph-compound-interest",
    "summarise-widget",
    "digital-patina",
    "cite-pull-forward",
  ];

  const generalLinks = ["about", "thesis", "proposal"];

  const renderLinks = (links, basePath = "") =>
    links.map((link) => (
      <li key={link}>
        <Link
          href={`/${basePath}${link}`}
          passHref
          style={{
            color: router.pathname.endsWith(link) ? "blue" : "black",
          }}
        >
          <span>
            {link === "about-the-library"
              ? "About"
              : link
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
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
    </div>
  );
};

export default LeftNav;
