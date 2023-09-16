import React from "react";
import LeftNav from "../../components/LeftNav";

const SummariseWidget = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="cite-pull-forward-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Summarise widget</h2>

        <p>This is where I will explain what this is all about.</p>
      </div>
    </div>
  );
};

export default SummariseWidget;
