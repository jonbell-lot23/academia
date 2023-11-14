import React, { useState, useEffect, useRef } from "react";

const One = () => {
  const [selectedFormat, setSelectedFormat] = useState(
    "Casual academic format"
  );
  const [flash, setFlash] = useState(false);
  const headerRef = useRef(null); // Ref for the header element

  useEffect(() => {
    if (selectedFormat !== "Casual academic format") {
      setFlash(true);
      setTimeout(() => setFlash(false), 500); // Flash duration 500ms
    }
  }, [selectedFormat]);

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        backgroundColor: flash ? "yellow" : "transparent",
        transition: "background-color 0.5s",
      }}
    >
      <h2 ref={headerRef}>Dancing About Architecture</h2>
      {selectedFormat === "Casual academic format" ? (
        <div>
          <p>
            Imagine, for a moment, you're standing in the bustling heart of New
            York City, craning your neck to capture the full majesty of the
            Empire State Building. Now, picture yourself turning to a passerby
            and asking for their thoughts on this marvel of engineering and
            architecture. Instead of words, they launch into an interpretive
            dance, limbs flailing in a bizarre pastiche of a 1960s hippie caught
            in a windstorm. It's humorous, perplexing, and—you have to admit—a
            little bit impressive. But it doesn't tell you much about the
            building's art deco design, its place in the skyline, or its
            cultural significance.
          </p>

          <p>
            This surreal scenario illustrates a fundamental mismatch between the
            question asked and the form of communication chosen to answer it.
            We've all heard the saying, "Writing about music is like dancing
            about architecture." It's a humorous remark on the absurdity of
            trying to convey the essence of one art form through the wholly
            different medium of another. Using the wrong tool for the job can
            lead to a communication breakdown that, while potentially
            entertaining, is ultimately uninformative.
          </p>
          <p>
            In the digital age, this concept takes on new weight. With
            multimedia, hypertext, and now augmented text at our fingertips,
            we're tasked with choosing the most effective way to communicate our
            messages. Should we explain a complex JavaScript function through
            prose, or would an interactive code block serve better? Can the
            experience of a live concert be captured in a tweet, or does it
            demand the richness of a VR simulation? The tools we choose can
            either enhance our message or muddle it, and finding that sweet spot
            is both the challenge and the thrill of modern communication. Let's
            try an experiment.
          </p>

          <p>
            Click one of the following links to rephrase this section in
            different ways
          </p>
        </div>
      ) : (
        <div>
          <p>
            Then the section would swap out with "Imagine you're looking up at a
            really, really tall building and you want to know more about it. You
            ask someone, and instead of telling you, they start dancing like
            they're at a fun, silly party. It's funny, but it doesn't really
            help you learn about the building, does it? A better way to explain
            the building would be to use words. Or the best way to explain a
            song would be to sing it. Or the best way to describe a person might
            be to show a picture. That's what this paper will be talking about!"
          </p>
        </div>
      )}

      <ul>
        <li
          style={{
            cursor: "pointer",
            fontWeight:
              selectedFormat === "Casual academic format" ? "bold" : "normal",
          }}
          onClick={() => handleFormatChange("Casual academic format")}
        >
          Casual academic format
          {selectedFormat === "Casual academic format" && " (selected)"}
        </li>
        <li
          style={{
            cursor: "pointer",
            fontWeight:
              selectedFormat === "Explain like I'm five" ? "bold" : "normal",
          }}
          onClick={() => handleFormatChange("Explain like I'm five")}
        >
          Explain like I'm five
          {selectedFormat === "Explain like I'm five" && " (selected)"}
        </li>
      </ul>
    </div>
  );
};

export default One;
