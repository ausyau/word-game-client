import React, { Component } from 'react';


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
    evt.preventDefault();
    this.props.submitGuess(this.state.userGuess);
    this.setState({
      userGuess: ""
    });
  }

  handleChange(evt) {
    this.setState({
      userGuess: evt.target.value
    });
  }

  render() {
    return (
      <div className="InputFormContainer">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userGuess"></label>
          <div className="InputAddOn">
            <input className="InputAddOn-field" name="userGuess" value={this.state.userGuess} placeholder="Enter a letter or word" onChange={this.handleChange} disabled={!this.props.remainingGuesses || this.props.gameStatus} />
            <button className="InputAddOn-item" disabled={!this.props.remainingGuesses || this.props.gameStatus}>Guess</button>
          </div>
        </form>
      </div>
    );
  }
}
