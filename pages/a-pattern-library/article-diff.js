import React from "react";
import LeftNav from "../../components/LeftNav";
import Diff from "../diff";

const ArticleDiff = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Article diff</h2>

        <p>
          Below I'm showing my own thesis, comparing the current version to the
          version that came immediately before it. This sort of feature isn't
          always useful, but sometimes is! Imagine reading a news story, then
          going back to the story 3 hours later and seeing the exact details
          that changed.
        </p>

        <p>
          In the past, we'd issue a correction in the next day's paper. In more
          recent times, there may be a "continuing coverage" blog or section of
          a blog post. But each of those techniques requires a lot of manual
          effort. A widget like this helps a lot with trust and understanding of
          a content's changes over time.
        </p>

        <Diff />
      </div>
    </div>
  );
};
export default ArticleDiff;
