import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random().toFixed(2), 
      },
    ]);
  }

  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={addItem}>Add Item</button>
    </>
  );
}

export default App;
