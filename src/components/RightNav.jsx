import React, { useState, useEffect } from 'react';
import './RightNav.css';

const RightNav = (props) => {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    return () => {
      setBurger(false);
    }
  }, [props])


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

      </div>
      {
        burger && (<div className="rightnav-extended">
          <ul>
            <li onClick={props.go2WorldMap}>World Map >>></li>
            <li onClick={props.go2ToBeVisited}>Bucket List >>></li>
            <li onClick={props.go2Visited}>Visited >>></li>
          </ul>
        </div>)
      }
    </>
  )
}

export default RightNav;