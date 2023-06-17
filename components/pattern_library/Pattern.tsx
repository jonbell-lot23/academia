import React from "react";

interface PatternProps {
  name: string;
}

const Pattern: React.FC<PatternProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Pattern;
