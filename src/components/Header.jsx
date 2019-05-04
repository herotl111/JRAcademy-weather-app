import React from 'react';
import logo from '../images/logo.png';

const Header = props => {
  return (
    <header>
      <img className='header__logo' src={logo} />
      <h1 className='header__title'>Weather Channel</h1>
    </header>
  );
};

export default Header;
