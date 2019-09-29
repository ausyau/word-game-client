import React, { Component } from 'react';

export default class RemainingGuesses extends Component {
  render() {
    return (
      <div className="RemainingGuessesContainer">
        <div className="InterfaceHeader"> Remaining Guesses:</div>
        <div id="RemainingGuesses">{this.props.remainingGuesses}</div>
      </div>
    );
  }
}
