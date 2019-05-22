import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeelTheForce from './FeelTheForce';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-1">Test field below&#x21e9;</h1>
        <div className="align-items-center">
          <FeelTheForce />
        </div>
      </header>
    </div>
  );
}

export default App;
