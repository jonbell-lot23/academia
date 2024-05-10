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
      status: "Todo",

      feedback:
        "maybe you could hyperlink references? (you do this already in one or two places)",
      notes:
        "Good call, will keep my eyes peeled and get this more consistent!",
    },
    {
      name: "Expand the Literature Review",
      status: "Todo",

      feedback:
        "Literature review too short, currently only one real usecase/argument",
      notes:
        "How did that happen?! I didn't even notice, but yeah. That's weird. Will add things back here. Update: I see what happened. I referred to Wolf and Chomsky in my introduction, then said that Explorable Explanations was the only real example I could find that directly addressed what I'm going for. That was by design, but I do have some ideas I can pull in here to make the literature review more robust. Stay tuned.",
    },
    {
      name: "Integrate Literature Review into Methodology",
      status: "Todo",

      feedback:
        "methodology is excellent, but plz dont forget to add litreview (as a method)",
      notes: "Roger roger",
    },
    {
      name: "Enhance Methodology with Study Findings",
      status: "Todo",

      feedback:
        "methods used in study findings can form basis for additions to litreview",
      notes: "Got it",
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
