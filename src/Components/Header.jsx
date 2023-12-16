// Header.js
import React from 'react';
import logo from '../assets/logo.svg';
import withAnimation from '../hocs/withAnimation'

const Header = () => {
  return (
    <header className='head'>
      <img src={logo} alt="" />
    </header>
  );
};

export default withAnimation(Header);
