import React, { useState } from "react";
import LeftNav from "../../components/LeftNav";

const InteractiveGraphCompoundInterest = () => {
  const [income, setIncome] = useState(97667); // Average income in NZD, average of the data found
  const taxRate = 0.3; // Example tax rate of 30%, this is a simplification as tax rate varies with income
  const taxPaid = income * taxRate;

  // Example distribution of tax dollars, actual distribution data couldn't be found, kept your distribution
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
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="cite-pull-forward-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Tax Distribution Calculator</h2>
        <p>
          The average New Zealand resident makes
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
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
      </div>
    </div>
  );
};

export default InteractiveGraphCompoundInterest;
