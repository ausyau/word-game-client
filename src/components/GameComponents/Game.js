import React, { Component } from 'react'
import InputForm from './InputForm'
import SecretWord from './SecretWord'
import GuessedLetters from './GuessedLetters'
import RemainingGuesses from './RemainingGuesses'


export default class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: "",
      secretWord: "hello",
      remainingGuesses: 6,
      guessedLetters: new Set(["e", "l"])
    };

    this.guessedWord = this.guessedWord.bind(this);
  }

  guessedWord() {
    return this.state.secretWord
      .split("")
      .map(letter => (this.state.guessedLetters.has(letter) ? letter : "_"));
  }

  submitGuess(evt) {
    let guess = evt.target.value;
    if(guess.length > 1) {
      
    }
  }

  render() {
    return (
      <div className="game">
        <SecretWord current={this.guessedWord}/>
        <GuessedLetters guessedLetters={this.state.guessedLetters}/>
        <RemainingGuesses />
        <InputForm></InputForm>

      </div>
    )
  }
}
