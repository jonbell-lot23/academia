import React from "react";
import ReactMarkdown from "react-markdown";
import LeftNav from "../components/LeftNav";

const About = () => {
  const markdown = `
    ## Words
    About this project
  `;

  return (
    <div className="mainContent">
      <LeftNav />

      <div className="container px-4 mx-auto mt-16 prose">
        <h2>About this page</h2>
        <p>
          Hello! My name is Jon Bell and this is where I&apos;m writing my
          Masters of Design thesis. It&apos;ll be done in 2024, and this site
          will show my work as I go.
        </p>

        <h3>What&apos;s it about?</h3>
        <p>
          I&apos;m interested in how we can use the web to make it easier to
          read and understand content. I&apos;m calling the exploration
          &quot;Augmented Text&quot; and it takes a lot of inspiration from Bret
          Victor&apos;s work with what he calls &quot;explorables&quot; as well
          as Alan Key&apos;s research into &quot;active esasys.&quot;
        </p>

        <h3>Can I read it?</h3>
        <p>
          Indeed you can! Look to your left and you&apos;ll see a link to the
          thesis as it stands today. It&apos;s being actively updated.
        </p>

        <h3>What&apos;s a pattern library?</h3>
        <p>
          I wanted my thesis to feel actionable, so I&apos;m also building
          little code samples that other researchers can learn from and iterate
          on.
        </p>
      </div>
    </div>
  );
};

export default About;
