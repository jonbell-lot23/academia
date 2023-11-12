import React from 'react';

const Six = () => {
  const calculation = 43 + 84;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component Six is: {calculation}
    </div>
  );
};

export default Six;
