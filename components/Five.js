import React from 'react';

const Five = () => {
  const calculation = 28 + 24;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Five is: {calculation}
    </div>
  );
};

export default Five;
