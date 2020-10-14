import React from 'react';
import '../main.scss';

function Navbar() {
  return (
    <div className="navbar-basic">
        <nav className="navbar-basic__container container-med">
            <a href="#" className="navbar-basic__home-link">
                <div className="navbar-basic__logo"></div>
                LOGO
            </a>
            <button type="button" className="navbar-basic__toggle" aria-label="Open navigation menu">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className="navbar-basic__menu">
            <ul className="navbar-basic__links">
                <li className="navbar-basic__item"><a className="navbar-basic__link" href="#">About</a></li>
                <li className="navbar-basic__item"><a className="navbar-basic__link" href="#">SASS</a></li>
                <li className="navbar-basic__item"><a className="navbar-basic__link" href="#">Javascript</a></li>
            </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
