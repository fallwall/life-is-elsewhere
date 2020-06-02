import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';
import Post from './pages/Post';
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
      isPost: false,
      postID: null,
      isVisited: false,
      isToBeVisited: false
    }
  }

  setPostID = (postID) => {
    this.setState({
      isMain: false,
      isPost: true,
      postID
    })
  }

  return2Main = () => {
    this.setState({
      isMain: true,
      isPost: false,
      postID: null
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.isMain && <Main
          seetPostID={this.setPostID}
        />}
        {this.state.isPost && <Post
          return2Main={this.return2Main}
          postID={this.state.postID} />}
        {this.state.isVisited && <Visited />}
        {this.state.isToBeVisited && <ToBeVisited />}
        <RightNav />
        <Footer />
      </div>
    );
  }
}

export default App;
