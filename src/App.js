import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SidebarComponents/Sidebar'
import Game from './components/GameComponents/Game'


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Game />
    </div>
  );
}

export default App;
