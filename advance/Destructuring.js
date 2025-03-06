// Destructuring in React is an easy and clean way to access props or state values. Here’s how you can do it in different ways:

// 1️⃣ Destructuring Props in Function Components
// ✅ Before (Without Destructuring)


const Name = (props) => {
  return <div>{props.fname} {props.lname}</div>;
};

// ✅ After (With Destructuring)


const Name = ({ fname, lname }) => {
  return <div>{fname} {lname}</div>;
};

// 👉 This makes the code cleaner and avoids writing props.fname, props.lname every time.

// 2️⃣ Destructuring Inside the Function
// Another way is to destructure inside the function body:


const Name = (props) => {
  const { fname, lname } = props; // Destructure inside the function
  return <div>{fname} {lname}</div>;
};



// 3️⃣ Destructuring State in Functional Components (useState Hook)

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Destructuring useState

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


// Instead of const state = useState(0); and then state[0], we destructure [count, setCount] for better readability.