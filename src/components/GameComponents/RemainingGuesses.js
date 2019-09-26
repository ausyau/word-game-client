import React, { Component } from 'react'

export default class RemainingGuesses extends Component {
  render() {
    return (
      <div>
        <h3> {this.props.remainingGuesses} </h3>
      </div>
    )
  }
}
