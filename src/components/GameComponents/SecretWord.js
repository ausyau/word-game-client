import React, { Component } from 'react';

export default class SecretWord extends Component {
  
  render() {
    return (
      <div className="SecretWordContainer">
        <h1 className="SecretWord"> {this.props.current()}</h1>
      </div>
    );
  }
}
