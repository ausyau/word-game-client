import React, { Component } from 'react';
import Game from './Game';


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
    });
  }

  toggleMenu() {
    this.setState({
      selection: true
    });
  }

  render() {
    let gameMenu =
      <div style={{display: "flex"}}> 
        <form onSubmit={this.handleSubmit} style={{ fontSize: "1.3em" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="difficulty">
              Select difficulty
            </label>
            <select name="difficulty" difficulty={this.state.difficulty} onChange={this.handleChange}>
              <option difficulty="1">1</option>
              <option difficulty="2">2</option>
              <option difficulty="3">3</option>
              <option difficulty="4">4</option>
              <option difficulty="5">5</option>
              <option difficulty="6">6</option>
              <option difficulty="7">7</option>
              <option difficulty="8">8</option>
              <option difficulty="9">9</option>
              <option difficulty="10">10</option>
            </select>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="maxLength">
              Select max word length
            </label>
            <select name="maxLength" maxLength={this.state.maxLength} onChange={this.handleChange}>
              <option maxLength="None">None</option>
              <option maxLength="5">5</option>
              <option maxLength="6">6</option>
              <option maxLength="7">7</option>
              <option maxLength="8">8</option>
              <option maxLength="9">9</option>
              <option maxLength="10">10</option>
              <option maxLength="11">11</option>
              <option maxLength="12">12</option>
              <option maxLength="13">13</option>
              <option maxLength="14">14</option>
              <option maxLength="15">15</option>
            </select>
          </div>
          <button>Start Game!</button>
        </form>
      </div>;

    return (
      <div className="GameMenu" style={{ marginLeft: "120px", display: "flex", justifyContent: "center"}}>
        {this.state.selection ? gameMenu : <Game difficulty={this.state.difficulty} maxLength={this.state.maxLength} toggleMenu={this.toggleMenu} />}
      </div>
    );
  }
}
