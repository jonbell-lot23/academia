import React from "react";
import LeftNav from "../../components/LeftNav";
import BreadcrumbDisplay from "../../components/BreadcrumbDisplay";

interface PersonalBreadcrumbsProps {
  format?: "embed" | "standalone";
}

const PersonalBreadcrumbs: React.FC<PersonalBreadcrumbsProps> = ({
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
          Personal breadcrumbs visually trace your navigation path, simplifying
          website revisits with a chronological map of your journey.
        </p>

        <h3>Example</h3>
        <BreadcrumbDisplay />
      </div>
    </div>
  );
};

export default PersonalBreadcrumbs;
