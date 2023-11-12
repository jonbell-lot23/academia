#!/bin/bash

# Array of names for the components
names=("One" "Two" "Three" "Four" "Five" "Six" "Seven" "Eight" "Nine" "Ten")

for i in {0..9}; do
  # Generate two random numbers
  num1=$((RANDOM % 100))
  num2=$((RANDOM % 100))

  # Create the component file
  cat > "${names[$i]}.js" << EOF
import React from 'react';

const ${names[$i]} = () => {
  const calculation = $num1 + $num2;

  return (
    <div className="p-4 bg-blue-200 border border-blue-800 rounded-sm">
      The result of the calculation in component ${names[$i]} is: {calculation}
    </div>
  );
};

export default ${names[$i]};
EOF
done

echo "Components created."

