import React from 'react';

const Eight = () => {
  const calculation = 53 + 47;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Eight is: {calculation}
    </div>
  );
};

export default Eight;
