import React, { useMemo, useState } from "react";

const MemoField = () => {
  const [value, setValue] = useState("");

  const memoizedValue = useMemo(() => {
    console.log("useMemo called");
    return value;
  }, [value]);

  const handleClick = () => {
    const rd = Math.floor(Math.random() * 10);
    if (rd > 5) {
      setValue("Hello Memoization, " + rd);
    } else {
      setValue("Hello Memoization, I am a constant value.");
    }
  };

  return (
    <div id="panel">
      <h1>useMemo() returns a memoized value</h1>
      <p>{memoizedValue}</p>
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
};

export default MemoField;
