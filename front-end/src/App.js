import React, { Component } from 'react';
import './App.css';

//Components
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="row">
          <SidePanel></SidePanel>
          <Main></Main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;