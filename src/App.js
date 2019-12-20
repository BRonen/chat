import React from 'react';
import Receiver from './components/receiver';
import Sender from './components/sender';
import './App.css';

function App(){
  return (
    <div className="App">
      <Sender />
      <Receiver />
    </div>
  );
}

export default App;
