import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Pattern from "/components/pattern_library/Pattern";

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

      <Pattern name="one" />
      <Pattern name="two" />
      <Pattern name="three" />
      <Pattern name="four" />
    </div>
  );
};

export default Paper;
