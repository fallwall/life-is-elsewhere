import React from 'react';
import ProgressBar from './ProgressBar';

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        name
      </div>
      <div className="topnav-right">
        <ProgressBar />
        <div className="topnav-right-title">
          tittle
        </div>
      </div>
    </div>
  )
}

export default TopNav;
