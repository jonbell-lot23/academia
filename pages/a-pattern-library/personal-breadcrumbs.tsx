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
        <h2>Personal breadcrumbs</h2>
        <p>
          When you navigate through different pages on a website and want to
          retrace your steps, you have limited options available. You can look
          in your browser history, but that can be interspersed with other pages
          or be cluttered up with junk. You can rely on visited links, but only
          if they&apos;re colored differently, and even then it doesn&apos;t
          help understand the order of your path.
        </p>
        <p>
          Personal breadcrumbs display the pages you visited, in what order, and
          shares other information that might help you navigate back to find
          something you saw before.
        </p>
        <BreadcrumbDisplay />
      </div>
    </div>
  );
};

export default PersonalBreadcrumbs;
