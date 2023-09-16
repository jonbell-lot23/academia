import React from "react";
import LeftNav from "../../components/LeftNav";

const LastReadIndicator = () => {
  return (
    <div style={{ marginLeft: "220px" }}>
      <LeftNav />
      <div
        id="digital-patina-content"
        className="container px-4 mx-auto mt-16 prose"
      >
        <h2>Last-read indicator</h2>

        <p>
          Bookmarks have existed for hundreds of years, because it's hard to
          remember exactly where you left off. But when reading content online,
          we rarely get any help remembering where we were. It's not
          technologically difficult to remember your last-read location and
          offer it to users. Imagine coming back to a long article, or a blog
          post, and having the text helpfully draw your eye to the last thing
          you saw. It's a small thing with big impact.
        </p>
      </div>
    </div>
  );
};

export default LastReadIndicator;
