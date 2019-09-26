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
      guessedLetters: new Set(["e", "l"]),
      status: null
    };

    this.guessedWord = this.guessedWord.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }

  guessedWord() {
    const { secretWord } = this.state;
    return [...secretWord].map(letter => (this.state.guessedLetters.has(letter) ? letter : "_"));
  }

  submitGuess(guess) {
    if(guess.length > 1) {
      if (guess === this.state.secretWord) {
        this.setState(st => ({
          ...st,
          guessedLetters: new Set([...st.guessedLetters, ...guess])
        }))
      } else {
        this.setState(st => ({
          remainingGuesses: st.remainingGuesses -1
        }))
      }
    } else {
      this.setState(st => ({
        guessedLetters: st.guessedLetters.add(guess),
        remainingGuesses: st.remainingGuesses - (st.secretWord.includes(guess) ? 0 : 1)
      }))
    }
    this.checkGameStatus();
  }

  handleGuess(guess) {

  }
  setGameStatus() {
    
  }

  checkGameStatus() {
    // Logic to win game first
  

    if(this.state.remainingGuesses === 0) {
      this.setState({
        status: false
      })
    }
    console.log("Checking status");
  }
  winGame() {

  }

  loseGame() {
    console.log("You lose!");
  }

  render() {
    return (
      <div className="Game">
        <SecretWord current={this.guessedWord}/>
        <GuessedLetters guessedLetters={this.state.guessedLetters}/>
        <RemainingGuesses remainingGuesses={this.state.remainingGuesses}/>
        <InputForm submitGuess={this.submitGuess}/>
      </div>
    )
  }
}
