import React from "react";
import LeftNav from "../../components/LeftNav";
import Diff from "../diff";

interface ArticleDiffProps {
  format?: "embed" | "standalone";
}

const ArticleDiff: React.FC<ArticleDiffProps> = ({ format = "standalone" }) => {
  return (
    <div
      className={format === "standalone" ? "mainContent" : "embeddedContent"}
    >
      {format === "standalone" && <LeftNav />}
      <div
        id="digital-patina-content"
        className={`container ${
          format === "standalone" ? "px-4 mt-16" : ""
        } mx-auto prose`}
      >
        <h2>Article Diff</h2>

        <Diff format={format} />
      </div>
    </div>
  );
};

export default ArticleDiff;
