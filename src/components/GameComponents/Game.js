import React, { Component } from 'react';
import GameApi from '../../helpers/GameApi';
import InputForm from './InputForm';
import SecretWord from './SecretWord';
import GuessedLetters from './GuessedLetters';
import RemainingGuesses from './RemainingGuesses';
import GameEnd from './GameEnd';
import './GameMenu.css';
import './Game.css';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      secretWord: "",
      remainingGuesses: 6,
      guessedLetters: new Set(),
      gameStatus: null
    };

    this.guessedWord = this.guessedWord.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }
  componentDidMount() {
    this.startGame();
  }

  /**
   * Function starts a game with a new word. 
   * 
   * @param {*}  
   */
  async startGame() {
    const { difficulty, maxLength } = this.props;
    let settings = { difficulty, maxLength };
    let response = await GameApi.getWords(settings);
    let words = response.words;

    this.setNewWord(words);
  }

  /**
   * Helper function takes a random new word from the array of words provided to be the secret word
   * In a rare event the random new word is the same, the function recursively calls itself for
   * a new word. 
   * 
   * @param {*} words - array of words
   */
  setNewWord(words) {
    let newSecretWord = words[Math.floor(Math.random() * words.length)];
    if (newSecretWord === this.state.secretWord) {
      this.setNewWord(words);
    } else {
      this.setState({ secretWord: newSecretWord });
    }
  }

  /**
   * Function that passes on the current secret word status. If the correct letter has been guessed,
   * the letter will be revealed, otherwise it is an underscore
   */
  guessedWord() {
    const { secretWord } = this.state;
    return [...secretWord].map(letter => (this.state.guessedLetters.has(letter) ? letter : "_"));
  }

  /**
   * Function that handles the user guess for either a single letter or an entire word
   * 
   * @param {*} guess - String either a single letter or word
   */
  submitGuess(guess) {
    guess.length > 1 ? this.handleWordGuess(guess) : this.handleLetterGuess(guess);
  }

  /**
   * Function that handles a guess of a single letter
   * 
   * @param {*} guess - String single letter
   */
  handleLetterGuess(guess) {
    guess = guess.toLowerCase();
    let value = this.state.secretWord.includes(guess) || this.state.guessedLetters.has(guess) ? 0 : 1;
    this.setState(st => ({
      guessedLetters: st.guessedLetters.add(guess),
      remainingGuesses: st.remainingGuesses - value
    }), () => { this.setGameStatus(); });
  }

  /**
    * Function that handles a guess of a word
    * 
    * @param {*} guess - String word
    */
  handleWordGuess(guess) {
    if (guess === this.state.secretWord) {
      this.setState(st => ({
        ...st,
        guessedLetters: new Set([...st.guessedLetters, ...guess])
      }), () => { this.setGameStatus(); });
    } else {
      this.setState(st => ({
        remainingGuesses: st.remainingGuesses - 1
      }), () => { this.setGameStatus(); });
    }
  }

  /**
   * Function checks to see if the user has guessed all the letters in the word
   * Sets the game status to true for a victory, false for loss
   */
  setGameStatus() {
    let winner = Array.from(this.state.secretWord)
      .every((letter) => (this.state.guessedLetters.has(letter)
      ));
    if (winner) {
      this.setState({
        gameStatus: true
      });
    }
    if (this.state.remainingGuesses === 0) {
      this.setState({
        gameStatus: false
      });
    }
  }

  /**
   * Function displays a victory or loss message and allows user to play again
   */
  updateGameStatus() {
    const winMessage = `You won!`;
    const loseMessage = `You lost! The secret word was '${this.state.secretWord}'`;

    if (this.state.gameStatus) {
      return (
        <GameEnd message={winMessage} toggleMenu={this.props.toggleMenu} />
      );
    } else if (this.state.gameStatus === false) {
      return (
        <GameEnd message={loseMessage} toggleMenu={this.props.toggleMenu} />
      );
    }
  }

  render() {
    return (
      <div className="Game">
        <div style={{display: "flex", flexDirection: "column", width: "1000px"}}>
          <SecretWord current={this.guessedWord} />
          <div className="UserInterface">
            <RemainingGuesses remainingGuesses={this.state.remainingGuesses}/>
            <div className="UserInput">
              <GuessedLetters guessedLetters={this.state.guessedLetters} secretWord={this.state.secretWord} />
              <InputForm submitGuess={this.submitGuess} remainingGuesses={this.state.remainingGuesses} gameStatus={this.state.gameStatus} />
            </div>
          </div>
          {this.updateGameStatus()}
        </div>
      </div>
    );
  }
}
