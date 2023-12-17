import React, { useState } from "react";
import LeftNav from "../../components/LeftNav";
import ShadeBox from "../../components/ShadeBox";

interface DigitalPatinaProps {
  format?: "embed" | "standalone";
}

const DigitalPatina: React.FC<DigitalPatinaProps> = ({
  format = "standalone",
}) => {
  const initialColor = "#efefef";
  const [colors, setColors] = useState({
    Politics: initialColor,
    News: initialColor,
    Sports: initialColor,
    Gardening: initialColor,
    International: initialColor,
  });

  const resetColors = () => {
    setColors({
      Politics: initialColor,
      News: initialColor,
      Sports: initialColor,
      Gardening: initialColor,
      International: initialColor,
    });
  };

  const updateColor = (label, newColor) => {
    setColors({ ...colors, [label]: newColor });
  };

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
        <h2>Digital patina</h2>
        <p>
          BBC did a thing where visited links got darker rather than being
          binary. This is a big deal, and made a big impression on me.
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {Object.keys(colors).map((label) => (
            <ShadeBox
              key={label}
              label={label}
              color={colors[label]}
              darkestColor="#999999"
              updateColor={updateColor}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
                margin: "5px",
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-start p-1 space-y-4">
          <button className="px-4 py-2 border rounded" onClick={resetColors}>
            Reset Colors
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalPatina;
