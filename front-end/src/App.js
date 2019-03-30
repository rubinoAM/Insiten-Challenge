import React, { Component } from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <p>Test</p>
      </div>
    );
  }
}

export default App;