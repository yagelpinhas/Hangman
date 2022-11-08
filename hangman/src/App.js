import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Solution } from './components/Solution'
import { Score } from './components/Score'
import { Letters } from './components/Letters'
import { EndGame } from './components/EndGame';
import {Restart} from './components/Restart';

class App extends Component {
  constructor() {
      super()
      this.state={
          letterStatus : this.generateLetterStatuses(),
          solution : {
            word: "BYTES", hint: "ideal mood when u code"
          },
          score: 0
      }
  }
  validateEnd=()=>{
    if(this.state.score<0){
      return -1;
    }
    else if(this.state.solution.word.split("").every(letter=>this.state.letterStatus[letter]==true)){
      return 1;
    }
    else{
      return 0;
    }
  }
  generateLetterStatuses() { 
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  restart=()=>{
    let newLetterStatus=this.generateLetterStatuses();
    this.setState({letterStatus: newLetterStatus, score: 0})

  }
  selectLetter = letter =>{
    let currentLettersStatus = this.state.letterStatus
    currentLettersStatus[letter]=true
    let newScore = this.state.score
    if (this.state.solution.word.includes(letter)){
      newScore+=5
    }
    else{
      newScore-=20
    }
    this.setState({letterStatus: currentLettersStatus,score: newScore})
  }
  render() {
    return (
      <div className="App">
        <Restart restart={this.restart}/>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
        <EndGame word={this.state.solution.word} validateEnd={this.validateEnd}/>
      </div>
    );
  }
}

export default App;