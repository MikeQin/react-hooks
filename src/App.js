import React from 'react';
import './App.css';
import StateCounter from './StateCounter';
import ReducerCounter from './ReducerCounter';

function App() {
  return (
    <div className="App">
      <StateCounter />
      <ReducerCounter />
    </div>
  );
}

export default App;
