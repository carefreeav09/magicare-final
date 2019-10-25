import React from 'react';
import logo from './assets/img/brand/logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         MAHA CHANDESWORI INFORMATION SYSTEM
        </p>
          <button className={'btn btn-primary'}> Login </button>
      </header>
    </div>
  );
}

export default App;
