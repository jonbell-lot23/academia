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
      </div>
    </div>
  );
};

export default ReferenceLabels;
