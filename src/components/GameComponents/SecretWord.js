import React, { Component } from 'react'

export default class SecretWord extends Component {
  
  render() {
    return (
      <div>
        <h1> {this.props.current()}</h1>
      </div>
    )
  }
}
