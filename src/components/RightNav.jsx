import React, { useState, useEffect } from 'react';
import './RightNav.css';

const RightNav = (props) => {
  const [burger, setBurger] = useState(false);
   useEffect(() => {
    return () => {
      setBurger(false);
    }
   }, [props])
  
  // const [pageY, setPageY] = useState(0);
  // const [perc, setPerc] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const height = Math.max(body.scrollHeight, body.offsetHeight,
  //       html.clientHeight, html.scrollHeight, html.offsetHeight);
  //     height !== 699 && setPageY(height);
  //     setPerc(-pageY + 1040 + props.prevScrollpos);
      // console.log(perc);
  //   }
  // }, [props.prevScrollpos])

  // const bottomStyle = {
  //   height: `${perc}px`
  // }

  return (
    <>
      <div className="rightnav">
        <div className="rightnav-top">
          <button
            onClick={() => setBurger(!burger)}
            className={burger ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"}
            type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        {/* <div
          style={bottomStyle}
          className={perc > 0 ? "rightnav-bottom" : "hidden"}>
        </div> */}
      </div>
      {
        burger && (<div className="rightnav-extended">
          <ul>
            <li>World Map</li>
            <li onClick={props.go2ToBeVisited}>Bucket List</li>
            <li onClick={props.go2Visited}>Visited</li>
          </ul>
        </div>)
      }
    </>
  )
}

export default RightNav;