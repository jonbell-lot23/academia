import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Paper: React.FC = () => {
  const [documentContent, setDocumentContent] = useState("");

  useEffect(() => {
    const fetchLatestDocument = async () => {
      const resFiles = await fetch("/api/weeks");
      const { weeks } = await resFiles.json();

      // If there are no weeks, we can't fetch a document
      if (weeks.length === 0) {
        return;
      }

      const filename = weeks[weeks.length - 1];

      const res = await fetch(`/api/fetchVersion?filename=${filename}`);
      const data = await res.json();

      setDocumentContent(data.content);
    };

    fetchLatestDocument();
  }, []);

  return (
    <div className="container px-4 mx-auto mt-16">
      <ReactMarkdown>{documentContent}</ReactMarkdown>
    </div>
  );
};

export default Paper;
