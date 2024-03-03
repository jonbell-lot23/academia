import React, { useState } from "react";
import LeftNav from "../../components/LeftNav";

interface SummariseWidgetProps {
  format?: "embed" | "standalone";
}

export const SummariseWidget: React.FC<SummariseWidgetProps> = ({
  format = "standalone",
}) => {
  const [showSimple, setShowSimple] = useState(false);

  const complexText = [
    "The endocrine system is a complex collection of glands that produce hormones. These hormones are secreted into the bloodstream and regulate various bodily functions, including metabolism, growth, and tissue function.",
    "Hypothyroidism is a condition characterized by an underactive thyroid gland, leading to decreased production of thyroid hormones. This, in turn, can result in fatigue, weight gain, and depression.",
    "Diabetes mellitus is a group of metabolic diseases that result in high levels of sugar in the blood. This occurs because the body either doesn't produce enough insulin or cannot effectively use the insulin it does produce.",
    "The cardiovascular system consists of the heart, blood, and a complex network of veins and arteries. It is responsible for pumping blood throughout the body and supplying oxygen and nutrients to the tissues.",
    "Oncology is the study of cancer, a class of diseases that involve abnormal cell growth with the potential to invade or spread to other parts of the body. Various treatments exist, but their effectiveness varies.",
  ];

  const simpleText = [
    "Your body has a system that sends out tiny messengers to help your body work properly.",
    "Sometimes, a part of your body that makes these messengers doesn't work well, and you might feel tired or gain weight.",
    "Diabetes is when you have too much sugar in your blood because your body can't handle it properly.",
    "Your heart and blood vessels work together to move blood around your body, giving it what it needs to work.",
    "Cancer is when some cells in your body grow too much and can make you sick. Doctors are trying different ways to make people better.",
  ];

  return (
    <div
      className={format === "standalone" ? "mainContent" : "embeddedContent"}
    >
      {format === "standalone" && <LeftNav />}
      <div
        id="cite-pull-forward-content"
        className={`container ${
          format === "standalone" ? "px-4 mt-16" : "px-4"
        } mx-auto prose`}
      >
        <h3>Description</h3>
        <p>
          "The Summarise Widget simplifies complex text into a more digestible
          format, enhancing comprehension with a user-friendly 'Explain Like I'm
          5' feature."
        </p>

        <h3>Example</h3>

        {showSimple
          ? simpleText.map((text, index) => <p key={index}>{text}</p>)
          : complexText.map((text, index) => <p key={index}>{text}</p>)}

        <button
          onClick={() => setShowSimple(!showSimple)}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {showSimple ? "Go back to original text" : "Explain this like I'm 5"}
        </button>
      </div>
    </div>
  );
};

export default SummariseWidget;
