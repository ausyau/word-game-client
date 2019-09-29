import React, { Component } from 'react';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default class GameMenuOptions extends Component {
  render() {
    return (
      <div className="GameMenuOptions">
        <form onSubmit={this.props.handleSubmit} style={{ fontSize: "1.3em" }}>
          <div className="GameOption">
            <label htmlFor="difficulty">
              Select difficulty
            </label>
            <select name="difficulty" difficulty={this.props.difficulty} onChange={this.props.handleChange}>
              {numbers.slice(0, 10).map(num => (
                <option difficulty={num}>{num}</option> 
              ))}
            </select>
          </div>
          <div className="GameOption">
            <label htmlFor="maxLength">
              Select max word length
            </label>
            <select name="maxLength" maxLength={this.props.maxLength} onChange={this.props.handleChange}>
              <option maxLength="None">None</option>
              {numbers.slice(4, 15).map(num => (
                <option difficulty={num}>{num}</option> 
              ))}
            </select>
          </div>
          <button className="StartButton">Start Game!</button>
        </form>
      </div>
    );
  }
}
