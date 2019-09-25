import React, { Component } from 'react'

export default class GuessedLetters extends Component {
  render() {
    console.log("Guessed Letters", this.props)
    return (
      <div>
        All Guessed Letters
      </div>
    )
  }
}
