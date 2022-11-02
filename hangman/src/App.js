import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Solution } from './components/Solution'
import { Score } from './components/Score'
import { Letters } from './components/Letters'

function App() {
  return (
    <div className="App">
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
