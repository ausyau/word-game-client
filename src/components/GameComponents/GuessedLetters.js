import React, { Component } from 'react';
import RemainingGuesses from './RemainingGuesses';

const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
export default class GuessedLetters extends Component {

  hasWord(letter) {
    letter = letter.toLowerCase();
    if (this.props.secretWord.includes(letter) && this.props.guessedLetters.has(letter)) {
      return { color: 'green', textDecoration: "line-through" };
    }
    if (this.props.guessedLetters.has(letter)) {
      return { color: 'red', textDecoration: "line-through" };
    }
  }

  render() {
    return (
      <div className="GuessedLettersContainer">
        <div className="InterfaceHeader">Guessed Letters</div>
        <div className="GuessedLetters">
          {letters.map(l => (
            <h2 key={l} style={this.hasWord(l)}>{l}</h2>
          ))}
        </div>
      </div>
    );
  }
}
