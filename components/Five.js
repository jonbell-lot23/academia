import React, { useEffect, useState } from "react";

const DocumentStats = () => {
  const [stats, setStats] = useState({ wordCount: 0, creationDate: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchVersion");
        const data = await response.json();
        // Extract date from filename
        const dateFromFileName = data.creationDate.split(".")[0];
        setStats({
          wordCount: data.wordCount,
          // Format date in yyyy-mm-dd format
          creationDate: new Date(
            dateFromFileName.split("-").join("/")
          ).toLocaleDateString(),
        });
      } catch (error) {
        console.error("Error fetching document stats:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 bg-gray-100 border border-black rounded-lg">
      <div className="font-bold">Dev console</div>
      {stats.wordCount} words
      <br />
      Last updated {stats.creationDate}
    </div>
  );
};

export default DocumentStats;
