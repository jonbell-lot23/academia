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
    </div>
  );
};

export default BeforeAndAfterSlider;
