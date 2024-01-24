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
            What if this thesis only made sense if you first watched a five
            minute video? How might I author it to make the most sense to you as
            a reader with no access to the internet or ability to play video?
            What would I do? One hundred years ago, or even ten, the answer was
            clear: research should not rely on anything that the printed page
            could not support. Text, diagrams, and images were first class media
            types, and everything else was banished to a footnote, where almost
            no one would read it. The words were the main event, and any
            supporting media was a novel distraction at best.
          </p>
          <p>
            Things are hardly better today. It's still considered a novelty and
            a nuisance to include any sort of multimedia when explaining
            concepts in academia. Not because other formats have nothing to
            offer, but because it's too hard to author and read. As a result, we
            write with the assumption that most people won't chase down our
            references, whether hyperlinks to multimedia or actual footnotes
            squirrelled away at the bottom of the document. This is untenable.
            Text can only go so far, and the future of reading, demonstration,
            and education is not more text with footnotes. Interactive
            visualisations, videos, and improved ways of consuming text all have
            a role to play, and will in the future.
          </p>

          <p>
            This thesis explores this evolving landscape and expanding horizon.
            It questions why, despite the digital revolution, the experience of
            reading – especially in academic and scholarly contexts – often
            remains anchored to conventions developed for paper. It argues that
            we're at an inspiring moment in human history, where the potential
            of digital augmentation can transform the reading experience into
            something more dynamic, interactive, and effective, while still
            respectful of the deep-rooted traditions of written research and
            communication, and aware of the cognitive limitations of the human
            mind. The future of reading isn't more external links to multimedia
            content but instead an approach to communication that uses as little
            technology as possible to enhance the reading experience, with no
            need for external content. Throughout this paper, we'll return to
            two key principles to guide us:
            <b>seamless blending</b> and <b>concise enhancement</b>.
          </p>

          <p>
            Augmented text, as the name makes clear, isn't about replacing the
            written word with whizzy technologies and media types that distract
            us from long-form reading. It's about enriching the standard reading
            experience, acknowledging that in a world where technology has
            changed nearly every aspect of our lives, the humble act of reading
            deserves its own renaissance. As an example, try clicking the
            "explain like I'm five" link below to watch this text change.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Can you watch YouTube inside a book? No, and even if we could, it
            would be pretty strange! Reading is its own thing, and we can make
            it better by adding helpful things to it. This will help people to
            learn in new ways and have more fun when they read. They'll also
            learn better, which is a good goal. And that's what this paper is
            about! 🎈
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
