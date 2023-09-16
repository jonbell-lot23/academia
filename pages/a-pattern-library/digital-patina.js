import React from "react";
import LeftNav from "../../components/LeftNav";

const DigitalPatina = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Digtal patina</h2>

        <p>
          BBC did a thing where visited links got darker rather than being
          binary. This is a big deal, and made a big impression on me.
        </p>
      </div>
    </div>
  );
};

export default DigitalPatina;
