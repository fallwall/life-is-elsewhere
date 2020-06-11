import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';
import Post from './pages/Post';
import Visited from './pages/Visited';
import ToBeVisited from './pages/ToBeVisited';
import WorldMap from './pages/WorldMap';
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
      isToBeVisited: false,
      isWorldMap: false
    }
  }

  componentDidMount = () => {
    localStorage.removeItem('postTitle');
  }

  setPostID = (postID) => {
    this.setState({
      isMain: false,
      isPost: true,
      postID: parseInt(postID)
    })
  }

  return2Main = () => {
    this.setState({
      isMain: true,
      isPost: false,
      postID: null,
      isVisited: false,
      isToBeVisited: false,
      isWorldMap: false
    })
    window.scrollTo(0, 0);
  }

  go2Visited = () => {
    this.setState({
      isMain: false,
      isPost: false,
      postID: null,
      isVisited: true,
      isToBeVisited: false,
      isWorldMap: false
    })
    window.scrollTo(0, 0);
  }

  go2ToBeVisited = () => {
    this.setState({
      isMain: false,
      isPost: false,
      postID: null,
      isVisited: false,
      isToBeVisited: true,
      isWorldMap: false
    })
    window.scrollTo(0, 0);
  }

  go2WorldMap = () => {
    this.setState({
      isMain: false,
      isPost: false,
      postID: null,
      isVisited: false,
      isToBeVisited: false,
      isWorldMap: true
    })
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <Nav
          postID={this.state.postID}
          return2Main={this.return2Main}
        />
        {this.state.isMain && <Main
          setPostID={this.setPostID}
        />}
        {this.state.isPost && <Post
          postID={this.state.postID} />}
        {this.state.isVisited && <Visited />}
        {this.state.isToBeVisited && <ToBeVisited />}
        {this.state.isWorldMap && <WorldMap />}
        <RightNav
          go2Visited={this.go2Visited}
          go2ToBeVisited={this.go2ToBeVisited}
          go2WorldMap={this.go2WorldMap}
        />
        <Footer
        />
      </div>
    );
  }
}

export default App;
