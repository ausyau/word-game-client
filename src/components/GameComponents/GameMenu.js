import React, { Component } from 'react';
import Game from './Game';
import GameMenuOptions from './GameMenuOptions';

export default class GameMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: true,
      difficulty: "1",
      maxLength: "None"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      selection: false
    }, () => console.log("New state", this.state));
  }

  toggleMenu() {
    this.setState({
      selection: true
    });
  }

  render() {
    return (
      <div className="GameMenu">
        {this.state.selection ? <GameMenuOptions handleChange={this.handleChange} maxLength = {this.state.maxLength} difficulty={this.state.difficulty} handleSubmit={this.handleSubmit} /> : <Game difficulty={this.state.difficulty} maxLength={this.state.maxLength} toggleMenu={this.toggleMenu} />}
      </div>
    );
  }
}
