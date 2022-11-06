import React, { Component } from 'react';
import { Letter } from './Letter';

export class Solution extends Component {
    render(){
        //let underscores=["_"," ","_"," ","_"," ","_"]
        //{underscores.map((letter)=><span>{letter}</span>)}
        return <div>
            {this.props.solution.word.split("").map(letter_=><Letter letter= {this.props.letterStatus[letter_] ?letter_  :"_ "}/>)}
            <div className='hint'>{this.props.solution.hint}</div>
        </div>
    }
}