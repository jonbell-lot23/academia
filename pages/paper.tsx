import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Paper: React.FC = () => {
  const [documentContent, setDocumentContent] = useState("");

  useEffect(() => {
    const fetchLatestDocument = async () => {
      const res = await fetch(`/api/fetchVersion`);
      const data = await res.json();

      setDocumentContent(data.content);
    };

    fetchLatestDocument();
  }, []);

  return (
    <div className="container px-4 mx-auto mt-16 prose">
      <ReactMarkdown>{documentContent}</ReactMarkdown>
    </div>
  );
};

export default Paper;
