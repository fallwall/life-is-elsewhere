import React from 'react';
import Wordpress from '../components/Wordpress';

const Main = (props) => {
  return (
    <div className="page-main">
      never fear, main is here.
      <Wordpress setPostID={props.setPostID}/>
    </div>
  )
}

export default Main;
