import React from 'react';
import './App.css';
import StateCounter from './StateCounter';
import ReducerCounter from './ReducerCounter';
import MemoField from './MemoField';

function App() {
  return (
    <div className="App">
      <StateCounter />
      <ReducerCounter />
      <MemoField />
    </div>
  );
}

export default App;
