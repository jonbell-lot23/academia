import React from "react";
import ReactMarkdown from "react-markdown";
import LeftNav from "../../components/LeftNav";

const About = () => {
  const markdown = `
    ## Words
    About this project
  `;

  return (
    <div class="mainContent">
      <LeftNav />

      <div className="container px-4 mx-auto mt-16 prose">
        <h2>About the library</h2>
        <p>
          I wanted my thesis to feel actionable, so I&apos;m also building
          little code samples that other researchers can learn from and iterate
          on. Stay tuned for more.
        </p>
      </div>
    </div>
  );
};

export default About;
