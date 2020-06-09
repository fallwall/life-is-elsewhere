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
      isWorldMap: false,
      prevScrollpos: window.pageYOffset
    }
  }

  componentDidMount = () => {
    localStorage.removeItem('postTitle');
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);

  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // const el = document.getElementsByClassName("footer");
    this.setState({
      prevScrollpos: currentScrollPos
    });

    // const { prevScrollpos } = this.state;

    // const body = document.body;
    // const html = document.documentElement;
    // const height = Math.max(body.scrollHeight, body.offsetHeight,
    //   html.clientHeight, html.scrollHeight, html.offsetHeight);
    // const secHeight = el[0].offsetTop - el[0].clientHeight;
    // console.log(height);
    // this.state.prevScrollpos && console.log(height - this.state.prevScrollpos-1000);
    // console.log(1040 - el[0].getBoundingClientRect().bottom);
    // console.log(this.state.prevScrollpos + el[0].getBoundingClientRect().top);
    // var offsetTop = window.pageYOffset + rect.top - rect.height;
  };


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
          prevScrollpos={this.state.prevScrollpos}
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
          prevScrollpos={this.state.prevScrollpos}
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
