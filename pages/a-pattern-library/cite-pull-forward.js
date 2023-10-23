import React, { useEffect, useState } from "react";
import LeftNav from "../../components/LeftNav";

// Tooltip Component
const Tooltip = ({ children, title }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
      {hovering && (
        <div
          className="p-3 bg-white border rounded-lg drop-shadow-lg w-96"
          style={{ position: "absolute", zIndex: 1 }}
        >
          {title}
        </div>
      )}
    </div>
  );
};

const CitePullForward = () => {
  const [lessWrongSummary, setLessWrongSummary] = useState("");

  useEffect(() => {
    // Fetch summary from LessWrong.com
    fetch("https://api.yourservice.com/get-summary?url=https://lesswrong.com")
      .then((response) => response.json())
      .then((data) => setLessWrongSummary(data.summary))
      .catch((error) => console.error("Error fetching summary:", error));
  }, []);

  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="cite-pull-forward-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Cite Pull-foward</h2>
        <p>
          The transition from traditional books to digital platforms represents
          a leap in how we access and interact with information. Whereas
          traditional books required readers to tediously navigate through
          footnotes, indexes, and bibliographies to dive deeper into cited
          materials, the advent of the internet brought forth the
          <Tooltip title="Google.com needs no introduction">
            <a href="https://google.com">"hyperlink"</a>
          </Tooltip>
          , a tool that seamlessly connects related documents and pages with a
          simple click. However, even as this transition eliminated some of the
          friction inherent in traditional books, it retained certain legacy
          features. The conventional footnote, for instance, persists in the
          digital realm, often necessitating that readers navigate to the bottom
          of a page or click through to another page to access referenced
          materials.
        </p>
        <p>
          <Tooltip title={lessWrongSummary}>
            <a href="https://lesswrong.com">LessWrong.com</a>
          </Tooltip>
          , an online community devoted to refining the art of human
          rationality, has advanced an innovative solution to this persistent
          issue. By adopting a "pull forward citation" approach, LessWrong.com
          allows readers to view a rich summary of linked content by merely
          hovering over a hyperlink. This intermediary step furnishes readers
          with a snapshot of the linked page's content before deciding whether
          to delve deeper by clicking through. The pull forward citation
          approach can be executed manually or automatically, adding a layer of
          user-friendly functionality that significantly enhances the reader's
          ability to swiftly assess and access cited materials.
        </p>
        <p>
          This fresh approach to citations embodies a broader movement towards
          "Augmented Text." Augmented Text goes beyond traditional multimedia by
          introducing layers of interactivity and responsive elements that
          facilitate a more engaging and informative reading experience. The
          LessWrong's pull forward citation method is a step towards a more
          nuanced and efficient way of dealing with citations and references,
          acting as a bridge between static text and the dynamic, interconnected
          <Tooltip title="This Is How Apple Rolls\n\nThursday, 13 May 2010\n\nThis is how the designers and engineers at Apple roll: They roll.\n\nThey take something small, simple, and painstakingly well considered. They ruthlessly cut features to derive the absolute minimum core product they can start with. They polish those features to a shiny intensity. At an anticipated media event, Apple reveals this core product as its Next Big Thing, and explains — no, wait, it simply shows — how painstakingly thoughtful and well designed this core product is. The company releases the product for sale.">
            <a href="https://daringfireball.net/2010/05/this_is_how_apple_rolls">
              {" "}
              digital information landscape
            </a>
          </Tooltip>{" "}
          we navigate today.
        </p>
        <p>
          In the endeavor to pioneer new frontiers in text, exploring diverse,
          innovative methods, and drawing inspiration from platforms like
          LessWrong, is essential. As we transition from merely replicating
          traditional text structures in digital formats to truly leveraging the
          capabilities of digital technology, we inch closer to a more enriched,
          interactive, and intuitive user-centric communication paradigm. This
          evolution is not just about translating old methods into a new medium,
          but innovating to enhance comprehension, engagement, and the seamless
          flow of ideas in our digital discourse.
        </p>
      </div>
    </div>
  );
};

export default CitePullForward;
