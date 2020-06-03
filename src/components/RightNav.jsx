import React, { useState, useEffect } from 'react';
import './RightNav.css';

const RightNav = (props) => {
  const [burger, setBurger] = useState(false);
  const [pageY, setPageY] = useState(0);
  useEffect(() => {
    const pageY = window.screen.height;
    setPageY(pageY);
  }, [])

  return (
    <>
      <div className="rightnav">
        <button
          onClick={() => setBurger(!burger)}
          className={burger ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"}
          type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="rightnav-bottom">
        </div>
      </div>
      {burger && (<div className="rightnav-extended">
        here is extende menu.
      </div>)}
    </>
  )
}

export default RightNav;