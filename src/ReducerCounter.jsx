import React, { useReducer } from "react";

const initialCountState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`invalid ${action.type}`);
  }
}

const initialSwitchState = { switch: false };

function switchReducer(state, action) {
  return { switch: !state.switch };
}

function ReducerCounter() {
  const [countState, countDispatch] = useReducer(
    countReducer,
    initialCountState
  );
  const [switchState, switchDispatch] = useReducer(
    switchReducer,
    initialSwitchState
  );

  return (
    <div id="panel">
      <h1>Hook: useReducer()</h1>
      <p>Count: {countState.count}</p>
      <button onClick={() => countDispatch({ type: "increment" })}>
        Counter +
      </button>
      <button onClick={() => countDispatch({ type: "decrement" })}>
        Counter -
      </button>
      <p>Switch: {switchState.switch ? "on" : "off"}</p>
      <button onClick={() => switchDispatch()}>Switch</button>
    </div>
  );
}

export default ReducerCounter;
