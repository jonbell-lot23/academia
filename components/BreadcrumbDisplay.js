import React, { useEffect, useState } from "react";

const BreadcrumbDisplay = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const storedBreadcrumbs = JSON.parse(
      localStorage.getItem("breadcrumbs") || "[]"
    );
    setBreadcrumbs(storedBreadcrumbs);
  }, []);

  const clearBreadcrumbs = () => {
    localStorage.removeItem("breadcrumbs");
    setBreadcrumbs([]);
  };

  return (
    <div>
      <h2 className="mb-0">Example</h2>
      <h4 className="mt-0">(these are the places you've been on this site)</h4>
      <ul className="breadcrumb-list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>{breadcrumb}</li>
        ))}
      </ul>
      <button onClick={clearBreadcrumbs}>Clear Breadcrumbs</button>
    </div>
  );
};

export default BreadcrumbDisplay;
