import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';
import Visited from './pages/Visited';
import ToBeVisited from './pages/ToBeVisited';
import RightNav from './components/RightNav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMain: true,
      isVisited: false,
      isToBeVisited: false
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.isMain && <Main />}
        {this.state.isVisited && <Visited />}
        {this.state.isToBeVisited && <ToBeVisited />}
        <RightNav />
        <Footer />
      </div>
    );
  }
}

export default App;
