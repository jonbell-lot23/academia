import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BreadcrumbTracker from "./BreadcrumbTracker";

const LeftNav = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const generalLinks = [
    { name: "about", displayName: "About" },
    { name: "thesis", displayName: "Thesis" },
    { name: "proposal", displayName: "Proposal" },
  ];

  const welcomeLinks = [
    { name: "/thesis/#abstract", displayName: "Abstract" },
    { name: "/thesis/#toc", displayName: "Table of Contents" },
    { name: "/thesis/#introduction", displayName: "Introduction" },
    { name: "/thesis/#literature-review", displayName: "Literature Review" },
    { name: "/thesis/#methodology", displayName: "Methodology" },
  ];

  const studyLinks = [
    { name: "/thesis/#findings", displayName: "Summary of findings" },
    { name: "/thesis/#word-lookup", displayName: "1. Word Lookup" },
    { name: "/thesis/#footnotes", displayName: "2. Footnotes" },
    { name: "/thesis/#image-comparison", displayName: "3. Image Comparison" },
    { name: "/thesis/#bookmarking", displayName: "4. Bookmarking" },
    {
      name: "/thesis/#reference-tracking",
      displayName: "5. Reference Tracking",
    },
    { name: "/thesis/#article-evolution", displayName: "6. Article Evolution" },
    {
      name: "/thesis/#dynamic-content-interaction",
      displayName: "7. Dynamic Content",
    },
    {
      name: "/thesis/#tracking-history",
      displayName: "8.   Tracking history",
    },
    { name: "/thesis/#summarisation-tools", displayName: "9. Summarisation" },
  ];

  const discussionLinks = [
    { name: "/thesis/#credit", displayName: "Credit where credit is due" },
    { name: "/thesis/#context", displayName: "Context is king" },
    {
      name: "/thesis/#difficult",
      displayName: "Difficulties",
    },
    {
      name: "/thesis/#better-metrics",
      displayName: "We need better metrics",
    },
    {
      name: "/thesis/#new-doors",
      displayName: "Opening new doors",
    },
    {
      name: "/thesis/#limitations",
      displayName: "Limitations",
    },
    {
      name: "/thesis/#possibilities",
      displayName: "Possibilities",
    },
  ];

  const conclusionLinks = [
    { name: "/thesis/#further", displayName: "Further research" },
  ];

  const appendicesLinks = [
    {
      name: "/thesis/#narrative-history",
      displayName: "1: This thesis in a narrative style",
    },
    {
      name: "/thesis/#inspiration",
      displayName: "2: Inspiration Gallery",
    },
    { name: "/thesis/#raw-data", displayName: "3: Raw data from studies" },
  ];

  const referencesLinks = [
    { name: "/thesis/#references", displayName: "References" },
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
        id="butt"
        className={`left-nav-container left-nav ${
          isMenuOpen ? "open" : "closed"
        }`}
      >
        <h2 className="font-bold">Augmented Text</h2>
        <ul className="pb-8">{renderLinks(welcomeLinks)}</ul>

        <h2 className="font-bold">Findings</h2>
        <ul className="pb-8">{renderLinks(studyLinks)}</ul>

        <h2 className="font-bold">Discussion</h2>
        <ul className="pb-8">{renderLinks(discussionLinks)}</ul>

        <h2 className="font-bold">Conclusion</h2>
        <ul className="pb-8">{renderLinks(conclusionLinks)}</ul>

        <h2 className="font-bold">Appedices</h2>
        <ul className="pb-8">{renderLinks(appendicesLinks)}</ul>

        <h2 className="font-bold">References</h2>
        <ul className="pb-8">{renderLinks(referencesLinks)}</ul>

        <BreadcrumbTracker />
      </div>
    </div>
  );
};

export default LeftNav;
