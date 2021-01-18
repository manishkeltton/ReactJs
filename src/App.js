import React, { Component } from 'react';
import './App.css';
import Product from './Product';


class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>React Tutorial</h1>
         <Product />
      </div>
    );
  }
}

export default App;
