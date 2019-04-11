import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
   
    return React.createElement('div', {className: 'App-header'}, "this is div", React.createElement('h1', null, "this is the nested h1 element"));
  }
}

export default App;
