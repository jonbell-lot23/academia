import React from "react";
import LeftNav from "../../components/LeftNav";

const CitePullForward = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="cite-pull-forward-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Cite Pull-foward</h2>

        <p>
          Look up the guy who things AI will destroy the world. He is the
          originator of the big tooltip, and I want to put it here. (Also I
          think the pull-forward bit refers to more proabbly)
        </p>
      </div>
    </div>
  );
};

export default CitePullForward;
