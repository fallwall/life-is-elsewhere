import React from 'react';
import ProgressBar from './ProgressBar';

const Nav = (props) => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        name
      </div>
      <div className="topnav-right">
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
