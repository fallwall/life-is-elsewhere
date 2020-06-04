import React from 'react';
import ProgressBar from './ProgressBar';

const Nav = (props) => {
  const title = localStorage.getItem('postTitle');
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
        <div className={props.postID === null? "topnav-right-title-hidden":"topnav-right-title"}>
          {title}
        </div>
      </div>
    </div>
  )
}

export default Nav;
