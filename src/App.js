import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBarComponents/NavBar'
import Game from './components/GameComponents/Game'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Game/>
    </div>
  );
}

export default App;
