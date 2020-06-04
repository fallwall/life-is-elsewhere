import React from 'react';
import Hero from '../components/Hero';
import Wordpress from '../components/Wordpress';

import './Main.css';

const Main = (props) => {
  return (
    <div className="page-main">
      <Hero />
      <Wordpress setPostID={props.setPostID}/>
    </div>
  )
}

export default Main;
