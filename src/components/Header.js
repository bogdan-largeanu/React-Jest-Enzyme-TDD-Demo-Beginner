import React, { Component } from 'react';
//import logo from '../logo.svg';
import logoImg from '../images/logo.png'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logoImg} alt='Logo'  />
      </div>
    );
  }
}

export default Header;