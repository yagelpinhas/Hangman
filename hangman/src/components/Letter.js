import React, { Component } from 'react';

export class Letter extends Component {
    selectLetter=()=>{
        this.props.selectLetter(this.props.letter)
    }
    render(){
        return(<span class={this.props.cross==1? "cross" : "noncross"} onClick={this.selectLetter}>
            {this.props.letter}
        </span>)
    }
}