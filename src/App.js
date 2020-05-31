import React, { Component } from 'react';
import TopNav from './components/TopNav';
import Nav from './components/Nav';
import Main from './pages/Main';
import RightNav from './components/RightNav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMain: true
    }
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <Nav />
        {this.state.isMain && <Main />}
        <RightNav />
        <Footer />
      </div>
    );
  }
}

export default App;
