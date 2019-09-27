import React, { Component } from 'react'
import RemainingGuesses from './RemainingGuesses'

const letters = {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M",
  N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
}
export default class GuessedLetters extends Component {

  hasWord(letter) {
    letter = letter.toLowerCase();
    if(this.props.secretWord.includes(letter) && this.props.guessedLetters.has(letter)) {
      return {color: 'green'}
    }
    if(this.props.guessedLetters.has(letter)) {
      return {color: 'red'}
    }
  }

  render() {
    const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z } = letters
    return (
      <div style={{position: "fixed", left: "500px"}}>
        <RemainingGuesses remainingGuesses={this.props.remainingGuesses}/>
        <div className="Guessed-Letters" style={{ display: "grid", justifyContent: "center", alignContent: "start", gridTemplateColumns: "25px 25px 25px 25px 25px 25px 25px", gridTemplateRows: "25px 25px 25px 25px" }}>
          <h2 style={{...this.hasWord(A), gridColumn: 1}}>{A}</h2>
          <h2 style={{...this.hasWord(B), gridColumn: 2}}>{B}</h2>
          <h2 style={{...this.hasWord(C), gridColumn: 3}}>{C}</h2>
          <h2 style={{...this.hasWord(D), gridColumn: 4}}>{D}</h2>
          <h2 style={{...this.hasWord(E), gridColumn: 5}}>{E}</h2>
          <h2 style={{...this.hasWord(F), gridColumn: 6}}>{F}</h2>
          <h2 style={{...this.hasWord(G), gridColumn: 7}}>{G}</h2>
          <h2 style={this.hasWord(H)}>{H}</h2>
          <h2 style={this.hasWord(I)}>{I}</h2>
          <h2 style={this.hasWord(J)}>{J}</h2>
          <h2 style={this.hasWord(K)}>{K}</h2>
          <h2 style={this.hasWord(L)}>{L}</h2>
          <h2 style={this.hasWord(M)}>{M}</h2>
          <h2 style={this.hasWord(N)}>{N}</h2>
          <h2 style={this.hasWord(O)}>{O}</h2>
          <h2 style={this.hasWord(P)}>{P}</h2>
          <h2 style={this.hasWord(Q)}>{Q}</h2>
          <h2 style={this.hasWord(R)}>{R}</h2>
          <h2 style={this.hasWord(S)}>{S}</h2>
          <h2 style={this.hasWord(T)}>{T}</h2>
          <h2 style={this.hasWord(U)}>{U}</h2>
          <h2 style={this.hasWord(V)}>{V}</h2>
          <h2 style={this.hasWord(W)}>{W}</h2>
          <h2 style={this.hasWord(X)}>{X}</h2>
          <h2 style={this.hasWord(Y)}>{Y}</h2>
          <h2 style={this.hasWord(Z)}>{Z}</h2>
        </div>
      </div>
    )
  }
}
