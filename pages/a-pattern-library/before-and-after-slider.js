import React from "react";
import LeftNav from "../../components/LeftNav";

const BeforeAndAfterSlider = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Before and after slider</h2>

        <p>
          When a natural disaster strikes, one of the best ways to show the
          damage is one of those little before/after sliders. But usage of these
          are uncommon because they&apos;re hard to make. So whether reading on
          a website or an ebook, the best technology we have is to put two
          images next to each other and make the user spot the differences.
        </p>
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;
