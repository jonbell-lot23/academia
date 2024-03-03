import React, { useState } from "react";
import LeftNav from "../../components/LeftNav";

interface InteractiveGraphCompoundInterestProps {
  format?: "embed" | "standalone";
}

const InteractiveGraphCompoundInterest: React.FC<
  InteractiveGraphCompoundInterestProps
> = ({ format = "standalone" }) => {
  const [income, setIncome] = useState(97667); // Average income in NZD, average of the data found
  const taxRate = 0.3; // Example tax rate of 30%, this is a simplification as tax rate varies with income
  const taxPaid = income * taxRate;

  const taxDistribution = {
    Healthcare: 0.2,
    "Social Security": 0.18,
    Education: 0.15,
    Defense: 0.12,
    Infrastructure: 0.1,
    "Public Safety": 0.08,
    "Debt Service": 0.07,
    "Research & Development": 0.05,
    Environment: 0.03,
    Other: 0.02,
  };

  return (
    <div
      className={format === "standalone" ? "mainContent" : "embeddedContent"}
    >
      {format === "standalone" && <LeftNav />}
      <div
        id="interactive-numbers-content"
        className={`container ${
          format === "standalone" ? "px-4 mt-16" : ""
        } mx-auto prose`}
      >
        <h2>Tax Distribution Calculator</h2>
        <p>
          "The Tax Distribution Calculator is a dynamic tool that lets users
          input their annual income to see a breakdown of how their taxes are
          distributed across different public sectors."
        </p>

        <h3>Example</h3>
        <p>
          The average New Zealand resident makes
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
            style={{ width: "100px", marginLeft: "10px", marginRight: "10px" }}
          />
          per year and pays about {taxPaid.toFixed(2)} in taxes. This means
          they're paying about:
        </p>
        <ul>
          {Object.entries(taxDistribution).map(([key, value], index) => (
            <li key={index}>
              {key}: ${(taxPaid * value).toFixed(2)}
            </li>
          ))}
        </ul>

        <h3>Other examples</h3>
        <p>
          <ol>
            <li>
              A fitness goal tracker that adjusts workout plans based on user
              input.
            </li>
            <li>
              An interactive recipe modifier that recalculates ingredient
              quantities based on the number of servings.
            </li>
            <li>
              A budget planner that helps users allocate expenses based on their
              monthly income.
            </li>
            <li>
              A travel itinerary planner that adjusts suggestions based on
              travel dates and interests.
            </li>
            <li>
              A garden planner tool that suggests plants and layout based on
              climate and soil type inputs.
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default InteractiveGraphCompoundInterest;
