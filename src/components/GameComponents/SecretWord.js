import React, { Component } from 'react'

export default class SecretWord extends Component {
  
  render() {
    return (
      <div>
        <h1 style={{fontSize: "12em", letterSpacing: "0.2em"}}> {this.props.current()}</h1>
      </div>
    )
  }
}
