import React, { Component } from 'react';
import Card from './components/card/card.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
        </header>
        <Card />
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
