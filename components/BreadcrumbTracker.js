// BreadcrumbTracker.js
import { useEffect } from "react";

const BreadcrumbTracker = () => {
  useEffect(() => {
    console.log("BreadcrumbTracker loaded"); // Debugging: Check when the component is loaded

    const clickHandler = (event) => {
      if (event.target.classList.contains("tracked-link")) {
        const breadcrumbs = JSON.parse(
          localStorage.getItem("breadcrumbs") || "[]"
        );
        console.log("Current breadcrumbs:", breadcrumbs); // Debugging: Check the current breadcrumbs

        const newBreadcrumbs = [...breadcrumbs, event.target.textContent];
        localStorage.setItem("breadcrumbs", JSON.stringify(newBreadcrumbs));

        console.log("New breadcrumbs:", newBreadcrumbs); // Debugging: Check the new breadcrumbs
        console.log("Number of breadcrumbs:", newBreadcrumbs.length); // Debugging: Check the number of breadcrumbs
      }
    };

    window.addEventListener("click", clickHandler);
    return () => {
      console.log("BreadcrumbTracker unmounted"); // Debugging: Check when the component is unmounted
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return null;
};

export default BreadcrumbTracker;
