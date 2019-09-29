import React, { Component } from 'react';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default class GameMenuOptions extends Component {
  render() {
    return (
      <div className="GameMenuOptions">
        <form onSubmit={this.props.handleSubmit} style={{ fontSize: "1.3em" }}>
          <div className="GameOptionContainer">
            <label htmlFor="difficulty">
              Select difficulty
            </label>
            <div className="GameOption">
              <select name="difficulty" difficulty={this.props.difficulty} onChange={this.props.handleChange}>
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
          </div>

          <div className="GameOptionContainer">
            <label htmlFor="maxLength">
              Select max word length
            </label>
            <div className="GameOption" >
              <select name="maxLength" maxLength={this.props.maxLength} onChange={this.props.handleChange}>
                <option maxLength="None">None</option>
                {numbers.slice(4, 15).map(num => (
                  <option key={Math.random() * num} difficulty={num}>{num}</option> 
                ))}
              </select>
            </div>
          </div>
          
          <button className="StartButton">Start Game</button>
        </form>
      </div>
    );
  }
}
