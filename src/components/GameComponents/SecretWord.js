import React, { Component } from 'react'

export default class SecretWord extends Component {
  
  render() {
    return (
      <div>
        <h1 style={{letterSpacing: "0.2em"}}> {this.props.current()}</h1>
      </div>
    )
  }
}
