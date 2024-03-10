import React from "react";

type DataResultProps = {
  data: {
    category: string;
    task: string;
    flow: string;
    insight: string;
    devEffort: string;
    readerEffort: string;
    fitts: string;
    hicks: string;
    raskinE: string;
    tlmSequence: string;
    tlmTime: string;
    passOrFail: string;
  }[];
};

const DataResults: React.FC<DataResultProps> = ({ data }) => {
  return <div>Hello</div>;
};

export default DataResults;
