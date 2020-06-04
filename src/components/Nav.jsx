import React from 'react';
import ProgressBar from './ProgressBar';

const Nav = (props) => {
  return (
    <div className="topnav">
      <div className="topnav-left"
        onClick={props.return2Main}>
        <h1>Life is Elsewhere</h1>
      </div>
      <div className={props.postID === null? "topnav-hidden":"topnav-right"}>
        <ProgressBar
          postID={props.postID}
          prevScrollpos={props.prevScrollpos}
        />
        <div className="topnav-right-title">
          tittle
        </div>
      </div>
    </div>
  )
}

export default Nav;
