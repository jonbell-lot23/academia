import React from 'react';

const Two = () => {
  const calculation = 73 + 44;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Two is: {calculation}
    </div>
  );
};

export default Two;
