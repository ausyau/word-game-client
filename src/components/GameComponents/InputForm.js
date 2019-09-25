import React, { Component } from 'react'

export default class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userGuess: ""
    };
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
      <form onSubmit={"hello world!"}>
        <label for="userGuess"></label>
        <input name="userGuess" value={this.state.userGuess} onChange= {() => this.handleChange()}/>

      </form>
    )
  }
}
