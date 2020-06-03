import React, { useState, useEffect} from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
  const [screenY, setScreenY] = useState(0);
  useEffect(() => {
    const pageY = window.screen.height * 0.7;
    setScreenY(pageY);
  }, [])

  console.log(props.prevScrollpos / screenY);
  const fillerStyle = {
    width: `${100 * props.prevScrollpos / screenY}%`
  }

  return (
    <div className={props.postID !== null? "nav-progressbar":"hidden"}>
      <div className="filler" style={fillerStyle}/>
    </div>
  )
}

export default ProgressBar;
