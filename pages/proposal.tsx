import React from "react";
import LeftNav from "../components/LeftNav";

const Proposal: React.FC = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />

      <div className="container px-4 mx-auto mt-16 prose">
        <h2 className="mb-0">Original research proposal</h2>
        <span className="my-0 text-sm font-bold text-pink-600">
          Feedback written in pink,{" "}
        </span>
        <span className="mt-0 text-sm font-bold text-green-600">
          changes from original in green
        </span>
        <div className="mt-8">
          <div>
            <span className="font-bold">DRIL stream:</span> Data.Mine
          </div>
          <div>
            <span className="font-bold">Proposed Supervisor:</span> Walter
            Langelaar
          </div>
          <div>
            <span className="font-bold">Funding (if applicable):</span> N/A
          </div>
          <div>
            <span className="font-bold">
              External Partner/s (if applicable):
            </span>{" "}
            N/A
          </div>
          <div className="mt-6">
            <strong>Working Research Project title</strong>
          </div>
          <div>Augmented Text: A New Frontier in Communication</div>

          <h2>Research overview</h2>
          <p>
            This work will explore the exciting but overlooked space between
            standard text-based content and fully interactive software. Scholars
            and inventors as far back as Alan Kay (2003) have called for the
            creation of &quot;active essays&quot; and more recently Bret Victor
            has advocated for Explorable Explanations, (2011) which inspired
            powerful new works such as the Pulitzer-winning Snowfall from the
            New York Times (2012). Still, the practice is outside the
            mainstream. My research will help the reader think about text as an
            interactive experience where writing isn&#39;t just something to be
            consumed, but is instead an environment to think in.
          </p>
          <h2>Research project description</h2>
          <p>
            The research will feature an survey of innovative and influential
            examples of augmented text to date. From these sources, I will
            distill core concepts, strategies, and approaches that have proven
            successful in engaging readers and enhancing understanding. The
            central focus of my work will be contributing to this
            under-appreciated field. I'll build a comprehensive pattern library
            featuring practical, applicable examples of augmented text
            techniques.
          </p>
          <p>
            Each pattern in the library will be accompanied by working code and
            an interactive prototype. These will serve as a springboard for
            future exploration and innovation by designers and developers. This
            pattern library will stand as a practical, hands-on companion to the
            theoretical knowledge drawn from my research.
          </p>
          <p>
            In this project, I am aiming to do more than just synthesise what
            has been done. I hope to inspire, enabling others to build on past
            achievements and explore new frontiers in the realm of responsive
            communication. After reading my work, readers will not only
            appreciate the art of what's been done in the past but will also be
            equipped to add to the future of augmented text and responsive
            communication.
          </p>
          <h2>Research methods</h2>
          <p>
            My research methodology will reply on on three methods: conducting a
            literature review, performing a contextual inquiry, and authoring a
            pattern library.
          </p>
          <p>
            The literature review will examine scholarly articles, case studies,
            and existing research to identify key developments, successful
            methods, and emerging patterns. This theoretical groundwork (Fink,
            2019) will inform the subsequent stages of my research.
          </p>
          <p>
            Next, I'll conduct a contextual inquiry, as delineated by Beyer and
            Holtzblatt (1998), to help create a narrative around my work.   
            I'll study the context around these methods and techniques have been
            used, taking into account cultural, historical, and societal
            factors. Rather than focusing on individual user experiences, this
            inquiry will shed light on broader trends, positioning my work
            against a wider historical and cultural backdrop.
          </p>
          <p>
            The centrepiece of my research will be the development of an
            open-sourced pattern library, inspired by the principles outlined in
            A Pattern Language: Towns, Buildings, Construction by Alexander,
            Ishikawa, and Silverstein (1977), to ensure my research contributes
            new knowledge to the field rather than solely reporting on
            pre-existing studies. The patterns will be informed by the insights
            derived from the literature review and contextual inquiry,
            contemporary practices, and my own design explorations.
          </p>
          <p>
            By applying the insights gained from the literature review and
            contextual inquiry to the creation of the pattern library, I aim to
            provide a comprehensive, practical, and innovative resource for
            those interested in the concepts of Augmented Text and Responsive
            Communication.
          </p>

          <div className="text-pink-600">
            <h3 className="text-pink-600">Feedback on research methods</h3>
            <ol>
              <li>
                {" "}
                I understand pattern libraries as repeating designs parts of a
                web environment so | do not see the direct link between “active
                essays” or interactive text and the intended output but this
                could be due to my lack of knowledge{" "}
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> This is a good point, and easy to
                  clarify. "Augmented text" is the umbrella concept, and my
                  gallery of examples are specific demonstrations of it. A good
                  comparison is a paper on a new style of music, then including
                  10 musical samples demonstrating descrete concepts covered in
                  the paper.
                </li>
              </ul>
              <li>
                It is not clear in what way the text will be augmented? There is
                an existing body of research in HCI and Accessibility research
                around interactive text that does not seem to be covered here.
                But maybe, it is a different type of essay that is discussed?
                Please explain/disambiguate.{" "}
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> This is covered in the intro:
                  "This work will explore the exciting but overlooked space
                  between standard text-based content and fully interactive
                  software." I've established the premise and described a robust
                  library of examples I will use to illustrate my point. Stay
                  tuned, because the entire thesis will answer this very
                  question!
                </li>
              </ul>
            </ol>{" "}
          </div>

          <h2>Research outputs</h2>
          <p>
            The centrepiece of this research will be a comprehensive research
            paper that lays out the history, theory, and application of
            Augmented Text and Responsive Communication. This document will be
            available in PDF form for traditional academic consumption.
          </p>
          <p>
            However, to fully embrace the topic of study, the same content will
            be presented as an interactive online essay. This digital rendition
            will incorporate live examples of augmented text and responsive
            communication, creating an experiential learning environment for
            readers and embodying the principles it discusses.
          </p>
          <p>
            Complementing the research paper, I will also produce an
            open-sourced pattern library. This practical resource will host a
            collection of interactive patterns drawn from my research, each one
            a fully functioning example of Augmented Text. It is my hope that
            this pattern library will not only illustrate the concepts discussed
            in the research paper but will also serve as a source of inspiration
            and a toolkit for other designers and developers venturing into this
            exciting frontier of digital communication.
          </p>

          <div className="text-pink-600">
            <h3 className="text-pink-600">Feedback on research outputs</h3>
            <ol>
              <li>How will the work be evaluated?</li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> Evaluation is beyond the scope of
                  this work. My research will be focused on bringing attention
                  to the topic using a series of examples to demonstrate
                  concepts and explain what makes them novel.
                </li>
              </ul>
              <li>
                Is there an opportunity to add a research method to check if the
                research aims have been met? The student mentions ‘sctutinizing’
                the designs himself repeatedly, but doesn’t name a research
                method. The student suggests the draft writing will be shared
                “The draft research paper will be shared with peers and experts
                for their feedback.” But not the interactive designs. If
                feedback of some form is to be incorporated into the portfolio
                then ethics could be considered too.{" "}
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> I name three research methods
                  (literature review, contextual inquiry, and authoring a
                  pattern library), and state my intention to share my
                  interactive designs. I can underscore these concepts further.
                </li>
              </ul>
              <li>
                The methodologies appear appropriate but it would be useful to
                provide more detail regarding the contextual inquiry{" "}
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> Reasonable, I can beef this up
                  some.
                </li>
              </ul>
              <li>
                Does there need to be a more considered development method
                guiding the creation of the pattern library? (Prototyping,
                operational prototyping, iterative development, SCRUM etc.){" "}
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> Interesting idea, but I don't
                  consider this an important detail to share. The resulting code
                  samples will be fully agnotistic in terms of methodology, and
                  offering an opinion about them is outside the scope of my
                  work.
                </li>
              </ul>
              <li>
                A number of methods are presented but it is not clear what the
                methodology is. There was a mention of submitting a paper/report
                rather than a research portfolio. We were unsure whether this is
                a difference in terminology or a non-traditional submission
                format. Please clarify. If the candidate is submitting a paper
                rather that a research portfolio, then he should also fill out
                the form for a non-traditional format when ready.
                https://www.wgtn.ac.nz/library/research/thesis-guide/formats-for-theses
                . He will need to consider how this can be hosted with
                longevity.
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> I'll clarify that the work will be
                  hosted online for at least five years, on a custom domain. The
                  bigger issue is whether or not this is a "paper" or "research
                  portfolio." To discuss and address.
                </li>
              </ul>
              <li>
                There is also quite a big difference between a research output
                of 8,000 or 30,000, so it would be useful if there is some
                further clarification or specification on this.
              </li>
              <ul>
                <li className="text-green-600">
                  <b>Jon's notes to self:</b> Easy to remove.
                </li>
              </ul>
            </ol>
          </div>

          <h2>Research plan</h2>
          <p>
            <strong>
              July 3rd, 2023 - August 2nd, 2023: Research proposal (1 month)
            </strong>
          </p>
          <p>
            This month will be used for gathering resources, refining the
            project plan, and initial readings to prepare for the MVP.
          </p>
          <p>
            <strong>
              August 3rd, 2023 - September 2nd, 2023: MVP (1 month)
            </strong>
          </p>
          <p>
            With the knowledge already gained in the field, a preliminary draft
            of the entire research paper will be constructed. This is a
            methodology that has proven successful in industry settings---create
            a Minimum Viable Product (MVP) quickly and proceed to iterate based
            on its foundation. This is non-standard because a literature review
            typically comes first, but this will give me the best chance of
            success because it gives me more time to iterate.
          </p>
          <p>
            <strong>
              September 3rd, 2023 - December 2nd, 2023: Development (3 months)
            </strong>
          </p>
          <p>
            Pattern Library Development. The next three months will be dedicated
            to writing code for the pattern library. Leveraging the insights
            from the initial draft, a series of interactive examples showcasing
            the potential of augmented text and responsive communication will be
            developed. By the end of this phase, I'll have a solid draft
            containing the essay and code components of my final thesis.
          </p>
          <p>The 4-month report will land on November 3rd.</p>
          <p>
            <strong>
              December 3rd, 2023 - March 2nd, 2024: Literature Review (3 months)
            </strong>
          </p>
          <p>
            In these three months, the paper and code examples will be
            scrutinized, iterated upon, and improved. The draft research paper
            will be shared with peers and experts for their feedback. In
            parallel, a literature review will be conducted to understand how
            the project relates to, deviates from, and augments the existing
            body of knowledge.
          </p>
          <p>
            The 8-month report will land at the end of this phase, on March 2nd,
            2024.
          </p>
          <p>
            <strong>
              March 3rd, 2024 -- July 3rd, 2024:    Iteration and refinement (4
              months)
            </strong>
          </p>
          <p>
            This phase will be devoted to consolidating new learnings, feedback,
            and insights. The objective is to enhance and expand the paper and
            the code examples to ensure their relevance and contribution to the
            field, and prepare for final submission. My ultimate goal is to
            create a research output that withstands academic scrutiny while
            contributing practically to the field.
          </p>
          <p>
            A final report will be delivered between April 3rd and July 2nd,
            2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
