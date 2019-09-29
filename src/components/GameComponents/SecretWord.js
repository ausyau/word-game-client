import React, { Component } from 'react';

export default class SecretWord extends Component {
  render() {
    return (
      <div className="SecretWordContainer">
        <div className="SecretWord"> {this.props.current()}</div>
      </div>
    );
  }
}
