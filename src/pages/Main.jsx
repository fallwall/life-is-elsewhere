import React from 'react';
import Wordpress from '../components/Wordpress';

const Main = (props) => {
  return (
    <div className="page-main">
      <Wordpress setPostID={props.setPostID}/>
    </div>
  )
}

export default Main;
