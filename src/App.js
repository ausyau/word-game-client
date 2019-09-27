import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBarComponents/NavBar'
import GameMenu from './components/GameComponents/GameMenu'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <GameMenu />

    </div>
  );
}

export default App;
