import React, { Component } from 'react';
import "./Navbar.css";


const logo = require('../../img/LI-Logo.png');

export default class NavBar extends Component {

  render() {
    return (
      <div className="NavContainer" style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <img style={{ maxHeight: "40px" }} src={logo} />
        <div className="NavBar" style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
          <div style={{ fontFamily: "myriad-pro", fontSize: "65px", paddingTop: "75px" }}>Word Game</div>
        </div>
      </div>
    );
  }
}
