import React from "react";
import LeftNav from "../../components/LeftNav";
import BreadcrumbDisplay from "../../components/BreadcrumbDisplay";

interface PersonalBreadcrumbsProps {
  format?: "embed" | "standalone";
}

const PersonalBreadcrumbs: React.FC<PersonalBreadcrumbsProps> = ({
  format = "standalone",
}) => {
  return (
    <div
      className={format === "standalone" ? "mainContent" : "embeddedContent"}
    >
      {format === "standalone" && <LeftNav />}
      <div
        id="digital-patina-content"
        className={`container ${
          format === "standalone" ? "px-4 mt-16" : ""
        } mx-auto prose`}
      >
        <h2>Personal breadcrumbs</h2>

        <h3>Description</h3>
        <p>
          Personal breadcrumbs visually trace your navigation path, simplifying
          website revisits with a chronological map of your journey.
        </p>

        <h3>Example</h3>
        <BreadcrumbDisplay />

        <h3>Principles of concise enhancement and seamless blend</h3>
        <p>
          Personal breadcrumbs embody the concept of concise enhancement by
          providing a clear, chronological map of the user's navigation path
          without overwhelming them with information. This tool enhances user
          orientation and facilitates easy backtracking, especially in
          content-rich or complex websites. By presenting the navigation history
          in an orderly and accessible manner, personal breadcrumbs enable users
          to understand and follow their journey through the site with ease.
          Adhering to the principle of a seamless blend, personal breadcrumbs
          integrate smoothly into the website's design. They are not obtrusive
          but serve as a helpful guide, complementing the site's existing
          navigation structure. This integration ensures that users can
          effortlessly utilize personal breadcrumbs without disrupting their
          browsing experience.
        </p>

        <h3>Where it works well</h3>
        <p>
          Personal breadcrumbs are particularly effective in enhancing
          navigation on websites where users frequently return and need to track
          their previous interactions. For example: 1. E-commerce websites,
          where users explore multiple products and categories. 2. Educational
          platforms with extensive course materials and resources. 3. News
          websites or blogs with a wide array of articles and topics. In these
          scenarios, personal breadcrumbs assist users in retracing their steps,
          particularly when they need to revisit specific pages or resources.
        </p>

        <h3>Where it doesn't work well</h3>
        <p>
          Personal breadcrumbs may not be necessary on simple, linear websites
          with a clear and straightforward navigation path, such as single-page
          applications or websites that primarily serve as digital brochures. In
          these cases, the addition of personal breadcrumbs may add unnecessary
          complexity.
        </p>

        <h3>Why it's better than traditional paper</h3>
        <p>
          Unlike static paper content, personal breadcrumbs offer a dynamic,
          interactive guide to the user’s journey through a digital landscape.
          While paper can't adapt to show the reader's path, personal
          breadcrumbs provide a real-time, personalized navigation history,
          enhancing the digital reading and browsing experience.
        </p>

        <h3>Why it's better than multimedia</h3>
        <p>
          Compared to multimedia elements that can be cumbersome and
          interruptive, personal breadcrumbs are a subtle yet effective
          navigational aid. They enhance the user experience directly within the
          content, without the need for additional media or tools that might
          disrupt the browsing flow.
        </p>

        <h3>Authoring considerations</h3>
        <p>
          Designers should ensure that personal breadcrumbs are intuitively
          designed and do not clutter the interface. The visual design should be
          consistent with the website's overall theme, and breadcrumbs should be
          easily distinguishable without being distracting. It's also important
          to consider accessibility, making sure that the breadcrumb trail is
          keyboard-navigable and screen-reader friendly. Additionally, privacy
          concerns should be addressed, ensuring that personal navigation data
          is handled securely and ethically.
        </p>

        <h3>Other examples</h3>
        <p>[To be added later]</p>
      </div>
    </div>
  );
};

export default PersonalBreadcrumbs;
