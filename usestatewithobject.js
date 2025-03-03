// Using useState with an Object in React (Easy Explanation)
// In React, when using useState with an object, we need to update the state correctly without losing the previous values.

// How Does It Work?
// Initial State: We define an object { firstname: "Durgaprasad", lastname: "Parmar" } using useState.
// Updating State: When the button is clicked, we update firstname while keeping lastname unchanged.
// Spread Operator (...allvalues) ensures we don’t lose other properties.
// Code Example
\
import { useState } from "react";

function App() {
  // Defining state with an object
  const [allvalues, setvalues] = useState({
    firstname: "Durgaprasad",
    lastname: "Parmar",
  });

  // Function to update only 'firstname'
  function update() {
    setvalues({ ...allvalues, firstname: "Karan" });
  }

  return (
    <>
      <h1>
        My first name is {allvalues.firstname} and last name is {allvalues.lastname}
      </h1>
      <button onClick={update}>Update</button>
    </>
  );
}

export default App;

/*
🔹 Key Points to Remember
✅ Use the spread operator (...allvalues) to keep the existing properties.
✅ Only update the necessary field (in this case, firstname).
✅ State updates trigger re-rendering to reflect the changes in UI.

Would you like an example where both firstname and lastname can be updated dynamically with input fields? 😊

*/