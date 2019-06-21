import React, { useState, useEffect } from "react";

function StateCounter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, World");

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${message}`;
  });

  const handleClick = () => {
    setCount(count + 1);
    setMessage("Hello, Count " + (count + 1) + " Times.");
    console.log(message);
  };

  return (
    <div id="panel">
      <h1>Hook: useState()</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default StateCounter;
