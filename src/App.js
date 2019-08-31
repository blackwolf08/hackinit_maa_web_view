import React from 'react';
import './App.css';

import MusicPlayerUI from './components/MusicPlayerUI'

function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="meditate"></div>
        <MusicPlayerUI />
      </div>
    </div>
  );
}

export default App;
