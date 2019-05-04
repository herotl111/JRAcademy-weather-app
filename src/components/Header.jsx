import React from 'react';
import "../styles/header.css";
import logo from "../images/logo.png";

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" className="header__logo"/>
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}

export default Header;