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
      secretWord: "belly",
      remainingGuesses: 6,
      guessedLetters: new Set(),
      gameStatus: null
    };

    this.guessedWord = this.guessedWord.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }

  componentDidUpdate() {
    this.checkGameStatus()
  }

  guessedWord() {
    const { secretWord } = this.state;
    return [...secretWord].map(letter => (this.state.guessedLetters.has(letter) ? letter : "_"));
  }

  submitGuess(guess) {
    guess.length > 1 ? this.handleWordGuess(guess) : this.handleLetterGuess(guess)
  }

  handleLetterGuess(guess) {
    guess = guess.toLowerCase();
    let value = this.state.secretWord.includes(guess) || this.state.guessedLetters.has(guess) ? 0 : 1
      this.setState(st => ({
        guessedLetters: st.guessedLetters.add(guess),
        remainingGuesses: st.remainingGuesses - value
      }), () => { this.setGameStatus() })
  }

  handleWordGuess(guess) {
    if (guess === this.state.secretWord) {
      this.setState(st => ({
        ...st,
        guessedLetters: new Set([...st.guessedLetters, ...guess])
      }), () => { this.setGameStatus() })
    } else {
      this.setState(st => ({
        remainingGuesses: st.remainingGuesses - 1
      }), () => { this.setGameStatus() })
    }
  }

  setGameStatus() {
    let winner = Array.from(this.state.secretWord)
      .every((letter) => (this.state.guessedLetters.has(letter)
      ))
    if (winner) {
      this.setState({
        gameStatus: true
      })
    }
    if (this.state.remainingGuesses === 0) {
      this.setState({
        gameStatus: false
      })
    }
  }

  checkGameStatus() {
    const { gameStatus } = this.state;
    if (gameStatus) {
      this.winGame()
    } else if (gameStatus === false) {
      this.loseGame()
    }

  }
  winGame() {
    console.log("You win!")
  }

  loseGame() {
    console.log("You lose!");
  }

  render() {

    return (
      <div className="Game">
        <SecretWord current={this.guessedWord} />
        <GuessedLetters guessedLetters={this.state.guessedLetters} secretWord={this.state.secretWord} remainingGuesses={this.state.remainingGuesses}/>
        <InputForm submitGuess={this.submitGuess} remainingGuesses={this.state.remainingGuesses} gameStatus={this.state.gameStatus} />
      </div>
    )
  }
}
