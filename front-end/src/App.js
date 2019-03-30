import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Components
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar}/>
          <div className="row">
            <Route path="/" component={SidePanel}/>
            <Main></Main>
          </div>
          <Route path="/" component={Footer}/>
        </div>
      </Router>
    );
  }
}

export default App;