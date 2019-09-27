import React, { Component } from 'react'

export default class RemainingGuesses extends Component {
  render() {
    return (
      <div>
        <h2> Remaining Guesses: {this.props.remainingGuesses} </h2>
      </div>
    )
  }
}
