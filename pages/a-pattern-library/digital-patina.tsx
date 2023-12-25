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

        <h3>Description</h3>
        <p>
          "Digital patina dynamically reflects user interaction history,
          enhancing website navigation through intuitive visual cues."
        </p>

        <h3>Example</h3>
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
            />
          ))}
        </div>

        <div className="flex flex-col items-start p-1 space-y-4">
          <button className="px-4 py-2 border rounded" onClick={resetColors}>
            Reset Colors
          </button>
        </div>

        <h3>Principles of concise enhancement and seamless blend</h3>

        <p>
          Digital patina exemplifies the principle of concise enhancement by
          subtly altering design elements to reflect user interaction, without
          overwhelming the primary content. It enriches the user experience by
          providing intuitive visual feedback, such as darkening the color of
          visited links. This method enhances the usability of a website without
          introducing extraneous elements or distractions. Moreover, it aligns
          with the principle of a seamless blend by integrating naturally into
          the website's design. The changes are coherent with the overall
          aesthetic and do not disrupt the user’s navigation flow. Digital
          patina respects the original design's integrity while adding a layer
          of interactivity and personalization.
        </p>

        <h3>Where it works well</h3>

        <p>
          Digital patina is particularly effective in enhancing navigation on
          websites where users frequently return and need to track their
          previous interactions. For example: Educational platforms where
          students revisit topics. E-commerce sites to indicate previously
          viewed products. Forums or content aggregators to track read and
          unread posts. In these contexts, digital patina aids in creating an
          efficient user journey, reducing repetition and enhancing the overall
          user experience.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          Digital patina may not be effective on websites with infrequent
          revisits or where tracking past interactions isn't beneficial. For
          instance, on landing pages designed for single visits or informational
          sites where content is rarely revisited, implementing digital patina
          might not add significant value and could potentially clutter the
          visual experience.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Unlike traditional paper, digital patina offers an interactive and
          dynamic reading experience. Paper cannot alter its appearance to
          reflect a reader's interaction history, but digital patina on a
          website can visually indicate which sections have been previously
          visited or interacted with, aiding in navigation and reducing
          redundant reading.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          Digital patina stands out compared to multimedia elements like
          standalone apps or videos by being less intrusive and more integrated
          into the user experience. Multimedia elements can often distract or
          detach the user from the main content, whereas digital patina enriches
          the existing interface without the need for additional applications or
          platforms. It's a subtle yet powerful way to enhance user interaction
          directly within the content.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          Designers implementing digital patina should consider the balance
          between visibility and subtlety. The changes should be noticeable
          enough to be useful but not so prominent as to distract from the main
          content. Designers should also consider color contrast for
          accessibility and ensure that the patina effect aligns with the
          overall aesthetic of the website. Testing with real users can help
          fine-tune the balance between utility and aesthetics.
        </p>
      </div>
    </div>
  );
};

export default DigitalPatina;
