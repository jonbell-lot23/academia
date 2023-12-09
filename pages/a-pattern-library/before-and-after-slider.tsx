import React from "react";
import LeftNav from "../../components/LeftNav";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface BeforeAndAfterSliderProps {
  format?: "embed" | "standalone";
}

export const BeforeAndAfterSlider: React.FC<BeforeAndAfterSliderProps> = ({
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
        <h2>Before and after slider</h2>
        <p>
          When a natural disaster strikes, one of the best ways to show the
          damage is one of those little before/after sliders. But usage of these
          are uncommon because they&apos;re hard to make. So whether reading on
          a website or an ebook, the best technology we have is to put two
          images next to each other and make the user spot the differences.
        </p>
      </div>
      <div className="mx-auto prose">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://static3.stuff.co.nz/1-15-akl-wynyard5-b-b4191c11.jpg"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://static3.stuff.co.nz/1-15-akl-wynyard5-a-ac05f930.jpg"
              alt="Image two"
            />
          }
        />
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;