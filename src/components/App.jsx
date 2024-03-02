import React, { useState } from "react";

function App() {
  const [ItemInput, updateItemInput] = useState();

  function captureInput(event) {
    const { value } = event.target;
    updateItemInput(value);
  }

  const [newItem, updateNewItem] = useState("");

  function addToList() {
    updateNewItem((prevValue) => {
      return [...prevValue, <li>{ItemInput}</li>];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={captureInput} type="text" />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{newItem}</ul>
      </div>
    </div>
  );
}

export default App;
