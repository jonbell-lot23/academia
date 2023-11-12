import React from 'react';

const One = () => {
  const calculation = 28 + 54;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component One is: {calculation}
    </div>
  );
};

export default One;
