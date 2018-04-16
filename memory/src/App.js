import React, { Component } from 'react';
import Design from './components/design/design.js';
import logo from './logo.svg';
import design from './design.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
        </header>
        <Design />
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
