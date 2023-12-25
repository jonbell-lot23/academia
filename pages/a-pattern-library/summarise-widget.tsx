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
        <h2>Summarise Widget</h2>

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

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          The Summarise Widget embodies concise enhancement by distilling
          complex information into a simplified version, making it more
          accessible and easier to understand. This widget is particularly
          useful in educational contexts or for readers who may not be familiar
          with the subject matter. It adheres to the principle of seamless blend
          by integrating this functionality within the content, allowing users
          to toggle between the original and simplified text without navigating
          away from the page. This feature enhances the reading experience by
          providing immediate, context-specific simplification.
        </p>

        <h3>Where it works well</h3>
        <p>
          Examples of contexts where similar interactive tools could be
          beneficial include: 1. Academic websites, where complex theories or
          concepts can be simplified. 2. Legal or governmental sites, to
          demystify jargon-heavy documents. 3. Technical manuals or guides,
          where detailed processes need simplification. 4. News websites, for
          summarizing intricate stories or reports. 5. Health and medical
          information platforms, for making medical information more
          understandable to the general public. These tools can significantly
          aid comprehension, especially for users who might be new to the
          subject.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          In contexts where the details and nuances of the original text are
          crucial, such as in literature or certain artistic texts,
          oversimplification might lead to a loss of essential meaning or
          artistic value.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Unlike paper-based texts, the Summarise Widget offers an interactive
          way to transform and personalize the reading experience. Paper cannot
          adapt its content for different comprehension levels, but this digital
          tool can, enhancing the accessibility and understanding of complex
          information.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          The widget is more integrated and less intrusive than multimedia
          solutions like separate videos or explanatory apps. It provides
          on-demand simplification within the same reading interface,
          maintaining the continuity of the user’s reading experience.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          When developing a Summarise Widget, it’s important to ensure the
          accuracy and relevance of the simplified text. The transition between
          original and simplified text should be seamless, and the interface
          intuitive. Designers should also consider how the widget will handle
          various text lengths and complexities to maintain consistent
          performance.
        </p>

        <p>
          (TODO: this doesn't need to be an expensive call to chatGPT each time!
          You can just write the content in multiple ways with simple
          javascript))
        </p>

        <h3>Other examples</h3>
        <p>
          1. A finance explainer widget that simplifies complex investment
          concepts. 2. A widget in cooking websites that provides simpler
          versions of gourmet recipes. 3. An explainer tool in children’s
          educational websites for complex scientific concepts. 4. A 'simplify
          language' feature in online news platforms for younger readers. 5. A
          jargon buster in tech websites, explaining technical terms in layman's
          language.
        </p>
      </div>
    </div>
  );
};

export default SummariseWidget;
