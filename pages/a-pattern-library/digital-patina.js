// DigitalPatina.js
import React, { useState } from "react";
import LeftNav from "../../components/LeftNav";
import ShadeBox from "../../components/ShadeBox"; // assuming it's in the same folder

const DigitalPatina = () => {
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
    <div class="mainContent">
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
        <button onClick={resetColors}>Reset Colors</button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Object.keys(colors).map((label) => (
            <ShadeBox
              key={label}
              label={label}
              color={colors[label]}
              darkestColor="#999999"
              updateColor={updateColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalPatina;
