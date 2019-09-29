import React, { Component } from 'react';

export default class GameEnd extends Component {

  render() {
    return (
      <div className="GameEndContainer">
        <div className="GameMessage">{this.props.message}</div>
        <button onClick={this.props.toggleMenu}>Play again</button>
      </div>
    );
  }
}
