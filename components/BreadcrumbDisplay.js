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
      <h2 className="mb-4">Places you've been on this site:</h2>
      <div
        className="breadcrumb-list"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                padding: "3px 6px",
                margin: "1px",
                whiteSpace: "nowrap",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              {breadcrumb}
            </div>
            {index < breadcrumbs.length - 1 && (
              <span style={{ margin: "0 4px" }}>→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        className="px-4 py-2 my-4 border rounded"
        onClick={clearBreadcrumbs}
      >
        Clear Breadcrumbs
      </button>
    </div>
  );
};

export default BreadcrumbDisplay;
