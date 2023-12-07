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
        <h2>Reference labels</h2>
        <p>
          It can be hard to remember what brought you to a tab. Maybe you
          clicked something that said &quot;houses like these are
          dangerous&quot; or maybe it said &quot;this artist is coming to
          Seattle next week,&quot; but it&apos;s hard to remember. Reference
          labels are a way to remember the link you clicked in order to take you
          to a new page, providing valuable context.
        </p>

        {/* Adding the CustomLabelLink component */}
        <div className="custom-link-section">
          <h3>Try it out:</h3>
          <CustomLabelLink
            label="This is a silly link that you clicked to get here"
            url="https://www.lot23.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default ReferenceLabels;
