import React, { Component } from 'react';
import Game from './Game';

const menuOptions = {
  difficulty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  maxWordLength: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

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
    console.log("Change is happening", evt.target.name, evt.target.value);
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

    let gameMenu = <div className="GameMenuOptions">
      <form onSubmit={this.handleSubmit} style={{ fontSize: "1.3em" }}>
        <div className="GameOptionContainer">
          <label htmlFor="difficulty">
            Select difficulty
          </label>
          <div className="GameOption">
            <select name="difficulty" difficulty={this.state.difficulty} onChange={this.handleChange}>
              {menuOptions.difficulty.map(n => <option value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <div className="GameOptionContainer">
          <label htmlFor="maxLength">
            Select max word length
          </label>
          <div className="GameOption" >
            <select name="maxLength" maxLength={this.state.maxLength} onChange={this.handleChange}>
              <option maxLength="None">None</option>
              {menuOptions.maxWordLength.map(n => <option value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <button className="StartButton">Start Game</button>
      </form>
    </div>;

    return (
      <div className="GameMenu">
        {this.state.selection ? gameMenu : <Game difficulty={this.state.difficulty} maxLength={this.state.maxLength} toggleMenu={this.toggleMenu} />}
      </div>
    );
  }
}
