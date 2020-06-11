import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;
    this.setState({
      scrolled: scrolled
    });
  };


  render() {
    const title = localStorage.getItem('postTitle');
    const progressContainerStyle = {
      background: "white",
      height: "20px",
      position: "relative",
      top: -14,
      left: 0,
      width: "120%",
      margin: "0 -4% auto -1.4%"

    };

    const progressBarStyle = {
      height: "120%",
      background: "black",
      transition: "width .1s ease-in",
      width: this.state.scrolled
    };

    return (
      <div className="topnav">
        <div className="topnav-left"
          onClick={this.props.return2Main}>
          <h1>Life is Elsewhere</h1>
        </div>
        <div className={this.props.postID === null ? "topnav-hidden" : "topnav-right"}>

          <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div>

          <div className={this.props.postID === null ? "topnav-right-title-hidden" : "topnav-right-title"}>
            {title}
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
