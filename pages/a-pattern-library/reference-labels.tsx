import React from "react";
import LeftNav from "../../components/LeftNav";
import CustomLabelLink from "../../components/CustomLabelLink";

interface ReferenceLabelsProps {
  format?: "embed" | "standalone";
}

const ReferenceLabels: React.FC<ReferenceLabelsProps> = ({
  format = "standalone",
}) => {
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
        <h2>Reference Labels</h2>

        <h3>Description</h3>
        <p>
          "Reference labels provide context to your web journey by displaying
          the link or prompt that led you to a new page, making it easier to
          recall the reason for your visit."
        </p>

        <h3>Examples:</h3>
        <div className="custom-link-section">
          <CustomLabelLink
            label="This is a link to lot23.com, Jon's personal site"
            url="https://www.lot23.com/"
          />
          <br />
          <CustomLabelLink
            label="This is a link to google.com"
            url="https://www.google.com.com/"
          />
        </div>

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          Reference labels enhance web navigation by concisely presenting the
          context behind a user's action. They provide a brief recall point that
          can be immensely helpful, especially when users have multiple tabs
          open or return to a page after a period of time. This feature does not
          intrude upon the main content but rather complements it, offering a
          seamless experience. Reference labels align well with the principle of
          seamless blend as they smoothly integrate into the web browsing
          experience. They don't require additional actions from the user and
          maintain the natural flow of web navigation.
        </p>

        <h3>Where it works well</h3>
        <p>
          Reference labels are particularly useful in: 1. Educational websites,
          where users follow multiple references for research. 2. Online
          shopping sites, where users compare products across different tabs. 3.
          News and information portals, where articles often contain numerous
          hyperlinks. In these scenarios, reference labels help users maintain a
          sense of continuity and context in their browsing journey.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          Reference labels may not be necessary on websites with a linear
          navigation structure or where users are unlikely to deviate from a
          single content path. For example, simple landing pages or single-topic
          blogs may not benefit significantly from this feature.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Unlike static paper content, reference labels in digital formats offer
          dynamic context to the user's navigation path. While paper cannot
          adapt to indicate the source of a reader's journey, digital reference
          labels provide this contextual information effortlessly, enhancing the
          understanding and navigation of digital content.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          Reference labels offer a nuanced approach to enhancing user experience
          compared to more overt multimedia elements. They provide essential
          information without the need for additional media, tools, or user
          actions, thus preserving the integrity of the primary content and
          user's attention.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          To make this effect work, you need to use iframes, which cause all
          sorts of issues. To get around this, there are a few things we can do.
          (explain)
        </p>

        <h3>Other examples</h3>
        <p>[To be added later]</p>
      </div>
    </div>
  );
};

export default ReferenceLabels;
