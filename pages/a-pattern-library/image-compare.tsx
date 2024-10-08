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
        <div className="mx-auto compare-slider-container">
  <ReactCompareSlider
    itemOne={
      <ReactCompareSliderImage
        src="media/city-before.png"
        alt="Black and white"
        className="compare-image" // Add a class name for additional styling
      />
    }
    itemTwo={
      <ReactCompareSliderImage
        src="media/city-after.png"
        alt="Color"
        className="compare-image" // Add a class name for additional styling
      />
    }
  />
</div>
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;
