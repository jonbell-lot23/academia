import React from 'react';

const Three = () => {
  const calculation = 45 + 81;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Three is: {calculation}
    </div>
  );
};

export default Three;
