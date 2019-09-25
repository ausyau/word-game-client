import React, { Component } from 'react'

const logo = require('../../img/LI-Logo.png');

export default class sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <img src={logo} />
      </div>
    )
  }
}
