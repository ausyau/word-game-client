import React, { Component } from 'react';
import "./Navbar.css";

const logo = require('../../img/LI-Logo.png');

export default class NavBar extends Component {

  render() {
    return (
      <div className="NavContainer">
        <img className="LI-Logo" src={logo} />
        <div className="NavBar">
          <div className="GameTitle">Word Game</div>
        </div>
      </div>
    );
  }
}
