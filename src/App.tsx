import './App.css'
import { Menu, ShipDisplay, ShipOptions } from './components';
import React from 'react';

function App() {

  return (
    <div className="App">
        <Menu />
        <ShipOptions />
        <ShipDisplay />
    </div>
  )
}

export default App
