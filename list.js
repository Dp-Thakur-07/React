// In React, you can use the .map() function to render a list of items dynamically. This is useful when displaying data from an array.

// Example: Rendering a List of Fruits

import React from "react";

const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Always use a unique key
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;