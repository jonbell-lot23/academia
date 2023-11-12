import React from 'react';

const Ten = () => {
  const calculation = 51 + 5;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Ten is: {calculation}
    </div>
  );
};

export default Ten;
