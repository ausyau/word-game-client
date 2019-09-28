import React, { Component } from 'react'

const logo = require('../../img/LI-Logo.png');

export default class NavBar extends Component {

  render() {
    return (
      <div className="NavContainer" style={{ marginTop: "20px", fontSize: "65px", display: "flex", justifyContent: "center" }}>
        <div className="NavBar"style={{ padding: "10px", width: "900px", display: "flex", justifyContent: "flex-start" }}>
          <img style={{ maxHeight: "83px" }} src={logo} />
          <div style={{ fontFamily: "myriad-pro", width: "600px"}}>Word Game</div>
        </div>
      </div>
    )
  }
}
