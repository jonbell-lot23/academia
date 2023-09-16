import React from "react";
import LeftNav from "../../components/LeftNav";

const PersonlBreadcrumbs = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Reference labels</h2>

        <p>
          It can be hard to remember what brought you to a tab. Maybe you
          clicked something that said "houses like these are dangerous" or maybe
          it said "this artist is coming to Seattle next week," but it's hard to
          remember. Reference labels are a way to to remember the link you
          clicked in order to take you to a new page, providing valuable
          context.
        </p>
      </div>
    </div>
  );
};

export default PersonlBreadcrumbs;
