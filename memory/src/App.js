import React, { Component } from 'react';
import Design from './components/design';
import logo from './logo.svg';
import design from './design.json';
import './App.css';

class App extends Component {

  state = {
    design,
    clickCounts: 0
  };

  clickImage = id => {
    const design = this.state.design.filter(design => design.id !==id);
    this.setState({ clickCounts: 1});
    console.log(this.state.clickCounts);
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
        </header>
        {this.state.design.map(design => (
          <Design image = {design.image}
          id = {design.id}
          clickImage = {this.clickImage}/>
          

        ))}

        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
