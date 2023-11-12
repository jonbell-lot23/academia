import React from 'react';

const Four = () => {
  const calculation = 81 + 24;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Four is: {calculation}
    </div>
  );
};

export default Four;
