import React, { useState } from 'react';
import './RightNav.css';

const RightNav = () => {
  const [burger, setBurger] = useState(false);
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
      </div>
      {burger && (<div className="rightnav-extended">
        here is long menu and stuff
      </div>)}
    </>
  )
}

export default RightNav;