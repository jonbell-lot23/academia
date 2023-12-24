import React, { useEffect, useState } from "react";
import { diffLines } from "diff";

interface DiffProps {
  format?: "embed" | "standalone";
}

const Diff: React.FC<DiffProps> = ({ format = "embed" }) => {
  const [diffResult, setDiffResult] = useState([]);

  useEffect(() => {
    const fetchFilesAndCompare = async () => {
      const resFiles = await fetch("/weeks.json");
      const { weeks } = await resFiles.json();
      console.log(weeks);

      if (weeks.length < 2) {
        return;
      }

      const filename = weeks[weeks.length - 1];
      const previousFilename = weeks[weeks.length - 2];

      const res1 = await fetch(`/api/fetchVersion?filename=${filename}`);
      const data1 = await res1.json();

      const res2 = await fetch(
        `/api/fetchVersion?filename=${previousFilename}`
      );
      const data2 = await res2.json();

      const changes = diffLines(data2.content, data1.content);
      setDiffResult(changes);
    };

    fetchFilesAndCompare();
  }, []);

  const displayDiffResult =
    format === "embed" ? diffResult.slice(0, 10) : diffResult;

  return (
    <div className="container px-4 mx-auto mt-16">
      <p>Format: {format}</p>
      {displayDiffResult.map((part, index) => (
        <span
          key={index}
          className={
            part.added
              ? "text-green-700 whitespace-pre-wrap bg-green-100 px-1"
              : part.removed
              ? "text-red-500 whitespace-pre-wrap bg-red-50 px-1 line-through"
              : "whitespace-pre-wrap"
          }
        >
          {part.value}
        </span>
      ))}
    </div>
  );
};

export default Diff;
