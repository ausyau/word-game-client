import React, { Component } from 'react'

export default class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userGuess: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    // Game logic, submits the word
  }

  handleChange(evt) {
    this.setState({
      userGuess: evt.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userGuess"></label>
        <input name="userGuess" value={this.state.userGuess} onChange={this.handleChange}/>
        <button>Guess</button>
      </form>
    )
  }
}
