import React from 'react';
import logo from '../images/logo.png';
import wind from '../images/icon-wind.png';

const Header = (props) => {
    return (
        <header>
            <img className="header__logo" scr = {logo} alt = "logo"   />
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}

export default Header;