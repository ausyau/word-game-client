import React, { Component } from 'react'

const logo = require('../../img/LI-Logo.png');

export default class NavBar extends Component {
  
  render() {
    return (
      <div className="NavBar" style={{fontSize: "55px", display: "flex", justifyContent:"center"}}>
        <img style={{maxWidth: "250px", position: "relative", top: "10px", left: "-50px"}} src={logo} />
        <div>Word Game</div>
      </div>
    )
  }
}
