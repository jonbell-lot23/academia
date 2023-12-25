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

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          This calculator enhances the understanding of personal finance and tax
          policy by providing a concise, personalized breakdown of tax
          distribution. It transforms abstract tax concepts into tangible
          figures based on the user's income, making the information more
          relatable and meaningful. The tool exemplifies seamless blend by
          integrating this functionality directly into the content, allowing
          users to interact without leaving the page or navigating to a separate
          application. This direct interaction within the content context
          fosters greater engagement and comprehension.
        </p>

        <h3>Where it works well</h3>
        <p>
          Examples of contexts where similar interactive tools could be
          beneficial include: 1. Retirement planning calculators on financial
          websites. 2. Carbon footprint calculators on environmental awareness
          sites. 3. Loan and mortgage calculators on banking and real estate
          platforms. 4. Educational tools for students to calculate grades or
          progression. 5. Health and fitness calculators, like BMI or calorie
          intake estimators. These tools can provide personalized insights,
          aiding users in making informed decisions based on their specific
          circumstances.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          Interactive calculators may not add value in contexts where
          personalization is not relevant or where the calculations are too
          simplistic or generic. For example, a simple countdown timer for an
          event might not need user input.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Unlike static paper-based calculations, this digital tool offers
          real-time, personalized results based on user input, making complex
          calculations easy and accessible for the average person. Paper cannot
          adapt to provide immediate, customized calculations based on varying
          inputs.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          This tool goes beyond traditional multimedia by offering interactive
          and personalized calculations within the context of the content. It
          enhances user engagement and understanding without the need for
          external applications or complex multimedia presentations.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          When creating such tools, it's important to ensure they are
          user-friendly, with clear instructions and inputs. The design should
          be intuitive, and the output should be presented in an easily
          understandable format. Considering accessibility and responsiveness
          for different devices is also crucial.
        </p>

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
