import React from 'react';

const Seven = () => {
  const calculation = 5 + 6;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Seven is: {calculation}
    </div>
  );
};

export default Seven;
