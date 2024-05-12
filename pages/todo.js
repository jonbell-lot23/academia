import React from "react";
import LeftNav from "../components/LeftNav";

const Todo = () => {
  const tasks = [
    {
      name: "Clean up the abstract and section after Research Objective",
      status: "✅",
      feedback:
        "On the first point just have a look at whether that's intended to be there. Regarding hyperlinking I imagine there's to common approaches to this, one being a link or tooltip to the bibliography, the other a link to an external source. Would be great to decide on a single or combined approach for consistency.",
      notes:
        "Removed the inline TOC entirely, all (most) links will be on the left hand nav now.",
    },
    {
      name: "Hyperlink References",
      status: "[On hold]",

      feedback:
        "maybe you could hyperlink references? (you do this already in one or two places)",
      notes:
        "I'm moving this into a nice-to-have category. It'd be awesome to get to this once the body of the text is ironed out, but for now it's lower priority. On hold.",
    },
    {
      name: "Expand the Literature Review",
      status: "Todo",

      feedback:
        "Literature review too short, currently only one real usecase/argument",
      notes:
        "I've got some good stuff I can refer to here. I'll be pulling in the methodology stuff as recommended (Nielson, GOMs, etc) but also some of the examples I had tucked into the appendix. I know how I can flesh this out more.",
    },
    {
      name: "Integrate Literature Review into Methodology",
      status: "✅",
      feedback:
        "methodology is excellent, but plz dont forget to add litreview (as a method)",
      notes: "Added and smoothed that transition",
    },
    {
      name: "Enhance Methodology with Study Findings",
      status: "Todo",

      feedback:
        "methods used in study findings can form basis for additions to litreview",
      notes: "Will be moving this stuff forward to address this",
    },
    {
      name: "Reference Integration in Discussion",
      status: "Todo",

      feedback:
        "discussion needs referencing to litreview and further/thorough discussion of previously presented sources and arguments, in context of findings",
      notes: "Agree! Will do this.",
    },
    {
      name: "Avoid New Sources in Discussion",
      status: "Todo",

      feedback:
        "Also, please be mindful of not introducing new sources in the discussion section that have not been discussed through your litreview, such as your mention of the Amazon Kindle X-Ray feature, for example.",
      notes: "On it!",
    },
  ];

  return (
    <div className="mainContent">
      <LeftNav />

      <div className="container px-4 mx-auto mt-16 prose">
        <h1>Todo list from feedback</h1>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              borderTop: "1px solid #efefef",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <p>
              <strong>
                <span
                  style={{
                    fontSize: "0.8em",
                    padding: "5px 10px",
                    margin: "0px 4px 0 0",
                    borderRadius: "8px",
                    backgroundColor: "#B7D4C1",
                    color: "green",
                  }}
                >
                  {task.status}
                </span>
                <br />
                {task.name}
              </strong>
            </p>
            <p>
              <b>Feedback:</b>
              <br /> <i>{task.feedback}</i>
            </p>
            <p>
              <b>Notes:</b>
              <br />
              {task.notes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
