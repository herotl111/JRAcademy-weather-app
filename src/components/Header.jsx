import React from 'react';
import imgLogo from '../images/logo.png';

const Header = (props) => {
    return (
        <header>
            <img className="header__logo" src={imgLogo} />
            <h1 className="header__title">Weather Channel</h1> 
        </header>
    );
}

export default Header;