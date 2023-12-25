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

        <h3>Description</h3>
        <p>
          "Article diff showcases the evolution of a document by comparing
          different versions, highlighting changes to enhance transparency and
          understanding of content updates."
        </p>

        <h3>Example</h3>

        <Diff format={format} />

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          Article diff is an exemplary implementation of concise enhancement in
          digital content. It provides a straightforward, visual representation
          of changes made to a document, allowing readers to quickly grasp
          updates or revisions. This tool is particularly effective in
          maintaining transparency and trust, especially for content that
          undergoes frequent updates like news articles or research papers.
          Adhering to the principle of seamless blend, article diff integrates
          directly into the content, offering insights into its evolution
          without detracting from the reading experience. It does not disrupt
          the flow of the content but rather enhances the reader's understanding
          and trust in the information presented.
        </p>

        <h3>Where it works well</h3>
        <p>
          Article diff is highly beneficial in contexts such as: 1. News
          websites, for tracking updates in ongoing stories. 2. Academic and
          research platforms, to display revisions in papers or articles. 3.
          Legal and policy documents, where transparency in updates is crucial.
          In these scenarios, article diff aids in building credibility and
          provides a clear understanding of how content has evolved over time.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          For content that is rarely updated or where changes are not
          significant to the reader's understanding, such as timeless literary
          works or static informational pages, article diff may not add
          substantial value.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Traditional paper formats cannot dynamically display the evolution of
          content. Article diff, in contrast, offers a digital advantage by
          visually comparing versions, providing an immediate understanding of
          changes, which is impossible in static paper formats.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          Unlike more complex multimedia tools that might require additional
          resources or navigation, article diff is a straightforward, integrated
          feature. It directly enhances the content it accompanies, providing
          valuable insights without the need for external applications or
          disruptions.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          When implementing article diff, it is essential to focus on clarity
          and ease of understanding. Changes should be visually distinct but not
          overwhelming. Designers should consider using color coding or
          side-by-side comparisons for clarity. Additionally, it's important to
          ensure that the tool is accessible and easy to use, with clear options
          to toggle between versions if necessary.
        </p>

        <h3>Other examples</h3>
        <p>[To be added later]</p>
      </div>
    </div>
  );
};

export default ArticleDiff;
