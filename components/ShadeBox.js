// ShadeBox.js
import React from "react";

const ShadeBox = ({ label, color, darkestColor, updateColor }) => {
  const darkenColor = (color, amount) => {
    const num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * amount),
      R = (num >> 16) + amt,
      B = ((num >> 8) & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
        (G < 255 ? (G < 1 ? 0 : G) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  const handleClick = () => {
    const newColor = darkenColor(color, -1);
    if (newColor <= darkestColor) return;
    updateColor(label, newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
};

export default ShadeBox;
