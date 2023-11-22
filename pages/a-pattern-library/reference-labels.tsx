// Your existing imports
import React from "react";
import LeftNav from "../../components/LeftNav";
import CustomLabelLink from "../../components/CustomLabelLink";

const ReferenceLabels: React.FC = () => {
  return (
    <div class="mainContent">
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
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
