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
            Imagine if, at the start of this thesis, I needed to present a
            five-minute video. A century ago, such a notion would have been
            inconceivable for a scholarly paper. Fast forward to today and
            putting multimedia into a thesis is still challenging. Because PDFs
            cannot play video, the state-of-the-art solution is to provide a
            hyperlink to a YouTube video. This is the modern equivalent of a
            book referencing a movie and saying "come back once you've seen it."
            We know most people won't actually watch the movie, because it
            breaks the flow of reading. This is unacceptable in a scholarly text
            in 2023 as it would have been in 1953. As a result, we write with
            the assumption that most people won't chase down our references,
            whether hyperlinks to multimedia or actual footnotes squirrelled
            away at the bottom of the document.
          </p>

          <p>
            This thesis explores that evolving landscape. It questions why,
            despite the digital revolution, the experience of reading –
            especially in academic and scholarly contexts – often remains
            anchored to conventions developed for paper. It argues that we're at
            a crossroads, where the potential of digital augmentation can
            transform the reading experience into something more dynamic and
            interactive, yet respectful of the deep-rooted traditions of written
            communication. To achieve this, we'll return to two key principles:
            <b>seamless blending</b> and <b>concise enhancement</b>. The future
            of reading isn't more external links to multimedia content but
            instead an approach to communication that uses as little technology
            as possible to enhance the reading experience, with no need for
            external content.
          </p>

          <p>
            Augmented text, as the name makes clear, isn't about replacing the
            written word with whizzy technologies and media types that distract
            us from long form reading. It's about enriching the standard reading
            experience, acknowledging that in a world where technology has
            changed nearly every aspect of our lives, the humble act of reading
            deserves its own renaissance.
          </p>

          <p>
            As an experiment, try clicking the "explain like I'm five" link
            below.
          </p>
        </div>
      ) : (
        <div>
          <p>
            "Can you watch YouTube inside a book? No, and even if we could, it
            would be pretty strange because watching a video is different from
            reading a book. Reading is its own thing, but we can still make it
            better. We can find ways to make reading more fun and interesting by
            adding helpful magical bits into it. This will help people to learn
            in new ways and have more fun when they read.
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
