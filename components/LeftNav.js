import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BreadcrumbTracker from "./BreadcrumbTracker";

const LeftNav = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const patternLibraryLinks = [
    { name: "about-the-library", displayName: "About" },
    { name: "digital-patina", displayName: "Digital Patina" },
    { name: "personal-breadcrumbs", displayName: "Personal Breadcrumbs" },
    { name: "last-read-indicator", displayName: "Last Read Indicator" },
    { name: "reference-labels", displayName: "Reference Labels" },
    { name: "article-diff", displayName: "Article Diff" },
    {
      name: "before-and-after-slider",
      displayName: "Before and After Slider",
    },
    {
      name: "interactive-numbers",
      displayName: " Interactive numbers",
    },
    { name: "summarise-widget", displayName: "Summarise Widget" },
    { name: "cite-pull-forward", displayName: " Cite Pull Forward" },
  ];

  const studyLinks = [
    { name: "#word-lookup", displayName: "Word Lookup" },
    { name: "#following-references", displayName: "Following References" },
    { name: "#footnotes", displayName: "Footnotes" },
    { name: "#image-comparison", displayName: "Image Comparison" },
    { name: "#bookmarking", displayName: "Bookmarking" },
    { name: "#reference-tracking", displayName: "Reference Tracking" },
    { name: "#article-evolution", displayName: "Article Evolution" },
    {
      name: "#dynamic-content-interaction",
      displayName: "Dynamic Content Interaction",
    },
    { name: "#navigation-history", displayName: "Navigation History" },
    { name: "#summarisation-tools", displayName: "Summarisation Tools" },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      }
    };

    // Call the function to set the initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close" : "🍔"}
      </button>

      <div
        className={`left-nav-container left-nav ${
          isMenuOpen ? "open" : "closed"
        }`}
      >
        <h2 className="font-bold">General links</h2>
        <ul className="pb-8">{renderLinks(generalLinks)}</ul>

        <div>
          <h2 className="font-bold">Comparative studies</h2>
          <ul>{renderLinks(studyLinks, "/thesis/")}</ul>
          <BreadcrumbTracker />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
