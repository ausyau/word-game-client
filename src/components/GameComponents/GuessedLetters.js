import React, { Component } from 'react';
import RemainingGuesses from './RemainingGuesses';

const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
export default class GuessedLetters extends Component {

  hasWord(letter) {
    letter = letter.toLowerCase();
    if(this.props.secretWord.includes(letter) && this.props.guessedLetters.has(letter)) {
      return {color: 'green'};
    }
    if(this.props.guessedLetters.has(letter)) {
      return {color: 'red'};
    }
  }

  render() {
    return (
      <div>
        <RemainingGuesses remainingGuesses={this.props.remainingGuesses}/>
        <div className="Guessed-Letters" style={
          { display: "grid", 
            justifyContent: "center", 
            alignContent: "start", 
            gridTemplateColumns: "25px 25px 25px 25px 25px 25px 25px", 
            gridTemplateRows: "25px 25px 25px 25px" 
          }}>
          <h2 style={{...this.hasWord(letters[0]), gridColumn: 1}}>{letters[0]}</h2>
          <h2 style={{...this.hasWord(letters[1]), gridColumn: 2}}>{letters[1]}</h2>
          <h2 style={{...this.hasWord(letters[2]), gridColumn: 3}}>{letters[2]}</h2>
          <h2 style={{...this.hasWord(letters[3]), gridColumn: 4}}>{letters[3]}</h2>
          <h2 style={{...this.hasWord(letters[4]), gridColumn: 5}}>{letters[4]}</h2>
          <h2 style={{...this.hasWord(letters[5]), gridColumn: 6}}>{letters[5]}</h2>
          <h2 style={{...this.hasWord(letters[6]), gridColumn: 7}}>{letters[6]}</h2>
          {letters.slice(7).map(l => (
            <h2 key={l} style={this.hasWord(l)}>{l}</h2>
          ))}
        </div>
      </div>
    );
  }
}
