import React from "react";
import LeftNav from "../components/LeftNav";

const Todo = () => {
  return (
    <div className="mainContent">
      <LeftNav />

      <div className="container px-4 mx-auto mt-16 prose">
        <h1>Todo list from feedback</h1>

        <h1>New Todo list</h1>
        <div
          style={{
            borderTop: "1px solid #efefef",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Introduction</h2>
          <ul>
            <li>Tie The Web’s Grain back to my research question somehow</li>
            <li>Amp up personalisation</li>
          </ul>

          <h2>Literature review</h2>
          <ul>
            <li>
              Structure as 1) Existing work 2) Active vs Passive? 3) The gap I’m
              addressing
            </li>
            <li>
              Don’t gloss over all the explorable explanations stuff, give more
              examples
            </li>
            <li>
              Explorable explanations bit needs to be more clearly framed up
              because Nadia got lost
            </li>
            <li>Remove mentions of measurements</li>
          </ul>

          <h2>Methodology</h2>
          <ul>
            <li>Enhance Methodology with Study Findings (Walter)</li>
            <li>Present tasks earlier</li>
          </ul>

          <h2>Polish</h2>
          <ul>
            <li>Uh, make sure the demos are working I guess?</li>
            <li>Reconcile Walter and Nadia’s feedback</li>
            <li>Hyperlink References</li>
          </ul>

          <h2>Discussion</h2>
          <ul>
            <li>Reference Integration in Discussion</li>
            <li>Avoid New Sources in Discussion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
