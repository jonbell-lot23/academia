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
        <h2>Before and After Slider</h2>

        <h3>Description</h3>
        <p>
          "The before and after slider vividly illustrates transformations by
          allowing users to interactively compare two images, ideal for
          showcasing changes such as those caused by natural disasters."
        </p>

        <h3>Example</h3>

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

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          The before and after slider is a prime example of concise enhancement
          in visual storytelling. It enables a direct, comparative view that
          vividly demonstrates change or impact. This tool is especially
          effective in contexts where visual changes are significant, such as
          environmental transformations or restoration projects. By allowing
          users to interactively slide between 'before' and 'after' states, it
          provides an intuitive and engaging way to perceive changes. The
          seamless blend principle is evident in how the slider integrates
          within the content, offering a coherent and unobtrusive user
          experience. Unlike separate image comparisons or textual descriptions,
          the slider allows users to actively engage with the visual content
          without leaving the context of the page or text.
        </p>

        <h3>Where it works well</h3>
        <p>
          The before and after slider is particularly useful in: 1.
          Environmental reporting, to show the impact of events like wildfires
          or floods. 2. Urban development presentations, to compare historical
          and current cityscapes. 3. Restoration or renovation projects, to
          display before and after results. In these cases, the slider adds a
          compelling visual dimension to the narrative, enhancing user
          engagement and understanding.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          In scenarios where changes are not visually pronounced or the focus is
          on non-visual aspects, such as statistical data or textual analysis,
          the before and after slider might not be as effective or necessary.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Traditional paper formats cannot replicate the interactive,
          comparative experience provided by a digital before and after slider.
          While paper can display side-by-side images, it lacks the interactive
          element that enhances user engagement and understanding in digital
          formats.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          Unlike standalone multimedia applications that may require navigating
          away from the main content, the before and after slider is an
          integrated tool. It enriches the digital content without disrupting
          the flow, providing an immediate and interactive comparison within the
          context of the reading material.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          Designers should focus on ensuring that the slider is intuitive to use
          and that the images are of high quality for a clear comparison. The
          slider should be responsive and function smoothly across different
          devices and screen sizes. It's also important to provide alternative
          text descriptions for accessibility, allowing users with visual
          impairments to understand the content conveyed by the images.
        </p>

        <h3>Other examples</h3>
        <p>[To be added later]</p>
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;
